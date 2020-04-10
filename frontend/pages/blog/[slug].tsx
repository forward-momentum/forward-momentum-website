/** @jsx jsx */
import { jsx, Heading, Box, Image, Text } from 'theme-ui';
import graphql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import { withApollo } from '../../lib/apollo';
import SEO from '../../components/SEO';
import Layout from '../../components/Layout';
import { formatRelative } from 'date-fns';
import { filePath } from '../../data/file';
import Head from 'next/head';
import Markdown from 'react-markdown';

const BLOG_PAGE = graphql`
  query BlogPage($slug: String!) {
    blogs(where: { slug: $slug }) {
      slug
      title
      description
      created_at
      text
      image {
        url
      }
    }
  }
`;

const Page = () => {
  const router = useRouter()
  const { slug = "home" } = router.query

  const { data, loading, error } = useQuery(BLOG_PAGE, {
    variables: {
      slug
    }
  });

  const blog = data?.blogs?.[0]

  if (!blog) {
    return <Layout>{null}</Layout>;
  }

  const {
    created_at,
    title,
    image,
    text,
    description,
  } = blog

  return (
    <Layout>
      <SEO
        websiteTitle={blog.title}
        shareCardImagePath={blog.image?.url}
        shareCardHeadline={blog.title}
        shareCardDescription={blog.description}
      />
      <Head>
        <meta key='og:type' property="og:type" content="article" />
      </Head>
      <Box sx={{ py: [2, 3], variant: 'page.block' }}>
        <Box sx={{ variant: 'page.width' }}>
          <Heading sx={{
            textAlign: 'center',
            fontSize: [5, 6],
            // mt: [5],
            mb: [3, 4]
          }}>{title}</Heading>
          <Box sx={{
            textAlign: 'center',
            my: [3, 4]
          }}>
            {formatRelative(new Date(created_at), new Date())}
          </Box>
          {image && (
            <Box sx={{
              borderRadius: 5,
              boxShadow: 'box',
              width: '100%',
              height: 300,
              backgroundImage: `url(${filePath(image.url)})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              my: [3, 4]
            }} />
          )}
          <Text variant='big'>{description}</Text>
          <Text variant='medium'>
            <Markdown
              source={text}
              escapeHtml={false}
            />
          </Text>
        </Box>
      </Box>
    </Layout>
  )
};

export default withApollo({ ssr: true })(Page)
