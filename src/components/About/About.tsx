import { Heading } from "../ui/heading"
import { SectionContainer } from "../ui/section-container"
import { Ticker } from "../ui/ticker"

import { Columns } from "./Columns"

const About = () => {
  return (
    <SectionContainer id="about">
      <Heading title="about" />
      <Columns />
      <Ticker />
    </SectionContainer>
  )
}

export { About }
