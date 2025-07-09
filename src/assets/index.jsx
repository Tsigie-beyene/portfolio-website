// Hero
import InstagramLineIcon from 'remixicon-react/InstagramLineIcon'
import GithubLineIcon from 'remixicon-react/GithubLineIcon'
import LinkedinLineIcon from 'remixicon-react/LinkedinLineIcon'

export const heroIcons = [
  {
    icon: <GithubLineIcon />,
    url: 'https://github.com/Tsigie-beyene',
  },
  {
    icon: <LinkedinLineIcon />,
    url: 'https://www.linkedin.com/in/tsigie-beyene',
  },
  {
    icon: <InstagramLineIcon />,
    url: 'https://www.instagram.com/tsigie_bey?igsh=ZGZtNzlpdjcyZ3p6', // Replace with your actual Instagram URL or remove if unused
  },
]
// AboutMe icons
import GithubFillIcon from 'remixicon-react/GithubFillIcon'
import Projector2LineIcon from 'remixicon-react/Projector2LineIcon'
import GroupLineIcon from 'remixicon-react/GroupLineIcon'
import AwardFillIcon from 'remixicon-react/AwardFillIcon'

export const aboutData = [
  {
    title: 'Github Repos',
    amount: 34,
    icon: <GithubFillIcon />,
  },
  {
    title: 'Successful Projects',
    amount: 22,
    icon: <Projector2LineIcon />,
  },
  {
    title: 'Satisfied clients',
    amount: 10,
    icon: <GroupLineIcon />,
  },
  {
    title: 'Awards and Recognition',
    amount: 7,
    icon: <AwardFillIcon />,
  },
]

import DownloadLineIcon from 'remixicon-react/DownloadLineIcon'
import ArrowLeftSFillIcon from 'remixicon-react/ArrowLeftSFillIcon'

export const downloadIcon = <DownloadLineIcon />
export const arrowLeftIcon = <ArrowLeftSFillIcon />

export const aboutText =
   "Versatile Full-Stack Developer with hands-on experience building scalable, high-performance web and mobile applications. Skilled in creating responsive interfaces using TypeScript, React, React Native, and Next.js, and developing robust backends with Node.js, Django, Spring Boot, and REST APIs. Proficient in database management with PostgreSQL and MongoDB (Mongoose), and experienced in scripting and automation using Bash, PowerShell, and Windows Terminal, known for clean code, adaptability, and delivering reliable, user-focused software solutions."
// Skills
export const skillsData = [
  {
    name: 'Figma',
    icon: '/skills/figma.png',
  },
  {
    name: 'Photoshop',
    icon: '/skills/photoshop.png',
  },
  {
    name: 'VS Code',
    icon: '/skills/vscode.png',
  },
  {
    name: 'HTML',
    icon: '/skills/html.png',
  },
  {
    name: 'CSS',
    icon: '/skills/css.png',
  },
  {
    name: 'JavaScript',
    icon: '/skills/js.png',
  },
  {
    name: 'TailwindCSS',
    icon: '/skills/tailwind.png',
  },
  {
    name: 'Vite',
    icon: '/skills/vite.png',
  },
  {
    name: 'ReactJS',
    icon: '/skills/react.png',
  },
  {
    name: 'TypeScript',
    icon: '/skills/ts.png',
  },
  {
    name: 'AI',
    icon: '/skills/ai.png',
  },
  {
    name: 'Framer Motion',
    icon: '/skills/framer.png',
  },
  {
    name: 'ThreeJS',
    icon: '/skills/threejs.png',
  },
  {
    name: 'NextJS',
    icon: '/skills/nextjs.png',
  },
  {
    name: 'NodeJS',
    icon: '/skills/nodejs.png',
  },
  {
    name: 'Python',
    icon: '/skills/Python.webp',
  },
  {
    name: 'Django',
    icon: '/skills/Django.png',
  },
  {
    name: 'REST API',
    icon: '/skills/Api.webp',
  },
  {
    name: 'SQL',
    icon: '/skills/sql.webp',
  },
  
  {
    name: 'PostgreSQL',
    icon: '/skills/Postgresql.webp',
  },
  {
    name: 'MongoDB',
    icon: '/skills/mongodb.png',
  },
  {
    name: 'Docker',
    icon: '/skills/Docker.webp',
  },
  {
    name: 'Github',
    icon: '/skills/github.png',
  },
  {
    name: 'GitLab',
    icon: '/skills/GitLab.webp',
  },
]


