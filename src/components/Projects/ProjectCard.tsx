import type { ProjectCard, ProjectCardProps } from '../../types'
import { getIcon } from '../../data/icon'

const ProjectCards = ({ projects }: ProjectCardProps) => {
    const getPositionClass = (card: ProjectCard) => {
        const position = card.position.large
        return position === 'bottom' ? 'bottom-0' : 'top-0'
    }
    return (
        <>
            {projects.map((project) => {
                const Icon = getIcon(project.icon)
                return (
                    <div
                        key={project.id}
                        className="lg:max-w-70 md:max-w-100 max-w-[320px] w-full mx-auto rounded-sm
                        ring-2 ring-gray-400/20 shadow-md shadow-gray-700/20 relative"
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
                            )}  w-full absolute left-0 flex flex-col gap-y-5 py-4`}
                        >
                            {project.position.large === 'top' && (
                                <div className="flex justify-between">
                                    {[...Array(3)].map((_, index) => (
                                        <a
                                            className="bg-yellow-500 rounded-full text-white p-4"
                                            href=""
                                            key={index}
                                        >
                                            {index + 1}
                                        </a>
                                    ))}
                                </div>
                            )}
                            <h2
                                className="text-2xl text-center text-gray-900 dark:text-white font-light
                            tracking-wide"
                            >
                                Project
                            </h2>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default ProjectCards
