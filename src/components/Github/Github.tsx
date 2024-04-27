import GitHubCalendar from "react-github-calendar"

import { SectionContainer } from "../ui/section-container"

const Github = () => {
  return (
    <SectionContainer id="daysicode">
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
