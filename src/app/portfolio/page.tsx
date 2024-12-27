import { Metadata } from "next"

import { ProjectItem } from "@/components/ProjectList/ProjectItem"
import { Divider } from "@/components/ui"
import { projects } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Projects"
}

export default function PortfolioPage() {
  return (
    <div className="flex flex-col gap-10">
      {projects.map((project) => (
        <ProjectItem key={project.name} project={project} />
      ))}

      <Divider />
      <a
        href="https://github.com/svyatoslavw?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium underline underline-offset-2"
      >
        Watch more ↗️
      </a>
    </div>
  )
}