// Experience
export const experienceData = [
  {
    year: 1,
    title: 'University Foundation',
    education:
      'BSc in Computer Science – University of Gondar: Built a strong foundation in programming, problem-solving, and systems thinking.',
    experience: [
      'Coursework: Completed core CS courses in algorithms, OOP, DBMS, and networks.',
      'Frontend Exploration: Started with HTML, CSS, and JavaScript basics.',
      'Academic Projects: Developed interest in software engineering through class projects.',
    ],
  },
  {
    year: 2,
    title: 'Skill Growth and Side Projects',
    education:
      'Self-paced Learning: Combined online learning with university coursework.',
    experience: [
      'Project Development: Built personal projects to improve frontend and backend skills.',
      'Coursework: Took online courses in JavaScript, React, and Git.',
      'Freelance Exploration: Explored freelance platforms and web trends.',
    ],
  },
  {
    year: 3,
    title: 'Real-World Application and Projects',
    education:
      'Practical Learning: Focused on web technologies and system design.',
    experience: [
      'University Projects: Participated in collaborative development and open-source contributions.',
      'Capstone Project: Delivered a complete logistics or admin system solution.',
      'Internship: as Software Developer at University of Gondar using React, Node.js, and Express.',
    ],
  },
  {
    year: 4,
    title: 'ALX Leadership, Professional Experience & Freelancing',
    education:
      'Graduation & ALX: Completed BSc and ALX Software Engineering Program.',
    experience: [
      'Leadership: Led teams and delivered milestone projects with ALX.',
      'Project Development: Built admin dashboards and logistics apps using modern frontend stacks.',
      'Professional Work: Software Engineer developing and maintaining internal web systems for banking operations.',
      'Freelancing: Built websites and dashboards for local and global clients.',
      'Frontend Focus: Specialized in React, Next.JS, Tailwind CSS, and remote collaboration.',
    ],
  },
  {
    year: 5,
    title:'Mastery, Product Building & Growth',
    education:
      'Advanced Training: Taking ALX Backend Pro Developer and Freelance Academy courses.',
    experience: [
      'Portfolio Building: Positioned for freelance and full-time global opportunities.',
      'Side Project: Built "Property Pulse", a renting platform focused on Addis Ababa.',
      'MVP Delivery: Built ELMS mobile app for STEM courses in Ethiopia.',
      'Mentorship: Guided peers and contributed to team projects.',
    ],
  },
];


export const projectsData = [
  {
    name: 'Property pulse web app',
    desc: 'A rental platform tailored for Addis Ababa: helping users find houses, apartments, condos, and rooms with ease. Built with modern web technologies for seamless browsing and listing.',
    url: '/projects/property.png',
    tech: [ 'TailwindCSS', 'JavaScript','MongoseeDB','NextJS'],
  },

{
    name: 'TV Show Advisor Web App',
    desc: 'A web app that helps users discover and get recommendations for TV shows based on their interests: built with React, API integration, and clean UI design.',
    url: '/projects/movieshow.png',
    tech: ['ReactJS', 'CSS', 'JavaScript'],
  },
  {
    name: 'Freight Management System',
    desc: 'Developed a mobile and web-based logistics platform with React Native (driver app), React.js (admin dashboard), and Spring Boot (Java backend) for managing freight, drivers, and real-time tracking.',
    url: '/projects/adminDashboard.jpg',
    tech: ['ReactJS', 'TypeScript','Spring Boot','React Native','Java'],
  },
  {
    name: 'Personal Website',
    desc: 'A Website Showcasing my work in web development, dashboards, and logistics apps: built with React, Next.JS, Tailwind, and real-world experience.',
    url: '/projects/portfolioWebsite.png',
    tech: ['FramerMotion','ReactJS', 'NextJS', 'TailwindCSS','JavaScript'],
  },
  {
    name: 'Learning Management System',
    desc: 'Developed a mobile-first LMS for STEM courses in Ethiopia using React Native, Django REST API, and Tailwind CSS. Features include interactive lessons, quizzes, and student progress tracking for high school and elementary levels.',
    url: '/projects/LMS.png',
    tech: ['React Native', 'Python','Django','TailwindCSS'],
  },
  {
    name: 'Note Manager App',
    desc: 'A simple and efficient app to create, organize, and manage notes: featuring easy editing and search functionality, built with React.',
    url: '/projects/note-manager.png',
    tech: ['ReactJS', 'CSS', 'JavaScript'],
  },
 
 
]

export const projectsButton = [
  'All',
  'TypeScript',
  'ReactJS',
  'NextJS',
  'TailwindCSS',
  'JavaScript',
  'React Native',
  'FramerMotion',
  'Python',
  'NodeJS',
  'Django',
  'Java',
  'Spring Boot',
  'MongoseeDB',
  
]

