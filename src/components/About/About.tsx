import { Heading } from "../ui/heading"
import { SectionContainer } from "../ui/section-container"
import { Ticker } from "../ui/ticker"

import { Description } from "./Description"
import { Skills } from "./Skills"

const About = () => {
  return (
    <SectionContainer id="about">
      <Heading title="about" />
      <Description />
      <Skills />
      <Ticker />
    </SectionContainer>
  )
}

export { About }
