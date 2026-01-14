import type { NavLinkProps } from '../../types'

const NavLink = ({ label, id, isActive, href, onClick }: NavLinkProps) => {
    return (
        <li>
            <a
                className={`relative group lg:text-lg md:text-base
                                text-sm font-light lg:mr-12 mr-8 tracking-wide ${
                                    isActive
                                        ? 'dark:text-yellow-500 text-red-500'
                                        : 'text-gray-600 dark:text-white'
                                }`}
                href={href}
                onClick={(e) => onClick(e, id)}
            >
                {label}{' '}
                <span
                    className={`absolute -bottom-1 left-0 w-full h-px 
                                    transform scale-x-0 group-hover:scale-x-100 transition duration-300 
                                    group-hover:origin-left origin-right ${
                                        isActive
                                            ? 'dark:bg-yellow-500 bg-red-500'
                                            : 'bg-gray-600 dark:bg-white'
                                    }`}
                ></span>
            </a>
        </li>
    )
}

export default NavLink
