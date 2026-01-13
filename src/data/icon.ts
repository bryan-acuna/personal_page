import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import {
    FaGithub,
    FaStore,
    FaIdCard,
    FaXTwitter,
    FaReact,
} from 'react-icons/fa6'
import { MdOutlineSportsSoccer } from 'react-icons/md'
import { type IconName } from '../types'
import type { IconType } from 'react-icons'

export const iconMap: Record<IconName, IconType> = {
    BsInstagram,
    FaXTwitter,
    BsLinkedin,
    MdOutlineSportsSoccer,
    FaStore,
    FaIdCard,
    FaGithub,
    FaReact,
} as const

export function getIcon(name: IconName): IconType {
    return iconMap[name] || FaReact
}
