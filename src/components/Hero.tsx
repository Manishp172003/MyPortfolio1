import React, { useEffect, useState, useRef } from 'react';
import { 
  Play, 
  Sparkles, 
  FileText, 
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioOwner } from '../data';

interface HeroProps {
  onOpenResume?: () => void;
  isLoaded?: boolean;
}

const rotatingRoles = [
  { title: "Java Full Stack Developer", color: "from-neon-purple-light via-purple-300 to-cyber-blue-light" },
  { title: "Creative UI/UX Specialist", color: "from-pink-400 via-neon-purple-light to-cyber-blue-light" },
  { title: "Spring Boot & REST Architect", color: "from-emerald-400 via-teal-300 to-cyber-blue-light" },
  { title: "Electronics & IoT Innovator", color: "from-amber-400 via-yellow-300 to-neon-purple-light" }
];

// Exact authentic SVG icons from the Tech Ecosystem (Skills.tsx)
const floatingSkills = [
  {
    id: 'java',
    name: 'Java Core',
    role: 'Core Architecture & OOP',
    color: '#ED8B00',
    glowColor: 'rgba(237, 139, 0, 0.5)',
    className: '-top-4 sm:-top-8 left-4 sm:left-8',
    floatDuration: 5.2,
    delay: 0,
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none">
        <path d="M8.5 18.5c2.5.5 5.5.5 8 0" stroke="#ED8B00" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M7 21c4 .8 9 .8 13 0" stroke="#ED8B00" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M12 2C9.5 5 13.5 7 11 10c-1.5 1.8-1 3.5.5 5" stroke="#5382A1" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M15 4c-1.5 2 1 3.5-.5 5.5-1 1.3-1 2.5 0 4" stroke="#ED8B00" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M8 8c-1 1.5 1 2.5 0 4-.8 1.2-.5 2.2.5 3.5" stroke="#5382A1" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: 'spring',
    name: 'Spring Boot',
    role: 'Microservices & REST APIs',
    color: '#6DB33F',
    glowColor: 'rgba(109, 179, 63, 0.5)',
    className: '-top-4 sm:-top-8 right-4 sm:right-8',
    floatDuration: 4.8,
    delay: 0.4,
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#6DB33F]">
        <path d="M21.7 8.3L13.7.3c-.4-.4-1-.4-1.4 0L4.3 8.3c-.4.4-.4 1 0 1.4l8 8c.4.4 1 .4 1.4 0l8-8c.4-.4.4-1 0-1.4zM13 14.5c-2.5 0-4.5-2-4.5-4.5 0-1.8 1-3.3 2.5-4 .3 1.2 1.3 2 2.5 2 1.4 0 2.5-1.1 2.5-2.5 0-.3 0-.5-.1-.7 1 .8 1.6 2 1.6 3.2 0 2.5-2 4.5-4.5 4.5z" />
      </svg>
    )
  },
  {
    id: 'react',
    name: 'React 19',
    role: 'Virtual DOM & Reactive UI',
    color: '#61DAFB',
    glowColor: 'rgba(97, 218, 251, 0.5)',
    className: 'top-1/2 -right-4 sm:-right-10 -translate-y-1/2',
    floatDuration: 5.6,
    delay: 0.8,
    icon: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-5 h-5 fill-none" strokeWidth="1.6">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    )
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    role: 'Modern Design System',
    color: '#06B6D4',
    glowColor: 'rgba(6, 182, 212, 0.5)',
    className: '-bottom-4 sm:-bottom-6 right-6 sm:right-10',
    floatDuration: 4.6,
    delay: 1.2,
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#06B6D4]">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    )
  },
  {
    id: 'mysql',
    name: 'MySQL DB',
    role: 'Relational Schema & SQL',
    color: '#4479A1',
    glowColor: 'rgba(68, 121, 161, 0.5)',
    className: '-bottom-4 sm:-bottom-6 left-6 sm:left-10',
    floatDuration: 5.4,
    delay: 1.6,
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#4479A1]">
        <path d="M12 3c-5 0-9 1.8-9 4s4 4 9 4 9-1.8 9-4-4-4-9-4zm0 6c-4.4 0-8-1.5-8-3s3.6-3 8-3 8 1.5 8 3-3.6 3-8 3zm-9 1.5V13c0 2.2 4 4 9 4s9-1.8 9-4v-2.5c-2 1.5-5.3 2.5-9 2.5s-7-1-9-2.5zm0 6V19c0 2.2 4 4 9 4s9-1.8 9-4v-2.5c-2 1.5-5.3 2.5-9 2.5s-7-1-9-2.5z" />
      </svg>
    )
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    role: 'ES6+ & Async Engine',
    color: '#F7DF1E',
    glowColor: 'rgba(247, 223, 30, 0.5)',
    className: 'top-1/2 -left-4 sm:-left-10 -translate-y-1/2',
    floatDuration: 5.0,
    delay: 2.0,
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path d="M7 17.5c0 1.2.7 1.8 1.9 1.8.8 0 1.4-.4 1.7-.8l.8 1.2c-.6.8-1.5 1.2-2.6 1.2-2.1 0-3.4-1.3-3.4-3.5V11h1.6v6.5zm5.5 1.3c.6.4 1.5.7 2.4.7 1.3 0 2-.6 2-1.5 0-.9-.6-1.3-1.8-1.8-1.6-.6-2.7-1.3-2.7-2.9 0-1.6 1.3-2.8 3.2-2.8 1 0 1.8.3 2.3.6l-.6 1.4c-.4-.3-1.1-.5-1.8-.5-1 0-1.6.5-1.6 1.2 0 .8.6 1.2 1.9 1.7 1.7.7 2.6 1.5 2.6 3 0 1.8-1.4 3-3.5 3-1.1 0-2.2-.4-2.8-.8l.6-1.3z" fill="#000000" />
      </svg>
    )
  },
  {
    id: 'html-css',
    name: 'HTML5 & CSS3',
    role: 'Semantic DOM & Shaders',
    color: '#E34F26',
    glowColor: 'rgba(227, 79, 38, 0.5)',
    className: '-top-8 sm:-top-14 left-1/2 -translate-x-1/2',
    floatDuration: 5.8,
    delay: 1.0,
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#E34F26]">
        <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm16.5 6.4H6.8l.3 3.6h9.1l-.5 5.5-3.7 1-3.7-1-.2-2.7H5.9l.4 4.7 5.7 1.6 5.7-1.6 1.1-11.1z" />
      </svg>
    )
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    role: 'CI/CD & Version Control',
    color: '#F05032',
    glowColor: 'rgba(240, 80, 50, 0.5)',
    className: '-bottom-8 sm:-bottom-14 left-1/2 -translate-x-1/2',
    floatDuration: 4.4,
    delay: 0.6,
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#F05032]">
        <path d="M21.6 10.9L13.1 2.4c-.8-.8-2-.8-2.8 0L8.5 4.2l3.5 3.5c.8-.3 1.8-.1 2.4.5.6.6.8 1.6.5 2.4l3.4 3.4c.8-.3 1.8-.1 2.4.5.8.8.8 2.1 0 2.9s-2.1.8-2.9 0c-.7-.7-.9-1.7-.5-2.5l-3.2-3.2v6.2c.2.2.4.4.5.6.8.8.8 2.1 0 2.9s-2.1.8-2.9 0c-.8-.8-.8-2.1 0-2.9.3-.3.6-.5 1-.6V8.6c-.4-.1-.7-.3-1-.6-.7-.7-.9-1.7-.5-2.5L7.1 2.8 2.4 7.5c-.8.8-.8 2 0 2.8l8.5 8.5c.8.8 2 .8 2.8 0l7.9-7.9c.8-.8.8-2 0-2.8z" />
      </svg>
    )
  }
];

