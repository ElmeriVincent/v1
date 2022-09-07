import Head from 'next/head'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Elmeri Keitaanranta</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Finnish developer who builds things for the web." />
        <link rel="canonical" href="https://elmerivincent.com/" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}