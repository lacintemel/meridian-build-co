"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
  number: number;
  title: string;
  description: string;
  details: string;
}

export default function ServiceCard({
  number,
  title,
  description,
  details,
}: ServiceCardProps) {
  return (
    <motion.article
      className="card-dark p-8 group cursor-pointer flex flex-col overflow-hidden"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {/* Service Badge / Number */}
      <motion.div
        className="mb-6 flex items-center gap-3"
        whileHover={{ scale: 1.1 }}
      >
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-gold)]/20 to-[var(--color-gold)]/5 border border-[var(--color-gold)]/30">
          <span className="text-sm font-bold text-[var(--color-gold)]">
            0{number}
          </span>
        </div>
        <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-bronze)] font-semibold whitespace-nowrap">
          Service
        </p>
      </motion.div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold mb-3 text-[var(--color-platinum)] group-hover:text-[var(--color-gold)] transition-colors duration-300 line-clamp-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm md:text-base leading-relaxed text-[var(--color-silver)] mb-4 line-clamp-2">
        {description}
      </p>

      {/* Divider */}
      <motion.div
        className="my-4"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        style={{ originX: 0 }}
        viewport={{ once: true }}
      >
        <div className="h-[1px] w-full bg-gradient-to-r from-[var(--color-gold)]/40 to-transparent" />
      </motion.div>

      {/* Details */}
      <p className="text-xs md:text-sm text-[var(--color-ash)] leading-relaxed mt-auto line-clamp-3">
        {details}
      </p>

      {/* Hover Accent */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-[var(--color-gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded"
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.article>
  );
}
