"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "AayuUnify — Premium Ayurvedic D2C Storefront",
    type: "Full Stack / E-Commerce",
    difficulty: "Advanced",
    tech: ["Next.js 14", "TypeScript", "Firebase Auth", "Firestore", "Tailwind CSS", "Razorpay", "Vercel"],
    desc: "A premium Ayurvedic D2C e-commerce storefront featuring a merchant admin console, real-time order tracking, WhatsApp checkout fallback, and role-based access.",
    github: "https://github.com/modiraj267/aayunify",
    link: "https://aayunify.vercel.app/",
  },
  {
    title: "AI Plant Disease Detection",
    type: "AI/ML",
    difficulty: "Hard",
    tech: ["Python", "TensorFlow", "Streamlit", "Google Translate API"],
    desc: "A multilingual plant disease detection system that analyzes plant leaf images and provides disease prediction with possible solutions.",
    github: "https://github.com/modiraj267",
    link: "https://github.com/modiraj267",
  },
  {
    title: "Sales Analytics Dashboard",
    type: "Data Analytics",
    difficulty: "Medium",
    tech: ["Python", "Streamlit", "Pandas", "Plotly"],
    desc: "A business analytics dashboard that allows CSV/Excel upload, generates KPIs, interactive charts, and business insights.",
    github: "https://github.com/modiraj267",
    link: "https://github.com/modiraj267",
  },
  {
    title: "AI Posture Correction & Rep Counting",
    type: "Computer Vision",
    difficulty: "Hard",
    tech: ["Python", "Mediapipe", "Streamlit", "pyttsx3"],
    desc: "A real-time fitness assistant that detects exercise posture and counts reps for push-ups, squats, and lunges with voice feedback.",
    github: "https://github.com/modiraj267",
    link: "https://github.com/modiraj267",
  },
  {
    title: "Personalized Medical Recommendation System",
    type: "Machine Learning",
    difficulty: "Hard",
    tech: ["Python", "Flask", "Machine Learning", "Pandas"],
    desc: "A Flask-based ML system that predicts possible diseases from symptoms and recommends medicines, diet, and workout suggestions.",
    github: "https://github.com/modiraj267",
    link: "https://github.com/modiraj267",
  },
  {
    title: "VendorBridge Hackathon Project",
    type: "Full Stack",
    difficulty: "Medium",
    tech: ["React.js", "FastAPI", "PostgreSQL"],
    desc: "A vendor management and procurement platform built for a hackathon using modern full-stack technologies.",
    github: "https://github.com/modiraj267",
    link: "https://github.com/modiraj267",
  },
];

export default function MissionsCompleted() {
  return (
    <section id="missions" className="min-h-screen py-12 md:py-20 relative">
      <div className="container mx-auto px-5 md:px-6 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-10 md:mb-12">
          <span className="text-cyber-blue font-mono tracking-widest uppercase text-xs sm:text-sm">Stage 3</span>
          <div className="hidden sm:block h-[1px] w-12 bg-cyber-blue/50" />
          <h2 className="text-3xl md:text-5xl font-bold text-balance">Missions Completed</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glassmorphism rounded-2xl p-6 flex flex-col h-full neon-border-hover relative overflow-hidden group"
            >
              {/* Card top accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-blue to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

              <div className="flex justify-between items-start mb-4">
                <span className="px-2 py-1 text-[10px] uppercase tracking-wider font-bold bg-cyber-blue/20 text-cyber-blue rounded">
                  {project.type}
                </span>
                <span className="text-xs font-mono text-gray-500 flex items-center gap-1">
                  LVL: <span className="text-white">{project.difficulty}</span>
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm flex-grow mb-6 leading-relaxed">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-mono text-gray-300 border border-white/10 rounded px-2 py-1">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4 mt-auto pt-4 border-t border-white/5">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-white hover:text-cyber-cyan transition-colors"
                >
                  <ExternalLink size={16} /> View Mission
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                >
                  <FaGithub size={16} /> Source
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
