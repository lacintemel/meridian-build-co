"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ContactCta() {
  const { ref, isInView } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="contact" className="section-spacing-lg relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-radial opacity-70" aria-hidden="true" />
      <div className="container-luxury relative z-10">
        <motion.div
          className="card-dark p-8 md:p-12 lg:p-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-xs uppercase tracking-[0.28em] text-[var(--color-gold)] mb-5"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.1 }}
          >
            Start A Conversation
          </motion.p>
          <motion.h2
            className="max-w-3xl mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.2 }}
          >
            Planning a complex build? Let&apos;s map scope, budget, and schedule together.
          </motion.h2>
          <motion.p
            className="max-w-2xl mb-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            Share your goals and constraints, and our pre-construction team will return a
            strategic first-pass plan in 48 hours.
          </motion.p>

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <motion.div
              className="text-sm uppercase tracking-widest text-[var(--color-silver)]"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.4 }}
            >
              <motion.p
                whileHover={{ x: 4, color: "var(--color-gold)" }}
                transition={{ duration: 0.2 }}
              >
                hello@meridianbuild.co
              </motion.p>
              <motion.p
                className="mt-2"
                whileHover={{ x: 4, color: "var(--color-gold)" }}
                transition={{ duration: 0.2 }}
              >
                +1 (206) 555-0187
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.5 }}
            >
              <Link href="mailto:hello@meridianbuild.co" className="btn-primary w-fit">
                <span>Book Project Consultation</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
