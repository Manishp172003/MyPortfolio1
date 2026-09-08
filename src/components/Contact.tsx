import React, { useState, useEffect } from 'react';
import { 
  Send, 
  Mail, 
  Clock, 
  MapPin, 
  CheckCircle, 
  AlertCircle, 
  ArrowRight, 
  Sparkles, 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  Instagram, 
  Radio, 
  Terminal, 
  ShieldCheck,
  Zap,
  Phone
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioOwner } from '../data';

const projectTypes = [
  'Full-Stack Web Application',
  'Interactive Frontend UI/UX',
  'Spring Boot & REST APIs',
  'Hackathon & Innovation Sprint',
  'Architecture Consultation'
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Full-Stack Web Application',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState('');

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioOwner.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const formData = new FormData();
      formData.append('access_key', 'd894819d-7dbd-4bc5-a6e5-4dff2fc40e8b');
      formData.append('name', formState.name);
      formData.append('email', formState.email);
      formData.append('subject', `[Portfolio Transmission] ${formState.subject} from ${formState.name}`);
      formData.append('message', formState.message);
      formData.append('from_name', 'Manish Pawar Cyber-Portfolio');

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setFormState({
          name: '',
          email: '',
          subject: 'Full-Stack Web Application',
          message: '',
        });
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Transmission failed. Please try sending via direct email.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network disruption encountered. Please connect via direct email or LinkedIn.');
      console.error('Form submission error:', error);
    }
  };

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#070417] via-[#04020c] to-black select-none overflow-hidden" id="contact">
      {/* Background ambient lighting */}
      <div className="absolute top-[25%] left-[-10%] w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[25%] right-[-10%] w-[500px] h-[500px] bg-cyber-blue/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Backdrop ghost text */}
      <div className="absolute top-10 right-10 select-none pointer-events-none font-display font-black text-[14vw] leading-none text-white/[0.02] tracking-tighter uppercase z-0">
        CONNECT
      </div>

      <div className="w-full max-w-[1650px] mx-auto flex flex-col gap-14 relative z-10">
        
        {/* Headline Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neon-purple/40 bg-neon-purple/10 shadow-[0_0_20px_rgba(139,92,246,0.25)] backdrop-blur-md">
              <Radio size={14} className="text-neon-purple-light animate-pulse" />
              <span className="font-mono text-xs font-bold text-neon-purple-light tracking-widest uppercase">
                TRANSMISSION CHANNEL // DIRECT INQUIRIES
              </span>
            </div>
            <h3 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              Initiate Project Proposals
            </h3>
            <p className="text-sm sm:text-base text-neutral-400 max-w-2xl font-sans leading-relaxed">
              Have an opening, an innovative idea, or a high-stakes engineering project? Connect directly for rapid prototyping and production delivery.
            </p>
          </div>

          {/* Real-Time Telemetry Badge */}
          <div className="flex flex-wrap items-center gap-3 self-start lg:self-auto font-mono text-xs">
            <div className="px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-2.5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-neutral-300">OPEN TO WORK</span>
            </div>

            <div className="px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-2 text-neutral-300 backdrop-blur-md">
              <Clock size={13} className="text-neon-purple-light" />
              <span>NAGPUR, IN • {time || 'IST (UTC+5:30)'}</span>
            </div>
          </div>
        </div>

        {/* Core 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left">
          
          {/* Left Column (5 cols): Direct Dispatch Cards & Social Grid */}
          <div className="col-span-1 lg:col-span-5 flex flex-col gap-6">
            
            {/* Primary Direct Contact Box */}
            <div className="rounded-3xl bg-[#09061c]/90 border border-neon-purple/30 p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(139,92,246,0.15)] flex flex-col gap-6">
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-neon-purple-light uppercase tracking-wider block">
                  FASTEST RESPONSE CHANNEL
                </span>
                <h4 className="font-display font-black text-2xl sm:text-3xl text-white leading-tight">
                  Let’s engineer something exceptional.
                </h4>
                <p className="text-neutral-400 text-sm font-sans leading-relaxed">
                  Direct transmissions are routed directly to my personal inbox with an average turnaround under 12 hours.
                </p>
              </div>

              {/* Copy Email Interactive Pill Card */}
              <div className="p-4 rounded-2xl bg-[#050312] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-inner">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-neon-purple/10 border border-neon-purple/30 flex items-center justify-center text-neon-purple-light shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-wider">OFFICIAL EMAIL</span>
                    <span className="block font-mono text-xs sm:text-sm text-white font-bold truncate">
                      {portfolioOwner.email}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleCopyEmail}
                    className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white flex items-center gap-1.5 transition-all duration-200 cursor-pointer active:scale-95"
                    title="Copy Email to Clipboard"
                  >
                    {copied ? <Check size={13} className="text-green-400" /> : <Copy size={13} className="text-neutral-400" />}
                    <span className={copied ? 'text-green-400 font-bold' : 'text-neutral-300'}>
                      {copied ? 'Copied!' : 'Copy'}
                    </span>
                  </button>

                  <a
                    href={`mailto:${portfolioOwner.email}`}
                    className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-neon-purple to-indigo-600 hover:from-neon-purple-light hover:to-indigo-500 text-xs font-mono text-white font-bold flex items-center gap-1.5 transition-all duration-200 shadow-md cursor-pointer"
                  >
                    <span>Write</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>

              {/* Direct Voice & WhatsApp Channel Card */}
              {portfolioOwner.phone && (
                <div className="rounded-3xl bg-[#080519]/80 border border-white/10 p-5 backdrop-blur-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                      <Phone size={18} />
                    </div>
                    <div className="overflow-hidden">
                      <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-wider">DIRECT VOICE & WHATSAPP</span>
                      <span className="block font-mono text-xs sm:text-sm text-white font-bold truncate">
                        {portfolioOwner.phone}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={`https://wa.me/${portfolioOwner.phone.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-xs font-mono text-emerald-300 font-bold flex items-center gap-1.5 transition-all duration-200 cursor-pointer"
                    >
                      <span>WhatsApp</span>
                    </a>

                    <a
                      href={`tel:${portfolioOwner.phone.replace(/[^0-9+]/g, '')}`}
                      className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white font-bold flex items-center gap-1.5 transition-all duration-200 cursor-pointer"
                    >
                      <span>Call</span>
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              )}

              {/* Quick Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
                  <span className="text-[10px] text-neutral-400 uppercase block mb-1">Availability</span>
                  <span className="text-white font-bold flex items-center gap-1.5">
                    <Zap size={12} className="text-amber-400" />
                    Immediate
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
                  <span className="text-[10px] text-neutral-400 uppercase block mb-1">Location</span>
                  <span className="text-white font-bold flex items-center gap-1.5">
                    <MapPin size={12} className="text-cyber-blue-light" />
                    Nagpur / Remote
                  </span>
                </div>
              </div>
            </div>

            {/* Social Direct Access Cards */}
            <div className="rounded-3xl bg-[#080519]/80 border border-white/10 p-6 backdrop-blur-xl flex flex-col gap-4">
              <span className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-wider">
                COMMUNICATION HUBS
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href={portfolioOwner.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all flex flex-col gap-2 group cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <Github size={18} className="text-white group-hover:scale-110 transition-transform" />
                    <ArrowRight size={12} className="text-neutral-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="block font-bold text-white text-xs">GitHub</span>
                    <span className="text-[10px] font-mono text-neutral-400">@Manishp19311</span>
                  </div>
                </a>

                <a
                  href={portfolioOwner.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-2xl bg-white/5 hover:bg-neon-purple/15 border border-white/10 hover:border-neon-purple/40 transition-all flex flex-col gap-2 group cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <Linkedin size={18} className="text-neon-purple-light group-hover:scale-110 transition-transform" />
                    <ArrowRight size={12} className="text-neutral-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="block font-bold text-white text-xs">LinkedIn</span>
                    <span className="text-[10px] font-mono text-neutral-400">Manish Pawar</span>
                  </div>
                </a>

                <a
                  href={portfolioOwner.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-2xl bg-white/5 hover:bg-pink-500/15 border border-white/10 hover:border-pink-500/40 transition-all flex flex-col gap-2 group cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <Instagram size={18} className="text-pink-400 group-hover:scale-110 transition-transform" />
                    <ArrowRight size={12} className="text-neutral-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="block font-bold text-white text-xs">Instagram</span>
                    <span className="text-[10px] font-mono text-neutral-400">@manish_p193</span>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column (7 cols): Cyber Transmission Form */}
          <div className="col-span-1 lg:col-span-7">
            <div className="rounded-3xl bg-[#09071e]/90 border border-white/10 p-6 sm:p-9 relative overflow-hidden backdrop-blur-2xl shadow-[0_0_50px_rgba(139,92,246,0.15)]">
              {/* Metallic top line shimmer */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-purple via-indigo-500 to-cyber-blue" />

              {status === 'success' ? (
                /* Success Transmission Receipt Panel */
                <div className="py-14 flex flex-col items-center justify-center text-center gap-6" id="form-success-alert">
                  <div className="w-18 h-18 rounded-3xl bg-emerald-500/15 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                    <CheckCircle size={38} />
                  </div>
                  <div className="space-y-2">
                    <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-widest">
                      TRANSMISSION CONFIRMED
                    </span>
                    <h5 className="font-display font-black text-2xl sm:text-3xl text-white">
                      Message Dispatched Safely
                    </h5>
                    <p className="text-sm text-neutral-300 font-sans max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out! Your proposal has been securely logged. I will review your requirements and respond promptly.
                    </p>
                  </div>

                  <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 font-mono text-xs text-neutral-400">
                    Transmission ID: <span className="text-white font-bold">TX-{Date.now().toString().slice(-6)}</span>
                  </div>

                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-2 text-xs font-mono font-bold text-neon-purple-light hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>SUBMIT ANOTHER PROPOSAL</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              ) : status === 'error' ? (
                /* Error Feedback Panel */
                <div className="py-14 flex flex-col items-center justify-center text-center gap-6" id="form-error-alert">
                  <div className="w-18 h-18 rounded-3xl bg-red-500/15 border border-red-400/40 flex items-center justify-center text-red-400 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
                    <AlertCircle size={38} />
                  </div>
                  <div className="space-y-2">
                    <span className="font-mono text-xs text-red-400 font-bold uppercase tracking-widest">
                      TRANSMISSION INTERRUPTED
                    </span>
                    <h5 className="font-display font-black text-2xl sm:text-3xl text-white">
                      Transmission Failed
                    </h5>
                    <p className="text-sm text-neutral-300 font-sans max-w-md mx-auto leading-relaxed">
                      {errorMessage || 'An error occurred while sending your message. Please connect directly via email.'}
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-2 text-xs font-mono font-bold text-red-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>RETRY TRANSMISSION</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              ) : (
                /* Cyber Transmission Input Form */
                <form onSubmit={handleSubmit} className="flex flex-col gap-6" id="contact-web-form">
                  
                  {/* Scope Selector Chips */}
                  <div className="space-y-2.5">
                    <label className="block text-xs font-mono tracking-wider text-neutral-300 font-bold uppercase flex items-center gap-2">
                      <Terminal size={13} className="text-neon-purple-light" />
                      <span>SELECT PROJECT BLUEPRINT</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => {
                        const isSelected = formState.subject === type;
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormState({ ...formState, subject: type })}
                            className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? 'bg-gradient-to-r from-neon-purple to-indigo-600 text-white font-bold border border-neon-purple/50 shadow-[0_0_15px_rgba(139,92,246,0.4)]'
                                : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/5'
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name & Email Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name-field" className="block text-xs font-mono tracking-wider text-neutral-300 font-bold uppercase">
                        YOUR NAME <span className="text-neon-purple-light">*</span>
                      </label>
                      <input 
                        id="name-field"
                        type="text" 
                        required
                        disabled={status === 'submitting'}
                        placeholder="e.g. Elon Musk"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-[#050312] border border-white/10 rounded-2xl px-4 py-3.5 text-sm font-sans focus:border-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-purple/30 text-white transition-all disabled:opacity-50 placeholder:text-neutral-600"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email-field" className="block text-xs font-mono tracking-wider text-neutral-300 font-bold uppercase">
                        YOUR EMAIL <span className="text-neon-purple-light">*</span>
                      </label>
                      <input 
                        id="email-field"
                        type="email" 
                        required
                        disabled={status === 'submitting'}
                        placeholder="e.g. elon@x.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-[#050312] border border-white/10 rounded-2xl px-4 py-3.5 text-sm font-sans focus:border-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-purple/30 text-white transition-all disabled:opacity-50 placeholder:text-neutral-600"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label htmlFor="message-field" className="block text-xs font-mono tracking-wider text-neutral-300 font-bold uppercase">
                        PROJECT SCOPE & OBJECTIVES <span className="text-neon-purple-light">*</span>
                      </label>
                      <span className="text-[10px] font-mono text-neutral-500">
                        {formState.message.length} chars
                      </span>
                    </div>
                    <textarea 
                      id="message-field"
                      required
                      rows={5}
                      disabled={status === 'submitting'}
                      placeholder="Outline your project scope, target timeline, technical requirements, or role details..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-[#050312] border border-white/10 rounded-2xl p-4 text-sm font-sans focus:border-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-purple/30 text-white transition-all disabled:opacity-50 resize-y placeholder:text-neutral-600 leading-relaxed"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting' || !formState.name || !formState.email || !formState.message}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-neon-purple via-indigo-600 to-cyber-blue hover:from-neon-purple-light hover:to-cyber-blue-light text-white font-mono text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(139,92,246,0.35)] hover:shadow-[0_0_45px_rgba(139,92,246,0.6)] transition-all duration-300 hover:scale-[1.01] cursor-pointer disabled:opacity-40 disabled:pointer-events-none group"
                    id="contact-submit-btn"
                  >
                    {status === 'submitting' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        <span>ENCRYPTING & DISPATCHING TRANSMISSION...</span>
                      </>
                    ) : (
                      <>
                        <span>TRANSMIT PROPOSAL</span>
                        <Send size={15} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-neutral-500 pt-1">
                    <ShieldCheck size={12} className="text-emerald-400" />
                    <span>SECURE ENCRYPTED DISPATCH • ZERO SPAM POLICY</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
