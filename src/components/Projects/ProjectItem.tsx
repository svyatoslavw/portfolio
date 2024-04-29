import clsx from "clsx"
import { type Variants, motion } from "framer-motion"

import { DirectionAwareHover } from "../ui/card-hover"

import styles from "@/styles/modules/Projects.module.scss"

interface IProjectItem {
  project: IProject
  inView: boolean
  animation: Variants
}

const ProjectItem = ({ project, animation, inView }: IProjectItem) => {
  return (
    <a href={project.link} target="_blank" key={project.link}>
      <motion.div
        className={clsx(styles.container, styles[project.background])}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animation}
      >
        <DirectionAwareHover imageUrl={project.cover} className={styles.project}>
          <h4>{project.title}</h4>
          <div className={styles.stack}>
            {project.stack.map((tech) => (
              <img loading="lazy" key={tech} width={25} height={25} alt={tech} src={tech} />
            ))}
          </div>
        </DirectionAwareHover>
      </motion.div>
    </a>
  )
}

export { ProjectItem }
