export const pagesData = {
  home: {
    name: 'Israel Sunday',
    role: 'Full Stack Developer',
    tagline: 'Building modern web and mobile applications',
    description:
      'I create scalable, user-friendly applications using modern technologies like React, FastAPI, and Tailwind CSS.',
    cta: {
      primary: 'View Projects',
      secondary: 'Contact Me',
    },
  },

  about: {
    title: 'About Me',
    description:
      'I am a passionate full-stack developer with over 5 years of experience building web and mobile applications. I specialize in creating responsive interfaces and scalable backend systems.',
    details:
      'My focus is on writing clean, maintainable code and delivering high-performance applications. I enjoy solving real-world problems and continuously improving my skills in modern technologies.',
    tags: [
      'UI Engineering',
      'Motion Design',
      'Design Systems',
      'API Integration',
      'Performance Optimization',
      'Accessibility',
    ],
    stats: [
      { label: 'Years Experience', value: '5+' },
      { label: 'Projects Delivered', value: '5+' },
      { label: 'Happy Clients', value: '5+' },
      { label: 'Technologies', value: '18+' },
    ],
  },

  skills: {
    title: 'Skills',
    categories: [
      {
        title: 'Frontend',
        items: [
          { name: 'React', level: 95 },
          { name: 'TypeScript', level: 88 },
          { name: 'Tailwind CSS', level: 92 },
          { name: 'Next.js', level: 84 },
        ],
      },
      {
        title: 'Backend',
        items: [
          { name: 'FastAPI', level: 86 },
          { name: 'Django', level: 84 },
          { name: 'MongoDB', level: 82 },
          { name: 'PostgreSQL', level: 79 },
        ],
      },
      {
        title: 'Tools',
        items: [
          { name: 'Git & GitHub', level: 93 },
          { name: 'Figma', level: 85 },
          { name: 'Docker', level: 60 },
          { name: 'CI/CD', level: 80 },
        ],
      },
    ],
  },

  projects: {
    title: 'Projects',
    filters: ['All', 'Web', 'Mobile', 'SaaS'],
    items: [
      {
        id: 1,
        title: 'Financial Tracker',
        category: 'Web',
        image:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
        description:
          'A finance tracker web app for managing income and expenses.',
        tech: ['React', 'FastAPI', 'Tailwind CSS', 'SQLite'],
        github: 'https://github.com/money-tracker',
        details:
          'Users can track transactions, categorize expenses, and view real-time financial insights.',
      },
      {
        id: 2,
        title: 'Pulse Fitness',
        category: 'Mobile',
        image:
          'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
        description:
          'A workout planner with wearable device integration.',
        tech: ['React Native', 'Firebase', 'Expo'],
        live: 'https://example.com',
        github: 'https://github.com/',
        details:
          'Includes workout tracking, streak systems, and real-time notifications.',
      },
      {
        id: 3,
        title: 'Insight CRM',
        category: 'Web',
        image:
          'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=900&q=80',
        description:
          'A CRM system with analytics dashboards and automation.',
        tech: ['React', 'Chart.js', 'Express', 'PostgreSQL'],
        live: 'https://example.com',
        github: 'https://github.com/',
        details:
          'Helps teams manage leads, track performance, and automate workflows.',
      },
      {
        id: 4,
        title: 'Skyline Dashboard',
        category: 'SaaS',
        image:
          'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
        description:
          'A SaaS admin dashboard with role-based access control.',
        tech: ['Vite', 'Framer Motion', 'Supabase'],
        live: 'https://example.com',
        github: 'https://github.com/',
        details:
          'Provides team management, onboarding, and advanced UI interactions.',
      },
    ],
  },

  contact: {
    title: 'Contact Me',
    description:
      'Have a project or idea? Let’s work together. Feel free to reach out.',
    email: 'youremail@example.com',
    socials: [
      { name: 'GitHub', url: 'https://github.com/isreal123456' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/israel-sunday-3b21352b0/' },
      { name: 'Twitter', url: 'https://x.com/IsraelSund20928' },
    ],
  },
}