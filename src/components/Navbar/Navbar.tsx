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
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
