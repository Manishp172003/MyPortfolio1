import { useState, useEffect, MouseEvent } from 'react';
import { Menu, X, ArrowRight, Github, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioOwner } from '../data';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(targetId.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4 transition-all duration-300">
        <div 
          className={`max-w-6xl mx-auto rounded-full transition-all duration-300 px-6 py-2.5 md:py-3.5 flex items-center justify-between ${
            scrolled 
              ? 'glass-panel shadow-neon-glow bg-deep-dark/85 backdrop-blur-md'
              : 'bg-transparent border-b border-transparent'
          }`}
          id="header-nav-container"
        >
          {/* Logo / Personal Brand */}
          <a 
            href="#hero" 
            onClick={(e) => handleScrollTo(e, '#hero')}
            className="flex items-center gap-2 group cursor-pointer"
            id="brand-logo-anchor"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-neon-purple to-neon-purple-light flex items-center justify-center font-display font-black text-sm text-white tracking-widest shadow-neon-glow group-hover:scale-105 transition-transform">
              M
            </div>
            <span className="font-display font-black text-lg tracking-wider bg-gradient-to-r from-white via-neutral-200 to-neon-purple-light bg-clip-text text-transparent group-hover:text-neon-purple-light transition-colors duration-300">
              {portfolioOwner.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5" id="nav-desktop">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="px-4 py-1.5 rounded-full text-xs font-semibold text-neutral-300 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Action Button & Socials */}
          <div className="hidden md:flex items-center gap-4" id="nav-desktop-actions">
            <a 
              href={portfolioOwner.github} 
              target="_blank" 
              className="text-neutral-400 hover:text-neon-purple-light hover:scale-110 transition-all duration-300"
              rel="no-referrer"
            >
              <Github size={18} />
            </a>
            <a 
              href={portfolioOwner.linkedin} 
              target="_blank" 
              className="text-neutral-400 hover:text-neon-purple-light hover:scale-110 transition-all duration-300"
              rel="no-referrer"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="flex items-center gap-1.5 bg-gradient-to-r from-neon-purple to-indigo-600 hover:from-neon-purple-light hover:to-indigo-500 text-white text-xs font-bold px-5 py-2.5 rounded-full transition-all duration-300 shadow-neon-glow hover:shadow-neon-glowing-strong hover:scale-103 group"
              id="cta-start-project"
            >
              <span>Start a Project</span>
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3" id="nav-mobile-controls">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="bg-gradient-to-r from-neon-purple to-indigo-600 text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-neon-glow"
            >
              Hire Me
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-300 hover:text-white p-1 rounded-md focus:outline-none"
              id="mobile-menu-toggle-btn"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-16 z-40 mx-4 max-h-[85vh] overflow-y-auto glass-panel bg-deep-dark/95 backdrop-blur-xl rounded-2xl shadow-neon-glow p-6 flex flex-col gap-6 md:hidden border border-neon-purple/20"
            id="mobile-navigation-drawer"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="px-4 py-2 bg-white/2 rounded-xl text-sm font-semibold text-neutral-200 hover:text-white hover:bg-neon-purple/10 border border-white/5 transition-all"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="h-px bg-white/5" />

            {/* Icons and Direct CTA inside the Mobile Drawer */}
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <a
                  href={portfolioOwner.github}
                  target="_blank"
                  className="p-2 rounded-lg bg-white/3 border border-white/5 text-neutral-400 hover:text-white"
                  rel="no-referrer"
                >
                  <Github size={18} />
                </a>
                <a
                  href={portfolioOwner.linkedin}
                  target="_blank"
                  className="p-2 rounded-lg bg-white/3 border border-white/5 text-neutral-400 hover:text-white"
                  rel="no-referrer"
                >
                  <Linkedin size={18} />
                </a>
              </div>
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="flex items-center gap-1.5 bg-gradient-to-r from-neon-purple to-indigo-600 text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-neon-glow"
              >
                <span>Start a Project</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
