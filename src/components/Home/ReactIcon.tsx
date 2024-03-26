import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import styles from "@/styles/modules/Home.module.scss"
import { slideInFromRight } from "@/utits/animations/motion"

const ReactIcon = () => {
  const { ref, inView } = useInView({
    triggerOnce: true
  })
  const variants = {
    hidden: {
      rotate: 0
    },
    visible: {
      rotate: 360,
      transition: { duration: 20, repeat: Infinity }
    }
  }

  return (
    <motion.div ref={ref} variants={slideInFromRight(0)} className={styles.icons}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 20, repeat: Infinity }}
      >
        <img src="/react-dark.png" alt="work icons" height={400} width={450} />
      </motion.div>
    </motion.div>
  )
}

export { ReactIcon }
