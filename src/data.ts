import { Project, Skill, TimelineItem, ClientLogo, Testimonial, Achievement } from './types';

const ashaBoutiqueImage = new URL('../media/project_images/Screenshot 2026-04-27 145501.png', import.meta.url).href;
const zayEcommerceImage = new URL('../media/project_images/Screenshot 2026-05-04 163757.png', import.meta.url).href;
const signalMindImage = new URL('../media/project_images/signalmind.png', import.meta.url).href;
const smartHealthImage = new URL('../media/project_images/SmartHealth.png', import.meta.url).href;
const whiteboardImage = new URL('../media/project_images/Interactive Whiteboard project.png', import.meta.url).href;
const expenseTrackerImage = new URL('../media/project_images/expensetracker.jpg', import.meta.url).href;
const itVedantHackathonImage = new URL('../media/project_images/IT Vedant Hackthon 2026.jpeg', import.meta.url).href;
const athenuraHackathonImage = new URL('../media/project_images/Athenura.jpg', import.meta.url).href;
const profileImage = new URL('../media/project_images/profile-image.jpeg', import.meta.url).href;

export { profileImage };

export const portfolioOwner = {
  name: "MANISH PAWAR",
  title: "Java Full Stack Developer & Electronics Engineer",
  subtitle: "Hi, I’m Manish Pawar",
  description: "B.Tech graduate in Electronics and Telecommunication Engineering from YCCE Nagpur, aspiring to build a career as a Java Full Stack Developer. Trained at IT Vedant with hands-on experience in building modern web applications.",
  aboutDetailed: "B.Tech graduate in Electronics and Telecommunication Engineering from Yeshwantrao Chavan College of Engineering (YCCE), Nagpur, aspiring to build a career as a Java Full Stack Developer. Trained at IT Vedant with hands-on experience in HTML, CSS, Bootstrap, JavaScript, React.js, Java, Spring Boot, and MySQL through academic and personal projects. Strong foundation in C, C++, and Object-Oriented Programming with excellent problem-solving and analytical skills. Passionate about developing responsive, user-friendly web applications and continuously learning modern technologies to deliver high-quality software solutions.",
  phone: "+91 9322097485",
  email: "manishpawar172003@gmail.com",
  github: "https://github.com/Manishp19311",
  linkedin: "https://linkedin.com/in/manish-pawar-880011370",
  twitter: "#",
  instagram: "https://www.instagram.com/manish_p193/?hl=en",
  experienceYearCount: 1,
  deliveryCount: "6+",
  satisfactionRate: "100%",
  trustedClientsCount: "2+"
};

export const clientLogos: ClientLogo[] = [
  { name: "YCCE Nagpur", iconSvg: "YCCE" },
  { name: "IT Vedant", iconSvg: "IT Vedant" },
  { name: "MNT Industries", iconSvg: "MNT Ind" },
  { name: "TuteDude", iconSvg: "TuteDude" },
  { name: "Athenura", iconSvg: "Athenura" }
];

export const skills: Skill[] = [
  // Frontend
  { name: "HTML5", level: 95, icon: "CodeHtml", category: "frontend", color: "from-orange-500 to-red-500" },
  { name: "CSS3", level: 92, icon: "CodeCss", category: "frontend", color: "from-blue-500 to-cyan-500" },
  { name: "Bootstrap 5", level: 90, icon: "CodeTailwind", category: "frontend", color: "from-purple-500 to-indigo-500" },
  { name: "JavaScript", level: 85, icon: "CodeJs", category: "frontend", color: "from-yellow-400 to-amber-500" },
  { name: "React.js", level: 80, icon: "CodeReact", category: "frontend", color: "from-cyan-400 to-blue-500" },
  
  // Backend & Databases
  { name: "Java", level: 80, icon: "CodeHtml", category: "backend", color: "from-red-500 to-orange-500" },
  { name: "Spring Boot", level: 75, icon: "CodeHtml", category: "backend", color: "from-green-600 to-emerald-500" },
  { name: "Node.js", level: 75, icon: "CodeHtml", category: "backend", color: "from-green-500 to-emerald-600" },
  { name: "MySQL", level: 85, icon: "Database", category: "backend", color: "from-indigo-600 to-blue-700" },
  
  // Tools & Programming
  { name: "C / C++", level: 88, icon: "CodeHtml", category: "tools", color: "from-sky-500 to-blue-600" },
  { name: "Git & GitHub", level: 85, icon: "CodeGit", category: "tools", color: "from-neutral-700 to-neutral-900" },
  { name: "Docker", level: 70, icon: "CodeHtml", category: "tools", color: "from-blue-500 to-cyan-500" },
  { name: "VS Code", level: 90, icon: "CodeHtml", category: "tools", color: "from-blue-500 to-indigo-500" }
];

