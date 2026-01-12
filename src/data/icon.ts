import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import { FaGithub, FaNode, FaReact, FaXTwitter } from 'react-icons/fa6'
import type { IconMap, IconName } from '../types'

export const iconMap: IconMap = {
    BsInstagram,
    FaXTwitter,
    BsLinkedin,
    FaReact,
    FaNode,
    FaGithub,
} as const

export const getIcon = (name: IconName) => iconMap[name]
