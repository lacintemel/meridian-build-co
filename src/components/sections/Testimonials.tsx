"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
    {
        quote: "Meridian's approach to technical complexity is unmatched. They delivered our flagship campus with precision that exceeded every architectural requirement.",
        author: "Robert Sterling",
        role: "CEO, Harbor Development Group",
    },
    {
        quote: "The symmetry and balance they bring to high-stakes infrastructure projects is a testament to their deep understanding of both form and function.",
        author: "Elena Rossi",
        role: "Chief Architect, Rossi & Associates",
    },
];

export default function Testimonials() {
    const { ref, isInView } = useScrollReveal({ threshold: 0.2 });

    return (
        <section
            ref={ref}
            className="section-spacing bg-black relative overflow-hidden"
        >
            <div className="absolute inset-0 grid-structure opacity-5 pointer-events-none" />

            <div className="container-luxury relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-gold)] mb-6">
                            Client Trust
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            What it means to build with <span className="text-gradient-gold">Precision</span>.
                        </h2>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 1, delay: 0.2 + i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="relative p-12 glass-gold group"
                        >
                            <span className="absolute -top-6 -left-4 text-8xl text-[var(--color-gold)] opacity-20 font-serif">"</span>
                            <p className="text-xl md:text-2xl text-[var(--color-platinum)] leading-relaxed italic mb-10 relative z-10">
                                {t.quote}
                            </p>
                            <div className="flex flex-col gap-1">
                                <span className="text-[var(--color-gold)] font-bold tracking-widest uppercase text-sm">{t.author}</span>
                                <span className="text-[var(--color-ash)] text-xs uppercase tracking-widest">{t.role}</span>
                            </div>
                            <motion.div
                                className="absolute bottom-0 right-0 w-24 h-24 border-r border-b border-[var(--color-gold)] opacity-40 group-hover:w-full group-hover:h-full transition-all duration-700 pointer-events-none"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
