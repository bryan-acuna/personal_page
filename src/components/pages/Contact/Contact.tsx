// src/components/pages/Contact.tsx

import { useReveal } from '../../../hooks/useReveal'
import type { PageId } from '../../../types'
import styles from './Contact.module.css'

interface ContactProps {
    onNavigate: (page: PageId) => void
}

const Contact = ({ onNavigate }: ContactProps) => {
    const leftRef = useReveal()
    const rightRef = useReveal()

    return (
        <>
            <section className={styles.section}>
                <div className={styles.grid}>
                    <div
                        ref={leftRef as React.RefObject<HTMLDivElement>}
                        className={`reveal ${styles.left}`}
                    >
                        <p className={styles.sectionLabel}>Get in touch</p>
                        <h2 className={styles.heading}>
                            Open to <em>new</em>
                            <br />
                            opportunities.
                        </h2>
                        <p className={styles.copy}>
                            I'm actively looking for a senior frontend or
                            full-stack engineering role. If your team values
                            clean code, scalable architecture, and engineers who
                            ship — let's talk.
                        </p>
                        <a
                            href="mailto:bryanacuna1994@gmail.com"
                            className={styles.emailLink}
                        >
                            bryanacuna1994@gmail.com ↗
                        </a>
                    </div>

                    <div
                        ref={rightRef as React.RefObject<HTMLDivElement>}
                        className={`reveal ${styles.right}`}
                    >
                        {[
                            {
                                label: 'LinkedIn',
                                href: 'https://linkedin.com/in/bryanacuna',
                                text: 'linkedin.com/in/bryanacuna',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/bryan-acuna',
                                text: 'github.com/bryan-acuna',
                            },
                            {
                                label: 'Phone',
                                href: 'tel:8325314639',
                                text: '(832) 531-4639',
                            },
                        ].map(({ label, href, text }) => (
                            <div key={label} className={styles.contactItem}>
                                <div className={styles.contactLabel}>
                                    {label}
                                </div>
                                <a href={href} target="_blank" rel="noreferrer">
                                    {text}
                                </a>
                            </div>
                        ))}

                        <div className={styles.contactItem}>
                            <div className={styles.contactLabel}>Location</div>
                            <span>Houston, TX · Open to remote</span>
                        </div>

                        <div
                            className={`${styles.contactItem} ${styles.lastItem}`}
                        >
                            <button
                                className={styles.btnPrimary}
                                onClick={() => onNavigate('resume')}
                            >
                                View Resume →
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <footer className={styles.footer}>
                <p className={styles.footerCopy}>
                    © 2026 Bryan Acuna · Houston, TX
                </p>
                <ul className={styles.footerLinks}>
                    {(['home', 'projects', 'resume'] as PageId[]).map((p) => (
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
export default Contact
