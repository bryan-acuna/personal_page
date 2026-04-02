import { useState } from 'react'
import type { PageId } from './types'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'
import Resume from './components/pages/Resume'
import Home from './components/pages/Home'

function App() {
    const [page, setPage] = useState<PageId>('home')

    const navigate = (p: PageId) => {
        setPage(p)
        window.scrollTo(0, 0)
    }

    return (
        <>
            <Cursor />
            <div className="top-accent" />
            <Nav current={page} onNavigate={navigate} />
            {page === 'home' && <Home onNavigate={navigate} />}
            {page === 'projects' && <Projects onNavigate={navigate} />}
            {page === 'resume' && <Resume onNavigate={navigate} />}
            {page === 'contact' && <Contact onNavigate={navigate} />}
        </>
    )
}

export default App
