// src/components/pages/Home.tsx
import clsx from 'clsx'
import type { PageId } from '../../../types'
import { STATS, SKILL_GROUPS } from '../../../data'
import { useReveal } from '../../../hooks/useReveal'
import styles from './Home.module.css'
import Ticker from '../../Ticker'

interface HomeProps {
    onNavigate: (page: PageId) => void
}

const Home = ({ onNavigate }: HomeProps) => {
    const aboutRef = useReveal()
    console.log('stats', STATS)

    return (
        <>
            {/* ── HERO ── */}
            <div className={styles.heroWrap}>
                <div className={styles.heroLeft}>
                    <div className={styles.availBadge}>
                        <span className={styles.badgeDot} />
                        Open to new opportunities
                    </div>

                    <p className={styles.eyebrow}>Senior Frontend Engineer</p>

                    <h1 className={styles.title}>
                        Engineering
                        <br />
                        <em>scalable</em>
                        <br />
                        frontends.
                    </h1>

                    <p className={styles.sub}>
                        6+ years building enterprise web applications at{' '}
                        <strong>Procter & Gamble</strong>. React, TypeScript,
                        Azure — from architecture to production with
                        zero-downtime deployments.
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

                    <div className={styles.stats}>
                        {STATS.map((s) => (
                            <div key={s.label}>
                                <span className={styles.statNum}>
                                    {s.value}
                                    {s.suffix && <em>{s.suffix}</em>}
                                </span>
                                <div className={styles.statLabel}>
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* ── GEO CARD ── */}
                <div className={styles.heroRight}>
                    <div className={styles.heroBgText}>FE</div>
                    <div className={styles.geoStack}>
                        <div className={styles.geoBox} />
                        <div
                            className={clsx(styles.geoBox, styles.geoBoxOffset)}
                        />
                        <div className={styles.geoInner}>
                            <span className={styles.geoLabel}>
                                P&G · Lead Engineer
                            </span>
                            <div>
                                <div className={styles.geoBig}>70%</div>
                                <div className={styles.geoSmall}>
                                    Rendering perf via Redux
                                </div>
                            </div>
                            <div>
                                <div className={styles.geoBig}>76%</div>
                                <div className={styles.geoSmall}>
                                    Test coverage from 0%
                                </div>
                            </div>
                            <div className={styles.geoTags}>
                                {[
                                    'React',
                                    'TypeScript',
                                    'Angular',
                                    'Azure',
                                    'Python',
                                ].map((t) => (
                                    <span key={t} className={styles.geoTag}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.scrollHint}>
                    <span className={styles.scrollLine} />
                    Explore
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

            <footer className={styles.footer}>
                <p className={styles.footerCopy}>
                    © 2026 Bryan Acuna · Houston, TX
                </p>
                <ul className={styles.footerLinks}>
                    {(['projects', 'resume', 'contact'] as PageId[]).map(
                        (p) => (
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
                        )
                    )}
                </ul>
            </footer>
        </>
    )
}
export default Home
