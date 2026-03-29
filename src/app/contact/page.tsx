"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "commercial",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      // TODO: Integrate with Supabase API route
      // For now, this is a placeholder that shows success
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", projectType: "commercial", message: "" });
        // Reset after 3 seconds
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setErrorMessage("Failed to send message. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("An error occurred. Please try again later.");
      console.error("Form submission error:", err);
    }
  };

  return (
    <main className="min-h-screen">
      {/* Header Spacing */}
      <div className="h-20 md:h-24" />

      {/* Hero Section */}
      <section className="section-spacing-lg relative overflow-hidden">
        <div className="container-luxury">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-gold)] mb-5">
              Get In Touch
            </p>
            <h1 className="mb-6">Let's start your project together.</h1>
            <p className="text-lg md:text-xl text-[var(--color-silver)] leading-relaxed">
              Share your vision and let's explore how we can transform it into reality. Our team responds within 48 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-spacing">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm uppercase tracking-widest text-[var(--color-gold)] font-semibold mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-dark w-full"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm uppercase tracking-widest text-[var(--color-gold)] font-semibold mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-dark w-full"
                    placeholder="hello@example.com"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-sm uppercase tracking-widest text-[var(--color-gold)] font-semibold mb-3">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="input-dark w-full bg-transparent cursor-pointer"
                  >
                    <option value="commercial" style={{ color: "var(--color-obsidian)" }}>Commercial Construction</option>
                    <option value="infrastructure" style={{ color: "var(--color-obsidian)" }}>Infrastructure & Civic</option>
                    <option value="mixeduse" style={{ color: "var(--color-obsidian)" }}>Mixed-Use Development</option>
                    <option value="retrofit" style={{ color: "var(--color-obsidian)" }}>Retrofit & Renovation</option>
                    <option value="other" style={{ color: "var(--color-obsidian)" }}>Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm uppercase tracking-widest text-[var(--color-gold)] font-semibold mb-3">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="input-dark w-full resize-none"
                    placeholder="Tell us about your project goals, challenges, and timeline..."
                  />
                </div>

                {/* Status Messages */}
                {status === "success" && (
                  <motion.div
                    className="p-4 bg-[var(--color-gold)]/20 border border-[var(--color-gold)]/50 rounded text-[var(--color-gold)]"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ✓ Message sent! We'll be in touch soon.
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    className="p-4 bg-red-500/20 border border-red-500/50 rounded text-red-500"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errorMessage}
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={status !== "loading" ? { scale: 1.02 } : {}}
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Email */}
              <div className="card-dark p-6 md:p-8">
                <h3 className="text-sm uppercase tracking-widest text-[var(--color-gold)] font-semibold mb-4">
                  Email
                </h3>
                <a
                  href="mailto:hello@meridianbuild.co"
                  className="text-lg md:text-xl font-bold text-[var(--color-platinum)] hover:text-[var(--color-gold)] transition-colors"
                >
                  hello@meridianbuild.co
                </a>
              </div>

              {/* Phone */}
              <div className="card-dark p-6 md:p-8">
                <h3 className="text-sm uppercase tracking-widest text-[var(--color-gold)] font-semibold mb-4">
                  Phone
                </h3>
                <a
                  href="tel:+12065550187"
                  className="text-lg md:text-xl font-bold text-[var(--color-platinum)] hover:text-[var(--color-gold)] transition-colors"
                >
                  +1 (206) 555-0187
                </a>
              </div>

              {/* Response Time */}
              <div className="card-dark p-6 md:p-8">
                <h3 className="text-sm uppercase tracking-widest text-[var(--color-gold)] font-semibold mb-4">
                  Response Time
                </h3>
                <p className="text-base text-[var(--color-silver)]">
                  We respond to all inquiries within 48 hours. For urgent matters, call us directly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-spacing bg-[var(--color-charcoal)]/25">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { label: "Years in Business", value: "18+" },
              { label: "Projects Completed", value: "50+" },
              { label: "Team Members", value: "150+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-4xl md:text-5xl font-bold text-[var(--color-gold)] mb-2">
                  {stat.value}
                </p>
                <p className="text-sm uppercase tracking-widest text-[var(--color-silver)]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
