import { VerticalTimeline } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

import { Heading } from "../ui/heading"
import { SectionContainer } from "../ui/section-container"

import { ExperienceCard } from "./ExperienceCard"
import { experiences } from "@/utits/constants/experience.constants"

const Experience = () => {
  return (
    <SectionContainer id="experience" className="">
      <Heading title="experience" />
      <VerticalTimeline lineColor="#3a0f77">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.date} experience={experience} />
        ))}
      </VerticalTimeline>
    </SectionContainer>
  )
}

export { Experience }
