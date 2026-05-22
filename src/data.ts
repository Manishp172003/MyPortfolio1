import { Project, Skill, TimelineItem, ClientLogo, Testimonial } from './types';

const ashaBoutiqueImage = new URL('../media/project_images/Screenshot 2026-04-27 145501.png', import.meta.url).href;
const zayEcommerceImage = new URL('../media/project_images/Screenshot 2026-05-04 163757.png', import.meta.url).href;

export const portfolioOwner = {
  name: "MANISH PAWAR",
  title: "Java Full Stack Developer (Learning) & Electronics Engineer",
  subtitle: "Hi, I’m Manish Pawar",
  description: "Final-year Electronics & Telecommunication Engineering student aiming to become a Java Full Stack Developer. Trained at IT Vedant with hands-on experience in building modern web interfaces.",
  aboutDetailed: "I am a final-year B.Tech (Electronics & Telecommunication Engineering) student at Yeshwantrao Chavan College of Engineering, Nagpur, with a focused career goal of becoming a talented Java Full Stack Developer. Currently trained at IT Vedant, I bring hands-on experience in building modern, responsive front-end user interfaces (HTML5, CSS3, Bootstrap 5, JavaScript, React.js, Node.js) combined with robust foundational knowledge in Java, MySQL, OOP principles, C, and C++. I am a rapid learner and natural problem-solver, committed to engineering neat, efficient, and user-centric web systems.",
  email: "manishpawar172003@gmail.com",
  github: "https://github.com/Manishp19311",
  linkedin: "https://linkedin.com/in/manish-pawar-880011370",
  twitter: "#",
  instagram: "#",
  experienceYearCount: 1,
  deliveryCount: "2+",
  satisfactionRate: "100%",
  trustedClientsCount: "1+"
};

export const clientLogos: ClientLogo[] = [
  { name: "YCCE Nagpur", iconSvg: "YCCE" },
  { name: "IT Vedant", iconSvg: "IT Vedant" },
  { name: "MNT Industries", iconSvg: "MNT Ind" },
  { name: "TuteDude", iconSvg: "TuteDude" }
];

export const skills: Skill[] = [
  // Frontend
  { name: "HTML5", level: 95, icon: "CodeHtml", category: "frontend", color: "from-orange-500 to-red-500" },
  { name: "CSS3", level: 92, icon: "CodeCss", category: "frontend", color: "from-blue-500 to-cyan-500" },
  { name: "Bootstrap 5", level: 90, icon: "CodeTailwind", category: "frontend", color: "from-purple-500 to-indigo-500" },
  { name: "JavaScript", level: 85, icon: "CodeJs", category: "frontend", color: "from-yellow-400 to-amber-500" },
  { name: "React.js", level: 80, icon: "CodeReact", category: "frontend", color: "from-cyan-400 to-blue-500" },
  
  // Backend & Databases
  { name: "Java (Learning)", level: 65, icon: "CodeHtml", category: "backend", color: "from-red-500 to-orange-500" },
  { name: "Node.js", level: 75, icon: "CodeHtml", category: "backend", color: "from-green-500 to-emerald-600" },
  { name: "MySQL", level: 80, icon: "Database", category: "backend", color: "from-indigo-600 to-blue-700" },
  
  // Tools & Programming
  { name: "C / C++", level: 88, icon: "CodeHtml", category: "tools", color: "from-sky-500 to-blue-600" },
  { name: "Git & GitHub", level: 85, icon: "CodeGit", category: "tools", color: "from-neutral-700 to-neutral-900" },
  { name: "VS Code", level: 90, icon: "CodeHtml", category: "tools", color: "from-blue-500 to-indigo-500" }
];

export const projects: Project[] = [
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
    category: "Web Development",
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
    category: "Web Development",
    stats: "Bootstrap 5 Grid"
  },
  {
    id: "simple-calculator",
    title: "Simple Calculator Console App",
    description: "C++ console-based calculator supporting multiple mathematical operations with robust error handling.",
    longDescription: "Designed and implemented an expressive console-based calculator using C++ object-oriented principles. Engineered neat algorithmic checks with robust exception handling and protection against edge case errors like division-by-zero.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    tags: ["C++", "OOP", "Console Application", "Error Resolution"],
    liveUrl: "https://github.com/Manishp19311",
    githubUrl: "https://github.com/Manishp19311",
    featured: true,
    category: "C++ Programming",
    stats: "OOP Paradigm"
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
