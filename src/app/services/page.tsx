"use client";

import { motion } from "framer-motion";
import { services } from "@/data/home";
import ServiceCard from "@/components/features/ServiceCard";

const processSteps = [
  { step: 1, title: "Discovery", desc: "Understand project goals, constraints, and opportunities", icon: "🔍" },
  { step: 2, title: "Strategy", desc: "Develop delivery approach and execution roadmap", icon: "📋" },
  { step: 3, title: "Design", desc: "Create innovative solutions within technical parameters", icon: "✏️" },
  { step: 4, title: "Delivery", desc: "Execute with precision and transparent communication", icon: "🏗️" },
  { step: 5, title: "Handover", desc: "Commission and transfer operational control", icon: "🤝" },
];

const expertiseAreas = [
  {
    title: "Master Planning",
    desc: "Large-scale, complex site planning",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  },
  {
    title: "Structural Engineering",
    desc: "Advanced seismic and performance design",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.66-5.66a8 8 0 1111.31 0l-5.66 5.66a.75.75 0 01-1.06 0z" />
      </svg>
    ),
  },
  {
    title: "Sustainability",
    desc: "LEED and carbon-neutral strategies",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 10-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036" />
      </svg>
    ),
  },
  {
    title: "Project Management",
    desc: "Phased delivery and construction oversight",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Header Spacing */}
      <div className="h-20 md:h-24" />

      {/* Page Hero */}
      <section className="section-spacing-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-50" />
        <div className="container-luxury relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-overline mb-5">Services</p>
            <h1 className="mb-6">
              Capabilities built for mission-critical projects.
            </h1>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed font-light">
              We tailor delivery models to each project while keeping one priority fixed:
              predictable outcomes without sacrificing design intent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-spacing">
        <div className="container-luxury">
          <motion.div
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <ServiceCard
                  number={index + 1}
                  title={service.title}
                  description={service.description}
                  details={service.details}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section-spacing bg-[var(--bg-primary)]">
        <div className="container-luxury">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-overline mb-5">Capabilities</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
              Areas of Expertise
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {expertiseAreas.map((item, index) => (
              <motion.div
                key={item.title}
                className="card-dark p-7 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/[0.08] border border-[var(--accent)]/[0.15] flex items-center justify-center text-[var(--accent)] mb-5 group-hover:bg-[var(--accent)]/[0.15] transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-spacing">
        <div className="container-luxury">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-overline mb-5">Methodology</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
              Our Process
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                className="flex items-start gap-5 md:gap-6 mb-8 md:mb-10 group"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                {/* Step circle */}
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[var(--accent)]/[0.08] border border-[var(--accent)]/[0.2] flex items-center justify-center group-hover:bg-[var(--accent)]/[0.15] group-hover:border-[var(--accent)]/[0.4] transition-all duration-300">
                  <span className="text-base md:text-lg font-bold text-[var(--accent)]">
                    {item.step}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-grow pt-1">
                  <h3 className="text-lg md:text-xl font-semibold text-[var(--text-primary)] mb-1.5 group-hover:text-[var(--accent)] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-[var(--text-secondary)]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing-lg relative overflow-hidden bg-[var(--bg-primary)]">
        <div className="absolute inset-0 bg-gradient-radial opacity-60" />
        <div className="container-luxury relative z-10">
          <motion.div
            className="glass-gold p-8 md:p-12 lg:p-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-overline mb-5">Ready to Start</p>
            <h2 className="max-w-3xl mx-auto mb-6">
              Let&apos;s discuss your project requirements
            </h2>
            <motion.a
              href="/contact"
              className="btn-primary inline-flex"
              whileHover={{ scale: 1.03 }}
            >
              <span>Get in Touch</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
