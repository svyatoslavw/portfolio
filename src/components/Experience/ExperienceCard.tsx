import { useInView } from "react-intersection-observer"
import { VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

import styles from "@/styles/modules/Experience.module.scss"

const ExperienceCard = ({ experience }: { experience: IExperience }) => {
  const { ref, inView } = useInView({
    triggerOnce: false
  })
  return (
    <VerticalTimelineElement
      intersectionObserverProps={ref}
      visible={inView}
      contentStyle={{
        background: "linear-gradient(0deg, #3a0f77 0%, #5a0b98 100%)",
        borderBottom: "3px solid #562a94",
        color: "#fff",
        boxShadow: "none",
        borderRadius: "12px"
      }}
      contentArrowStyle={{ borderRight: "7px solid #5a0b98" }}
      date={experience.date}
      iconStyle={{ background: "#3a0f77", border: "none" }}
      icon={<img src={experience.icon} alt={experience.company_name} className="imageTimeline" />}
    >
      <div>
        <h3 className={styles.heading}>{experience.title}</h3>
        <p className={styles.name}>{experience.company_name}</p>
      </div>

      <ul className={styles.list}>
        {experience.points.map((point, index) => (
          <li key={point.length + index}>{point}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

export { ExperienceCard }