// import { PiCopyrightThin } from 'react-icons/pi'
import CopyrightLineIcon from 'remixicon-react/CopyrightLineIcon'

// export const copyRightIcon = <PiCopyrightThin />
export const copyRightIcon = <CopyrightLineIcon />

import Home5LineIcon from 'remixicon-react/Home5LineIcon'
import UserLineIcon from 'remixicon-react/UserLineIcon'
import HistoryLineIcon from 'remixicon-react/HistoryLineIcon'
import BriefcaseLineIcon from 'remixicon-react/BriefcaseLineIcon'
import UserStarLineIcon from 'remixicon-react/UserStarLineIcon'
import ProjectorLineIcon from 'remixicon-react/ProjectorLineIcon'
import PriceTag3LineIcon from 'remixicon-react/PriceTag3LineIcon'
import ContactsBook2LineIcon from 'remixicon-react/ContactsBook2LineIcon'
import QuestionAnswerLineIcon from 'remixicon-react/QuestionAnswerLineIcon'

export const navbarData = [
  {
    id: 'home',
    name: 'Home',
    icon: <Home5LineIcon />,
  },
  {
    id: 'about',
    name: 'About',
    icon: <UserLineIcon />,
  },
  {
    id: 'experience',
    name: 'MyRoad',
    icon: <HistoryLineIcon />,
  },
  {
    id: 'skills',
    name: 'Skills',
    icon: <BriefcaseLineIcon />,
  },
  {
    id: 'reviews',
    name: 'Reviews',
    icon: <UserStarLineIcon />,
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: <ProjectorLineIcon />,
  },
  // {
  //   id: 'pricing',
  //   name: 'Pricing',
  //   icon: <PriceTag3LineIcon />,
  // },
  {
    id: 'contact',
    name: 'Contact',
    icon: <ContactsBook2LineIcon />,
  },
  {
    id: 'questions',
    name: 'Questions',
    icon: <QuestionAnswerLineIcon />,
  },
]

 // Questions
export const questions = [
  {
    question: 'What services do you offer?',
    answer:
      'I specialize in building responsive websites, admin dashboards, web applications and mobile applications tailored to your business needs. I also provide full backend and frontend solutions, with a focus on clean design and robust functionality.',
  },
  {
    question: 'Do you do freelance work or are you looking for a full-time role?',
    answer:
      'I’m open to both! I take on freelance projects for clients needing custom web solutions, and I’m also actively exploring full-time opportunities where I can contribute to larger-scale, long-term projects.',
  },
  {
    question: 'How much do you charge for a freelance project?',
    answer:
      'The cost depends on the scope, complexity, and timeline of the project. I’m flexible and open to negotiation, aiming to find a price that works for both sides. Let’s discuss your goals and budget during our initial conversation.',
  },
  {
    question: 'How long does it take to build a website or dashboard?',
    answer:
      'A standard website can take 2–4 weeks, while a full-featured admin dashboard may take 4–8 weeks depending on complexity and content readiness. I provide clear timelines before we begin and keep you updated throughout.',
  },
  {
    question: 'Can you work with my existing team or developers?',
    answer:
      'Absolutely. I’ve worked as part of agile development teams and can collaborate smoothly with designers, backend developers, or product managers. Clear communication and version control are a big part of my workflow.',
  },
  {
    question: 'What technologies do you use?',
    answer:
      'I mainly work with React, Tailwind CSS, Next.js, React Native, Python, Django, Node.js, PostgreSQL, and REST APIs. I’m also experienced with authentication, admin dashboards, and modern deployment tools like Vercel and AWS.',
  },
  {
    question: 'Can I see examples of your work?',
    answer:
      'Yes! I’ve worked on projects like a Digital Freight Management System, booking platforms, admin dashboards, and property pulse web app. You can check out my portfolio section for detailed case studies and demos.',
  },
  {
    question: 'Do you provide ongoing maintenance and updates?',
    answer:
      'Yes. I offer maintenance packages for bug fixes, content updates, and performance improvements, whether it’s monthly or as-needed. I can also train you to manage your site independently.',
  },
  {
    question: 'How do we start working together?',
    answer:
      'You can reach out through my contact form or email me directly. We’ll set up a discovery call to discuss your goals, timeline, and budget. From there, I’ll send a proposal and we can get started!',
  },
  {
    question: 'Can you help me launch my product MVP quickly?',
    answer:
      'Definitely. I can help you plan, build, and deploy a minimal viable product (MVP) quickly so you can test your idea and scale it over time. I focus on lean, efficient solutions that deliver real value early.',
  },
];


