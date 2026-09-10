import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ChatLauncher } from "@/components/site/ChatLauncher";
import { AdmissionsPageHeader } from "@/components/site/AdmissionsPageHeader";
import { OFFICIAL_LINKS, REQUIRED_DOCUMENTS } from "@/data/admissionsData";
import {
  GraduationCap,
  BookOpen,
  Briefcase,
  Terminal,
  FileCheck2,
  ExternalLink,
  ArrowRight,
  AlertCircle,
  HelpCircle,
} from "lucide-react";

export const Route = createFileRoute("/admissions/eligibility")({
  head: () => ({
    meta: [
      { title: "Eligibility Criteria — Shree Devi Institute of Technology (SDIT)" },
      {
        name: "description",
        content:
          "Official eligibility criteria for B.E., MBA, MCA, and M.Tech programs at Shree Devi Institute of Technology (SDIT), Mangaluru, verified from sdit.ac.in.",
      },
      {
        property: "og:title",
        content: "Eligibility Criteria — Shree Devi Institute of Technology (SDIT)",
      },
      {
        property: "og:description",
        content:
          "Check qualifying examination, minimum aggregate marks, subject requirements, and category-wise eligibility for SDIT courses.",
      },
    ],
  }),
  component: EligibilityCriteriaPage,
});

function EligibilityCriteriaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <AdmissionsPageHeader
          currentPage="eligibility"
          eyebrow="Academic Requirements"
          title="Eligibility Criteria"
          description="Detailed, official admission requirements for B.E. undergraduate courses and postgraduate MBA, MCA, and M.Tech. programs at SDIT, verified from sdit.ac.in/eligibility/."
        />

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          {/* Official Verification Notice */}
          <div className="mb-10 flex items-start gap-3.5 rounded-2xl border border-lime-500/30 bg-lime-50/50 p-4 text-lime-950 dark:bg-lime-950/20 dark:text-lime-200 sm:p-5">
            <FileCheck2 className="mt-0.5 size-5 shrink-0 text-lime-600 dark:text-lime-400" />
            <div className="text-xs leading-relaxed sm:text-sm">
              <p className="font-semibold">Official Source Verification</p>
              <p className="mt-0.5 opacity-90">
                The criteria below reflect the officially published eligibility criteria from{" "}
                <a
                  href={OFFICIAL_LINKS.eligibility}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline hover:opacity-80"
                >
                  sdit.ac.in/eligibility/
                </a>
                . Reservation and concession in aggregate percentages apply to Karnataka candidates
                as per government norms.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            {/* ==========================================
                A. BACHELOR OF ENGINEERING (B.E.)
               ========================================== */}
            <section
              id="be-eligibility"
              className="scroll-mt-28 rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-8 lg:p-10"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-5">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-navy text-lime">
                    <GraduationCap className="size-5" />
                  </span>
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase">
                      Section A — Undergraduate
                    </span>
                    <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                      Bachelor of Engineering (B.E.) Programs
                    </h2>
                  </div>
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  8 Engineering Branches
                </span>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="rounded-2xl border border-border/70 bg-card p-5">
                    <h3 className="text-sm font-bold text-foreground">1. Qualifying Examination</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Passed the two-year Pre-University Examination (PUC / 10+2) conducted by the
                      Pre-University Education Board of Karnataka or any other recognized equivalent
                      examination.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border/70 bg-card p-5">
                    <h3 className="text-sm font-bold text-foreground">
                      2. Compulsory Subject Combination
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Must have passed with <strong>Physics</strong> and{" "}
                      <strong>Mathematics</strong> as compulsory subjects, along with any one of the
                      following optional subjects:
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {[
                        "Chemistry",
                        "Biotechnology",
                        "Biology",
                        "Computer Science",
                        "Electronics",
                      ].map((s) => (
                        <span
                          key={s}
                          className="rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-border/70 bg-card p-5">
                    <h3 className="text-sm font-bold text-foreground">
                      3. Minimum Aggregate Marks
                    </h3>
                    <div className="mt-3 space-y-2 text-sm">
                      <div className="flex items-center justify-between rounded-lg bg-surface p-3">
                        <span className="font-medium text-foreground">General Merit:</span>
                        <span className="font-bold text-navy dark:text-lime">45% Aggregate</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-surface p-3">
                        <span className="font-medium text-foreground">
                          Karnataka SC, ST &amp; OBC:
                        </span>
                        <span className="font-bold text-navy dark:text-lime">40% Aggregate</span>
                      </div>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">
                      *Calculated based on Physics, Mathematics and the chosen optional subject.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border/70 bg-card p-5">
                    <h3 className="text-sm font-bold text-foreground">
                      4. Entrance Exam &amp; Counselling
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Admission requires rank/scores obtained in <strong>KCET</strong> (KEA
                      Karnataka), <strong>COMEDK UGET</strong>, or <strong>JEE (Main)</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* ==========================================
                B. MASTER OF BUSINESS ADMINISTRATION (MBA)
               ========================================== */}
            <section
              id="mba-eligibility"
              className="scroll-mt-28 rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-8 lg:p-10"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-5">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-navy text-lime">
                    <Briefcase className="size-5" />
                  </span>
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase">
                      Section B — Postgraduate
                    </span>
                    <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                      Master of Business Administration (MBA)
                    </h2>
                  </div>
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  PGCET Code: B281
                </span>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl border border-border/70 bg-card p-5">
                  <h3 className="text-sm font-bold text-foreground">Qualifying Degree</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Bachelor&apos;s Degree of a minimum of <strong>3 years&apos; duration</strong>{" "}
                    in any discipline from a recognized University or equivalent.
                  </p>
                </div>

                <div className="rounded-2xl border border-border/70 bg-card p-5">
                  <h3 className="text-sm font-bold text-foreground">Minimum Marks</h3>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                    <li>
                      <strong className="text-foreground">General Merit:</strong> At least{" "}
                      <strong>50%</strong> aggregate marks across all subjects (including languages)
                      in all years of the degree.
                    </li>
                    <li>
                      <strong className="text-foreground">Karnataka SC, ST &amp; Cat-I:</strong> At
                      least <strong>45%</strong> aggregate marks.
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-border/70 bg-card p-5">
                  <h3 className="text-sm font-bold text-foreground">Entrance Examination</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Admission is based on rank/scores in <strong>Karnataka PGCET</strong> (conducted
                    by KEA), <strong>KMAT</strong>, or equivalent entrance examinations.
                  </p>
                </div>
              </div>
            </section>

            {/* ==========================================
                C. MASTER OF COMPUTER APPLICATIONS (MCA)
               ========================================== */}
            <section
              id="mca-eligibility"
              className="scroll-mt-28 rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-8 lg:p-10"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-5">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-navy text-lime">
                    <Terminal className="size-5" />
                  </span>
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase">
                      Section C — Postgraduate
                    </span>
                    <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                      Master of Computer Applications (MCA)
                    </h2>
                  </div>
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  PGCET Code: C476
                </span>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="rounded-2xl border border-border/70 bg-card p-5">
                    <h3 className="text-sm font-bold text-foreground">Qualifying Degree</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Passed recognized <strong>BCA</strong> or{" "}
                      <strong>Bachelor&apos;s Degree in Computer Science Engineering</strong> or
                      equivalent.
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      OR passed <strong>B.Sc. / B.Com. / B.A.</strong> with Mathematics at 10+2
                      level or at the graduation level.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border/70 bg-card p-5">
                    <h3 className="text-sm font-bold text-foreground">
                      Mathematics Requirement &amp; Bridge Courses
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Students without a Mathematics background at 10+2 or degree level must
                      complete bridge courses as notified by the university after admission.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-border/70 bg-card p-5">
                    <h3 className="text-sm font-bold text-foreground">Minimum Aggregate Marks</h3>
                    <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center justify-between rounded-lg bg-surface p-2.5">
                        <span className="font-medium text-foreground">General Merit:</span>
                        <span className="font-bold text-navy dark:text-lime">50% Aggregate</span>
                      </li>
                      <li className="flex items-center justify-between rounded-lg bg-surface p-2.5">
                        <span className="font-medium text-foreground">
                          Karnataka SC, ST &amp; Cat-I:
                        </span>
                        <span className="font-bold text-navy dark:text-lime">45% Aggregate</span>
                      </li>
                    </ul>
                    <p className="mt-2 text-xs text-muted-foreground">
                      *Across all subjects in all years/semesters of the degree examination.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border/70 bg-card p-5">
                    <h3 className="text-sm font-bold text-foreground">Entrance Examination</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Admission is through <strong>Karnataka PGCET</strong> (KEA) or{" "}
                      <strong>KMAT</strong> entrance examination.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* ==========================================
                D. M.TECH. – CONSTRUCTION TECHNOLOGY
               ========================================== */}
            <section
              id="mtech-eligibility"
              className="scroll-mt-28 rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-8 lg:p-10"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-5">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-navy text-lime">
                    <BookOpen className="size-5" />
                  </span>
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase">
                      Section D — Postgraduate Engineering
                    </span>
                    <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                      M.Tech. – Construction Technology
                    </h2>
                  </div>
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  PGCET Code: T868
                </span>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl border border-border/70 bg-card p-5">
                  <h3 className="text-sm font-bold text-foreground">Qualifying Degree</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Passed B.E. / B.Tech. in <strong>Civil Engineering</strong> or equivalent
                    examination as prescribed by VTU and the Competent Authority.
                  </p>
                </div>

                <div className="rounded-2xl border border-border/70 bg-card p-5">
                  <h3 className="text-sm font-bold text-foreground">Minimum Marks</h3>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                    <li>
                      <strong className="text-foreground">General Merit:</strong> Aggregate minimum{" "}
                      <strong>50%</strong> marks in all subjects across all years/semesters.
                    </li>
                    <li>
                      <strong className="text-foreground">Karnataka SC, ST &amp; Cat-I:</strong>{" "}
                      Aggregate minimum <strong>45%</strong> marks.
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-border/70 bg-card p-5">
                  <h3 className="text-sm font-bold text-foreground">GATE &amp; PGCET</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Candidates with a valid <strong>GATE score</strong> are given preference;
                    admission is also available through <strong>Karnataka PGCET</strong>.
                  </p>
                </div>
              </div>
            </section>

            {/* Required Documents Checklist */}
            <section className="rounded-3xl border border-border bg-surface p-6 sm:p-8 lg:p-10">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                Required Documents for Admission
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Original certificates and self-attested photocopies required during document
                verification at SDIT.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {REQUIRED_DOCUMENTS.map((doc) => (
                  <div
                    key={doc.name}
                    className="flex flex-col justify-between rounded-2xl border border-border/70 bg-card p-5 shadow-xs"
                  >
                    <div>
                      <span className="inline-block rounded-md bg-secondary px-2 py-0.5 text-[10px] font-semibold text-secondary-foreground">
                        {doc.appliesTo}
                      </span>
                      <h3 className="mt-2 text-sm font-bold text-foreground">{doc.name}</h3>
                      <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                        {doc.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Action Links */}
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6">
            <div>
              <h3 className="font-bold text-foreground">Ready to start your application?</h3>
              <p className="text-sm text-muted-foreground">
                Proceed to the Application Process page to review step-by-step guidance.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/admissions/application-process"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-navy/90 dark:bg-lime dark:text-navy"
              >
                Application Process <ArrowRight className="size-4" />
              </Link>
              <a
                href={OFFICIAL_LINKS.applyNow}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
              >
                Apply Online <ExternalLink className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ChatLauncher />
    </div>
  );
}
