/** @jsx jsx */
import { jsx, Box, Flex, Styled } from 'theme-ui';
import { useQuery } from '@apollo/react-hooks';
import graphql from 'graphql-tag';

const QUERY_CONTACT_DETAILS = graphql`
  query ContactDetailsQuery {
    websiteInformation {
      contacts {
        name
        address
      }
    }
  }
`

const Contacts = () => {
  const { data, loading, error } = useQuery(QUERY_CONTACT_DETAILS)

  return (
    <Flex sx={{ flexWrap: 'wrap', justifyContent: 'flex-end' }}>
      {data?.websiteInformation?.contacts?.map(({ name, address }, i) => {
        return (
          <Box key={i} sx={{ pl: [4, 4, 5] }}>
            <div>{name}</div>
            <Styled.a href={`mailto:${address}`}>{address}</Styled.a>
          </Box>
        )
      })}
    </Flex>
  )
}

export default Contacts