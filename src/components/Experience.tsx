import { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, Milestone, ArrowUpRight, Sparkles, Award } from 'lucide-react';
import { timelineItems } from '../data';

export default function Experience() {
  const [activeTab, setActiveTab ] = useState<'experience' | 'education'>('experience');

  const filteredItems = timelineItems.filter(item => item.type === activeTab);

  const getTimelineIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase': return <Briefcase size={16} />;
      case 'GraduationCap': return <GraduationCap size={16} />;
      case 'Award': return <Award size={16} className="text-amber-400" />;
      default: return <Milestone size={16} />;
    }
  };

  return (
    <section className="relative py-24 px-4 bg-[#0a071a]/95 border-b border-white/5" id="experience">
      {/* Background soft glowing vector assets */}
      <div className="absolute top-[40%] right-[-10%] w-[350px] h-[350px] bg-neon-purple/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-cyber-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto flex flex-col gap-14 relative z-10 text-left">
        
        {/* Section Title & Segment Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/5" id="timeline-controls">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-neon-purple-light" />
              <span className="font-mono text-xs font-bold text-neon-purple-light tracking-widest uppercase">Chronicle</span>
            </div>
            <h3 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              My Professional Path
            </h3>
          </div>

          {/* Toggle controls between Experience & Education */}
          <div className="flex bg-[#040409]/95 p-1 rounded-full border border-white/5 shadow-inner">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all whitespace-nowrap ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-neon-purple to-indigo-600 text-white shadow-neon-glow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Briefcase size={13} />
              <span>Experience</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all whitespace-nowrap ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-neon-purple to-indigo-600 text-white shadow-neon-glow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <GraduationCap size={13} />
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* Vertical Timeline Track */}
        <div className="relative pl-6 sm:pl-10 ml-2 sm:ml-4 border-l-2 border-white/10 flex flex-col gap-10" id="experience-timeline">
          {/* Active moving glowing line inside tract */}
          <div className="absolute left-[-2px] top-4 bottom-12 w-[2px] bg-gradient-to-b from-neon-purple-light via-indigo-500 to-transparent shadow-neon-glow" />

          {filteredItems.map((item, idx) => (
            <div 
              key={item.id}
              className="relative group timeline-card-wrapper"
              id={`timeline-node-${item.id}`}
            >
              {/* Timeline dot node containing icon */}
              <div 
                className="absolute left-[-32px] sm:left-[-46px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-deep-dark border-2 border-white/10 text-neutral-400 group-hover:text-white group-hover:border-neon-purple group-hover:shadow-neon-glowing-strong transition-all duration-300 flex items-center justify-center z-10"
              >
                {getTimelineIcon(item.icon)}
              </div>

              {/* Glowing Halo pulse beside active node */}
              <div className="absolute left-[-32px] sm:left-[-46px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-neon-purple/30 animate-ping group-hover:block hidden pointer-events-none" />

              {/* Card Container */}
              <div 
                className="glass-panel border border-white/5 hover:border-neon-purple/25 rounded-2xl p-6 sm:p-8 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300 shadow-md cursor-pointer relative"
              >
                {/* Visual top angle highlight row */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent" />

                {/* Card Title Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <h4 className="font-display font-black text-lg sm:text-xl text-white group-hover:text-neon-purple-light transition-colors leading-tight">
                      {item.id === "exp-1" && (
                        <Sparkles size={14} className="inline mr-2 text-neon-purple-light animate-bounce" />
                      )}
                      {item.role}
                    </h4>
                    
                    <span className="block text-xs font-mono font-bold text-neutral-400">
                      {item.company}
                    </span>
                  </div>

                  {/* Calendar Badge */}
                  <span className="flex items-center gap-1.5 self-start sm:self-auto px-4 py-1.5 rounded-full border border-white/10 bg-white/2 text-[10px] font-mono tracking-widest text-neutral-400">
                    <Calendar size={11} className="text-neon-purple" />
                    <span>{item.duration}</span>
                  </span>
                </div>

                {/* Key bullets */}
                <ul className="flex flex-col gap-3 font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed text-left list-none mt-2">
                  {item.description.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex gap-2.5 items-start">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neon-purple-light shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover trigger metrics indicator */}
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity justify-end text-[10.5px] font-mono text-neon-purple-light font-bold mt-2">
                  <span>METRICS LOGGED</span>
                  <ArrowUpRight size={13} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
