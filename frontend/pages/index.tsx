import { withApollo } from '../lib/apollo'
import graphql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const QUERY_ALL_PAGES = graphql`
  query AllPagesQuery {
    pages {
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
  const { data, loading, error } = useQuery(QUERY_ALL_PAGES);

  if (loading || !data) {
    return <h1>loading...</h1>;
  }

  return <pre>{JSON.stringify({ data, loading, error }, null, 2)}</pre>;
};

export default withApollo({ ssr: true })(Page)
