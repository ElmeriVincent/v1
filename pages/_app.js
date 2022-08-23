import Head from 'next/head'
import '../styles/globals.css'

import Layout from '../components/Layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Elmeri Keitaanranta</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

