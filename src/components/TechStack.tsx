"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Cpu,
  FileCode,
  Layers,
  Shield,
  Database,
  Cloud,
  Smartphone,
} from "lucide-react";
import { useState } from "react";

const skills = [
  {
    icon: <Globe size={28} />,
    name: "Web Development",
    desc: "Building modern, responsive websites with clean code and great UX.",
    color: "#8A4FFF",
    gradient: "from-[#8A4FFF]/20 to-[#8A4FFF]/5",
  },
  {
    icon: <Cpu size={28} />,
    name: "AI Tools",
    desc: "Leveraging AI-powered tools to boost productivity and solve problems faster.",
    color: "#FF6B6B",
    gradient: "from-[#FF6B6B]/20 to-[#FF6B6B]/5",
  },
  {
    icon: <FileCode size={28} />,
    name: "HTML / CSS / JS",
    desc: "Core web technologies – the foundation of every project I build.",
    color: "#4ECDC4",
    gradient: "from-[#4ECDC4]/20 to-[#4ECDC4]/5",
  },
  {
    icon: <Layers size={28} />,
    name: "Project Management",
    desc: "Planning, executing, and delivering projects on time with clear milestones.",
    color: "#FFD93D",
    gradient: "from-[#FFD93D]/20 to-[#FFD93D]/5",
  },
  {
    icon: <Shield size={28} />,
    name: "Problem Solving",
    desc: "Analytical thinking to break down complex challenges into elegant solutions.",
    color: "#6BCB77",
    gradient: "from-[#6BCB77]/20 to-[#6BCB77]/5",
  },
  {
    icon: <Database size={28} />,
    name: "Documentation",
    desc: "Writing clear, comprehensive technical documentation for every project.",
    color: "#FF8E53",
    gradient: "from-[#FF8E53]/20 to-[#FF8E53]/5",
  },
  {
    icon: <Cloud size={28} />,
    name: "Hosting & Deploy",
    desc: "Deploying web apps to free and premium hosting platforms with ease.",
    color: "#A78BFA",
    gradient: "from-[#A78BFA]/20 to-[#A78BFA]/5",
  },
  {
    icon: <Smartphone size={28} />,
    name: "Computer Skills",
    desc: "Strong command over computer systems, software, and digital workflows.",
    color: "#EC4899",
    gradient: "from-[#EC4899]/20 to-[#EC4899]/5",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.8,
    rotateX: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
      mass: 0.8,
    },
  },
};

function SkillCard({ skill, index }: { skill: (typeof skills)[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        y: -12,
        transition: { type: "spring", stiffness: 400, damping: 17 },
      }}
      className="relative group cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      {/* Animated glow behind card */}
      <motion.div
        animate={{
          opacity: isHovered ? 0.6 : 0,
          scale: isHovered ? 1.1 : 0.8,
        }}
        transition={{ duration: 0.4 }}
        className="absolute -inset-2 rounded-[2rem] blur-xl -z-10"
        style={{ backgroundColor: skill.color + "30" }}
      />

      <div
        className={`relative rounded-[2rem] p-8 border border-white/[0.06] bg-gradient-to-br ${skill.gradient} backdrop-blur-sm overflow-hidden transition-all duration-500 h-full`}
        style={{
          borderColor: isHovered ? skill.color + "40" : "rgba(255,255,255,0.06)",
        }}
      >
        {/* Floating orb decoration */}
        <motion.div
          animate={{
            x: isHovered ? 10 : 0,
            y: isHovered ? -10 : 0,
            scale: isHovered ? 1.5 : 1,
            opacity: isHovered ? 0.3 : 0.1,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-2xl"
          style={{ backgroundColor: skill.color }}
        />

        {/* Pulse ring on hover */}
        <motion.div
          animate={{
            scale: isHovered ? [1, 1.8, 2.5] : 1,
            opacity: isHovered ? [0.3, 0.1, 0] : 0,
          }}
          transition={{ duration: 1.2, repeat: isHovered ? Infinity : 0 }}
          className="absolute top-6 left-6 w-14 h-14 rounded-2xl border-2 -z-10"
          style={{ borderColor: skill.color }}
        />

        {/* Icon container */}
        <motion.div
          animate={{
            rotate: isHovered ? [0, -8, 8, 0] : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{
            rotate: { duration: 0.5, ease: "easeInOut" },
            scale: { type: "spring", stiffness: 300 },
          }}
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500"
          style={{
            backgroundColor: isHovered ? skill.color : skill.color + "15",
            color: isHovered ? "#fff" : skill.color,
          }}
        >
          {skill.icon}
        </motion.div>

        {/* Text content */}
        <h3 className="text-lg font-bold mb-2 transition-colors duration-300" style={{ color: isHovered ? skill.color : "#fff" }}>
          {skill.name}
        </h3>
        <p className="text-sm text-[#ABB2BF] leading-relaxed font-light">
          {skill.desc}
        </p>

        {/* Bottom accent line */}
        <motion.div
          animate={{
            width: isHovered ? "60%" : "0%",
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute bottom-0 left-0 h-[2px] rounded-full"
          style={{ backgroundColor: skill.color }}
        />
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple/[0.03] blur-[100px] pointer-events-none" />

      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.4em" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="text-purple font-black mb-6 uppercase text-sm"
          >
            My Skills &amp; Tools
          </motion.p>
          <h2 className="heading-figma text-4xl mb-6">
            What I <span className="text-purple">Bring</span> to the Table
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-purple rounded-full mx-auto"
          />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>

        {/* Bottom floating badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </span>
            <span className="text-sm text-[#ABB2BF] font-medium">
              Always learning new technologies
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
