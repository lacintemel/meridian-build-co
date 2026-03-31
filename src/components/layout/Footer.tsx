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
    ],  
    contact: [
      { label: "Get in Touch", href: "/contact" },
      { label: "hello@meridianbuild.co", href: "mailto:hello@meridianbuild.co" },
      { label: "+1 (206) 555-0187", href: "tel:+12065550187" },
    ],
  };

  return (
    <footer className="border-t border-[var(--color-graphite)] py-12 md:py-16 bg-[var(--color-obsidian)]/50">
      <div className="container-luxury">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold text-[var(--color-platinum)]">
                MERIDIAN
              </span>
              <span className="text-xs tracking-[0.3em] text-[var(--color-gold)] block -mt-1">
                BUILD CO.
              </span>
            </Link>
            <p className="text-sm text-[var(--color-silver)] leading-relaxed max-w-xs">
              Precision engineering meets innovative design to create transformative spaces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] font-semibold mb-4">
              Company
            </h3>
            <nav className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[var(--color-silver)] hover:text-[var(--color-gold)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] font-semibold mb-4">
              Contact
            </h3>
            <nav className="flex flex-col gap-3">
              {footerLinks.contact.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[var(--color-silver)] hover:text-[var(--color-gold)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[var(--color-graphite)] to-transparent my-8" />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-[var(--color-ash)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>© {currentYear} Meridian Build Co. All rights reserved.</p>
          <p>Architecture • Construction • Engineering</p>
        </motion.div>
      </div>
    </footer>
  );
}
