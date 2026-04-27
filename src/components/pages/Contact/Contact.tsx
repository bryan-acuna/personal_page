// src/components/pages/Contact.tsx

import { useReveal } from '../../../hooks/useReveal'
import type { PageId } from '../../../types'
import styles from './Contact.module.css'
import PageFooter from '../../PageFooter'

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

            <PageFooter
                onNavigate={onNavigate}
                exclude="contact"
                className={styles.footer}
                copyClassName={styles.footerCopy}
                linksClassName={styles.footerLinks}
            />
        </>
    )
}
export default Contact
