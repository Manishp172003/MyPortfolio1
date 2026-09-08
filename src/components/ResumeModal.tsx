import React, { useState, useEffect } from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  ExternalLink, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  MapPin, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Sparkles 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { createPortal } from 'react-dom';
import { resumeData, portfolioOwner } from '../data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
${resumeData.personal.name}
Phone: ${resumeData.personal.phone} | Email: ${resumeData.personal.email}
LinkedIn: ${resumeData.personal.linkedin} | GitHub: ${resumeData.personal.github}

PROFESSIONAL SUMMARY
${resumeData.summary}

TECHNICAL SKILLS
Languages: ${resumeData.technicalSkills.languages.join(', ')}
Web Tech: ${resumeData.technicalSkills.webTech.join(', ')}
Tools: ${resumeData.technicalSkills.tools.join(', ')}
Concepts: ${resumeData.technicalSkills.concepts.join(', ')}

PROJECTS
${resumeData.projects.map(p => `• ${p.title} (${p.type})\n  ${p.points.join('\n  ')}`).join('\n\n')}

PROFESSIONAL EXPERIENCE
${resumeData.experience.map(e => `• ${e.company} (${e.role}) - ${e.period}\n  ${e.points.join('\n  ')}`).join('\n\n')}

CERTIFICATIONS & COURSES
${resumeData.certifications.map(c => `• ${c.name} — ${c.provider} (${c.date})`).join('\n')}

HACKATHON ACHIEVEMENTS
${resumeData.hackathons.map(h => `• ${h.title}: ${h.detail}`).join('\n')}

