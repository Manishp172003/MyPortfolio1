import { ArrowRight, User, Terminal, Code, Sparkles, CheckCircle2, Award, Briefcase, Code2, Trophy } from 'lucide-react';
import { portfolioOwner, clientLogos, profileImage } from '../data';
import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

export default function About() {
  const focusAreas = [
    { title: "User Experience (UI/UX)", percentage: 94, desc: "Aesthetic interfaces made highly intuitive." },
    { title: "Page Speed & Performance", percentage: 98, desc: "Ultra-optimized rendering pipelines, instant load." },
    { title: "Scale & Maintainability", percentage: 90, desc: "Clean semantic components, robust modular structures." }
  ];

  const techSymbols = ['</>', '{ }', '[ ]', '< >', '//', '&&', '||', '=>', '++', '--', '01', '10'];

  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  const animatedStats = [
    { value: portfolioOwner.experienceYearCount, label: "Years Experience", icon: Briefcase, color: "from-neon-purple to-indigo-600" },
    { value: "3+", label: "Projects Completed", icon: Code2, color: "from-cyber-blue to-purple-600" },
    { value: 2, label: "Hackathon Wins", icon: Trophy, color: "from-amber-400 to-orange-500" },
    { value: "100%", label: "Client Satisfaction", icon: Award, color: "from-green-400 to-emerald-600" }
  ];

  const AnimatedCounter = ({ value, suffix = "" }: { value: number | string, suffix?: string }) => {
    const [displayValue, setDisplayValue] = useState(0);
    const isPercentage = typeof value === 'string' && value.includes('%');
    const hasPlus = typeof value === 'string' && value.includes('+');
    const numericValue = typeof value === 'number' ? value : parseInt(value.replace(/[^0-9]/g, '')) || 0;
    
    useEffect(() => {
      if (statsInView) {
        let start = 0;
        const end = numericValue;
        const duration = 2000;
        const steps = 50; // Fixed number of steps for smooth animation
        const incrementTime = duration / steps;
        const stepSize = end / steps;
        
        const timer = setInterval(() => {
          start += stepSize;
          setDisplayValue(Math.min(Math.round(start), end));
          if (start >= end) {
            clearInterval(timer);
          }
        }, incrementTime);
        
        return () => clearInterval(timer);
      }
    }, [statsInView, numericValue]);

    const displaySuffix = isPercentage ? '%' : hasPlus ? '+' : suffix;
    
    return (
      <span>
        {displayValue}{displaySuffix}
      </span>
    );
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="relative py-24 px-4 bg-[#05050a] flex flex-col justify-center items-center overflow-hidden bg-grain" id="about">
      {/* Dynamic background lighting */}
      <div className="absolute top-[30%] -right-[20%] w-[400px] h-[400px] rounded-full bg-neon-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] -left-[20%] w-[350px] h-[350px] rounded-full bg-cyber-blue/5 blur-[100px] pointer-events-none" />

      {/* Floating Tech Elements Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {techSymbols.map((symbol, index) => (
          <motion.div
            key={index}
            className="absolute font-mono text-[10px] sm:text-xs text-neon-purple/20 font-bold select-none"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              opacity: 0,
              scale: 0
            }}
            animate={isInView ? {
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0],
              y: [0, -100, -200]
            } : {}}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      <div className="w-full max-w-6xl mx-auto flex flex-col gap-16 relative z-10">
        
        {/* About Header Grid (Split layout matching mockup) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Metadata Rail */}
          <div className="col-span-1 lg:col-span-4 flex flex-col gap-6 lg:border-r lg:border-white/5 lg:pr-12 text-left">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-neon-purple-light" />
              <span className="font-mono text-xs font-bold text-neon-purple-light tracking-widest uppercase">About Me</span>
            </div>

            {/* Digital Identity Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              {/* Card Container */}
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0d091e] to-[#0a071a] border border-neon-purple/30 shadow-neon-glow">
                
                {/* Holographic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-transparent to-cyber-blue/10 opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                
                {/* Cyberpunk Grid Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full" style={{
                    backgroundImage: `
                      linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }} />
                </div>

                {/* Glowing Corner Accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-neon-purple/50 rounded-tl-2xl" />
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyber-blue/50 rounded-tr-2xl" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-cyber-blue/50 rounded-bl-2xl" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-neon-purple/50 rounded-br-2xl" />

                {/* Avatar Section */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
                  {/* Stylized Avatar Circle */}
                  <motion.div
                    className="relative w-28 h-28 mb-4"
                    animate={{ 
                      boxShadow: [
                        '0 0 20px rgba(139, 92, 246, 0.3)',
                        '0 0 40px rgba(139, 92, 246, 0.5)',
                        '0 0 20px rgba(139, 92, 246, 0.3)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {/* Outer Ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-neon-purple/50" />
                    {/* Inner Ring */}
                    <div className="absolute inset-2 rounded-full border border-cyber-blue/30" />
                    {/* Profile Image */}
                    <div className="absolute inset-4 rounded-full overflow-hidden">
                      <img 
                        src={profileImage} 
                        alt={portfolioOwner.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {/* Scanning Line */}
                    <motion.div
                      className="absolute inset-0 rounded-full overflow-hidden"
                      animate={{ 
                        backgroundPosition: ['0% 0%', '0% 100%', '0% 0%']
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      style={{
                        background: 'linear-gradient(180deg, transparent, rgba(139, 92, 246, 0.3), transparent)',
                        backgroundSize: '100% 200%'
                      }}
                    />
                  </motion.div>

                  {/* Name */}
                  <h4 className="font-display font-black text-lg text-white mb-1">
                    {portfolioOwner.name}
                  </h4>
                  
                  {/* Title */}
                  <p className="font-mono text-[10px] text-neon-purple-light uppercase tracking-wider mb-3">
                    {portfolioOwner.title}
                  </p>

                  {/* Status Badge */}
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neon-purple/10 border border-neon-purple/30">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] font-mono text-green-400 uppercase">Online</span>
                  </div>


                </div>

                {/* Glitch Effect Overlay */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{
                    opacity: [0, 0.1, 0],
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  style={{
                    background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 92, 246, 0.1) 2px, rgba(139, 92, 246, 0.1) 4px)',
                    backgroundSize: '100% 4px'
                  }}
                />
              </div>
            </motion.div>

            <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight mt-4">
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

            {/* Circular Skill Meters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {focusAreas.map((area, index) => {
                const gradientId = `gradient-${index}`;
                const colors = [
                  ['#8b5cf6', '#3b82f6'], // Purple to Blue
                  ['#3b82f6', '#06b6d4'], // Blue to Cyan  
                  ['#ec4899', '#8b5cf6']  // Pink to Purple
                ];
                const [startColor, endColor] = colors[index % colors.length];
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-panel hover:bg-white/3 border border-white/5 rounded-2xl p-6 hover:border-neon-purple/35 transition-all duration-300 group text-center"
                  >
                    {/* Circular Progress */}
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      {/* Background Circle */}
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="rgba(255,255,255,0.05)"
                          strokeWidth="8"
                          fill="none"
                        />
                        {/* Progress Circle */}
                        <motion.circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke={`url(#${gradientId})`}
                          strokeWidth="8"
                          fill="none"
                          strokeLinecap="round"
                          initial={{ strokeDasharray: "0 352" }}
                          animate={isInView ? { strokeDasharray: `${(area.percentage / 100) * 352} 352` } : { strokeDasharray: "0 352" }}
                          transition={{ duration: 1.5, delay: index * 0.2 + 0.3, ease: "easeOut" }}
                        />
                        {/* Gradient Definition */}
                        <defs>
                          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor={startColor} />
                            <stop offset="100%" stopColor={endColor} />
                          </linearGradient>
                        </defs>
                      </svg>
                      
                      {/* Percentage Text */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-display font-black text-2xl text-white">
                          {area.percentage}%
                        </span>
                      </div>
                    </div>

                    {/* Title and Description */}
                    <h4 className="font-display font-bold text-sm text-white group-hover:text-neon-purple-light transition-colors mb-2">
                      {area.title}
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {area.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Animated Stats Counter Section */}
            <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              {animatedStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-panel hover:bg-white/3 border border-white/5 rounded-xl p-4 hover:border-white/20 transition-all duration-300 group text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className={`bg-gradient-to-r ${stat.color} p-1.5 rounded-lg`}>
                      <stat.icon size={16} className="text-white" />
                    </div>
                  </div>
                  <div className="font-display font-black text-2xl sm:text-3xl text-white mb-1">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <p className="text-[10px] sm:text-xs font-mono text-neutral-400 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
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
