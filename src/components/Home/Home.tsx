import { motion } from "framer-motion"

import styles from "@/styles/modules/Home.module.scss"
import { Greeting } from "./Greeting"
import { ReactIcon } from "./ReactIcon"

const Home = () => {
  return (
    <motion.div initial="hidden" animate="visible" id="home" className={styles.container}>
      <Greeting />
      <ReactIcon />
    </motion.div>
  )
}

export { Home }

