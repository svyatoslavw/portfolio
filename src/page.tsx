import { About } from "./components/About/About"
import { Github } from "./components/Github/Github"
import { Home } from "./components/Home/Home"
import { Projects } from "./components/Projects/Projects"
import { Stack } from "./components/Stack/Stack"
import styles from "@/styles/modules/UI.module.scss"

const Page = () => {
  return (
    <main className={styles.mainContainer}>
      <Home />
      <About />
      <Stack />
      <Projects />
      <Github />
    </main>
  )
}
export { Page }
