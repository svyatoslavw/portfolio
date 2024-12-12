export interface IProject {
  name: string
  image: string
  deployment: {
    isEnabled: boolean
    href: string
  }
  repository: string
  techStack: string[]
  about: string
}
