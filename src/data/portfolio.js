// ============================================================
// EDIT EVERYTHING ABOUT YOURSELF HERE — one place, whole site.
// ============================================================

export const data = {
  // ---- Identity -------------------------------------------------
  name: 'Jonathan Blessed',
  firstName: 'Jonathan',
  lastName: 'Blessed',
  role: 'Frontend Developer',
  roleLine: 'and I build for the web',
  availability: 'Available for Freelance Projects',
  heroDescription:
    'Frontend developer focused on clean, responsive and user-friendly web experiences. I work with HTML, CSS, JavaScript, React, Vite, Tailwind CSS and Git.',
  heroSubtexts: [
    'clean, responsive web experiences',
    'React applications',
    'pixel-perfect layouts',
    'modern, user-friendly interfaces',
  ],
  photo: '/portfolio.png',

  // ---- Contact --------------------------------------------------
  email: 'blessedjonathan2010@gmail.com',
  location: 'Aba, Nigeria — working globally',
  socials: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://www.linkedin.com/in/blessed-jonathan-2a2b153a3/',
  },

  // ---- About ----------------------------------------------------
  aboutParagraphs: [
    "I'm a frontend developer who enjoys turning designs and ideas into functional, polished web experiences.",
    'I build with React, Tailwind CSS, Vite and Git, and I care about clean code, responsive layouts and simple, sensible solutions to problems.',
    "I'm always learning — exploring how the internet, servers and APIs connect everything behind the scenes — and I'm open to new projects, ideas and opportunities to grow.",
  ],
  aboutBullets: ['Clean, responsive design', 'Component-driven thinking', 'Simple problem solving', 'Always learning'],
  infoList: [
    { label: 'Name', value: 'Jonathan Blessed' },
    { label: 'Role', value: 'Frontend Developer' },
    { label: 'Specialty', value: 'JavaScript & React' },
    { label: 'Location', value: 'Aba, Nigeria' },
    { label: 'Email', value: 'blessedjonathan2010@gmail.com' },
    { label: 'Availability', value: 'Freelance & full-time' },
  ],

  // ---- Skills ---------------------------------------------------
  skills: {
    blurb: 'JavaScript and React at the core, plus the practices that keep projects maintainable long after launch.',
    core: ['HTML5', 'CSS3', 'JavaScript', 'React'],
    build: ['Tailwind CSS', 'Vite', 'Responsive Design', 'Flexbox & Grid'],
    workflow: ['Git & GitHub', 'VS Code', 'Component Thinking', 'Debugging'],
    expanding: ['React (deepening)', 'Next.js', 'TypeScript'],
  },

  // ---- Skill levels (percent bars) -----------------------------
  // adjust the percentages to match your experience
  levels: [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
  ],

  // ---- Currently leveling up -----------------------------------
  learning: [
    { name: 'React (deepening)', level: 75 },
    { name: 'Next.js', level: 40 },
    { name: 'TypeScript', level: 35 },
  ],

  // ---- Services -------------------------------------------------
  services: [
    {
      num: '01',
      title: 'Landing Pages',
      description: 'Clean, responsive marketing pages that work well on mobile and desktop, built with HTML, CSS and JavaScript or React.',
    },
    {
      num: '02',
      title: 'React UI Components',
      description: 'Reusable components and small React applications with clear structure, modern hooks and readable code.',
    },
    {
      num: '03',
      title: 'Responsive Web Design',
      description: 'Layouts that adapt to any screen size using Tailwind CSS, semantic HTML and a mobile-first approach.',
    },
    {
      num: '04',
      title: 'Frontend Integration',
      description: 'Connecting interfaces to APIs and data sources, handling forms, loading states and error feedback.',
    },
    {
      num: '05',
      title: 'Code Refactoring',
      description: 'Cleaning up HTML, CSS and JavaScript code so it is easier to read, maintain and extend over time.',
    },
    {
      num: '06',
      title: 'Git Workflow',
      description: 'Organised commits, branches and pull requests that keep team work smooth and easy to review.',
    },
  ],

  // ---- Projects -------------------------------------------------
  // Add an optional image: "/images/project-name.jpg"
  projects: [
    {
      title: 'Bloom World',
      year: '2026',
      role: 'Developer',
      description: 'A live web project — clean, responsive and built for a great user experience.',
      stack: ['React', 'Tailwind CSS', 'Vite'],
      link: 'https://bloom-world.netlify.app',
      image: '/images/bloom-world.jpg',
    },
    {
      title: 'Lica',
      year: '2026',
      role: 'Developer',
      description: 'A live web project — built with a mobile-first approach and clear structure.',
      stack: ['React', 'Tailwind CSS', 'Vite'],
      link: 'https://lica-livid.vercel.app',
      image: '/images/lica.jpg',
    },
    {
      title: 'Next Project',
      year: 'Coming soon',
      role: 'In Progress',
      description: 'A new build in the works — I will link it here once it is deployed.',
      stack: ['React', 'Tailwind CSS', 'Vite'],
      link: '',
      image: '',
    },
    {
      title: 'Expense Tracker',
      year: '2026',
      role: 'Developer',
      description: 'A live web project — track expenses with a clean, responsive interface.',
      stack: ['React', 'Tailwind CSS', 'Vite'],
      link: 'https://my-expense-tracker-26.netlify.app',
      image: '/images/expense-tracker.jpg',
    },
    {
      title: 'Speak Easy',
      year: '2026',
      role: 'Developer',
      description: 'A live web project — built with a mobile-first approach and clear structure.',
      stack: ['React', 'Tailwind CSS', 'Vite'],
      link: 'https://bejewelled-salamander-b02579.netlify.app',
      image: '/images/speak-easy.jpg',
    },
  ],

  // ---- CV -------------------------------------------------------
  cvFile: '/cv.pdf',
  cvNote: 'One page, ATS-friendly, covering skills, stack and selected project outcomes.',

  // ---- Misc -----------------------------------------------------
  year: 2026,
}