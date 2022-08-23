import Welcome from '../components/content/Welcome.jsx'
import About from '../components/content/About.jsx'
import Projects from '../components/content/Projects.jsx'
import Contact from '../components/content/Contact.jsx'
import { Navbar } from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export default function Main() {
  return (
    <>
      <Navbar />
      <Welcome />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
