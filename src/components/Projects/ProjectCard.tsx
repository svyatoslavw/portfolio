import { IProject } from "@/constants/projects.constants"

import "./projectCard.css"

const ProjectCard = ({ project }: { project: IProject }) => (
  <div className="project">
    <h3 className="heading-text">{project.title}</h3>

    <p className="project__description">
      <a href={project.link} aria-label="source code">
        <img
          loading="lazy"
          src={project.cover}
          alt={project.title}
          width={240}
          height={135}
          className="project__stack-image"
        />
      </a>
    </p>
    <ul className="project__stack">
      {project.stack.map((item) => (
        <li key={item} className="project__stack-item">
          {item}
        </li>
      ))}
    </ul>
  </div>
)

export default ProjectCard
