// src/components/pages/Resume.tsx

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { JOBS } from '../../../data'
import { useReveal } from '../../../hooks/useReveal'
import type { PageId } from '../../../types'
import styles from './Resume.module.css'
import PageFooter from '../../PageFooter'
import RichText from '../../RichText'

gsap.registerPlugin(ScrollTrigger)

interface ResumeProps {
    onNavigate: (page: PageId) => void
}

const Resume = ({ onNavigate }: ResumeProps) => {
    const headerRef = useReveal()
    const summaryRef = useReveal()
    const skillsRef = useReveal()
    const eduRef = useReveal()

    const timelineRef = useRef<HTMLDivElement>(null)
    const railLineRef = useRef<SVGLineElement>(null)

    useLayoutEffect(() => {
        const timeline = timelineRef.current
        const railLine = railLineRef.current
        if (!timeline || !railLine) return

        const reduced = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches

        const ctx = gsap.context(() => {
            gsap.set(railLine, { strokeDashoffset: 1 })

            gsap.to(railLine, {
                strokeDashoffset: 0,
                ease: 'none',
                scrollTrigger: {
                    trigger: timeline,
                    start: 'top 70%',
                    end: 'bottom 75%',
                    scrub: reduced ? false : 0.6,
                },
            })

            const items = timeline.querySelectorAll<HTMLElement>(
                `.${styles.expItem}`
            )
            items.forEach((item) => {
                gsap.from(item, {
                    y: 20,
                    opacity: 0,
                    scale: 0.96,
                    duration: reduced ? 0.3 : 0.7,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 78%',
                        toggleActions: 'play none none reverse',
                    },
                })
            })
        }, timeline)

        return () => ctx.revert()
    }, [])

    return (
        <>
            <section className={styles.section}>
                <div className={styles.wrap}>
                    <div className={styles.downloadBar}>
                        <a
                            href="/Bryan_Acuna_Resume.pdf"
                            download
                            className={styles.btnPrimary}
                        >
                            Download PDF ↓
                        </a>
                    </div>

                    {/* HEADER */}
                    <div
                        ref={headerRef as React.RefObject<HTMLDivElement>}
                        className={`reveal ${styles.header}`}
                    >
                        <div>
                            <h1 className={styles.name}>
                                Bryan <em>Acuna</em>
                            </h1>
                            <p className={styles.titleLine}>
                                Frontend Software Engineer
                            </p>
                        </div>
                        <div className={styles.contactInfo}>
                            <a href="https://bryan-acuna.com">
                                bryan-acuna.com
                            </a>
                            <a href="mailto:bryanacuna1994@gmail.com">
                                bryanacuna1994@gmail.com
                            </a>
                            <a href="tel:8325314639">(832) 531-4639</a>
                            <a
                                href="https://linkedin.com/in/bryanacuna"
                                target="_blank"
                                rel="noreferrer"
                            >
                                linkedin.com/in/bryanacuna
                            </a>
                        </div>
                    </div>

                    {/* SUMMARY */}
                    <div
                        ref={summaryRef as React.RefObject<HTMLDivElement>}
                        className={`reveal ${styles.summary}`}
                    >
                        Front-end engineer with 6+ years at P&G, built
                        enterprise web applications from concept to production.
                        Architected and delivered 2 critical applications
                        (Angular & React) serving 100+ internal users, reducing
                        manual data processing time and improving operational
                        efficiency. Expert in modern frontend frameworks, Azure
                        cloud infrastructure, CI/CD pipelines, and leading
                        cross-functional teams.
                    </div>

                    {/* SKILLS */}
                    <div
                        ref={skillsRef as React.RefObject<HTMLDivElement>}
                        className={`reveal ${styles.resumeSection}`}
                    >
                        <div className={styles.resumeSectionTitle}>Skills</div>
                        <div className={styles.skillsRow}>
                            {[
                                {
                                    label: 'Frontend',
                                    items: 'React.js, Redux, AngularJS, TypeScript, JavaScript, RxJS, Handsontable, Tailwind CSS',
                                },
                                {
                                    label: 'Backend & Cloud',
                                    items: 'Python, Node.js, Azure Functions, Databricks, Azure DevOps, Docker',
                                },
                                {
                                    label: 'Testing',
                                    items: 'Selenium, Robot Framework, JUnit, UI Testing, QA Automation',
                                },
                                {
                                    label: 'DevOps & Tools',
                                    items: 'Azure CI/CD, SonarQube, Confluence',
                                },
                            ].map((s) => (
                                <div key={s.label} className={styles.skillLine}>
                                    <span className={styles.skillLineLabel}>
                                        {s.label}
                                    </span>
                                    <span className={styles.skillLineItems}>
                                        {s.items}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* EXPERIENCE */}
                    <div className={styles.resumeSection}>
                        <div className={styles.resumeSectionTitle}>
                            Experience
                        </div>
                        <div ref={timelineRef} className={styles.timeline}>
                            <svg
                                className={styles.rail}
                                preserveAspectRatio="none"
                                viewBox="0 0 2 100"
                                aria-hidden="true"
                            >
                                <line
                                    x1="1"
                                    y1="0"
                                    x2="1"
                                    y2="100"
                                    pathLength="1"
                                    className={styles.railTrack}
                                    vectorEffect="non-scaling-stroke"
                                />
                                <line
                                    ref={railLineRef}
                                    x1="1"
                                    y1="0"
                                    x2="1"
                                    y2="100"
                                    pathLength="1"
                                    className={styles.railLine}
                                    vectorEffect="non-scaling-stroke"
                                />
                            </svg>
                            {JOBS.map((job) => (
                                <div
                                    key={job.role + job.date}
                                    className={styles.expItem}
                                >
                                    <span
                                        className={styles.expMarker}
                                        aria-hidden="true"
                                    />
                                    <div className={styles.expHeader}>
                                        <span className={styles.expRole}>
                                            {job.role}
                                        </span>
                                        <span className={styles.expDate}>
                                            {job.date}
                                        </span>
                                    </div>
                                    <div className={styles.expCompany}>
                                        {job.company}
                                    </div>
                                    <ul className={styles.bullets}>
                                        {job.bullets.map((b, i) => (
                                            <li key={i}>
                                                <RichText text={b} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* EDUCATION */}
                    <div
                        ref={eduRef as React.RefObject<HTMLDivElement>}
                        className={`reveal ${styles.resumeSection}`}
                    >
                        <div className={styles.resumeSectionTitle}>
                            Education & Certifications
                        </div>
                        <div className={styles.eduGrid}>
                            <div className={styles.eduItem}>
                                <h4>B.S. Computer and Information Science</h4>
                                <p>
                                    University of Houston
                                    <br />
                                    Houston, TX · December 2018
                                </p>
                            </div>
                            <ul className={styles.certList}>
                                <li>
                                    Microsoft Certified: Azure Administrator
                                    Associate
                                </li>
                                <li>
                                    Microsoft Certified: Azure Data Fundamentals
                                    (2023)
                                </li>
                                <li>
                                    Microsoft Certified: Azure Developer
                                    Associate (2025)
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <PageFooter
                onNavigate={onNavigate}
                exclude="resume"
                className={styles.footer}
                copyClassName={styles.footerCopy}
                linksClassName={styles.footerLinks}
            />
        </>
    )
}
export default Resume
