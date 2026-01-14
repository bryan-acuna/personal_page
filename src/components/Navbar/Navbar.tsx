<<<<<<< HEAD
import { useTheme } from '../../context/ThemeContext'

const Navbar = () => {
    const { darkMode, toggleDarkMode } = useTheme()
    return (
        <header
            className="w-full md:h-12 sm:h-14 h-18 flex justify-between items-center xl:px-36 
        lg:px-24 md:px-12 sm:px-6 px-4 fixed top-0 z-50 bg-white dark:bg-gray-900"
        >
            <div className="flex items-center sm:gap-x-4 gap-x-2">
                <a
                    href="#"
                    className="md:text-2xl text-lg sm:text-xl"
                    aria-label="Bryan Acuna - Back to top"
                >
                    Bryan Acuna
                </a>
                <button
                    onClick={toggleDarkMode}
                    aria-label={
                        darkMode
                            ? 'Switch to light mode'
                            : 'Switch to dark mode'
                    }
                    className="md:text-3xl sm:text-2xl text-xl text-gray-600 dark:text-gray-200 sm:ml-4 ml-2 cursor-pointer"
                >
                    <i
                        className={`${
                            darkMode ? 'fa-solid fa-sun' : 'fa-solid fa-moon'
                        }`}
                    ></i>
                </button>
            </div>
            <nav aria-label="Main Navigation">
                <ul className="flex items-center">
                    <li>
                        <a
                            className="relative group dark:text-yellow-500 text-red-500 lg:text-lg md:text-base text-sm font-light lg:mr-12 mr-8 tracking-wide "
                            href="#"
                        >
                            Home{' '}
                            <span
                                className="absolute -bottom-1 
                    left-0 w-full h-[1px] dark:bg-yellow-500 bg-red-500 
                    transform scale-x-0 group-hover:scale-x-100
                    transition duration-300 group-hover:origin-left origin-right"
                            ></span>
                        </a>
                    </li>
                    <li>
                        <a
                            className="relative group text-gray-600 dark:text-white lg:text-lg md:text-base text-sm font-light lg:mr-12 mr-8 tracking-wide"
                            href="#"
                        >
                            Projects
                            <span
                                className="absolute -bottom-1 
                    left-0 w-full h-[1px] bg-gray-600 dark:bg-white transform scale-x-0 group-hover:scale-x-100 transition duration-300
                    group-hover:origin-left origin-right"
                            ></span>
                        </a>
                    </li>
                    <li>
                        <a
                            className="relative group text-gray-600 dark:text-white lg:text-lg md:text-base text-sm font-light lg:mr-12 mr-8 tracking-wide "
                            href="#"
                        >
                            Contact
                            <span
                                className="absolute -bottom-1 left-0 w-full h-px bg-gray-600 dark:bg-white transform scale-x-0 
                        group-hover:scale-x-100 transition duration-300 group-hover:origin-left origin-right"
                            ></span>
                        </a>
                    </li>
=======
import React, { useRef, useState } from 'react'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'
import NavLink from './NavLink'
import { navigationItems } from '../../data'

export interface NavItem {
    id: string
    label: string
    href: string
}

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home')
    const isScrollingRef = useRef(false)

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        sectionId: string
    ) => {
        e.preventDefault()
        setActiveSection(sectionId)
        isScrollingRef.current = true
        const element = document.getElementById(sectionId)
        element?.scrollIntoView({ behavior: 'smooth' })

        setTimeout(() => {
            isScrollingRef.current = false
        }, 1000)
    }

    return (
        <header
            className="w-full md:h-12 sm:h-14 h-18 flex justify-between items-center xl:px-36 
        lg:px-24 md:px-12 sm:px-6 px-4 fixed top-0 z-50 bg-white dark:bg-gray-900 transition-colors duration-500"
        >
            <div className="flex items-center sm:gap-x-4 gap-x-2">
                <Logo name="Bryan Acuna" />
                <ThemeToggle />
            </div>
            <nav aria-label="Main Navigation">
                <ul className="flex items-center">
                    {navigationItems.map((item) => (
                        <NavLink
                            label={item.label}
                            onClick={handleNavClick}
                            id={item.id}
                            href={item.href}
                            isActive={item.id === activeSection}
                        />
                    ))}
>>>>>>> feature/navigation-circles
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
