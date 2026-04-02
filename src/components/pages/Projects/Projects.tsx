// src/components/pages/Projects.tsx
import type { PageId } from '../../../types'
import { PROJECTS } from '../../../data'
import { useReveal } from '../../../hooks/useReveal'
import styles from './Projects.module.css'

interface ProjectsProps {
    onNavigate: (page: PageId) => void
}

function ProjectRow({ num, title, description, tags }: (typeof PROJECTS)[0]) {
    const ref = useReveal()
    return (
        <a
            href="#"
            ref={ref as React.RefObject<HTMLAnchorElement>}
            className={`reveal ${styles.row}`}
            onClick={(e) => e.preventDefault()}
        >
            <span className={styles.num}>{num}</span>
            <div className={styles.info}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className={styles.tags}>
                {tags.map((t) => (
                    <span key={t} className={styles.tag}>
                        {t}
                    </span>
                ))}
            </div>
        </a>
    )
}

const Projects = ({ onNavigate }: ProjectsProps) => {
    return (
        <>
            <section className={styles.section}>
                <p className={styles.sectionLabel}>Selected work</p>
                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>
                        Recent <em>Projects</em>
                    </h2>
                    <span className={styles.count}>
                        0{PROJECTS.length} Featured
                    </span>
                </div>
                <div className={styles.list}>
                    {PROJECTS.map((p) => (
                        <ProjectRow key={p.num} {...p} />
                    ))}
                </div>
            </section>

            <footer className={styles.footer}>
                <p className={styles.footerCopy}>
                    © 2026 Bryan Acuna · Houston, TX
                </p>
                <ul className={styles.footerLinks}>
                    {(['home', 'resume', 'contact'] as PageId[]).map((p) => (
                        <li key={p}>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault()
                                    onNavigate(p)
                                }}
                            >
                                {p.charAt(0).toUpperCase() + p.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>
            </footer>
        </>
    )
}

export default Projects
