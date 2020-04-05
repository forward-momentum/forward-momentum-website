/** @jsx jsx */
import { jsx, Box, Grid, Styled } from 'theme-ui';
import { withApollo } from '../lib/apollo'
import { Fragment } from 'react';
// @ts-ignore
import Logo from '../public/logo.svg';
import graphql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Markdown from 'markdown-to-jsx';
import Layout from '../components/Layout';

const QUERY_ALL_PAGES = graphql`
  query HomePageQuery($slug: String!) {
    pages(where: { slug: $slug }) {
      content {
        ... on ComponentAtomsText {
          value
          __typename
        }
      }
    }
  }
`;

const Page = () => {
  const { data } = useQuery(QUERY_ALL_PAGES, {
    variables: { slug: "home" }
  });

  const page = data?.pages?.[0]

  return (
    <Layout>
      <Box sx={{ bg: 'paleRed', color: 'white', p: 3 }}>
        <Text><b>Reckon this is the right direction?</b> Get campaign updates and see how you can get involved.</Text>
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
              mb: -50,
              boxShadow: '0px 5px 10px rgba(0,0,0,0.1)',
              p: [2, 3]
            }}
          />
        </form>
      </Box>
        <Box sx={{ variant: 'page.width' }}>
          <Box sx={{ maxWidth: ['80%', 400] }}>
            <Logo />
          </Box>
        </Box>
      </Box>
      <Box sx={{ borderWidth: [0, 2, 3], borderStyle: 'solid', borderColor: 'red', px: [4, 4], py: [2, 3], variant: 'page.block' }}>
        <Box sx={{ variant: 'page.width' }}>
          {page?.content?.filter(b => b.__typename === 'ComponentAtomsText').map(block => {
            return (
              <Markdown>{block.value}</Markdown>
            )
          })}
        </Box>
      </Box>
    </Layout>
  )
};

export default withApollo({ ssr: true })(Page)