EDUCATION
${resumeData.education.map(ed => `• ${ed.degree} — ${ed.institution} (${ed.period})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 pt-20 sm:pt-24 bg-black/90 backdrop-blur-2xl overflow-y-auto">
        {/* Backdrop dismiss */}
        <div className="fixed inset-0" onClick={onClose} />

        {/* Modal Container */}
        <motion.div
          initial={{ scale: 0.94, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 26, stiffness: 240 }}
          className="relative z-10 w-full max-w-4xl bg-[#09061c] border border-neon-purple/40 rounded-3xl shadow-[0_0_80px_rgba(139,92,246,0.35)] flex flex-col max-h-[88vh] my-auto overflow-hidden text-left"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header & Quick Action Bar */}
          <div className="px-5 sm:px-7 py-4 border-b border-white/10 bg-[#0d0926]/95 backdrop-blur-md flex items-center justify-between sticky top-0 z-20">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <div className="flex flex-col">
                <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-[#c084fc] uppercase">
                  VERIFIED CURRICULUM VITAE // MANISH PAWAR
                </span>
                <span className="text-[10px] font-mono text-neutral-400 hidden sm:block">
                  ATS Optimized • Java Full Stack & Electronics Engineering
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={handleCopyText}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-neutral-300 hover:text-white text-xs font-mono font-bold transition-all cursor-pointer"
                title="Copy Resume text to clipboard"
              >
                {copied ? <Check size={13} className="text-green-400" /> : <Copy size={13} />}
                <span>{copied ? 'Copied' : 'Copy Text'}</span>
              </button>

              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-neon-purple to-cyber-blue hover:from-neon-purple-light hover:to-cyber-blue-light text-white text-xs font-mono font-bold transition-all shadow-[0_0_15px_rgba(139,92,246,0.4)] cursor-pointer"
                title="Print or Save as PDF"
              >
                <Printer size={13} />
                <span>Print / PDF</span>
              </button>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-red-500/25 hover:border-red-500/50 border border-white/20 text-neutral-200 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95 group/close"
                aria-label="Close modal"
                title="Close modal (Esc)"
              >
                <X size={18} className="group-hover/close:rotate-90 transition-transform duration-200" />
              </button>
            </div>
          </div>

          {/* Scrollable Resume Content */}
          <div className="p-6 sm:p-10 overflow-y-auto flex-grow flex flex-col gap-8 text-neutral-200 font-sans text-sm print:bg-white print:text-black">
            
            {/* 1. Header & Contact Details */}
            <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h1 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                  {resumeData.personal.name}
                </h1>
                <p className="text-neon-purple-light font-mono text-xs sm:text-sm font-bold mt-1">
                  {resumeData.personal.title}
                </p>
              </div>

              <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs font-mono text-neutral-300">
                <a 
                  href={`tel:${resumeData.personal.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-1.5 hover:text-neon-purple-light transition-colors"
                >
                  <Phone size={13} className="text-neon-purple-light" />
                  <span>{resumeData.personal.phone}</span>
                </a>
                <a 
                  href={`mailto:${resumeData.personal.email}`}
                  className="flex items-center gap-1.5 hover:text-neon-purple-light transition-colors"
                >
                  <Mail size={13} className="text-cyber-blue-light" />
                  <span>{resumeData.personal.email}</span>
                </a>
                <div className="flex items-center gap-3 pt-1">
                  <a 
                    href={resumeData.personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 hover:text-white text-cyber-blue-light underline"
                  >
                    <Linkedin size={13} />
                    <span>LinkedIn</span>
                  </a>
                  <span>•</span>
                  <a 
                    href={resumeData.personal.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 hover:text-white text-neon-purple-light underline"
                  >
                    <Github size={13} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* 2. Professional Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold tracking-widest text-neon-purple-light uppercase flex items-center gap-2">
                <Sparkles size={14} />
                <span>PROFESSIONAL SUMMARY</span>
              </h2>
              <p className="text-neutral-300 leading-relaxed font-sans text-xs sm:text-sm">
                {resumeData.summary}
              </p>
            </div>

            {/* 3. Technical Skills */}
            <div className="space-y-3 bg-white/[0.02] p-5 rounded-2xl border border-white/10">
              <h2 className="text-xs font-mono font-bold tracking-widest text-cyber-blue-light uppercase flex items-center gap-2">
                <Code2 size={14} />
                <span>TECHNICAL SKILLS</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="font-bold text-white font-mono block mb-1">Languages:</span>
                  <p className="text-neutral-300">{resumeData.technicalSkills.languages.join(', ')}</p>
                </div>
                <div>
                  <span className="font-bold text-white font-mono block mb-1">Web Tech:</span>
                  <p className="text-neutral-300">{resumeData.technicalSkills.webTech.join(', ')}</p>
                </div>
                <div>
                  <span className="font-bold text-white font-mono block mb-1">Tools & Platforms:</span>
                  <p className="text-neutral-300">{resumeData.technicalSkills.tools.join(', ')}</p>
                </div>
                <div>
                  <span className="font-bold text-white font-mono block mb-1">Concepts:</span>
                  <p className="text-neutral-300">{resumeData.technicalSkills.concepts.join(', ')}</p>
                </div>
              </div>
            </div>

            {/* 4. Projects Showcase */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase flex items-center gap-2">
                <Briefcase size={14} />
                <span>FEATURED ENGINEERING PROJECTS</span>
              </h2>
              <div className="flex flex-col gap-4">
                {resumeData.projects.map((proj, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="font-display font-bold text-sm sm:text-base text-white">
                        {proj.title}
                      </h3>
                      <span className="text-[11px] font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-400/20 px-2 py-0.5 rounded-full w-fit">
                        {proj.type}
                      </span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-xs text-neutral-300 leading-relaxed">
                      {proj.points.map((point, pIdx) => (
                        <li key={pIdx} className="text-neutral-300 pl-1">
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Professional Experience */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase flex items-center gap-2">
                <Briefcase size={14} />
                <span>PROFESSIONAL EXPERIENCE</span>
              </h2>
              {resumeData.experience.map((exp, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-display font-bold text-sm text-white">
                      {exp.company} <span className="text-neutral-400 font-normal">({exp.role})</span>
                    </h3>
                    <span className="text-xs font-mono text-amber-300">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-neutral-300 leading-relaxed">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="pl-1">
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* 6. Certifications & Courses */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-bold tracking-widest text-neon-purple-light uppercase flex items-center gap-2">
                <Award size={14} />
                <span>CERTIFICATIONS & COURSES</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                {resumeData.certifications.map((cert, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-white/[0.02] border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-white block">{cert.name}</span>
                      <span className="text-neutral-400 text-[11px]">{cert.provider}</span>
                    </div>
                    <span className="text-[11px] font-mono text-neon-purple-light">{cert.date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 7. Hackathon Achievements & Honors */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase flex items-center gap-2">
                <Award size={14} />
                <span>HACKATHON HONORS</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {resumeData.hackathons.map((h, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-amber-500/5 border border-amber-400/20 space-y-1">
                    <span className="font-bold text-amber-300 block">{h.title}</span>
                    <p className="text-neutral-300 text-[11px] leading-relaxed">{h.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 8. Education */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-bold tracking-widest text-cyber-blue-light uppercase flex items-center gap-2">
                <GraduationCap size={14} />
                <span>EDUCATION</span>
              </h2>
              <div className="flex flex-col gap-2.5 text-xs">
                {resumeData.education.map((edu, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <span className="font-bold text-white block text-sm">{edu.degree}</span>
                      <span className="text-neutral-400 text-xs">{edu.institution}</span>
                    </div>
                    <span className="text-xs font-mono text-cyber-blue-light">{edu.period}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="p-4 border-t border-white/10 bg-black/60 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-mono text-neutral-400">
              Ready for immediate hire • Full-time / Internship roles
            </span>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-neon-purple to-cyber-blue hover:from-neon-purple-light hover:to-cyber-blue-light text-xs font-bold text-white transition-all shadow-md cursor-pointer flex items-center gap-2"
              >
                <Printer size={14} />
                <span>Print / Download PDF</span>
              </button>

              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold font-mono text-neutral-300 hover:text-white transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
}
