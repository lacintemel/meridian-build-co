import { services } from "@/data/home";

export default function Services() {
  return (
    <section id="services" className="section-spacing">
      <div className="container-luxury">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-gold)] mb-5">
            Services
          </p>
          <h2 className="mb-6">Capabilities built for mission-critical projects.</h2>
          <p>
            We tailor delivery models to each project while keeping one priority fixed:
            predictable outcomes without sacrificing design intent.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.title} className="card-dark p-7 md:p-8">
              <p className="text-xs tracking-[0.26em] uppercase text-[var(--color-bronze)] mb-6">
                0{index + 1}
              </p>
              <h3 className="text-2xl mb-4">{service.title}</h3>
              <p className="mb-5">{service.description}</p>
              <p className="text-sm text-[var(--color-ash)]">{service.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
