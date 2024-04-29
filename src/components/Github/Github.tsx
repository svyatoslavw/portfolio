import GitHubCalendar from "react-github-calendar"
import { useTranslation } from "react-i18next"

import { SectionContainer } from "../ui/section-container"

import styles from "@/styles/modules/Github.module.scss"

const Github = () => {
  const { t } = useTranslation("headings")
  return (
    <SectionContainer id="daysicode">
      <h1 className={styles.heading}>{t("daysicode")}</h1>
      <GitHubCalendar
        username="svyatoslavw"
        blockSize={15}
        blockMargin={5}
        color="#a855f7"
        fontSize={16}
        style={{ margin: "0 auto" }}
      />
    </SectionContainer>
  )
}

export { Github }
