import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

import styles from "@/styles/modules/About.module.scss"
import { slideInFromLeft } from "@/utits/animations/motion"

const Description = () => {
  const { t } = useTranslation("about")

  return (
    <motion.div variants={slideInFromLeft(0)} className={styles.description}>
      <p className={styles.title}>{t("title")}</p>
      <p>{t("description.p1")}</p>
      <p>{t("description.p2")}</p>
      <p>{t("description.p3")}</p>
    </motion.div>
  )
}

export { Description }
