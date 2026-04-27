import { useEffect, useState, type ReactNode } from 'react'
import { ThemeContext, THEME_STORAGE_KEY } from './theme-context'

const getInitialTheme = (): boolean => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    if (stored !== null) return stored === 'true'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [darkMode, setDarkMode] = useState<boolean>(getInitialTheme)

    useEffect(() => {
        const root = document.documentElement
        root.classList.toggle('dark', darkMode)
        localStorage.setItem(THEME_STORAGE_KEY, String(darkMode))
    }, [darkMode])

    const toggleDarkMode = () => setDarkMode((prev) => !prev)

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    )
}