export const projects: Project[] = [
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    description: "Full-stack financial management platform with Spring Boot, JWT authentication, Docker, MySQL, and React frontend.",
    longDescription: "A production-grade full-stack Expense Tracker engineered with Spring Boot, React, TypeScript, and MySQL. Features JWT authentication and Spring Security for secure user login and protected endpoints, comprehensive RESTful APIs with CRUD operations, Docker containerization deployed on Render, and a responsive frontend deployed on Vercel connecting to a cloud-hosted MySQL database.",
    image: expenseTrackerImage,
    tags: ["Spring Boot", "React.js", "TypeScript", "MySQL", "JWT Security", "Docker", "Render"],
    liveUrl: "https://samrt-ai-cop.vercel.app/",
    githubUrl: "https://github.com/Manishp19311",
    featured: true,
    category: "Full Stack & Java",
    stats: "Spring Boot & Docker"
  },
  {
    id: "signal-mind",
    title: "Signal Mind",
    description: "AI-Powered Urban Traffic & Transit Optimization Platform that leverages real-time road grid data and AI models to predict congestion and optimize routes.",
    longDescription: "An intelligent traffic management and urban transit platform that leverages real-time road grid data and AI models to predict congestion, optimize multi-modal commute routes, clear emergency corridors, and track real-time CO₂ emission reductions across urban grids.",
    image: signalMindImage,
    tags: ["AI/ML", "React.js", "Real-time Data", "Urban Tech"],
    liveUrl: "https://samrt-ai-cop.vercel.app/",
    githubUrl: "https://github.com/Manishp19311",
    featured: true,
    category: "AI & Data Science",
    stats: "AI-Powered"
  },
  {
    id: "smart-health",
    title: "SmartHealth Management System",
    description: "Digital healthcare platform with specialist discovery, instant appointment scheduling, and electronic health records.",
    longDescription: "A comprehensive digital healthcare management platform engineered to connect patients with certified medical specialists. Features intelligent doctor discovery filters by department, automated appointment booking workflows, electronic health records, and an accessible, responsive medical dashboard.",
    image: smartHealthImage,
    tags: ["React.js", "Healthcare Tech", "REST APIs", "Tailwind CSS", "Medical UI"],
    liveUrl: "https://smart-healthcare-management-system.vercel.app/",
    githubUrl: "https://github.com/Manishp19311",
    featured: true,
    category: "Web Application",
    stats: "Digital Clinic Hub"
  },
  {
    id: "interactive-whiteboard",
    title: "Real-Time Interactive Whiteboard",
    description: "Collaborative digital canvas with instant multi-user drawing, dynamic room creation, geometric primitives, and canvas export.",
    longDescription: "A high-performance digital whiteboard built for low-latency remote collaboration. Features smooth vector freehand sketching, customizable geometric shapes, sticky notes, eraser and brush sizing controls, room-based multiplayer synchronization, template selector, and one-click canvas export.",
    image: whiteboardImage,
    tags: ["React.js", "Canvas API", "WebSockets", "Multiplayer Sync", "UI/UX"],
    liveUrl: "https://real-time-interactive-white-board.vercel.app/",
    githubUrl: "https://github.com/Manishp19311",
    featured: true,
    category: "Real-Time Collaboration",
    stats: "Multiplayer Canvas"
  },
  {
    id: "asha-boutique",
    title: "Asha Boutique Store",
    description: "Elegant boutique storefront with curated fashion sections, appointment booking, and polished responsive layout.",
    longDescription: "A boutique fashion website crafted around a premium storefront experience. Built with a refined hero section, lookbook-style visuals, appointment-focused calls to action, and responsive spacing that keeps the brand presentation clean across devices.",
    image: ashaBoutiqueImage,
    tags: ["React.js", "CSS3", "Responsive Web Design", "UI Design"],
    liveUrl: "https://asha-boutique-store.vercel.app/",
    githubUrl: "https://github.com/Manishp19311",
    featured: true,
    category: "E-Commerce",
    stats: "Live Storefront"
  },
  {
    id: "zay-ecommerce",
    title: "Zay E-Commerce Website",
    description: "Responsive sportswear e-commerce storefront built with HTML, CSS, and Bootstrap 5.",
    longDescription: "A bespoke sportswear e-commerce storefront. Engineered with smooth responsive navigation (navbar), interactive product grids, category cards, modern carousels, and footers. Applied custom media queries and Bootstrap's flex system for outstanding responsiveness across screen sizes.",
    image: zayEcommerceImage,
    tags: ["HTML5", "CSS3", "Bootstrap 5", "Responsive Web Design"],
    liveUrl: "https://e-commerce-website-lake-three.vercel.app/",
    githubUrl: "https://github.com/Manishp19311",
    featured: true,
    category: "E-Commerce",
    stats: "Bootstrap 5 Grid"
  }
];

