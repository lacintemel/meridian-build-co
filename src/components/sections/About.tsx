"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { aboutMetrics } from "@/data/home";
import { useScrollReveal, containerVariants, itemVariants } from "@/hooks/useScrollReveal";

function AnimatedCounter({ value, suffix = "", isInView }: { value: string; suffix?: string; isInView: boolean }) {
  const numValue = parseInt(value);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setDisplayValue(0);
      return;
    }

    let currentValue = 0;
    const increment = numValue / 20; // Animate over 20 steps
    const interval = setInterval(() => {
      currentValue += increment;
      if (currentValue >= numValue) {
        setDisplayValue(numValue);
        clearInterval(interval);
      } else {
        setDisplayValue(Math.round(currentValue));
      }
    }, 100);

    return () => clearInterval(interval);
  }, [numValue, isInView]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function About() {
  const { ref, isInView } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="about" className="section-spacing relative bg-[var(--color-charcoal)]/25" ref={ref}>
      <div className="container-luxury">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-gold)] mb-5">
              Who We Are
            </p>
            <h2 className="max-w-2xl mb-6">
              We engineer complexity into clarity.
            </h2>
            <p className="max-w-2xl mb-6">
              Meridian Build Co. is a multidisciplinary team focused on technically demanding
              projects where architecture quality and construction certainty have to coexist.
              Our process is rooted in precision planning, decisive leadership, and transparent
              collaboration with clients and consultants.
            </p>
            <p className="max-w-2xl">
              From pre-construction through commissioning, we combine digital coordination,
              rigorous safety standards, and craft-level execution to deliver spaces that hold
              up for decades.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {aboutMetrics.map((item) => (
              <motion.article
                key={item.label}
                variants={itemVariants}
                className="card-dark p-6 md:p-8 group"
                whileHover={{ y: -4 }}
              >
                <p className="font-[var(--font-heading)] text-4xl md:text-5xl text-[var(--color-gold)] leading-none mb-3 group-hover:text-[var(--color-gold-light)] transition-colors duration-300">
                  {item.value === "18+"
                    ? <>
                        <AnimatedCounter value="18" suffix="+" isInView={isInView} />
                      </>
                    : <AnimatedCounter value={item.value} isInView={isInView} />
                  }
                </p>
                <p className="text-sm uppercase tracking-widest text-[var(--color-silver)]">
                  {item.label}
                </p>
                <motion.div
                  className="mt-3 h-[1px] bg-[var(--color-gold)]"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  style={{ originX: 0 }}
                />
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
