"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[700px] max-h-[1200px] flex items-center overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale, y }}
      >
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&h=1080&fit=crop&q=85"
          alt="Modern architectural masterpiece with clean geometric lines"
          className="w-full h-full object-cover"
        />

        {/* Layered gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-void)] via-[var(--bg-void)]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-void)] via-transparent to-[var(--bg-void)]/30" />
        <div className="absolute inset-0 bg-[var(--bg-void)]/25" />
      </motion.div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid-structure opacity-[0.15] pointer-events-none z-[1]" />

      {/* Content */}
      <motion.div className="container-luxury relative z-10" style={{ opacity }}>
        <div className="max-w-4xl">
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-5 mb-8"
          >
            <span className="w-12 h-[1px] bg-[var(--accent)]" />
            <span className="text-overline">
              Precision · Innovation · Trust
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-display mb-10"
          >
            <span className="text-reveal">
              <span className="inline-block">Architectural</span>
            </span>
            <br />
            <span className="text-reveal">
              <span className="text-gradient-gold inline-block">Excellence</span>
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mb-12 leading-relaxed font-light"
          >
            For two decades, Meridian Build Co. has defined the intersection of technically
            demanding engineering and uncompromising architectural vision.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 items-start sm:items-center"
          >
            <Link href="/projects" className="btn-luxury">
              <span>View Portfolio</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <div className="h-[1px] w-8 bg-[var(--border-subtle)] hidden sm:block" />
            <Link
              href="/contact"
              className="btn-ghost"
            >
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-[var(--accent)]/60 to-transparent relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-[var(--accent-light)]/50"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <span className="text-[9px] uppercase tracking-[0.4em] text-[var(--text-tertiary)]">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
