import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  const buildSteps = [
    { text: 'npm install portfolio...', duration: 800 },
    { text: '⠙ Installing dependencies...', duration: 1200 },
    { text: '⠹ Compiling React components...', duration: 1000 },
    { text: '⠼ Building assets...', duration: 900 },
    { text: '⠦ Optimizing images...', duration: 700 },
    { text: '⠧ Finalizing build...', duration: 600 },
    { text: '✓ Build complete!', duration: 500 },
  ];

  useEffect(() => {
    const runBuildProcess = async () => {
      // Add initial log
      setLogs(['$ npm run build']);
      
      for (let i = 0; i < buildSteps.length; i++) {
        setCurrentStep(i);
        setLogs(prev => [...prev, buildSteps[i].text]);
        
        // Animate progress smoothly
        const targetProgress = ((i + 1) / buildSteps.length) * 100;
        setProgress(targetProgress);
        
        await new Promise(resolve => setTimeout(resolve, buildSteps[i].duration));
      }

      // Final delay before completion
      setTimeout(() => {
        onComplete();
      }, 500);
    };

    runBuildProcess();
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center font-mono">
      {/* Matrix Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <MatrixRain />
      </div>

      {/* Terminal Window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-2xl bg-[#0a0a0a] border border-[#8b5cf6]/30 rounded-lg shadow-2xl shadow-[#8b5cf6]/20 overflow-hidden"
      >
        {/* Terminal Header */}
        <div className="bg-neon-purple/10 border-b border-neon-purple/30 px-4 py-2 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-[#8b5cf6]" />
          </div>
          <span className="text-[#c084fc] text-xs">portfolio-builder — bash — 80x24</span>
        </div>

        {/* Terminal Content */}
        <div className="p-6 space-y-2">
          {/* Logs */}
          <div className="space-y-1 min-h-[200px] max-h-[300px] overflow-y-auto">
            {logs.map((log, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="text-[#c084fc] text-sm"
              >
                {log}
              </motion.div>
            ))}
            
            {/* Blinking cursor */}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-[#c084fc] text-sm inline-block"
            >
              ▊
            </motion.span>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 pt-4 border-t border-[#8b5cf6]/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#c084fc] text-xs">Building...</span>
              <span className="text-[#c084fc] text-xs">{Math.round(progress)}%</span>
            </div>
            <div className="w-full h-2 bg-[#8b5cf6]/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6]"
                style={{ width: `${progress}%` }}
                animate={{
                  boxShadow: [
                    '0 0 10px rgba(139, 92, 246, 0.3)',
                    '0 0 20px rgba(139, 92, 246, 0.5)',
                    '0 0 15px rgba(59, 130, 246, 0.4)'
                  ]
                }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function MatrixRain() {
  const columns = 25;
  const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
  
  return (
    <div className="absolute inset-0">
      {Array.from({ length: columns }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-xs font-mono"
          style={{ 
            left: `${(i / columns) * 100}%`,
            color: i % 2 === 0 ? '#8b5cf6' : '#3b82f6'
          }}
          animate={{
            y: ['-100vh', '100vh'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'linear'
          }}
        >
          {chars[Math.floor(Math.random() * chars.length)]}
        </motion.div>
      ))}
    </div>
  );
}