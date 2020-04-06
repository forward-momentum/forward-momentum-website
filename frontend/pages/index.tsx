/** @jsx jsx */
import { jsx, Box, Text, Flex, Input } from 'theme-ui';
import { withApollo } from '../lib/apollo'
import graphql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Layout from '../components/Layout';
import { getRegisteredSupportersCount } from '../data/api';
import { BlockRichText, BlockLearnMoreButton, BlockImage, BlockDocument, BlockSignupStarter, BlockStream } from '../components/blocks';

const QUERY_ALL_PAGES = graphql`
  query HomePageQuery {
    home {
      blocks {
        ... on ComponentPageLinkBoxes {
          LinkBoxItem {
            heading
            summaryText
            alternativeURL
            summaryText
            page {
              slug
              content {
                ... on ComponentAtomsSignUpForm {
                  title
                  __typename
                }
              }
            }
          }
        }
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
        ... on ComponentAtomsHtml {
          html
        }
      }
    }
  }
`;

const Page = () => {
  const { data } = useQuery(QUERY_ALL_PAGES);

  return (
    <Layout>
      <Box sx={{ px: [4, 4], py: [2, 3], variant: 'page.block' }}>
        <Box sx={{ variant: 'page.width' }}>
          <BlockStream blocks={data?.home?.blocks} />
        </Box>
      </Box>
    </Layout>
  )
};

export default withApollo({ ssr: true })(Page)
