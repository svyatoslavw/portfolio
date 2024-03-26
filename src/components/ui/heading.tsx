import { useTranslation } from "react-i18next"

import styles from "@/styles/modules/UI.module.scss"

const Heading = ({ title }: { title: THeadingText }) => {
  const { t } = useTranslation("headings")
  return <h1 className={styles.heading}>{t(title)}</h1>
}

export { Heading }
