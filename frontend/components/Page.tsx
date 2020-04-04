/** @jsx jsx */
import { jsx, Heading, Image, Styled } from 'theme-ui';
import { ContentWrapper } from './elements';

const DefaultPage: React.FC<{
  page: any
}> = ({ page }) => {
  return (
    <ContentWrapper>
      <Heading>{page?.title}</Heading>
      {/* <Styled.pre>{JSON.stringify({ data, loading, error }, null, 2)}</Styled.pre> */}
      {page?.share_image && <Image src={process.env.CMS_URL + page.share_image.url} sx={{
        width: 200,
      }} />}
      {page?.content.map((d, i) =>
        <div key={i} dangerouslySetInnerHTML={{ __html: d.value }} />
      )}
    </ContentWrapper>
  )
}

export default DefaultPage