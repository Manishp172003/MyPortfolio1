import React, { useState, useEffect } from 'react';
import { 
  Trophy, 
  Sparkles, 
  Users, 
  Award, 
  ExternalLink, 
  ZoomIn, 
  X, 
  CheckCircle2, 
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { createPortal } from 'react-dom';
import { achievements } from '../data';
import { Achievement } from '../types';

export default function Achievements() {
  const [selectedCert, setSelectedCert] = useState<Achievement | null>(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#04020c] select-none overflow-hidden" id="achievements">
      {/* Ambient background gold/cyber glow */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-neon-purple/10 blur-[150px] pointer-events-none" />

      {/* Large Backdrop Ghost Watermark */}
      <div className="absolute top-10 right-10 select-none pointer-events-none font-display font-black text-[14vw] leading-none text-white/[0.02] tracking-tighter uppercase z-0">
        AWARDS
      </div>

      <div className="w-full max-w-[1650px] mx-auto flex flex-col gap-14 relative z-10 text-left">
        
        {/* Section Header with Stats Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 shadow-[0_0_20px_rgba(245,158,11,0.25)] backdrop-blur-md">
              <Trophy size={14} className="text-amber-400" />
              <span className="font-mono text-xs font-bold text-amber-400 tracking-widest uppercase">
                RECOGNITION // COMPETITIVE EXCELLENCE
              </span>
            </div>
            <h3 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              Hackathon Victories & Accolades
            </h3>
            <p className="text-sm sm:text-base text-neutral-400 max-w-2xl font-sans leading-relaxed">
              Rapid innovation under extreme 24-48 hour sprint deadlines. Engineered full-stack architectures and AI integrations that captured top podium victories.
            </p>
          </div>

          {/* Quick Metrics Chips */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-center gap-2.5">
              <span className="text-xl">🥇</span>
              <div>
                <p className="font-display font-black text-sm text-white leading-none">1st Place</p>
                <p className="font-mono text-[10px] text-amber-300">Grand Champion</p>
              </div>
            </div>
            <div className="px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-400/30 flex items-center gap-2.5">
              <span className="text-xl">🥉</span>
              <div>
                <p className="font-display font-black text-sm text-white leading-none">3rd Place</p>
                <p className="font-mono text-[10px] text-purple-300">Podium Winner</p>
              </div>
            </div>
            <div className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center gap-2.5">
              <ShieldCheck size={18} className="text-emerald-400" />
              <div>
                <p className="font-display font-black text-sm text-white leading-none">100%</p>
                <p className="font-mono text-[10px] text-emerald-300">Verified Credentials</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Balanced Grid: Equal prominence, zero vacant columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {achievements.map((achievement, index) => {
            const isFirst = index === 0;
            const accentColor = isFirst 
              ? 'border-amber-400/40 hover:border-amber-400/70 shadow-[0_0_40px_rgba(245,158,11,0.15)] hover:shadow-[0_0_60px_rgba(245,158,11,0.3)]' 
              : 'border-neon-purple/40 hover:border-neon-purple/70 shadow-[0_0_40px_rgba(139,92,246,0.15)] hover:shadow-[0_0_60px_rgba(139,92,246,0.3)]';
            
            const badgeBg = isFirst
              ? 'from-amber-500 to-yellow-400 text-black shadow-[0_0_20px_rgba(245,158,11,0.5)]'
              : 'from-purple-500 to-indigo-400 text-white shadow-[0_0_20px_rgba(139,92,246,0.5)]';

            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`group relative rounded-3xl bg-[#080614]/90 border ${accentColor} p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 backdrop-blur-xl`}
              >
                {/* Metallic Gleam Top Bar */}
                <div className={`absolute top-0 left-10 right-10 h-0.5 bg-gradient-to-r ${isFirst ? 'from-transparent via-amber-400 to-transparent' : 'from-transparent via-neon-purple-light to-transparent'}`} />

                {/* Card Top: Position Ribbon & Year */}
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-black uppercase tracking-wider bg-gradient-to-r ${badgeBg}`}>
                      <Trophy size={13} />
                      <span>{achievement.position}</span>
                    </span>

                    <div className="flex items-center gap-2">
                      {achievement.prize && (
                        <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-mono font-bold">
                          {achievement.prize}
                        </span>
                      )}
                      <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-400 text-xs font-mono">
                        {achievement.year}
                      </span>
                    </div>
                  </div>

                  {/* Title & Hackathon Name */}
                  <h4 className="font-display font-black text-2xl sm:text-3xl text-white group-hover:text-amber-300 transition-colors leading-tight mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-sm font-mono text-neutral-400 mb-6 flex items-center gap-1.5">
                    <Award size={14} className={isFirst ? 'text-amber-400' : 'text-neon-purple-light'} />
                    <span>{achievement.hackathon}</span>
                  </p>

                  {/* Certificate Preview Frame with Zoom Action */}
                  <div 
                    onClick={() => setSelectedCert(achievement)}
                    className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-[#0d091e] border border-white/10 cursor-pointer group/img mb-6 shadow-inner"
                  >
                    <img 
                      src={achievement.image} 
                      alt={achievement.title}
                      className="w-full h-full object-contain p-3 transition-transform duration-500 group-hover/img:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    {/* Hover Overlay with Zoom Icon */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white backdrop-blur-xs">
                      <div className="px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase shadow-xl">
                        <ZoomIn size={14} className={isFirst ? 'text-amber-400' : 'text-neon-purple-light'} />
                        <span>Inspect Full Certificate</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Details Box */}
                  <div className="bg-[#05030f] border border-white/5 rounded-2xl p-4 sm:p-5 mb-6 space-y-2">
                    <span className="font-mono text-[10px] font-bold text-neutral-400 tracking-wider uppercase block">
                      Winning Submission
                    </span>
                    <h5 className="font-display font-extrabold text-base text-white">
                      {achievement.project}
                    </h5>
                  </div>

                  {/* Team Members Roster */}
                  <div className="space-y-2 mb-6">
                    <span className="font-mono text-[10px] font-bold text-neutral-400 tracking-wider uppercase flex items-center gap-1.5">
                      <Users size={12} className={isFirst ? 'text-amber-400' : 'text-neon-purple-light'} />
                      Team Code Crushers Roster
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {achievement.team.map((member, mIdx) => (
                        <span 
                          key={mIdx}
                          className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-neutral-300 text-xs font-mono flex items-center gap-1.5"
                        >
                          <CheckCircle2 size={11} className={isFirst ? 'text-amber-400' : 'text-neon-purple-light'} />
                          {member}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                  <button
                    onClick={() => setSelectedCert(achievement)}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    <span>View Certificate</span>
                    <ArrowUpRight size={13} />
                  </button>

                  {isFirst ? (
                    <a
                      href="#projects"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
                    >
                      <span>Explore SignalMind</span>
                      <ExternalLink size={12} />
                    </a>
                  ) : (
                    <a
                      href="#experience"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
                    >
                      <span>Athenura Internship</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Full-Screen High-Resolution Certificate Lightbox */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedCert && (
            <div 
              className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 pt-24 sm:pt-28 bg-black/90 backdrop-blur-2xl overflow-y-auto"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="relative w-full max-w-4xl bg-[#090717] border border-amber-400/40 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(245,158,11,0.35)] flex flex-col max-h-[85vh] my-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Top Header */}
                <div className="p-5 sm:px-8 border-b border-white/10 flex items-center justify-between bg-[#0e0a24]/95 backdrop-blur-md sticky top-0 z-20">
                  <div className="flex items-center gap-3">
                    <Trophy size={20} className="text-amber-400" />
                    <div>
                      <h4 className="font-display font-black text-lg text-white leading-none">
                        {selectedCert.title}
                      </h4>
                      <span className="font-mono text-xs text-amber-300">
                        Official Certificate of Achievement ({selectedCert.position})
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-500/25 hover:border-red-500/50 border border-white/20 text-neutral-200 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95 group/close"
                    aria-label="Close modal"
                    title="Close modal (Esc)"
                  >
                    <X size={20} className="group-hover/close:rotate-90 transition-transform duration-200" />
                  </button>
                </div>

                {/* Modal Certificate Display */}
                <div className="p-4 sm:p-8 overflow-y-auto flex items-center justify-center bg-[#05030e]">
                  <div className="w-full max-h-[60vh] flex items-center justify-center">
                    <img
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      className="max-h-[60vh] w-auto max-w-full object-contain rounded-xl border border-white/10 shadow-2xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Modal Footer info */}
                <div className="p-4 sm:px-8 border-t border-white/10 bg-[#0e0a24] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-neutral-400">
                  <div className="flex items-center gap-2">
                    <Sparkles size={13} className="text-amber-400" />
                    <span>Project: <strong className="text-white font-sans">{selectedCert.project}</strong></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={selectedCert.image}
                      target="_blank"
                      rel="noreferrer"
                      className="text-amber-400 hover:text-amber-300 flex items-center gap-1.5"
                    >
                      <span>Open Raw Image</span>
                      <ExternalLink size={12} />
                    </a>
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="px-5 py-2 rounded-xl bg-amber-400 text-black font-bold hover:bg-amber-300 transition-colors cursor-pointer shadow-md"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}