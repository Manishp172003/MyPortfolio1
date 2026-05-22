import { useEffect, useState } from 'react';
import { ArrowDown, Layers, Play, Facebook, Instagram, Twitter, MessageSquare, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { portfolioOwner } from '../data';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized coordinates (-50 to 50) for parallax and light tracking
      const x = (e.clientX / window.innerWidth) * 100 - 50;
      const y = (e.clientY / window.innerHeight) * 100 - 50;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen w-full flex flex-col justify-between items-center overflow-hidden bg-gradient-to-b from-[#030308] via-[#090715] to-deep-dark pt-28 pb-16 px-4" 
      id="hero"
    >
      {/* Cinematic Background Video (Muted, Loop, Autoplay, HTML5 performance) */}
      <video 
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-50 mix-blend-lighten select-none"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://getshared.com/dashboard/api/files/c6798678-547b-11f1-8264-ac1f6b763f30/stream?share=ENxPoCG3lRMK" type="video/mp4" />
      </video>

      {/* Cinematic dark / glowing radial overlays to ensure ultra-high readability for copy */}
      <div className="absolute inset-0 bg-gradient-to-t from-deep-dark via-[#090715]/40 to-black/70 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_#030308_95%)] opacity-70 pointer-events-none z-0" />

      {/* Dynamic Cinematic Spotlight (Tracks Mouse cursor softly) */}
      <div 
        className="absolute hidden md:block w-[600px] h-[600px] rounded-full blur-[140px] bg-neon-purple/10 pointer-events-none transition-transform duration-700 ease-out z-0"
        style={{
          transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`,
          left: 'calc(50% - 300px)',
          top: 'calc(50% - 300px)',
        }}
      />

      {/* Floating Animated Purple & Blue blobs */}
      <div className="absolute top-[20%] left-[10%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-full bg-neon-purple/8 opacity-20 blur-[100px] animate-float pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[300px] md:w-[450px] h-[300px] md:h-[450px] rounded-full bg-cyber-blue/8 opacity-15 blur-[100px] animate-float-delayed pointer-events-none" />

      {/* Hero Content Container */}
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center relative z-10 my-auto text-center">
        
        {/* BIG BACKDROP TYPOGRAPHY: "MANISH" */}
        <div className="absolute w-full select-none pointer-events-none -translate-y-8 md:-translate-y-16 overflow-hidden">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="text-[16vw] font-display font-black tracking-tighter leading-none text-center uppercase text-white/5 opacity-8 blur-[1px]"
            style={{
              letterSpacing: '-0.05em',
              transform: `translate(${mousePosition.x * -0.1}px, ${mousePosition.y * -0.1}px)`
            }}
          >
            {portfolioOwner.name}
          </motion.h1>
        </div>

        {/* Hero Central Area (Split on desktop: Text & Floating cards + Manish Visual centerpiece) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative z-20">
          
          {/* Left Text Block */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-1 lg:col-span-5 text-left flex flex-col gap-6"
          >
            <div className="flex items-center gap-2 text-neon-purple-light font-mono text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-neon-purple-light animate-ping" />
              <span>{portfolioOwner.subtitle}</span>
            </div>

            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-5xl text-white leading-[1.1] tracking-tight">
              Websites that turn <br />
              <span className="bg-gradient-to-r from-neon-purple-light via-pink-400 to-cyber-blue-light bg-clip-text text-transparent text-neon-glow">
                visitors into clients
              </span>
            </h2>

            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-sans max-w-md">
              {portfolioOwner.description}
            </p>

            {/* Premium CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <button
                onClick={() => handleScrollTo('projects')}
                className="bg-gradient-to-r from-neon-purple via-indigo-600 to-cyber-blue hover:from-neon-purple-light hover:to-cyber-blue-light text-white text-xs sm:text-sm font-bold px-7 py-3.5 rounded-full transition-all duration-300 shadow-neon-glow hover:shadow-neon-glowing-strong hover:-translate-y-0.5 flex items-center gap-2 group"
                id="hero-view-projects-btn"
              >
                <span>View My Work</span>
                <span className="p-1 rounded-full bg-white/20 group-hover:translate-x-1 transition-transform">
                  <Play size={10} className="fill-current text-white" />
                </span>
              </button>

              <button
                onClick={() => handleScrollTo('contact')}
                className="glass-panel hover:bg-white/5 border border-white/10 hover:border-neon-purple-light/50 text-white text-xs sm:text-sm font-bold px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
                id="hero-contact-btn"
              >
                Contact Me
              </button>
            </div>

            {/* Small metric teaser */}
            <div className="flex items-center gap-8 mt-4 pt-6 border-t border-white/5 text-xs font-mono text-neutral-400">
              <div>
                <span className="block text-xl font-bold font-display text-white">{portfolioOwner.deliveryCount}</span>
                <span>Completed Projects</span>
              </div>
              <div className="w-px h-8 bg-white/5" />
              <div>
                <span className="block text-xl font-bold font-display text-white">{portfolioOwner.satisfactionRate}</span>
                <span>Satisfaction Score</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Image Centerpiece (Manish Portrait mock) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="col-span-1 lg:col-span-7 flex justify-center lg:justify-end items-center relative lg:translate-x-12 xl:translate-x-20 transition-transform duration-300"
          >
            <div className="relative">
              {/* Main Glowing Halo Circle Behind Image */}
              <div className="absolute w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-neon-purple/30 to-cyber-blue/20 blur-[50px] animate-pulse-slow z-0" />

              {/* Custom Interactive Avatar Frame */}
              <div className="relative z-10 w-[280px] sm:w-[420px] aspect-[4/5] rounded-[30px] overflow-hidden border border-white/15 bg-gradient-to-b from-[#110e28]/70 to-[#050510]/95 shadow-neon-glow group cursor-pointer transition-transform duration-500 hover:scale-[1.02]">
                {/* Refinement lines and cyberpunk corner badges */}
                <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-neon-purple-light/60" />
                <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-neon-purple-light/60" />
                <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-neon-purple-light/60" />
                <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-neon-purple-light/60" />

                {/* Cyber Abstract Digital Emblem in place of portrait */}
                <div className="w-full h-full flex flex-col items-center justify-center bg-[radial-gradient(circle_at_center,_#110935_0%,_#03020a_90%)] relative overflow-hidden">
                  {/* Tech grid animation background */}
                  <div 
                    className="absolute inset-0 opacity-15 pointer-events-none"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                      transform: 'perspective(500px) rotateX(60deg) translateY(-20px)'
                    }}
                  />
                  
                  {/* Rotating holographic cyber rings */}
                  <div className="relative w-48 h-48 flex items-center justify-center">
                    <div className="absolute w-44 h-44 rounded-full border-2 border-dashed border-neon-purple/40 animate-[spin_30s_linear_infinite]" />
                    <div className="absolute w-36 h-36 rounded-full border border-double border-cyber-blue/30 animate-[spin_15s_linear_infinite_reverse]" />
                    <div className="absolute w-28 h-28 rounded-full bg-gradient-to-tr from-neon-purple/10 to-cyber-blue/10 blur-md animate-pulse" />
                    
                    {/* Glowing letter M */}
                    <span className="font-display font-black text-6xl tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-indigo-300 font-extrabold select-none drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                      M
                    </span>
                  </div>
                  
                  {/* Visual Audio Waveform Simulation */}
                  <div className="absolute bottom-28 left-0 right-0 flex justify-center items-end gap-1 px-8 h-8 opacity-40">
                    <div className="w-1 bg-neon-purple-light rounded-full animate-[bounce_1.2s_infinite_100ms]" style={{ height: '30%' }} />
                    <div className="w-1 bg-cyber-blue rounded-full animate-[bounce_1.4s_infinite_300ms]" style={{ height: '70%' }} />
                    <div className="w-1 bg-pink-400 rounded-full animate-[bounce_1s_infinite_200ms]" style={{ height: '50%' }} />
                    <div className="w-1 bg-neon-purple-light rounded-full animate-[bounce_1.6s_infinite_500ms]" style={{ height: '90%' }} />
                    <div className="w-1 bg-cyber-blue-light rounded-full animate-[bounce_1.2s_infinite_400ms]" style={{ height: '40%' }} />
                    <div className="w-1 bg-[#c084fc] rounded-full animate-[bounce_1.5s_infinite_150ms]" style={{ height: '65%' }} />
                  </div>
                </div>

                {/* Glowing Purple Overlay mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-neon-purple/15 to-transparent mix-blend-color-add pointer-events-none" />

                {/* Small branding tags inside image */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full border border-white/5 bg-black/60 backdrop-blur-md text-[10px] font-mono tracking-widest text-[#c084fc] uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-purple-light animate-pulse" />
                  <span>#MMP_PORTFOLIO</span>
                </div>

                {/* Floating Name/Role details inside the bottom of card overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel bg-black/60 border border-white/10 backdrop-blur-md flex flex-col gap-1">
                  <span className="font-display font-black text-xl text-white tracking-wide">
                    {portfolioOwner.name}
                  </span>
                  <span className="font-mono text-xs text-neutral-300">
                    {portfolioOwner.title}
                  </span>
                  <div className="h-[2px] w-12 bg-neon-purple-light rounded-full mt-2" />
                </div>
              </div>


            </div>
          </motion.div>

        </div>

      </div>

      {/* Social Media icons bar & Scroll Down tracker */}
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between border-t border-white/5 pt-8 relative z-20">
        
        {/* Social Icons matching the screenshot bar */}
        <div className="flex items-center gap-3" id="hero-social-tray">
          <a href="#github" className="w-8 h-8 rounded-full border border-white/5 bg-white/2 hover:bg-neon-purple/10 hover:text-neon-purple-light text-neutral-400 flex items-center justify-center transition-all duration-300">
            <Facebook size={14} />
          </a>
          <a href="#instagram" className="w-8 h-8 rounded-full border border-white/5 bg-white/2 hover:bg-neon-purple/10 hover:text-neon-purple-light text-neutral-400 flex items-center justify-center transition-all duration-300">
            <Instagram size={14} />
          </a>
          <a href="#behance" className="w-8 h-8 rounded-full border border-white/5 bg-white/2 hover:bg-neon-purple/10 hover:text-neon-purple-light text-neutral-400 flex items-center justify-center font-bold text-[10px] transition-all duration-300">
            Bē
          </a>
          <a href="#twitter" className="w-8 h-8 rounded-full border border-white/5 bg-white/2 hover:bg-neon-purple/10 hover:text-neon-purple-light text-neutral-400 flex items-center justify-center transition-all duration-300">
            <Twitter size={14} />
          </a>
        </div>

        {/* Cinematic Down Tracker */}
        <button 
          onClick={() => handleScrollTo('about')}
          className="flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-neon-purple-light transition-colors group"
          id="hero-scroll-btn"
        >
          <span>EXPLORE MY WORLD</span>
          <span className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:translate-y-1 transition-transform">
            <ArrowDown size={11} className="text-neutral-400 group-hover:text-neon-purple-light transition-colors" />
          </span>
        </button>
      </div>
    </section>
  );
}
