/** @jsx jsx */
import { jsx, Box, Grid, Styled } from 'theme-ui';
import { withApollo } from '../lib/apollo'
import { Fragment } from 'react';
// @ts-ignore
import Logo from '../public/logo.svg';
import graphql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Markdown from 'markdown-to-jsx';

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
    <Fragment>
      <Box sx={{ textAlign: 'right', bg: 'red', color: 'white', p: [4, 4], variant: 'page.block' }}>
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
      <Box sx={{ fontFamily: 'mono', textAlign: 'right', bg: 'red', color: 'white', p: [4, 4], variant: 'page.block' }}>
        <Box sx={{ variant: 'page.width' }}>
          <Box>Forward Momentum &copy; {new Date().getFullYear()}</Box>
          <Box sx={{ height: '1em' }} />
          <Grid
            gap={1}
            columns={[1, 2]}>
            <Box>
              <div>Get involved</div>
              <Styled.a href='mailto:hello@fwdmomentum.org'>hello@fwdmomentum.org</Styled.a>
            </Box>
            <Box>
              <div>Press enquiries</div>
              <Styled.a href='mailto:comms@fwdmomentum.org'>comms@fwdmomentum.org</Styled.a>
            </Box>
          </Grid>
        </Box>
      </Box>
    </Fragment>
  )
};

export default withApollo({ ssr: true })(Page)
