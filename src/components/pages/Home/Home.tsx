// src/components/pages/Home.tsx
import { useState, useEffect, useRef } from 'react'
import clsx from 'clsx'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import type { PageId } from '../../../types'
import { STATS, SKILL_GROUPS } from '../../../data'
import { useReveal } from '../../../hooks/useReveal'
import styles from './Home.module.css'
import Ticker from '../../Ticker'
import PageFooter from '../../PageFooter'

gsap.registerPlugin(SplitText)

let welcomeShown = false

interface HomeProps {
    onNavigate: (page: PageId) => void
}

const Home = ({ onNavigate }: HomeProps) => {
    const aboutRef = useReveal()
    const titleRef = useRef<HTMLHeadingElement>(null)
    const [welcomeVisible, setWelcomeVisible] = useState(!welcomeShown)
    const [welcomeMounted, setWelcomeMounted] = useState(!welcomeShown)

    useEffect(() => {
        if (!welcomeMounted) return
        welcomeShown = true
        const fadeOut = setTimeout(() => setWelcomeVisible(false), 1600)
        const unmount = setTimeout(() => setWelcomeMounted(false), 2500)
        return () => {
            clearTimeout(fadeOut)
            clearTimeout(unmount)
        }
    }, [welcomeMounted])

    useEffect(() => {
        if (!titleRef.current) return

        const reduced = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches

        const split = SplitText.create(titleRef.current, {
            type: 'chars',
            charsClass: styles.titleChar,
        })

        gsap.set(titleRef.current, { opacity: 1 })

        const delay = welcomeMounted ? 1.6 : 0.2

        const tween = reduced
            ? gsap.from(split.chars, { opacity: 0, duration: 0.4, delay })
            : gsap.from(split.chars, {
                  yPercent: 110,
                  rotateX: -80,
                  filter: 'blur(14px)',
                  opacity: 0,
                  duration: 1.1,
                  ease: 'power3.out',
                  stagger: 0.045,
                  delay,
              })

        return () => {
            tween.kill()
            split.revert()
        }
    }, [])

    return (
        <>
            {/* ── WELCOME SPLASH ── */}
            {welcomeMounted && (
                <div
                    className={clsx(styles.welcome, {
                        [styles.welcomeHide]: !welcomeVisible,
                    })}
                >
                    <div className={styles.welcomeInner}>
                        <span className={styles.welcomeName}>
                            Bryan Acuna<em>.</em>
                        </span>
                    </div>
                </div>
            )}

            {/* ── HERO ── */}
            <div className={styles.heroWrap}>
                <div className={styles.heroContent}>
                    <div className={styles.availBadge}>
                        <span className={styles.badgeDot} />
                        Open to new opportunities
                    </div>

                    <p className={styles.eyebrow}>ABOUT ME</p>

                    <h1 ref={titleRef} className={styles.title}>
                        <span className={styles.titleAccent}>Frontend</span>
                        <br />
                        Engineer.
                    </h1>

                    <p className={styles.sub}>
                        Hi, I'm <strong>Bryan Acuna</strong>. 7+ years building
                        enterprise web applications at{' '}
                        <strong>Procter & Gamble</strong> — React, TypeScript,
                        and Azure, from architecture to production.
                    </p>

                    <div className={styles.ctas}>
                        <button
                            className={styles.btnPrimary}
                            onClick={() => onNavigate('projects')}
                        >
                            View Projects →
                        </button>
                        <button
                            className={styles.btnSecondary}
                            onClick={() => onNavigate('resume')}
                        >
                            View Resume
                        </button>
                    </div>
                </div>

                {/* ── STATS ── */}
                <div className={styles.statsCol}>
                    {STATS.map((s) => (
                        <div key={s.label} className={styles.statItem}>
                            <span className={styles.statNum}>
                                {s.value}
                                {s.suffix && <em>{s.suffix}</em>}
                            </span>
                            <div className={styles.statLabel}>{s.label}</div>
                        </div>
                    ))}
                </div>

                <div className={styles.scrollHint}>
                    <span className={styles.scrollLine} />
                    Scroll
                </div>
            </div>

            {/* ── TICKER ── */}
            <Ticker />

            {/* ── DIVIDER ── */}
            <div className={styles.divider} />

            {/* ── ABOUT ── */}
            <section className={styles.aboutSection}>
                <div className={styles.aboutGrid}>
                    <div>
                        <p className={styles.sectionLabel}>About me</p>
                        <h2 className={styles.sectionTitle}>
                            Built for <em>scale.</em>
                        </h2>
                    </div>

                    <div
                        ref={aboutRef as React.RefObject<HTMLDivElement>}
                        className={clsx('reveal', styles.aboutBody)}
                    >
                        <p>
                            I'm a frontend software engineer with{' '}
                            <strong>6+ years at Procter & Gamble</strong>, where
                            I progressed from automation engineer to lead —
                            architecting, building, and shipping
                            enterprise-grade applications serving 100+ internal
                            users.
                        </p>
                        <p>
                            I care about clean architecture, measurable
                            performance, and code that scales. Whether it's a
                            Redux state design that cuts re-renders by 70%, or
                            migrating Angular 9 to 16 with zero downtime — I
                            deliver end-to-end.
                        </p>
                        <p>
                            Outside the keyboard I'm training for{' '}
                            <strong>Ironman 70.3</strong> and building{' '}
                            <strong>FocusLog</strong> — a Strava-integrated
                            training tracker in React & TypeScript.
                        </p>

                        <div className={styles.skillsGrid}>
                            {SKILL_GROUPS.map((g) => (
                                <div key={g.label} className={styles.skillCell}>
                                    <div className={styles.skillLabel}>
                                        {g.label}
                                    </div>
                                    <div className={styles.skillItems}>
                                        {g.items}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <PageFooter
                onNavigate={onNavigate}
                exclude="home"
                className={styles.footer}
                copyClassName={styles.footerCopy}
                linksClassName={styles.footerLinks}
            />
        </>
    )
}
export default Home
