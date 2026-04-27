export const data = {
  navLinks: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ],

  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/isreal123456',
      icon: 'github',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/israel-sunday-3b21352b0/',
      icon: 'linkedin',
    },
    {
      name: 'Twitter',
      url: 'https://x.com/IsraelSund20928',
      icon: 'twitter',
    },
  ],

  home: {
    name: 'Israel Sunday',
    role: 'Full Stack Developer',
    tagline: 'Building modern web applications',
    description:
      'I build scalable, fast, and user-friendly web and mobile applications using modern technologies.',
  },

  about: {
    description:
      'I am a full-stack developer with strong experience in building modern web applications. I enjoy creating clean UI, scalable backend systems, and solving real-world problems.',
    stats: [
      { label: 'Years Experience', value: '5+' },
      { label: 'Projects Delivered', value: '5+' },
      { label: 'Happy Clients', value: '5+' },
      { label: 'Technologies', value: '18+' },
    ],
    tags: [
      'UI Engineering',
      'Full Stack Development',
      'Motion Design',
      'Design Systems',
      'API Integration',
      'Performance Optimization',
      'Accessibility',
    ],
  },

  skills: [
    {
      title: 'Frontend',
      items: [
        { name: 'React', level: 90, icon: 'react' },
        { name: 'TypeScript', level: 58, icon: 'typescript' },
        { name: 'Tailwind CSS', level: 92, icon: 'tailwind' },
        { name: 'Next.js', level: 84, icon: 'next' },
      ],
    },
    {
      title: 'Backend',
      items: [
        { name: 'FastAPI', level: 86, icon: 'server' },
        { name: 'Django', level: 84, icon: 'server' },
        { name: 'MongoDB', level: 72, icon: 'db' },
        { name: 'PostgreSQL', level: 89, icon: 'db' },
      ],
    },
    {
      title: 'Tools',
      items: [
        { name: 'Git & GitHub', level: 93, icon: 'git' },
        { name: 'Figma', level: 85, icon: 'figma' },
        // { name: 'Docker', level: 60, icon: 'docker' },
        { name: 'CI/CD', level: 80, icon: 'ci' },
      ],
    },
  ],

  projects: {
    filters: ['All', 'Web', 'Mobile', 'SaaS'],
    items: [
      {
        id: 1,
        title: 'Financial Tracker', // fixed typo
        category: 'Web',
        image:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
        description:
          'A finance tracker web app to manage income and expenses.',
        tech: ['React', 'FastAPI', 'Tailwind CSS', 'SQLite'],
        live: 'https://money-tracker-pi-two.vercel.app/',
        github: 'https://github.com/isreal123456/money_tracker.git',
        details:
          'Users can record transactions, categorize spending, and track financial balance in real-time.',
      },
      {
        id: 2,
        title: 'Inventory Manager',
        category: 'Web',
        image:
          'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=900&q=80',
        description:
          'Inventory management system with dashboards and analytics.',
        tech: ['React', 'Chart.js', 'Tailwind CSS', 'FastAPI'],
        github: 'https://github.com/isreal123456/solidv2.git',
        details:
          'The Inventory Manager allows businesses to track stock levels, manage suppliers, and analyze sales trends through interactive dashboards.',
      },
      {
        id: 3,
        title: 'StyleHub',
        category: 'SaaS',
        image:
          'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
        description:
          'E-commerce frontend for fashion retailers.',
        tech: ['Vite','Tailwind CSS'],
        live: 'https://shop-wine-alpha.vercel.app/',
        github: 'https://github.com/isreal123456/shop.git',
        details:
          'StyleHub is a responsive e-commerce frontend built with React, featuring product browsing, cart functionality, and admin simulation using mock data. Designed with scalability',
      },
    ],
  },

  contact: {
    email: 'sundayisrael41@gmail.com',
    message:
      'Have a project or idea? Let’s work together.',
  },
}

export const navLinks = data.navLinks
export const socialLinks = data.socialLinks
export const home = data.home
export const about = data.about
export const stats = data.about.stats.map((stat) => ({
  ...stat,
  value: Number.parseInt(String(stat.value), 10) || 0,
}))
export const aboutTags = data.about.tags
export const skillCategories = data.skills
export const projectFilters = data.projects.filters
export const projects = data.projects.items
export const contact = data.contact