export default function Hero({ onOpenResume, isLoaded = true }: HeroProps = {}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [roleIndex, setRoleIndex] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Mouse Parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100 - 50;
      const y = (e.clientY / window.innerHeight) * 100 - 50;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Cycle through dynamic roles smoothly
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % rotatingRoles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen w-full flex flex-col justify-between items-center overflow-hidden bg-[#030014] pt-28 pb-10 px-4 sm:px-6 lg:px-8 select-none" 
      id="hero"
    >
      {/* 1. SEAMLESS LIVE BACKGROUND VIDEO (Direct Continuation from Preloader) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video 
          autoPlay
          loop
          muted
          playsInline
          src="/hero-bg.mp4"
          className="w-full h-full object-cover scale-105 filter brightness-[0.7] contrast-125 select-none"
        />

        {/* Fallback Animated Gradient if video delays */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#07051a] via-[#030014] to-[#0a0720] -z-10" />
      </div>

      {/* 2. ATMOSPHERIC SHADERS & VIGNETTES (Exact match with Loader for seamless transition) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/45 to-[#030014] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,#030014_85%)] pointer-events-none z-0" />

      {/* Dynamic Mouse Spotlight Beam */}
      <div 
        className="absolute hidden md:block w-[600px] h-[600px] rounded-full blur-[140px] bg-neon-purple/15 pointer-events-none transition-transform duration-500 ease-out z-0"
        style={{
          transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`,
          left: 'calc(50% - 300px)',
          top: 'calc(50% - 300px)',
        }}
      />

      {/* Ambient Atmospheric Glow Orbs */}
      <div className="absolute top-[20%] left-[5%] w-[350px] h-[350px] rounded-full bg-neon-purple/20 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] rounded-full bg-cyber-blue/20 blur-[150px] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="w-full max-w-[1650px] mx-auto flex flex-col items-center justify-center relative z-10 my-auto">
        
        {/* Subtle Background Watermark */}
        <div className="absolute w-full select-none pointer-events-none -translate-y-8 md:-translate-y-14 overflow-hidden z-0">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="text-[17vw] font-display font-black tracking-tighter leading-none text-center uppercase text-white/[0.03] select-none"
            style={{
              transform: `translate(${mousePosition.x * -0.1}px, ${mousePosition.y * -0.1}px)`
            }}
          >
            MANISH
          </motion.h1>
        </div>

        {/* 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center w-full relative z-20">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Slides in smoothly from Left (x: -120 -> 0)  */}
          {/* ========================================================= */}
          <motion.div 
            initial={{ opacity: 0, x: -120, filter: 'blur(10px)' }}
            animate={isLoaded ? { opacity: 1, x: 0, filter: 'blur(0px)' } : { opacity: 0, x: -120, filter: 'blur(10px)' }}
            transition={{ duration: 1.05, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-1 lg:col-span-7 text-left flex flex-col gap-6"
          >
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-neon-purple/40 bg-neon-purple/10 self-start shadow-[0_0_20px_rgba(139,92,246,0.3)] backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-[11px] font-mono font-bold tracking-wider text-neon-purple-light uppercase">
                Available for New Projects &amp; Full-Stack Roles
              </span>
            </div>

            {/* Main Headline */}
            <div className="flex flex-col gap-1.5">
              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.08] tracking-tight">
                Crafting Scalable <br className="hidden sm:block" />
                Web Experiences
              </h1>

              {/* Kinetic Role Flipper */}
              <div className="h-10 sm:h-12 flex items-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ y: 22, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -22, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className={`font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight bg-gradient-to-r ${rotatingRoles[roleIndex].color} bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(192,132,252,0.4)]`}
                  >
                    {rotatingRoles[roleIndex].title}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Bio Summary */}
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-sans max-w-2xl">
              Final-year <strong className="text-white font-semibold">Electronics &amp; Telecommunication</strong> engineer at YCCE Nagpur, trained at <strong className="text-neon-purple-light font-semibold">IT Vedant</strong>. Engineering clean Java backends, RESTful microservices, and Apple-smooth responsive UI systems.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={() => handleScrollTo('projects')}
                className="bg-gradient-to-r from-neon-purple via-indigo-600 to-cyber-blue hover:from-neon-purple-light hover:to-cyber-blue-light text-white text-xs sm:text-sm font-bold px-7 py-3.5 rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:shadow-[0_0_35px_rgba(139,92,246,0.8)] hover:-translate-y-0.5 flex items-center gap-2 group cursor-pointer"
                id="hero-explore-work-btn"
              >
                <span>Explore Projects</span>
                <span className="p-1 rounded-full bg-white/20 group-hover:translate-x-1 transition-transform">
                  <Play size={10} className="fill-current text-white" />
                </span>
              </button>

              <button
                onClick={onOpenResume}
                className="glass-panel hover:bg-neon-purple/20 border border-neon-purple/40 hover:border-neon-purple-light text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 cursor-pointer shadow-lg flex items-center gap-2 group"
                id="hero-view-cv-btn"
                title="View Verified Curriculum Vitae"
              >
                <FileText size={15} className="text-neon-purple-light group-hover:scale-110 transition-transform" />
                <span>View CV</span>
              </button>

              <button
                onClick={() => handleScrollTo('contact')}
                className="glass-panel hover:bg-white/10 border border-white/15 hover:border-neon-purple-light/60 text-white text-xs sm:text-sm font-bold px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 cursor-pointer shadow-lg"
                id="hero-get-in-touch-btn"
              >
                Get In Touch
              </button>
            </div>

            {/* Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 mt-1 border-t border-white/10 font-mono text-neutral-400">
              <div>
                <span className="block text-2xl sm:text-3xl font-bold font-display text-white">{portfolioOwner.deliveryCount}</span>
                <span className="text-[11px] uppercase tracking-wider text-neutral-400">Production Projects</span>
              </div>
              <div className="border-l border-white/10 pl-4">
                <span className="block text-2xl sm:text-3xl font-bold font-display text-neon-purple-light">2x</span>
                <span className="text-[11px] uppercase tracking-wider text-neutral-400">Hackathon Wins</span>
              </div>
              <div className="border-l border-white/10 pl-4">
                <span className="block text-2xl sm:text-3xl font-bold font-display text-cyber-blue-light">100%</span>
                <span className="text-[11px] uppercase tracking-wider text-neutral-400">Satisfaction Score</span>
              </div>
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: Slides in from Right (x: 120 -> 0) with Authentic SVGs      */}
          {/* ========================================================================= */}
          <motion.div 
            initial={{ opacity: 0, x: 120, filter: 'blur(10px)' }}
            animate={isLoaded ? { opacity: 1, x: 0, filter: 'blur(0px)' } : { opacity: 0, x: 120, filter: 'blur(10px)' }}
            transition={{ duration: 1.05, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-1 lg:col-span-5 flex justify-center items-center relative py-12"
          >
            {/* The Floating Constellation Stage */}
            <div 
              className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] md:w-[480px] md:h-[480px] flex items-center justify-center"
              style={{
                transform: `translate(${mousePosition.x * 0.15}px, ${mousePosition.y * 0.15}px)`,
                transition: 'transform 0.4s ease-out',
              }}
            >
              {/* Outer Cyber Dashed Rings (Orbit Lines) */}
              <div className="absolute inset-0 rounded-full border border-dashed border-neon-purple/25 animate-[spin_40s_linear_infinite] pointer-events-none" />
              <div className="absolute inset-8 sm:inset-12 rounded-full border border-cyber-blue/20 animate-[spin_28s_linear_infinite_reverse] pointer-events-none" />
              <div className="absolute inset-16 sm:inset-24 rounded-full border border-dashed border-white/10 pointer-events-none" />

              {/* Ambient Radiant Center Glow */}
              <div className="absolute inset-20 rounded-full bg-gradient-to-tr from-neon-purple/35 via-cyan-400/20 to-neon-purple/35 blur-2xl animate-pulse pointer-events-none" />

              {/* === CENTRAL GLOWING HOLOGRAPHIC TECH REACTOR CORE === */}
              <div className="relative z-20 flex flex-col items-center">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1.5 bg-gradient-to-tr from-neon-purple via-cyan-400 to-neon-purple shadow-[0_0_50px_rgba(139,92,246,0.65)] flex items-center justify-center">
                  
                  {/* Concentric Rotating Cyber Arcs */}
                  <div className="absolute inset-1 rounded-full border border-dashed border-cyan-300/40 animate-[spin_16s_linear_infinite]" />
                  <div className="absolute inset-2.5 rounded-full border border-neon-purple-light/40 animate-[spin_10s_linear_infinite_reverse]" />

                  {/* Core Glass Sphere with Ambient Glow */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/25 bg-gradient-to-b from-[#130c33]/95 via-[#08051a]/95 to-[#03010b] backdrop-blur-2xl flex flex-col items-center justify-center shadow-inner">
                    
                    {/* Deep Central Core Ambient Glow */}
                    <div className="absolute inset-3 rounded-full bg-gradient-to-tr from-neon-purple/40 via-cyan-400/25 to-purple-500/40 blur-md animate-pulse" />

                    {/* Developer Monogram: <M/> */}
                    <div className="relative z-10 flex items-center justify-center font-mono font-black text-3xl sm:text-4xl tracking-tighter drop-shadow-[0_0_20px_rgba(97,218,251,0.8)] select-none">
                      <span className="text-neon-purple-light font-bold">&lt;</span>
                      <span className="text-white font-black px-0.5 bg-gradient-to-b from-white via-neutral-100 to-neutral-300 bg-clip-text text-transparent">M</span>
                      <span className="text-cyan-400 font-bold">/&gt;</span>
                    </div>

                    {/* Core System Status */}
                    <div className="relative z-10 flex items-center gap-1 mt-1 font-mono text-[9px] text-cyan-300/90 tracking-widest uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      <span>SYS_READY</span>
                    </div>

                    {/* Scanning Laser Line */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none overflow-hidden"
                      animate={{ y: [-80, 80, -80] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_12px_#67e8f9]" />
                    </motion.div>
                  </div>

                  {/* Corner Power Beacon Dot */}
                  <div className="absolute bottom-1 right-3 w-5 h-5 rounded-full bg-[#030014] flex items-center justify-center border border-white/20 z-30 shadow-md">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                  </div>
                </div>

                {/* Achievement Moniker Pill Under Core */}
                <div className="mt-3 flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#09071c]/90 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.25)] backdrop-blur-md">
                  <span className="text-amber-400 text-xs">🏆</span>
                  <span className="font-mono text-[10px] font-bold text-amber-300 tracking-wider uppercase">
                    1st Place Winner
                  </span>
                </div>
              </div>

              {/* === 8 ORBITING FLOATING SKILL ICONS (Exact SVGs from Tech Ecosystem) === */}
              {floatingSkills.map((skill, idx) => (
                <motion.div
                  key={skill.id}
                  className={`absolute z-30 ${skill.className}`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isLoaded ? {
                    scale: 1,
                    opacity: 1,
                    y: [0, -10, 0, 10, 0],
                    x: [0, 6, 0, -6, 0],
                  } : { scale: 0, opacity: 0 }}
                  transition={isLoaded ? {
                    scale: { duration: 0.55, delay: 0.35 + idx * 0.08, ease: [0.34, 1.56, 0.64, 1] },
                    opacity: { duration: 0.4, delay: 0.35 + idx * 0.08 },
                    y: { duration: skill.floatDuration, repeat: Infinity, ease: 'easeInOut', delay: 0.9 + skill.delay },
                    x: { duration: skill.floatDuration, repeat: Infinity, ease: 'easeInOut', delay: 0.9 + skill.delay },
                  } : { duration: 0.2 }}
                  onMouseEnter={() => setHoveredSkill(skill.id)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div
                    className="group relative flex items-center gap-2 px-3 py-2 rounded-2xl bg-[#08061a]/85 border border-white/15 backdrop-blur-xl transition-all duration-300 hover:scale-110 cursor-pointer shadow-lg"
                    style={{
                      boxShadow: hoveredSkill === skill.id 
                        ? `0 0 25px ${skill.glowColor}, 0 0 50px ${skill.glowColor}` 
                        : '0 8px 24px rgba(0, 0, 0, 0.4)',
                      borderColor: hoveredSkill === skill.id ? skill.color : 'rgba(255, 255, 255, 0.15)',
                    }}
                  >
                    {/* Authentic Tech Ecosystem SVG Icon */}
                    <div className="flex items-center justify-center shrink-0">
                      {skill.icon}
                    </div>

                    {/* Skill Label */}
                    <span className="font-mono text-xs font-bold text-neutral-200 group-hover:text-white tracking-wide whitespace-nowrap">
                      {skill.name}
                    </span>

                    {/* Interactive Glowing Tooltip on Hover */}
                    <AnimatePresence>
                      {hoveredSkill === skill.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 5, scale: 0.95 }}
                          transition={{ duration: 0.18 }}
                          className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-black/90 border border-white/20 font-mono text-[9px] text-neutral-300 whitespace-nowrap pointer-events-none z-40 shadow-xl"
                        >
                          {skill.role}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>

      {/* Bottom Scroll Anchor Hint */}
      <div 
        onClick={() => handleScrollTo('about')}
        className="relative z-10 mt-6 flex items-center gap-2 font-mono text-[11px] text-neutral-500 hover:text-white transition-colors cursor-pointer"
      >
        <span className="uppercase tracking-widest">DISCOVER MANISH</span>
        <ChevronDown size={14} className="animate-bounce text-neon-purple-light" />
      </div>
    </section>
  );
}
