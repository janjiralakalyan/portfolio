"use client";

import { motion } from "framer-motion";
import { Code, Lightbulb, Users, BookOpen, Trophy, Rocket } from "lucide-react";
import { PORTFOLIO_DATA } from "@/constants/data";

const skillAreas = [
  { icon: <Code />, label: "Web Development", desc: "Building modern, responsive web applications with clean code and intuitive user experiences." },
  { icon: <Lightbulb />, label: "AI & Problem Solving", desc: "Leveraging AI tools to enhance productivity and solve complex technical challenges efficiently." },
  { icon: <Users />, label: "Team Collaboration", desc: "Working effectively in cross-functional teams, contributing to project planning and documentation." },
  { icon: <BookOpen />, label: "Technical Documentation", desc: "Creating comprehensive, clear documentation for projects and technical processes." },
];

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="heading-figma mb-6 text-4xl">About Me</h2>
          <p className="text-muted max-w-3xl mx-auto text-lg leading-relaxed font-light">
            {PORTFOLIO_DATA.about.bio}
          </p>
        </motion.div>

        {/* Skill Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
          {skillAreas.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="figma-card group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 text-purple group-hover:bg-purple group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.label}</h3>
              <p className="text-muted leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Core Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[...PORTFOLIO_DATA.about.skills.frontend, ...PORTFOLIO_DATA.about.skills.backend, ...PORTFOLIO_DATA.about.skills.tools].map((skill) => (
              <span key={skill} className="text-sm font-bold text-muted border border-white/10 px-6 py-2 rounded-full uppercase tracking-widest hover:border-purple/50 hover:text-purple transition-all duration-300 cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
