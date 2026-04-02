// src/components/Cursor.tsx
import { useEffect, useRef } from 'react'
import styles from './Cursor.module.css'

const Cursor = () => {
    const dotRef = useRef<HTMLDivElement>(null)
    const ringRef = useRef<HTMLDivElement>(null)
    const mouse = useRef({ x: 0, y: 0 })
    const ring = useRef({ x: 0, y: 0 })

    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            mouse.current = { x: e.clientX, y: e.clientY }
            if (dotRef.current) {
                dotRef.current.style.left = `${e.clientX}px`
                dotRef.current.style.top = `${e.clientY}px`
            }
        }

        const onHover = (e: MouseEvent) => {
            const over = !!(e.target as Element).closest('a, button')
            if (dotRef.current) {
                dotRef.current.style.transform = `translate(-50%, -50%) scale(${over ? 2 : 1})`
            }
            if (ringRef.current) {
                ringRef.current.style.width = over ? '52px' : '34px'
                ringRef.current.style.height = over ? '52px' : '34px'
                ringRef.current.style.borderColor = over
                    ? 'rgba(200,16,46,0.8)'
                    : 'rgba(200,16,46,0.45)'
            }
        }

        let raf: number
        const animateRing = () => {
            ring.current.x += (mouse.current.x - ring.current.x) * 0.12
            ring.current.y += (mouse.current.y - ring.current.y) * 0.12
            if (ringRef.current) {
                ringRef.current.style.left = `${ring.current.x}px`
                ringRef.current.style.top = `${ring.current.y}px`
            }
            raf = requestAnimationFrame(animateRing)
        }

        document.addEventListener('mousemove', onMove)
        document.addEventListener('mouseover', onHover)
        raf = requestAnimationFrame(animateRing)

        return () => {
            document.removeEventListener('mousemove', onMove)
            document.removeEventListener('mouseover', onHover)
            cancelAnimationFrame(raf)
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
