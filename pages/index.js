import About from '../components/content/About.jsx'
import Projects from '../components/content/Projects.jsx'
import { Navbar } from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export default function Main() {
  return (
    <>
      <Navbar />
      <About />
      <Projects />
      <Footer />
    </>
  )
}
