import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/rizr09',
  linkedin: 'https://www.linkedin.com/in/rizr09/',
  mail: 'mailto:rizky2004cool@gmail.com',
  instagram: 'https://www.instagram.com/rizr09/',
  medium: 'https://rizr09.medium.com/',
  discord: 'https://discordapp.com/users/726053710098071603',
  spotify: 'https://open.spotify.com/user/fc8y4939uhihepg1ey5bvvvs6'
}

// Global
export const SITE: Site = {
  TITLE: 'Astro Sphere',
  DESCRIPTION:
    'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
  AUTHOR: 'Mark Horn',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

export const PORTFOLIO: Page = {
  TITLE: 'Portfolio',
  DESCRIPTION: 'A collection of my work.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const STUDIES = [
  {
    title: 'Computer Science',
    institution: 'Universidad Central',
    link: 'https://www.ucentral.edu.co/',
    date: '2019 - 2027',
  },
  {
    title: '...',
    institution: 'Platzi',
    link: 'https://platzi.com/',
    date: '2018 - 2022',
  },
  {
    title: '...',
    institution: 'Udemy',
    link: 'https://www.udemy.com/',
    date: '2018 - 2022',
  },
  {
    title: '...',
    institution: 'Youtube',
    link: 'https://www.youtube.com/@midulive',
    date: '2018 - 2022',
  },
]

export const PROJECTS = [
  {
    id: 1,
    name: 'TEDxPadjadjaran University',
    link: 'https://tedxpadjadjaranuniversity.com/',
    image: 'https://i.ibb.co.com/FsjbDHy/image.png',
  },
  {
    id: 2,
    name: 'Padjadjaran Career Expo',
    link: 'https://www.padjadjarancareerexpo.com/',
    image: 'https://i.ibb.co.com/3kcT8Lc/image.png',
  },
  {
    id: 3,
    name: 'Dental Identify',
    link: 'https://github.com/mnnur/Dentalify-Dental-Identify',
    image: 'https://i.ibb.co.com/9Gf5bRC/image.png',
  },
  {
    id: 4,
    name: 'Analisis Relasi Data Support dan Demand Bahasa Pemrograman di Indonesia',
    link: 'https://doi.org/10.31539/intecoms.v7i2.9443',
    image: 'https://i.ibb.co.com/MB4jLhS/image.png',
  },

]

export const EXPERIENCE = [
  {
    company: 'Centre for Communication, Media and Culture Studies Unpad',
    link: 'https://fikom.unpad.ac.id/pusat-studi/pusat-studi-media-dan-budaya/',
    location: 'Sumedang Regency, West Java, Indonesia',
    position: 'IT Consultant',
    start: 'May 2024',
    end: 'Prensent',
    tasks: [
      'Develops a web scraping tool for news portals and social media for content analysis needs.',
      'Data collected from articles on Kompas.com, CNNIndonesia.com, Detik.com, and TribunNews.com, as well as from social media platforms including TikTok, X, YouTube, and Instagram.',
      'Utilizes Googlesearch, RegEx, and BeautifulSoup Python libraries in the development process.',
      'Provides training on the use of web scraping tools to study center members.'
    ],
  },
  {
    company: 'Teknik Informatika Universitas Padjadjaran',
    location: 'Sumedang Regency, West Java, Indonesia',
    position: 'Laboratory Teaching Assistant Coordinator',
    start: 'Jan 2024',
    link: 'https://informatika.unpad.ac.id/',
    end: 'Present',
    tasks: [
      'I\'m responsible for making sure the process runs smoothly so that all TAs can continue to teach as effectively as possible. This involves a lot of communication with the team and the lab director.'
    ],
  },
  {
    company: 'Teknik Informatika Universitas Padjadjaran',
    location: 'Sumedang Regency, West Java, Indonesia',
    position: 'Laboratory Teaching Assistant',
    start: 'Feb 2023',
    link: 'https://informatika.unpad.ac.id/',
    end: 'Present',
    tasks: [
      'My work involves formulating and delivering weekly two-hour lectures, assessing students\' knowledge through weekly assignments, and assisting students with technical and subject-related issues outside of teaching hours. The subjects I teach include Data Structures (Spring 2023 & 2024), Algorithms & Programming (Fall 2023), Object-Oriented Programming (Fall 2023), and Artificial Intelligence (Spring 2024).'
    ],
  },
  {
    company: 'Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka',
    location: 'Online',
    position: 'Machine Learning Cohort',
    link: 'https://g.co/bangkit',
    start: 'Aug 2023',
    end: 'Jan 2024',
  tasks: [
      'Successfully finished 24 courses on Coursera, covering topics including Python, Data Science, Mathematics, Machine Learning, Tensorflow, and Model Deployment, with 4 specializations. ',
      'Participated in seven sessions of instructor-led training in machine learning, seven sessions on soft skills, and three sessions on improving English language proficiency. ',
      'Took a part in the development of a product-based capstone project called Dentalify, in which I developed a machine learning model using Xception to detect 6 oral and 7 oral diseases with 80% accuracy followed by 76% validation accuracy. ',
      'Has graduated with distinction from Bangkit 2023 Batch 2 with overall score 96.79 and 100% attendances.',
    ],
  },
  {
    company: 'Padjadjaran Career Expo',
    location: 'Sumedang Regency, West Java, Indonesia',
    position: 'Backend Developer',
    link: 'https://www.padjadjarancareerexpo.com/',
    start: 'Aug 2023',
    end: 'Nov 2023',
    tasks: [
      'Wrote an API specification to guide other developers and built REST APIs using Next.js 13. ',
      'Created and maintained the Padjadjaran Career Expo database using MongoDB and Mongoose. ',
      'Leveraged Trello for project management and successfully handled 408 registrants across 4 events.',
    ],
  },
]
