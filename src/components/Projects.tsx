import React, { useState, useRef, useEffect } from 'react';
import { 
  ExternalLink, 
  Github, 
  Sparkles, 
  X, 
  ChevronRight, 
  ChevronLeft,
  CheckCircle2, 
  Award, 
  ArrowUpRight, 
  Activity,
  Zap,
  ShoppingBag,
  Layers,
  ShieldCheck,
  LayoutGrid,
  SlidersHorizontal,
  Compass
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { createPortal } from 'react-dom';
import { projects } from '../data';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenBlueprint: (project: Project) => void;
  isReelView?: boolean;
}

function ProjectCard({ project, onOpenBlueprint, isReelView = true }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = -(y / (rect.height / 2)) * 6;
    const rotateY = (x / (rect.width / 2)) * 6;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
  };

  const isExpenseTracker = project.id.toLowerCase().includes('expense');
  const isSignalMind = project.id.toLowerCase().includes('signal');
  const isSmartHealth = project.id.toLowerCase().includes('smart-health');
  const isWhiteboard = project.id.toLowerCase().includes('whiteboard');
  const isAsha = project.id.toLowerCase().includes('asha');
  const isZay = project.id.toLowerCase().includes('zay');

  const getCardBorder = () => {
    if (isExpenseTracker) return 'border-emerald-400/45 hover:border-emerald-400/85 shadow-[0_0_35px_rgba(16,185,129,0.22)]';
    if (isSignalMind) return 'border-amber-400/40 hover:border-amber-400/80 shadow-[0_0_35px_rgba(251,191,36,0.18)]';
    if (isSmartHealth) return 'border-teal-400/35 hover:border-teal-400/75 shadow-[0_0_35px_rgba(20,184,166,0.18)]';
    if (isWhiteboard) return 'border-cyan-400/35 hover:border-cyan-400/75 shadow-[0_0_35px_rgba(6,182,212,0.18)]';
    if (isAsha) return 'border-rose-400/35 hover:border-rose-400/75 shadow-[0_0_35px_rgba(244,63,94,0.18)]';
    if (isZay) return 'border-indigo-400/35 hover:border-indigo-400/75 shadow-[0_0_35px_rgba(99,102,241,0.18)]';
    return 'border-white/10 hover:border-neon-purple/50';
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpenBlueprint(project)}
      className={`group relative flex flex-col rounded-3xl overflow-hidden glass-panel bg-gradient-to-b from-[#0e0928]/95 via-[#08051a]/95 to-[#040210] border transition-all duration-300 shadow-2xl cursor-pointer ${getCardBorder()} ${
        isReelView ? 'w-[86vw] sm:w-[480px] lg:w-[540px] shrink-0 snap-start' : 'w-full'
      }`}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Dynamic Specular Glass Glare */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-30"
        style={{
          background: 'radial-gradient(circle at 50% 20%, rgba(255,255,255,0.12), transparent 70%)',
        }}
      />

      {/* Special Feature Ribbons */}
      {isExpenseTracker && (
        <div className="px-5 py-2.5 bg-gradient-to-r from-emerald-500/25 via-teal-400/20 to-neon-purple/20 border-b border-emerald-400/30 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-1.5 font-bold text-emerald-300 uppercase tracking-wider">
            <ShieldCheck size={14} className="text-emerald-400" />
            <span>Spring Boot & JWT Security</span>
          </div>
          <span className="text-[10px] text-emerald-200/80 font-mono">
            Docker & Render Cloud
          </span>
        </div>
      )}
      {isSignalMind && (
        <div className="px-5 py-2.5 bg-gradient-to-r from-amber-500/25 via-yellow-400/20 to-neon-purple/20 border-b border-amber-400/30 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-1.5 font-bold text-amber-300 uppercase tracking-wider">
            <Award size={14} className="text-amber-400" />
            <span>1st Place Champion</span>
          </div>
          <span className="text-[10px] text-amber-200/80 font-mono">
            IT Vedant Hackathon 2026
          </span>
        </div>
      )}

      {isSmartHealth && (
        <div className="px-5 py-2.5 bg-gradient-to-r from-emerald-500/25 via-teal-400/20 to-cyan-500/20 border-b border-emerald-400/30 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-1.5 font-bold text-emerald-300 uppercase tracking-wider">
            <Activity size={14} className="text-emerald-400" />
            <span>Digital Clinic System</span>
          </div>
          <span className="text-[10px] text-emerald-200/80 font-mono">
            Vercel Verified Live
          </span>
        </div>
      )}

      {isWhiteboard && (
        <div className="px-5 py-2.5 bg-gradient-to-r from-cyan-500/25 via-blue-500/20 to-neon-purple/20 border-b border-cyan-400/30 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-1.5 font-bold text-cyan-300 uppercase tracking-wider">
            <Zap size={14} className="text-cyan-400" />
            <span>Collaborative Canvas</span>
          </div>
          <span className="text-[10px] text-cyan-200/80 font-mono">
            Low Latency Sync
          </span>
        </div>
      )}

      {isAsha && (
        <div className="px-5 py-2.5 bg-gradient-to-r from-rose-500/25 via-pink-400/20 to-neon-purple/20 border-b border-rose-400/30 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-1.5 font-bold text-rose-300 uppercase tracking-wider">
            <ShoppingBag size={14} className="text-rose-400" />
            <span>Boutique Fashion Storefront</span>
          </div>
          <span className="text-[10px] text-rose-200/80 font-mono">
            Live Commerce UI
          </span>
        </div>
      )}

      {isZay && (
        <div className="px-5 py-2.5 bg-gradient-to-r from-indigo-500/25 via-blue-500/20 to-cyan-500/20 border-b border-indigo-400/30 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-1.5 font-bold text-indigo-300 uppercase tracking-wider">
            <Layers size={14} className="text-indigo-400" />
            <span>Sportswear E-Commerce Hub</span>
          </div>
          <span className="text-[10px] text-indigo-200/80 font-mono">
            Bootstrap 5 Grid
          </span>
        </div>
      )}

      {/* Realistic macOS/Cyber Browser Mockup Chrome */}
      <div className="px-4 py-2.5 bg-black/40 border-b border-white/10 flex items-center justify-between z-20">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>

        {/* URL Address Bar Pill */}
        <div className="px-3 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-neutral-400 flex items-center gap-1.5">
          <span className="text-green-400">🔒</span>
          <span>{project.id}.live</span>
        </div>

        <span className="text-[10px] font-mono text-neutral-500 uppercase">
          {project.category}
        </span>
      </div>

      {/* Preview Image Container */}
      <div className="w-full aspect-[16/10] overflow-hidden relative bg-[#09061c] p-2 flex items-center justify-center">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover rounded-xl group-hover:scale-[1.03] transition-transform duration-700 ease-out"
          referrerPolicy="no-referrer"
        />

        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08051a] via-transparent to-transparent opacity-80 pointer-events-none" />

        {/* Category Badge Floating on Image */}
        <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full border border-white/15 bg-black/80 backdrop-blur-md text-[10px] font-mono tracking-wider text-neon-purple-light uppercase">
          {project.category}
        </div>

        {/* Stats Pill */}
        {project.stats && (
          <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full border border-neon-purple/30 bg-black/80 backdrop-blur-md text-[10px] font-mono tracking-wider font-bold text-white uppercase flex items-center gap-1.5">
            <Sparkles size={11} className="text-neon-purple-light animate-pulse" />
            <span>{project.stats}</span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col justify-between flex-grow gap-5 text-left">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-black text-xl text-white group-hover:text-neon-purple-light transition-colors leading-tight flex items-center gap-1.5">
              <span>{project.title}</span>
              <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-neon-purple-light" />
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono font-medium text-neutral-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full group-hover:border-neon-purple/20 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Card Footer Action Bar */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => onOpenBlueprint(project)}
            className="text-xs font-mono font-bold text-neon-purple-light flex items-center gap-1 hover:underline cursor-pointer"
          >
            <span>SEE SPEC BLUEPRINT</span>
            <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:bg-neon-purple/20 hover:border-neon-purple/50 transition-all cursor-pointer"
              title="GitHub Source"
            >
              <Github size={14} />
            </a>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-neon-purple to-cyber-blue hover:from-neon-purple-light hover:to-cyber-blue-light text-white text-xs font-mono font-bold flex items-center gap-1.5 shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all cursor-pointer"
              title="Launch Live Demo"
            >
              <span>Live</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'reel' | 'grid'>('reel');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'fullstack', label: 'Java & Full Stack', count: 2 },
    { id: 'ai-collab', label: 'AI & Real-Time', count: 2 },
    { id: 'webapp', label: 'Healthcare & Web', count: 1 },
    { id: 'ecommerce', label: 'E-Commerce', count: 2 },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'fullstack') return project.id === 'expense-tracker' || project.id === 'asha-boutique';
    if (activeCategory === 'ai-collab') return project.id === 'signal-mind' || project.id === 'interactive-whiteboard';
    if (activeCategory === 'webapp') return project.id === 'smart-health';
    if (activeCategory === 'ecommerce') return project.id === 'asha-boutique' || project.id === 'zay-ecommerce';
    return true;
  });

  // Track scroll position in reel
  const handleScrollEvent = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll > 0) {
        setScrollProgress((scrollLeft / maxScroll) * 100);
        setCanScrollLeft(scrollLeft > 15);
        setCanScrollRight(scrollLeft < maxScroll - 15);
      }
    }
  };

  const handleNavigate = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollOffset = scrollContainerRef.current.clientWidth * 0.75;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollOffset : scrollOffset,
        behavior: 'smooth'
      });
    }
  };

  const handleJumpToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const cards = scrollContainerRef.current.children;
      if (cards[index]) {
        (cards[index] as HTMLElement).scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start'
        });
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#050314] select-none overflow-hidden" id="projects">
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] rounded-full bg-cyber-blue/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-neon-purple/10 blur-[140px] pointer-events-none" />

      {/* Large Backdrop Ghost Text */}
      <div className="absolute top-10 right-10 select-none pointer-events-none font-display font-black text-[14vw] leading-none text-white/[0.02] tracking-tighter uppercase z-0">
        PROJECTS
      </div>

      <div className="w-full max-w-[1650px] mx-auto flex flex-col gap-10 relative z-10 text-left">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-neon-purple/30 bg-neon-purple/10 text-xs font-mono text-neon-purple-light uppercase">
              <Sparkles size={13} className="text-neon-purple-light" />
              <span>Production Work // Interactive Showcase</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Selected Work That Delivers Results
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base max-w-xl font-sans leading-relaxed">
              Explore 6 production applications spanning enterprise Java Spring Boot architectures, AI traffic telemetry, digital clinical healthcare, collaborative real-time canvases, and responsive e-commerce storefronts.
            </p>
          </div>

          {/* View Mode Switcher & Category Filter Hub */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {/* View Mode Toggle */}
            <div className="flex items-center p-1 rounded-2xl bg-[#04020c] border border-white/10 backdrop-blur-xl shadow-inner">
              <button
                onClick={() => setViewMode('reel')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                  viewMode === 'reel' 
                    ? 'bg-gradient-to-r from-neon-purple to-indigo-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]' 
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="Horizontal Line Reel View"
              >
                <SlidersHorizontal size={13} />
                <span>Horizontal Reel</span>
              </button>

              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                  viewMode === 'grid' 
                    ? 'bg-gradient-to-r from-neon-purple to-indigo-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]' 
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="Grid Matrix View"
              >
                <LayoutGrid size={13} />
                <span>Grid View</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Category Filter Tabs & Navigation Controls Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#04020c] border border-white/10 backdrop-blur-xl shadow-inner self-start">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                    isActive ? 'text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectCategory"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-purple to-indigo-600 shadow-[0_0_20px_rgba(139,92,246,0.5)] z-0"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">
                    {cat.label} ({cat.count})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Reel Arrow Controls (Visible in Reel Mode) */}
          {viewMode === 'reel' && (
            <div className="flex items-center gap-3 self-end sm:self-auto font-mono text-xs text-neutral-400">
              <span className="hidden md:inline text-[11px] text-neutral-500">
                SCROLL OR DRAG HORIZONTALLY
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleNavigate('left')}
                  disabled={!canScrollLeft}
                  className="w-10 h-10 rounded-2xl bg-[#04020c] border border-white/10 hover:border-neon-purple/50 text-white flex items-center justify-center transition-all disabled:opacity-30 disabled:pointer-events-none hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] cursor-pointer active:scale-95"
                  aria-label="Scroll left"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => handleNavigate('right')}
                  disabled={!canScrollRight}
                  className="w-10 h-10 rounded-2xl bg-[#04020c] border border-white/10 hover:border-neon-purple/50 text-white flex items-center justify-center transition-all disabled:opacity-30 disabled:pointer-events-none hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] cursor-pointer active:scale-95"
                  aria-label="Scroll right"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* PROJECTS DISPLAY AREA */}
        {viewMode === 'reel' ? (
          /* HORIZONTAL LINE REEL VIEW */
          <div className="flex flex-col gap-6">
            <div 
              ref={scrollContainerRef}
              onScroll={handleScrollEvent}
              className="flex gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth snap-x snap-mandatory no-scrollbar w-full"
              id="projects-horizontal-reel"
            >
              <AnimatePresence>
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onOpenBlueprint={(proj) => setSelectedProject(proj)}
                    isReelView={true}
                  />
                ))}
              </AnimatePresence>
            </div>

            {/* Reel Progress Track & Quick Milestone Jumpers */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-white/10">
              
              {/* Interactive Progress Scrub Bar */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-neutral-400">01</span>
                <div className="w-36 sm:w-56 h-1.5 rounded-full bg-white/10 overflow-hidden relative">
                  <div 
                    className="h-full bg-gradient-to-r from-neon-purple via-cyber-blue to-neon-purple-light transition-all duration-150 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.8)]"
                    style={{ width: `${Math.max(15, scrollProgress)}%` }}
                  />
                </div>
                <span className="font-mono text-xs text-neutral-400">
                  {filteredProjects.length < 10 ? `0${filteredProjects.length}` : filteredProjects.length}
                </span>
              </div>

              {/* Milestone Dots */}
              <div className="flex items-center gap-2">
                {filteredProjects.map((proj, idx) => (
                  <button
                    key={proj.id}
                    onClick={() => handleJumpToIndex(idx)}
                    className="px-3 py-1 rounded-lg bg-white/5 hover:bg-neon-purple/20 border border-white/10 hover:border-neon-purple/40 font-mono text-[11px] text-neutral-300 hover:text-white transition-all cursor-pointer"
                    title={`Jump to ${proj.title}`}
                  >
                    <span>{idx + 1}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* GRID VIEW */
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
            id="projects-grid"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenBlueprint={(proj) => setSelectedProject(proj)}
                  isReelView={false}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

      </div>

      {/* FULL ARCHITECTURE SPEC BLUEPRINT MODAL LIGHTBOX */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 pt-24 sm:pt-28 bg-black/90 backdrop-blur-2xl overflow-y-auto"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.94, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.94, y: 20 }}
                transition={{ type: 'spring', damping: 26, stiffness: 240 }}
                className="w-full max-w-2xl glass-panel bg-[#0b081e] border border-neon-purple/50 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(139,92,246,0.45)] flex flex-col relative max-h-[85vh] my-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="px-6 py-4.5 border-b border-white/10 flex items-center justify-between bg-[#0d0926]/95 backdrop-blur-md sticky top-0 z-20">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-neon-purple-light animate-ping" />
                    <span className="font-mono text-xs font-bold tracking-widest text-[#c084fc] uppercase">
                      SYSTEM ARCHITECTURE BLUEPRINT
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-500/25 hover:border-red-500/50 border border-white/20 text-neutral-200 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95 group/close"
                    aria-label="Close modal"
                    title="Close modal (Esc)"
                  >
                    <X size={20} className="group-hover/close:rotate-90 transition-transform duration-200" />
                  </button>
                </div>

                {/* Modal Content Body */}
                <div className="p-6 overflow-y-auto flex-grow flex flex-col gap-6 text-left">
                  {/* Hero Preview */}
                  <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden relative border border-white/10 bg-[#09061c]">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Project Title & Category */}
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold text-neon-purple-light uppercase">
                      {selectedProject.category}
                    </span>
                    <h3 className="font-display font-black text-2xl text-white">
                      {selectedProject.title}
                    </h3>
                  </div>

                  <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                    {selectedProject.longDescription || selectedProject.description}
                  </p>

                  {/* Key Architectural Accomplishments */}
                  <div className="space-y-3 bg-white/[0.02] p-5 rounded-2xl border border-white/10">
                    <span className="block font-display font-bold text-xs text-white uppercase tracking-wider">
                      Key Technical Highlights:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-300">
                      <span className="flex items-center gap-2">
                        <CheckCircle2 size={15} className="text-green-400 flex-shrink-0" />
                        <span>Modern Responsive Design & Cross-Device Polish</span>
                      </span>
                      <span className="flex items-center gap-2">
                        <CheckCircle2 size={15} className="text-green-400 flex-shrink-0" />
                        <span>Optimized Rendering & Fast Load Times</span>
                      </span>
                      <span className="flex items-center gap-2">
                        <CheckCircle2 size={15} className="text-green-400 flex-shrink-0" />
                        <span>Component-Driven Modular Architecture</span>
                      </span>
                      <span className="flex items-center gap-2">
                        <CheckCircle2 size={15} className="text-green-400 flex-shrink-0" />
                        <span>Interactive UI Gestures & Smooth Transitions</span>
                      </span>
                    </div>
                  </div>

                  {/* Tags Cluster */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">
                      Technologies Deployed:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono font-bold text-white bg-neon-purple/15 border border-neon-purple/30 px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-4 border-t border-white/10 bg-black/50 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 min-w-[130px] flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-xs font-bold text-neutral-200 py-3 rounded-xl border border-white/10 transition-all text-center cursor-pointer"
                  >
                    <Github size={14} />
                    <span>GitHub</span>
                  </a>

                  {selectedProject.id === 'smart-health' && (
                    <a
                      href="https://vercel.com/manishp172003s-projects/smart-healthcare-management-system"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 min-w-[130px] flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-xs font-bold text-neutral-200 py-3 rounded-xl border border-white/10 transition-all text-center cursor-pointer"
                    >
                      <Activity size={14} className="text-emerald-400" />
                      <span>Vercel Hub</span>
                    </a>
                  )}

                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 min-w-[130px] flex items-center justify-center gap-2 bg-gradient-to-r from-neon-purple to-cyber-blue hover:from-neon-purple-light hover:to-cyber-blue-light text-xs font-bold text-white py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(139,92,246,0.5)] text-center cursor-pointer"
                  >
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-3 rounded-xl bg-white/5 hover:bg-red-500/20 hover:border-red-500/30 border border-white/10 text-xs font-bold font-mono text-neutral-300 hover:text-white transition-all cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
