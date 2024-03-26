import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import styles from "@/styles/modules/Stack.module.scss"

interface IStackItem {
  src: string
  width: number
  height: number
  index: number
  text: string
}

const StackItem = ({ src, width, height, index, text }: IStackItem) => {
  const { ref, inView } = useInView({
    triggerOnce: true
  })

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const delay = 0.1
  return (
    <motion.div
      ref={ref}
      className={styles.item}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * delay }}
    >
      <img
        loading="lazy"
        src={src}
        width={width}
        height={height}
        alt="skill image"
        className={styles.image}
      />
      <span>{text}</span>
    </motion.div>
  )
}

export { StackItem }
