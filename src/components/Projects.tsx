import React from 'react'
import { projectsCards } from '../data'

const Projects = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-4 xl:py-0 py-10">
            <h2 className="text-4xl font-light mb-32 xl:mt0 mt-12">Projects</h2>
            <div
                className="w-full xl:w-225 lg:w-200 md:w-150 grid lg:grid-cols-3
            grid-cols-1 lg:gap-12 gap-18 xl:mb-0 mb-16"
            >
                {projectsCards.map((project, index) => (
                    <div
                        key={index}
                        className="lg:max-w-70 md:max-w-100 max-w-[320px] w-full mx-auto rounded-sm
                        ring-2 ring-gray-400/20 shadow-md shadow-gray-700/20"
                    >
                        <div className="p-3 bg-gray-200 dark:bg-gray-800 transition-colors duration-500"></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
