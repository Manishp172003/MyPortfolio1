import { useState, FormEvent } from 'react';
import { Mail, Send, CheckCircle, Navigation, Clock, Globe, ArrowRight } from 'lucide-react';
import { portfolioOwner } from '../data';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: 'Web Development', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus('submitting');
    // Simulate real high-speed secure API submission
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', subject: 'Web Development', message: '' });
    }, 1500);
  };

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-deep-dark via-[#070514] to-black" id="contact">
      {/* Background glowing particles */}
      <div className="absolute top-[30%] left-[5%] w-[250px] h-[250px] bg-neon-purple/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[30%] right-[5%] w-[300px] h-[300px] bg-cyber-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto flex flex-col gap-14 relative z-10">
        
        {/* Headline Header */}
        <div className="space-y-3 text-left">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[2px] bg-neon-purple-light" />
            <span className="font-mono text-xs font-bold text-neon-purple-light tracking-widest uppercase">Connectivity</span>
          </div>
          <h3 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Initiate Creative Project Proposals
          </h3>
        </div>

        {/* Core Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Left Column Description, CTA, Information cards */}
          <div className="col-span-1 lg:col-span-5 flex flex-col gap-8">
            <h4 className="font-display font-extrabold text-2xl sm:text-3xl text-white leading-tight tracking-tight">
              Have an idea or a scale milestone? <br />
              <span className="bg-gradient-to-r from-neon-purple-light to-cyber-blue-light bg-clip-text text-transparent">
                Let’s build it together.
              </span>
            </h4>

            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-sans max-w-md">
              Send over your specifications or ask for a direct visual estimate. I reply to custom inquiries within an average window of 12 business hours.
            </p>

            <div className="flex flex-col gap-4 mt-2">
              {/* Email Card Wrapper */}
              <a 
                href={`mailto:${portfolioOwner.email}`}
                className="group p-5 rounded-2xl glass-panel hover:bg-white/3 border border-white/5 hover:border-neon-purple/35 transition-all duration-300 shadow-md flex items-center gap-4 cursor-pointer"
                id="contact-email-link-card"
              >
                <div className="w-11 h-11 rounded-xl bg-neon-purple/10 border border-neon-purple/20 flex items-center justify-center text-neon-purple-light group-hover:scale-110 transition-transform">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="block text-[10px] font-mono tracking-wider font-bold text-neutral-500 uppercase">DIRECT EMAIL TRIGGER</span>
                  <span className="font-display font-bold text-sm sm:text-base text-white group-hover:text-neon-purple-light transition-colors">
                    {portfolioOwner.email}
                  </span>
                </div>
              </a>

              {/* Informative Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl glass-inner-panel flex items-center gap-2.5">
                  <Navigation size={14} className="text-neon-purple-light shrink-0" />
                  <div className="text-[11px] font-mono leading-none">
                    <span className="block text-neutral-500 mb-1">AVAILABILITY</span>
                    <span className="text-white font-bold">FULL-TIME REM</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl glass-inner-panel flex items-center gap-2.5">
                  <Clock size={14} className="text-neon-purple-light shrink-0" />
                  <div className="text-[11px] font-mono leading-none">
                    <span className="block text-neutral-500 mb-1">AVERAGE REPLY</span>
                    <span className="text-white font-bold">&lt; 12 HOURS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Verification bottom block */}
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
              <Globe size={12} className="text-emerald-500 animate-spin" />
              <span>NATIVE TIMEZONE: IST (GMT +5:30)</span>
            </div>
          </div>

          {/* Right Glassmorphism Form Dashboard */}
          <div className="col-span-1 lg:col-span-7" id="contact-form-container">
            <div className="glass-panel border border-white/5 shadow-neon-glow rounded-[30px] p-6 sm:p-9 relative overflow-hidden">
              {/* Subtle top horizontal indicator */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-purple via-indigo-600 to-cyber-blue" />

              {status === 'success' ? (
                /* Success feedback panel */
                <div className="py-12 flex flex-col items-center justify-center text-center gap-5" id="form-success-alert">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/5">
                    <CheckCircle size={32} />
                  </div>
                  <div className="space-y-1.5">
                    <h5 className="font-display font-black text-xl sm:text-2xl text-white">Transmission Authenticated</h5>
                    <p className="text-sm text-neutral-400 font-sans max-w-xs mx-auto">
                      Thank you! Your message was delivered safely. I will coordinate review indexes immediately.
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-xs font-mono font-bold text-neon-purple-light hover:underline flex items-center gap-1.5"
                  >
                    <span>SUBMIT ANOTHER PORTAL</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              ) : (
                /* Form Inputs */
                <form onSubmit={handleSubmit} className="flex flex-col gap-6" id="contact-web-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div className="space-y-2">
                      <label htmlFor="name-field" className="block text-[11px] font-mono tracking-widest text-neutral-400 font-semibold uppercase">YOUR NAME *</label>
                      <input 
                        id="name-field"
                        type="text" 
                        required
                        disabled={status === 'submitting'}
                        placeholder="e.g. John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-[#05050e]/60 border border-white/5 rounded-xl px-4 py-3 text-sm focus:border-neon-purple/55 focus:outline-none focus:ring-1 focus:ring-neon-purple/40 text-white transition-all disabled:opacity-50"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2">
                      <label htmlFor="email-field" className="block text-[11px] font-mono tracking-widest text-neutral-400 font-semibold uppercase">EMAIL ADDRESS *</label>
                      <input 
                        id="email-field"
                        type="email" 
                        required
                        disabled={status === 'submitting'}
                        placeholder="e.g. john@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-[#05050e]/60 border border-white/5 rounded-xl px-4 py-3 text-sm focus:border-neon-purple/55 focus:outline-none focus:ring-1 focus:ring-neon-purple/40 text-white transition-all disabled:opacity-50"
                      />
                    </div>
                  </div>

                  {/* Project Subject Options dropdown / text */}
                  <div className="space-y-2">
                    <label htmlFor="subject-field" className="block text-[11px] font-mono tracking-widest text-neutral-400 font-semibold uppercase">SELECT SERVICE BLUEPRINT</label>
                    <select
                      id="subject-field"
                      disabled={status === 'submitting'}
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full bg-[#050510] border border-white/5 rounded-xl px-4 py-3 text-sm focus:border-neon-purple/55 focus:outline-none text-white transition-all disabled:opacity-50 cursor-pointer"
                    >
                      <option value="Web Development">Full Web Application Development</option>
                      <option value="UI/UX Redesign">High-Fidelity UI/UX Prototyping</option>
                      <option value="Consultancy Option">Digital Platform Architectural Consultation</option>
                      <option value="Other Project">Other Custom Technical Scope</option>
                    </select>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label htmlFor="message-field" className="block text-[11px] font-mono tracking-widest text-neutral-400 font-semibold uppercase">PROJECT SCOPE BRIEF *</label>
                    <textarea 
                      id="message-field"
                      required
                      rows={5}
                      disabled={status === 'submitting'}
                      placeholder="Summarize your website requirements, scale, deadlines..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-[#05050e]/60 border border-white/5 rounded-xl px-4 py-3 text-sm focus:border-neon-purple/55 focus:outline-none focus:ring-1 focus:ring-neon-purple/40 text-white transition-all disabled:opacity-50 resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting' || !formState.name || !formState.email || !formState.message}
                    className="w-full mt-2 bg-gradient-to-r from-neon-purple via-indigo-600 to-cyber-blue hover:from-neon-purple-light hover:to-cyber-blue-light text-white text-xs sm:text-sm font-bold py-4 rounded-xl transition-all shadow-neon-glow hover:shadow-neon-glowing-strong hover:scale-[1.01] flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-40 disabled:pointer-events-none"
                    id="contact-submit-btn"
                  >
                    <span>{status === 'submitting' ? 'AUTHENTICATING ENCRYPTED POST...' : 'TRANSMIT SECURE INQUIRY'}</span>
                    <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
