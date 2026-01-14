import { RiMoonLine, RiSunLine } from 'react-icons/ri'
import { useTheme } from '../../context/ThemeContext'

const ThemeToggle = () => {
    const { darkMode, toggleDarkMode } = useTheme()
    return (
        <button
            type="button"
            onClick={toggleDarkMode}
            aria-label={
                darkMode ? 'Switch to light mode' : 'Switch to dark mode'
            }
            className="md:text-3xl sm:text-2xl text-xl text-gray-600 dark:text-gray-200 sm:ml-4 ml-2
                        cursor-pointer"
        >
            {darkMode ? (
                <RiSunLine aria-hidden="true" />
            ) : (
                <RiMoonLine aria-hidden="true" />
            )}
        </button>
    )
}

export default ThemeToggle
