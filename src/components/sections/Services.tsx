"use client";

import { motion } from "framer-motion";
import { services } from "@/data/home";
import { useScrollReveal, containerVariants, itemVariants } from "@/hooks/useScrollReveal";

export default function Services() {
  const { ref, isInView } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="services" className="section-spacing" ref={ref}>
      <div className="container-luxury">
        <motion.div
          className="mb-14 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-gold)] mb-5">
            Services
          </p>
          <h2 className="mb-6">Capabilities built for mission-critical projects.</h2>
          <p>
            We tailor delivery models to each project while keeping one priority fixed:
            predictable outcomes without sacrificing design intent.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              variants={itemVariants}
              className="card-dark p-8 group cursor-pointer flex flex-col"
              whileHover={{ y: -8 }}
            >
              {/* Service Badge / Number */}
              <motion.div
                className="mb-6 flex items-center gap-3"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <motion.span
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-gold)]/20 to-[var(--color-gold)]/5 border border-[var(--color-gold)]/30"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{
                    delay: index * 0.1 + 0.4,
                    duration: 0.5,
                  }}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(201, 162, 39, 0.15)" }}
                >
                  <span className="text-sm font-bold text-[var(--color-gold)]">
                    0{index + 1}
                  </span>
                </motion.span>
                <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-bronze)] font-semibold">
                  Service
                </p>
              </motion.div>

              {/* Title */}
              <motion.h3
                className="text-2xl font-bold mb-4 text-[var(--color-platinum)] group-hover:text-[var(--color-gold)] transition-colors duration-300"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.1 + 0.35 }}
              >
                {service.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="text-base leading-relaxed text-[var(--color-silver)] mb-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                {service.description}
              </motion.p>

              {/* Divider */}
              <motion.div
                className="my-4"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: index * 0.1 + 0.45, duration: 0.4 }}
                style={{ originX: 0 }}
              >
                <div className="h-[1px] w-full bg-gradient-to-r from-[var(--color-gold)]/40 to-transparent" />
              </motion.div>

              {/* Details */}
              <motion.p
                className="text-sm text-[var(--color-ash)] leading-relaxed mt-auto"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                {service.details}
              </motion.p>

              {/* Hover Accent */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[var(--color-gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded"
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
