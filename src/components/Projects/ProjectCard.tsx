import type { ProjectCard, ProjectCardProps } from '../../types'
import { getIcon } from '../../data/icon'
import { projectLinks } from '../../data'
import { useState } from 'react'

const ProjectCards = ({ projects }: ProjectCardProps) => {
    const [hoverOn, setHoverOn] = useState<null | string>(null)

    const getPositionClass = (card: ProjectCard) => {
        const position = card.position.large
        return position === 'bottom' ? 'bottom-0' : 'top-0'
    }
    const getPositionHoverClass = (card: ProjectCard) => {
        const position = card.position.large
        return position === 'bottom' ? 'bottom-full' : 'top-full'
    }
    return (
        <>
            {projects.map((project) => {
                const Icon = getIcon(project.icon)
                return (
                    <div
                        key={project.id}
                        className="lg:max-w-70 md:max-w-100 max-w-[320px] w-full mx-auto rounded-sm
                        ring-2 ring-gray-400/20 shadow-md shadow-gray-700/20 relative isolate"
                        onMouseEnter={() => setHoverOn(project.id)}
                        onMouseLeave={() => setHoverOn(null)}
                    >
                        <div className="p-3 bg-gray-200 dark:bg-gray-800 transition-colors duration-500">
                            <Icon
                                className="lg:text-4xl text-3xl text-gray-900 dark:text-white 
                            transition-colors duration-500"
                            />
                            <h3
                                className="text-red-500 dark:text-yellow-500 transition-colors duration-500
                            md:text-2xl text-xl font-bold my-4"
                            >
                                {project.title}
                            </h3>
                            <p
                                className="text-gray-900 dark:text-white transition-colors duration-500 md:h-28 h-24
                            md:text-base text-sm font-light overflow-y-auto pr-2"
                            >
                                {project.description}
                            </p>
                        </div>
                        <div
                            className={`${getPositionClass(
                                project
                            )}  w-full absolute left-0 flex flex-col gap-y-5 py-4 transition-all duration-300 -z-10 ${
                                hoverOn === project.id &&
                                `${getPositionHoverClass(project)}`
                            }`}
                        >
                            <h2
                                className="text-2xl text-center text-gray-900 dark:text-white font-light
                            tracking-wide"
                            >
                                Project Links
                            </h2>
                            {project.position.large === 'bottom' && (
                                <div className="flex justify-between">
                                    {projectLinks.map((link, index) => (
                                        <a
                                            className="text-large bg-red-500 dark:bg-yellow-500 w-13 aspect-square
                                            grid place-items-center rounded-full text-white transition-colors duration-500"
                                            href=""
                                            key={index}
                                        >
                                            {link}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default ProjectCards
