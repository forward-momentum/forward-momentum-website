/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { withApollo } from '../lib/apollo'
import graphql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';

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

  if (loading || !data) {
    return <h1>loading...</h1>;
  }

  const page = data?.pages?.[0]

  return (
    <div>
      <Styled.h1>{page?.title}</Styled.h1>
      {/* <Styled.pre>{JSON.stringify({ data, loading, error }, null, 2)}</Styled.pre> */}
      {page?.share_image && <Styled.img src={process.env.CMS_URL + page.share_image.url} sx={{
        width: 200,
      }} />}
      {page?.content.map((d, i) =>
        <div key={i} dangerouslySetInnerHTML={{ __html: d.value }} />
      )}
    </div>
  );
};

export default withApollo({ ssr: true })(Page)
