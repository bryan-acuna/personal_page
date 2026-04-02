import type { Project, Job, Stat, SkillGroup } from '../types'

export const STATS: Stat[] = [
    { value: '6', suffix: '+', label: 'Years at P&G' },
    { value: '1,073', label: 'Test Cases Built' },
    { value: '7', label: 'Engineers Led' },
    { value: '70', suffix: '%', label: 'Perf Improvement' },
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
        title: 'FocusLog — Training Dashboard',
        description:
            'Personal training tracker pulling real-time data from the Strava API. Visualizes swim, bike, and run metrics with custom charts and streak tracking.',
        tags: ['React', 'TypeScript', 'Supabase', 'Strava API'],
    },
    {
        num: '02',
        title: 'Enterprise Data Grid — P&G',
        description:
            'Mission-critical React application with dynamic filtering, server-side pagination, and Handsontable grids — serving 100+ users across P&G business units.',
        tags: ['React', 'Redux', 'Azure', 'Handsontable'],
    },
    {
        num: '03',
        title: 'Rubik 1.0 — Test Automation',
        description:
            'End-to-end automated testing strategy with 1,073+ regression test cases. Increased coverage from 0% to 76% and enabled weekly releases.',
        tags: ['Python', 'Selenium', 'Robot Framework'],
    },
    {
        num: '04',
        title: 'AGV Middleware Server',
        description:
            'Node.js middleware server interfacing with warehouse AGVs — translating XML to JSON in real-time for live inventory tracking.',
        tags: ['Node.js', 'XML/JSON', 'Real-time'],
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
