import { MouseEvent } from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Sparkles, Copyright } from 'lucide-react';
import { portfolioOwner } from '../data';

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
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-white/5 py-12 px-4 relative overflow-hidden" id="footer-section">
      {/* Background soft lighting wash */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[350px] h-[150px] bg-neon-purple/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto flex flex-col gap-10 relative z-10">
        
        {/* Top Segment containing Brand, Quick Links, Back to top */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-white/5">
          {/* Logo Brand info */}
          <div className="flex items-center gap-3 self-start">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-neon-purple to-neon-purple-light flex items-center justify-center font-display font-black text-sm text-white tracking-widest shadow-neon-glow">
              M
            </div>
            <div className="text-left">
              <span className="block font-display font-black text-base tracking-widest text-white leading-none">
                {portfolioOwner.name}
              </span>
              <span className="text-[9.5px] font-mono tracking-wider text-neutral-500 uppercase leading-none">
                UI/UX Core Engineering
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs font-bold text-neutral-400">
            <a href="#about" onClick={(e) => handleScrollTo(e, '#about')} className="hover:text-white transition-colors">ABOUT</a>
            <a href="#skills" onClick={(e) => handleScrollTo(e, '#skills')} className="hover:text-white transition-colors">SKILLS</a>
            <a href="#projects" onClick={(e) => handleScrollTo(e, '#projects')} className="hover:text-white transition-colors">PROJECTS</a>
            <a href="#experience" onClick={(e) => handleScrollTo(e, '#experience')} className="hover:text-white transition-colors">EXPERIENCE</a>
            <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')} className="hover:text-white transition-colors">CONTACT</a>
          </div>

          {/* Up Trigger button */}
          <button
            onClick={handleScrollToTop}
            className="w-10 h-10 rounded-full bg-white/3 border border-white/5 hover:border-neon-purple-light/50 hover:bg-neon-purple/10 text-neutral-400 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm self-start md:self-auto group"
            title="Scroll back to top"
            id="footer-scroll-top-btn"
          >
            <ArrowUp size={15} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom Segment: Copyright, Client credentials, Status metrics */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-xs text-neutral-500 font-mono">
          <div className="flex items-center gap-1.5 self-start">
            <Copyright size={13} className="text-neutral-600" />
            <span>{currentYear} {portfolioOwner.name}. ALL RIGHTS RESERVED WORLDWIDE.</span>
          </div>

          <div className="flex items-center gap-3" id="footer-social-links">
            <a 
              href={portfolioOwner.github} 
              target="_blank" 
              className="hover:text-white transition-colors"
              rel="no-referrer"
            >
              Github
            </a>
            <span className="text-neutral-700 select-none">/</span>
            <a 
              href={portfolioOwner.linkedin} 
              target="_blank" 
              className="hover:text-white transition-colors"
              rel="no-referrer"
            >
              LinkedIn
            </a>
            <span className="text-neutral-700 select-none">/</span>
            <a 
              href={portfolioOwner.twitter} 
              target="_blank" 
              className="hover:text-white transition-colors"
              rel="no-referrer"
            >
              Twitter
            </a>
          </div>

          <div className="flex items-center gap-1.5 self-start text-[#c084fc] font-bold">
            <Sparkles size={11} className="animate-spin text-neon-purple-light" />
            <span>EXCELLENCE GUARANTEED</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
