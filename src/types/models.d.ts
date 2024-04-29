interface IProject {
  title: string
  cover: string
  link: string
  background: string
  stack: string[]
}

type TLabelLink = "home" | "about" | "stack" | "projects" | "experience"
type THeadingText = Exclude<TLabelLink, "home">

interface IHeaderLink {
  label: TLabelLink
  href: string
}

interface IExperience {
  title: string
  company_name: string
  icon: string
  iconBg: string
  date: string
  points: string[]
}
