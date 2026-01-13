import { projectsCards } from '../../data'
import ProjectCards from './ProjectCard'

const Projects = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-4 xl:py-0 py-10">
            <h2 className="text-4xl font-light mb-32 xl:mt0 mt-12">Projects</h2>
            <div
                className="w-full xl:w-225 lg:w-200 md:w-150 grid lg:grid-cols-3
            grid-cols-1 lg:gap-12 gap-18 xl:mb-0 mb-16"
            >
                <ProjectCards projects={projectsCards} />
            </div>
        </div>
    )
}

export default Projects
