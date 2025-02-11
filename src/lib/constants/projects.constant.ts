import { IProject } from "../types"

export const projects: IProject[] = [
  {
    name: "Resume Builder App",
    deployment: {
      isEnabled: true,
      href: "https://rndmcv.com"
    },
    image: "/projects/1.png",
    repository: "https://github.com/svyatoslavw/rndmcv-app",
    techStack: [
      "next.js",
      "typescript",
      "tailwindcss",
      "auth.js",
      "html2pdf",
      "ci-cd",
      "knip",
      "redux/toolkit",
      "google-analytics",
      "sentry",
      "prisma",
      "docker"
    ],
    about: "An innovative platform designed to enhance your job search experience."
  },
  {
    name: "Habit Tracker App",
    deployment: {
      isEnabled: true,
      href: "https://rndmtracker.vercel.app"
    },
    image: "/projects/4.png",
    repository: "https://github.com/svyatoslavw/track-it-app",
    techStack: [
      "next.js",
      "typescript",
      "tailwindcss",
      "auth.js",
      "ci-cd",
      "knip",
      "full-calendar",
      "prisma",
      "postgres"
    ],
    about: "Habit tracking app. AI generation, convenient management, detailed statistics."
  },
  {
    name: "Vue Project",
    deployment: {
      isEnabled: true,
      href: "https://vue-project-svyatoslavw.vercel.app"
    },
    image: "/projects/3.png",
    repository: "https://github.com/svyatoslavw/vue-project",
    techStack: ["vue", "typescript", "tailwindcss", "pinia", "shadcn-ui", "chart.js"],
    about:
      "A project where data is requested from a fake backend server via a third-party API, with support for routing, filtering, sorting, pagination, chart visualization, note-taking capabilities, game availability, and use of local storage."
  },
  {
    name: "Full Authorization",
    deployment: {
      isEnabled: false,
      href: ""
    },
    image: "/projects/2.png",
    repository: "https://github.com/svyatoslavw/full-authorization",
    about: "Authorization in several ways and confirmation by email or phone",
    techStack: [
      "next.js",
      "react-query",
      "tailwindcss",
      "zod",
      "nest.js",
      "prisma",
      "postgres",
      "react-hook-form",
      "jwt",
      "nodemailer",
      "twilio"
    ]
  },
  {
    name: "Forum App",
    deployment: {
      isEnabled: false,
      href: ""
    },
    image: "/projects/5.png",
    repository: "https://github.com/svyatoslavw/forum-app",
    about:
      "Forum Application with creating your own posts and polls with likes and comments, as well as chat on ws",
    techStack: [
      "next.js",
      "react-query",
      "tailwindcss",
      "zod",
      "nest.js",
      "prisma",
      "postgres",
      "react-hook-form"
    ]
  }
]
