import { useTranslation } from "react-i18next"

import styles from "@/styles/modules/About.module.scss"

const Skills = () => {
  const { t } = useTranslation("skills")
  return (
    <div className={styles.skills}>
      <h3>{t("title")}</h3>
      <ul>
        <li>{t("description.l1")}</li>
        <li>{t("description.l2")}</li>
        <li>{t("description.l3")}</li>
        <li>{t("description.l4")}</li>
        <li>{t("description.l5")}</li>
        <li>{t("description.l6")}</li>
      </ul>
    </div>
  )
}

export { Skills }
