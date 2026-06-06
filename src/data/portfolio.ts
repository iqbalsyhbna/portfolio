// ============================================================
//  src/data/portfolio.ts
//  THE SINGLE SOURCE OF TRUTH — Edit only this file!
//  Updated from: Muhammad Iqbal Syahbana — CV
// ============================================================

export const portfolioData = {
  // ─── PROFILE ─────────────────────────────────────────────
  profile: {
    name: "Muhammad Iqbal Syahbana",
    title: "Software Engineer",
    tagline: "Software Engineer & Frontend Specialist",
    shortBio:
      "I craft high-quality, performant web applications with a strong focus on clean code, great user experience, and modern frontend engineering. Currently building impactful products at PT Triatra Sinergia Pratama.",
    longBio:
      "Software Engineer with hands-on experience developing internal web applications, mobile apps, and enterprise systems across multiple industries. I specialize in React.js, PWA, and UI/UX implementation — bridging design and engineering to deliver products that are both beautiful and reliable. Passionate about code quality, team collaboration, and continuously levelling up through learning.",
    avatar: "/images/avatar.jpg",
    location: "Indonesia",
    timezone: "UTC+7",
    email: "iqbalsyahbana.m@gmail.com",
    phone: "+6281273764305",
    cvUrl: "/cv/muhammad-iqbal-syahbana-cv.pdf",
    available: true,
    availableText: "Open to new opportunities",
    responseTime: "Within 24 hours",
    stats: [
      { label: "Years Experience", value: "3+", suffix: "" },
      { label: "Projects Shipped", value: "10+", suffix: "" },
      { label: "GPA", value: "3.92", suffix: "" },
      { label: "Best Student", value: "🏆", suffix: "" },
    ],
    traits: [
      "🇮🇩 Indonesia",
      "💻 Frontend-focused",
      "☕ Coffee lover",
      "📚 Lifelong learner",
      "🎨 UI/UX enthusiast",
    ],
  },

  // ─── SOCIAL LINKS ─────────────────────────────────────────
  socials: [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/iqbalsyahbana",
      icon: "Linkedin",
    },
    {
      platform: "Email",
      url: "mailto:iqbalsyahbana.m@gmail.com",
      icon: "Mail",
    },
    {
      platform: "GitHub",
      url: "https://github.com/iqbalsyahbana",
      icon: "Github",
    },
  ],

  // ─── SKILLS ───────────────────────────────────────────────
  // Sourced directly from CV technical skills section
  skills: [
    // Frontend
    { name: "JavaScript", icon: "🟨", level: 92, category: "Frontend" },
    { name: "HTML5 & CSS3", icon: "🌐", level: 95, category: "Frontend" },
    { name: "React.js", icon: "⚛️", level: 90, category: "Frontend" },
    { name: "Redux", icon: "🔁", level: 82, category: "Frontend" },
    { name: "PWA", icon: "📱", level: 75, category: "Frontend" },
    { name: "Performance Opt.", icon: "⚡", level: 75, category: "Frontend" },

    // Backend / API
    { name: "RESTful APIs", icon: "🔌", level: 85, category: "Backend" },
    { name: "Axios", icon: "📡", level: 85, category: "Backend" },
    { name: "Laravel", icon: "🔴", level: 72, category: "Backend" },
    { name: "MySQL", icon: "🐬", level: 78, category: "Backend" },
    { name: "Firebase", icon: "🔥", level: 75, category: "Backend" },

    // DevOps / Tools
    { name: "Git & GitHub", icon: "🐙", level: 88, category: "DevOps" },
    { name: "Azure DevOps", icon: "☁️", level: 72, category: "DevOps" },
    { name: "Jira", icon: "🎯", level: 78, category: "DevOps" },

    // Mobile
    { name: "Flutter", icon: "💙", level: 78, category: "AI/ML" },

    // Design
    { name: "Figma", icon: "🎨", level: 82, category: "Design" },
    { name: "Sketch", icon: "💎", level: 65, category: "Design" },
    { name: "UI/UX Design", icon: "🖌️", level: 80, category: "Design" },
    { name: "Wireframing", icon: "✏️", level: 82, category: "Design" },
    { name: "Prototyping", icon: "🖥️", level: 80, category: "Design" },
  ],

  // ─── TECHNOLOGIES (Tech Stack) ────────────────────────────
  technologies: [
    { name: "React.js", category: "Library", color: "#61dafb" },
    { name: "JavaScript", category: "Language", color: "#f7df1e" },
    { name: "HTML5 & CSS3", category: "Markup/Styling", color: "#e34f26" },
    { name: "Laravel", category: "Framework", color: "#ff2d20" },
    { name: "Flutter", category: "Mobile", color: "#54c5f8" },
    { name: "MySQL", category: "Database", color: "#4479a1" },
    { name: "Firebase", category: "BaaS", color: "#ffca28" },
    { name: "Figma", category: "Design", color: "#f24e1e" },
    { name: "Git & GitHub", category: "Version Control", color: "#f05032" },
    { name: "Azure DevOps", category: "CI/CD", color: "#0078d4" },
    { name: "PWA", category: "Web Tech", color: "#5a0fc8" },
  ],

  // ─── WORK EXPERIENCE ─────────────────────────────────────
  experiences: [
    {
      id: "exp-1",
      role: "Software Engineer",
      company: "PT Triatra Sinergia Pratama",
      type: "Contract",
      period: "May 2023 — Present",
      duration: "2+ years",
      location: "Jakarta, Indonesia",
      current: true,
      description:
        "Developing the front-end of an internal website-based application called 'Dikantor' in Desktop and Mobile versions using React.js and PWA. Actively coordinating with Product, Design, and Engineering teams to deliver high-quality products.",
      achievements: [
        "Successfully launched 'Dikantor' internal app within 6 months — Desktop & Mobile (PWA)",
        "Coordinated cross-functionally with Product, Design, and Engineering using GitHub, Jira, and Azure DevOps",
        "Contributed to engineering hygiene via code reviews, ESLint, unit testing, and API integration",
        "Collected and analyzed business data from MySQL database per specific business requirements",
      ],
      technologies: ["React.js", "PWA", "JavaScript", "MySQL", "GitHub", "Jira", "Azure DevOps", "ESLint"],
      logo: "/logos/triatra.png",
    },
    {
      id: "exp-2",
      role: "System Analyst Intern",
      company: "PT United Tractors",
      type: "Internship",
      period: "Aug 2022 — Dec 2022",
      duration: "5 months",
      location: "Jakarta, Indonesia",
      current: false,
      description:
        "Conducted interviews and surveys to identify and document requirements for the company profile website. Designed workflows and process diagrams using Microsoft Visio, and created wireframes and high-fidelity prototypes in Figma. Collaborated with external vendors.",
      achievements: [
        "Documented project requirements using Trello — led to well-defined project scope",
        "Designed comprehensive workflows & process diagrams with Microsoft Visio",
        "Created low-fidelity wireframes & high-fidelity prototypes in Figma",
        "Provided continuous feedback to external vendor to meet design standards",
      ],
      technologies: ["Figma", "Microsoft Visio", "Trello", "UI/UX Design", "Wireframing", "Prototyping"],
      logo: "/logos/united-tractors.png",
    },
    {
      id: "exp-3",
      role: "Software Engineer Intern",
      company: "PT Perkebunan Nusantara VII",
      type: "Internship",
      period: "Apr 2022 — Sep 2022",
      duration: "6 months",
      location: "Lampung, Indonesia",
      current: false,
      description:
        "Programmed internal HR applications using Flutter, Laravel, and MySQL to optimize employee data management. Used Excel and SQL to manage employee records and performance metrics. Deployed a rubber production monitoring app with the development team.",
      achievements: [
        "Built internal HR apps using Flutter, Laravel & MySQL — improved operational efficiency",
        "Managed employee records & performance metrics via Excel and SQL",
        "Deployed rubber production monitoring app ensuring regulatory compliance",
        "Collaborated using Git, GitHub, and Trello for source control and project management",
      ],
      technologies: ["Flutter", "Laravel", "MySQL", "Git", "GitHub", "Trello", "Excel", "SQL"],
      logo: "/logos/ptpn7.png",
    },
  ],

  // ─── ORGANIZATIONS ────────────────────────────────────────
  organizations: [
    {
      id: "org-1",
      role: "Member — UI/UX Designer & Frontend Developer",
      organization: "Gradien Digital Indonesia",
      period: "Feb 2021 — Mar 2022",
      description:
        "Deployed a fundraising website for orphanages named 'Amal Kita' in 1 month with a team of seven. Acted as UI/UX designer and frontend developer. Assisted in planning 3 business ideas in website form to support economics, social, and health during the pandemic era.",
      logo: "/logos/gradien.png",
    },
  ],

  // ─── PROJECTS ─────────────────────────────────────────────
  projects: [
    {
      id: "proj-1",
      name: "Dikantor — Internal Workplace App",
      shortName: "Dikantor",
      description:
        "Internal website-based application (Desktop & Mobile PWA) built for PT Triatra Sinergia Pratama to support business processes. Launched within 6 months.",
      longDescription:
        "Dikantor is a Progressive Web App (PWA) built with React.js, supporting both Desktop and Mobile usage. It streamlines internal business processes and employee workflows. The project was delivered in close collaboration with Product, Design, and Engineering teams, following best practices for code quality and API integration.",
      thumbnail: "/projects/dikantor.jpg",
      tags: ["Featured"],
      category: "SaaS",
      technologies: ["React.js", "PWA", "JavaScript", "MySQL", "Azure DevOps", "ESLint"],
      github: "https://github.com/iqbalsyahbana",
      demo: "#",
      caseStudy: null,
      featured: true,
      large: true,
      year: 2023,
      metrics: { launched: "6 months", type: "Desktop + Mobile", status: "Live" },
    },
    {
      id: "proj-2",
      name: "Amal Kita — Fundraising Website",
      shortName: "Amal Kita",
      description:
        "Fundraising website for orphanages, built in 1 month as part of Gradien Digital Indonesia with a 7-person team. Focused on responsive UI/UX.",
      longDescription:
        "Amal Kita is a fundraising platform for orphanages, designed and developed during the COVID-19 pandemic to support social welfare. Built with HTML, CSS, and JavaScript with a focus on fast load times and good user experience across devices. Responsible for UI/UX design (Figma wireframes & prototypes) and frontend implementation.",
      thumbnail: "/projects/amal-kita.jpg",
      tags: ["Open Source"],
      category: "OSS",
      technologies: ["HTML5", "CSS3", "JavaScript", "Figma"],
      github: "https://github.com/iqbalsyahbana",
      demo: "#",
      caseStudy: null,
      featured: true,
      large: false,
      year: 2021,
      metrics: { teamSize: "7 people", duration: "1 month", platform: "Web" },
    },
    {
      id: "proj-3",
      name: "HR Management App — PTPN VII",
      shortName: "HR App",
      description:
        "Internal HR mobile application for PT Perkebunan Nusantara VII built with Flutter, Laravel, and MySQL to optimize employee data management.",
      longDescription:
        "A cross-platform mobile application for the Human Capital department at PTPN VII. Features employee record management, performance metrics tracking, and HR process optimization. Built with Flutter for the frontend and Laravel + MySQL for the backend, deployed using Git/GitHub and managed via Trello.",
      thumbnail: "/projects/hr-app.jpg",
      tags: ["Featured"],
      category: "E-commerce",
      technologies: ["Flutter", "Laravel", "MySQL", "Git", "GitHub"],
      github: "https://github.com/iqbalsyahbana",
      demo: "#",
      caseStudy: null,
      featured: true,
      large: false,
      year: 2022,
      metrics: { platform: "Mobile", stack: "Flutter + Laravel", type: "Internal" },
    },
    {
      id: "proj-4",
      name: "Mobile Multi-Platform App",
      shortName: "Flutter App",
      description:
        "Award-winning mobile multi-platform application developed during Studi Independen Kampus Merdeka — Dicoding Indonesia. Awarded Best Student.",
      longDescription:
        "Developed as part of the Kampus Merdeka independent study program at Dicoding Indonesia. The app focused on intuitive UI design and smooth UX, utilizing Flutter and Firebase. Collaborated with a team to design and present the final project to a panel of judges.",
      thumbnail: "/projects/flutter-app.jpg",
      tags: ["AI/ML"],
      category: "AI",
      technologies: ["Flutter", "Firebase", "Dart", "UI/UX Design"],
      github: "https://github.com/iqbalsyahbana",
      demo: "#",
      caseStudy: null,
      featured: false,
      large: false,
      year: 2021,
      metrics: { award: "Best Student", program: "Kampus Merdeka", tech: "Flutter + Firebase" },
    },
    {
      id: "proj-5",
      name: "Company Profile Website — United Tractors",
      shortName: "UT Website",
      description:
        "Led requirements gathering and design for the PT United Tractors company profile website. Created wireframes, prototypes, and collaborated with external vendors.",
      longDescription:
        "As a System Analyst Intern at PT United Tractors, led the requirements engineering process — conducting stakeholder interviews, creating process diagrams in Microsoft Visio, and designing UI/UX prototypes in Figma. Managed communication and feedback loop with the external development vendor.",
      thumbnail: "/projects/ut-website.jpg",
      tags: ["Featured"],
      category: "Analytics",
      technologies: ["Figma", "Microsoft Visio", "Trello", "System Analysis"],
      github: "#",
      demo: "#",
      caseStudy: null,
      featured: false,
      large: false,
      year: 2022,
      metrics: { role: "System Analyst", output: "Full Design Spec", client: "PT United Tractors" },
    },
  ],

  // ─── CERTIFICATIONS ───────────────────────────────────────
  certifications: [
    {
      id: "cert-1",
      name: "Best Student — Mobile Multi-Platform App",
      issuer: "Dicoding Indonesia × Kampus Merdeka",
      date: "Sep 2021",
      credentialId: "KAMPUS-MERDEKA-2021",
      credentialUrl: "https://dicoding.com",
      logo: "/logos/dicoding.png",
      icon: "🏆",
      color: "rgba(251,191,36,0.15)",
    },
    {
      id: "cert-2",
      name: "Studi Independen — Mobile Development",
      issuer: "Dicoding Indonesia",
      date: "Sep 2021",
      credentialId: "DICODING-MOBILE-2021",
      credentialUrl: "https://dicoding.com",
      logo: "/logos/dicoding.png",
      icon: "📱",
      color: "rgba(52,211,153,0.15)",
    },
  ],

  // ─── EDUCATION ───────────────────────────────────────────
  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Informatics Engineering",
      major: "Informatics Engineering",
      institution: "University of Lampung",
      period: "Aug 2019 — Jul 2023",
      gpa: "3.92 / 4.00",
      description:
        "Completed Bachelor's degree in Informatics Engineering with a strong GPA of 3.92/4.00. Focused on software engineering, mobile development, and UI/UX design. Active in student organizations and independent study programs.",
      activities: [
        "Studi Independen Kampus Merdeka — Dicoding Indonesia (Best Student)",
        "Member of Gradien Digital Indonesia — UI/UX & Frontend Developer",
        "Flutter & Firebase Mobile App Development",
      ],
      logo: "/logos/unila.png",
    },
  ],

  // ─── ACHIEVEMENTS & AWARDS ────────────────────────────────
  achievements: [
    {
      id: "ach-1",
      title: "Best Student — Mobile Multi-Platform App",
      issuer: "Studi Independen Kampus Merdeka × Dicoding Indonesia",
      year: "2021",
      description:
        "Awarded Best Student for exceptional performance in developing a mobile multi-platform application using Flutter and Firebase, demonstrated through a final project presentation to panel judges.",
      icon: "🏆",
    },
    {
      id: "ach-2",
      title: "Launched 'Dikantor' PWA in 6 Months",
      issuer: "PT Triatra Sinergia Pratama",
      year: "2023",
      description:
        "Successfully delivered a full internal PWA (Desktop + Mobile) supporting business processes within a 6-month timeline, coordinating across Product, Design, and Engineering teams.",
      icon: "🚀",
    },
    {
      id: "ach-3",
      title: "GPA 3.92 / 4.00",
      issuer: "University of Lampung",
      year: "2023",
      description:
        "Graduated with a near-perfect GPA of 3.92/4.00 in Informatics Engineering, demonstrating consistent academic excellence throughout the program.",
      icon: "🎓",
    },
    {
      id: "ach-4",
      title: "Fundraising Website 'Amal Kita' — 1 Month Delivery",
      issuer: "Gradien Digital Indonesia",
      year: "2021",
      description:
        "Co-built and shipped a full fundraising web platform for orphanages in just 1 month as UI/UX designer and frontend developer within a 7-person team.",
      icon: "❤️",
    },
  ],

  // ─── TESTIMONIALS ─────────────────────────────────────────
  // Placeholder — replace with real testimonials
  testimonials: [
    {
      id: "test-1",
      quote:
        "Iqbal delivered exceptional front-end work on our Dikantor application. His attention to detail, clean code practices, and ability to coordinate across teams made him an invaluable part of the engineering squad.",
      author: "Team Lead",
      title: "Engineering Lead",
      company: "PT Triatra Sinergia Pratama",
      avatar: null,
      initials: "TL",
      rating: 5,
      color: "rgba(232,121,249,0.3)",
    },
    {
      id: "test-2",
      quote:
        "Iqbal brought a rare combination of UI/UX sensibility and solid engineering skills. His Figma prototypes were thorough and his feedback loop with our vendor was always professional and constructive.",
      author: "Supervisor",
      title: "IT Manager",
      company: "PT United Tractors",
      avatar: null,
      initials: "SP",
      rating: 5,
      color: "rgba(52,211,153,0.3)",
    },
    {
      id: "test-3",
      quote:
        "Outstanding intern. Iqbal built our HR mobile app from scratch using Flutter and Laravel within the internship period. His professionalism and technical depth were well beyond his experience level.",
      author: "Supervisor",
      title: "IT Supervisor",
      company: "PT Perkebunan Nusantara VII",
      avatar: null,
      initials: "SV",
      rating: 5,
      color: "rgba(96,165,250,0.3)",
    },
  ],

  // ─── BLOG POSTS (preview) ────────────────────────────────
  // Replace with your actual blog posts
  blogPosts: [
    {
      id: "blog-1",
      title: "Building a PWA with React.js: Lessons from Dikantor",
      excerpt:
        "Key lessons learned building a production-grade Progressive Web App for enterprise use — from architecture to deployment.",
      date: "Jun 10, 2026",
      readTime: "7 min read",
      slug: "building-pwa-with-reactjs",
      tags: ["React.js", "PWA"],
      cover: "/blog/pwa-react.jpg",
    },
    {
      id: "blog-2",
      title: "Flutter for Beginners: From Zero to App Store",
      excerpt:
        "A complete guide to getting started with Flutter, based on my experience developing multi-platform apps from scratch.",
      date: "Mar 20, 2026",
      readTime: "10 min read",
      slug: "flutter-beginners-guide",
      tags: ["Flutter", "Mobile"],
      cover: "/blog/flutter-guide.jpg",
    },
    {
      id: "blog-3",
      title: "UI/UX Design with Figma: My Workflow for Devs",
      excerpt:
        "How I approach UI/UX design as a developer — from low-fi wireframes to high-fidelity prototypes in Figma.",
      date: "Jan 5, 2026",
      readTime: "5 min read",
      slug: "figma-workflow-for-devs",
      tags: ["Figma", "UI/UX"],
      cover: "/blog/figma-workflow.jpg",
    },
  ],

  // ─── SEO & META ───────────────────────────────────────────
  seo: {
    title: "Muhammad Iqbal Syahbana — Software Engineer",
    description:
      "Software Engineer specializing in React.js, PWA, Flutter, and UI/UX design. Based in Indonesia. Currently building 'Dikantor' at PT Triatra Sinergia Pratama.",
    keywords: [
      "Software Engineer Indonesia",
      "React.js Developer",
      "Frontend Engineer",
      "PWA Developer",
      "Flutter Developer",
      "UI/UX Designer",
      "Muhammad Iqbal Syahbana",
    ],
    ogImage: "/og-image.jpg",
    url: "https://iqbalsyahbana.dev",
    twitterHandle: "@iqbalsyahbana",
  },
} as const;

export type PortfolioData = typeof portfolioData;