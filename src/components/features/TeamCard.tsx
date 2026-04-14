"use client";

import { motion } from "framer-motion";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export default function TeamCard({ name, role, image, bio }: TeamCardProps) {
  return (
    <motion.div
      className="card-dark overflow-hidden group h-full flex flex-col"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      <div className="relative h-56 md:h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-elevated)] via-transparent to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        <h3 className="text-base md:text-lg font-semibold text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent)] transition-colors duration-300">
          {name}
        </h3>
        <p className="text-overline text-[0.6rem] mb-4">
          {role}
        </p>

        {bio && (
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-3">
            {bio}
          </p>
        )}
      </div>
    </motion.div>
  );
}
