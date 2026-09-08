/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <CustomCursor />

      {/* Main App (Pre-rendered in background for instant display with zero black screen) */}
      <div
        className="relative min-h-screen bg-deep-dark text-white overflow-hidden bg-grain select-none antialiased selection:bg-neon-purple selection:text-white"
        id="portfolio-app-root"
      >
        {/* Absolute master background neon light beams */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-gradient-to-b from-neon-purple/5 to-transparent blur-[150px] pointer-events-none z-0" />
        <div className="absolute top-[40%] right-[-10%] w-[30vw] h-[30vw] bg-cyber-blue/3 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute bottom-[20%] left-[-10%] w-[30vw] h-[30vw] bg-neon-purple/3 rounded-full blur-[140px] pointer-events-none z-0" />

        {/* Header element */}
        <Header onOpenResume={() => setIsResumeOpen(true)} />

        {/* Main Content Layout sections */}
        <main className="relative w-full flex flex-col gap-0" id="master-layout-main">
          {/* Hero Segment */}
          <Hero onOpenResume={() => setIsResumeOpen(true)} />

          {/* Rolling stat band */}
          <Ticker />

          {/* Detailed professional biography */}
          <About />

          {/* Skills Cards Ecosystem */}
          <Skills />

          {/* Selected Projects Showcase */}
          <Projects />

          {/* Hackathon Achievements */}
          <Achievements />

          {/* Work & School Chronicle timelines */}
          <Experience />

          {/* Dynamic secure Inquiry trigger */}
          <Contact />
        </main>

        {/* Signature signature Footer */}
        <Footer />
      </div>

      {/* Interactive Verified Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      {/* Futuristic Developer Tech Stack Loader Overlay */}
      <AnimatePresence>
        {isLoading && <Loader onComplete={handleLoaderComplete} />}
      </AnimatePresence>
    </>
  );
}

