"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", projectType: "commercial", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
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

  const contactInfo = [
    {
      label: "Email",
      value: "hello@meridianbuild.co",
      href: "mailto:hello@meridianbuild.co",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
    },
    {
      label: "Phone",
      value: "+1 (206) 555-0187",
      href: "tel:+12065550187",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
    },
    {
      label: "Response Time",
      value: "Within 48 hours",
      href: null,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Header Spacing */}
      <div className="h-20 md:h-24" />

      {/* Page Hero */}
      <section className="section-spacing-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-50" />
        <div className="container-luxury relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-overline mb-5">Get In Touch</p>
            <h1 className="mb-6">Let&apos;s start your project together.</h1>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed font-light">
              Share your vision and let&apos;s explore how we can transform it into reality.
              Our team responds within 48 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-spacing">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
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
                  <label
                    htmlFor="contact-name"
                    className="block text-overline mb-3"
                  >
                    Full Name
                  </label>
                  <input
                    id="contact-name"
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
                  <label
                    htmlFor="contact-email"
                    className="block text-overline mb-3"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
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
                  <label
                    htmlFor="contact-project-type"
                    className="block text-overline mb-3"
                  >
                    Project Type
                  </label>
                  <select
                    id="contact-project-type"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="input-dark w-full cursor-pointer"
                  >
                    <option value="commercial">Commercial Construction</option>
                    <option value="infrastructure">Infrastructure & Civic</option>
                    <option value="mixeduse">Mixed-Use Development</option>
                    <option value="retrofit">Retrofit & Renovation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-overline mb-3"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
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
                    className="p-4 rounded-lg bg-[var(--success)]/10 border border-[var(--success)]/20 text-[var(--success)] text-sm flex items-center gap-3"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Message sent! We&apos;ll be in touch soon.
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    className="p-4 rounded-lg bg-[var(--error)]/10 border border-[var(--error)]/20 text-[var(--error)] text-sm flex items-center gap-3"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errorMessage}
                  </motion.div>
                )}

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={status !== "loading" ? { scale: 1.01 } : {}}
                >
                  <span>{status === "loading" ? "Sending..." : "Send Message"}</span>
                  {status !== "loading" && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-5"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {contactInfo.map((info) => (
                <div key={info.label} className="card-dark p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-[var(--accent)]/[0.08] border border-[var(--accent)]/[0.15] flex items-center justify-center text-[var(--accent)]">
                      {info.icon}
                    </div>
                    <h3 className="text-overline">{info.label}</h3>
                  </div>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-base md:text-lg font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-base text-[var(--text-secondary)]">{info.value}</p>
                  )}
                </div>
              ))}

              {/* Office hours card */}
              <div className="card-dark p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[var(--accent)]/[0.08] border border-[var(--accent)]/[0.15] flex items-center justify-center text-[var(--accent)]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                    </svg>
                  </div>
                  <h3 className="text-overline">Office</h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Seattle, WA<br />
                  Mon – Fri, 8:00 AM – 6:00 PM PST
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-spacing bg-[var(--bg-primary)]">
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
                <p className="text-4xl md:text-5xl font-bold text-[var(--accent)] mb-2">
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-[0.12em] text-[var(--text-secondary)]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
