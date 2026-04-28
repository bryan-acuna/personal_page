// src/components/pages/Projects.tsx
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { PageId } from '../../../types'
import { PROJECTS } from '../../../data'
import styles from './Projects.module.css'
import PageFooter from '../../PageFooter'

gsap.registerPlugin(ScrollTrigger)

interface ProjectsProps {
    onNavigate: (page: PageId) => void
}

function ProjectRow({ num, title, description, tags, github, liveUrl }: (typeof PROJECTS)[0]) {
    return (
        <div className={styles.row} data-project-row>
            <span className={styles.num}>{num}</span>
            <div className={styles.info}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className={styles.right}>
                <div className={styles.tags}>
                    {tags.map((t) => (
                        <span key={t} className={styles.tag}>
                            {t}
                        </span>
                    ))}
                </div>
                <div className={styles.actions}>
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.actionBtn}
                            onClick={(e) => e.stopPropagation()}
                        >
                            GitHub ↗
                        </a>
                    )}
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.actionBtn} ${styles.actionBtnPrimary}`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            Live ↗
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

const Projects = ({ onNavigate }: ProjectsProps) => {
    const sectionRef = useRef<HTMLElement>(null)
    const headingRef = useRef<HTMLDivElement>(null)
    const listRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        const reduced = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches

        const ctx = gsap.context(() => {
            const rows =
                listRef.current?.querySelectorAll<HTMLElement>(
                    '[data-project-row]'
                ) ?? []

            rows.forEach((row) => {
                gsap.from(row, {
                    y: 60,
                    opacity: 0,
                    scale: 0.96,
                    duration: reduced ? 0.3 : 0.9,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: row,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    },
                })
            })

            if (
                !reduced &&
                headingRef.current &&
                listRef.current &&
                window.matchMedia('(min-width: 769px)').matches
            ) {
                ScrollTrigger.create({
                    trigger: headingRef.current,
                    start: 'top 90px',
                    endTrigger: listRef.current,
                    end: 'bottom 90px',
                    pin: headingRef.current,
                    pinSpacing: false,
                })
            }
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <>
            <section ref={sectionRef} className={styles.section}>
                <div ref={headingRef} className={styles.heading}>
                    <p className={styles.sectionLabel}>Selected work</p>
                    <div className={styles.header}>
                        <h2 className={styles.sectionTitle}>
                            Recent <em>Projects</em>
                        </h2>
                        <span className={styles.count}>
                            0{PROJECTS.length} Featured
                        </span>
                    </div>
                </div>
                <div ref={listRef} className={styles.list}>
                    {PROJECTS.map((p) => (
                        <ProjectRow key={p.num} {...p} />
                    ))}
                </div>
            </section>

            <PageFooter
                onNavigate={onNavigate}
                exclude="projects"
                className={styles.footer}
                copyClassName={styles.footerCopy}
                linksClassName={styles.footerLinks}
            />
        </>
    )
}

export default Projects
