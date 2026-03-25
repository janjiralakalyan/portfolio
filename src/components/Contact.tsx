"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "@/constants/data";

export default function Contact() {
  return (
    <section id="contact" className="py-40 bg-[#0A0A15]">
      <div className="section-container text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="heading-figma mb-8 text-6xl">Let&apos;s Connect<span className="text-purple">.</span></h2>
          <p className="text-xl text-muted max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            I&apos;m currently a B.Tech CSE student looking for internship opportunities and real-world projects. Let&apos;s build something amazing together!
          </p>
          
          <a 
            href={`mailto:${PORTFOLIO_DATA.contact.email}`}
            className="text-2xl md:text-4xl font-black text-white hover:text-purple transition-all duration-300 block mb-8 underline underline-offset-8 decoration-purple/30"
          >
            {PORTFOLIO_DATA.contact.email}
          </a>

          {/* Contact Details */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-16 text-muted">
            <span className="flex items-center gap-2 text-sm">
              <Phone size={16} className="text-purple" />
              {PORTFOLIO_DATA.contact.phone}
            </span>
            <span className="flex items-center gap-2 text-sm">
              <MapPin size={16} className="text-purple" />
              {PORTFOLIO_DATA.contact.location}
            </span>
          </div>

          <div className="flex items-center justify-center gap-10">
            <a 
              href={`mailto:${PORTFOLIO_DATA.contact.email}`} 
              className="text-muted hover:text-purple transition-colors transform hover:scale-110"
              aria-label="Email"
            >
              <Mail size={32} />
            </a>
            {PORTFOLIO_DATA.contact.socials.map((social) => (
               <a 
                key={social.name}
                href={social.link} 
                className="text-muted hover:text-purple transition-colors transform hover:scale-110"
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
               >
                 {social.name === "GitHub" ? <Github size={32} /> : null}
                 {social.name === "LinkedIn" ? <Linkedin size={32} /> : null}
               </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
