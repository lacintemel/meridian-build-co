"use client";

import { motion } from "framer-motion";
import { services } from "@/data/home";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Services() {
  const { ref, isInView } = useScrollReveal({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      id="services"
      className="section-spacing bg-[var(--color-charcoal)] relative overflow-hidden"
    >
      <div className="container-luxury relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-gold)] mb-6">Expertise</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[var(--color-platinum)]">
              Comprehensive <span className="text-gradient-gold">Project Life-Cycle</span> Management.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block h-[1px] flex-grow mx-12 bg-[var(--color-gold)] opacity-20"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="bg-black p-12 hover:bg-[var(--color-charcoal)] transition-colors duration-500 group relative overflow-hidden"
            >
              <div className="relative z-10">
                <span className="text-[var(--color-gold)] text-xs font-mono mb-8 block opacity-40 group-hover:opacity-100 transition-opacity">
                  0{i + 1} /
                </span>
                <h3 className="text-2xl font-bold text-[var(--color-platinum)] mb-6 group-hover:text-[var(--color-gold)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[var(--color-silver)] font-light leading-relaxed mb-6 italic text-sm">
                  {service.description}
                </p>
                <p className="text-[var(--color-silver)] font-light leading-relaxed mb-10">
                  {service.details}
                </p>
              </div>

              {/* Animated background element */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[var(--color-gold)] opacity-0 group-hover:opacity-[0.03] rounded-full blur-3xl transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
