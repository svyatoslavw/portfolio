import { Heading } from "../ui/heading"
import { SectionContainer } from "../ui/section-container"
import { Ticker } from "../ui/ticker"

import { ProjectList } from "./ProjectList"

const Projects = () => {
  return (
    <SectionContainer id="projects">
      <Heading title="projects" />
      <ProjectList />
      <Ticker />
    </SectionContainer>
  )
}

export { Projects }
