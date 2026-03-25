"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/constants/data";
import { useEffect } from "react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  // Parallax transforms
  const avatarX = useTransform(springX, [0, 1000], [15, -15]);
  const avatarY = useTransform(springY, [0, 800], [15, -15]);

  const glowX = useTransform(springX, [0, 1000], [-30, 30]);
  const glowY = useTransform(springY, [0, 800], [-30, 30]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Glows with Parallax */}
      <motion.div
        style={{ x: glowX, y: glowY }}
        className="glow-purple w-[500px] h-[500px] -top-64 -left-64"
      />
      <motion.div
        style={{ x: glowX, y: glowY }}
        className="glow-purple w-[400px] h-[400px] top-1/2 -right-32 opacity-10"
      />

      <div className="section-container w-full grid md:grid-cols-2 gap-16 items-center">

        {/* Left: Avatar with Parallax */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-2 md:order-1"
          style={{ x: avatarX, y: avatarY }}
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <Image
              src="/avatarmain.png"
              alt="Kalyan Janjirala"
              fill
              className="object-contain"
              priority
            />
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-[3px] border-white/20 rounded-full scale-110 -z-10"
            />
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 md:order-2"
        >
          <h2 className="text-xl font-medium text-muted mb-6">Hey, I&apos;m {PORTFOLIO_DATA.name}</h2>
          <h1 className="heading-figma mb-8">
            Building the <br />
            <span className="relative">
              future
              <svg className="absolute -bottom-2 left-0 w-full h-4 text-purple" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span> with code<span className="text-purple">.</span>
          </h1>
          <p className="text-lg text-muted mb-10 leading-relaxed font-light">
            {PORTFOLIO_DATA.intro} Currently pursuing my B.Tech in CSE at CMR College of Engineering and Technology, Hyderabad.
          </p>

          <div className="flex gap-4">
            <a href="#contact" className="btn-figma-primary shadow-2xl shadow-purple/20">Get in Touch</a>
            <a href="#projects" className="btn-figma-outline">See My Work</a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
