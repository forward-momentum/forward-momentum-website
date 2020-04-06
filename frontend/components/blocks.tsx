/** @jsx jsx */
import { jsx, Box, Text, Flex, Image, Input, Heading } from 'theme-ui';
import Link from 'next/link';
import Markdown from 'react-markdown';
import { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import graphql from 'graphql-tag';
import slug from 'slug'
import SignUp from './SignupForm';

enum BlockType {
  'ComponentAtomsSignupStarter' = 'ComponentAtomsSignupStarter',
  'ComponentAtomsSignUpForm' = 'ComponentAtomsSignUpForm',
  'ComponentPageLinkBoxes' = 'ComponentPageLinkBoxes',
  'ComponentPageLinkBoxItem' = 'ComponentPageLinkBoxItem',
  'ComponentAtomsRichText' = 'ComponentAtomsRichText',
  'ComponentAtomsHtml' = 'ComponentAtomsHtml',
  'ComponentAtomsLearnMoreButton' = 'ComponentAtomsLearnMoreButton',
  'ComponentAtomsImage' = 'ComponentAtomsImage',
  'ComponentAtomsDocument' = 'ComponentAtomsDocument',
}

type Block = {
  __typename: BlockType
}

export const BlockStream: React.FC<{
  blocks: Block[]
}> = ({ blocks }) => {
  return (
    <Fragment>
      {blocks?.map((block, i) => {
        if (block.__typename === 'ComponentPageLinkBoxes') {
          return <BlockLinkBoxes key={i} block={block} />
        }

        if (block.__typename === 'ComponentPageLinkBoxItem') {
          return <BlockLinkBox key={i} block={block} />

        }

        if (block.__typename === 'ComponentAtomsSignupStarter') {
          return (
            <Box sx={{
              variant: 'page.narrow',
              maxWidth: 500,
              mb: 50
            }}>
              <BlockSignupStarter block={block} />
            </Box>
          )
        }

        if (block.__typename === 'ComponentAtomsSignUpForm') {
          return <BlockSignupForm block={block} />
        }

        if (block.__typename === 'ComponentAtomsRichText') {
          return <BlockRichText key={i} block={block} />
        }

        if (block.__typename === 'ComponentAtomsHtml') {
          return <BlockHTML key={i} block={block} />
        }

        if (block.__typename === 'ComponentAtomsLearnMoreButton') {
          return <BlockLearnMoreButton key={i} block={block} />
        }

        if (block.__typename === 'ComponentAtomsImage') {
          return <BlockImage key={i} block={block} />
        }

        if (block.__typename === 'ComponentAtomsDocument') {
          return <BlockDocument key={i} block={block} />
        }
      })}</Fragment>
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
    <Text variant='big'>
      <Markdown source={block.value} />
    </Text>
  )
}

export const BlockLearnMoreButton: React.FC<{
  block: any
}> = ({ block }) => {
  return (
    <Box>
      <Link href={block.linkUrl || "/"}>
        <Flex sx={{
          cursor: 'pointer', bg: 'white', py: [2, 3], px: [3, 5], border: '3px solid', borderColor: 'indigo', borderRadius: 8,
          justifyContent: 'space-between',
          color: 'secondary',
          fontSize: 3
        }}>
          <div>{block.label}</div>
          <div>⏩</div>
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
        <Image src={process.env.CMS_URL + block.image.url} />
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
      <Link href={(process.env.CMS_URL + block.file.url) || "/"}>
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
}> = ({ block }) => {
  const registeredSupportersCount = useRegisteredSupportersCount()
  return (
    <Box sx={{ textAlign: 'center', bg: 'paleRed', color: 'white', p: 3, borderRadius: 5 }}>
      <Text sx={{ fontSize: [3, 4], p: 2 }}>{block.title}</Text>
      {!!registeredSupportersCount && (
        <Text sx={{ fontSize: [2, 3], pb: 2, opacity: 0.7, textAlign: 'center' }}>
          <u>{registeredSupportersCount}</u> / 2500 registered supporters goal
        </Text>
      )}
      <form method='GET' action='/signup'>
        <Input
          name='email'
          type='email'
          placeholder='Enter your email address'
          sx={{
            textAlign: 'center',
            border: '3px solid',
            borderColor: 'indigo',
            color: 'black',
            bg: 'white',
            mt: 2,
            mb: -50,
            boxShadow: 'box',
            fontSize: [3, 4],
            p: 3
          }}
        />
      </form>
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

export const BlockLinkBoxes: React.FC<{
  block: any
}> = ({ block }) => {
  return (
    <Flex sx={{
      flexGrow: 1,
      flexBasis: 0,
      flexDirection: ['column', 'column', 'row'],
      justifyContent: 'start',
      alignContent: 'start',
      '.linkBox': {
        ':nth-child(1)': { bg: 'indigo' },
        ':nth-child(2)': { bg: 'yellow' },
        ':nth-child(3)': { bg: 'green' }
      }
    }}>
      {block?.LinkBoxItem.map(c => {
        return <BlockLinkBox block={c} />
      })}
    </Flex>
  )
}

export const BlockLinkBox: React.FC<{
  block: any
}> = ({ block }) => {
  const signupFormInReferencedPage = block.page?.content.find(pageBlock => pageBlock.__typename === BlockType.ComponentAtomsSignUpForm)

  return (
    <Box sx={{
      transition: 'all 0.2s ease',
      ':hover': {
        transform: 'translateY(-10px)'
      },
      m: 3,
      width: '100%'
    }}>
      {!!signupFormInReferencedPage ? (
        <BlockSignupStarter block={{ title: signupFormInReferencedPage.title }} />
      ) : (
          <Link href={block.alternativeURL || slug(block.page.slug)}>
            <Box className='linkBox' sx={{
              color: 'white',
              textAlign: 'center',
              cursor: 'pointer',
              borderRadius: 5,
              p: 3,
              boxShadow: 'box'
            }}>
              <Heading>{block.heading}</Heading>
              <Text>{block.summaryText}</Text>
            </Box>
          </Link>
        )}
    </Box>
  )
}
