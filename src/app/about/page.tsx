"use client";

import { motion } from "framer-motion";
import { about, team } from "@/data/home";
import TeamCard from "@/components/features/TeamCard";

const valueIcons = [
  <svg key="precision" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.66-5.66a8 8 0 1111.31 0l-5.66 5.66a.75.75 0 01-1.06 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v.01" />
  </svg>,
  <svg key="innovation" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
  </svg>,
  <svg key="collab" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  </svg>,
  <svg key="sustain" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 10-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67" />
  </svg>,
];

export default function AboutPage() {
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
            <p className="text-overline mb-5">Who We Are</p>
            <h1 className="mb-6">We engineer complexity into clarity.</h1>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed font-light">
              Meridian Build Co. is a multidisciplinary team focused on technically demanding
              projects where architecture quality and construction certainty have to coexist.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-spacing bg-[var(--bg-primary)]">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              className="card-dark p-8 md:p-10"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="accent-line mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--accent)] mb-4">
                Mission
              </h2>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                {about.mission}
              </p>
            </motion.div>

            <motion.div
              className="card-dark p-8 md:p-10"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="accent-line mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--accent)] mb-4">
                Vision
              </h2>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                {about.vision}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-spacing">
        <div className="container-luxury">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-overline mb-5">Our Story</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8">
              Two Decades of Excellence
            </h2>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-6">
              {about.story}
            </p>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              Today, we merge deep technical expertise with creative vision, delivering projects
              that set new standards for the built environment. Each project reflects our
              commitment to precision, innovation, and human-centered design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing bg-[var(--bg-primary)]">
        <div className="container-luxury">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-overline mb-5">Core Principles</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
              Our Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {about.values.map((value, index) => (
              <motion.div
                key={value}
                className="card-dark p-7 text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-[var(--accent)]/[0.08] border border-[var(--accent)]/[0.15] flex items-center justify-center text-[var(--accent)] mb-5 group-hover:bg-[var(--accent)]/[0.15] transition-colors duration-300">
                  {valueIcons[index]}
                </div>
                <p className="text-base font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300">
                  {value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-spacing">
        <div className="container-luxury">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-overline mb-5">Leadership</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
              Our Team
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
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
            <p className="text-overline mb-5">Let&apos;s Collaborate</p>
            <h2 className="max-w-3xl mx-auto mb-6">
              Ready to transform your vision into reality?
            </h2>
            <p className="max-w-2xl mx-auto mb-10 text-base text-[var(--text-secondary)] font-light">
              Partner with our team of experts to create transformative spaces.
            </p>
            <motion.a
              href="/contact"
              className="btn-primary inline-flex"
              whileHover={{ scale: 1.03 }}
            >
              <span>Start a Project</span>
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
