import {
  undergraduatePrograms,
  postgraduatePrograms,
  otherProgramsData,
} from "@/data/programsData";
import {
  GraduationCap,
  BookOpen,
  Atom,
  CheckCircle2,
  Sparkles,
  ArrowDownRight,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function ProgramsSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const categories = [
    {
      id: "undergraduate-programs",
      title: "Undergraduate Programs",
      subtitle: "8 B.E. Disciplines",
      icon: GraduationCap,
      count: "8 Courses",
      badge: "B.E. Degree",
    },
    {
      id: "postgraduate-programs",
      title: "Postgraduate Programs",
      subtitle: "M.Tech, MBA & MCA",
      icon: BookOpen,
      count: "3 Programs",
      badge: "Master's Degree",
    },
    {
      id: "other-programs",
      title: "Other Programs",
      subtitle: "Research Centre & Ph.D.",
      icon: Atom,
      count: "4 Research Areas",
      badge: "Doctoral Research",
    },
  ];

  return (
    <section id="academics" className="scroll-mt-24 bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Academics"
          title="Courses &amp; Programs"
          description="Explore our industry-aligned undergraduate engineering degrees, postgraduate programs, and doctoral research opportunities."
          align="center"
        />

        {/* 3 Quick Navigation Category Cards that direct to each part */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(cat.id);
                }}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-surface p-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-navy hover:bg-card hover:shadow-soft sm:p-6"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span
                      aria-hidden="true"
                      className="grid size-11 place-items-center rounded-xl bg-background text-navy transition-colors group-hover:bg-gradient-navy group-hover:text-lime"
                    >
                      <Icon className="size-5" />
                    </span>
                    <span className="rounded-full bg-navy/5 px-2.5 py-0.5 text-[11px] font-semibold text-muted-foreground group-hover:text-foreground">
                      {cat.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 text-base font-bold text-foreground sm:text-lg">
                    {cat.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{cat.subtitle}</p>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-3.5 text-xs font-semibold text-violet group-hover:text-navy">
                  <span>{cat.count}</span>
                  <span className="inline-flex items-center gap-1">
                    View section <ArrowDownRight className="size-3.5" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* ========================================================
            PART 1: UNDERGRADUATE PROGRAMS – SDIT
           ======================================================== */}
        <div
          id="undergraduate-programs"
          className="mt-16 scroll-mt-28 rounded-3xl border border-border/80 bg-surface p-6 shadow-soft sm:p-8 lg:p-10"
        >
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="grid size-8 place-items-center rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="size-4" />
                </span>
                <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  Undergraduate Programs – SDIT
                </h3>
              </div>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Four-year Bachelor of Engineering (B.E.) programs approved by AICTE &amp; affiliated
                with VTU.
              </p>
            </div>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              8 Engineering Disciplines
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {undergraduatePrograms.map((program) => (
              <div
                key={program.id}
                className="flex flex-col justify-between rounded-2xl border border-border/70 bg-card p-5 shadow-xs transition-colors hover:border-navy/40"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-base font-bold text-foreground">{program.title}</h4>
                    <span className="shrink-0 rounded-md bg-secondary px-2 py-0.5 text-[11px] font-medium text-secondary-foreground">
                      {program.badge}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            PART 2: POSTGRADUATE PROGRAMS – SDIT
           ======================================================== */}
        <div
          id="postgraduate-programs"
          className="mt-12 scroll-mt-28 rounded-3xl border border-border/80 bg-surface p-6 shadow-soft sm:p-8 lg:p-10"
        >
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="grid size-8 place-items-center rounded-lg bg-primary/10 text-primary">
                  <BookOpen className="size-4" />
                </span>
                <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  Postgraduate Programs – SDIT
                </h3>
              </div>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Advanced technical and professional management education at SDIT.
              </p>
            </div>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              M.Tech, MBA &amp; MCA
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {postgraduatePrograms.map((program) => (
              <div
                key={program.id}
                className="flex flex-col justify-between rounded-2xl border border-border/70 bg-card p-5 shadow-xs transition-colors hover:border-navy/40 sm:p-6"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-base font-bold text-foreground">{program.title}</h4>
                    <span className="shrink-0 rounded-md bg-secondary px-2 py-0.5 text-[11px] font-medium text-secondary-foreground">
                      {program.badge}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            PART 3: OTHER PROGRAMS – SDIT (RESEARCH CENTRE - PH.D.)
           ======================================================== */}
        <div
          id="other-programs"
          className="mt-12 scroll-mt-28 rounded-3xl border border-border/80 bg-surface p-6 shadow-soft sm:p-8 lg:p-10"
        >
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="grid size-8 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Atom className="size-4" />
                </span>
                <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  Other Programs – SDIT
                </h3>
              </div>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Doctoral research opportunities and knowledge generation at SDIT.
              </p>
            </div>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              Ph.D. Research Centre
            </span>
          </div>

          <div className="rounded-2xl border border-border/70 bg-card p-6 shadow-xs sm:p-8">
            <div className="flex items-start gap-4">
              <div
                aria-hidden="true"
                className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-navy text-lime"
              >
                <Sparkles className="size-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-foreground sm:text-xl">
                  {otherProgramsData.title}
                </h4>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {otherProgramsData.description}
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-border/60 pt-6">
              <h5 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                Research Areas listed in SDIT documents:
              </h5>

              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {otherProgramsData.researchAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2.5 rounded-xl border border-border/60 bg-surface p-3 text-sm font-semibold text-foreground shadow-2xs"
                  >
                    <CheckCircle2 className="size-4 shrink-0 text-lime-600 dark:text-lime-400" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
