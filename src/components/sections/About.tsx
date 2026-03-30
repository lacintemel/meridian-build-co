"use client";

import { motion } from "framer-motion";
import { about } from "@/data/home";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  const { ref, isInView } = useScrollReveal({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      id="about"
      className="section-spacing bg-black relative overflow-hidden"
    >
      {/* Background architectural elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--color-charcoal)] to-transparent opacity-50" />
      <div className="absolute bottom-20 left-10 w-64 h-64 border border-[var(--color-gold)] opacity-5 rotate-12 pointer-events-none" />

      <div className="container-luxury relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-gold)] mb-6">Our Philosophy</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-[var(--color-platinum)]">
              Constructing with <br />
              <span className="text-gradient-gold">Uncompromising Precision</span>.
            </h2>
            <p className="text-lg md:text-xl text-[var(--color-silver)] font-light leading-relaxed mb-10">
              {about.history}
            </p>

            <div className="grid grid-cols-2 gap-12">
              {about.stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <span className="text-3xl md:text-4xl font-bold text-[var(--color-platinum)]">{stat.value}</span>
                  <span className="text-xs uppercase tracking-widest text-[var(--color-gold)] font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[500px] lg:h-[700px] w-full"
          >
            <div className="absolute inset-0 bg-[var(--color-charcoal)] border border-white/5 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1000&h=1200&fit=crop"
                alt="Architectural detail"
                className="w-full h-full object-cover grayscale opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>

            {/* Floating glass card */}
            <motion.div
              className="absolute -bottom-10 -left-10 md:-left-20 p-8 md:p-12 glass-morphism max-w-sm hidden md:block z-20"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <h3 className="text-[var(--color-gold)] font-bold text-lg mb-4 uppercase tracking-widest">The Meridian Standard</h3>
              <p className="text-[var(--color-silver)] font-light italic leading-relaxed text-sm">
                "We don't just manage sites; we engineer outcomes. Every joint, every weld, every line is a signature of our commitment to excellence."
              </p>
            </motion.div>

            {/* Decorative accent */}
            <div className="absolute top-10 right-10 w-24 h-24 border-t border-r border-[var(--color-gold)] opacity-30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
