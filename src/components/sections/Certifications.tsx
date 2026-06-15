"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certificates = [
  { name: "Python for Data Science — Elite Certificate", issuer: "NPTEL / IIT Madras", isPlaceholder: false, certificateUrl: "/certificates/nptel-python-for-data-science.pdf" },
  { name: "Deloitte Data Analytics Job Simulation", issuer: "Forage", isPlaceholder: false, certificateUrl: "/certificates/deloitte-data-analytics.pdf" },
  { name: "Linear Algebra for Machine Learning", issuer: "LDRP-ITR & Gujarat University", isPlaceholder: false, certificateUrl: "/certificates/linear-algebra-ml.pdf" },
  { name: "AI Tools & ChatGPT Workshop", issuer: "be10x", isPlaceholder: false, certificateUrl: "/certificates/ai-tools-chatgpt-workshop.pdf" },
  { name: "Data Structures Problem Solving Workshop", issuer: "LDRP-ITR", isPlaceholder: false, certificateUrl: "/certificates/data-structures-workshop.pdf" },
];

export default function Certifications() {
  return (
    <section id="achievements" className="min-h-[70vh] py-12 md:py-20 relative">
      <div className="container mx-auto px-5 md:px-6 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-10 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">Certifications</h2>
          <div className="hidden sm:block h-[1px] w-24 bg-cyber-blue/30" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  ? "border border-white/10 bg-white/5 opacity-50"
                  : "glassmorphism hover:border-cyber-blue/30 transition-all border border-white/5"
              }`}
            >
              {!cert.isPlaceholder && (
                <div className="absolute top-0 right-0 p-3 opacity-20">
                  <Award size={48} />
                </div>
              )}
              
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                cert.isPlaceholder ? "bg-white/10 text-white/30" : "bg-cyber-blue/10 text-cyber-blue"
              }`}>
                <Award size={32} />
              </div>
              
              <h3 className="font-bold text-lg text-white mb-2">{cert.name}</h3>
              <p className="text-sm font-mono text-gray-400 mt-auto mb-4">{cert.issuer}</p>

              {cert.certificateUrl ? (
                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto px-4 py-2 w-full rounded-lg border border-cyber-blue/50 text-cyber-blue text-sm font-medium hover:bg-cyber-blue hover:text-black transition-colors"
                >
                  View Certificate
                </a>
              ) : (
                <div className="mt-auto w-full flex flex-col items-center">
                  <button disabled className="px-4 py-2 w-full rounded-lg border border-gray-600/50 text-gray-500 text-sm font-medium cursor-not-allowed">
                    View Certificate
                  </button>
                  <span className="text-[10px] text-gray-500 mt-1">Certificate file not added yet</span>
                  {/* TODO: Add certificate file to public/certificates/ and update certificateUrl */}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
