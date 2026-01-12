import React from 'react'
import type { SocialIcon } from '../types'

interface SocialLinksProps {
    icons: SocialIcon[]
}

const SocialLinks = ({ icons }: SocialLinksProps) => {
    return (
        <div className="flex md:gap-12 gap-2 mr-auto">
            {icons.map((social, index) => (
                <a
                    key={index}
                    href="#"
                    className="dark:hover:text-white hover:text-gray-900 text-red-500 dark:text-yellow-500 xl:text:3xl 
                            md:text-2xl transition-colors duration-500"
                >
                    <i className={social.icon}></i>
                </a>
            ))}
        </div>
    )
}

export default SocialLinks
