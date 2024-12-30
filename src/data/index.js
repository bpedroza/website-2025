import ishowcase from '../assets/ishowcase.svg';
import healthEndeavors from '../assets/healthendeavors.webp';
import avweb from '../assets/avweb.webp';

import jspkce from '../assets/js-pkce-preview.webp';
import evap from '../assets/evap-preview.webp';
import website from '../assets/website-2025.webp';

const links = [
  {
    name: 'About',
    id: 'about',
    active: true
  },
  {
    name: 'Work History',
    id: 'work-history',
    active: false
  },
  {
    name: 'Portfolio',
    id: 'portfolio',
    active: false
  }
];

const jobs = [
  {
    name: 'Health Endeavors',
    timeSpan: 'July 2016 - Present',
    icon: healthEndeavors,
    responsibilities: [
      'Communicate and collaborate with product teams to create specifications for new products',
      'Maintain legacy code',
      'Build new tools and products according to specifications',
      'Collaborate with CTO and security teams to maintain secure and up to date code bases that pass PEN tests',
      'Create meaningful integrations with third party applications',
      'Mentor Junior developers'
    ],
    accomplishments: [
      'Updated deploy procedures from manual FTP file pushes to modern source control driven deployments',
      'Created and maintain an entire patient facing application that integrates physical health monitoring devices',
      'Improved performance in critical products by optimizing queries, in some cases up to 70% performance increase',
      'Built a cross platform mobile application using patient facing application REST API'
    ]
  },
  {
    name: 'AMPTIVE',
    subName: 'formerly i-Showcase',
    timeSpan: 'March 2015 - July 2016',
    icon: ishowcase,
    responsibilities: [
      'Build new client websites',
      'Maintain existing client websites and CMS code',
      'Implement new features in internal CMS',
      'Run knowledge sessions via video calls to educate new clients',
      'Create test questions for new employees'
    ],
    accomplishments: [
      'Rewrote the main search query for the products on websites to improve performance as much as 50%',
      'Implemented new CMS features that saved developers time when creating new websites with a content layout system',
      'Worked alongside the Principal developer to find and fix bugs and performance issues'
    ]
  },
  {
    name: 'AV Web Designs',
    timeSpan: 'January 2013 - March 2015',
    icon: avweb,
    responsibilities: [
      'Build new pixel perfect clients websites from PSD provided by designers',
      'Update and Maintain existing clients websites',
      'Implement new features in internal CMS',
      'Build import processes for e-commerce clients',
      'Create new core system functionalities for internal CMS'
    ],
    accomplishments: [
      'Created a new import interface for automotive clients that reduced onboarding time for data processing',
      'Added functionality for Paypal integrations to client stores',
      'Created new functionality to generate Google shopping data based on client products and variations',
      'Refactored and improved the core CMS functionality for increased performance, flexibility and maintainability'
    ]
  },
];

const projects = [
  {
    name: '2025 Website',
    image: website,
    url: 'https://github.com/bpedroza/website-2025',
    description: 'My new website for 2025. The one you\'re looking at now!',
    tags: ['astro', 'tailwindcss', 'html', 'css', 'javascript']
  },
  {
    name: 'js-pkce',
    image: jspkce,
    url: 'https://github.com/bpedroza/js-pkce',
    description: 'An open source project I built to help make OAuth2 PKCE flow easier.',
    tags: ['typescript', 'jest', 'npm']
  },
  {
    name: 'Evaporative Cooler Calculator',
    image: evap,
    url: 'https://github.com/bpedroza/pwa-evap-calculator',
    description: 'A fun little PWA anyone can use to predict how cool an evaporative cooler can make their house.',
    tags: ['vuejs', 'vuetify', 'pwa']
  }
];

export { links, jobs, projects };