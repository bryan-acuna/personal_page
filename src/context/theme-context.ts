import { createContext } from 'react'

export interface ThemeContextType {
    darkMode: boolean
    toggleDarkMode: () => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
    undefined
)

export const THEME_STORAGE_KEY = 'theme-preference'
