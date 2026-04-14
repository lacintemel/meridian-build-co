"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
    ],
    contact: [
      { label: "hello@meridianbuild.co", href: "mailto:hello@meridianbuild.co" },
      { label: "+1 (206) 555-0187", href: "tel:+12065550187" },
    ],
    social: [
      { label: "LinkedIn", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Twitter", href: "#" },
    ],
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]">
      {/* Main footer content */}
      <div className="container-luxury py-16 md:py-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5 group">
              <span className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                MERIDIAN
              </span>
              <span className="text-[9px] tracking-[0.3em] text-[var(--accent)] block -mt-0.5 font-medium">
                BUILD CO.
              </span>
            </Link>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-xs mb-6">
              Precision engineering meets innovative design to create transformative spaces that stand the test of time.
            </p>
          </div>

          {/* Company */}
          <nav aria-label="Company links">
            <h3 className="text-overline mb-5">Company</h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-overline mb-5">Contact</h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.contact.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-overline mb-5">Follow</h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300 inline-flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                    <svg className="w-3 h-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="section-divider mb-8" />

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-[var(--text-tertiary)]">
            © {currentYear} Meridian Build Co. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <p className="text-xs text-[var(--text-tertiary)]">
              Architecture · Construction · Engineering
            </p>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-xs text-[var(--text-tertiary)] hover:text-[var(--accent)] transition-colors"
              aria-label="Back to top"
            >
              <span className="hidden sm:inline">Top</span>
              <svg
                className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
