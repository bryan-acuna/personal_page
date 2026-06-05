import type {
    Project,
    Job,
    Stat,
    SkillGroup,
    LeadershipRole,
} from '../types'

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
        role: 'Front-End Software Engineer',
        company: 'Procter & Gamble · IT Data & Analytics · Cincinnati, OH',
        date: 'Aug 2023 – Dec 2025',
        bullets: [
            'Built enterprise-grade React components including dynamic filtering, server-side pagination, and custom data grids, now serving **100+ users** across multiple business units for mission-critical data extraction.',
            'Designed **Redux-based state management** architecture that improved rendering performance by **70%** and enabled scalable feature development across the application.',
            'Created production-ready infrastructure including Azure DevOps CI/CD pipelines, SonarQube code quality gates, MSAL authentication, and mock API services for development.',
            'Implemented **1,073+ automated regression test cases** using Python, Selenium, Playwright, and Robot Framework, increasing test coverage from **0% to 76%** and reducing regression testing time by more than half, enabling weekly releases vs. monthly.',
            'Refactored and stabilized 100+ automated test suites, enabling **3× faster release velocity** to production.',
            'Designed end-to-end testing strategy for Rubik 1.0, documented in Confluence for organization-wide adoption.',
            'Managed technical migration from **Angular 9 to Angular 16**, modernizing framework dependencies while maintaining zero-downtime deployment for enterprise users.',
            'Supported UAT, Cutover, and Hypercare through detailed updates and comprehensive bug analysis.',
            'Authored comprehensive Handsontable and component documentation in Confluence, reducing duplicate effort and enabling easier team adoption.',
        ],
    },
    {
        role: 'Engineering Manager',
        company: 'Procter & Gamble · IT Data & Analytics · Cincinnati, OH',
        date: 'Jan 2022 – Aug 2023',
        bullets: [
            'Led cross-functional team of **7 engineers** delivering GLMD subproduct features, managing sprint planning, resource allocation, and stakeholder communications.',
            'Orchestrated DAS platform migration, refactoring data pipelines and implementing Azure DevOps CI/CD infrastructure with zero production downtime.',
            'Achieved **100% fulfillment rate** for all new Planogram requests by optimizing POS data infrastructure, resulting in zero post-launch issues.',
            'Led quarterly PI planning sessions, resource onboarding for **5+ new hires**, and technical training programs improving team velocity.',
            'Evaluated frontend frameworks and drove **React adoption as the org standard**; presented migration strategy to leadership and executed the full D&A organization transition.',
        ],
    },
    {
        role: 'Front-End Software Engineer',
        company: 'Procter & Gamble · IT Data & Analytics · Cincinnati, OH',
        date: 'Aug 2020 – Jan 2022',
        bullets: [
            'Implemented serverless metadata tracking system using Azure Functions (Python), enabling real-time change auditing across data analytics platforms.',
            'Developed and deployed reusable Angular UI components, pagination controls, modals, and toast notifications, standardizing UX across the organization.',
            'Implemented reactive state management using RxJS observables, reducing component re-renders and improving application responsiveness.',
        ],
    },
    {
        role: 'Backend · Automation Engineer',
        company: 'Procter & Gamble · IT Data & Analytics · Cincinnati, OH',
        date: 'May 2018 – Aug 2020',
        bullets: [
            'Developed and deployed automated workflows using WorkFusion and Java for critical business systems including Planview, reducing manual processing time and eliminating data entry errors.',
            'Built Node.js middleware server to interface with warehouse AGVs, translating XML messages to JSON format and enabling real-time inventory tracking for distribution operations.',
        ],
    },
]

export const LEADERSHIP: LeadershipRole[] = [
    {
        role: 'Lead Recruiter for Texas',
        bullets: [
            'Developed recruiting strategy and assessment criteria for identifying high-potential IT and engineering talent.',
        ],
    },
    {
        role: 'Youth Technology Program Lead',
        bullets: [
            'Directed a 3-month IT internship program for **5 high-school students**, providing daily mentorship, career coaching, and professional development for underrepresented talent.',
        ],
    },
]
