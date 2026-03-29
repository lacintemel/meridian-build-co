"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ImageGalleryModal from "@/components/features/ImageGalleryModal";
import ProjectCard from "@/components/features/ProjectCard";
import Footer from "@/components/layout/Footer";
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
      <section className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <img
          src={project.images.hero}
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-obsidian)] via-[var(--color-obsidian)]/50 to-transparent" />

        {/* Back Button */}
        <motion.div
          className="absolute top-8 left-8 z-20"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[var(--color-gold)] hover:text-[var(--color-platinum)] transition-colors"
          >
            <span>←</span>
            <span>Back to Projects</span>
          </Link>
        </motion.div>

        {/* Project Title - Overlaid */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="container-luxury pb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-platinum)] mb-4">
              {project.name}
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-silver)]">{project.location}</p>
          </div>
        </motion.div>
      </section>

      {/* Project Header Info */}
      <section className="section-spacing bg-[var(--color-charcoal)]/25">
        <div className="container-luxury">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <motion.div
                className="card-metadata-category mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {project.category}
              </motion.div>
              <p className="text-sm text-[var(--color-silver)]">
                <span className="text-[var(--color-gold)]">Completed</span> {project.completionDate}
              </p>
            </div>
            <motion.a
              href="/contact"
              className="btn-primary w-fit"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              Discuss This Project
            </motion.a>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="section-spacing">
        <div className="container-luxury">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-platinum)] mb-8">
            Project Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Client", value: project.client || "TBD" },
              { label: "Area", value: project.area || "On Request" },
              { label: "Budget", value: project.budget || "Confidential" },
              { label: "Services", value: project.services.join(", ") },
            ].map((fact, index) => (
              <motion.div
                key={fact.label}
                className="card-dark p-6 md:p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] font-semibold mb-3">
                  {fact.label}
                </p>
                <p className="text-sm md:text-base text-[var(--color-silver)]">{fact.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="section-spacing bg-[var(--color-charcoal)]/25">
        <div className="container-luxury">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-platinum)] mb-6">
              Project Overview
            </h2>
            <div className="space-y-6">
              {project.description.split("\n").map((paragraph, index) => (
                <p key={index} className="text-lg text-[var(--color-silver)] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges & Solution */}
      {(project.challenges || project.solution) && (
        <section className="section-spacing">
          <div className="container-luxury">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {project.challenges && (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-[var(--color-gold)] mb-4">
                    Challenges
                  </h3>
                  <p className="text-lg text-[var(--color-silver)] leading-relaxed">
                    {project.challenges}
                  </p>
                </motion.div>
              )}

              {project.solution && (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-[var(--color-gold)] mb-4">
                    Solution
                  </h3>
                  <p className="text-lg text-[var(--color-silver)] leading-relaxed">
                    {project.solution}
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Image Gallery */}
      <section className="section-spacing bg-[var(--color-charcoal)]/25">
        <div className="container-luxury">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-platinum)] mb-8">
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
              className="max-w-3xl mx-auto card-dark p-8 md:p-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-[var(--color-gold)] mb-6">
                Results & Outcomes
              </h3>
              <p className="text-lg text-[var(--color-silver)] leading-relaxed">
                {project.outcomes}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="section-spacing bg-[var(--color-charcoal)]/25">
          <div className="container-luxury">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-platinum)] mb-8">
              Related Projects
            </h2>
            <motion.div
              className="grid gap-6 lg:grid-cols-3"
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
                    hidden: { opacity: 0, y: 20 },
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
              Ready to Build
            </p>
            <h2 className="max-w-3xl mx-auto mb-6">
              Let's create something exceptional together
            </h2>
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
