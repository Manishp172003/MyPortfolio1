import React, { useState, useEffect, MouseEvent } from 'react';
import { Menu, X, ArrowUpRight, Github, Linkedin, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioOwner } from '../data';

interface HeaderProps {
  onOpenResume?: () => void;
  isLoaded?: boolean;
}

const navItems = [
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Achievements', href: '#achievements', id: 'achievements' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export default function Header({ onOpenResume, isLoaded = true }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Track scroll position for header blur and active section ScrollSpy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // ScrollSpy logic to detect active section
      const sections = ['contact', 'experience', 'achievements', 'projects', 'skills', 'about', 'hero'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(targetId.substring(1));
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header 
      initial={{ y: -90, opacity: 0 }}
      animate={isLoaded ? { y: 0, opacity: 1 } : { y: -90, opacity: 0 }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 border-b ${
        scrolled 
          ? 'bg-[#030014]/92 backdrop-blur-2xl border-neon-purple/25 shadow-[0_10px_35px_rgba(0,0,0,0.7)]'
          : 'bg-[#030014]/75 backdrop-blur-xl border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.35)]'
      }`}
      id="site-header"
    >
      {/* Subtle bottom cyber neon hairline */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-purple/40 to-transparent pointer-events-none" />

      <div className="max-w-[1650px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-18 sm:h-20 flex items-center justify-between">
          {/* Logo / Personal Brand */}
          <a 
            href="#hero" 
            onClick={(e) => handleScrollTo(e, '#hero')}
            className="flex items-center gap-3 group cursor-pointer"
            id="brand-logo-anchor"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-neon-purple to-neon-purple-light flex items-center justify-center font-display font-black text-sm text-white tracking-widest shadow-[0_0_20px_rgba(139,92,246,0.6)] group-hover:scale-105 transition-transform">
              M
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-base sm:text-lg tracking-wider text-white group-hover:text-neon-purple-light transition-colors duration-300">
                  {portfolioOwner.name}
                </span>
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse hidden sm:inline-block" title="Available for opportunities" />
              </div>
              <span className="text-[10px] font-mono text-neutral-400 tracking-wider uppercase -mt-0.5 hidden sm:block">
                Full Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation with Animated ScrollSpy Sliding Pill */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] p-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-inner" id="nav-desktop">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider transition-colors duration-200 cursor-pointer ${
                    isActive ? 'text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {/* Sliding Glowing Pill Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-purple to-indigo-600 shadow-[0_0_18px_rgba(139,92,246,0.65)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Action Dock: Social Links + Resume + Start a Project CTA */}
          <div className="hidden sm:flex items-center gap-3" id="nav-desktop-actions">
            <a 
              href={portfolioOwner.github} 
              target="_blank" 
              rel="noreferrer"
              className="w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-neon-purple/20 hover:border-neon-purple/50 text-neutral-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
              title="GitHub Profile"
            >
              <Github size={15} />
            </a>

            <a 
              href={portfolioOwner.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-cyber-blue/20 hover:border-cyber-blue/50 text-neutral-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
              title="LinkedIn Profile"
            >
              <Linkedin size={15} />
            </a>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-white/15 bg-white/5 hover:bg-neon-purple/20 hover:border-neon-purple/50 text-neutral-200 hover:text-white text-xs font-mono font-bold transition-all cursor-pointer group/res"
              title="View Official Curriculum Vitae"
            >
              <FileText size={13} className="text-neon-purple-light group-hover/res:scale-110 transition-transform" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="flex items-center gap-1.5 bg-gradient-to-r from-neon-purple to-cyber-blue hover:from-neon-purple-light hover:to-cyber-blue-light text-white text-xs font-bold px-4 sm:px-5 py-2.5 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_25px_rgba(139,92,246,0.8)] hover:scale-103 cursor-pointer group"
              id="cta-start-project"
            >
              <span>Start a Project</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2" id="nav-mobile-controls">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="bg-gradient-to-r from-neon-purple to-cyber-blue text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-neon-glow sm:hidden"
            >
              Hire Me
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-9 h-9 rounded-full bg-white/10 border border-white/10 text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-white/10 bg-[#050216]/98 backdrop-blur-2xl px-4 sm:px-6 py-5 shadow-2xl overflow-hidden"
          >
            <div className="max-w-[1650px] mx-auto flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-between ${
                      isActive 
                        ? 'bg-neon-purple text-white shadow-neon-glow' 
                        : 'text-neutral-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                  </a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <a 
                    href={portfolioOwner.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-2 rounded-full bg-white/5 border border-white/10 text-neutral-400 hover:text-white"
                  >
                    <Github size={16} />
                  </a>
                  <a 
                    href={portfolioOwner.linkedin} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-2 rounded-full bg-white/5 border border-white/10 text-neutral-400 hover:text-white"
                  >
                    <Linkedin size={16} />
                  </a>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      if (onOpenResume) onOpenResume();
                    }}
                    className="p-2 rounded-full bg-white/5 border border-white/10 text-neon-purple-light hover:text-white flex items-center gap-1 text-xs font-mono font-bold"
                  >
                    <FileText size={15} />
                    <span>CV</span>
                  </button>
                </div>
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, '#contact')}
                  className="text-xs font-mono font-bold text-neon-purple-light flex items-center gap-1 hover:underline"
                >
                  <span>LET'S CONNECT</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
