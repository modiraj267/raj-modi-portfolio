"use client";

import { motion } from "framer-motion";

export default function About() {
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
            <h2 className="text-3xl md:text-5xl font-bold text-balance">About</h2>
            <div className="hidden sm:block h-[1px] w-24 bg-cyber-cyan/30" />
          </div>

          <div className="glassmorphism p-6 md:p-10 rounded-2xl relative overflow-hidden group">
            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-purple/5 rounded-full blur-[80px] -z-10 group-hover:bg-cyber-purple/10 transition-colors duration-500" />
            
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I’m an Information Technology graduate from LDRP Institute of Technology & Research with hands-on internship and project experience across machine learning, full-stack development, and data analytics.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              I enjoy solving real-world problems, working with data, and building clean applications that are useful, reliable, and easy to understand.
            </p>
            
            <div className="border-t border-white/5 pt-6 mt-6">
              <h3 className="text-sm font-mono text-cyber-cyan mb-3 tracking-wider uppercase">Beyond Code</h3>
              <p className="text-base text-gray-400 leading-relaxed">
                Outside of coding, I enjoy gaming. It helps me stay focused, think strategically, and improve my patience while solving complex problems.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />
    </section>
  );
}
