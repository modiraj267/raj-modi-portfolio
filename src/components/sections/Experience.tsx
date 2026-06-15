"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const stats = [
  { value: "5+", label: "Industry Internships" },
  { value: "AI/ML", label: "Model Development" },
  { value: "Full Stack", label: "Web Development" },
  { value: "Govt.", label: "Portal Delivery" },
];

const experiences = [
  {
    title: "AI / ML Intern",
    company: "QSkill — Squarcell Resource India Pvt. Ltd.",
    duration: "Jan 2026 – Feb 2026",
    type: "Internship",
    desc: "Implemented machine learning projects including Iris Flower Classification using KNN and Logistic Regression, and Spam Mail Detection using NLP preprocessing, TF-IDF vectorization, and Naive Bayes classification.",
    points: [
      "Built Iris Flower Classification model",
      "Built Spam Mail Detector using NLP",
      "Used confusion matrix and accuracy metrics",
      "Applied train/test splitting and model evaluation",
      "Internship ID: qsai2026011221"
    ],
    tech: ["Python", "Machine Learning", "NLP", "TF-IDF", "Naive Bayes", "KNN", "Logistic Regression"]
  },
  {
    title: "Web Development Intern — UGVCL Consumer Portal",
    company: "Uttar Gujarat Vij Company Ltd.",
    duration: "Jul 2025",
    type: "Internship / Final-Year Project Delivery",
    desc: "Designed and delivered a government-grade Consumer Portal for UGVCL using modern web technologies and relational database tools. Managed project delivery from requirements gathering to deployment as part of B.E. final-year project requirements.",
    points: [
      "Built a government utility consumer portal",
      "Worked on requirements gathering and delivery",
      "Used web development and database tools",
      "Delivered the project to client satisfaction"
    ],
    tech: ["Web Development", "Database", "HTML", "CSS", "JavaScript", "SQL"]
  },
  {
    title: "Machine Learning Intern",
    company: "Cognifyz Technologies",
    duration: "May 2025 – Jun 2025",
    type: "Internship",
    desc: "Designed, trained, and evaluated multiple machine learning classification models using Python and Scikit-learn. Worked on feature engineering, model selection, hyperparameter tuning, and performance benchmarking to improve prediction accuracy across assigned datasets.",
    points: [
      "Built and evaluated ML classification models",
      "Used Python and Scikit-learn",
      "Applied feature engineering and model tuning",
      "Completed internship milestones on schedule",
      "Internship ID: CTI/A1/C150853"
    ],
    tech: ["Python", "Scikit-learn", "Machine Learning", "Data Analysis", "Model Evaluation"]
  },
  {
    title: ".NET & Angular Developer Intern",
    company: "TatvaSoft, Ahmedabad",
    duration: "May 2025 – Jun 2025",
    type: "Internship",
    desc: "Developed real-world software modules using .NET, C#, and Angular in a professional enterprise software environment. Worked on REST API integration, database layers, responsive UI components, and software engineering workflows.",
    points: [
      "Developed full-stack enterprise web modules",
      "Worked with .NET, C#, and Angular",
      "Integrated RESTful APIs and database layers",
      "Gained experience in SDLC and team collaboration"
    ],
    tech: [".NET", "C#", "Angular", "REST APIs", "SQL", "Enterprise Web Development"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen relative py-12 md:py-20">
      <div className="container mx-auto px-5 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-6 md:mb-8 sm:justify-end sm:text-right">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">Career XP</h2>
          <div className="hidden sm:block h-[1px] w-12 bg-cyber-purple/50" />
          <span className="text-cyber-purple font-mono tracking-widest uppercase text-xs sm:text-sm">Stage 1.5</span>
        </div>
        
        <p className="text-gray-400 max-w-2xl sm:ml-auto sm:text-right mb-12 md:mb-16">
          Industry internships and real-world development experience across AI/ML, Python, full-stack web development, enterprise software, and government web portal delivery.
        </p>

        {/* Top Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glassmorphism p-4 rounded-xl text-center border-t border-t-white/10 hover:border-cyber-cyan/50 transition-colors"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-cyber-cyan mb-1">{stat.value}</h3>
              <p className="text-xs md:text-sm text-gray-400 font-mono uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[15px] md:left-[27px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyber-cyan via-cyber-purple to-transparent hidden sm:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative pl-0 sm:pl-16 md:pl-24 group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[11px] md:left-[23px] top-6 w-2 h-2 rounded-full bg-cyber-cyan shadow-[0_0_10px_#00d6ff] hidden sm:block">
                  <div className="absolute -inset-2 rounded-full border border-cyber-cyan/50 animate-ping" />
                </div>

                {/* Experience Card */}
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className="glassmorphism p-6 md:p-8 rounded-2xl border border-white/5 hover:border-cyber-purple/50 transition-all hover:shadow-[0_0_30px_rgba(188,19,254,0.15)]"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-cyber-cyan transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm font-mono text-gray-400">
                        <span className="flex items-center gap-1 text-cyber-purple">
                          <Briefcase size={14} />
                          {exp.company}
                        </span>
                        <span className="hidden sm:inline">•</span>
                        <span className="flex items-center gap-1 text-yellow-500/80">
                          <Calendar size={14} />
                          {exp.duration}
                        </span>
                        <span className="hidden sm:inline">•</span>
                        <span className="bg-white/5 px-2 py-0.5 rounded text-xs border border-white/10">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                    {exp.desc}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                        <CheckCircle2 size={16} className="text-cyber-cyan mt-0.5 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {exp.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-black/40 border border-white/10 rounded-full text-xs font-medium text-gray-300 hover:border-cyber-purple hover:text-white transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
