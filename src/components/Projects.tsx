import { useEffect, useState } from 'react';
import { ExternalLink, Github, Sparkles, X, ChevronRight, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <section className="relative py-20 sm:py-24 px-4 bg-[#05050c]" id="projects">
      {/* Background ambient lighting */}
      <div className="absolute top-[20%] left-[-10%] w-[350px]-[350px] rounded-full bg-cyber-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-neon-purple/5 blur-[140px] pointer-events-none" />

      {/* Decorative large backdrop text saying "WORK" behind section */}
      <div className="absolute top-10 right-10 select-none pointer-events-none font-display font-black text-[12vw] leading-none opacity-2 text-white/2 tracking-tighter uppercase">
        REFINE
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col gap-12 relative z-10 text-left">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[2px] bg-neon-purple-light" />
            <span className="font-mono text-xs font-bold text-neon-purple-light tracking-widest uppercase">Portfolio</span>
          </div>
          <h3 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Selected Work That Delivers Results
          </h3>
        </div>

        {/* Projects Grid matching the layout in image 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8" id="projects-showcase-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col rounded-2xl bg-[#0c091a]/90 border border-white/5 hover:border-neon-purple/35 transition-all duration-500 overflow-hidden shadow-neon-glow hover:shadow-neon-glowing-strong card-item-element cursor-pointer"
              onClick={() => setSelectedProject(project)}
              id={`project-card-${project.id}`}
            >
              
              {/* Card Image Wrapper with overlay tag and zoom */}
              <div className="w-full aspect-[16/10] overflow-hidden relative bg-[#f6f4f1] p-3">
                <div className="absolute top-0 left-0 right-0 h-7 bg-white/95 border-b border-black/10 flex items-center gap-1.5 px-4 z-10">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-contain pt-7 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual purple filter wash */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c091a]/45 via-transparent to-transparent pointer-events-none" />

                {/* Left Top Float Category badge */}
                <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full border border-white/10 bg-black/75 backdrop-blur-md text-[10px] font-mono tracking-wider text-neon-purple-light/95 uppercase">
                  {project.category}
                </div>

                {/* Right Top Float Metric badge */}
                {project.stats && (
                  <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full border border-neon-purple/30 bg-black/75 backdrop-blur-md text-[10px] font-mono tracking-wider font-bold text-white uppercase flex items-center gap-1">
                    <Sparkles size={10} className="text-neon-purple-light animate-pulse" />
                    <span>{project.stats}</span>
                  </div>
                )}
              </div>

              {/* Card Meta Content */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow gap-5 bg-gradient-to-b from-[#0c091a]/0 to-black/35">
                <div className="space-y-2.5">
                  <h4 className="font-display font-extrabold text-xl text-white group-hover:text-neon-purple-light transition-all leading-tight">
                    {project.title}
                  </h4>
                  <p className="text-sm text-neutral-400 font-sans leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tags Cluster */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[10px] font-mono font-medium text-neutral-300 bg-white/5 border border-white/5 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer Controls */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-xs font-mono font-bold text-neon-purple-light flex items-center gap-1 hover:underline">
                    <span>SEE SPEC BLUEPRINT</span>
                    <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </span>

                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-full bg-white/3 border border-white/5 text-neutral-400 hover:text-white hover:bg-neon-purple/10 hover:border-neon-purple-light/40 transition-all duration-300"
                      title="GitHub Repository"
                    >
                      <Github size={14} />
                    </a>
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-full bg-gradient-to-r from-neon-purple to-indigo-600 text-white hover:shadow-neon-glow transition-all duration-300"
                      title="Launch Demo Site"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* FULL PORTFOLIO DETAIL POPUP BLUEPRINT MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-lg"
            onClick={() => setSelectedProject(null)}
          >
            {/* Modal Body Container */}
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="w-full max-w-2xl glass-panel bg-[#0d091e] border border-neon-purple/35 rounded-2xl overflow-hidden shadow-neon-glowing-strong flex flex-col relative max-h-[82vh]"
              onClick={(event) => event.stopPropagation()}
            >
              
              {/* Title Header with Close */}
              <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between relative z-10 bg-black/35 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-neon-purple-light animate-ping" />
                  <span className="font-mono text-[9px] font-bold tracking-widest text-[#c084fc] uppercase">DEVELOPMENT BLUEPRINT</span>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 border border-white/10 text-white hover:bg-neon-purple/25 hover:border-neon-purple-light/50 focus:outline-none focus:ring-2 focus:ring-neon-purple-light"
                  aria-label="Close project details"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable specs */}
              <div className="p-5 sm:p-6 overflow-y-auto flex-grow flex flex-col gap-5 text-left">
                
                {/* Hero preview in modal */}
                <div className="w-full aspect-[16/9] rounded-xl overflow-hidden relative border border-white/5 bg-[#f6f4f1] p-3">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-neon-purple-light uppercase">{selectedProject.category}</span>
                  <h4 className="font-display font-black text-2xl text-white">{selectedProject.title}</h4>
                </div>

                <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                  {selectedProject.longDescription || selectedProject.description}
                </p>

                {/* Specifications Checklist */}
                <div className="space-y-3 bg-white/2 p-4 rounded-xl border border-white/5">
                  <span className="block font-display font-bold text-xs text-white uppercase tracking-wider mb-2">Key Accomplishments:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans text-xs text-neutral-400">
                    <span className="flex items-center gap-2"><CheckCircle size={14} className="text-neon-purple-light shrink-0" /> Responsive Layout Integration</span>
                    <span className="flex items-center gap-2"><CheckCircle size={14} className="text-neon-purple-light shrink-0" /> Fast Route View Transitions</span>
                    <span className="flex items-center gap-2"><CheckCircle size={14} className="text-neon-purple-light shrink-0" /> High conversion micro-forms</span>
                    <span className="flex items-center gap-2"><CheckCircle size={14} className="text-neon-purple-light shrink-0" /> Framer Motion animations</span>
                  </div>
                </div>

                {/* Stacks */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono font-bold text-white bg-[#8b5cf6]/10 border border-neon-purple/20 px-3.5 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

              {/* Bottom Triggers bar */}
              <div className="p-4 border-t border-white/5 bg-black/35 flex items-center justify-between gap-3">
                <a 
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-white/2 hover:bg-white/5 text-xs font-bold text-neutral-300 py-3 rounded-xl border border-white/5 hover:border-white/10 transition-all text-center"
                >
                  <Github size={14} />
                  <span>GitHub Repository</span>
                </a>
                <a 
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-neon-purple to-indigo-600 hover:from-neon-purple-light hover:to-indigo-500 text-xs font-bold text-white py-3 rounded-xl transition-all shadow-neon-glow hover:shadow-neon-glowing-strong text-center"
                >
                  <ExternalLink size={14} />
                  <span>Launch Live Demo</span>
                </a>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
