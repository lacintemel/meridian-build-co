"use client";

import { motion } from "framer-motion";
import { about } from "@/data/home";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  const { ref, isInView } = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      id="about"
      className="section-spacing-lg relative overflow-hidden bg-[var(--bg-primary)]"
    >
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--bg-elevated)] to-transparent opacity-40" />
      <div className="absolute bottom-32 left-8 w-48 h-48 border border-[var(--accent)]/[0.04] rotate-12 pointer-events-none" />

      <div className="container-luxury relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-overline mb-5">Our Philosophy</p>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] mb-8 text-[var(--text-primary)]">
              Constructing with <br />
              <span className="text-gradient-gold">Uncompromising Precision</span>.
            </h2>
            <p className="text-base md:text-lg text-[var(--text-secondary)] font-light leading-relaxed mb-12">
              {about.history}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {about.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                >
                  <span className="block text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-1">
                    {stat.value}
                  </span>
                  <span className="text-[0.65rem] uppercase tracking-[0.12em] text-[var(--accent)] font-medium leading-tight block">
                    {stat.label}
                  </span>
                  {i < about.stats.length - 1 && (
                    <div className="absolute top-0 -right-4 h-full w-[1px] bg-[var(--border-subtle)] hidden md:block" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[450px] lg:h-[600px] w-full"
          >
            <div className="absolute inset-0 rounded-xl overflow-hidden border border-[var(--border-subtle)]">
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=1000&fit=crop&q=80"
                alt="Architectural detail showing precision engineering"
                className="w-full h-full object-cover grayscale-[0.4] opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-void)] via-transparent to-transparent" />
            </div>

            {/* Floating glass card */}
            <motion.div
              className="absolute -bottom-6 -left-6 md:-left-12 p-6 md:p-8 glass-morphism max-w-sm hidden md:block z-20"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="accent-line mb-4" />
              <h3 className="text-[var(--accent)] font-semibold text-sm mb-3 uppercase tracking-[0.1em]">
                The Meridian Standard
              </h3>
              <p className="text-[var(--text-secondary)] font-light italic leading-relaxed text-sm">
                &ldquo;We don&apos;t just manage sites; we engineer outcomes. Every joint, every weld, every line
                is a signature of our commitment.&rdquo;
              </p>
            </motion.div>

            {/* Decorative accent */}
            <div className="absolute top-6 right-6 w-20 h-20 border-t border-r border-[var(--accent)]/20 rounded-tr-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
