"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navLinks = [
  { name: "Start", href: "#start" },
  { name: "About Player", href: "#about" },
  { name: "Skill Inventory", href: "#skills" },
  { name: "Missions", href: "#missions" },
  { name: "Achievements", href: "#achievements" },
  { name: "Party Invite", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glassmorphism py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter hover:text-cyber-cyan transition-colors">
          Raj Modi
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-gray-300 hover:text-cyber-cyan transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyber-cyan transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* CTA and Socials */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            <a href="https://github.com/modiraj267" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/raj-modi-1455b2279/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0A66C2] transition-colors">
              <FaLinkedin size={20} />
            </a>
          </div>
          <Link
            href="#contact"
            className="px-6 py-2 rounded-full border border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan/10 transition-all shadow-[0_0_10px_rgba(0,214,255,0.2)] hover:shadow-[0_0_20px_rgba(0,214,255,0.4)]"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full glassmorphism py-4 border-t border-white/5"
        >
          <div className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-cyber-cyan transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex space-x-6 py-2">
              <a href="https://github.com/modiraj267" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/raj-modi-1455b2279/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0A66C2]">
                <FaLinkedin size={24} />
              </a>
            </div>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-2 rounded-full border border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan/10"
            >
              Hire Me
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
