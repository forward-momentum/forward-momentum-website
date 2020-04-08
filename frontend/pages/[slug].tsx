/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { withApollo } from '../lib/apollo'
import graphql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import { BlockStream } from '../components/blocks';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { PageFragment } from '../data/cms';

const QUERY_PAGE = graphql`
  query GenericPage($slug: String!) {
    pages(where: { slug: $slug }) {
      id
      title
      share_image {
        url
      }
      ...PageFragment 
    }
  }

  ${PageFragment}
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
    return <Layout>{null}</Layout>;
  }

  return (
    <Layout>
      <SEO
        websiteTitle={page.title}
        shareCardHeadline={page.title}
        shareCardImagePath={page.share_image?.url}
      />
      <BlockStream blocks={page.content} />
    </Layout>
  )
};

export default withApollo({ ssr: true })(Page)
