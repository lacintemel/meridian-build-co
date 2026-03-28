"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const stats = [
  { value: "200+", label: "Projects Completed" },
  { value: "18", label: "Years Experience" },
  { value: "$2.5B", label: "Value Delivered" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[700px] flex items-center overflow-hidden"
    >
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 animate-ken-burns"
          style={{ y }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
            }}
          />
        </motion.div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-obsidian)] via-[var(--color-obsidian)]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-obsidian)] via-transparent to-[var(--color-obsidian)]/30" />
      </div>

      {/* Grid Overlay */}
      <div className="grid-overlay" />

      {/* Corner Accents */}
      <div className="corner-accent corner-accent--top-left top-8 left-8 hidden lg:block" />
      <div className="corner-accent corner-accent--bottom-right bottom-32 right-8 hidden lg:block" />

      {/* Content */}
      <motion.div className="container-luxury relative z-10" style={{ opacity }}>
        <div className="max-w-3xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="w-12 h-[1px] bg-[var(--color-gold)]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">
              Architecture & Construction
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl font-[var(--font-heading)] font-bold text-[var(--color-platinum)] leading-[1.1] mb-6"
          >
            Building
            <br />
            Tomorrow&apos;s
            <br />
            <span className="text-gradient-gold">Landmarks</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-[var(--color-silver)] max-w-xl mb-10 leading-relaxed"
          >
            For over 18 years, we&apos;ve transformed visions into architectural
            masterpieces. Precision engineering meets innovative design.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="#projects" className="btn-primary">
              <span>View Our Work</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link href="#contact" className="btn-secondary">
              <span>Start a Project</span>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 z-10"
      >
        <div className="bg-[var(--color-charcoal)]/90 backdrop-blur-md border-t border-[var(--color-graphite)]">
          <div className="container-luxury">
            <div className="grid grid-cols-3 divide-x divide-[var(--color-graphite)]">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="py-6 md:py-8 px-4 md:px-8 text-center"
                >
                  <div className="text-2xl md:text-4xl font-[var(--font-heading)] font-bold text-[var(--color-gold)] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm uppercase tracking-wider text-[var(--color-silver)]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-36 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-[var(--color-silver)]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-8 bg-gradient-to-b from-[var(--color-gold)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
