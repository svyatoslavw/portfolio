import React from "react"

import { About } from "./components/About/About"
import { Experience } from "./components/Experience/Experience"
import { Github } from "./components/Github/Github"
import { Home } from "./components/Home/Home"
import { Projects } from "./components/Projects/Projects"
import { Stack } from "./components/Stack/Stack"
import { Preloader } from "./components/ui/preloader"
import styles from "@/styles/modules/UI.module.scss"

const Page = () => {
  const [isLoad, setIsLoad] = React.useState(true)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoad(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Preloader isLoad={isLoad} />
      <main className={styles.mainContainer}>
        <Home />
        <About />
        <Experience />
        <Stack />
        <Projects />
        <Github />
      </main>
    </>
  )
}
export { Page }
