import type { PageId } from '../../types'

interface PageFooterProps {
    onNavigate: (page: PageId) => void
    exclude: PageId
    /** className for the footer element (so each page can keep its own styling) */
    className: string
    /** className for the copy paragraph */
    copyClassName: string
    /** className for the links list */
    linksClassName: string
}

const ALL_PAGES: PageId[] = ['home', 'projects', 'resume', 'contact']
const labelFor = (p: PageId) => p.charAt(0).toUpperCase() + p.slice(1)

const PageFooter = ({
    onNavigate,
    exclude,
    className,
    copyClassName,
    linksClassName,
}: PageFooterProps) => (
    <footer className={className}>
        <p className={copyClassName}>© 2026 Bryan Acuna · Houston, TX</p>
        <ul className={linksClassName}>
            {ALL_PAGES.filter((p) => p !== exclude).map((p) => (
                <li key={p}>
                    <button type="button" onClick={() => onNavigate(p)}>
                        {labelFor(p)}
                    </button>
                </li>
            ))}
        </ul>
    </footer>
)

export default PageFooter
