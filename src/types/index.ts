import type { IconType } from 'react-icons'

// 1. Define valid icon keys as a const-derived type
export const ICON_MAP = {
    INSTAGRAM: 'BsInstagram',
    X_TWITTER: 'FaXTwitter',
    LINKEDIN: 'BsLinkedin',
    SOCCER: 'MdOutlineSportsSoccer',
    STORE: 'FaStore',
    CARD: 'FaIdCard',
    GITHUB: 'FaGithub',
    REACT: 'FaReact',
} as const

export type IconName = (typeof ICON_MAP)[keyof typeof ICON_MAP]

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
    position: {
        large: position
        small: position
    }
}

type position = 'top' | 'bottom'

export interface ProjectCardProps {
    projects: ProjectCard[]
}

export interface projectLink {
    link: string
    icon: IconType
}
