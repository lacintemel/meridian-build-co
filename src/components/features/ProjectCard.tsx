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
        className="card-dark flex flex-col group cursor-pointer h-full"
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
      >
        {/* Image */}
        <div className="relative h-52 md:h-60 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-elevated)] via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 md:p-7 flex flex-col flex-grow gap-3">
          <div className="flex items-center gap-3">
            <span className="card-metadata-category">{category}</span>
          </div>

          <h3 className="text-xl md:text-2xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300 line-clamp-2">
            {title}
          </h3>

          <p className="text-xs uppercase tracking-[0.15em] text-[var(--accent-muted)] font-medium">
            {location}
          </p>

          <p className="text-sm leading-relaxed text-[var(--text-secondary)] line-clamp-2 flex-grow">
            {description}
          </p>

          <div className="pt-3 mt-auto flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--accent)] font-semibold group-hover:gap-3 transition-all duration-300">
            <span>View Project</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