export const achievements: Achievement[] = [
  {
    id: "it-vedant-hackathon",
    title: "IT Vedant Hackathon 2026",
    position: "1st Place 🥇",
    hackathon: "IT Vedant Hackathon 2026",
    project: "SIGNAL MIND – AI-Powered Smart Traffic Management System",
    team: ["Pranati Dahiwale (Team Leader)", "Manish Pawar", "Yamini Bisen", "Nitin Diwewar"],
    image: itVedantHackathonImage,
    year: "2026"
  },
  {
    id: "athenura-hackathon",
    title: "Athenura (ATH) Hackathon",
    position: "3rd Place 🥉",
    hackathon: "Athenura (ATH) Hackathon",
    project: "Krishi Mitra",
    team: ["Code Crushers Team"],
    prize: "₹1,100",
    image: athenuraHackathonImage,
    year: "2026"
  }
];

export const timelineItems: TimelineItem[] = [
  {
    id: "exp-mnt",
    role: "Technical Intern",
    company: "MNT Industries",
    duration: "2024",
    description: [
      "Gained hands-on exposure to real-world industrial workflows and processes.",
      "Assisted in technical tasks and translated theoretical concepts into practice.",
      "Strengthened teamwork, communication, and software problem-solving in a professional team setting."
    ],
    icon: "Briefcase",
    type: "experience"
  },
  {
    id: "exp-athenura",
    role: "Frontend Developer Intern",
    company: "Athenura",
    duration: "June 2026 – Present",
    description: [
      "Engineered responsive, user-centric web interfaces using modern frontend technologies (HTML5, CSS3, Bootstrap 5, and React.js).",
      "Collaborated on UI/UX improvements to enhance visual consistency, accessibility, and cross-browser compatibility.",
      "Optimized component structure and page layout rendering for improved frontend performance and maintainability."
    ],
    icon: "Briefcase",
    type: "experience",
    website: "https://www.athenura.in/",
    linkedin: "https://www.linkedin.com/company/athenura/posts/?feedView=all"
  },
  {
    id: "edu-btech",
    role: "B.Tech — Electronics & Telecommunication Engineering",
    company: "Yeshwantrao Chavan College of Engineering, Nagpur",
    duration: "2022 – 2026",
    description: [
      "Acquiring strong analytical and problem-solving skills in high-frequency communications and data systems."
    ],
    icon: "GraduationCap",
    type: "education"
  },
  {
    id: "edu-hsc",
    role: "12th (HSC) — 92%",
    company: "Vidya Sadhana Junior College",
    duration: "Graduated",
    description: [
      "Achieved a top 92% result in rigorous science, math, and engineering foundation streams."
    ],
    icon: "GraduationCap",
    type: "education"
  },
  {
    id: "edu-ssc",
    role: "10th (SSC) — 89%",
    company: "Vidya Sadhana High School",
    duration: "Graduated",
    description: [
      "Graduated with 89% overall score, initiating deep analytical and mathematical skills development."
    ],
    icon: "GraduationCap",
    type: "education"
  },
  {
    id: "cert-java",
    role: "Java Full Stack Development Core Certification",
    company: "IT Vedant",
    duration: "Ongoing",
    description: [
      "Intense training on Java programming, Java J2EE architectures, relational database management (MySQL), and modern front-end packages."
    ],
    icon: "Award",
    type: "education"
  },
  {
    id: "cert-react",
    role: "React Essentials (React.js Skill Badge)",
    company: "IT Vedant",
    duration: "April 2025",
    description: [
      "Learned state synchronization, reactive variables, Hooks workflow (useState, useEffect, useContext), and structural styling."
    ],
    icon: "Award",
    type: "education"
  },
  {
    id: "cert-sql",
    role: "SQL Deep Dive (MySQL Relational Design)",
    company: "IT Vedant",
    duration: "May 2025",
    description: [
      "Gained strong database foundations on complex queries, primary/foreign key connections, indices, joins, and normalizations."
    ],
    icon: "Award",
    type: "education"
  },
  {
    id: "cert-cpp",
    role: "C++ Programming Certification",
    company: "TuteDude",
    duration: "March 2025",
    description: [
      "Aquired solid foundations using core C++ programming structures, memory pointers, function overloads, classes, and objects."
    ],
    icon: "Award",
    type: "education"
  },
  {
    id: "cert-web",
    role: "Web Development Essentials (HTML, CSS, Bootstrap)",
    company: "IT Vedant",
    duration: "Jan 2025",
    description: [
      "Mastered responsive grid layouts, custom style overrides, semantic coding practices, and user-centric web forms."
    ],
    icon: "Award",
    type: "education"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "testm-1",
    name: "Internal Advisor",
    role: "Senior Engineering Supervisor",
    company: "MNT Industries",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=120&h=120&q=80",
    comment: "Manish displayed tremendous technical discipline during his internship duration at MNT. He was quick to translate theoretical ideas into functional practice and demonstrated exceptional teamwork.",
    rating: 5
  },
  {
    id: "testm-2",
    name: "Technical Evaluator",
    role: "Lead Full Stack Instructor",
    company: "IT Vedant",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=facearea&facepad=2&w=120&h=120&q=80",
    comment: "An enthusiastic and highly dedicated student of Java Full Stack technologies. Manish grasps concepts of responsive web design and JavaScript exceptionally fast.",
    rating: 5
  }
];

