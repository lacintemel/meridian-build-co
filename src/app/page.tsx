import Header from "@/components/layout/Header";
import About from "@/components/sections/About";
import ContactCta from "@/components/sections/ContactCta";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <ContactCta />
      </main>
      <footer className="border-t border-[var(--color-graphite)] py-8">
        <div className="container-luxury flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-[var(--color-ash)]">
            © {new Date().getFullYear()} Meridian Build Co. All rights reserved.
          </p>
          <p className="text-xs uppercase tracking-widest text-[var(--color-silver)]">
            Architecture • Construction • Infrastructure
          </p>
        </div>
      </footer>
    </>
  );
}
