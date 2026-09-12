import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FastForward } from 'lucide-react';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [phase, setPhase] = useState<'ambience' | 'reveal' | 'exit'>('ambience');
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isFinishedRef = useRef(false);

  // Trigger smooth synchronized handoff
  const triggerComplete = () => {
    if (isFinishedRef.current) return;
    isFinishedRef.current = true;
    setPhase('exit');
    onComplete();
  };

  useEffect(() => {
    // Instant video playback
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0;
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback (muted is set)
      });
    }

    // Timeline:
    // 0ms -> 800ms: Background video movement
    // 800ms -> 4200ms: Clean cinematic typography reveal with glowing aura
    // 4200ms -> 4800ms: Smooth camera fly-through exit
    const revealTimer = setTimeout(() => {
      setPhase('reveal');
    }, 800);

    const exitTimer = setTimeout(() => {
      triggerComplete();
    }, 4400);

    // Progress counter: 0% -> 100% over 4000ms
    const startTime = Date.now();
    const duration = 4000;
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(pct);
      if (pct >= 100) {
        clearInterval(progressInterval);
      }
    }, 30);

    // Keyboard ESC shortcut
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        clearInterval(progressInterval);
        clearTimeout(revealTimer);
        clearTimeout(exitTimer);
        triggerComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(revealTimer);
      clearTimeout(exitTimer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col justify-between items-center bg-[#030014] text-white overflow-hidden select-none"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } }}
    >
      {/* 1. LAYER 0: LIVE BACKGROUND VIDEO */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          src="/hero-bg.mp4"
          className="w-full h-full object-cover scale-105 filter brightness-[0.7] contrast-125 transition-transform duration-[10000ms] ease-out"
        />

        {/* Fallback Animated Gradient if video delays */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#07051a] via-[#030014] to-[#0a0720] -z-10" />
      </div>

      {/* 2. LAYER 1: CINEMATIC ATMOSPHERIC SHADERS & VIGNETTE */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/45 to-[#030014] pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,#030014_85%)] pointer-events-none z-[1]" />

      {/* Ambient Deep Neon Purple & Cyan Glow Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[80vw] h-[45vh] bg-gradient-to-b from-[#8B5CF6]/30 via-[#3B82F6]/15 to-transparent blur-[150px] pointer-events-none z-[2]" />
      <div className="absolute bottom-10 left-10 w-[35vw] h-[35vw] bg-[#3B82F6]/15 rounded-full blur-[140px] pointer-events-none z-[2]" />
      <div className="absolute bottom-10 right-10 w-[35vw] h-[35vw] bg-[#8B5CF6]/20 rounded-full blur-[140px] pointer-events-none z-[2]" />

      {/* 3. LAYER 2: CLEAN TOP BAR (Only Skip Button) */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pt-6 sm:pt-8 flex items-center justify-end">
        <button
          onClick={triggerComplete}
          className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-neon-purple/20 hover:border-neon-purple/50 text-neutral-400 hover:text-white transition-all text-xs font-mono backdrop-blur-md cursor-pointer"
        >
          <span>SKIP</span>
          <FastForward className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-neutral-300 group-hover:bg-neon-purple group-hover:text-white transition-colors">
            ESC
          </span>
        </button>
      </div>

      {/* 4. LAYER 3: CLEAN & POWERFUL CINEMATIC TYPOGRAPHY */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 my-auto text-center flex flex-col items-center justify-center">
        <AnimatePresence>
          {phase !== 'ambience' && (
            <motion.div
              key="cinematic-title-card"
              className="relative w-full flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.88, filter: 'blur(16px)' }}
              animate={
                phase === 'exit'
                  ? {
                      opacity: 0,
                      scale: 1.35,
                      filter: 'blur(22px)',
                      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                    }
                  : {
                      opacity: 1,
                      scale: 1,
                      filter: 'blur(0px)',
                      transition: {
                        duration: 0.85,
                        ease: [0.16, 1, 0.3, 1], // sudden impact
                      },
                    }
              }
            >
              {/* Cinematic Backlight Bloom */}
              <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
                <div className="w-[85vw] max-w-4xl h-[320px] rounded-full bg-gradient-to-r from-neon-purple/50 via-cyan-400/35 to-neon-purple/50 blur-[100px] animate-pulse" />
                <div className="absolute w-[95vw] max-w-6xl h-[200px] rounded-full bg-neon-purple/20 blur-[140px]" />
              </div>

              {/* Optical Anamorphic Horizontal Lens Flare */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[2px] bg-gradient-to-r from-transparent via-cyan-300 via-white to-transparent pointer-events-none z-10"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: [0, 1, 0.4, 0.8, 0.25], scaleX: [0, 1.3, 1.1, 1.4, 1] }}
                transition={{ duration: 2.2, ease: 'easeOut' }}
                style={{
                  boxShadow:
                    '0 0 40px 6px rgba(96, 165, 250, 0.85), 0 0 80px 12px rgba(139, 92, 246, 0.65)',
                }}
              />

              {/* Minimalist Sub-Tag */}
              <motion.span
                className="font-mono text-xs sm:text-sm tracking-[0.4em] uppercase text-neon-purple-light mb-3 sm:mb-4 drop-shadow-[0_0_15px_rgba(139,92,246,0.6)]"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                WELCOME TO
              </motion.span>

              {/* Massive Main Title */}
              <div className="relative py-2">
                {/* First Word: DEVELOPER'S */}
                <motion.h1
                  className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight uppercase leading-[0.92] text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-white/75"
                  style={{
                    filter:
                      'drop-shadow(0 0 25px rgba(255,255,255,0.4)) drop-shadow(0 0 50px rgba(139,92,246,0.6))',
                  }}
                  initial={{ letterSpacing: '0.08em' }}
                  animate={{ letterSpacing: '-0.02em' }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  DEVELOPER&apos;S
                </motion.h1>

                {/* Second Word: PORTFOLIO */}
                <motion.div
                  className="relative font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight uppercase leading-[0.92] mt-1 sm:mt-3 text-transparent bg-clip-text bg-gradient-to-r from-neon-purple-light via-cyan-300 to-cyber-blue-light"
                  style={{
                    filter:
                      'drop-shadow(0 0 35px rgba(139,92,246,0.9)) drop-shadow(0 0 70px rgba(59,130,246,0.7)) drop-shadow(0 0 110px rgba(139,92,246,0.5))',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18, duration: 0.7 }}
                >
                  PORTFOLIO

                  {/* Traveling Light Sheen Beam */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent bg-clip-text pointer-events-none"
                    animate={{
                      x: ['-120%', '120%'],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.2,
                      ease: 'easeInOut',
                      repeatDelay: 0.8,
                    }}
                  />
                </motion.div>
              </div>

              {/* Single, Clean, Minimalist Signature Line */}
              <motion.p
                className="mt-6 sm:mt-8 font-mono text-xs sm:text-sm text-neutral-400 tracking-[0.25em] uppercase"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
              >
                <span className="text-white font-semibold">MANISH PAWAR</span>
                <span className="text-neon-purple-light mx-2.5">•</span>
                <span>FULL STACK DEVELOPER</span>
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 5. LAYER 4: CLEAN MINIMALIST BOTTOM PROGRESS BAR */}
      <div className="relative z-20 w-full max-w-md mx-auto px-6 pb-8 flex flex-col items-center gap-2.5">
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden relative">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-neon-purple via-cyan-400 to-cyber-blue shadow-[0_0_15px_rgba(139,92,246,0.9)]"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="font-mono text-[11px] text-neutral-400 tracking-widest">
          {progress}%
        </span>
      </div>
    </motion.div>
  );
}
