import React, { useState, useRef } from 'react';
import { 
  Terminal, 
  Cpu, 
  Code2, 
  Sparkles, 
  MapPin, 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Zap, 
  Copy, 
  Check,
  Layers,
  Flame
} from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { portfolioOwner, clientLogos, profileImage } from '../data';

export default function About() {
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const handleCopyCode = () => {
    const codeText = `public class ManishPawar {
  String education = "B.Tech ETC @ YCCE Nagpur";
  String specialization = "Java Full Stack Developer";
  String[] stack = {"Java", "Spring Boot", "React", "MySQL"};
  boolean readyForHire = true;
}`;
    navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#050314] flex flex-col justify-center items-center overflow-hidden select-none" 
      id="about"
    >
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-[20%] -left-[10%] w-[450px] h-[450px] rounded-full bg-neon-purple/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] -right-[10%] w-[450px] h-[450px] rounded-full bg-cyber-blue/10 blur-[140px] pointer-events-none" />

      {/* Subtle Background Cyber Grid */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(139, 92, 246, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.15) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      <div className="w-full max-w-[1650px] mx-auto flex flex-col gap-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center sm:items-start gap-3 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neon-purple/40 bg-neon-purple/10 shadow-[0_0_15px_rgba(139,92,246,0.3)] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-neon-purple-light animate-pulse" />
            <span className="font-mono text-xs font-bold text-neon-purple-light tracking-widest uppercase">
              ABOUT MANISH // ENGINEERING DNA
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Bridging Hardware Logic with Full-Stack Scalability
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl">
            A comprehensive snapshot of my education, technical strengths, and problem-solving methodology.
          </p>
        </div>

        {/* 5-MODULE CYBERPUNK BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* BOX 1: Core Story & Academic Narrative (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="col-span-1 lg:col-span-7 rounded-3xl p-7 sm:p-8 glass-panel bg-gradient-to-br from-[#0c0824]/90 via-[#070517]/95 to-[#04020f] border border-white/10 hover:border-neon-purple/40 transition-all duration-300 shadow-xl flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Ambient Corner Flare */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl pointer-events-none group-hover:bg-neon-purple/20 transition-all" />

            <div className="space-y-6 relative z-10 text-left">
              <div className="flex items-center gap-2 text-xs font-mono text-[#c084fc]">
                <Sparkles size={14} />
                <span className="font-bold tracking-wider uppercase">Background & Focus</span>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white leading-tight">
                Electronics & Telecommunication Engineer, Trained Java Full Stack Specialist.
              </h3>

              {/* Punchy Narrative Blocks instead of a wall of text */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1.5">
                  <div className="flex items-center gap-2 text-amber-300 font-mono text-xs font-bold">
                    <GraduationCap size={15} />
                    <span>YCCE NAGPUR (2022-2026)</span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Final-year B.Tech in Electronics & Telecommunication at Yeshwantrao Chavan College of Engineering, building strong analytical and systems foundations.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1.5">
                  <div className="flex items-center gap-2 text-neon-purple-light font-mono text-xs font-bold">
                    <Zap size={15} />
                    <span>IT VEDANT CERTIFIED</span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Underwent rigorous hands-on training in Java Core, Spring Boot, MySQL, OOP principles, and modern React web architecture.
                  </p>
                </div>
              </div>

              {/* Core Strength Highlights */}
              <div className="pt-2">
                <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2.5">
                  Primary Tech Pillars:
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Java Core & OOP', 'Spring Boot REST APIs', 'React.js 19', 'Tailwind CSS', 'MySQL Database', 'C / C++ Logic'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-neon-purple/10 border border-neon-purple/30 text-white font-medium hover:border-neon-purple hover:bg-neon-purple/20 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Action Row */}
            <div className="pt-8 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 relative z-10">
              <button
                onClick={() => handleScrollTo('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-neon-purple to-cyber-blue text-white text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_25px_rgba(139,92,246,0.7)] hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>Let's Build Together</span>
                <ArrowRight size={13} />
              </button>

              <button
                onClick={() => handleScrollTo('projects')}
                className="text-xs font-mono text-neutral-400 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>View Portfolio Projects</span>
                <span>&rarr;</span>
              </button>
            </div>
          </motion.div>

          {/* BOX 2: 3D Holographic Developer ID Card (Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="col-span-1 lg:col-span-5 rounded-3xl p-7 glass-panel bg-gradient-to-b from-[#110c2c]/95 via-[#070518]/95 to-[#040210] border border-neon-purple/30 shadow-[0_0_40px_rgba(139,92,246,0.25)] flex flex-col justify-between relative overflow-hidden"
          >
            {/* Top Identity Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-mono">
              <span className="text-neutral-400 font-bold tracking-wider">DEV_ID // 2026_SE</span>
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-[10px]">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span>ONLINE & AVAILABLE</span>
              </div>
            </div>

            {/* Avatar & Core Hologram */}
            <div className="flex flex-col items-center justify-center my-auto py-6 text-center">
              <div className="relative w-32 h-32 mb-4">
                {/* Rotating Dashed Rings */}
                <div className="absolute inset-0 rounded-full border border-dashed border-neon-purple/50 animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-1.5 rounded-full border border-cyber-blue/40 animate-[spin_12s_linear_infinite_reverse]" />
                <div className="absolute inset-3 rounded-full bg-neon-purple/20 blur-lg animate-pulse" />

                <div className="absolute inset-3 rounded-full overflow-hidden border-2 border-white/20 bg-[#070516]">
                  <img
                    src={profileImage}
                    alt={portfolioOwner.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/profile-image.jpeg';
                    }}
                  />
                </div>
              </div>

              <h4 className="font-display font-black text-2xl text-white tracking-wide">
                {portfolioOwner.name}
              </h4>
              <p className="font-mono text-xs text-neon-purple-light mt-0.5">
                Java Full Stack & Electronics Engineer
              </p>

              {/* Status Spec Table */}
              <div className="w-full mt-6 space-y-2 text-left font-mono text-[11px] bg-black/40 p-4 rounded-2xl border border-white/5">
                <div className="flex items-center justify-between text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-neon-purple-light" />
                    Location
                  </span>
                  <span className="text-white font-bold">Nagpur, MH, India (IST)</span>
                </div>
                <div className="flex items-center justify-between text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <GraduationCap size={13} className="text-cyber-blue-light" />
                    College
                  </span>
                  <span className="text-white font-bold">YCCE (ETC Engg)</span>
                </div>
                <div className="flex items-center justify-between text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <Award size={13} className="text-amber-400" />
                    Specialization
                  </span>
                  <span className="text-white font-bold">Java, Spring Boot, React</span>
                </div>
              </div>
            </div>

            {/* Bottom Chip */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-neutral-500">
              <span>SECURITY // VERIFIED ENCLAVE</span>
              <span className="text-neon-purple-light">#MANISH_PAWAR</span>
            </div>
          </motion.div>

          {/* BOX 3: Interactive Code Sandbox Widget (Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="col-span-1 lg:col-span-5 rounded-3xl p-6 glass-panel bg-gradient-to-b from-[#09061c]/95 to-[#040212] border border-white/10 hover:border-neon-purple/40 transition-all duration-300 shadow-xl flex flex-col justify-between text-left"
          >
            <div>
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-neutral-400 font-mono text-[11px] ml-2">DeveloperBio.java</span>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white text-[10px] font-mono transition-colors cursor-pointer"
                  title="Copy Java snippet"
                >
                  {copied ? <Check size={11} className="text-green-400" /> : <Copy size={11} />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Code Snippet */}
              <div className="font-mono text-xs space-y-1.5 leading-relaxed bg-[#050310] p-4 rounded-xl border border-white/5">
                <div className="text-pink-400">package <span className="text-neutral-300">com.manish.core;</span></div>
                <div className="text-neon-purple-light">
                  public class <span className="text-amber-300 font-bold">FullStackDev</span> &#123;
                </div>
                <div className="pl-4 space-y-1">
                  <div><span className="text-cyber-blue-light">String</span> education = <span className="text-emerald-300">"YCCE Nagpur (ETC)"</span>;</div>
                  <div><span className="text-cyber-blue-light">String</span> training = <span className="text-emerald-300">"IT Vedant (Full Stack)"</span>;</div>
                  <div><span className="text-cyber-blue-light">String[]</span> coreStack = &#123;</div>
                  <div className="pl-4 text-emerald-300">"Java", "Spring Boot", "React", "MySQL"</div>
                  <div>&#125;;</div>
                  <div><span className="text-cyber-blue-light">boolean</span> lovesProblemSolving = <span className="text-amber-400 font-bold">true</span>;</div>
                </div>
                <div className="pl-4 pt-1">
                  <div className="text-neon-purple-light">
                    public void <span className="text-yellow-300">execute</span>() &#123;
                  </div>
                  <div className="pl-4 text-emerald-300">
                    System.out.println(<span className="text-amber-200">"Deploying high-impact systems!"</span>);
                  </div>
                  <div className="text-neon-purple-light">&#125;</div>
                </div>
                <div className="text-neon-purple-light">&#125;</div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span className="flex items-center gap-1.5 text-green-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping" />
                BUILD // SUCCESSFUL (0 ERRORS)
              </span>
              <span>JVM SE 21</span>
            </div>
          </motion.div>

          {/* BOX 4: Dual-Edge Advantage: Electronics + Full Stack (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="col-span-1 lg:col-span-4 rounded-3xl p-6 glass-panel bg-gradient-to-br from-[#0e0a2b]/90 via-[#070519]/95 to-[#040212] border border-white/10 hover:border-cyber-blue/40 transition-all duration-300 shadow-xl flex flex-col justify-between text-left"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyber-blue to-indigo-500 flex items-center justify-center text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                <Cpu size={20} />
              </div>

              <div>
                <span className="font-mono text-[10px] text-cyber-blue-light uppercase tracking-wider font-bold">
                  Unique Engineering Perspective
                </span>
                <h4 className="font-display font-black text-xl text-white mt-1">
                  Hardware Intuition + Modern Web Architecture
                </h4>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed">
                Electronics engineering gives me deep intuition for hardware memory constraints, signal transmission, and protocol efficiency. I channel this into writing low-latency, highly optimized full-stack web applications.
              </p>

              <div className="space-y-2 pt-1 font-mono text-[11px] text-neutral-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-green-400 flex-shrink-0" />
                  <span>Memory & algorithmic optimization</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-green-400 flex-shrink-0" />
                  <span>Microservices & distributed REST APIs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-green-400 flex-shrink-0" />
                  <span>Interactive 60fps responsive UI architecture</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 font-mono text-[10px] text-neutral-500 flex items-center justify-between">
              <span>DISCIPLINE</span>
              <span className="text-cyber-blue-light font-bold">SYSTEMS & ARCHITECTURE</span>
            </div>
          </motion.div>

          {/* BOX 5: Verified Impact & Performance Metrics (Span 3) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="col-span-1 lg:col-span-3 rounded-3xl p-6 glass-panel bg-gradient-to-br from-[#120a2e]/90 via-[#070519]/95 to-[#040212] border border-white/10 hover:border-neon-purple/40 transition-all duration-300 shadow-xl flex flex-col justify-between text-left"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-neon-purple to-pink-500 flex items-center justify-center text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                <Flame size={20} />
              </div>

              <div>
                <span className="font-mono text-[10px] text-neon-purple-light uppercase tracking-wider font-bold">
                  Track Record
                </span>
                <h4 className="font-display font-black text-xl text-white mt-1">
                  Proven Impact
                </h4>
              </div>

              <div className="space-y-3 pt-1">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="font-display font-black text-2xl text-amber-300">2x</div>
                  <div className="font-mono text-[10px] text-neutral-300 uppercase">Hackathon Victories (1st & 3rd)</div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="font-display font-black text-2xl text-green-400">98%</div>
                  <div className="font-mono text-[10px] text-neutral-300 uppercase">Page Speed & Performance</div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="font-display font-black text-2xl text-neon-purple-light">100%</div>
                  <div className="font-mono text-[10px] text-neutral-300 uppercase">Client Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 font-mono text-[10px] text-neutral-500 flex items-center justify-between">
              <span>BENCHMARK</span>
              <span className="text-neon-purple-light font-bold">TOP TIER</span>
            </div>
          </motion.div>

        </div>

        {/* Institutional & Partner Endorsement Strip */}
        <div className="w-full pt-12 border-t border-white/10 flex flex-col gap-6 text-center">
          <p className="text-xs font-mono tracking-widest text-neutral-400 font-bold uppercase select-none">
            RECOGNIZED BY PROFESSIONAL INSTITUTIONS & COMPETITIONS
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center opacity-70">
            {clientLogos.map((client) => (
              <div 
                key={client.name} 
                className="group flex items-center justify-center p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-neon-purple/10 hover:border-neon-purple/30 transition-all duration-300 w-full cursor-pointer"
              >
                <span className="font-display font-black text-lg sm:text-xl text-neutral-300 group-hover:text-white group-hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.6)] tracking-wider transition-all">
                  {client.iconSvg.toUpperCase()}
                  <span className="text-neon-purple-light ml-1.5">✦</span>
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
