import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
    const { darkMode, toggleDarkMode } = useTheme()
    return (
        <div className="w-full md:h-12 sm:h-14 h-18 flex justify-between items-center xl:px-36 lg:px-24 md:px-12 sm:px-6 px-4 fixed top-0 bg-[#121928]">
            <div className="flex items-center sm:gap-x-4 gap-x-2">
                <a
                    href="#"
                    className="md:text-2xl text-lg sm:text-xl text-yellow-500"
                >
                    Bryan Acuna
                </a>
                <i
                    onClick={toggleDarkMode}
                    className="md:text-3xl sm:text-2xl text-xl text-gray-200 sm:ml-4 ml-2 cursor-pointer fa-brands fa-linktree"
                ></i>
            </div>
            <div>
                <a
                    className="relative group text-yellow-500 lg:text-lg md:text-base text-sm font-light lg:mr-12 mr-8 tracking-wide "
                    href="#"
                >
                    Home{' '}
                    <span
                        className="absolute -bottom-1 
                    left-0 w-full h-[1px] bg-yellow-500 
                    transform scale-x-0 group-hover:scale-x-100
                    transition duration-300 group-hover:origin-left origin-right"
                    ></span>
                </a>
                <a
                    className="relative group text-white lg:text-lg md:text-base text-sm font-light lg:mr-12 mr-8 tracking-wide "
                    href="#"
                >
                    Services
                    <span
                        className="absolute -bottom-1 
                    left-0 w-full h-[1px] bg-white 
                    transform scale-x-0 group-hover:scale-x-100
                    transition duration-300 group-hover:origin-left origin-right"
                    ></span>
                </a>
                <a
                    className="relative group text-white lg:text-lg md:text-base text-sm font-light lg:mr-12 mr-8 tracking-wide "
                    href="#"
                >
                    Contact
                    <span
                        className="absolute -bottom-1 
                    left-0 w-full h-[1px] bg-white 
                    transform scale-x-0 group-hover:scale-x-100
                    transition duration-300 group-hover:origin-left origin-right"
                    ></span>
                </a>
            </div>
        </div>
    )
}

export default Navbar
