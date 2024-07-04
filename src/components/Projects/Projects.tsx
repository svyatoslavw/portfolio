import { frontend_projects } from "@/constants/projects.constants.js"

import ProjectCard from "./ProjectCard"
import "./projects.css"

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Projects</h2>

      <ul className="projects__grid">
        {frontend_projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </ul>
    </section>
  )
}

export default Projects
