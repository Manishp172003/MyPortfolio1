import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = !!(
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.closest('[role="button"]')
      );
      
      setIsHovering(isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[999999] mix-blend-screen hidden md:block"
        style={{
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
      >
        {/* Inner circle */}
        <div className="absolute inset-0 rounded-full bg-[#8b5cf6]/20" />
        
        {/* Outer glow ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-[#8b5cf6]/50"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-[#c084fc] -translate-x-1/2 -translate-y-1/2" />
      </motion.div>

      {/* Trailing Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[999998] hidden md:block"
        style={{
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 20,
          mass: 1
        }}
      >
        <div className="absolute inset-0 rounded-full bg-[#3b82f6]/30" />
      </motion.div>

      {/* Click Ripple Effect */}
      {isClicking && (
        <motion.div
          className="fixed top-0 left-0 w-16 h-16 rounded-full pointer-events-none z-[999997] hidden md:block"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            translateX: '-50%',
            translateY: '-50%',
          }}
          animate={{
            scale: [0, 2, 0],
            opacity: [1, 0.5, 0]
          }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 rounded-full border-2 border-[#c084fc]" />
        </motion.div>
      )}
    </>
  );
}