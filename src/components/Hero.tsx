import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { letters, professionTexts } from '../data'

const Hero = () => {
    const [hoveredLetter, setHoveredLetter] = useState<number | null>(null)
    const [currentProfession, setCurrentProfession] = useState<string>(
        professionTexts[0]
    )
    const [isRotating, setIsRotating] = useState<boolean>(false)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsRotating(true)
            setTimeout(() => {
                const position = Math.floor(Math.random() * 2)
                setCurrentProfession(professionTexts[position])
                setIsRotating(false)
            }, 300)
        }, 10000)
        return () => clearInterval(intervalId)
    }, [])
    return (
        <div className="w-full h-dvh flex flex-col justify-center items-center">
            <Navbar />
            <div className="flex flex-col md:items-center items-start xl:gap-y-10 gap-y-3 xl:mb-0 md:mb-20 mb-0">
                <h1
                    className="flex flex-col xl:space-y-8 md:space-y-4 space-y-2
                xl:text-6xl md:text-4xl text-3xl md:font-normal font-bolder
                text-yellow-500 "
                >
                    <span className="flex">
                        {letters.map((letter, index) => (
                            <span
                                onMouseEnter={() => setHoveredLetter(index)}
                                onMouseLeave={() => setHoveredLetter(null)}
                                key={index}
                                className="relative inline-block md:w-38 w-32 xl:-mr-20 -mr-24"
                            >
                                {letter.char}
                                <img
                                    src={letter.img}
                                    alt=""
                                    className={`absolute xl:h-36 h-24 bottom-full -translate-x-1/2 ${
                                        letter.rotate
                                    } ${
                                        hoveredLetter === index
                                            ? 'visible'
                                            : 'invisible'
                                    }`}
                                />
                            </span>
                        ))}
                    </span>
                    <span className="xl:text-6xl md:text-4xl text-2xl tracking-wider xl:py-4 py-2 overflow-hidden">
                        I'm{' '}
                        <span
                            className={`inline-block xl:w-[380px] md:w-[240px] w-[160px]
                                lg:ml-6 ml-2 font-extrabold transform transition-transform
                                ease-out origin-left duration-300 ${
                                    isRotating ? 'rotate-[100deg]' : 'rotate-0'
                                }`}
                        >
                            {currentProfession}
                        </span>{' '}
                        Web Developer
                    </span>
                </h1>
            </div>
        </div>
    )
}

export default Hero
