/** @jsx jsx */
import { jsx, Box, Button, useColorMode } from 'theme-ui';
import { Fragment } from "react"
import SEO from './SEO';
import Contacts from './Contacts';
// @ts-ignore
import Logo from '../public/logo.svg';
import Link from 'next/link';

export default ({ children }) => {
  return (
    <Fragment>
      <SEO />
      <Header />
      {children}
      <Box sx={{ height: ['2em', '3em', '4em'] }} />
      <Footer />
    </Fragment>
  )
}

const Header = () => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <Box sx={{ textAlign: 'center', pt: [4, 5, 6], pb: [2, 4, 5], px: [4, 4], variant: 'page.block' }}>
      <Box sx={{ variant: 'page.width' }}>
        <Box className='logo' sx={{ maxWidth: ['100%', 400], display: 'inline-block' }}>
          <Link href='/'>
            <Logo sx={{
              width: '100%',
              cursor: 'pointer',
              '* path': {
                fill: 'red'
              }
            }} />
          </Link>
          <Button
            onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}>
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
          </Button>
        </Box>
      </Box>
    </Box>
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