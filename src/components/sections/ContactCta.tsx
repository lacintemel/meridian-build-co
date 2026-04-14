"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ContactCta() {
  const { ref, isInView } = useScrollReveal({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="section-spacing relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 grid-structure opacity-[0.06] pointer-events-none" />

      <div className="container-luxury relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="glass-gold p-10 md:p-16 lg:p-20 text-center relative overflow-hidden group"
        >
          {/* Animated corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-[var(--accent)]/30 group-hover:w-24 group-hover:h-24 transition-all duration-700 rounded-tl-lg" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-[var(--accent)]/30 group-hover:w-24 group-hover:h-24 transition-all duration-700 rounded-br-lg" />

          <div className="max-w-3xl mx-auto relative z-10">
            <motion.p
              className="text-overline mb-6"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 }}
            >
              Ready to build?
            </motion.p>

            <motion.h2
              className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold mb-8 text-[var(--text-primary)] leading-[1.1]"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 }}
            >
              Let&apos;s engineer your{" "}
              <span className="text-gradient-gold">next success</span>.
            </motion.h2>

            <motion.p
              className="text-base md:text-lg text-[var(--text-secondary)] font-light mb-12 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 }}
            >
              From complex seismic retrofits to visionary innovation campuses,
              we bring certainty to every stage of the build.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link href="/contact" className="btn-luxury">
                <span>Start a Conversation</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/projects"
                className="btn-ghost"
              >
                Explore All Projects
              </Link>
            </motion.div>
          </div>

          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[var(--accent)] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
