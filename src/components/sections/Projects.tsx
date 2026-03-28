import Link from "next/link";
import { projects } from "@/data/home";

export default function Projects() {
  return (
    <section id="projects" className="section-spacing bg-gradient-dark">
      <div className="container-luxury">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-gold)] mb-5">
              Featured Work
            </p>
            <h2 className="mb-6">Recent projects across commercial and civic sectors.</h2>
            <p>
              Each engagement demands a different strategy. We adapt the execution model,
              sequencing, and quality controls to match the context.
            </p>
          </div>
          <Link href="#contact" className="btn-text self-start lg:self-auto">
            <span>Discuss your upcoming project</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.name} className="card-dark p-7 md:p-8 flex flex-col">
              <div className="flex items-center justify-between gap-4 mb-6 text-xs uppercase tracking-widest text-[var(--color-ash)]">
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>
              <h3 className="text-2xl mb-3">{project.name}</h3>
              <p className="text-sm uppercase tracking-[0.22em] text-[var(--color-bronze)] mb-5">
                {project.location}
              </p>
              <p className="mb-8">{project.scope}</p>
              <div className="mt-auto divider-gradient" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
