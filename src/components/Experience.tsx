import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  Milestone, 
  ArrowUpRight, 
  Sparkles, 
  Award, 
  ExternalLink, 
  Linkedin, 
  CheckCircle2,
  Terminal,
  Building2,
  Code2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { timelineItems } from '../data';
import { TimelineItem } from '../types';

export default function Experience() {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  const filteredItems = timelineItems.filter(item => item.type === activeTab);

  const getTimelineIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase': return <Briefcase size={16} className="text-neon-purple-light" />;
      case 'GraduationCap': return <GraduationCap size={16} className="text-cyber-blue-light" />;
      case 'Award': return <Award size={16} className="text-amber-400" />;
      default: return <Milestone size={16} className="text-neon-purple-light" />;
    }
  };

  const getItemBadge = (item: TimelineItem) => {
    if (item.id === 'exp-athenura') return { text: 'CURRENT ROLE', color: 'bg-green-500/15 text-green-400 border-green-500/30' };
    if (item.id === 'exp-mnt') return { text: 'INDUSTRIAL INTERN', color: 'bg-purple-500/15 text-purple-300 border-purple-500/30' };
    if (item.id === 'edu-btech') return { text: 'BACHELOR DEGREE', color: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30' };
    if (item.id === 'edu-hsc') return { text: '92% DISTINCTION', color: 'bg-amber-500/15 text-amber-300 border-amber-500/30' };
    if (item.id === 'edu-ssc') return { text: '89% DISTINCTION', color: 'bg-amber-500/15 text-amber-300 border-amber-500/30' };
    if (item.id === 'cert-java') return { text: 'FULL STACK ARCHITECTURE', color: 'bg-orange-500/15 text-orange-300 border-orange-500/30' };
    if (item.id === 'cert-react') return { text: 'REACT SPECIALIZATION', color: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30' };
    return null;
  };

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#070417]/90 border-b border-white/5 select-none overflow-hidden" id="experience">
      {/* Background ambient lighting */}
      <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-cyber-blue/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Backdrop ghost text */}
      <div className="absolute top-10 right-10 select-none pointer-events-none font-display font-black text-[14vw] leading-none text-white/[0.02] tracking-tighter uppercase z-0">
        CAREER
      </div>

      <div className="w-full max-w-[1650px] mx-auto flex flex-col gap-14 relative z-10 text-left">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neon-purple/40 bg-neon-purple/10 shadow-[0_0_20px_rgba(139,92,246,0.25)] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-neon-purple-light animate-pulse" />
              <span className="font-mono text-xs font-bold text-neon-purple-light tracking-widest uppercase">
                CHRONICLE // CAREER MILESTONES
              </span>
            </div>
            <h3 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              Experience & Academic Pathway
            </h3>
            <p className="text-sm sm:text-base text-neutral-400 max-w-2xl font-sans leading-relaxed">
              From hands-on industrial workflows at MNT Industries to engineering high-performance frontend interfaces at Athenura, grounded in telecommunications engineering rigor.
            </p>
          </div>

          {/* Dynamic Tab Switcher */}
          <div className="flex p-1.5 rounded-2xl bg-[#04020c] border border-white/10 backdrop-blur-xl shadow-inner self-start md:self-auto">
            <button
              onClick={() => setActiveTab('experience')}
              className={`relative flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                activeTab === 'experience' ? 'text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              {activeTab === 'experience' && (
                <motion.div
                  layoutId="activeTimelineTab"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-purple to-indigo-600 shadow-[0_0_20px_rgba(139,92,246,0.5)] z-0"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Briefcase size={14} />
                <span>Experience ({timelineItems.filter(i => i.type === 'experience').length})</span>
              </span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`relative flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                activeTab === 'education' ? 'text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              {activeTab === 'education' && (
                <motion.div
                  layoutId="activeTimelineTab"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-purple to-indigo-600 shadow-[0_0_20px_rgba(139,92,246,0.5)] z-0"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <GraduationCap size={14} />
                <span>Education ({timelineItems.filter(i => i.type === 'education').length})</span>
              </span>
            </button>
          </div>
        </div>

        {/* 2-Column Responsive Layout: Career Summary HUD (Left) + Glowing Circuit Timeline (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column (lg:col-span-4): Career Summary HUD Card */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-28">
            <div className="rounded-3xl bg-[#0a071d]/90 border border-neon-purple/30 p-6 sm:p-7 backdrop-blur-xl shadow-[0_0_40px_rgba(139,92,246,0.15)] flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <Terminal size={16} className="text-neon-purple-light" />
                  <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">CAREER TELEMETRY</span>
                </div>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                </span>
              </div>

              {/* Status block */}
              <div className="space-y-4 font-sans text-xs">
                <div>
                  <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest block mb-1">Current Focus</span>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <p className="font-bold text-white text-sm">Frontend Developer Intern</p>
                    <p className="text-neon-purple-light font-mono text-xs mt-0.5">Athenura • June 2026 – Present</p>
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest block mb-1">Degree Program</span>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <p className="font-bold text-white text-sm">B.Tech — Electronics & Telecom</p>
                    <p className="text-neutral-400 font-mono text-xs mt-0.5">YCCE Nagpur (2022 – 2026)</p>
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest block mb-1">Architecture Expertise</span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['React.js', 'Java', 'Spring Boot', 'Tailwind CSS', 'RESTful APIs', 'MySQL', 'IoT Systems'].map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded-md bg-neon-purple/10 border border-neon-purple/20 text-[10.5px] font-mono text-neutral-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct Link to Contact */}
              <a
                href="#contact"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-neon-purple to-indigo-600 hover:from-neon-purple-light hover:to-indigo-500 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(139,92,246,0.35)] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <span>Initiate Collaboration</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Right Column (lg:col-span-8): Glowing Circuit Timeline */}
          <div className="lg:col-span-8 relative pl-6 sm:pl-10">
            {/* Glowing vertical energy conduit line */}
            <div className="absolute left-2 sm:left-4 top-2 bottom-6 w-[2px] bg-gradient-to-b from-neon-purple via-cyber-blue to-indigo-900 shadow-[0_0_15px_rgba(139,92,246,0.6)]" />

            {/* List of Timeline items */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-8"
              >
                {filteredItems.map((item, idx) => {
                  const badge = getItemBadge(item);

                  return (
                    <div 
                      key={item.id}
                      className="relative group timeline-card-wrapper"
                    >
                      {/* Timeline Glowing Circuit Node */}
                      <div className="absolute -left-6 sm:-left-10 top-2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#080617] border-2 border-white/20 text-neutral-300 group-hover:text-white group-hover:border-neon-purple-light group-hover:shadow-[0_0_20px_rgba(139,92,246,0.8)] transition-all duration-300 flex items-center justify-center z-10">
                        {getTimelineIcon(item.icon)}
                      </div>

                      {/* Ping animation for the first current item */}
                      {idx === 0 && activeTab === 'experience' && (
                        <div className="absolute -left-6 sm:-left-10 top-2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-neon-purple/40 animate-ping pointer-events-none" />
                      )}

                      {/* Card Container */}
                      <div className="rounded-3xl bg-[#0a071f]/80 border border-white/10 group-hover:border-neon-purple/40 p-6 sm:p-8 backdrop-blur-xl shadow-lg group-hover:shadow-[0_0_40px_rgba(139,92,246,0.2)] transition-all duration-300 flex flex-col gap-4 relative">
                        {/* Metallic top line shimmer */}
                        <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent" />

                        {/* Top Meta Header: Role, Badges, Calendar */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div className="space-y-1.5">
                            <div className="flex flex-wrap items-center gap-2">
                              <h4 className="font-display font-black text-xl sm:text-2xl text-white group-hover:text-neon-purple-light transition-colors leading-tight">
                                {item.role}
                              </h4>
                              {badge && (
                                <span className={`px-2.5 py-0.5 rounded-full border text-[10px] font-mono font-bold tracking-wider uppercase ${badge.color}`}>
                                  {badge.text}
                                </span>
                              )}
                            </div>
                            
                            <p className="text-sm font-mono font-bold text-neutral-400 flex items-center gap-1.5">
                              <Building2 size={13} className="text-cyber-blue-light" />
                              <span>{item.company}</span>
                            </p>
                          </div>

                          {/* Duration Badge */}
                          <span className="inline-flex items-center gap-1.5 self-start sm:self-auto px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-neutral-300 shrink-0">
                            <Calendar size={12} className="text-neon-purple-light" />
                            <span>{item.duration}</span>
                          </span>
                        </div>

                        {/* Description Bullet Points */}
                        <ul className="flex flex-col gap-2.5 font-sans text-xs sm:text-sm text-neutral-300 leading-relaxed list-none mt-2">
                          {item.description.map((bullet, bulletIdx) => (
                            <li key={bulletIdx} className="flex items-start gap-2.5">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neon-purple-light shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        {/* External Links Bar */}
                        {(item.website || item.linkedin) && (
                          <div className="flex items-center gap-4 pt-3 border-t border-white/10 mt-1">
                            {item.website && (
                              <a 
                                href={item.website}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
                              >
                                <ExternalLink size={13} />
                                <span>Official Website</span>
                              </a>
                            )}
                            {item.linkedin && (
                              <a 
                                href={item.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-neon-purple-light transition-colors"
                              >
                                <Linkedin size={13} />
                                <span>Company LinkedIn</span>
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
