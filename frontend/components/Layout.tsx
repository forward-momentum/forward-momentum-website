/** @jsx jsx */
import { jsx, Box, Button, useColorMode, Styled, Text, Flex } from 'theme-ui';
import { Fragment } from "react"
import SEO from './SEO';
import Contacts from './Contacts';
// @ts-ignore
import Logo from '../public/logo.svg';
import Link from 'next/link';
import { IconWhatsapp, IconFacebook, IconTwitter, IconEnvelope } from './icons';
import { twitterShareUrl, emailShareUrl, facebookShareUrl, whatsAppShareUrl } from '../lib/social';

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
    <Fragment>
      {/* TODO: Navigation */}
    </Fragment>
  )
}

const Footer = () => {
  return (
    <Box sx={{ fontFamily: 'mono', textAlign: 'center', color: 'red', p: [4, 4], variant: 'page.block' }}>
      <Box sx={{ variant: 'page.width' }}>
        <SocialShareLinks />
        <Spacer />
        <Flex sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
          <Contacts />
        </Flex>
        <Spacer />
        <Box>Forward Momentum &copy; {new Date().getFullYear()}</Box>
      </Box>
    </Box>
  )
}

export const Spacer: React.FC<{
  lines?: number
  height?: number
}> = ({ lines = 2, height }) => <Box sx={{ height: height ? height : `${lines}em` }} />

export const SocialShareLinks = ({ width = ['50%', '25%', null], fontSize = [1, 3], color = null }) => {
  const share = {
    url: 'https://fwdmomentum.org',
    message: 'We need Momentum. But Momentum needs to change. We have a forward. Sign up and get involved.'
  }

  return (
    <Flex sx={{ flexWrap: 'wrap' }}>
      <Styled.a sx={{ width, color }} href={whatsAppShareUrl(share.url, share.message)}>
        <Box sx={{ cursor: 'pointer', textAlign: 'center', mb: [3, 0] }}>
          <IconWhatsapp sx={{ fontSize }} />
          <Text>Whatsapp</Text>
        </Box>
      </Styled.a>
      <Styled.a sx={{ width, color }} href={facebookShareUrl(share.url)}>
        <Box sx={{ cursor: 'pointer', textAlign: 'center', mb: [3, 0] }}>
          <IconFacebook sx={{ fontSize }} />
          <Text>Facebook</Text>
        </Box>
      </Styled.a>
      <Styled.a sx={{ width, color }} href={twitterShareUrl(share.url, share.message)}>
        <Box sx={{ cursor: 'pointer', textAlign: 'center' }}>
          <IconTwitter sx={{ fontSize }} />
          <Text>Twitter</Text>
        </Box>
      </Styled.a>
      <Styled.a sx={{ width, color }} href={emailShareUrl(share.url, "Have you heard about this campaign?", "Hey,\n\nForward Momentum is campaigning to reform Momentum and it sounds like an important campaign. Can you sign up?")}>
        <Box sx={{ cursor: 'pointer', textAlign: 'center' }}>
          <IconEnvelope sx={{ fontSize }} />
          <Text>Email</Text>
        </Box>
      </Styled.a>
    </Flex>
  )
}