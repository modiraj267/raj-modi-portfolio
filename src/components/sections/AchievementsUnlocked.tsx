"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certificates = [
  { name: "Python for Data Science", issuer: "DataCamp / IBM" },
  { name: "Deloitte Data Analytics Job Simulation", issuer: "Forage" },
  { name: "Data Analysis Course", issuer: "Online Certification" },
  { name: "Future Achievement", issuer: "In Progress", isPlaceholder: true },
];

export default function AchievementsUnlocked() {
  return (
    <section id="achievements" className="min-h-[70vh] py-12 md:py-20 relative">
      <div className="container mx-auto px-5 md:px-6 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-10 md:mb-12 sm:justify-end sm:text-right">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">Achievements Unlocked</h2>
          <div className="hidden sm:block h-[1px] w-12 bg-yellow-500/50" />
          <span className="text-yellow-500 font-mono tracking-widest uppercase text-xs sm:text-sm">Stage 4</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={!cert.isPlaceholder ? { y: -5 } : {}}
              className={`p-6 rounded-2xl flex flex-col items-center text-center relative overflow-hidden ${
                cert.isPlaceholder
                  ? "border border-dashed border-white/20 bg-white/5 opacity-50"
                  : "glassmorphism hover:border-yellow-500/50 hover:shadow-[0_0_20px_rgba(234,179,8,0.2)] transition-all"
              }`}
            >
              {!cert.isPlaceholder && (
                <div className="absolute top-0 right-0 p-3 opacity-20">
                  <Award size={48} />
                </div>
              )}
              
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                cert.isPlaceholder ? "bg-white/10 text-white/30" : "bg-gradient-to-br from-yellow-400 to-yellow-600 text-black"
              }`}>
                <Award size={32} />
              </div>
              
              <h3 className="font-bold text-lg text-white mb-2">{cert.name}</h3>
              <p className="text-sm font-mono text-gray-400 mt-auto">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
