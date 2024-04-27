import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import styles from "@/styles/modules/Home.module.scss"
import { slideInFromRight } from "@/utits/animations/motion"

const HeroIcon = () => {
  const { ref, inView } = useInView({
    triggerOnce: true
  })
  const variants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1
    }
  }

  return (
    <motion.div ref={ref} variants={slideInFromRight(0)} className={styles.icons}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 2 }}
      >
        <img src="/hero.svg" alt="work icons" draggable={false} height={450} width={510} />
      </motion.div>
    </motion.div>
  )
}

export { HeroIcon }