export const resumeData = {
  personal: {
    name: "MANISH PAWAR",
    title: "Java Full Stack Developer & Electronics Engineer",
    phone: "+91 9322097485",
    email: "manishpawar172003@gmail.com",
    linkedin: "https://linkedin.com/in/manish-pawar-880011370",
    linkedinDisplay: "linkedin.com/in/manish-pawar-880011370",
    github: "https://github.com/Manishp19311",
    githubDisplay: "github.com/Manishp19311",
    location: "Nagpur, Maharashtra, India"
  },
  summary: "B.Tech graduate in Electronics and Telecommunication Engineering from Yeshwantrao Chavan College of Engineering (YCCE), Nagpur, aspiring to build a career as a Java Full Stack Developer. Trained at IT Vedant with hands-on experience in HTML, CSS, Bootstrap, JavaScript, React.js, Java, Spring Boot, and MySQL through academic and personal projects. Strong foundation in C, C++, and Object-Oriented Programming with excellent problem-solving and analytical skills. Passionate about developing responsive, user-friendly web applications and continuously learning modern technologies to deliver high-quality software solutions.",
  technicalSkills: {
    languages: ["C", "C++", "JavaScript", "Java", "Spring Boot"],
    webTech: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript", "React.js", "Node.js", "MySQL"],
    tools: ["VS Code", "Git", "GitHub", "Vercel", "Figma", "Google Stitch", "Postman", "Render", "Docker"],
    concepts: ["OOP", "Responsive Design", "Problem Solving", "UI/UX Design Principles"]
  },
  projects: [
    {
      title: "Expense Tracker (React + Spring Boot)",
      type: "Full Stack Project",
      points: [
        "Built and deployed a full-stack Expense Tracker using Spring Boot, React, TypeScript, and MySQL.",
        "Implemented JWT authentication and Spring Security for secure user login and protected APIs.",
        "Designed RESTful APIs for expense management with complete CRUD operations.",
        "Integrated React frontend with Spring Boot backend through Axios and REST APIs.",
        "Deployed backend on Render (Docker) and frontend on Vercel, connecting to a cloud-hosted MySQL database.",
        "Used Git and GitHub for version control and deployment."
      ]
    },
    {
      title: "Asha Boutique Store (React + Spring Boot)",
      type: "Full Stack Project",
      points: [
        "Developed a responsive boutique website using React.js, HTML, CSS, Bootstrap, and JavaScript.",
        "Created product showcase and category-wise browsing features for boutique collections.",
        "Designed a modern, mobile-friendly user interface for seamless user experience.",
        "Implemented reusable React components and responsive layouts."
      ]
    },
    {
      title: "SIGNAL MIND – AI-Powered Smart Traffic Management System",
      type: "Hackathon 1st Prize Project",
      points: [
        "Architected an intelligent traffic & transit optimization system leveraging road grid telemetry.",
        "Developed real-time route optimization, emergency corridor clearance, and CO₂ emissions tracking.",
        "Won 1st Prize at IT-Vedant Hackathon 2026."
      ]
    }
  ],
  experience: [
    {
      company: "Athenura Technologies",
      role: "Frontend Developer Intern",
      period: "2026",
      points: [
        "Developed responsive and user-friendly web interfaces using React.js, HTML, CSS, and JavaScript.",
        "Built reusable React components to improve code maintainability and scalability.",
        "Collaborated with backend developers to integrate REST APIs into frontend applications.",
        "Improved UI/UX by implementing responsive layouts and optimizing website performance.",
        "Used Git and GitHub for version control and team collaboration.",
        "Participated in code reviews, debugging, and testing to ensure high-quality software delivery."
      ]
    }
  ],
  certifications: [
    { name: "Java Full Stack Development", provider: "IT Vedant", date: "Aug 2026" },
    { name: "Web Development Essentials (HTML, CSS, Bootstrap)", provider: "IT Vedant", date: "Jan 2026" },
    { name: "SQL Deep Dive (MySQL)", provider: "IT Vedant", date: "May 2026" },
    { name: "C++ Programming (C++)", provider: "TuteDude", date: "March 2026" },
    { name: "React Essentials (React.js)", provider: "IT Vedant", date: "April 2026" },
    { name: "Core Java", provider: "IT Vedant", date: "June 2026" }
  ],
  hackathons: [
    {
      title: "First Prize – IT-Vedant Hackathon 2026",
      detail: "SIGNAL MIND – AI-Powered Smart Traffic Management System"
    },
    {
      title: "Third Prize – ATH Hackathon 0.1",
      detail: "Secured 3rd Prize as a member of Team Code Crushers at ATH Hackathon 0.1"
    }
  ],
  education: [
    {
      degree: "B.Tech — Electronics & Telecommunication Engineering",
      institution: "Yeshwantrao Chavan College of Engineering (YCCE), Nagpur",
      period: "2022 – 2026"
    },
    {
      degree: "12th (HSC) — 92%",
      institution: "Vidya Sadhana Junior College",
      period: "Graduated"
    },
    {
      degree: "10th (SSC) — 89%",
      institution: "Vidya Sadhana High School",
      period: "Graduated"
    }
  ]
};
