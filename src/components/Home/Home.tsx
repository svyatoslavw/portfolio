import { motion } from "framer-motion"

import { Greeting } from "./Greeting"
import { HeroIcon } from "./HeroIcon"
import styles from "@/styles/modules/Home.module.scss"

const Home = () => {
  return (
    <motion.div initial="hidden" animate="visible" id="home" className={styles.container}>
      <Greeting />
      <HeroIcon />
    </motion.div>
  )
}

export { Home }
