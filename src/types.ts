export interface SkillGroup {
  title: string
  items: string[]
}

export interface ExperienceItem {
  company: string
  role: string
  location: string
  period: string
  bullets: string[]
}

export interface ProjectItem {
  name: string
  tagline: string
  description: string
  /** Short framing such as "Personal project" or "Portfolio project". */
  label: string
  role?: string
  technologies: string[]
  /** External repository URL. Leave empty to hide the GitHub button. */
  repoUrl: string
  /** External demo URL. Omit when there is none. */
  demoUrl?: string
  /** Optional link to a published paper (e.g. IEEE Xplore). */
  paperUrl?: string
}

export interface EducationItem {
  institution: string
  qualification: string
  location?: string
  period: string
  detail?: string
}

export interface TrainingItem {
  title: string
}

export interface ProfileLinks {
  email: string
  linkedin: string
  github: string
  /** Optional downloadable resume path; empty string hides the button. */
  resume: string
}
