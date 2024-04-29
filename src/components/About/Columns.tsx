import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import { Description } from "./Description"
import { Skills } from "./Skills"
import styles from "@/styles/modules/About.module.scss"

const Columns = () => {
  const { ref, inView } = useInView({
    triggerOnce: false
  })
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      id="home"
      className={styles.information}
    >
      <Description />
      <Skills />
    </motion.div>
  )
}

export { Columns }
