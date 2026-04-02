// src/components/Nav.tsx
import clsx from 'clsx'
import styles from './Nav.module.css'
import type { PageId } from '../../types'

interface NavProps {
    current: PageId
    onNavigate: (page: PageId) => void
}

const links: { id: PageId; label: string; cta?: boolean }[] = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact', cta: true },
]

const Nav = ({ current, onNavigate }: NavProps) => {
    const go = (e: React.MouseEvent, id: PageId) => {
        e.preventDefault()
        onNavigate(id)
    }

    return (
        <nav className={styles.nav}>
            <a href="#" className={styles.logo} onClick={(e) => go(e, 'home')}>
                Bryan <span className={styles.accent}>Acuna</span>
            </a>
            <ul className={styles.links}>
                {links.map(({ id, label, cta }) => (
                    <li key={id}>
                        <a
                            href="#"
                            data-page={id}
                            className={clsx(styles.link, {
                                [styles.active]: current === id,
                                [styles.cta]: cta,
                            })}
                            onClick={(e) => go(e, id)}
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav
