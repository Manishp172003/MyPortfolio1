import { useState } from 'react';
import { 
  Code, 
  Terminal, 
  Database, 
  Wind, 
  Atom, 
  Cpu, 
  Braces, 
  GitBranch, 
  Bookmark, 
  Command, 
  Activity 
} from 'lucide-react';
import { motion } from 'motion/react';
import { skills } from '../data';

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'frontend' | 'backend' | 'tools'>('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'backend', label: 'Backend & DB' },
    { id: 'tools', label: 'Frameworks & Tools' },
  ];

  const filteredSkills = activeFilter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter);

  // Map icon names to lucide icons securely
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'CodeHtml': return <Braces className="w-6 h-6" />;
      case 'CodeCss': return <Code className="w-6 h-6" />;
      case 'CodeJs': return <Cpu className="w-6 h-6" />;
      case 'CodeReact': return <Atom className="w-6 h-6" />;
      case 'CodeTailwind': return <Wind className="w-6 h-6" />;
      case 'Database': return <Database className="w-6 h-6" />;
      case 'CodePython': return <Terminal className="w-6 h-6" />;
      case 'CodeGit': return <GitBranch className="w-6 h-6" />;
      default: return <Command className="w-6 h-6" />;
    }
  };

  return (
    <section className="relative py-24 px-4 bg-[#0a071d]/60 border-y border-white/5 flex flex-col justify-center items-center overflow-hidden" id="skills">
      {/* Absolute floating cybernetic grid backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-purple/5 via-transparent to-transparent pointer-events-none" />

      {/* Decorative neon blur dots */}
      <div className="absolute top-[10%] left-[20%] w-[200px] h-[200px] bg-neon-purple/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[20%] w-[250px] h-[250px] bg-cyber-blue/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto flex flex-col gap-14 relative z-10 text-left">
        
        {/* Title Container */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-neon-purple-light" />
              <span className="font-mono text-xs font-bold text-neon-purple-light tracking-widest uppercase">Expertise</span>
            </div>
            <h3 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              My Tech Ecosystem
            </h3>
          </div>

          {/* Filtering Tabs pills */}
          <div className="flex flex-wrap gap-2 bg-[#04040a]/80 p-1.5 rounded-full border border-white/5 self-start md:self-auto shadow-inner">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id as any)}
                className={`px-4 py-2 rounded-full text-[10px] md:text-xs font-bold tracking-wider uppercase transition-all whitespace-nowrap ${
                  activeFilter === cat.id 
                    ? 'bg-neon-purple text-white shadow-neon-glow'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Interactive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className="group relative rounded-2xl p-6 glass-panel border border-white/5 hover:border-neon-purple/40 hover:-translate-y-1.5 transition-all duration-300 shadow-lg cursor-pointer flex flex-col gap-5 overflow-hidden"
              id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            >
              {/* Dynamic light gradient slide-over effect on hover */}
              <div className="absolute -inset-y-1/2 -inset-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:animate-marquee pointer-events-none" />

              {/* Skill Custom Glowing Halo inside background */}
              <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-neon-purple/5 blur-xl group-hover:bg-neon-purple/15 transition-all duration-300" />
              
              {/* Card Header Header (Icon & Tag) */}
              <div className="flex items-center justify-between">
                <div 
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-tr ${skill.color} shadow-neon-glow group-hover:scale-110 transition-transform`}
                >
                  {getIcon(skill.icon)}
                </div>
                
                <span className="font-mono text-[9px] font-bold tracking-widest text-neutral-400 uppercase bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                  {skill.category}
                </span>
              </div>

              {/* Skill Specific Meta & Text */}
              <div className="space-y-1 mt-1">
                <h4 className="font-display font-extrabold text-lg text-white group-hover:text-neon-purple-light transition-colors leading-tight">
                  {skill.name}
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-500">
                  <Activity size={10} className="text-neon-purple-light" />
                  <span>PRECISE CONTROL: {skill.level}% LEVEL</span>
                </div>
              </div>

              {/* Progress Line */}
              <div className="w-full space-y-1.5">
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden relative">
                  <div 
                    className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${skill.color} group-hover:shadow-neon-glowing-strong`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="flex justify-between items-center text-[10px] font-mono text-neutral-500">
                  <span>FOUNDATION</span>
                  <span>ADVANCED</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Bottom Branding Tag */}
        <div className="self-center flex items-center gap-2 text-[10px] font-mono text-neutral-500 tracking-wider">
          <Bookmark size={11} className="text-neon-purple-light" />
          <span>STABLE INFRASTRUCTURE ✦ OPTIMIZED ARCHITECTURE</span>
        </div>

      </div>
    </section>
  );
}
