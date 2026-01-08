import Hero from './components/Hero'
import { ThemeProvider } from './context/ThemeContext'

const App = () => {
    return (
        <ThemeProvider>
            <div className="min-h-screen bg-white  dark:bg-[#121928]">
                <Hero />
            </div>
        </ThemeProvider>
    )
}

export default App
