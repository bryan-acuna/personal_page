export type PageId = 'home' | 'projects' | 'resume' | 'contact'

export interface Project {
    num: string
    title: string
    description: string
    tags: string[]
}

export interface Job {
    role: string
    company: string
    date: string
    bullets: string[]
}

export interface Stat {
    value: string
    suffix?: string
    label: string
}

export interface SkillGroup {
    label: string
    items: string
}
