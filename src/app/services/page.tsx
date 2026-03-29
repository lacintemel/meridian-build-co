"use client";

import { motion } from "framer-motion";
import { services } from "@/data/home";
import ServiceCard from "@/components/features/ServiceCard";
import Footer from "@/components/layout/Footer";

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Header Spacing */}
      <div className="h-20 md:h-24" />

      {/* Hero Section */}
      <section className="section-spacing-lg relative overflow-hidden">
        <div className="container-luxury">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-gold)] mb-5">
              Services
            </p>
            <h1 className="mb-6">Capabilities built for mission-critical projects.</h1>
            <p className="text-lg md:text-xl text-[var(--color-silver)] leading-relaxed">
              We tailor delivery models to each project while keeping one priority fixed: predictable outcomes without sacrificing design intent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-spacing">
        <div className="container-luxury">
          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
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
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
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

      {/* Expertise Section */}
      <section className="section-spacing bg-[var(--color-charcoal)]/25">
        <div className="container-luxury">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[var(--color-platinum)] mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Areas of Expertise
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Master Planning", desc: "Large-scale, complex site planning" },
              { title: "Structural Engineering", desc: "Advanced seismic and performance design" },
              { title: "Sustainability", desc: "LEED and carbon-neutral strategies" },
              { title: "Project Management", desc: "Phased delivery and construction oversight" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="card-dark p-6 md:p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold text-[var(--color-gold)] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-silver)]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-spacing">
        <div className="container-luxury">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[var(--color-platinum)] mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Process
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            {[
              { step: 1, title: "Discovery", desc: "Understand project goals, constraints, and opportunities" },
              { step: 2, title: "Strategy", desc: "Develop delivery approach and execution roadmap" },
              { step: 3, title: "Design", desc: "Create innovative solutions within technical parameters" },
              { step: 4, title: "Delivery", desc: "Execute with precision and transparent communication" },
              { step: 5, title: "Handover", desc: "Commission and transfer operational control" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                className="flex items-start gap-6 md:gap-8 mb-8 md:mb-10"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[var(--color-gold)]/20 to-[var(--color-gold)]/5 border border-[var(--color-gold)]/30 flex items-center justify-center">
                  <span className="text-lg md:text-2xl font-bold text-[var(--color-gold)]">
                    {item.step}
                  </span>
                </div>
                <div className="flex-grow pt-2">
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--color-platinum)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-base text-[var(--color-silver)]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-70" aria-hidden="true" />
        <div className="container-luxury relative z-10">
          <motion.div
            className="card-dark p-8 md:p-12 lg:p-14 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-gold)] mb-5">
              Ready to Start
            </p>
            <h2 className="max-w-3xl mx-auto mb-6">
              Let's discuss your project requirements
            </h2>
            <motion.a
              href="/contact"
              className="btn-primary inline-block"
              whileHover={{ scale: 1.05 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
