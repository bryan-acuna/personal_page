export interface Letter {
    char: string
    img: string
    rotate: string
}

export interface SocialIcon {
    icon: string
    url: string
    label: string
}

export interface ThemeContextType {
    darkMode: boolean
    toggleDarkMode: () => void
}
