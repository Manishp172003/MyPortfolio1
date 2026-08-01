import { useState } from 'react';
import { Trophy, Sparkles, Users, Award, RotateCw } from 'lucide-react';
import { motion } from 'motion/react';
import { achievements } from '../data';
import { Achievement } from '../types';

export default function Achievements() {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  return (
    <section className="relative py-16 sm:py-20 px-4 bg-[#05050c]" id="achievements">
      {/* Background ambient lighting */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-yellow-400/5 blur-[140px] pointer-events-none" />

      {/* Decorative large backdrop text */}
      <div className="absolute top-10 right-10 select-none pointer-events-none font-display font-black text-[12vw] leading-none opacity-2 text-white/2 tracking-tighter uppercase">
        AWARDS
      </div>

      <div className="w-full max-w-6xl mx-auto flex flex-col gap-10 relative z-10 text-left">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[2px] bg-amber-400" />
            <span className="font-mono text-xs font-bold text-amber-400 tracking-widest uppercase">Recognition</span>
          </div>
          <h3 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Hackathon Achievements
          </h3>
          <p className="text-sm text-neutral-400 max-w-md">
            Click on any card to flip and reveal details about our hackathon victories.
          </p>
        </div>

        {/* Achievements Grid - Smaller compact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="group relative w-full h-[320px]"
              style={{ perspective: '1000px' }}
            >
              <motion.div
                className="relative w-full h-full transition-transform duration-400 cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: flippedCard === achievement.id ? 180 : 0 }}
                onClick={() => setFlippedCard(flippedCard === achievement.id ? null : achievement.id)}
              >
                {/* Front Side */}
                <div 
                  className="absolute inset-0 w-full h-full rounded-2xl bg-[#0c091a]/90 border border-white/5 hover:border-amber-400/35 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-amber-500/20"
                  style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                >
                  
                  {/* Certificate Image */}
                  <div className="w-full h-[200px] overflow-hidden relative bg-[#f6f4f1] p-2">
                    <img 
                      src={achievement.image} 
                      alt={achievement.title} 
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Visual amber filter wash */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c091a]/60 via-transparent to-transparent pointer-events-none" />

                    {/* Position Badge */}
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full border border-amber-400/30 bg-black/75 backdrop-blur-md text-xs font-mono tracking-wider font-bold text-amber-400 uppercase flex items-center gap-1.5">
                      <Trophy size={12} className="text-amber-400" />
                      <span>{achievement.position}</span>
                    </div>

                    {/* Year Badge */}
                    <div className="absolute bottom-3 left-3 px-2 py-1 rounded-full border border-white/10 bg-black/75 backdrop-blur-md text-[9px] font-mono tracking-wider text-white uppercase">
                      {achievement.year}
                    </div>
                  </div>

                  {/* Card Meta Content */}
                  <div className="p-4 flex flex-col gap-2 bg-gradient-to-b from-[#0c091a]/0 to-black/35">
                    <h4 className="font-display font-extrabold text-base text-white leading-tight line-clamp-1">
                      {achievement.title}
                    </h4>
                    <p className="text-xs text-neutral-400 font-sans leading-relaxed line-clamp-1">
                      {achievement.project}
                    </p>

                    {/* Flip Indicator */}
                    <div className="flex items-center gap-1 pt-2 text-[10px] font-mono text-amber-400/70">
                      <RotateCw size={10} />
                      <span>Click to flip</span>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div 
                  className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br from-[#0d091e] to-[#0a071a] border border-amber-400/30 transition-all duration-300 overflow-hidden shadow-lg"
                  style={{ 
                    backfaceVisibility: 'hidden', 
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)' 
                  }}
                >
                  
                  {/* Back Content */}
                  <div className="w-full h-full p-5 flex flex-col gap-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Award size={16} className="text-amber-400" />
                        <span className="text-xs font-mono font-bold text-amber-400 uppercase">Details</span>
                      </div>
                      <span className="text-[10px] font-mono text-neutral-500">{achievement.year}</span>
                    </div>

                    {/* Title */}
                    <h4 className="font-display font-extrabold text-lg text-white leading-tight">
                      {achievement.title}
                    </h4>

                    {/* Project */}
                    <div className="space-y-1">
                      <h5 className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider">Project</h5>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        {achievement.project}
                      </p>
                    </div>

                    {/* Team Members */}
                    <div className="space-y-1 flex-1">
                      <h5 className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                        <Users size={10} />
                        Team
                      </h5>
                      <ul className="space-y-1">
                        {achievement.team.map((member, idx) => (
                          <li key={idx} className="text-[11px] text-neutral-300 flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-amber-400" />
                            <span className="line-clamp-1">{member}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Prize */}
                    {achievement.prize && (
                      <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                        <Sparkles size={12} className="text-amber-400" />
                        <span className="text-xs font-mono font-bold text-amber-400">{achievement.prize}</span>
                      </div>
                    )}

                    {/* Flip Back Indicator */}
                    <div className="flex items-center gap-1 pt-2 text-[10px] font-mono text-neutral-500">
                      <RotateCw size={10} />
                      <span>Click to flip back</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}