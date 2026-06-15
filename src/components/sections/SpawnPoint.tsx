"use client";

import { motion } from "framer-motion";

export default function SpawnPoint() {
  return (
    <section id="about" className="min-h-[70vh] flex items-center relative py-12 md:py-20">
      <div className="container mx-auto px-5 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-6">
            <span className="text-cyber-cyan font-mono tracking-widest uppercase text-xs sm:text-sm">Stage 1</span>
            <div className="hidden sm:block h-[1px] w-12 bg-cyber-cyan/50" />
            <h2 className="text-3xl md:text-5xl font-bold text-balance">About Player</h2>
          </div>

          <div className="glassmorphism p-6 md:p-10 rounded-2xl relative overflow-hidden group">
            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-purple/10 rounded-full blur-[80px] -z-10 group-hover:bg-cyber-purple/20 transition-colors duration-500" />
            
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I am <span className="text-white font-semibold">Raj Modi</span>, a B.E. Information Technology graduate passionate about Python development, data analytics, AI/ML, and building useful real-world software solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I enjoy solving problems, learning new technologies, and turning ideas into working applications. My gaming hobby has helped me build focus, patience, strategy, and a problem-solving mindset that I bring into my development work. Started with a strong foundation in Information Technology and built core skills in programming, problem-solving, and software development.
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />
    </section>
  );
}
