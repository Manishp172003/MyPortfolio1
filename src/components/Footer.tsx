import React, { MouseEvent } from 'react';
import { 
  ArrowUp, 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  Sparkles, 
  Copyright, 
  Terminal, 
  Cpu, 
  Heart,
  Code2
} from 'lucide-react';
import { portfolioOwner } from '../data';

const quickNavLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const hero = document.getElementById('hero');
    if (hero) {
      hero.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollTo = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
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
    <footer className="relative bg-[#020108] border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8 select-none overflow-hidden" id="footer-section">
      {/* Background ambient neon flare */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-neon-purple/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1650px] mx-auto flex flex-col gap-12 relative z-10">
        
        {/* Top Segment: Brand Identity, Live Operational Telemetry & Back To Summit */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 border-b border-white/10">
          
          {/* Brand Identity */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-neon-purple to-indigo-600 border border-neon-purple/40 flex items-center justify-center font-display font-black text-lg text-white shadow-[0_0_25px_rgba(139,92,246,0.4)]">
              M
            </div>
            <div className="text-left">
              <span className="block font-display font-black text-xl tracking-wider text-white leading-tight">
                {portfolioOwner.name}
              </span>
              <span className="text-xs font-mono tracking-widest text-neon-purple-light uppercase">
                JAVA FULL STACK & UI/UX ARCHITECT
              </span>
            </div>
          </div>

          {/* Operational Status Pill */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md self-start lg:self-auto font-mono text-xs text-neutral-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span>SYSTEM STATUS: ALL ENGINES OPERATIONAL</span>
          </div>

          {/* Return To Summit Trigger */}
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-white/5 hover:bg-neon-purple/15 border border-white/10 hover:border-neon-purple/40 text-xs font-mono font-bold uppercase text-neutral-300 hover:text-white transition-all duration-300 shadow-md group cursor-pointer self-start lg:self-auto"
            title="Return to top of page"
            id="footer-scroll-top-btn"
          >
            <span>RETURN TO SUMMIT</span>
            <div className="w-6 h-6 rounded-lg bg-white/10 group-hover:bg-neon-purple/30 flex items-center justify-center transition-colors">
              <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform text-white" />
            </div>
          </button>
        </div>

        {/* Middle Segment: Quick Navigation Matrix & Verified Social Tray */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-white/10">
          
          {/* Quick Navigation Links */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs font-bold text-neutral-400">
            {quickNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="hover:text-neon-purple-light transition-colors uppercase tracking-wider cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Verified Social Media Tray */}
          <div className="flex items-center gap-3" id="footer-social-links">
            <a
              href={portfolioOwner.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub Profile"
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/30 text-neutral-400 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105"
            >
              <Github size={16} />
            </a>

            <a
              href={portfolioOwner.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn Profile"
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-neon-purple/20 border border-white/10 hover:border-neon-purple/50 text-neutral-400 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105"
            >
              <Linkedin size={16} />
            </a>

            <a
              href={portfolioOwner.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              title="Instagram Profile"
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-pink-500/20 border border-white/10 hover:border-pink-500/50 text-neutral-400 hover:text-pink-300 flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105"
            >
              <Instagram size={16} />
            </a>

            <a
              href={`mailto:${portfolioOwner.email}`}
              aria-label="Email"
              title="Direct Email"
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 text-neutral-400 hover:text-cyan-300 flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        {/* Bottom Segment: Copyright, Tech Stack Badge, Regional Origin */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-xs text-neutral-500 font-mono">
          <div className="flex items-center gap-2">
            <Copyright size={13} className="text-neutral-600 shrink-0" />
            <span>{currentYear} {portfolioOwner.name}. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-2 text-neutral-400">
            <Code2 size={13} className="text-neon-purple-light" />
            <span>Engineered with React 19 • Tailwind CSS • Framer Motion</span>
          </div>

          <div className="flex items-center gap-1.5 text-neutral-400">
            <Sparkles size={12} className="text-amber-400" />
            <span>Crafted in Nagpur, India</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
