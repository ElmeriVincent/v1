import Head from 'next/head'

import Welcome from '../components/content/Welcome.jsx'
import About from '../components/content/About.jsx'
import Projects from '../components/content/Projects.jsx'
import Contact from '../components/content/Contact.jsx'

export default function Main() {
  return (
    <>
      <Head>
        <title>Elmeri Keitaanranta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Welcome />
      <About />
      <Projects />
      <Contact />
    </>
  )
}
