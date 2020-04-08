/** @jsx jsx */
import { jsx, Box, Text, Flex, Image, Input, Heading, Button, Styled } from 'theme-ui';
import Link from 'next/link';
import { Fragment, useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import graphql from 'graphql-tag';
import SignUp from './SignupForm';
import { formatRelative } from 'date-fns'
import { filePath } from '../data/file';
// @ts-ignore
import ArrowBtn from '../public/arrow.svg'
// @ts-ignore
import Logo from '../public/logo.svg';
import YouTube from 'react-youtube';
import {
  useWindowHeight,
} from '@react-hook/window-size'
import Markdown from './Markdown';

enum BlockType {
  'ComponentSpecialSpecialVideoBlOck' = 'ComponentSpecialSpecialVideoBlOck',
  'ComponentSpecialPageSectionPicker' = 'ComponentSpecialPageSectionPicker',
  'ComponentPageBlogList' = 'ComponentPageBlogList',
  'ComponentOrganismsSignupStarter' = 'ComponentOrganismsSignupStarter',
  'ComponentOrganismsSignUpForm' = 'ComponentOrganismsSignUpForm',
  'ComponentAtomsRichText' = 'ComponentAtomsRichText',
  'ComponentAtomsHtml' = 'ComponentAtomsHtml',
  'ComponentOrganismsLearnMoreButton' = 'ComponentOrganismsLearnMoreButton',
  'ComponentAtomsImage' = 'ComponentAtomsImage',
  'ComponentAtomsHeading' = 'ComponentAtomsHeading',
  'ComponentAtomsDocument' = 'ComponentAtomsDocument',
}

type Block = {
  __typename: BlockType
}

const PaddedWrapper = ({ children }) => (
  <Box sx={{ py: [2, 3], variant: 'page.block' }}>
    <Box sx={{ variant: 'page.width' }}>
      {children}
    </Box>
  </Box>
)

export const BlockStream: React.FC<{
  blocks: Block[]
  wrap?: boolean
}> = ({ blocks, wrap = true }) => {
  const Wrapper = ({ children }) => wrap ? (
    <PaddedWrapper>{children}</PaddedWrapper>
  ) : (
      <Fragment>{children}</Fragment>
    )

  return (
    <Fragment>
      {blocks?.map((block, i) => {
        let ch
        if (
          block.__typename === 'ComponentPageBlogList'
        ) {
          ch = <BlockBlogList key={i} block={block} />
        } else if (
          block.__typename === 'ComponentOrganismsSignupStarter'
        ) {
          ch = (
            <Box sx={{
              variant: 'page.narrow',
              maxWidth: 550,
              my: [4, 5]
            }}>
              <BlockSignupStarter block={block} />
            </Box>
          )
        } else if (
          block.__typename === 'ComponentSpecialSpecialVideoBlOck'
        ) {
          ch = <BlockSpecialVideo block={block} />
        } else if (
          block.__typename === 'ComponentOrganismsSignUpForm'
        ) {
          ch = <BlockSignupForm block={block} />
        } else if (
          block.__typename === 'ComponentAtomsHeading'
        ) {
          ch = <BlockHeading key={i} block={block} />
        } else if (
          block.__typename === 'ComponentAtomsRichText'
        ) {
          ch = <BlockRichText key={i} block={block} />
        } else if (
          block.__typename === 'ComponentAtomsHtml'
        ) {
          ch = <BlockHTML key={i} block={block} />
        } else if (
          block.__typename === 'ComponentOrganismsLearnMoreButton'
        ) {
          ch = <BlockLearnMoreButton key={i} block={block} />
        } else if (
          block.__typename === 'ComponentAtomsImage'
        ) {
          ch = <BlockImage key={i} block={block} />
        } else if (
          block.__typename === 'ComponentAtomsDocument'
        ) {
          ch = <BlockDocument key={i} block={block} />
        } else if (
          block.__typename === 'ComponentSpecialPageSectionPicker'
        ) {
          ch = <BlockPageSection key={i} block={block} />
        } else if (
          process.env.NODE_ENV !== 'production'
        ) {
          ch = <pre key={i}>{JSON.stringify(blocks, null, 2)}</pre>
        }

        if (
          wrap && !['ComponentSpecialPageSectionPicker', 'ComponentSpecialSpecialVideoBlOck'].includes(block.__typename)
        ) {
          return <Wrapper key={i}>{ch}</Wrapper>
        } else {
          return ch
        }
      })}</Fragment>
  )
}

export const BlockSpecialVideo: React.FC<{
  block: any
}> = ({ block: { youtubeVideoID, backgroundImage } }) => {
  const [playingVideo, setPlayingVideo] = useState(false)
  const screenHeight = useWindowHeight()

  let sx: any = {}
  if (!!backgroundImage) {
    sx = {
      backgroundImage: `url(${filePath(backgroundImage.url)})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }
  }

  useEffect(() => {
    try {
      if (playingVideo) {
        // @ts-ignore
        gtag('event', 'watchHomepageVideo', {
          'event_category': 'website',
          'event_label': 'Watched the campaign video'
        });
      }
    } catch (e) {
      console.error("Google analytics was not set up")
    }
  }, [playingVideo])

  return (
    <Fragment>
      <Box sx={{
        bg: 'red',
        color: 'white',
        textAlign: 'center',
        ...sx
      }}>
        {playingVideo ? (
          <YouTube videoId={youtubeVideoID} opts={{
            width: `100%`,
            height: `${Math[screenHeight > 500 ? 'max' : 'min'](screenHeight, 500)}`
          }} />
        ) : (
            <Box sx={{
              p: [5, 6, 6, 7],
            }}>
              <Logo sx={{
                width: '100%',
                cursor: 'pointer',
                '* path': {
                  fill: 'white'
                }
              }} />
              {youtubeVideoID && (
                <Text
                  onClick={() => void setPlayingVideo(true)}
                  sx={{
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    fontStyle: 'italic',
                    fontSize: [2, 3],
                    fontWeight: 700
                  }}>
                  Play video >>
                </Text>
              )}
            </Box>
          )}
      </Box>
    </Fragment>
  )
}

export const BlockPageSection: React.FC<{
  block: any
}> = ({ block }) => {
  const { content, background, backgroundImage, text, textAlign } = block.section
  return (
    <Box sx={{
      color: text === 'light' ? 'white' : text !== 'dark' ? text : null,
      [backgroundImage ? 'background' : 'bg']: backgroundImage ? `url(${filePath(backgroundImage?.url)})` : background,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      textAlign,
      py: [3, 4, 5]
    }}>
      <PaddedWrapper>
        <BlockStream blocks={content} wrap={false} />
      </PaddedWrapper>
    </Box>
  )
}

export const BlockHeading: React.FC<{
  block: any
}> = ({ block }) => {
  return (
    <Heading variant={block.Size} sx={{ color: block.color }}>
      {block.text}
    </Heading>
  )
}

export const BlockHTML: React.FC<{
  block: any
}> = ({ block }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: block.html }} />
  )
}

export const BlockRichText: React.FC<{
  block: any
}> = ({ block }) => {
  return (
    <Text variant='medium'>
      <Markdown source={block.value} />
    </Text>
  )
}

export const BlockLearnMoreButton: React.FC<{
  block: any
}> = ({ block: {
  label,
  linkURL,
  page,
  textColor,
  backgroundColor,
} }) => {
    return (
      <Box>
        <Link href={page?.slug || linkURL || "/"}>
          <Flex sx={{
            cursor: 'pointer',
            justifyContent: 'center',
            alignContent: 'center',
            fontSize: 3,
            verticalAlign: 'middle',
          }}>
            <Box sx={{
              backgroundColor,
              color: textColor,
              mr: 2,
              fontWeight: 700,
              fontStyle: 'italic',
              px: [2, 3],
              py: [1, 2],
              verticalAlign: 'middle'
            }}>
              {label}
            </Box>
            <Box sx={{
              backgroundColor,
              width: '2.5em',
              px: [1],
              verticalAlign: 'middle'
            }}>
              <ArrowBtn sx={{
                width: '100%',
                cursor: 'pointer',
                '*, * path': {
                  fill: `${textColor} !important`
                }
              }} />
            </Box>
          </Flex>
        </Link>
      </Box>
    )
  }
export const BlockImage: React.FC<{
  block: any
}> = ({ block }) => {
  return (
    <Box>
      <Box>
        <Image src={filePath(block.image.url)} />
        {block.caption && <Text sx={{ fontSize: 1, opacity: 0.5, pt: 2 }}>{block.caption}</Text>}
      </Box>
    </Box>
  )
}

export const BlockDocument: React.FC<{
  block: any
}> = ({ block }) => {
  return (
    <Box>
      <Link href={(filePath(block.file.url)) || "/"}>
        <Flex sx={{ border: '1px solid black', p: 3, flexDirection: 'column' }}>
          <Text sx={{ fontSize: 1 }}>Document</Text>
          <Text sx={{ fontSize: 2 }}>{block.caption}</Text>
        </Flex>
      </Link>
    </Box>
  )
}

const QUERY_ALL_PAGES = graphql`
  query RegisteredSupportersCount {
    registeredSupportersCount @client
  }
`;

const useRegisteredSupportersCount = (): (undefined | number) => {
  const { data, error, loading } = useQuery(QUERY_ALL_PAGES);
  if (!data) return
  return data.registeredSupportersCount as number
}

export const BlockSignupStarter: React.FC<{
  block: any
}> = ({ block: { bg, textcolor, description } }) => {
  const registeredSupportersCount = useRegisteredSupportersCount()
  return (
    <Box sx={{
      textAlign: 'center',
      bg,
      color: textcolor,
      p: 3,
    }}>
      <Heading sx={{
        fontWeight: 700,
        fontStyle: 'italic'
      }}>{description}</Heading>
      <form method='GET' action='/signup'>
        <Flex sx={{
          cursor: 'pointer',
          justifyContent: 'center',
          alignContent: 'center',
          fontSize: 3,
          verticalAlign: 'middle',
          my: 3,
        }}>
          <Input
            name='email'
            type='email'
            placeholder='Enter your email address'
            sx={{
              // textAlign: 'center',
              mr: 2,
              // fontWeight: 700,
              // fontStyle: 'italic',
              px: [2, 3],
              py: [1, 2],
              verticalAlign: 'middle',
              border: '3px solid',
              borderColor: textcolor,
              bg: 'white',
              color: 'black',
              fontSize: [3, 4],
              borderRadius: 0
            }}
          />
          <Button type='submit' sx={{
            // backgroundColor,
            width: '3em',
            px: [2],
            py: [0],
            verticalAlign: 'middle',
            border: '1px solid white',
            bg: 'transparent',
            borderRadius: '0'
          }}>
            <ArrowBtn sx={{
              width: '100%',
              cursor: 'pointer',
              '*, * path': {
                fill: `white !important`
              }
            }} />
          </Button>
        </Flex>
      </form>
      {!!registeredSupportersCount && (
        <Text sx={{ fontSize: [2, 3], pb: 2, textAlign: 'center' }}>
          <u>{registeredSupportersCount}</u> / 2500 registered supporters goal
        </Text>
      )}
    </Box>
  )
}

export const BlockSignupForm: React.FC<{
  block: any
}> = ({
  block
}) => {
    return (
      <SignUp />
    )
  }

const QUERY_BLOG_PAGES = graphql`
  query RegisteredSupportersCount {
    blogs {
      id
      slug
      title
      description
      created_at
      image {
        url
      }   
    }
  }
`;

const useBlogList = () => {
  const { data, error, loading } = useQuery(QUERY_BLOG_PAGES);
  if (!data) return
  return data.blogs
}

export const BlockBlogList: React.FC<{
  block: any
}> = ({ block }) => {
  const articles = useBlogList()
  return (
    <Fragment>
      {articles?.map((a) => (
        <BlogPreview key={a.id} article={a} />
      ))}
    </Fragment>
  )
}

export const BlogPreview: React.FC<{
  article: {
    slug: string
    title: string
    description: string
    created_at: string
    text: string
    image: {
      url: string
    }
  }
}> = ({
  article: {
    slug,
    title,
    description,
    created_at,
    image
  }
}) => {
    const link = {
      href: `/blog/[slug]`,
      as: `/blog/${slug}`
    }
    return (
      <Link {...link}>
        <Flex sx={{
          flexDirection: ['column', 'row'],
          justifyContent: 'start',
          alignContent: 'start',
          cursor: 'pointer',
          variant: 'hoverable'
        }}>
          {image && (
            <Box sx={{
              borderRadius: 5,
              boxShadow: 'box',
              width: ['100%', '20%'],
              height: [166, 150],
              backgroundImage: `url(${filePath(image.url)})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              mb: [3, 4],
              mr: [0, 3]
            }} />
          )}
          <Box>
            <Box sx={{
              textAlign: 'left',
              opacity: 0.5,
              my: 1,
            }}>
              {formatRelative(new Date(created_at), new Date())}
            </Box>
            <Heading sx={{
              variant: 'h3',
              textAlign: 'left',
              fontSize: [3, 4],
              my: 1
            }}>{title}</Heading>
            <Text sx={{
              my: 1
            }}>{description}</Text>
            <Link {...link}>
              <Styled.a>Read on &rarr;</Styled.a>
            </Link>
          </Box>
        </Flex>
      </Link>
    )
  }