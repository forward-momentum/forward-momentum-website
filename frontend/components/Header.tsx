import * as React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { useColorMode, Button, Styled } from 'theme-ui';
import { ContentWrapper } from './elements';

const Header = () => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <ContentWrapper>
      <Link href='/'><Styled.a>Forward Momentum</Styled.a></Link>
      <Link href='/links'><Styled.a>External links</Styled.a></Link>
      <Button
        onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </ContentWrapper>
  )
}

export default withRouter(Header)