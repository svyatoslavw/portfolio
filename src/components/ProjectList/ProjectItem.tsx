import Link from "next/link"

import { ImageCard, Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui"
import type { IProject } from "@/lib/types"

const ProjectItem = ({ project }: { project: IProject }) => {
  return (
    <div key={project.name} className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">{project.name}</h2>
      <ImageCard src={project.image} />
      <Tabs
        defaultValue={project.deployment.isEnabled ? "deployment" : "repository"}
        className="w-full"
      >
        <TabsList>
          <TabsTrigger disabled={!project.deployment.isEnabled} value="deployment">
            Deployment
          </TabsTrigger>
          <TabsTrigger value="repository">Repository</TabsTrigger>
          <TabsTrigger value="tech-stack">Tech Stack</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
        </TabsList>
        <TabsContent value="deployment">
          <Link
            href={project.deployment.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium underline underline-offset-2"
          >
            Deployment ↗️
          </Link>
        </TabsContent>
        <TabsContent value="repository">
          <Link
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium underline underline-offset-2"
          >
            Repository ↗️
          </Link>
        </TabsContent>
        <TabsContent value="tech-stack">
          <pre className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <code key={tech} className="rounded bg-secondary p-0.5 text-sm font-semibold">
                {tech}
              </code>
            ))}
          </pre>
        </TabsContent>
        <TabsContent value="about" className="text-sm font-semibold">
          {project.about}
        </TabsContent>
      </Tabs>
    </div>
  )
}

export { ProjectItem }
