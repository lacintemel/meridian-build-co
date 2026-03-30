"use client";

import { motion } from "framer-motion";
import { about, team } from "@/data/home";
import TeamCard from "@/components/features/TeamCard";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
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
              Who We Are
            </p>
            <h1 className="mb-6">We engineer complexity into clarity.</h1>
            <p className="text-lg md:text-xl text-[var(--color-silver)] leading-relaxed">
              Meridian Build Co. is a multidisciplinary team focused on technically demanding projects where architecture quality and construction certainty have to coexist.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-spacing py-16 md:py-20">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-gold)] mb-4">
                Mission
              </h2>
              <p className="text-lg text-[var(--color-silver)] leading-relaxed">
                {about.mission}
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-gold)] mb-4">
                Vision
              </h2>
              <p className="text-lg text-[var(--color-silver)] leading-relaxed">
                {about.vision}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-spacing bg-[var(--color-charcoal)]/25">
        <div className="container-luxury">
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-platinum)] mb-8">
              Our Story
            </h2>
            <p className="text-lg text-[var(--color-silver)] leading-relaxed mb-6">
              {about.story}
            </p>
            <p className="text-lg text-[var(--color-silver)] leading-relaxed">
              Today, we merge deep technical expertise with creative vision, delivering projects that set new standards for the built environment. Each project reflects our commitment to precision, innovation, and human-centered design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing">
        <div className="container-luxury">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[var(--color-platinum)] mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {about.values.map((value, index) => (
              <motion.div
                key={value}
                className="card-dark p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-xl md:text-2xl font-bold text-[var(--color-gold)]">
                  {value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-spacing bg-[var(--color-charcoal)]/25">
        <div className="container-luxury">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[var(--color-platinum)] mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Team
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TeamCard
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  bio={member.bio}
                />
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
              Let's Collaborate
            </p>
            <h2 className="max-w-3xl mx-auto mb-6">
              Ready to transform your vision into reality?
            </h2>
            <p className="max-w-2xl mx-auto mb-10 text-lg text-[var(--color-silver)]">
              Partner with our team of experts to create transformative spaces.
            </p>
            <motion.a
              href="/contact"
              className="btn-primary inline-block"
              whileHover={{ scale: 1.05 }}
            >
              Start a Project
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
