import type { IconType } from 'react-icons'

// Icon map for dynamic icon loading
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

export type Position = 'top' | 'bottom'

// Data types
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

export interface NavItem {
    id: string
    label: string
    href: string
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
        large: Position
        small: Position
    }
}

export interface ProjectLink {
    link: string
    icon: IconType
}

// Context types
export interface ThemeContextType {
    darkMode: boolean
    toggleDarkMode: () => void
}

// Component prop types
export interface LogoProps {
    name: string
}

export interface NavLinkProps {
    label: string
    id: string
    href: string
    isActive: boolean
    onClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void
}

export interface ProjectCardProps {
    projects: ProjectCard[]
}

export interface NavigationCirclesProps {
    page: string
}

export interface SocialLinksProps {
    icons: SocialIcon[]
}

export interface LoaderProps {
    isLoading: boolean
}
