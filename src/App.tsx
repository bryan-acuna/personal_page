import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import { ThemeProvider } from './context/ThemeContext'
import Loader from './components/Loader/Loader'
import { useEffect, useState } from 'react'

const App = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2000)
        return () => clearTimeout(timer)
    }, [])
    return (
        <ThemeProvider>
            <div className="min-h-screen bg-white  dark:bg-gray-900 text-red-500 dark:text-yellow-500 transition-colors duration-500">
                <Loader isLoading={isLoading} />
                {!isLoading && (
                    <>
                        <Hero />
                        <Projects />
                        <Contact />
                    </>
                )}
            </div>
        </ThemeProvider>
    )
}

export default App
