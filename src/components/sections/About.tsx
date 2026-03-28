import { aboutMetrics } from "@/data/home";

export default function About() {
  return (
    <section id="about" className="section-spacing relative bg-[var(--color-charcoal)]/25">
      <div className="container-luxury">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
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
          </div>

          <div className="grid gap-4">
            {aboutMetrics.map((item) => (
              <article key={item.label} className="card-dark p-6 md:p-8">
                <p className="font-[var(--font-heading)] text-4xl md:text-5xl text-[var(--color-gold)] leading-none mb-3">
                  {item.value}
                </p>
                <p className="text-sm uppercase tracking-widest text-[var(--color-silver)]">
                  {item.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
