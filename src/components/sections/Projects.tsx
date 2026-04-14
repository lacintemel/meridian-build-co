"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/home";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Projects() {
  const { ref, isInView } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="projects" className="section-spacing-lg overflow-hidden" ref={ref}>
      <div className="container-luxury">
        {/* Section Header */}
        <div className="mb-16 lg:mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <p className="text-overline mb-5">Portfolio</p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05] mb-6">
              Constructing <br />
              <span className="text-gradient-gold">Landmarks</span>.
            </h2>
            <p className="text-base md:text-lg text-[var(--text-secondary)] font-light leading-relaxed">
              A curated selection of technically demanding projects that define our expertise in
              structural integrity and architectural vision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/projects" className="btn-luxury">
              <span>View All Works</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          {projects.map((project, index) => {
            const gridSpans = [
              "lg:col-span-7 h-[400px] md:h-[500px] lg:h-[550px]",
              "lg:col-span-5 h-[400px] md:h-[500px] lg:h-[450px] lg:mt-16",
              "lg:col-span-12 h-[400px] md:h-[500px] lg:h-[550px]",
            ];
            const spanClass = gridSpans[index % gridSpans.length];

            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative overflow-hidden rounded-xl ${spanClass}`}
              >
                <Link href={`/projects/${project.slug}`} className="block h-full w-full">
                  {/* Image */}
                  <div className="absolute inset-0">
                    <img
                      src={project.images.hero}
                      alt={project.name}
                      className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-void)]/90 via-[var(--bg-void)]/30 to-transparent group-hover:via-[var(--bg-void)]/20 transition-all duration-500" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:p-10 z-10">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                      <span className="text-overline text-[0.625rem] mb-3 block opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-100">
                        {project.category} · {project.year}
                      </span>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-2 leading-tight">
                        {project.name}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] font-light max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-150">
                        {project.location}
                      </p>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-white/10 group-hover:border-[var(--accent)]/40 group-hover:w-16 group-hover:h-16 transition-all duration-500 rounded-tr-md z-10" />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
