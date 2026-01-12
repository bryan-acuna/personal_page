import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import type { Letter, ProjectCard, SocialIcon } from '../types'

export const letters: Letter[] = [
    {
        char: 'H',
        img: 'https://plus.unsplash.com/premium_photo-1672115680958-54438df0ab82?q=80&w=1484&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        rotate: '-rotate-15',
    },
    {
        char: 'E',
        img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        rotate: 'rotate-15',
    },
    {
        char: 'L',
        img: 'https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        rotate: '-rotate-15',
    },
    {
        char: 'L',
        img: 'https://images.unsplash.com/photo-1657249772171-ec9c4f720d27?q=80&w=1621&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        rotate: 'rotate-15',
    },
    {
        char: 'O',
        img: 'https://images.unsplash.com/photo-1693555738290-4ff01428ecfb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        rotate: '-rotate-15',
    },
]

export const professionTexts = ['a Front End', 'a Full Stack'] as const

export const socialIcons: SocialIcon[] = [
    {
        icon: 'BsInstagram',
        url: 'https://instagram.com/your-username',
        label: 'Instagram',
    },
    {
        icon: 'FaXTwitter',
        url: 'https://twitter.com/your-username',
        label: 'Twitter',
    },
    {
        icon: 'BsLinkedin',
        url: 'https://www.linkedin.com/in/bryanacuna/',
        label: 'Linkedin',
    },
]

export const projectsCards: ProjectCard[] = [
    {
        id: crypto.randomUUID(),
        icon: 'MdOutlineSportsSoccer',
        title: '1',
        description: 'lorem',
    },
    {
        id: crypto.randomUUID(),
        icon: 'FaStore',
        title: '2',
        description: 'lorem',
    },
    {
        id: crypto.randomUUID(),
        icon: 'FaIdCard',
        title: '3',
        description: 'lorem',
    },
]
