"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "AayuUnify — Premium Ayurvedic D2C Storefront",
    type: "Full Stack / E-Commerce",
    tech: ["Next.js 14", "TypeScript", "Firebase Auth", "Firestore", "Tailwind CSS", "Razorpay", "Vercel"],
    problem: "Need for a dedicated, trustworthy platform for Ayurvedic products.",
    built: "A complete D2C e-commerce storefront with a merchant admin console.",
    features: "Real-time order tracking, WhatsApp checkout fallback, and role-based access.",
    github: "https://github.com/modiraj267/aayunify",
    link: "https://aayunify.vercel.app/",
  },
  {
    title: "AI Plant Disease Detection",
    type: "AI/ML",
    tech: ["Python", "TensorFlow", "Streamlit", "Google Translate API"],
    problem: "Farmers struggle to identify plant diseases accurately and quickly.",
    built: "A multilingual AI-powered detection system.",
    features: "Analyzes plant leaf images, predicts diseases, and provides localized treatment solutions.",
    github: "https://github.com/modiraj267",
    link: "",
  },
  {
    title: "Sales Analytics Dashboard",
    type: "Data Analytics",
    tech: ["Python", "Streamlit", "Pandas", "Plotly"],
    problem: "Businesses need accessible ways to visualize raw sales data.",
    built: "An interactive business analytics dashboard.",
    features: "CSV/Excel uploads, automated KPI generation, and interactive data charts.",
    github: "https://github.com/modiraj267",
    link: "",
  },
  {
    title: "AI Posture Correction & Rep Counting",
    type: "Computer Vision",
    tech: ["Python", "Mediapipe", "Streamlit", "pyttsx3"],
    problem: "Working out at home often lacks form correction, leading to injuries.",
    built: "A real-time AI fitness assistant.",
    features: "Detects exercise posture and counts reps for push-ups/squats with voice feedback.",
    github: "https://github.com/modiraj267",
    link: "",
  },
  {
    title: "Medical Recommendation System",
    type: "Machine Learning",
    tech: ["Python", "Flask", "Machine Learning", "Pandas"],
    problem: "Initial symptom checking can be confusing without medical guidance.",
    built: "A Flask-based predictive ML system.",
    features: "Predicts possible diseases from symptoms and recommends diet/workout plans.",
    github: "https://github.com/modiraj267",
    link: "",
  },
  {
    title: "VendorBridge",
    type: "Full Stack",
    tech: ["React.js", "FastAPI", "PostgreSQL"],
    problem: "Inefficient communication between vendors and procurement teams.",
    built: "A vendor management platform (Hackathon Project).",
    features: "Streamlined procurement workflows and vendor onboarding processes.",
    github: "https://github.com/modiraj267",
    link: "",
  },
];

export default function Projects() {
  return (
    <section id="missions" className="min-h-screen py-12 md:py-20 relative">
      <div className="container mx-auto px-5 md:px-6 relative z-10">
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">Projects</h2>
          <div className="hidden sm:block h-[1px] w-24 bg-cyber-blue/30" />
        </div>
        
        <p className="text-gray-400 max-w-2xl mb-10 md:mb-12">
          Selected projects that reflect my work in AI/ML, data analytics, full-stack development, and real-world problem solving.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glassmorphism rounded-2xl p-6 flex flex-col h-full border border-white/5 hover:border-cyber-blue/30 transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="px-2 py-1 text-[10px] uppercase tracking-wider font-bold bg-cyber-blue/10 text-cyber-blue rounded border border-cyber-blue/20">
                  {project.type}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 leading-tight">{project.title}</h3>
              
              <div className="flex-grow space-y-3 mb-6 text-sm">
                <div className="text-gray-400">
                  <span className="text-gray-300 font-medium">Problem:</span> {project.problem}
                </div>
                <div className="text-gray-400">
                  <span className="text-gray-300 font-medium">Built:</span> {project.built}
                </div>
                <div className="text-gray-400">
                  <span className="text-gray-300 font-medium">Features:</span> {project.features}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-mono text-gray-400 bg-white/5 rounded px-2 py-1">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4 mt-auto pt-4 border-t border-white/5">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-white hover:text-cyber-cyan transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                ) : (
                  <span className="flex items-center gap-2 text-sm font-medium text-gray-500 cursor-not-allowed">
                    <ExternalLink size={16} /> Demo not added yet
                  </span>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                >
                  <FaGithub size={16} /> Source Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
