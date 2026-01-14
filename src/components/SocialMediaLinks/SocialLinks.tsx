import type { SocialIcon } from '../../types'
import { getIcon } from '../../data/icon'
import type { IconType } from 'react-icons'

interface SocialLinksProps {
    icons: SocialIcon[]
}

const SocialLinks = ({ icons }: SocialLinksProps) => {
    return (
        <div className="flex md:gap-12 gap-2 mr-auto">
            {icons.map((social) => {
                const IconComponent: IconType = getIcon(social.icon)
                return (
                    <a
                        key={social.url}
                        href={social.url}
                        target="_blank"
                        aria-label={social.label}
                        className="dark:hover:text-white hover:text-gray-900 text-red-500 dark:text-yellow-500 xl:text:3xl 
                            md:text-2xl transition-colors duration-500"
                    >
                        <IconComponent />
                    </a>
                )
            })}
        </div>
    )
}

export default SocialLinks
