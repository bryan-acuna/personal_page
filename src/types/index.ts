import type { IconType } from 'react-icons'

export type IconName =
    | 'BsInstagram'
    | 'FaXTwitter'
    | 'BsLinkedin'
    | 'MdOutlineSportsSoccer'
    | 'FaStore'
    | 'FaIdCard'

export interface Letter {
    char: string
    img: string
    rotate: string
}

export interface SocialIcon {
    icon: IconName
    url: string
    label: string
}

export interface ThemeContextType {
    darkMode: boolean
    toggleDarkMode: () => void
}

export interface ProjectCard {
    id: string
    icon: IconName
    title: string
    description: string
    technologies?: string[]
    githubUrl?: string
    liveUrl?: string
    imageUrl?: string
}

export type IconMap = Record<string, IconType>
