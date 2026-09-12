import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowDown, 
  Play, 
  Sparkles, 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  Award, 
  Code2, 
  Terminal,
  ExternalLink,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioOwner, profileImage } from '../data';

interface HeroProps {
  onOpenResume?: () => void;
}

const rotatingRoles = [
  { title: "Java Full Stack Developer", color: "from-neon-purple-light via-purple-300 to-cyber-blue-light" },
  { title: "Creative UI/UX Specialist", color: "from-pink-400 via-neon-purple-light to-cyber-blue-light" },
  { title: "Spring Boot & REST Architect", color: "from-emerald-400 via-teal-300 to-cyber-blue-light" },
  { title: "Electronics & IoT Innovator", color: "from-amber-400 via-yellow-300 to-neon-purple-light" }
];

export default function Hero({ onOpenResume }: HeroProps = {}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cardTilt, setCardTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [roleIndex, setRoleIndex] = useState(0);
  const [cardTab, setCardTab] = useState<'profile' | 'code'>('profile');
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse Parallax & Soft 3D Card Tilt
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100 - 50;
      const y = (e.clientY / window.innerHeight) * 100 - 50;
      setMousePosition({ x, y });

      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const cardX = e.clientX - rect.left - rect.width / 2;
        const cardY = e.clientY - rect.top - rect.height / 2;
        const rotateX = -(cardY / (rect.height / 2)) * 10;
        const rotateY = (cardX / (rect.width / 2)) * 10;
        setCardTilt({ rotateX, rotateY });
      }
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

  const handleCardMouseLeave = () => {
    setCardTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <section 
      className="relative min-h-screen w-full flex flex-col justify-between items-center overflow-hidden bg-[#030014] pt-28 pb-10 px-4 sm:px-6 lg:px-8 select-none" 
      id="hero"
    >
      {/* Background Live Cyber Video (Subtle atmospheric depth only) */}
      <video 
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-20 mix-blend-screen select-none"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
        <source src="https://getshared.com/dashboard/api/files/c6798678-547b-11f1-8264-ac1f6b763f30/stream?share=ENxPoCG3lRMK" type="video/mp4" />
      </video>

      {/* Directional Gradient Scrim: Deep pure obsidian on the left half to completely eliminate video face clash with text */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#030014] via-[#030014]/95 via-55% to-[#030014]/40 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-transparent to-[#030014] pointer-events-none z-0" />

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
      <div className="absolute top-[20%] left-[5%] w-[350px] h-[350px] rounded-full bg-neon-purple/15 blur-[130px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] rounded-full bg-cyber-blue/15 blur-[140px] animate-pulse-slow pointer-events-none" />

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center w-full relative z-20">
          
          {/* Left Column: High-Impact Typography & Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="col-span-1 lg:col-span-7 text-left flex flex-col gap-6"
          >
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-neon-purple/40 bg-neon-purple/10 self-start shadow-[0_0_20px_rgba(139,92,246,0.3)] backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-[11px] font-mono font-bold tracking-wider text-neon-purple-light uppercase">
                Available for New Projects & Full-Stack Roles
              </span>
            </div>

            {/* Main Headline */}
            <div className="flex flex-col gap-1.5">
              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.08] tracking-tight">
                Crafting Scalable <br className="hidden sm:block" />
                Web Experiences
              </h1>

              {/* Kinetic Role Flipper with Fixed Height */}
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
              Final-year <strong className="text-white font-semibold">Electronics & Telecommunication</strong> engineer at YCCE Nagpur, trained at <strong className="text-neon-purple-light font-semibold">IT Vedant</strong>. Engineering clean Java backends, RESTful microservices, and Apple-smooth responsive UI systems.
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

          {/* Right Column: 3D Interactive Holographic Developer HUD Console */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="col-span-1 lg:col-span-5 flex justify-center lg:justify-end items-center relative"
            style={{ perspective: 1200 }}
          >
            {/* Main Interactive 3D HUD Console Card */}
            <div
              ref={cardRef}
              onMouseLeave={handleCardMouseLeave}
              className="relative z-10 w-full max-w-[400px] sm:max-w-[440px] rounded-3xl overflow-hidden border border-neon-purple/30 bg-gradient-to-b from-[#110c2c]/95 via-[#070517]/95 to-[#04020f] shadow-[0_0_50px_rgba(139,92,246,0.3)] transition-transform duration-200 ease-out backdrop-blur-2xl"
              style={{
                transform: `rotateX(${cardTilt.rotateX}deg) rotateY(${cardTilt.rotateY}deg)`,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Top Integrated Achievement Header */}
              <div className="px-5 py-2.5 bg-gradient-to-r from-amber-500/20 via-neon-purple/20 to-cyber-blue/20 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 text-sm">🏆</span>
                  <span className="font-mono font-extrabold text-[11px] text-amber-300 tracking-wider uppercase">
                    1st Place Winner
                  </span>
                </div>
                <span className="font-mono text-[10px] text-neutral-400">
                  IT Vedant Hackathon 2026
                </span>
              </div>

              {/* Card Window Controls & Tabs */}
              <div className="px-5 py-3 border-b border-white/10 flex items-center justify-between bg-black/30">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="ml-2 font-mono text-[10px] text-neutral-400 font-bold tracking-wider">
                    DEV_HUD // MANISH_PAWAR
                  </span>
                </div>

                {/* Card Mode Tabs */}
                <div className="flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10">
                  <button
                    onClick={() => setCardTab('profile')}
                    className={`px-3 py-1 rounded-full text-[10px] font-mono transition-all cursor-pointer ${
                      cardTab === 'profile'
                        ? 'bg-neon-purple text-white font-bold shadow-[0_0_10px_rgba(139,92,246,0.5)]'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    PROFILE
                  </button>
                  <button
                    onClick={() => setCardTab('code')}
                    className={`px-3 py-1 rounded-full text-[10px] font-mono transition-all cursor-pointer ${
                      cardTab === 'code'
                        ? 'bg-neon-purple text-white font-bold shadow-[0_0_10px_rgba(139,92,246,0.5)]'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    CODE
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 relative min-h-[350px] flex flex-col justify-between">
                
                {cardTab === 'profile' ? (
                  /* TAB 1: Profile HUD View */
                  <div className="flex flex-col items-center justify-center text-center">
                    
                    {/* Portrait Avatar Frame with Cyber Aperture */}
                    <div className="relative w-36 h-36 sm:w-40 sm:h-40 mb-4">
                      {/* Rotating Outer Dashed Rings */}
                      <div className="absolute inset-0 rounded-full border border-dashed border-neon-purple/50 animate-[spin_20s_linear_infinite]" />
                      <div className="absolute inset-1.5 rounded-full border border-cyber-blue/40 animate-[spin_12s_linear_infinite_reverse]" />

                      {/* Ambient Halo */}
                      <div className="absolute inset-3 rounded-full bg-gradient-to-tr from-neon-purple/40 to-cyber-blue/30 blur-lg animate-pulse" />

                      {/* Clean Portrait Image Container */}
                      <div className="absolute inset-3 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl bg-[#060413]">
                        <img 
                          src={profileImage} 
                          alt={portfolioOwner.name}
                          className="w-full h-full object-cover select-none transform hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/profile-image.jpeg';
                          }}
                        />
                      </div>

                      {/* Scanning Laser Line */}
                      <motion.div
                        className="absolute inset-3 rounded-full overflow-hidden pointer-events-none"
                        animate={{ y: [-60, 60, -60] }}
                        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-neon-purple-light to-transparent shadow-[0_0_8px_#c084fc]" />
                      </motion.div>

                      {/* Online Status Dot */}
                      <div className="absolute bottom-3 right-3 w-4 h-4 rounded-full bg-[#030014] flex items-center justify-center border border-white/20 z-20">
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                      </div>
                    </div>

                    {/* Name & Title */}
                    <h3 className="font-display font-black text-2xl text-white tracking-wide">
                      {portfolioOwner.name}
                    </h3>
                    <p className="font-mono text-xs text-neon-purple-light tracking-wide mt-1">
                      {portfolioOwner.title}
                    </p>

                    {/* Location & Status Chips */}
                    <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-neutral-300">
                        📍 Nagpur, India
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-neutral-300">
                        🎓 YCCE (ETC 2026)
                      </span>
                      <span className="px-3 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/30 text-[10px] font-mono text-[#c084fc]">
                        ☕ Java & Spring
                      </span>
                    </div>

                    {/* Dynamic Equalizer Audio Wave */}
                    <div className="flex items-end justify-center gap-1.5 h-5 mt-5 opacity-70">
                      <div className="w-1 bg-neon-purple-light rounded-full animate-[bounce_1.2s_infinite_100ms]" style={{ height: '35%' }} />
                      <div className="w-1 bg-cyber-blue rounded-full animate-[bounce_1.4s_infinite_300ms]" style={{ height: '80%' }} />
                      <div className="w-1 bg-pink-400 rounded-full animate-[bounce_1s_infinite_200ms]" style={{ height: '60%' }} />
                      <div className="w-1 bg-neon-purple-light rounded-full animate-[bounce_1.6s_infinite_500ms]" style={{ height: '100%' }} />
                      <div className="w-1 bg-cyber-blue-light rounded-full animate-[bounce_1.2s_infinite_400ms]" style={{ height: '45%' }} />
                      <div className="w-1 bg-[#c084fc] rounded-full animate-[bounce_1.5s_infinite_150ms]" style={{ height: '70%' }} />
                    </div>

                  </div>
                ) : (
                  /* TAB 2: Live Code View */
                  <div className="text-left font-mono text-xs space-y-2 bg-[#060412] p-4 rounded-2xl border border-white/10">
                    <div className="text-neutral-500 text-[10px] pb-1 border-b border-white/5 flex items-center justify-between">
                      <span>Developer.java</span>
                      <span className="text-green-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping" />
                        Compiled
                      </span>
                    </div>

                    <div className="text-pink-400">package <span className="text-neutral-300">com.manish.portfolio;</span></div>
                    
                    <div className="text-neon-purple-light">
                      public class <span className="text-amber-300 font-bold">ManishPawar</span> &#123;
                    </div>

                    <div className="pl-3 space-y-1 text-[11px]">
                      <div><span className="text-cyber-blue-light">String</span> role = <span className="text-emerald-300">"Java Full Stack Developer"</span>;</div>
                      <div><span className="text-cyber-blue-light">String</span> college = <span className="text-emerald-300">"YCCE Nagpur (ETC)"</span>;</div>
                      <div><span className="text-cyber-blue-light">String[]</span> stack = &#123; <span className="text-emerald-300">"Java"</span>, <span className="text-emerald-300">"Spring"</span>, <span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"MySQL"</span> &#125;;</div>
                      <div><span className="text-cyber-blue-light">boolean</span> availableForHire = <span className="text-amber-400 font-bold">true</span>;</div>
                    </div>

                    <div className="pl-3 pt-1">
                      <div className="text-neon-purple-light">
                        public void <span className="text-yellow-300">innovate</span>() &#123;
                      </div>
                      <div className="pl-3 text-emerald-300 text-[11px]">
                        System.out.println(<span className="text-amber-200">"Transforming ideas into scalable code!"</span>);
                      </div>
                      <div className="text-neon-purple-light">&#125;</div>
                    </div>

                    <div className="text-neon-purple-light">&#125;</div>
                  </div>
                )}

              </div>

              {/* Card Footer Status Bar */}
              <div className="px-5 py-2.5 border-t border-white/10 bg-black/50 flex items-center justify-between font-mono text-[10px] text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  STATUS: <strong className="text-white">READY FOR WORK</strong>
                </span>
                <span className="text-neon-purple-light">PORTFOLIO v2.0</span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>

      {/* Hero Bottom Bar: Verified Social Dock & Discover Down Indicator */}
      <div className="w-full max-w-[1650px] mx-auto flex items-center justify-between border-t border-white/10 pt-5 mt-6 relative z-20">
        
        {/* Genuine Developer Social Media Dock */}
        <div className="flex items-center gap-3" id="hero-social-tray">
          <a 
            href={portfolioOwner.github} 
            target="_blank" 
            rel="noreferrer" 
            className="w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-neon-purple/20 hover:border-neon-purple/50 hover:text-white text-neutral-400 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm cursor-pointer"
            aria-label="GitHub Profile"
            title="GitHub Profile"
          >
            <Github size={15} />
          </a>

          <a 
            href={portfolioOwner.linkedin} 
            target="_blank" 
            rel="noreferrer" 
            className="w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-cyber-blue/20 hover:border-cyber-blue/50 hover:text-white text-neutral-400 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm cursor-pointer"
            aria-label="LinkedIn Profile"
            title="LinkedIn Profile"
          >
            <Linkedin size={15} />
          </a>

          <a 
            href={portfolioOwner.instagram} 
            target="_blank" 
            rel="noreferrer" 
            className="w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-pink-500/20 hover:border-pink-500/50 hover:text-white text-neutral-400 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm cursor-pointer"
            aria-label="Instagram Profile"
            title="Instagram Profile"
          >
            <Instagram size={15} />
          </a>

          <a 
            href={`mailto:${portfolioOwner.email}`} 
            className="w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-neon-purple/20 hover:border-neon-purple/50 hover:text-white text-neutral-400 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm cursor-pointer"
            aria-label="Email Manish"
            title="Email Manish"
          >
            <Mail size={15} />
          </a>
        </div>

        {/* Discover Manish Scroll Down Trigger */}
        <button 
          onClick={() => handleScrollTo('about')}
          className="flex items-center gap-2.5 text-xs font-mono text-neutral-400 hover:text-neon-purple-light transition-colors group cursor-pointer"
          id="hero-scroll-btn"
        >
          <span className="tracking-widest uppercase font-bold text-[11px]">DISCOVER MANISH</span>
          <span className="w-7 h-7 rounded-full bg-white/5 border border-white/10 group-hover:border-neon-purple/50 group-hover:bg-neon-purple/10 flex items-center justify-center group-hover:translate-y-1 transition-all">
            <ArrowDown size={12} className="text-neutral-400 group-hover:text-neon-purple-light transition-colors" />
          </span>
        </button>
      </div>
    </section>
  );
}
