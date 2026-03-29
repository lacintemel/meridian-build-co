"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/home";
import ProjectCard from "@/components/features/ProjectCard";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function ProjectsPage() {
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
              Featured Work
            </p>
            <h1 className="mb-6">Recent projects across commercial and civic sectors.</h1>
            <p className="text-lg md:text-xl text-[var(--color-silver)] leading-relaxed">
              Each engagement demands a different strategy. We adapt the execution model, sequencing, and quality controls to match the context.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-spacing">
        <div className="container-luxury">
          <motion.div
            className="grid gap-6 lg:grid-cols-3"
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
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
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

      {/* Stats Section */}
      <section className="section-spacing bg-[var(--color-charcoal)]/25">
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
                <p className="text-4xl md:text-5xl font-bold text-[var(--color-gold)] mb-2">
                  {stat.value}
                </p>
                <p className="text-sm uppercase tracking-widest text-[var(--color-silver)]">
                  {stat.label}
                </p>
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
              Let's Discuss
            </p>
            <h2 className="max-w-3xl mx-auto mb-6">
              Ready to start your next project?
            </h2>
            <p className="max-w-2xl mx-auto mb-10 text-lg text-[var(--color-silver)]">
              Share your goals and let our team create a strategic plan.
            </p>
            <motion.a
              href="/contact"
              className="btn-primary inline-block"
              whileHover={{ scale: 1.05 }}
            >
              Start Your Project
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
