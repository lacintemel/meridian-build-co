"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    quote:
      "Meridian's approach to technical complexity is unmatched. They delivered our flagship campus with precision that exceeded every architectural requirement.",
    author: "Robert Sterling",
    role: "CEO, Harbor Development Group",
  },
  {
    quote:
      "The symmetry and balance they bring to high-stakes infrastructure projects is a testament to their deep understanding of both form and function.",
    author: "Elena Rossi",
    role: "Chief Architect, Rossi & Associates",
  },
];

export default function Testimonials() {
  const { ref, isInView } = useScrollReveal({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="section-spacing bg-[var(--bg-primary)] relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-structure opacity-[0.03] pointer-events-none" />

      <div className="container-luxury relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-overline mb-5">Client Trust</p>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-[1.15]">
              What it means to build with{" "}
              <span className="text-gradient-gold">Precision</span>.
            </h2>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative p-8 md:p-10 glass-gold group"
            >
              {/* Quote mark */}
              <div className="mb-6">
                <svg
                  className="w-10 h-10 text-[var(--accent)]/30"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
                </svg>
              </div>

              {/* Quote text */}
              <p className="text-lg md:text-xl text-[var(--text-primary)] leading-relaxed italic mb-8 font-light">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-[var(--accent)]">
                    {t.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <span className="block text-sm font-semibold text-[var(--accent)] tracking-wide">
                    {t.author}
                  </span>
                  <span className="block text-xs text-[var(--text-tertiary)]">
                    {t.role}
                  </span>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r border-b border-[var(--accent)]/20 group-hover:w-24 group-hover:h-24 transition-all duration-500 pointer-events-none rounded-br-lg" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
