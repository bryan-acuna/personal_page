import type { IconType } from 'react-icons'

// 1. Define valid icon keys as a const-derived type
export const VALID_ICONS = {
    INSTAGRAM: 'BsInstagram',
    X_TWITTER: 'FaXTwitter',
    LINKEDIN: 'BsLinkedin',
    SOCCER: 'MdOutlineSportsSoccer',
    STORE: 'FaStore',
    CARD: 'FaIdCard',
    GITHUB: 'FaGithub',
    REACT: 'FaReact',
} as const

export type IconName = (typeof VALID_ICONS)[keyof typeof VALID_ICONS]

export type ProjectCategory = 'Web' | 'Mobile' | 'Design'

export interface SocialIcon {
    icon: IconName
    url: string
    label: string
}

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
