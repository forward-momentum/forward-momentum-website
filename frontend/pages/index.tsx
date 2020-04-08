/** @jsx jsx */
import { jsx } from 'theme-ui';
import { withApollo } from '../lib/apollo'
import graphql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Layout from '../components/Layout';
import { BlockStream } from '../components/blocks';
import { PageFragment } from '../data/cms';

const QUERY_ALL_PAGES = graphql`
  query {
    home {
      PagePicker {
        # Root page for rendering
        page {
          ...PageFragment 
        }
      }
    }
  }

  ${PageFragment}
`;

const Page = () => {
  const { data } = useQuery(QUERY_ALL_PAGES);

  if (!data?.home?.PagePicker?.page) {
    return <Layout>{null}</Layout>
  }

  return (
    <Layout>
      <BlockStream blocks={data.home.PagePicker.page.content} />
    </Layout>
  )
};

export default withApollo({ ssr: true })(Page)
