/** @jsx jsx */
import { jsx, Heading, Box } from 'theme-ui';
import { withApollo } from '../lib/apollo'
import graphql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import DefaultPage from '../components/Page';
import { BlockStream } from '../components/blocks';
import Layout from '../components/Layout';

const QUERY_PAGE = graphql`
  query GenericPage($slug: String!) {
    pages(where: { slug: $slug }) {
      id
      title
      content {
        __typename
        ... on ComponentAtomsSignupStarter {
          title
        }
        ... on ComponentAtomsSignUpForm {
          title
        }
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
  const router = useRouter()
  const { slug = "home" } = router.query

  const { data, loading, error } = useQuery(QUERY_PAGE, {
    variables: {
      slug
    }
  });

  const page = data?.pages?.[0]

  if (!page) {
    return <Heading>loading...</Heading>;
  }

  return (
    <Layout>
      <Box sx={{ px: [4, 4], py: [2, 3], variant: 'page.block' }}>
        <Box sx={{ variant: 'page.width' }}>
          <BlockStream blocks={data?.pages?.[0]?.content} />
        </Box>
      </Box>
    </Layout>
  )
};

export default withApollo({ ssr: true })(Page)
