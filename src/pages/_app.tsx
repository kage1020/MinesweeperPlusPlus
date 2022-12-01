import type { AppProps } from 'next/app'

import Footer from '@components/Footer'
import GoogleAnalytics from '@components/GoogleAnalytics'
import Head from '@components/Head'
import { BackgroundScreen } from '@components/Screen'
import '@styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <BackgroundScreen />
      <Head />
      {process.env.NODE_ENV === 'production' && <GoogleAnalytics />}
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
