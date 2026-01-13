import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { letters, professionTexts, socialIcons } from '../data'
import SocialLinks from './SocialLinks'
import { useProfessionSwitcher } from '../hooks/useProfessionSwitcher'

const Hero = () => {
    const { isRotating, currentProfession } =
        useProfessionSwitcher(professionTexts)
    const [hoveredLetter, setHoveredLetter] = useState<number | null>(null)

    const [imageOpacity, setImageOpacity] = useState<number>(0.5)

    return (
        <div className="w-full h-dvh flex flex-col justify-center items-center isolate">
            <Navbar />
            <div className="flex flex-col md:items-center items-start xl:gap-y-10 gap-y-3 xl:mb-0 md:mb-20 mb-0">
                <h1
                    className="flex flex-col xl:space-y-8 md:space-y-4 space-y-2
                xl:text-6xl md:text-4xl text-3xl md:font-normal font-bolder"
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
                <button
                    className="flex justify-between items-center bg-gray-900 dark:bg-gray-200 xl:w-[400px] md:w-[300px] w-[270px]
                md:py-1 py-0 md:px-4 px-2 xl:text-2xl md:text-xl text-base text-white dark:text-gray-900 tracking-widest
                rounded-r-4xl md:ml-0 mx-auto transition-colors duration-500"
                    onMouseEnter={() => setImageOpacity(0.8)}
                    onMouseLeave={() => setImageOpacity(0.5)}
                >
                    Read my story <i className="fa-solid fa-book-open"></i>
                </button>
                <SocialLinks icons={socialIcons} />
                <div className="lg:w-[600px] md:w-[500px] w-[350px] left-1/2 top-1/4 -translate-x-1/2 absolute -z-10">
                    <img
                        style={{ opacity: imageOpacity }}
                        src="images/road1.png"
                        alt="Image"
                        className="w-full mx-auto transition-opacity duration-300"
                    />
                    <span
                        className="xl:text-xs md:text-[10px] text-[8px] font-bold
                     tracking-wide absolute top-8 md:left-6 -rotate-[5.5deg] animate-bounce"
                    >
                        Looking for new challenges
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Hero
