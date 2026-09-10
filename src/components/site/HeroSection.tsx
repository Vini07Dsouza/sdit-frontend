import { ArrowRight, Sparkle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-navy text-navy-foreground">
      <div aria-hidden="true" className="absolute inset-0 bg-tech-grid opacity-70" />
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-24 size-96 rounded-full bg-violet/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-20 size-96 rounded-full bg-lime/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="animate-rise max-w-3xl">
          <p className="text-eyebrow inline-flex items-center gap-2 rounded-full border border-navy-foreground/20 px-3.5 py-1.5 text-lime">
            <Sparkle aria-hidden="true" className="size-3.5" />
            Engineering &amp; Technology Education
          </p>

          <h1 className="mt-6 text-4xl leading-[1.08] font-semibold sm:text-5xl lg:text-6xl">
            Shree Devi Institute of Technology
            <span className="mt-3 block text-lg font-medium text-navy-foreground/70 sm:text-xl">
              Mangaluru, Karnataka
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
            Shree Devi Institute of Technology (SDIT), Mangaluru, is a premier technical institution
            offering undergraduate, postgraduate, and research programs in engineering, technology,
            management, and computer applications. The institute focuses on quality education,
            practical learning, industry exposure, innovation, and the overall development of
            students.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#academics"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-lime px-6 py-3.5 text-sm font-bold text-lime-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Explore Academics
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-foreground/25 px-6 py-3.5 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-soft"
            >
              About SDIT
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-white/15 bg-card/10 p-2 shadow-2xl backdrop-blur-md">
          <img
            src="/images/shree-devi-education-trust-banner1.jpg"
            alt="Shree Devi Education Trust Boardroom & Campus"
            className="h-72 w-full rounded-2xl object-cover sm:h-96"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
}
