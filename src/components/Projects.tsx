"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { PORTFOLIO_DATA } from "@/constants/data";

export default function Projects() {
  return (
    <section id="projects" className="py-32">
      <div className="section-container">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-24"
        >
          <h2 className="heading-figma text-4xl mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-purple rounded-full" />
        </motion.div>

        <div className="space-y-40">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-20 items-center`}
            >
              {/* Project Image Placeholder/Card */}
              <div className="w-full lg:w-1/2 aspect-video figma-card relative group p-0 overflow-hidden">
                <div className="absolute inset-0 bg-purple/10 group-hover:bg-transparent transition-colors z-10" />
                <div className="w-full h-full bg-[#1A1A2E] flex items-center justify-center p-12">
                   <div className="text-purple/40 font-black text-6xl italic select-none">IMAGE</div>
                </div>
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-1/2">
                <p className="text-purple font-black mb-4 uppercase tracking-[0.3em] text-xs">Featured Project</p>
                <h3 className="heading-figma text-4xl mb-6">{project.title}</h3>
                <div className="figma-card mb-8 px-8 py-6 bg-[#1A1A2E]/80 backdrop-blur-xl border-white/5 shadow-2xl">
                  <p className="text-muted leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-bold text-muted border border-white/10 px-4 py-1 rounded-full uppercase tracking-widest">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6">
                  <a href={project.link} className="text-white hover:text-purple transition-colors">
                    <ExternalLink size={24} />
                  </a>
                  <a href="#" className="text-white hover:text-purple transition-colors">
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
