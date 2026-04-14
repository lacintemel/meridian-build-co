"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
  number: number;
  title: string;
  description: string;
  details: string;
}

const serviceIcons = [
  <svg key="1" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>,
  <svg key="2" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
  </svg>,
  <svg key="3" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21" />
  </svg>,
];

export default function ServiceCard({
  number,
  title,
  description,
  details,
}: ServiceCardProps) {
  const iconIndex = (number - 1) % serviceIcons.length;

  return (
    <motion.article
      className="card-dark p-7 md:p-8 group cursor-default flex flex-col h-full"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
    >
      {/* Icon + Number */}
      <div className="flex items-center gap-3 mb-7">
        <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/[0.08] border border-[var(--accent)]/[0.15] flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--accent)]/[0.15] transition-colors duration-300">
          {serviceIcons[iconIndex]}
        </div>
        <span className="text-xs font-mono text-[var(--text-tertiary)] tracking-wider">
          0{number}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg md:text-xl font-semibold mb-3 text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300 line-clamp-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-[var(--text-secondary)] mb-5 line-clamp-2">
        {description}
      </p>

      {/* Divider */}
      <div className="h-[1px] w-full bg-gradient-to-r from-[var(--accent)]/20 to-transparent mb-5" />

      {/* Details */}
      <p className="text-xs md:text-sm text-[var(--text-tertiary)] leading-relaxed mt-auto line-clamp-3">
        {details}
      </p>
    </motion.article>
  );
}
