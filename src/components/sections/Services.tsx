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
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              variants={itemVariants}
              className="card-dark p-7 md:p-8 group cursor-pointer"
              whileHover={{ y: -8 }}
            >
              <motion.p
                className="text-xs tracking-[0.26em] uppercase text-[var(--color-bronze)] mb-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <motion.span
                  className="inline-block text-[var(--color-gold)] font-bold"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{
                    delay: index * 0.1 + 0.4,
                    duration: 0.5,
                  }}
                >
                  0{index + 1}
                </motion.span>
              </motion.p>
              <h3 className="text-2xl mb-4 group-hover:text-[var(--color-gold)] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="mb-5">{service.description}</p>
              <p className="text-sm text-[var(--color-ash)]">{service.details}</p>
              <motion.div
                className="mt-6 w-12 h-[1px] bg-[var(--color-gold)]"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.4 }}
                style={{ originX: 0 }}
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
