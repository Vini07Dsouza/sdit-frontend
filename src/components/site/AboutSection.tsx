import { SectionHeading } from "./SectionHeading";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <SectionHeading eyebrow="The Institution" title="About SDIT" />

          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Shree Devi Institute of Technology (SDIT) is a premier technical institution located
              at Kenjar, Mangalore, Karnataka. It operates under the Shree Devi Education Trust,
              which was established in 1992 with the objective of providing quality education and
              developing professionally competent and responsible individuals.
            </p>
            <p>
              SDIT provides undergraduate, postgraduate and research-oriented education in
              engineering, technology, management and computer applications. Its programs include
              B.E., M.Tech., MBA, MCA and Ph.D. research.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#academics"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 shadow-soft"
            >
              Explore Academic Programs
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-transform duration-300 hover:scale-[1.01]">
            <img
              src="/images/shree-devi-education-trust-banner1.jpg"
              alt="Shree Devi Education Trust Boardroom & Campus"
              className="h-64 w-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="p-5">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Trust &amp; Leadership
              </span>
              <h4 className="mt-1 text-lg font-bold text-foreground">
                Shree Devi Education Trust (R.)
              </h4>
              <p className="mt-1 text-xs text-muted-foreground">
                Established in 1992, promoting excellence in professional technical education across
                Mangaluru.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xs">
              <img
                src="/images/about.jpg"
                alt="Students Collaborating"
                className="h-36 w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-4">
                <h5 className="text-sm font-bold text-foreground">Collaborative Learning</h5>
                <p className="text-[11px] text-muted-foreground mt-0.5">
                  Modern tech workspace &amp; project labs
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-5 shadow-xs flex flex-col justify-center">
              <dt className="text-[11px] font-bold text-primary uppercase tracking-wider">
                Campus Location
              </dt>
              <dd className="mt-1 text-sm font-bold text-foreground">Kenjar, Mangalore – 574142</dd>
              <div className="mt-3 border-t border-border/60 pt-3">
                <span className="text-[11px] text-muted-foreground font-semibold">
                  Affiliated to VTU &amp; Approved by AICTE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
