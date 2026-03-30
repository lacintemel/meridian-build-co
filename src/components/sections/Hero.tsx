"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-black"
    >
      {/* Cinematic Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale, y }}
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="file:///Users/lacintemel/.gemini/antigravity/brain/60ade206-e2ed-418e-a8a0-342dbc0eba0b/modern_architectural_masterpiece_hero_1774794615147.png"
          alt="Architectural Masterpiece"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20" />
      </motion.div>

      {/* Grid Overlay Structure */}
      <div className="absolute inset-0 grid-structure opacity-20 pointer-events-none z-10" />

      {/* Content */}
      <div className="container-luxury relative z-30">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-6 mb-8"
          >
            <span className="w-20 h-[1px] bg-[var(--color-gold)]" />
            <span className="text-xs uppercase tracking-[0.5em] text-[var(--color-gold)] font-medium">
              Precision • Luxury • Trust
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] mb-10"
          >
            <span className="text-reveal">
              <span className="inline-block">Architectural</span>
            </span>
            <br />
            <span className="text-reveal">
              <span className="text-gradient-gold">Excellence</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-2xl text-[var(--color-silver)] max-w-2xl mb-12 leading-relaxed font-light"
          >
            For two decades, Meridian Build Co. has defined the intersection of technically demanding engineering and uncompromising architectural vision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-8 items-start sm:items-center"
          >
            <Link href="/projects" className="btn-luxury">
              View Portfolio
            </Link>
            <div className="h-[1px] w-12 bg-[var(--color-graphite)] hidden sm:block" />
            <Link href="/contact" className="text-sm uppercase tracking-widest text-[var(--color-platinum)] hover:text-[var(--color-gold)] transition-colors">
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator refined */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-[var(--color-gold)] to-transparent relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-white/40"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-silver)]">Scroll</span>
      </motion.div>
    </section>
  );
}
