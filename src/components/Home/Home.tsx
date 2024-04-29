import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import { Greeting } from "./Greeting"
import { HeroIcon } from "./HeroIcon"
import styles from "@/styles/modules/Home.module.scss"

const Home = () => {
  const { ref, inView } = useInView({
    triggerOnce: false
  })
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      id="home"
      className={styles.container}
    >
      <Greeting />
      <HeroIcon />
    </motion.div>
  )
}

export { Home }
