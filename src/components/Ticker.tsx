import { Sparkles } from 'lucide-react';
import { portfolioOwner } from '../data';

export default function Ticker() {
  const tickerItems = [
    { text: "JAVA FULL STACK DEVELOPER", icon: true },
    { text: "B.TECH (ETC) STUDENT", icon: true },
    { text: "IT VEDANT CERTIFIED", icon: true },
    { text: "RESPONSIVE BOOTSTRAP & REACT WEB DESIGN", icon: true },
    { text: "C++ & OBJECT-ORIENTED ALGORITHMS", icon: true },
    { text: "MYSQL RELATIONAL DATABASES", icon: true },
  ];

  // Repeat the array multiple times to guarantee seamless scrolling regardless of monitor scale
  const repeatedItems = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div className="w-full bg-deep-dark border-y border-white/5 py-4 overflow-hidden relative" id="ticker-section">
      {/* Background neon soft color wash */}
      <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/5 via-transparent to-neon-purple/5 pointer-events-none" />

      <div className="flex whitespace-nowrap" id="ticker-container">
        {/* Infinite scrolling block using CSS animation defined in index.css */}
        <div className="flex items-center gap-16 animate-marquee shrink-0 select-none text-neutral-400 font-display text-xs sm:text-sm md:text-base font-black tracking-widest leading-none">
          {repeatedItems.map((item, idx) => (
            <div key={`col1-${idx}`} className="flex items-center gap-4 text-white/55 transition-colors hover:text-white duration-300">
              <span>{item.text}</span>
              {item.icon && (
                <Sparkles size={14} className="text-neon-purple-light animate-pulse h-4 w-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
