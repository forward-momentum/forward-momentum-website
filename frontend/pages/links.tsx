/** @jsx jsx */
import { jsx, Styled, Heading } from 'theme-ui';
import { withApollo } from '../lib/apollo'
import graphql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { ContentWrapper } from '../components/elements';

const QUERY_SOCIAL_MEDIA = graphql`
  query socialMediaLinksQuery {
    externalLinks {
      name: Name
      url: URL
    }
  }
`;

const Page = () => {
  const { data, loading, error } = useQuery(QUERY_SOCIAL_MEDIA);

  if (loading || !data) {
    return <h1>loading...</h1>;
  }

  return (
    <ContentWrapper>
      <Heading>Links</Heading>
      <Styled.pre>{JSON.stringify({ data, loading, error }, null, 2)}</Styled.pre>
    </ContentWrapper>
  )
};

export default withApollo({ ssr: true })(Page)
