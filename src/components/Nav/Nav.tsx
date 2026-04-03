// src/components/Nav.tsx
import { useState } from 'react'
import clsx from 'clsx'
import styles from './Nav.module.css'
import type { PageId } from '../../types'

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

    const go = (e: React.MouseEvent, id: PageId) => {
        e.preventDefault()
        onNavigate(id)
        setMenuOpen(false)
    }

    return (
        <>
            <nav className={styles.nav}>
                <a
                    href="#"
                    className={styles.logo}
                    onClick={(e) => go(e, 'home')}
                >
                    Bryan <span className={styles.accent}>Acuna</span>
                </a>

                {/* Desktop links */}
                <ul className={styles.links}>
                    {links.map(({ id, label }) => (
                        <li key={id}>
                            <a
                                href="#"
                                data-page={id}
                                className={clsx(styles.link, {
                                    [styles.active]: current === id,
                                })}
                                onClick={(e) => go(e, id)}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Hamburger button — mobile only */}
                <button
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
                            <a
                                href="#"
                                className={clsx(styles.overlayLink, {
                                    [styles.overlayActive]: current === id,
                                })}
                                onClick={(e) => go(e, id)}
                            >
                                <span className={styles.overlayNum}>
                                    0{i + 1}
                                </span>
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Nav
