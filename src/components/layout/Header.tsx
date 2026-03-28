"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[var(--color-obsidian)]/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      {/* Gold accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-[var(--color-gold)] origin-left"
      />

      <div className="container-luxury">
        <nav className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <span className="text-2xl lg:text-3xl font-[var(--font-heading)] font-bold tracking-tight text-[var(--color-platinum)]">
                MERIDIAN
              </span>
              <span className="text-[10px] lg:text-xs tracking-[0.3em] text-[var(--color-gold)] -mt-1">
                BUILD CO.
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex items-center gap-10"
          >
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm font-[var(--font-heading)] uppercase tracking-widest text-[var(--color-silver)] hover:text-[var(--color-gold)] transition-colors duration-300 relative group"
                >
                  {item.label}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[1px] bg-[var(--color-gold)]"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </li>
            ))}
          </motion.ul>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block"
          >
            <Link
              href="#contact"
              className="btn-primary text-xs px-6 py-3"
            >
              <span>Start Your Project</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 6 : 0,
              }}
              className="w-6 h-[2px] bg-[var(--color-platinum)] origin-center"
            />
            <motion.span
              animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              className="w-6 h-[2px] bg-[var(--color-platinum)]"
            />
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -6 : 0,
              }}
              className="w-6 h-[2px] bg-[var(--color-platinum)] origin-center"
            />
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-0 top-0 bg-[var(--color-obsidian)] z-40"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-[var(--font-heading)] uppercase tracking-widest text-[var(--color-platinum)] hover:text-[var(--color-gold)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="mt-8"
              >
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary"
                >
                  <span>Start Your Project</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
