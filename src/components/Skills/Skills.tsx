import { frontend_stack } from "@/constants/stack.contans"

import "./skills.css"

const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <h2 className="section__title">Skills</h2>
      <ul className="skills__list">
        {frontend_stack.map((skill) => (
          <li key={skill} className="skills__list-item btn btn--plain">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