import ArrowDropDownLineIcon from 'remixicon-react/ArrowDropDownLineIcon'
export const questionArrow = <ArrowDropDownLineIcon />

// Reviews

import StarFillIcon from 'remixicon-react/StarFillIcon'
import StarHalfLineIcon from 'remixicon-react/StarHalfLineIcon'
import ArrowLeftSLineIcon from 'remixicon-react/ArrowLeftSLineIcon'
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon'

export const starIcons = [<StarFillIcon />, <StarHalfLineIcon />]
export const arrowIcons = [<ArrowLeftSLineIcon />, <ArrowRightSLineIcon />]

export const reviewsData = [
  {
    image: '/reviews/kira.jpeg',
    name: 'Kirubel Kinfe, Full Stack developer',
    comment:
      "Working with Tsigie Beyene on the Digital Freight Management System project was a valuable experience. He showcased strong frontend skills—especially in building clean, responsive UIs and improving user experience. His attention to detail and seamless integration with backend systems made a real impact. A proactive and dependable team member!",
    stars: [1, 1, 1, 1, 0.5],
  },
  {
    image: '/reviews/client-2.png',
    name: 'Mekash B., Logistics Company Owner',
    comment:
      "We hired Tsigie to develop a logistics management app along with an admin dashboard, and the results exceeded our expectations. He quickly understood our business needs and delivered a user-friendly, efficient system that streamlined our operations. The dashboard is intuitive, and the mobile interface is clean and responsive. Highly reliable and skilled—definitely someone I’d work with again.!",
    stars: [1, 1, 1, 1, 1],
  },
  {
    image: '/reviews/abrham.jpeg',
    name: 'Abrham G., Online Banking Tech Officer',
    comment:
      "Working with Tsigie was a smooth and productive experience. During our collaboration, he consistently brought technical insight, especially in API integration and data handling. His ability to communicate clearly and solve problems efficiently made him a valuable team member. A dependable and technically strong developer who always puts quality first",
    stars: [1, 1, 1, 1, 1],
  },
  {
    image: '/reviews/nathan.jpg',
    name: 'Nathanim T., Software Engineer',
    comment:
      "Collaborating with Tsigie on our recent project was a great experience. He demonstrated solid skills in both frontend and backend development, especially in building scalable features and clean user interfaces. His commitment to writing maintainable code and supporting the team made a real difference. A focused and collaborative engineer I’d gladly work with again.!",
    stars: [1, 1, 1, 1, 0.5],
  },
  {
    image: '/reviews/client-5.png',
    name: 'Fikiresilasseie H., Director of Non-Profit Organization',
    comment:
      "your work on our non-profit’s website has been transformative. The design is clean, engaging, and effectively conveys our mission. We've seen an increase in online donations and volunteer sign-ups, all thanks to your fantastic design. Your dedication and talent are greatly appreciated!",
    stars: [1, 1, 1, 1, 1],
  },
]

export const pricingPlans = [
  {
    title: 'Basic',
    pricing: '$500 - $1,000',
    features: [
      'Up to 5 pages',
      'Responsive design ',
      'Basic SEO ',
      'Contact form',
      'Social media links',
      '1 month support',
    ],
    recommended: 'Small businesses, personal websites, bloggers',
  },
  {
    title: 'Premium',
    pricing: '$5,000 - $10,000',
    features: [
      'Unlimited pages',
      'Responsive design',
      'Comprehensive SEO',
      'Contact form ',
      'Social media links',
      'Advanced security',
      'E-commerce (unlimited products)',
      'Blog setup',
      'Google Analytics with custom reports',
      '6 months support',
    ],
    recommended: 'Medium-sized businesses, online stores, service providers',
  },
  {
    title: 'Standard',
    pricing: '$1,500 - $3,000',
    features: [
      'Up to 10 pages',
      'Responsive design',
      'Advanced SEO',
      'CContact form',
      'Social media links',
      'E-commerce (20 products)',
      'Blog setup',
      'Google Analytics',
      '3 months support',
    ],
    recommended: 'Large businesses, complex e-commerce sites, custom web applications',
  },
]

import CheckLineIcon from 'remixicon-react/CheckLineIcon'

export const checkIcon = <CheckLineIcon />

// Toggle
import MoonFoggyFillIcon from 'remixicon-react/MoonFoggyFillIcon'
import SunFoggyFillIcon from 'remixicon-react/SunFoggyFillIcon'

export const sunIcon = <SunFoggyFillIcon />
export const moonIcon = <MoonFoggyFillIcon />
