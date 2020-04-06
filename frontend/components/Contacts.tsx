/** @jsx jsx */
import { jsx, Box, Styled } from 'theme-ui';
import { useQuery } from '@apollo/react-hooks';
import graphql from 'graphql-tag';
import { Fragment } from 'react';

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
    <Fragment>
      {data?.websiteInformation?.contacts?.map(({ name, address }, i) => {
        return (
          <Box key={i} sx={{ px: [3, 4] }}>
            <div>{name}</div>
            <Styled.a href={`mailto:${address}`}>{address}</Styled.a>
          </Box>
        )
      })}
    </Fragment>
  )
}

export default Contacts