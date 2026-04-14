"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/home";
import ProjectCard from "@/components/features/ProjectCard";
import Link from "next/link";

export default function ProjectsPage() {
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
            <p className="text-overline mb-5">Featured Work</p>
            <h1 className="mb-6">
              Recent projects across commercial and civic sectors.
            </h1>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed font-light">
              Each engagement demands a different strategy. We adapt the execution model,
              sequencing, and quality controls to match the context.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-spacing">
        <div className="container-luxury">
          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            animate="visible"
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
            {projects.map((project) => (
              <motion.div
                key={project.slug}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <ProjectCard
                  slug={project.slug}
                  title={project.name}
                  location={project.location}
                  category={project.category}
                  description={project.scope}
                  image={project.images.hero}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-spacing bg-[var(--bg-primary)]">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { label: "Projects Completed", value: "50+" },
              { label: "Value Delivered", value: "$3.2B+" },
              { label: "Team Members", value: "150+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-4xl md:text-5xl font-bold text-[var(--accent)] mb-2">
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-[0.12em] text-[var(--text-secondary)]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-60" />
        <div className="container-luxury relative z-10">
          <motion.div
            className="glass-gold p-8 md:p-12 lg:p-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-overline mb-5">Let&apos;s Discuss</p>
            <h2 className="max-w-3xl mx-auto mb-6">
              Ready to start your next project?
            </h2>
            <p className="max-w-2xl mx-auto mb-10 text-base text-[var(--text-secondary)] font-light">
              Share your goals and let our team create a strategic plan.
            </p>
            <motion.a
              href="/contact"
              className="btn-primary inline-flex"
              whileHover={{ scale: 1.03 }}
            >
              <span>Start Your Project</span>
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
