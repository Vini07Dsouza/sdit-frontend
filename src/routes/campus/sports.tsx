import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ChatLauncher } from "@/components/site/ChatLauncher";
import { CampusPageHeader } from "@/components/site/CampusPageHeader";
import { campusFacilities } from "@/data/campusData";
import {
  Trophy,
  Activity,
  Dumbbell,
  Medal,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowLeft,
} from "lucide-react";

export const Route = createFileRoute("/campus/sports")({
  head: () => ({
    meta: [
      { title: "Sports & Games — Shree Devi Institute of Technology (SDIT)" },
      {
        name: "description",
        content:
          "Official Sports & Athletic Facilities at Shree Devi Institute of Technology (SDIT), Kenjar, Mangaluru. Playing ground, outdoor courts, gymnasium, indoor sports, and VTU tournament participation.",
      },
      {
        property: "og:title",
        content: "Sports & Games — Shree Devi Institute of Technology (SDIT)",
      },
      {
        property: "og:description",
        content:
          "Physical education, playing grounds, gymnasium, and competitive tournament participation at SDIT Mangaluru.",
      },
    ],
  }),
  component: CampusSportsPage,
});

function CampusSportsPage() {
  const facility = campusFacilities.find((f) => f.id === "sports")!;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <CampusPageHeader
          currentPage="sports"
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
                <p className="text-xl font-black tracking-tight text-navy sm:text-2xl lg:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground">{stat.label}</p>
                {stat.note && <p className="mt-1 text-xs text-muted-foreground">{stat.note}</p>}
              </div>
            ))}
          </div>

          {/* Sports & Games Image Banner */}
          <div className="mt-8 overflow-hidden rounded-3xl border border-border/80 shadow-soft">
            <img
              src="/images/sports_games.jpg"
              alt="Sports, Games & Physical Education"
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
                Sports &amp; Athletic Highlights
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

          {/* Detailed Verified Sections */}
          <div className="mt-12 space-y-10">
            {facility.sections.map((section, idx) => (
              <div
                key={section.title}
                className="rounded-3xl border border-border/80 bg-card p-6 shadow-soft sm:p-8 lg:p-10"
              >
                <div className="flex items-start justify-between gap-4 border-b border-border/60 pb-5">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-xl bg-surface text-navy">
                      {idx === 0 && <Activity className="size-5" />}
                      {idx === 1 && <Dumbbell className="size-5" />}
                      {idx === 2 && <Medal className="size-5" />}
                      {idx === 3 && <Trophy className="size-5" />}
                    </span>
                    <div>
                      <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                        Section 0{idx + 1}
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
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {section.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-2.5 rounded-xl border border-border/50 bg-surface/60 p-3.5 text-sm text-muted-foreground"
                      >
                        <span className="mt-1 size-1.5 shrink-0 rounded-full bg-navy dark:bg-lime" />
                        <span className="leading-normal">{pt}</span>
                      </li>
                    ))}
                  </ul>
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
              to="/campus/classrooms"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <ArrowLeft className="size-4" />
              Previous: Classrooms &amp; Seminar Halls
            </Link>

            <Link
              to="/campus/student-facilities"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Next: Student Facilities
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
