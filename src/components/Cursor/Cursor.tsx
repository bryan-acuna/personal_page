// src/components/Cursor.tsx
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import styles from './Cursor.module.css'

const MAGNET_STRENGTH = 0.4

const Cursor = () => {
    const dotRef = useRef<HTMLDivElement>(null)
    const ringRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const dot = dotRef.current
        const ring = ringRef.current
        if (!dot || !ring) return

        const reduced = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches

        gsap.set([dot, ring], { xPercent: -50, yPercent: -50, x: -100, y: -100 })

        const dotDur = reduced ? 0 : 0.18
        const ringDur = reduced ? 0 : 0.55

        const dotX = gsap.quickTo(dot, 'x', { duration: dotDur, ease: 'power3' })
        const dotY = gsap.quickTo(dot, 'y', { duration: dotDur, ease: 'power3' })
        const ringX = gsap.quickTo(ring, 'x', {
            duration: ringDur,
            ease: 'power3',
        })
        const ringY = gsap.quickTo(ring, 'y', {
            duration: ringDur,
            ease: 'power3',
        })

        let hovered: HTMLElement | null = null
        let lastEvent: { x: number; y: number } | null = null

        const apply = (clientX: number, clientY: number) => {
            let x = clientX
            let y = clientY

            if (hovered) {
                const r = hovered.getBoundingClientRect()
                const cx = r.left + r.width / 2
                const cy = r.top + r.height / 2
                x = x + (cx - x) * MAGNET_STRENGTH
                y = y + (cy - y) * MAGNET_STRENGTH
            }

            dotX(x)
            dotY(y)
            ringX(x)
            ringY(y)
        }

        const onMove = (e: MouseEvent) => {
            lastEvent = { x: e.clientX, y: e.clientY }
            apply(e.clientX, e.clientY)
        }

        const onOver = (e: MouseEvent) => {
            const target = (e.target as Element).closest<HTMLElement>(
                'a, button'
            )
            if (target === hovered) return

            hovered = target
            const over = !!target

            gsap.to(dot, {
                scale: over ? 2 : 1,
                duration: 0.25,
                ease: 'power3',
            })
            gsap.to(ring, {
                width: over ? 52 : 34,
                height: over ? 52 : 34,
                borderColor: over
                    ? 'rgba(200,16,46,0.8)'
                    : 'rgba(200,16,46,0.45)',
                duration: 0.3,
                ease: 'power3',
            })

            if (lastEvent) apply(lastEvent.x, lastEvent.y)
        }

        document.addEventListener('mousemove', onMove)
        document.addEventListener('mouseover', onOver)

        return () => {
            document.removeEventListener('mousemove', onMove)
            document.removeEventListener('mouseover', onOver)
        }
    }, [])

    return (
        <>
            <div ref={dotRef} className={styles.dot} />
            <div ref={ringRef} className={styles.ring} />
        </>
    )
}

export default Cursor
