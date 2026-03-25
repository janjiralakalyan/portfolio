"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "About", to: "about" },
  { name: "Education", to: "education" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-5xl bg-[#0D0D1D]/80 backdrop-blur-xl border border-white/5 rounded-[2rem] flex items-center justify-between px-8 md:px-10 py-4 md:py-6 pointer-events-auto"
      >
        <a href="/" className="text-3xl font-bold">
          Kalyan<span className="text-purple">.</span>
        </a>
        
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.to} 
              href={`#${link.to}`} 
              className="text-sm font-medium hover:text-purple transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-32 left-8 right-8 bg-[#1A1A2E] rounded-[2rem] p-10 flex flex-col gap-8 md:hidden pointer-events-auto border border-white/5"
        >
          {navLinks.map((link) => (
            <a 
              key={link.to} 
              href={`#${link.to}`} 
              className="text-2xl font-bold uppercase"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
