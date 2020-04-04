import * as React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'

const Header = () => {
  return (
    <React.Fragment>
      <Link href='/'>Forward Momentum</Link>
      <Link href='/links'>External links</Link>
    </React.Fragment>
  )
}

export default withRouter(Header)