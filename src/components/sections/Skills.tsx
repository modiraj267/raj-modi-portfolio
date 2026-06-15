"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Python", level: "Advanced", width: "90%", category: "Programming" },
  { name: "Data Analytics", level: "Strong", width: "85%", category: "Data Analytics" },
  { name: "SQL / MySQL", level: "Strong", width: "85%", category: "Data Analytics" },
  { name: "Git & GitHub", level: "Strong", width: "80%", category: "Tools" },
  { name: "AI/ML", level: "Intermediate", width: "70%", category: "AI/ML" },
  { name: "FastAPI / Flask", level: "Intermediate", width: "70%", category: "Web Development" },
  { name: "React.js", level: "Intermediate", width: "65%", category: "Web Development" },
];

const categories = {
  "Programming": ["Python", "JavaScript", "C", "C++"],
  "Data Analytics": ["SQL", "MySQL", "Pandas", "NumPy", "Matplotlib", "Excel"],
  "AI/ML": ["Machine Learning", "TensorFlow", "Scikit-learn"],
  "Web Development": ["React.js", "HTML", "CSS", "Streamlit", "Flask", "FastAPI"],
  "Database": ["PostgreSQL", "MongoDB", "Firebase"],
  "Tools": ["Git", "GitHub", "VS Code", "Google Colab", "Jupyter Notebook"]
};

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen relative py-12 md:py-20">
      <div className="container mx-auto px-5 md:px-6 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-10 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">Skills</h2>
          <div className="hidden sm:block h-[1px] w-24 bg-cyber-purple/30" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Main XP Bars */}
          <div className="space-y-8">
            <h3 className="text-xl font-mono text-gray-400 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyber-cyan" />
              Core Competencies
            </h3>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex justify-between items-end mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-cyber-cyan font-mono text-sm">{skill.level}</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.width }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-cyber-blue to-cyber-cyan relative"
                  >
                    <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/30 blur-[2px]" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skill Cards by Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(categories).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glassmorphism p-5 rounded-2xl border-t border-t-white/10 hover:border-cyber-purple/30 transition-colors group"
              >
                <h4 className="text-cyber-purple font-semibold mb-3 group-hover:text-cyber-cyan transition-colors">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-1 text-xs font-medium bg-black/40 text-gray-300 rounded border border-white/5 group-hover:border-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
