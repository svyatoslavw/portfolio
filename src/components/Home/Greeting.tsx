import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { TypeAnimation } from "react-type-animation"

import styles from "@/styles/modules/Home.module.scss"
import { slideInFromLeft } from "@/utits/animations/motion"

const Greeting = () => {
  const { t } = useTranslation("main")

  return (
    <motion.div variants={slideInFromLeft(0)} className={styles.info}>
      <h2 className={styles.hi}>{t("greeting")}</h2>
      <TypeAnimation
        sequence={["Sviatoslav.", 3000, ""]}
        wrapper="strong"
        cursor={true}
        repeat={Infinity}
      />
      <p className={styles.description}>
        {t("aspiring")} <span>Frontend Developer</span> {t("ideas")}
      </p>
    </motion.div>
  )
}

export { Greeting }
