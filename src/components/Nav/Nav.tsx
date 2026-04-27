import { useState } from 'react'
import clsx from 'clsx'
import { Moon, Sun } from 'lucide-react'
import styles from './Nav.module.css'
import type { PageId } from '../../types'
import { useTheme } from '../../context/useTheme'

interface NavProps {
    current: PageId
    onNavigate: (page: PageId) => void
}

const links: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
]

const Nav = ({ current, onNavigate }: NavProps) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const { darkMode, toggleDarkMode } = useTheme()

    const go = (id: PageId) => {
        onNavigate(id)
        setMenuOpen(false)
    }

    return (
        <>
            <nav className={styles.nav}>
                <button
                    type="button"
                    className={styles.logo}
                    onClick={() => go('home')}
                    aria-label="Bryan Acuna — go to home"
                >
                    Bryan <span className={styles.accent}>Acuna</span>
                </button>

                {/* Desktop links */}
                <ul className={styles.links}>
                    {links.map(({ id, label }) => (
                        <li key={id}>
                            <button
                                type="button"
                                className={clsx(styles.link, {
                                    [styles.active]: current === id,
                                })}
                                aria-current={current === id ? 'page' : undefined}
                                onClick={() => go(id)}
                            >
                                {label}
                            </button>
                        </li>
                    ))}
                    <li>
                        <button
                            type="button"
                            className={styles.themeToggle}
                            onClick={toggleDarkMode}
                            aria-label={
                                darkMode
                                    ? 'Switch to light mode'
                                    : 'Switch to dark mode'
                            }
                            aria-pressed={darkMode}
                        >
                            {darkMode ? <Sun size={14} /> : <Moon size={14} />}
                        </button>
                    </li>
                </ul>

                {/* Hamburger button — mobile only */}
                <button
                    type="button"
                    className={clsx(styles.hamburger, {
                        [styles.hamburgerOpen]: menuOpen,
                    })}
                    onClick={() => setMenuOpen((v) => !v)}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </nav>

            {/* Full-page mobile overlay */}
            <div
                className={clsx(styles.overlay, {
                    [styles.overlayOpen]: menuOpen,
                })}
            >
                <ul className={styles.overlayLinks}>
                    {links.map(({ id, label }, i) => (
                        <li
                            key={id}
                            style={{ animationDelay: `${0.08 * i}s` }}
                        >
                            <button
                                type="button"
                                className={clsx(styles.overlayLink, {
                                    [styles.overlayActive]: current === id,
                                })}
                                aria-current={current === id ? 'page' : undefined}
                                onClick={() => go(id)}
                            >
                                <span className={styles.overlayNum}>
                                    0{i + 1}
                                </span>
                                {label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Nav
