import { useEffect, useState } from 'react'

export const useProfessionSwitcher = (
    professions: readonly string[],
    intervalTime = 10000
) => {
    const [isRotating, setIsRotating] = useState(false)
    const [currentProfession, setCurrentProfession] = useState(professions[0])
    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsRotating(true)
            setTimeout(() => {
                const randomIndex = Math.floor(
                    Math.random() * professions.length
                )
                setCurrentProfession(professions[randomIndex])
                setIsRotating(false)
            }, 300)
        }, intervalTime)
        return () => clearInterval(intervalId)
    }, [professions, intervalTime])
    return { isRotating, currentProfession }
}
