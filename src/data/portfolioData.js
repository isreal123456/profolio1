export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/isreal123456', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/israel-sunday-3b21352b0/', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://x.com/IsraelSund20928', icon: 'twitter' },
]

export const stats = [
  { label: 'Years Experience', value: 5 },
  { label: 'Projects Delivered', value: 5 },
  { label: 'Happy Clients', value: 5 },
  { label: 'Technologies', value: 18 },
]

export const skillCategories = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', level: 95, icon: 'react' },
      { name: 'TypeScript', level: 88, icon: 'typescript' },
      { name: 'Tailwind CSS', level: 92, icon: 'tailwind' },
      { name: 'Next.js', level: 84, icon: 'next' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Fastapi', level: 86, icon: 'node' },
      { name: 'Django', level: 84, icon: 'server' },
      { name: 'MongoDB', level: 82, icon: 'db' },
      { name: 'PostgreSQL', level: 79, icon: 'db' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git & GitHub', level: 93, icon: 'git' },
      { name: 'Figma', level: 85, icon: 'figma' },
      { name: 'Docker', level: 60, icon: 'docker' },
      { name: 'CI/CD', level: 80, icon: 'ci' },
    ],
  },
]

export const projects = [
  {
    id: 1,
    title: 'Neon Commerce',
    category: 'Web',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
    description: 'High-performance storefront with headless CMS and Stripe.',
    tech: ['React', 'Node.js', 'Stripe', 'Tailwind'],
    live: 'https://example.com',
    github: 'https://github.com/',
    details:
      'Built conversion-first experiences with dynamic personalization and a custom analytics dashboard. Improved checkout speed and increased completed orders significantly.',
  },
  {
    id: 2,
    title: 'Pulse Fitness',
    category: 'Mobile',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
    description: 'Cross-platform workout planner with synced wearable data.',
    tech: ['React Native', 'Firebase', 'Expo'],
    live: 'https://example.com',
    github: 'https://github.com/',
    details:
      'Designed a polished training app with streak gamification, subscription handling, and real-time push notifications across devices.',
  },
  {
    id: 3,
    title: 'Insight CRM',
    category: 'Web',
    image:
      'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=900&q=80',
    description: 'Data-rich CRM portal with predictive lead scoring widgets.',
    tech: ['React', 'Chart.js', 'Express', 'PostgreSQL'],
    live: 'https://example.com',
    github: 'https://github.com/',
    details:
      'Implemented live dashboards and automation flows for sales teams. Reduced reporting time through reusable analytics modules and query optimizations.',
  },
  {
    id: 4,
    title: 'Skyline Dashboard',
    category: 'SaaS',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
    description: 'SaaS admin suite with role-based permissions and insights.',
    tech: ['Vite', 'Framer Motion', 'Supabase'],
    live: 'https://example.com',
    github: 'https://github.com/',
    details:
      'Developed scalable access controls, onboarding workflows, and polished micro-interactions for enterprise admins managing multiple teams.',
  },
]

export const projectFilters = ['All', 'Web', 'Mobile', 'SaaS']

export const aboutTags = [
  'UI Engineering',
  'Motion Design',
  'Design Systems',
  'API Integration',
  'Performance Optimization',
  'Accessibility',
]
