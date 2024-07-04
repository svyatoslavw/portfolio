export interface IProject {
  title: string
  cover: string
  link: string
  background: string
  stack: string[]
}

export const frontend_projects: IProject[] = [
  {
    title: "Forum App",
    cover: "/prog11.png",
    link: "https://github.com/svyatoslavw/hackhub",
    background: "bg-secondary",
    stack: ["Typescript", "NextJs", "Tailwind", "Shadcn", "NestJs", "Prisma", "Redux"]
  },
  {
    title: "Excalidraw Clone",
    cover: "/prog10.png",
    link: "https://github.com/svyatoslavw/excalidraw-clone",
    background: "bg-primary",
    stack: ["Typescript", "React", "Konva", "Sass"]
  },
  {
    title: "PC Builder",
    cover: "/prog9.png",
    link: "https://github.com/svyatoslavw/pc-builder",
    background: "bg-primary",
    stack: ["Typescript", "NextJs", "Supabase", "Tailwind", "Shadcn", "Redux"]
  },
  {
    title: "Food Delivery",
    cover: "/prog8.png",
    link: "https://github.com/svyatoslavw/food-delivery",
    background: "bg-secondary",
    stack: ["Typescript", "NextJs", "Supabase", "Tailwind", "Shadcn", "Jotai"]
  },
  {
    title: "Useful Developer Tools",
    cover: "/prog1.png",
    link: "https://github.com/svyatoslavw/developer-tools",
    background: "bg-secondary",
    stack: ["Typescript", "React", "Tailwind", "Shadcn"]
  },
  {
    title: "Fullstack Authorization",
    cover: "/prog2.png",
    link: "https://github.com/svyatoslavw/auth-nest-next",
    background: "bg-primary",
    stack: ["Typescript", "NextJs", "Tailwind", "Shadcn", "NestJs", "Prisma"]
  },
  {
    title: "Nike Clone",
    cover: "/prog5.png",
    link: "https://github.com/svyatoslavw/FRONT-END-NIKE",
    background: "bg-primary",
    stack: ["Typescript", "NextJs", "Tailwind", "NestJs", "Prisma"]
  },
  {
    title: "Spotify Clone",
    cover: "/prog6.png",
    link: "https://github.com/svyatoslavw/FRONT-SPOTIFY",
    background: "bg-secondary",
    stack: ["Typescript", "NextJs", "Tailwind", "Apollo", "NestJs", "GraphQL", "Zustand"]
  },

  {
    title: "Task Manager",
    cover: "/prog4.png",
    link: "https://github.com/svyatoslavw/TASK-MANAGER-JS",
    background: "bg-secondary",
    stack: ["Javascript", "React", "Tailwind", "Sass", "Redux"]
  },
  {
    title: "Note Application",
    cover: "/prog3.png",
    link: "https://github.com/svyatoslavw/note-app",
    background: "bg-primary",
    stack: ["Typescript", "Electron", "Tailwind"]
  }
]
