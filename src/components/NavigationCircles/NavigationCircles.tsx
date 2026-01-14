import { navigationItems } from '../../data'
import type { NavigationCirclesProps } from '../../types'

const NavigationCircles = ({ page }: NavigationCirclesProps) => {
    return (
        <div
            className="h-125 w-px bg-red-500 dark:bg-yellow-500 absolute right-12
         hidden md:flex flex-col justify-between items-center transition-colors duration-500"
        >
            {navigationItems.map((pageName) => (
                <div
                    className={`${
                        page === pageName.id
                            ? 'bg-red-500 dark:bg-yellow-500'
                            : 'bg-gray-300'
                    } w-5 aspect-square border border-red-500 dark:border-yellow-500 
            rounded-full transition-colors duration-500`}
                ></div>
            ))}
        </div>
    )
}

export default NavigationCircles
