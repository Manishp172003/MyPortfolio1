import { ArrowRight, User, Terminal, Code, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioOwner, clientLogos } from '../data';

export default function About() {
  const focusAreas = [
    { title: "User Experience (UI/UX)", percentage: 94, desc: "Aesthetic interfaces made highly intuitive." },
    { title: "Page Speed & Performance", percentage: 98, desc: "Ultra-optimized rendering pipelines, instant load." },
    { title: "Scale & Maintainability", percentage: 90, desc: "Clean semantic components, robust modular structures." }
  ];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 px-4 bg-[#05050a] flex flex-col justify-center items-center overflow-hidden bg-grain" id="about">
      {/* Dynamic background lighting */}
      <div className="absolute top-[30%] -right-[20%] w-[400px] h-[400px] rounded-full bg-neon-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] -left-[20%] w-[350px] h-[350px] rounded-full bg-cyber-blue/5 blur-[100px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto flex flex-col gap-16 relative z-10">
        
        {/* About Header Grid (Split layout matching mockup) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Metadata Rail */}
          <div className="col-span-1 lg:col-span-4 flex flex-col gap-6 lg:border-r lg:border-white/5 lg:pr-12 text-left">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-neon-purple-light" />
              <span className="font-mono text-xs font-bold text-neon-purple-light tracking-widest uppercase">About Me</span>
            </div>
            
            <h3 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              A professional dedicated to digital refinement.
            </h3>

            <div className="flex flex-col gap-3 font-mono text-xs text-neutral-500 mt-4">
              <span className="flex items-center gap-2 hover:text-white transition-colors">
                <Terminal size={14} className="text-neon-purple-light" />
                <span>LOCATION: CLOUD NATIVE / ONLINE</span>
              </span>
              <span className="flex items-center gap-2 hover:text-white transition-colors">
                <User size={14} className="text-neon-purple-light" />
                <span>OWNER: {portfolioOwner.name} / FRONTEND</span>
              </span>
              <span className="flex items-center gap-2 hover:text-white transition-colors">
                <Code size={14} className="text-[#c084fc]" />
                <span>#MMP_PORTFOLIO</span>
              </span>
            </div>
          </div>

          {/* Right Professional Narrative */}
          <div className="col-span-1 lg:col-span-8 flex flex-col gap-8 text-left">
            <p className="font-display font-medium text-lg sm:text-xl lg:text-2xl text-neutral-200 leading-snug">
              {portfolioOwner.aboutDetailed}
            </p>

            <div className="h-px bg-gradient-to-r from-neon-purple/20 via-transparent to-transparent" />

            {/* Glowing Focus Progress Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {focusAreas.map((area, index) => (
                <div 
                  key={index}
                  className="glass-panel hover:bg-white/3 border border-white/5 rounded-2xl p-5 hover:border-neon-purple/35 transition-all duration-300 group"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-display font-bold text-sm text-white group-hover:text-neon-purple-light transition-colors">{area.title}</span>
                    <span className="font-mono text-xs text-neutral-500">{area.percentage}%</span>
                  </div>
                  
                  {/* Glowing custom progress line */}
                  <div className="w-full h-[3px] bg-white/5 rounded-full overflow-hidden relative mb-3">
                    <div 
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-neon-purple to-cyber-blue rounded-full group-hover:shadow-neon-glow"
                      style={{ width: `${area.percentage}%` }}
                    />
                  </div>

                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Direct Work Trigger Link */}
            <div className="flex flex-wrap items-center gap-6 mt-4">
              <button
                onClick={() => handleScrollTo('contact')}
                className="flex items-center gap-2 bg-white/3 hover:bg-neon-purple/15 text-white text-xs font-semibold px-6 py-3 rounded-full border border-white/10 hover:border-neon-purple/30 transition-all group"
                id="about-start-project-btn"
              >
                <span>Start a Project</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleScrollTo('projects')}
                className="text-xs font-semibold text-neutral-400 hover:text-white transition-colors"
                id="about-view-my-work-btn"
              >
                View My Work &rarr;
              </button>
            </div>

          </div>

        </div>

        {/* Corporate Trust Logos Banner (Recreates "Trusted by the clients" section in PNG structure!) */}
        <div className="w-full pt-16 border-t border-white/5 flex flex-col gap-6 text-center lg:text-left mt-8">
          <p className="text-xs font-mono tracking-widest text-neutral-500 font-bold uppercase select-none text-center">
            TRUSTED BY PROFESSIONAL DESIGN TEAMS & RECOGNIZED WORLDWIDE
          </p>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
            {clientLogos.map((client) => (
              <div 
                key={client.name} 
                className="group flex flex-col items-center justify-center filter grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100 px-4 py-2"
              >
                {/* Custom SVG Text Render representing corporate logos in high fidelity */}
                <span className="font-display font-black text-xl sm:text-2xl text-neutral-400 group-hover:text-white group-hover:text-neon-glow tracking-tighter leading-none transition-all cursor-pointer select-none">
                  {client.iconSvg.toUpperCase()}
                  <span className="text-neon-purple-light/80 group-hover:animate-pulse">✦</span>
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
