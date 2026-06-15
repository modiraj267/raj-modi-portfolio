"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, FileText, Phone, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function FinalQuest() {
  return (
    <section id="contact" className="min-h-screen py-12 md:py-20 relative flex flex-col justify-between">
      <div className="container mx-auto px-5 md:px-6 relative z-10 flex-grow flex flex-col items-center justify-center">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto w-full"
        >
          <div className="inline-block px-4 py-1 rounded-full border border-cyber-cyan/30 bg-cyber-cyan/10 text-cyber-cyan text-xs sm:text-sm font-mono tracking-widest uppercase mb-6">
            Stage 5: Final Quest
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-balance">Ready to start the <br /><span className="text-gradient">next mission?</span></h2>
          
          <p className="text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed text-balance">
            I’m open to internships and fresher opportunities in Python Development, Data Analytics, AI/ML, and Full Stack Development.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 w-full">
            <a
              href="mailto:modiraj267@gmail.com"
              className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 rounded-full bg-cyber-cyan text-black font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(0,214,255,0.4)] flex items-center justify-center gap-2"
            >
              <Mail size={20} /> Contact Me
            </a>
            <a
              href="/Raj_Modi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 rounded-full border border-gray-600 hover:border-white text-white font-medium transition-all flex items-center justify-center gap-2"
            >
              <FileText size={20} /> View Resume
            </a>
            <a
              href="/Raj_Modi_Resume.pdf"
              download
              className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 rounded-full border border-gray-600 hover:border-white text-white font-medium transition-all flex items-center justify-center gap-2"
            >
              <Download size={20} /> Download Resume
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            <a href="mailto:modiraj267@gmail.com" className="glassmorphism p-4 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-cyber-cyan hover:text-cyber-cyan transition-colors group">
              <Mail className="text-gray-400 group-hover:text-cyber-cyan transition-colors" />
              <span className="text-xs font-mono text-center break-all">modiraj267@gmail.com</span>
            </a>
            <a href="tel:+919624419624" className="glassmorphism p-4 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-cyber-cyan hover:text-cyber-cyan transition-colors group">
              <Phone className="text-gray-400 group-hover:text-cyber-cyan transition-colors" />
              <span className="text-xs font-mono text-center whitespace-nowrap">+91 96244 19624</span>
            </a>
            <div className="glassmorphism p-4 rounded-xl flex flex-col items-center justify-center gap-2">
              <MapPin className="text-gray-400" />
              <span className="text-xs font-mono text-center">Gujarat, India</span>
            </div>
            <a href="https://github.com/modiraj267" target="_blank" rel="noopener noreferrer" className="glassmorphism p-4 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-white hover:text-white transition-colors group">
              <FaGithub className="text-gray-400 group-hover:text-white transition-colors" />
              <span className="text-xs font-mono">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/raj-modi-1455b2279/" target="_blank" rel="noopener noreferrer" className="glassmorphism p-4 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-[#0A66C2] hover:text-[#0A66C2] transition-colors group">
              <FaLinkedin className="text-gray-400 group-hover:text-[#0A66C2] transition-colors" />
              <span className="text-xs font-mono">LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-5 md:px-6 py-8 border-t border-white/5 mt-20 text-center relative z-10">
        <p className="text-sm font-mono text-gray-500">
          © 2026 Raj Modi. Built with passion, code, and continuous leveling up.
        </p>
      </footer>
      
      {/* Background ambient light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[300px] bg-cyber-cyan/5 rounded-[100%] blur-[100px] -z-10 pointer-events-none" />
    </section>
  );
}
