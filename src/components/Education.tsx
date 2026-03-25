"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Award } from "lucide-react";
import { PORTFOLIO_DATA } from "@/constants/data";

export default function Education() {
  return (
    <section id="education" className="py-32 relative border-t border-white/5">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="heading-figma text-4xl mb-4">Education</h2>
          <div className="w-24 h-1 bg-purple rounded-full" />
        </motion.div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple/50 via-purple/20 to-transparent hidden md:block" />

          <div className="space-y-12">
            {PORTFOLIO_DATA.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative md:pl-24"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[22px] top-6 w-5 h-5 rounded-full border-[3px] border-purple bg-[#0D0D1D] hidden md:block z-10" />
                
                <div className="figma-card group hover:border-purple/30">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-purple/10 flex items-center justify-center text-purple group-hover:bg-purple group-hover:text-white transition-all duration-500 shrink-0">
                      <GraduationCap size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{edu.institution}</h3>
                      <p className="text-purple font-semibold text-sm">{edu.degree}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted mt-4">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-purple/60" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Award size={14} className="text-purple/60" />
                      {edu.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        {PORTFOLIO_DATA.achievements && PORTFOLIO_DATA.achievements.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Award className="text-purple" size={28} />
              Achievements
            </h3>
            <div className="grid gap-6">
              {PORTFOLIO_DATA.achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="figma-card bg-gradient-to-r from-purple/5 to-transparent border-purple/20 group hover:border-purple/40"
                >
                  <h4 className="text-lg font-bold text-purple mb-2">{achievement.title}</h4>
                  <p className="text-muted font-light leading-relaxed">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
