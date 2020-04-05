/** @jsx jsx */
import { jsx, Box, Text, Flex, Image, Input } from 'theme-ui';
import { withApollo } from '../lib/apollo'
import graphql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Markdown from 'react-markdown';
import Layout from '../components/Layout';
import Link from 'next/link';

const QUERY_ALL_PAGES = graphql`
  query HomePageQuery {
    home {
      blocks {
        ... on ComponentAtomsRichText {
          __typename
          value
        }
        ... on ComponentAtomsLearnMoreButton {
          __typename
          label
          linkURL
        }
        ... on ComponentAtomsImage {
          __typename
          caption
          linkURL
          image {
            url
          }
        }
        ... on ComponentAtomsDocument {
          __typename
          caption
          file {
            url
            ext
            size
          }
        }
      }
    }
  }
`;

const Page = () => {
  const { data } = useQuery(QUERY_ALL_PAGES, {
    variables: { slug: "home" }
  });

  return (
    <Layout>
      <Flex sx={{ m: 3, justifyContent: 'center' }}>
        <Box sx={{ variant: 'page.narrow', bg: 'paleRed', color: 'white', p: 3, maxWidth: 500, borderRadius: 5 }}>
          <Text sx={{ fontSize: [3, 4], textAlign: 'center', p: 2 }}>Get campaign updates</Text>
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
                boxShadow: '0px 5px 10px rgba(0,0,0,0.1)',
                fontSize: [3, 5],
                p: 3
              }}
            />
          </form>
        </Box>
      </Flex>
      <Box sx={{ px: [4, 4], py: [2, 3], variant: 'page.block' }}>
        <Box sx={{ variant: 'page.width' }}>
          {data?.home?.blocks?.map((block, i) => {
            if (block.__typename === 'ComponentAtomsRichText') {
              return (
                <Text key={i} variant='big'>
                  <Markdown source={block.value} />
                </Text>
              )
            }

            if (block.__typename === 'ComponentAtomsLearnMoreButton') {
              return (
                <Box key={i}>
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

            if (block.__typename === 'ComponentAtomsImage') {
              return (
                <Box key={i}>
                  <Box>
                    <Image src={process.env.CMS_URL + block.image.url} />
                    {block.caption && <Text sx={{ fontSize: 1, opacity: 0.5, pt: 2 }}>{block.caption}</Text>}
                  </Box>
                </Box>
              )
            }

            if (block.__typename === 'ComponentAtomsDocument') {
              return (
                <Box key={i}>
                  <Link href={(process.env.CMS_URL + block.file.url) || "/"}>
                    <Flex sx={{ border: '1px solid black', p: 3, flexDirection: 'column' }}>
                      <Text sx={{ fontSize: 1 }}>Document</Text>
                      <Text sx={{ fontSize: 2 }}>{block.caption}</Text>
                    </Flex>
                  </Link>
                </Box>
              )
            }
          })}
        </Box>
      </Box>
    </Layout>
  )
};

export default withApollo({ ssr: true })(Page)
