import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ChatLauncher } from "@/components/site/ChatLauncher";
import { CampusPageHeader } from "@/components/site/CampusPageHeader";
import { campusFacilities } from "@/data/campusData";
import {
  FlaskConical,
  Code2,
  Cpu,
  Plane,
  Building2,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowLeft,
} from "lucide-react";

export const Route = createFileRoute("/campus/laboratories")({
  head: () => ({
    meta: [
      { title: "Laboratories — Shree Devi Institute of Technology (SDIT)" },
      {
        name: "description",
        content:
          "Explore the state-of-the-art departmental laboratories at Shree Devi Institute of Technology (SDIT), Kenjar, Mangaluru. Specialized labs across 10 engineering and computing disciplines.",
      },
      {
        property: "og:title",
        content: "Laboratories — Shree Devi Institute of Technology (SDIT)",
      },
      {
        property: "og:description",
        content:
          "Hands-on practical learning facilities and modern equipment across all engineering departments at SDIT Mangaluru.",
      },
    ],
  }),
  component: CampusLaboratoriesPage,
});

function CampusLaboratoriesPage() {
  const facility = campusFacilities.find((f) => f.id === "laboratories")!;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <CampusPageHeader
          currentPage="laboratories"
          eyebrow="Campus Infrastructure"
          title={facility.title}
          description={facility.summary}
        />

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          {/* Key Verified Statistics */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
            {facility.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border/80 bg-card p-5 shadow-xs transition-colors hover:border-navy/40"
              >
                <p className="text-2xl font-black tracking-tight text-navy sm:text-3xl lg:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground">{stat.label}</p>
                {stat.note && <p className="mt-1 text-xs text-muted-foreground">{stat.note}</p>}
              </div>
            ))}
          </div>

          {/* Laboratories Image Banner */}
          <div className="mt-8 overflow-hidden rounded-3xl border border-border/80 shadow-soft">
            <img
              src="/images/laboratories.jpg"
              alt="Departmental Laboratories & Research Facilities"
              className="h-72 w-full object-cover sm:h-96"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Highlights */}
          <div className="mt-10 rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-8">
            <div className="flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-lg bg-navy text-lime">
                <Sparkles className="size-4" />
              </span>
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                Laboratory Strengths &amp; Practical Learning
              </h2>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {facility.keyHighlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-3 rounded-xl border border-border/60 bg-background p-4"
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-lime-700 dark:text-lime-400" />
                  <span className="text-sm font-medium text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Department Laboratory Sections */}
          <div className="mt-12 space-y-10">
            {facility.sections.map((section, idx) => (
              <div
                key={section.title}
                className="rounded-3xl border border-border/80 bg-card p-6 shadow-soft sm:p-8 lg:p-10"
              >
                <div className="flex items-start justify-between gap-4 border-b border-border/60 pb-5">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-xl bg-surface text-navy">
                      {idx === 0 && <Code2 className="size-5" />}
                      {idx === 1 && <Cpu className="size-5" />}
                      {idx === 2 && <Plane className="size-5" />}
                      {idx === 3 && <Building2 className="size-5" />}
                      {idx === 4 && <FlaskConical className="size-5" />}
                    </span>
                    <div>
                      <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                        Wing 0{idx + 1}
                      </span>
                      <h3 className="text-lg font-bold text-foreground sm:text-xl">
                        {section.title}
                      </h3>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-lime/15 px-2.5 py-0.5 text-xs font-semibold text-lime-800 dark:text-lime-300">
                    <ShieldCheck className="size-3" />
                    Verified
                  </span>
                </div>

                <p className="mt-5 text-base leading-relaxed text-foreground/90">
                  {section.description}
                </p>

                {section.points && (
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {section.points.map((pt) => {
                      const [label, desc] = pt.includes(":") ? pt.split(":") : ["", pt];
                      return (
                        <div
                          key={pt}
                          className="rounded-xl border border-border/60 bg-surface/60 p-4 text-sm"
                        >
                          {label ? (
                            <>
                              <p className="font-bold text-foreground">{label.trim()}</p>
                              <p className="mt-1 text-muted-foreground">{desc.trim()}</p>
                            </>
                          ) : (
                            <p className="text-muted-foreground">{pt}</p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {section.notice && (
                  <div className="mt-5 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50/70 p-4 text-xs text-amber-900 dark:border-amber-900/40 dark:bg-amber-950/20 dark:text-amber-300">
                    <AlertCircle className="mt-0.5 size-4 shrink-0" />
                    <p className="leading-relaxed">{section.notice}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Official Verification Box */}
          <div className="mt-12 flex flex-col items-start gap-4 rounded-3xl border border-navy/20 bg-gradient-to-r from-navy/5 via-lime/5 to-transparent p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-start gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-navy text-lime">
                <ShieldCheck className="size-5" />
              </span>
              <div>
                <h4 className="text-base font-bold text-foreground sm:text-lg">
                  Official Verification Source
                </h4>
                <p className="text-sm text-muted-foreground">
                  {facility.officialVerification.source} —{" "}
                  {facility.officialVerification.verificationNote}
                </p>
              </div>
            </div>

            <a
              href="https://sdit.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
            >
              Visit Official SDIT Website <ExternalLink className="size-3" />
            </a>
          </div>

          {/* Bottom Navigation */}
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
            <Link
              to="/campus/library"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <ArrowLeft className="size-4" />
              Previous: Central Library
            </Link>

            <Link
              to="/campus/computer-facilities"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Next: Computer Facilities
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <ChatLauncher />
    </div>
  );
}
