"use client";

import { motion } from "framer-motion";

export default function Hero() {

  return (
    <section id="start" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-60"
        >
          <source src="/assets/hero-animation.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-primary/90 via-cyber-primary/60 to-cyber-primary z-10" />
      </div>

      <div className="container mx-auto px-5 md:px-6 relative z-20">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-6 max-w-3xl"
        >
          <div className="inline-block px-3 py-1 rounded-full border border-cyber-purple/30 bg-cyber-purple/10 text-cyber-purple text-sm font-medium tracking-wider uppercase mb-2">
            Status: Online
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-balance drop-shadow-xl">
            Hi, I&apos;m <br />
            <span className="text-gradient">Raj Modi</span>
          </h1>
          
          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium drop-shadow-md">
            Python Developer | Data Analyst | AI/ML Enthusiast
          </h2>
          
          <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
            Leveling up through real-world projects in Python, SQL, AI/ML, and modern web development. I build data-driven and AI-powered applications with clean code, practical problem-solving, and a continuous learning mindset.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
            <a
              href="#missions"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-cyber-cyan text-black font-semibold hover:bg-white transition-all shadow-[0_0_15px_rgba(0,214,255,0.4)] text-center"
            >
              View Missions
            </a>
            <a
              href="/Raj_Modi_Resume.pdf"
              download
              className="w-full sm:w-auto px-8 py-3 rounded-full border border-gray-600 hover:border-white transition-all text-center"
            >
              Download Resume
            </a>
          </div>

          {/* Player Status Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 glassmorphism p-5 sm:p-6 rounded-2xl w-full max-w-sm sm:max-w-md border-l-4 border-l-cyber-purple neon-border-hover"
          >
            <div className="grid grid-cols-2 gap-y-2 text-sm">
              <div className="text-gray-500">Player</div>
              <div className="font-medium text-white">Raj Modi</div>
              
              <div className="text-gray-500">Class</div>
              <div className="font-medium text-cyber-cyan">Developer / Analyst</div>
              
              <div className="text-gray-500">Current Quest</div>
              <div className="font-medium text-white">Building AI/Data Apps</div>
              
              <div className="text-gray-500">Location</div>
              <div className="font-medium text-white">Gujarat, India</div>
              
              <div className="text-gray-500 pt-2">XP Stack</div>
              <div className="font-medium text-gray-300 pt-2 text-xs">
                Python • SQL • AI/ML • React • FastAPI
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500"
      >
        <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
      </motion.div>
    </section>
  );
}
