"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ContactCta() {
  const { ref, isInView } = useScrollReveal({ threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="section-spacing bg-black relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 grid-structure opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent opacity-20" />

      <div className="container-luxury relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="glass-gold p-12 md:p-24 text-center relative overflow-hidden group border border-[var(--color-gold)]/20"
        >
          {/* Animated corner accents */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-[var(--color-gold)] opacity-40 group-hover:w-32 group-hover:h-32 transition-all duration-700" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-[var(--color-gold)] opacity-40 group-hover:w-32 group-hover:h-32 transition-all duration-700" />

          <div className="max-w-3xl mx-auto relative z-10">
            <motion.p
              className="text-xs uppercase tracking-[0.5em] text-[var(--color-gold)] mb-8 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Ready to build?
            </motion.p>

            <motion.h2
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-10 text-[var(--color-platinum)] leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Let&apos;s engineer your <span className="text-gradient-gold">next success</span>.
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-[var(--color-silver)] font-light mb-14 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              From complex seismic retrofits to visionary innovation campuses,
              we bring certainty to every stage of the build.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-8 justify-center items-center"
            >
              <Link href="/contact" className="btn-luxury">
                Start a Conversation
              </Link>
              <Link href="/projects" className="text-sm uppercase tracking-widest text-[var(--color-platinum)] hover:text-[var(--color-gold)] transition-colors">
                Explore All Projects
              </Link>
            </motion.div>
          </div>

          {/* Decorative background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--color-gold)] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
