import { useInView } from "react-intersection-observer"

import { ProjectItem } from "./ProjectItem"
import styles from "@/styles/modules/Projects.module.scss"
import { slideInFromLeft, slideInFromRight } from "@/utits/animations/motion"
import { frontend_projects } from "@/utits/constants/projects.constants"

const ProjectList = () => {
  const { ref, inView } = useInView({
    triggerOnce: false
  })
  return (
    <article className={styles.projects} ref={ref}>
      {frontend_projects.map((project, index) => {
        const isLeftColumn = index % 2 === 0
        const animation = isLeftColumn ? slideInFromLeft(index / 10) : slideInFromRight(index / 10)
        return (
          <ProjectItem
            animation={animation}
            inView={inView}
            project={project}
            key={project.cover}
          />
        )
      })}
    </article>
  )
}

export { ProjectList }
