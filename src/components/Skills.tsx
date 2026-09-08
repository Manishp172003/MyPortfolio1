import React, { useState, useRef } from 'react';
import { 
  Terminal, 
  Database, 
  Cpu, 
  GitBranch, 
  Layers, 
  Sparkles, 
  Flame, 
  ExternalLink,
  CheckCircle2,
  Bookmark
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TechSkill {
  name: string;
  category: 'frontend' | 'backend' | 'tools';
  level: number;
  experience: string;
  color: string;
  glowColor: string;
  concepts: string[];
  icon: React.ReactNode;
}

const allSkills: TechSkill[] = [
  // Backend & Databases
  {
    name: 'Java Core & OOP',
    category: 'backend',
    level: 88,
    experience: 'Core Architecture',
    color: '#ED8B00',
    glowColor: 'rgba(237, 139, 0, 0.45)',
    concepts: ['OOP & Inheritance', 'Multithreading', 'Collections Framework', 'Exception Handling', 'JVM Memory'],
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none">
        <path d="M8.5 18.5c2.5.5 5.5.5 8 0" stroke="#ED8B00" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M7 21c4 .8 9 .8 13 0" stroke="#ED8B00" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M12 2C9.5 5 13.5 7 11 10c-1.5 1.8-1 3.5.5 5" stroke="#5382A1" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M15 4c-1.5 2 1 3.5-.5 5.5-1 1.3-1 2.5 0 4" stroke="#ED8B00" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M8 8c-1 1.5 1 2.5 0 4-.8 1.2-.5 2.2.5 3.5" stroke="#5382A1" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Spring Boot',
    category: 'backend',
    level: 82,
    experience: 'Microservices & APIs',
    color: '#6DB33F',
    glowColor: 'rgba(109, 179, 63, 0.45)',
    concepts: ['RESTful APIs', 'Spring Data JPA', 'Dependency Injection', 'Spring MVC', 'Hibernate ORM'],
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#6DB33F]">
        <path d="M21.7 8.3L13.7.3c-.4-.4-1-.4-1.4 0L4.3 8.3c-.4.4-.4 1 0 1.4l8 8c.4.4 1 .4 1.4 0l8-8c.4-.4.4-1 0-1.4zM13 14.5c-2.5 0-4.5-2-4.5-4.5 0-1.8 1-3.3 2.5-4 .3 1.2 1.3 2 2.5 2 1.4 0 2.5-1.1 2.5-2.5 0-.3 0-.5-.1-.7 1 .8 1.6 2 1.6 3.2 0 2.5-2 4.5-4.5 4.5z" />
      </svg>
    ),
  },
  {
    name: 'MySQL Database',
    category: 'backend',
    level: 85,
    experience: 'Relational DB & SQL',
    color: '#4479A1',
    glowColor: 'rgba(68, 121, 161, 0.45)',
    concepts: ['Schema Design', 'Relational Joins', 'Indexing & Optimization', 'ACID Transactions', 'Foreign Keys'],
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#4479A1]">
        <path d="M12 3c-5 0-9 1.8-9 4s4 4 9 4 9-1.8 9-4-4-4-9-4zm0 6c-4.4 0-8-1.5-8-3s3.6-3 8-3 8 1.5 8 3-3.6 3-8 3zm-9 1.5V13c0 2.2 4 4 9 4s9-1.8 9-4v-2.5c-2 1.5-5.3 2.5-9 2.5s-7-1-9-2.5zm0 6V19c0 2.2 4 4 9 4s9-1.8 9-4v-2.5c-2 1.5-5.3 2.5-9 2.5s-7-1-9-2.5z" />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    category: 'backend',
    level: 78,
    experience: 'Server Runtime',
    color: '#339933',
    glowColor: 'rgba(51, 153, 51, 0.45)',
    concepts: ['Express.js Routing', 'Event-Driven I/O', 'NPM Package Ecosystem', 'REST Middleware'],
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#339933]">
        <path d="M12 2l10 5.8v11.6L12 25.2 2 19.4V7.8L12 2zm0 2.3L4 8.9v9.2l8 4.6 8-4.6V8.9l-8-4.6z" />
      </svg>
    ),
  },

  // Frontend & UI
  {
    name: 'React.js 19',
    category: 'frontend',
    level: 90,
    experience: 'Component Architecture',
    color: '#61DAFB',
    glowColor: 'rgba(97, 218, 251, 0.45)',
    concepts: ['Custom Hooks', 'State Management', 'Virtual DOM Diffing', 'Component Lifecycle', 'Framer Motion'],
    icon: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-7 h-7 fill-none" strokeWidth="1.4">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    level: 88,
    experience: 'Async Engine',
    color: '#F7DF1E',
    glowColor: 'rgba(247, 223, 30, 0.45)',
    concepts: ['Async / Await', 'Promises & Fetch API', 'Closures & Scope', 'DOM Manipulation', 'Modular Imports'],
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path d="M7 17.5c0 1.2.7 1.8 1.9 1.8.8 0 1.4-.4 1.7-.8l.8 1.2c-.6.8-1.5 1.2-2.6 1.2-2.1 0-3.4-1.3-3.4-3.5V11h1.6v6.5zm5.5 1.3c.6.4 1.5.7 2.4.7 1.3 0 2-.6 2-1.5 0-.9-.6-1.3-1.8-1.8-1.6-.6-2.7-1.3-2.7-2.9 0-1.6 1.3-2.8 3.2-2.8 1 0 1.8.3 2.3.6l-.6 1.4c-.4-.3-1.1-.5-1.8-.5-1 0-1.6.5-1.6 1.2 0 .8.6 1.2 1.9 1.7 1.7.7 2.6 1.5 2.6 3 0 1.8-1.4 3-3.5 3-1.1 0-2.2-.4-2.8-.8l.6-1.3z" fill="#000000" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 94,
    experience: 'Design System & UI',
    color: '#06B6D4',
    glowColor: 'rgba(6, 182, 212, 0.45)',
    concepts: ['Custom Tokens', 'Responsive Grids', 'Glassmorphic Utilities', 'Dark Theme Engineering', 'JIT Compiler'],
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#06B6D4]">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: 'HTML5 & CSS3',
    category: 'frontend',
    level: 96,
    experience: 'Semantic Foundations',
    color: '#E34F26',
    glowColor: 'rgba(227, 79, 38, 0.45)',
    concepts: ['Semantic Architecture', 'Flexbox & CSS Grid', 'Custom Keyframes', 'Accessibility (a11y)', 'SVG Graphics'],
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#E34F26]">
        <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm16.5 6.4H6.8l.3 3.6h9.1l-.5 5.5-3.7 1-3.7-1-.2-2.7H5.9l.4 4.7 5.7 1.6 5.7-1.6 1.1-11.1z" />
      </svg>
    ),
  },

  // Tools & Programming
  {
    name: 'Git & GitHub',
    category: 'tools',
    level: 88,
    experience: 'Version Control & CI/CD',
    color: '#F05032',
    glowColor: 'rgba(240, 80, 50, 0.45)',
    concepts: ['Branching Strategies', 'PR Workflows', 'Merge Conflict Resolution', 'Git CLI', 'GitHub Actions'],
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#F05032]">
        <path d="M21.6 10.9L13.1 2.4c-.8-.8-2-.8-2.8 0L8.5 4.2l3.5 3.5c.8-.3 1.8-.1 2.4.5.6.6.8 1.6.5 2.4l3.4 3.4c.8-.3 1.8-.1 2.4.5.8.8.8 2.1 0 2.9s-2.1.8-2.9 0c-.7-.7-.9-1.7-.5-2.5l-3.2-3.2v6.2c.2.2.4.4.5.6.8.8.8 2.1 0 2.9s-2.1.8-2.9 0c-.8-.8-.8-2.1 0-2.9.3-.3.6-.5 1-.6V8.6c-.4-.1-.7-.3-1-.6-.7-.7-.9-1.7-.5-2.5L7.1 2.8 2.4 7.5c-.8.8-.8 2 0 2.8l8.5 8.5c.8.8 2 .8 2.8 0l7.9-7.9c.8-.8.8-2 0-2.8z" />
      </svg>
    ),
  },
  {
    name: 'C & C++ Programming',
    category: 'tools',
    level: 86,
    experience: 'Systems Logic & DSA',
    color: '#00599C',
    glowColor: 'rgba(0, 89, 156, 0.45)',
    concepts: ['Pointers & Memory Allocation', 'Data Structures (Arrays, Linked Lists)', 'Algorithms', 'Algorithmic Optimization'],
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#00599C]">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm2.5-10.5h-1v-1h-1v1h-1v1h1v1h1v-1h1zm4 0h-1v-1h-1v1h-1v1h1v1h1v-1h1z" />
      </svg>
    ),
  },
];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'frontend' | 'backend' | 'tools'>('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Technologies', count: allSkills.length },
    { id: 'frontend', label: 'Frontend & UI', count: allSkills.filter(s => s.category === 'frontend').length },
    { id: 'backend', label: 'Backend & DB', count: allSkills.filter(s => s.category === 'backend').length },
    { id: 'tools', label: 'Languages & Tools', count: allSkills.filter(s => s.category === 'tools').length },
  ];

  const filteredSkills = activeFilter === 'all' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === activeFilter);

  return (
    <section 
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#070417]/80 border-y border-white/5 flex flex-col justify-center items-center overflow-hidden select-none" 
      id="skills"
    >
      {/* Ambient Cyber Beams */}
      <div className="absolute top-[10%] left-[15%] w-[400px] h-[400px] bg-neon-purple/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[15%] w-[450px] h-[450px] bg-cyber-blue/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.2) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="w-full max-w-[1650px] mx-auto flex flex-col gap-12 relative z-10 text-left">
        
        {/* Header and Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-neon-purple/30 bg-neon-purple/10 text-xs font-mono text-neon-purple-light uppercase">
              <Sparkles size={13} className="text-neon-purple-light" />
              <span>Technical Arsenal</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              My Tech Ecosystem
            </h2>
            <p className="text-neutral-400 text-sm max-w-lg">
              Every tool and language I use is backed by core fundamentals, clean architecture, and modern best practices.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 bg-[#040210] p-1.5 rounded-2xl border border-white/10 shadow-xl self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  activeFilter === cat.id 
                    ? 'bg-neon-purple text-white shadow-[0_0_20px_rgba(139,92,246,0.6)] scale-[1.02]'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  activeFilter === cat.id ? 'bg-white/25 text-white' : 'bg-white/5 text-neutral-500'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 3D Spotlight Interactive Skills Bento Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const isHovered = hoveredSkill === skill.name;

              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="group relative rounded-3xl p-6 glass-panel bg-gradient-to-b from-[#0c0824]/90 via-[#070518]/95 to-[#040210] border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden cursor-pointer"
                  style={{
                    boxShadow: isHovered ? `0 0 35px ${skill.glowColor}` : undefined,
                    borderColor: isHovered ? skill.color : undefined,
                  }}
                >
                  {/* Dynamic Corner Torch Glow */}
                  <div 
                    className="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-2xl transition-opacity duration-500 pointer-events-none"
                    style={{
                      backgroundColor: skill.color,
                      opacity: isHovered ? 0.35 : 0.08,
                    }}
                  />

                  {/* Card Header: Brand Icon & Proficiency Tag */}
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      {/* Brand SVG Icon Box */}
                      <div 
                        className="w-14 h-14 rounded-2xl flex items-center justify-center p-2.5 bg-[#050314] border border-white/15 transition-transform duration-300 group-hover:scale-110 shadow-lg"
                        style={{
                          boxShadow: `0 0 15px ${skill.glowColor}`,
                          borderColor: isHovered ? skill.color : undefined,
                        }}
                      >
                        {skill.icon}
                      </div>

                      {/* Experience Pill */}
                      <div className="flex flex-col items-end">
                        <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-white/5 border border-white/10 text-neutral-300">
                          {skill.category}
                        </span>
                        <span className="text-[10px] font-mono text-neutral-500 mt-1">
                          {skill.experience}
                        </span>
                      </div>
                    </div>

                    {/* Skill Title & Proficiency Meter */}
                    <div className="space-y-1 mb-4">
                      <h3 className="font-display font-black text-xl text-white group-hover:text-white transition-colors">
                        {skill.name}
                      </h3>
                      
                      {/* High-Tech Power Level Gauge */}
                      <div className="flex items-center justify-between text-xs font-mono text-neutral-400 pt-1">
                        <span className="text-[10px] uppercase text-neutral-500">Mastery Level</span>
                        <span className="font-bold text-white flex items-center gap-1">
                          <span style={{ color: skill.color }}>{skill.level}%</span>
                          <span className="text-[10px] text-neutral-500">OPTIMIZED</span>
                        </span>
                      </div>

                      {/* Multi-Segmented Progress Bar */}
                      <div className="w-full h-1.5 bg-black/60 rounded-full overflow-hidden border border-white/5 mt-1.5 relative">
                        <motion.div
                          className="h-full rounded-full relative"
                          style={{
                            width: `${skill.level}%`,
                            backgroundColor: skill.color,
                            boxShadow: `0 0 12px ${skill.color}`,
                          }}
                        />
                      </div>
                    </div>

                    {/* Mastery Concepts Tag Cluster */}
                    <div className="space-y-1.5 pt-2 border-t border-white/5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                        Core Concepts Mastered:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {skill.concepts.map((concept) => (
                          <span
                            key={concept}
                            className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-white/[0.03] border border-white/5 text-neutral-300 group-hover:border-white/15 transition-all"
                          >
                            {concept}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Meta Bar */}
                  <div className="pt-4 mt-5 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-neutral-500">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 size={12} className="text-green-400" />
                      <span>PRODUCTION READY</span>
                    </span>
                    <span className="text-neutral-400 group-hover:text-white transition-colors">
                      VERIFIED ✦
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Footer Guarantee */}
        <div className="self-center flex items-center gap-2 text-xs font-mono text-neutral-400 tracking-wider pt-4">
          <Bookmark size={13} className="text-neon-purple-light" />
          <span>CONTINUOUSLY EXPANDING KNOWLEDGE IN FULL-STACK & CLOUD SYSTEMS</span>
        </div>

      </div>
    </section>
  );
}
