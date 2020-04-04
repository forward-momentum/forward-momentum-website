/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'
import { withApollo } from '../lib/apollo'
import graphql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import DefaultPage from '../components/Page';

const QUERY_ALL_PAGES = graphql`
  query AllPagesQuery($slug: String!) {
    pages(where: { slug: $slug }) {
      title
      share_image {
        url
      }
      content {
        ... on ComponentAtomsText {
          value
        }
      }
      tags {
        name
      }
    }
  }
`;

const Page = () => {
  const { data, loading, error } = useQuery(QUERY_ALL_PAGES, {
    variables: {
      slug: "home"
    }
  });

  const page = data?.pages?.[0]

  if (!page) {
    return <Heading>loading...</Heading>;
  }

  return <DefaultPage page={page} />
};

export default withApollo({ ssr: true })(Page)
