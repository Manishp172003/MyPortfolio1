import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface TechTool {
  id: string;
  name: string;
  category: string;
  badge: string;
  statusText: string;
  accentColor: string;
  icon: React.ReactNode;
}

const techTools: TechTool[] = [
  {
    id: 'web-foundations',
    name: 'HTML5 & CSS3',
    category: 'Frontend Foundations',
    badge: 'Semantic Layout & Modern Styling',
    statusText: 'Mounting semantic DOM structure, glassmorphic layout & responsive shaders...',
    accentColor: '#E34F26',
    icon: (
      <div className="flex items-center justify-center gap-2 w-full h-full">
        {/* HTML5 Icon */}
        <svg viewBox="0 0 24 24" className="w-9 h-9 fill-[#E34F26]">
          <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm16.5 6.4H6.8l.3 3.6h9.1l-.5 5.5-3.7 1-3.7-1-.2-2.7H5.9l.4 4.7 5.7 1.6 5.7-1.6 1.1-11.1z" />
        </svg>
        <span className="text-white/30 text-xs font-mono font-bold">&</span>
        {/* CSS3 Icon */}
        <svg viewBox="0 0 24 24" className="w-9 h-9 fill-[#1572B6]">
          <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17 5H5.5l.3 3.6h11.1l-.4 3.7H6.2l.3 3.6h9.8l-.5 5.4-3.8 1.1-3.8-1.1-.3-3H6l.5 4.8 5.5 1.5 5.5-1.5 1.5-16.6z" />
        </svg>
      </div>
    ),
  },
  {
    id: 'javascript',
    name: 'JavaScript (ES6+)',
    category: 'Core Logic Engine',
    badge: 'Async Event Loop & V8 Runtime',
    statusText: 'Initializing asynchronous handlers, ES Modules & client interactivity...',
    accentColor: '#F7DF1E',
    icon: (
      <svg viewBox="0 0 24 24" className="w-14 h-14">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path
          d="M7 17.5c0 1.2.7 1.8 1.9 1.8.8 0 1.4-.4 1.7-.8l.8 1.2c-.6.8-1.5 1.2-2.6 1.2-2.1 0-3.4-1.3-3.4-3.5V11h1.6v6.5zm5.5 1.3c.6.4 1.5.7 2.4.7 1.3 0 2-.6 2-1.5 0-.9-.6-1.3-1.8-1.8-1.6-.6-2.7-1.3-2.7-2.9 0-1.6 1.3-2.8 3.2-2.8 1 0 1.8.3 2.3.6l-.6 1.4c-.4-.3-1.1-.5-1.8-.5-1 0-1.6.5-1.6 1.2 0 .8.6 1.2 1.9 1.7 1.7.7 2.6 1.5 2.6 3 0 1.8-1.4 3-3.5 3-1.1 0-2.2-.4-2.8-.8l.6-1.3z"
          fill="#000000"
        />
      </svg>
    ),
  },
  {
    id: 'react',
    name: 'React.js 19',
    category: 'Component Ecosystem',
    badge: 'Virtual DOM & Reactive Hooks',
    statusText: 'Hydrating component lifecycle, dynamic state machines & smooth transitions...',
    accentColor: '#61DAFB',
    icon: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-14 h-14 fill-none" strokeWidth="1.2">
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
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'Design System Engine',
    badge: 'Utility Tokens & Cyberpunk Theme',
    statusText: 'Compiling custom neon glows, glassmorphism backdrops & luxury gradients...',
    accentColor: '#06B6D4',
    icon: (
      <svg viewBox="0 0 24 24" className="w-14 h-14 fill-[#06B6D4]">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    id: 'java',
    name: 'Java Core & OOP',
    category: 'Enterprise Backend',
    badge: 'OOP Architecture & JVM Concurrency',
    statusText: 'Configuring multi-threaded objects, collections & robust backend logic...',
    accentColor: '#ED8B00',
    icon: (
      <svg viewBox="0 0 24 24" className="w-14 h-14 fill-none">
        <path d="M8.5 18.5c2.5.5 5.5.5 8 0" stroke="#ED8B00" strokeWidth="2" strokeLinecap="round" />
        <path d="M7 21c4 .8 9 .8 13 0" stroke="#ED8B00" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 2C9.5 5 13.5 7 11 10c-1.5 1.8-1 3.5.5 5" stroke="#5382A1" strokeWidth="2" strokeLinecap="round" />
        <path d="M15 4c-1.5 2 1 3.5-.5 5.5-1 1.3-1 2.5 0 4" stroke="#ED8B00" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 8c-1 1.5 1 2.5 0 4-.8 1.2-.5 2.2.5 3.5" stroke="#5382A1" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'spring-mysql',
    name: 'Spring Boot & MySQL',
    category: 'Full Stack Infrastructure',
    badge: 'REST APIs & Relational Database',
    statusText: 'Binding REST endpoints, Hibernate JPA & ACID transactional databases...',
    accentColor: '#6DB33F',
    icon: (
      <div className="flex items-center justify-center gap-2 w-full h-full">
        {/* Spring Boot */}
        <svg viewBox="0 0 24 24" className="w-9 h-9 fill-[#6DB33F]">
          <path d="M21.7 8.3L13.7.3c-.4-.4-1-.4-1.4 0L4.3 8.3c-.4.4-.4 1 0 1.4l8 8c.4.4 1 .4 1.4 0l8-8c.4-.4.4-1 0-1.4zM13 14.5c-2.5 0-4.5-2-4.5-4.5 0-1.8 1-3.3 2.5-4 .3 1.2 1.3 2 2.5 2 1.4 0 2.5-1.1 2.5-2.5 0-.3 0-.5-.1-.7 1 .8 1.6 2 1.6 3.2 0 2.5-2 4.5-4.5 4.5z" />
        </svg>
        <span className="text-white/30 text-xs font-mono font-bold">+</span>
        {/* MySQL */}
        <svg viewBox="0 0 24 24" className="w-9 h-9 fill-[#4479A1]">
          <path d="M12 3c-5 0-9 1.8-9 4s4 4 9 4 9-1.8 9-4-4-4-9-4zm0 6c-4.4 0-8-1.5-8-3s3.6-3 8-3 8 1.5 8 3-3.6 3-8 3zm-9 1.5V13c0 2.2 4 4 9 4s9-1.8 9-4v-2.5c-2 1.5-5.3 2.5-9 2.5s-7-1-9-2.5zm0 6V19c0 2.2 4 4 9 4s9-1.8 9-4v-2.5c-2 1.5-5.3 2.5-9 2.5s-7-1-9-2.5z" />
        </svg>
      </div>
    ),
  },
];

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    // Total duration: 4.2 seconds (700ms per tool) for clean readability and pacing
    const totalDuration = 4200;
    const intervalTime = 35;
    const totalSteps = totalDuration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const pct = Math.min((currentStep / totalSteps) * 100, 100);
      setProgress(pct);

      const nextIdx = Math.min(
        Math.floor((pct / 100) * techTools.length),
        techTools.length - 1
      );
      setActiveIdx(nextIdx);

      if (pct >= 100) {
        clearInterval(timer);
        setIsCompleted(true);
        // Small pause to see 100% complete before dissolving into the portfolio
        setTimeout(() => {
          onComplete();
        }, 450);
      }
    }, intervalTime);

    // ESC key shortcut to skip
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        clearInterval(timer);
        onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  const activeTech = techTools[activeIdx] || techTools[0];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col justify-between items-center bg-[#030014] text-white overflow-hidden select-none py-8 px-4"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04, filter: 'blur(10px)' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Absolute Master Theme Ambient Glows (Matching the website's dark luxury theme) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70vw] h-[45vh] bg-gradient-to-b from-[#8B5CF6]/20 via-[#8B5CF6]/5 to-transparent blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] bg-[#3B82F6]/15 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[35vw] h-[35vw] bg-[#8B5CF6]/15 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Subtle Cyberpunk Perspective Grid (Matching Hero) */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(139, 92, 246, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.2) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Top Bar Header */}
      <div className="relative z-10 w-full max-w-4xl flex items-center justify-between">
        {/* Brand identity pill */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-neon-purple to-neon-purple-light flex items-center justify-center font-display font-black text-sm text-white shadow-[0_0_15px_rgba(139,92,246,0.6)]">
            M
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black text-sm tracking-wide text-white flex items-center gap-2">
              MANISH PAWAR
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            </span>
            <span className="font-mono text-[10px] text-neutral-400 tracking-wider">
              DEVELOPER_ENVIRONMENT // BOOTLOADER
            </span>
          </div>
        </div>

        {/* Skip Button */}
        <button
          onClick={onComplete}
          className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-neon-purple/20 hover:border-neon-purple/50 text-neutral-400 hover:text-white transition-all text-xs font-mono backdrop-blur-md cursor-pointer"
        >
          <span>SKIP BOOT</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-neutral-300 group-hover:bg-neon-purple group-hover:text-white transition-colors">
            ESC
          </span>
        </button>
      </div>

      {/* Center Stage: Cyber Hologram HUD with Active Tech Icon */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center w-full max-w-xl text-center">
        
        {/* Holographic Ring Stage */}
        <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center mb-6">
          
          {/* Outer Dashed Cyber Ring */}
          <div className="absolute inset-0 rounded-full border border-dashed border-neon-purple/30 animate-[spin_24s_linear_infinite]" />

          {/* Middle Rotating Dual-Arc Ring */}
          <div
            className="absolute inset-4 rounded-full border-2 border-transparent border-t-neon-purple-light border-b-cyber-blue-light opacity-60 animate-[spin_10s_linear_infinite_reverse]"
          />

          {/* Glowing Ambient Core (Neon Purple & Cyan Aura) */}
          <div className="absolute inset-10 rounded-full bg-gradient-to-tr from-neon-purple/30 to-cyber-blue/25 blur-2xl animate-pulse" />

          {/* Center Glassmorphic Emblem Holding the Active Tool */}
          <div className="relative z-10 w-32 h-32 sm:w-36 sm:h-36 rounded-3xl bg-[#09071b]/85 border border-white/15 backdrop-blur-2xl shadow-[0_0_40px_rgba(139,92,246,0.35)] flex items-center justify-center p-5 overflow-hidden">
            {/* Corner Tech Badges */}
            <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-neon-purple-light/70" />
            <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-neon-purple-light/70" />
            <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-neon-purple-light/70" />
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-neon-purple-light/70" />

            {/* Icon Transition Animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTech.id}
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 1.15, rotate: 10 }}
                transition={{ duration: 0.28, ease: 'backOut' }}
                className="w-full h-full flex items-center justify-center drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]"
              >
                {activeTech.icon}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dynamic Tool Identity Text */}
        <div className="flex flex-col items-center gap-2 mb-6 min-h-[96px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTech.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22 }}
              className="flex flex-col items-center gap-1.5"
            >
              {/* Category & Badge Pill */}
              <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/30 font-mono text-[11px] text-[#c084fc] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-purple animate-ping" />
                <span>{activeTech.category}</span>
                <span className="text-white/20">•</span>
                <span className="text-white/70 font-semibold">{activeTech.badge}</span>
              </div>

              {/* Tool Name */}
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight drop-shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                {activeTech.name}
              </h2>

              {/* Status Message */}
              <p className="font-mono text-xs text-neutral-300 max-w-lg leading-relaxed flex items-center gap-1.5 px-4">
                <span className="text-neon-purple-light font-bold">&gt;</span>
                <span>{activeTech.statusText}</span>
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* High-End Cyber Progress Bar */}
        <div className="w-full max-w-md bg-[#080718]/90 border border-white/10 rounded-2xl p-4 backdrop-blur-xl shadow-2xl mb-6">
          <div className="flex items-center justify-between font-mono text-xs mb-2">
            <div className="flex items-center gap-2 text-neutral-400">
              <span className="text-neon-purple-light font-bold">BOOT SEQUENCE</span>
              <span>[{activeIdx + 1}/{techTools.length}]</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-white font-bold text-sm">{Math.round(progress)}</span>
              <span className="text-neon-purple-light font-bold">%</span>
            </div>
          </div>

          {/* Progress Bar Track */}
          <div className="relative w-full h-2.5 bg-black/60 rounded-full overflow-hidden border border-white/10 p-[1px]">
            <motion.div
              className="h-full rounded-full relative overflow-hidden bg-gradient-to-r from-neon-purple via-indigo-500 to-cyber-blue"
              style={{
                width: `${progress}%`,
                boxShadow: '0 0 15px rgba(139, 92, 246, 0.6)',
              }}
            >
              {/* Traveling Shimmer Spark */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom Pipeline Tray (Shows all 6 tools in sequence with glowing state) */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 px-3 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
          {techTools.map((tool, idx) => {
            const isPassed = idx < activeIdx;
            const isCurrent = idx === activeIdx;

            return (
              <div key={tool.id} className="flex items-center gap-1.5">
                <div
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-mono tracking-wider font-bold transition-all duration-300 flex items-center gap-1 ${
                    isCurrent
                      ? 'bg-neon-purple text-white shadow-[0_0_15px_rgba(139,92,246,0.6)] scale-105 border border-white/20'
                      : isPassed
                      ? 'bg-white/10 text-neutral-300 border border-white/5'
                      : 'bg-black/30 text-neutral-600 border border-white/5'
                  }`}
                >
                  <span>{tool.name.split(' ')[0]}</span>
                  {isPassed && <span className="text-green-400">✓</span>}
                  {isCurrent && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                </div>
                {idx < techTools.length - 1 && (
                  <span className="text-white/10 text-xs hidden sm:inline">→</span>
                )}
              </div>
            );
          })}
        </div>

      </div>

      {/* Bottom Footer Details */}
      <div className="relative z-10 flex items-center justify-between w-full max-w-4xl font-mono text-[10px] text-neutral-500 pt-4 border-t border-white/5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-neon-purple-light" />
          <span className="uppercase text-neutral-400">Java Full Stack & UI/UX Specialist</span>
        </div>
        <div>
          {isCompleted ? (
            <span className="text-green-400 font-bold tracking-wider animate-pulse">
              ✓ SYSTEM READY // LAUNCHING
            </span>
          ) : (
            <span className="text-neutral-500">INITIALIZING ASSETS...</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}