interface IProject {
  title: string
  cover: string
  link: string
  background: string
  stack: string[]
}

type TLabelLink = "home" | "about" | "stack" | "projects"
type THeadingText = Exclude<TLabelLink, "home">

interface IHeaderLink {
  label: TLabelLink
  href: string
}
