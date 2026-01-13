import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from 'react'

interface ThemeContextType {
    darkMode: boolean
    toggleDarkMode: () => void
}

const THEME_STORAGE_KEY = 'theme-preference'

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [darkMode, setDarkMode] = useState<boolean>(() => {
        const stored = localStorage.getItem(THEME_STORAGE_KEY)
        return stored === 'true'

        return window.matchMedia('(prefers-color-scheme: dark)').matches
    })

    useEffect(() => {
        const root = window.document.documentElement

        if (darkMode) {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
        localStorage.setItem(THEME_STORAGE_KEY, String(darkMode))
    }, [darkMode])

    const toggleDarkMode = () => setDarkMode((prev) => !prev)

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error('useTheme must be used within a Theme provider')
    }
    return context
}
