import Link from "next/link";

export default function ContactCta() {
  return (
    <section id="contact" className="section-spacing-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-70" aria-hidden="true" />
      <div className="container-luxury relative z-10">
        <div className="card-dark p-8 md:p-12 lg:p-14">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-gold)] mb-5">
            Start A Conversation
          </p>
          <h2 className="max-w-3xl mb-6">
            Planning a complex build? Let&apos;s map scope, budget, and schedule together.
          </h2>
          <p className="max-w-2xl mb-10">
            Share your goals and constraints, and our pre-construction team will return a
            strategic first-pass plan in 48 hours.
          </p>

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="text-sm uppercase tracking-widest text-[var(--color-silver)]">
              <p>hello@meridianbuild.co</p>
              <p className="mt-2">+1 (206) 555-0187</p>
            </div>
            <Link href="mailto:hello@meridianbuild.co" className="btn-primary w-fit">
              <span>Book Project Consultation</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
