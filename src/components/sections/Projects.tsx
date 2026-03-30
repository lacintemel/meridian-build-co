"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/home";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Projects() {
  const { ref, isInView } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="projects" className="section-spacing bg-black overflow-hidden" ref={ref}>
      <div className="container-luxury">
        <div className="mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-gold)] mb-6">Portfolio</p>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] mb-8">
              Constructing <br /><span className="text-gradient-gold">Landmarks</span>.
            </h2>
            <p className="text-lg text-[var(--color-silver)] font-light">
              A curated selection of technically demanding projects that define our expertise in
              structural integrity and architectural vision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/projects" className="btn-luxury">
              View All Works
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {projects.map((project, index) => {
            // Creative grid spans for masonry feel
            const gridSpans = [
              "lg:col-span-7 lg:h-[600px]",
              "lg:col-span-5 lg:h-[500px] lg:mt-24",
              "lg:col-span-12 lg:h-[700px] lg:-mt-12",
            ];
            const spanClass = gridSpans[index % gridSpans.length];

            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative overflow-hidden bg-var(--color-charcoal) ${spanClass}`}
              >
                <Link href={`/projects/${project.slug}`} className="block h-full w-full">
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700 z-10" />
                  <img
                    src={project.images.hero}
                    alt={project.name}
                    className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-1000 ease-out"
                  />

                  {/* Subtle info overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 z-20">
                    <motion.div
                      className="translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]"
                    >
                      <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-gold)] mb-3 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {project.category} • {project.year}
                      </span>
                      <h3 className="text-3xl md:text-5xl font-bold text-white mb-2 leading-none">
                        {project.name}
                      </h3>
                      <p className="text-[var(--color-silver)] font-light text-sm md:text-base max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        {project.location}
                      </p>
                    </motion.div>
                  </div>

                  {/* Architectural accent lines */}
                  <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-white/20 group-hover:border-[var(--color-gold)] group-hover:w-24 group-hover:h-24 transition-all duration-700 z-20" />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
