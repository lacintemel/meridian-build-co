"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
  slug: string;
  title: string;
  location: string;
  category: string;
  description: string;
  image: string;
}

export default function ProjectCard({
  slug,
  title,
  location,
  category,
  description,
  image,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`}>
      <motion.article
        className="card-dark flex flex-col group overflow-hidden cursor-pointer"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        {/* Image */}
        <div className="relative h-48 md:h-56 overflow-hidden bg-[var(--color-graphite)]">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-obsidian)]/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="px-8 py-6 flex flex-col flex-grow gap-3">
          <div className="flex items-center justify-between">
            <motion.span
              className="card-metadata-category"
              whileHover={{ scale: 1.08 }}
            >
              {category}
            </motion.span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-platinum)] group-hover:text-[var(--color-gold)] transition-colors duration-300 line-clamp-2">
            {title}
          </h3>

          <p className="text-xs md:text-sm uppercase tracking-[0.22em] text-[var(--color-bronze)] font-medium truncate">
            📍 {location}
          </p>

          <p className="text-sm md:text-base leading-relaxed text-[var(--color-silver)] line-clamp-2 flex-grow">
            {description}
          </p>

          <motion.div
            className="pt-4 mt-auto"
            whileHover={{ x: 4 }}
          >
            <span className="text-xs uppercase tracking-widest text-[var(--color-gold)] font-semibold inline-flex items-center gap-2">
              View Project
              <span>→</span>
            </span>
          </motion.div>
        </div>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[var(--color-gold)]/0 via-transparent to-[var(--color-gold)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          initial={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.article>
    </Link>
  );
}
