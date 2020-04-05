/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { Fragment } from "react"
import SEO from './SEO';
import Contacts from './Contacts';

export default ({ children }) => {
  return (
    <Fragment>
      <SEO />
      {children}
      <Footer />
    </Fragment>
  )
}

const Footer = () => {
  return (
    <Box sx={{ fontFamily: 'mono', textAlign: 'right', bg: 'red', color: 'white', p: [4, 4], variant: 'page.block' }}>
      <Box sx={{ variant: 'page.width' }}>
        <Box>Forward Momentum &copy; {new Date().getFullYear()}</Box>
        <Box sx={{ height: '1em' }} />
        <Contacts />
      </Box>
    </Box>
  )
}