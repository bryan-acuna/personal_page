import type { Project, Job, Stat, SkillGroup } from '../types'

export const STATS: Stat[] = [
    { value: '7', suffix: '+', label: 'Engineering Experience' },
    { value: '5', suffix: '+', label: 'Front End Experience' },
    { value: '7', label: 'Engineers Led' },
]

export const TICKER_ITEMS: string[] = [
    'React',
    'TypeScript',
    'Angular',
    'Node.js',
    'Azure',
    'Redux',
    'Python',
    'Supabase',
    'Tailwind CSS',
    'CI/CD',
    'Docker',
    'Selenium',
]

export const SKILL_GROUPS: SkillGroup[] = [
    {
        label: 'Frontend',
        items: 'React · Angular · TypeScript · Redux · RxJS · Tailwind CSS',
    },
    {
        label: 'Backend & Cloud',
        items: 'Node.js · Python · Azure Functions · Databricks · Docker',
    },
    {
        label: 'Testing',
        items: 'Selenium · Robot Framework · JUnit · QA Automation',
    },
    {
        label: 'DevOps',
        items: 'Azure CI/CD · SonarQube · Azure DevOps · Confluence',
    },
]

export const PROJECTS: Project[] = [
    {
        num: '01',
        title: 'Training Dashboard',
        description:
            'Personal training tracker pulling real-time data from the Strava API. Visualizes swim, bike, and run metrics with custom charts and streak tracking.',
        tags: ['React', 'TypeScript', 'Supabase', 'Strava API'],
        github: 'https://github.com/bryan-acuna/iron-man',
        liveUrl: 'https://bryan-acuna.com',
    },
    {
        num: '02',
        title: 'Ecuasystems — E-Commerce Platform',
        description:
            'Full-featured e-commerce platform with product catalog, cart management, checkout flow, and order tracking — built for scale and performance.',
        tags: ['React', 'TypeScript', 'Node.js', 'Stripe'],
        github: 'https://github.com/bryanacuna',
        liveUrl: 'https://bryan-acuna.com',
    },
    {
        num: '03',
        title: 'MovilEC',
        description:
            'Ridesharing application with real-time driver matching, live location tracking, and in-app payments — designed for seamless user experience.',
        tags: ['NextJS', 'Node.js', 'Maps API', 'Real-time'],
        github: 'https://github.com/bryan-acuna/movilec',
        liveUrl: 'https://bryan-acuna.com',
    },
    {
        num: '04',
        title: 'Andariegos',
        description:
            'Web application built to manage and showcase the Anadariegos brand — featuring dynamic content, responsive design, and a modern UI.',
        tags: ['React', 'TypeScript', 'CSS', 'Responsive'],
        github: 'https://github.com/bryan-acuna/andariegos',
        liveUrl: 'https://andariegos.vercel.app',
    },
]

export const JOBS: Job[] = [
    {
        role: 'Lead Test Engineer & Front End Engineer',
        company: 'Procter & Gamble · IT Data & Analytics · Cincinnati, OH',
        date: 'Aug 2024 – Dec 2025',
        bullets: [
            'Implemented <strong>1,073+ automated regression test cases</strong> using Python, Selenium, and Robot Framework — increasing coverage from 0% to 76%.',
            'Refactored and stabilized 100+ automated test suites enabling <strong>3× faster release velocity</strong>.',
            'Managed migration from Angular 9 to Angular 16 with <strong>zero-downtime deployment</strong>.',
        ],
    },
    {
        role: 'Front-End Software Engineer',
        company: 'Procter & Gamble · IT Data & Analytics · Cincinnati, OH',
        date: 'Aug 2023 – Aug 2024',
        bullets: [
            'Built enterprise-grade React components — dynamic filtering, server-side pagination, custom data grids — serving <strong>100+ users</strong>.',
            'Created production-ready Azure DevOps CI/CD pipelines and MSAL authentication infrastructure.',
            'Designed <strong>Redux-based state management</strong> architecture improving rendering performance by 70%.',
        ],
    },
    {
        role: 'Engineering Manager',
        company: 'Procter & Gamble · IT Data & Analytics · Cincinnati, OH',
        date: 'Jan 2022 – Aug 2023',
        bullets: [
            'Led cross-functional team of <strong>7 engineers</strong>, managing sprint planning and stakeholder communications.',
            'Orchestrated DAS platform migration with zero production downtime.',
            'Drove <strong>React adoption as the org standard</strong> across the full D&A organization.',
        ],
    },
    {
        role: 'Front-End Software Engineer',
        company: 'Procter & Gamble · IT Data & Analytics · Cincinnati, OH',
        date: 'Aug 2020 – Jan 2022',
        bullets: [
            'Implemented serverless metadata tracking using Azure Functions (Python).',
            'Developed reusable Angular UI components, standardizing UX across the org.',
            'Implemented reactive state management with RxJS observables.',
        ],
    },
    {
        role: 'Backend · Automation Engineer',
        company: 'Procter & Gamble · IT Data & Analytics · Cincinnati, OH',
        date: 'May 2018 – Aug 2020',
        bullets: [
            'Automated critical business workflows using WorkFusion and Java.',
            'Built Node.js middleware server interfacing with warehouse AGVs.',
        ],
    },
]
