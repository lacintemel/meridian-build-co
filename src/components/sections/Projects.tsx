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
          className="grid gap-5 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.article
              key={project.name}
              variants={itemVariants}
              className="card-dark p-7 md:p-8 flex flex-col group"
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="flex items-center justify-between gap-4 mb-6 text-xs uppercase tracking-widest text-[var(--color-ash)]"
                whileHover={{ scale: 1.05 }}
              >
                <motion.span
                  className="px-3 py-1 rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)] transition-all duration-300"
                  whileHover={{ backgroundColor: "rgba(201, 162, 39, 0.2)" }}
                >
                  {project.category}
                </motion.span>
                <span>{project.year}</span>
              </motion.div>
              <h3 className="text-2xl mb-3 group-hover:text-[var(--color-gold)] transition-colors duration-300">
                {project.name}
              </h3>
              <p className="text-sm uppercase tracking-[0.22em] text-[var(--color-bronze)] mb-5">
                {project.location}
              </p>
              <p className="mb-8">{project.scope}</p>
              <motion.div
                className="mt-auto divider-gradient"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[var(--color-gold)]/0 to-[var(--color-gold)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded"
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
