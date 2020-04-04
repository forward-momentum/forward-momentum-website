import * as React from 'react'
import App from "../components/App"

export default ({ Component, pageProps }) => {
  return (
    <App>
      <Component {...pageProps} />
    </App>
  )
}