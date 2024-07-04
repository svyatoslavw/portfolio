import { About, Contact, Footer, Github, Header, Projects, ScrollToTop, Skills } from "./components"
import { useTheme } from "./contexts/theme"
import "./page.css"

const Page = () => {
  const { themeName } = useTheme()

  return (
    <div id="top" className={`${themeName} app`}>
      <Header />

      <About />
      <Projects />
      <Skills />
      <Github />
      <Contact />
      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default Page
