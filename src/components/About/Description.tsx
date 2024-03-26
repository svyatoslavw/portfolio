import { useTranslation } from "react-i18next"

import styles from "@/styles/modules/About.module.scss"

const Description = () => {
  const { t } = useTranslation("about")

  return (
    <div className={styles.description}>
      <p>{t("title")}</p>
      <p>{t("description.p1")}</p>
      <p>{t("description.p2")}</p>
      <p>{t("description.p3")}</p>
    </div>
  )
}

export { Description }
