"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ImageGalleryModal from "@/components/features/ImageGalleryModal";
import ProjectCard from "@/components/features/ProjectCard";
import { notFound } from "next/navigation";
import { projects } from "@/data/home";

interface ProjectDetailContentProps {
  slug: string;
}

export default function ProjectDetailContent({ slug }: ProjectDetailContentProps) {
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = project.relatedProjects
    ? projects.filter((p) => project.relatedProjects?.includes(p.slug))
    : projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <main className="min-h-screen">
      {/* Header Spacing */}
      <div className="h-20 md:h-24" />

      {/* Hero Banner */}
      <section className="relative h-[350px] md:h-[450px] lg:h-[550px] overflow-hidden">
        <img
          src={project.images.hero}
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-void)] via-[var(--bg-void)]/40 to-transparent" />

        {/* Back Button */}
        <motion.div
          className="absolute top-6 left-6 z-20"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-widest text-[var(--text-primary)] bg-[var(--bg-void)]/40 backdrop-blur-md border border-[var(--border-subtle)] rounded-lg hover:border-[var(--accent)]/30 hover:text-[var(--accent)] transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Projects</span>
          </Link>
        </motion.div>

        {/* Title */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 z-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="container-luxury pb-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-3">
              {project.name}
            </h1>
            <p className="text-base md:text-lg text-[var(--text-secondary)]">{project.location}</p>
          </div>
        </motion.div>
      </section>

      {/* Meta Bar */}
      <section className="section-spacing bg-[var(--bg-primary)]" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <div className="container-luxury">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div className="flex items-center gap-4">
              <span className="card-metadata-category">{project.category}</span>
              <p className="text-sm text-[var(--text-secondary)]">
                <span className="text-[var(--accent)]">Completed</span> {project.completionDate}
              </p>
            </div>
            <motion.a
              href="/contact"
              className="btn-primary w-fit"
              whileHover={{ scale: 1.03 }}
            >
              <span>Discuss This Project</span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="section-spacing">
        <div className="container-luxury">
          <h2 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-8">
            Project Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { label: "Client", value: project.client || "TBD" },
              { label: "Area", value: project.area || "On Request" },
              { label: "Budget", value: project.budget || "Confidential" },
              { label: "Services", value: project.services.join(", ") },
            ].map((fact, index) => (
              <motion.div
                key={fact.label}
                className="card-dark p-6"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <p className="text-overline mb-2">{fact.label}</p>
                <p className="text-sm text-[var(--text-secondary)]">{fact.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="section-spacing bg-[var(--bg-primary)]">
        <div className="container-luxury">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-6">
              Project Overview
            </h2>
            <div className="space-y-5">
              {project.description.split("\n").map((paragraph, index) => (
                paragraph.trim() && (
                  <p key={index} className="text-base text-[var(--text-secondary)] leading-relaxed">
                    {paragraph}
                  </p>
                )
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges & Solution */}
      {(project.challenges || project.solution) && (
        <section className="section-spacing">
          <div className="container-luxury">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.challenges && (
                <motion.div
                  className="card-dark p-7 md:p-8"
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="accent-line mb-5" />
                  <h3 className="text-xl font-bold text-[var(--accent)] mb-4">
                    Challenges
                  </h3>
                  <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                    {project.challenges}
                  </p>
                </motion.div>
              )}

              {project.solution && (
                <motion.div
                  className="card-dark p-7 md:p-8"
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="accent-line mb-5" />
                  <h3 className="text-xl font-bold text-[var(--accent)] mb-4">
                    Solution
                  </h3>
                  <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                    {project.solution}
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      <section className="section-spacing bg-[var(--bg-primary)]">
        <div className="container-luxury">
          <h2 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-8">
            Project Gallery
          </h2>
          <ImageGalleryModal images={project.images.gallery} />
        </div>
      </section>

      {/* Outcomes */}
      {project.outcomes && (
        <section className="section-spacing">
          <div className="container-luxury">
            <motion.div
              className="max-w-3xl mx-auto glass-gold p-8 md:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="accent-line mb-5" />
              <h3 className="text-xl font-bold text-[var(--accent)] mb-4">
                Results & Outcomes
              </h3>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                {project.outcomes}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="section-spacing bg-[var(--bg-primary)]">
          <div className="container-luxury">
            <h2 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-8">
              Related Projects
            </h2>
            <motion.div
              className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              {relatedProjects.map((related) => (
                <motion.div
                  key={related.slug}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <ProjectCard
                    slug={related.slug}
                    title={related.name}
                    location={related.location}
                    category={related.category}
                    description={related.scope}
                    image={related.images.hero}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Final CTA */}
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
            <p className="text-overline mb-5">Ready to Build</p>
            <h2 className="max-w-3xl mx-auto mb-6">
              Let&apos;s create something exceptional together
            </h2>
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
