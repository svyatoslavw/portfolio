import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

import styles from "@/styles/modules/About.module.scss"
import { slideInFromRight } from "@/utits/animations/motion"

const Skills = () => {
  const { t } = useTranslation("skills")
  return (
    <motion.div variants={slideInFromRight(0)} className={styles.skills}>
      <h3 className={styles.title}>{t("title")}</h3>
      <ul>
        <li>{t("description.l1")}</li>
        <li>{t("description.l2")}</li>
        <li>{t("description.l3")}</li>
        <li>{t("description.l4")}</li>
        <li>{t("description.l5")}</li>
        <li>{t("description.l6")}</li>
      </ul>
    </motion.div>
  )
}

export { Skills }
