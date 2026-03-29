"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export default function TeamCard({ name, role, image, bio }: TeamCardProps) {
  return (
    <motion.div
      className="card-dark overflow-hidden group"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      <div className="relative h-64 md:h-72 overflow-hidden bg-[var(--color-graphite)]">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-obsidian)]/80 to-transparent group-hover:from-[var(--color-obsidian)]/60 transition-all duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <h3 className="text-lg md:text-xl font-bold text-[var(--color-platinum)] mb-1">
          {name}
        </h3>
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] font-semibold mb-4">
          {role}
        </p>

        {bio && (
          <motion.p
            className="text-sm text-[var(--color-silver)] leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            {bio}
          </motion.p>
        )}
      </div>

      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[var(--color-gold)]/0 to-[var(--color-gold)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        initial={{ opacity: 0 }}
      />
    </motion.div>
  );
}
