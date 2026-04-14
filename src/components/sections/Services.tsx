"use client";

import { motion } from "framer-motion";
import { services } from "@/data/home";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const serviceIcons = [
  // Design-Build
  <svg key="design" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>,
  // Commercial
  <svg key="commercial" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
  </svg>,
  // Infrastructure
  <svg key="infra" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21" />
  </svg>,
];

export default function Services() {
  const { ref, isInView } = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      id="services"
      className="section-spacing relative overflow-hidden bg-[var(--bg-elevated)]"
    >
      <div className="container-luxury relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 lg:mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <p className="text-overline mb-5">Expertise</p>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-[1.1] text-[var(--text-primary)]">
              Comprehensive <span className="text-gradient-gold">Project Life-Cycle</span> Management.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block h-[1px] flex-grow max-w-[200px] bg-gradient-to-r from-[var(--accent)]/30 to-transparent"
          />
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="group relative card-dark p-8 md:p-10 flex flex-col"
            >
              {/* Icon + Number */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/[0.08] border border-[var(--accent)]/[0.15] flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--accent)]/[0.15] transition-colors duration-300">
                  {serviceIcons[i]}
                </div>
                <span className="text-[var(--text-tertiary)] text-xs font-mono tracking-wider">
                  0{i + 1}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4 group-hover:text-[var(--accent)] transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5 italic">
                {service.description}
              </p>

              {/* Divider */}
              <div className="h-[1px] w-full bg-gradient-to-r from-[var(--accent)]/20 to-transparent mb-5" />

              {/* Details */}
              <p className="text-sm text-[var(--text-tertiary)] leading-relaxed mt-auto">
                {service.details}
              </p>

              {/* Hover glow */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[var(--accent)] opacity-0 group-hover:opacity-[0.04] rounded-full blur-3xl transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
