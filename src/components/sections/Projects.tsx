"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/home";
import { useScrollReveal, containerVariants, itemVariants } from "@/hooks/useScrollReveal";

export default function Projects() {
  const { ref, isInView } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="projects" className="section-spacing bg-gradient-dark" ref={ref}>
      <div className="container-luxury">
        <motion.div
          className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-gold)] mb-5">
              Featured Work
            </p>
            <h2 className="mb-6">Recent projects across commercial and civic sectors.</h2>
            <p>
              Each engagement demands a different strategy. We adapt the execution model,
              sequencing, and quality controls to match the context.
            </p>
          </div>
          <Link href="#contact" className="btn-text self-start lg:self-auto">
            <span>Discuss your upcoming project</span>
            <motion.span
              aria-hidden="true"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>

        <motion.div
          className="grid gap-6 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.article
              key={project.name}
              variants={itemVariants}
              className="card-dark flex flex-col group overflow-hidden"
              whileHover={{ y: -8 }}
            >
              {/* Premium Metadata Bar */}
              <motion.div
                className="card-metadata"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.span
                  className="card-metadata-category"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.2 }}
                >
                  {project.category}
                </motion.span>
                <span className="card-metadata-year">{project.year}</span>
              </motion.div>

              {/* Animated Divider */}
              <motion.div
                className="px-8"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="card-metadata-divider" />
              </motion.div>

              {/* Content Section */}
              <div className="px-8 py-6 flex flex-col flex-grow gap-4 overflow-hidden">
                {/* Title */}
                <motion.h3
                  className="text-2xl md:text-3xl font-bold text-[var(--color-platinum)] leading-snug group-hover:text-[var(--color-gold)] transition-colors duration-300 line-clamp-2"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  {project.name}
                </motion.h3>

                {/* Location */}
                <motion.p
                  className="text-xs md:text-sm uppercase tracking-[0.22em] text-[var(--color-bronze)] font-medium truncate"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  📍 {project.location}
                </motion.p>

                {/* Description */}
                <motion.p
                  className="text-sm md:text-base leading-relaxed text-[var(--color-silver)] line-clamp-3"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  {project.scope}
                </motion.p>

                {/* Bottom Divider & CTA */}
                <motion.div
                  className="mt-auto pt-4 overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.div
                    className="divider-gradient mb-4"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ delay: 0.45, duration: 0.5 }}
                    style={{ originX: 0 }}
                  />
                  <motion.span
                    className="text-xs uppercase tracking-widest text-[var(--color-gold)] font-semibold inline-flex items-center gap-2 whitespace-nowrap"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    View Details
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      →
                    </motion.span>
                  </motion.span>
                </motion.div>
              </div>

              {/* Hover Overlay Gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[var(--color-gold)]/0 via-transparent to-[var(--color-gold)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                initial={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
