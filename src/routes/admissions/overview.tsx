import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ChatLauncher } from "@/components/site/ChatLauncher";
import { AdmissionsPageHeader } from "@/components/site/AdmissionsPageHeader";
import { SDIT_CODES, OFFICIAL_CONTACT, OFFICIAL_LINKS } from "@/data/admissionsData";
import {
  undergraduatePrograms,
  postgraduatePrograms,
  otherProgramsData,
} from "@/data/programsData";
import {
  GraduationCap,
  BookOpen,
  Atom,
  Hash,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Building,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export const Route = createFileRoute("/admissions/overview")({
  head: () => ({
    meta: [
      { title: "Admission Overview — Shree Devi Institute of Technology (SDIT)" },
      {
        name: "description",
        content:
          "Official Admission Overview for Shree Devi Institute of Technology (SDIT), Mangaluru. CET Code E-146, PGCET codes, B.E., MBA, MCA, M.Tech programs and admission routes.",
      },
      {
        property: "og:title",
        content: "Admission Overview — Shree Devi Institute of Technology (SDIT)",
      },
      {
        property: "og:description",
        content:
          "Comprehensive admission information for SDIT Mangaluru: programs, entrance codes, and admission pathways.",
      },
    ],
  }),
  component: AdmissionOverviewPage,
});

function AdmissionOverviewPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <AdmissionsPageHeader
          currentPage="overview"
          eyebrow="Admissions at SDIT"
          title="Admission Overview"
          description="Verified admissions information for Shree Devi Institute of Technology, Kenjar, Mangaluru — featuring degree programs, official entrance codes (CET & PGCET), and admission routes."
        />

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          {/* Key Institute & Counseling Identifiers */}
          <div className="rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-5">
              <div>
                <div className="flex items-center gap-2">
                  <span className="grid size-8 place-items-center rounded-lg bg-navy text-lime">
                    <Hash className="size-4" />
                  </span>
                  <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                    Official Entrance &amp; Counselling Codes
                  </h2>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Use these official institution codes during KEA Karnataka option entry and
                  counselling.
                </p>
              </div>
              <span className="rounded-full bg-lime/20 px-3 py-1 text-xs font-semibold text-lime-700 dark:text-lime-400">
                Official KEA Codes
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {SDIT_CODES.map((item) => (
                <div
                  key={item.program}
                  className="flex flex-col justify-between rounded-2xl border border-border/70 bg-card p-5 shadow-xs transition-colors hover:border-navy"
                >
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase">
                      {item.authority}
                    </span>
                    <p className="mt-1 font-bold text-foreground">{item.program}</p>
                  </div>
                  <div className="mt-4 border-t border-border/60 pt-3">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-muted-foreground">Code:</span>
                      <span className="text-xl font-extrabold tracking-wider text-navy dark:text-lime">
                        {item.code}
                      </span>
                    </div>
                    {item.notes && (
                      <p className="mt-1.5 text-[11px] text-muted-foreground">{item.notes}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Admission Categories & Routes */}
          <div className="mt-12">
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Admission Routes &amp; Categories
            </h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              SDIT admits eligible candidates through government quota counselling and direct
              management seats.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="grid size-9 place-items-center rounded-xl bg-navy text-white">
                      <ShieldCheck className="size-4" />
                    </span>
                    <h3 className="text-base font-bold text-foreground">Government Quota (KEA)</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Seats are allocated through the Karnataka Examinations Authority (KEA)
                    centralized counselling based on merit ranks in <strong>KCET</strong> (for B.E.)
                    or <strong>Karnataka PGCET</strong> (for MBA, MCA, M.Tech), subject to state
                    reservation norms.
                  </p>
                </div>
                <div className="mt-5 border-t border-border/60 pt-3">
                  <span className="text-xs font-semibold text-violet">
                    Karnataka State Merit &amp; Reservation
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="grid size-9 place-items-center rounded-xl bg-navy text-white">
                      <Building className="size-4" />
                    </span>
                    <h3 className="text-base font-bold text-foreground">Management Quota</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Direct admission seats offered by Shree Devi Education Trust for eligible
                    students across India who satisfy the prescribed VTU and AICTE academic
                    eligibility criteria.
                  </p>
                </div>
                <div className="mt-5 border-t border-border/60 pt-3">
                  <span className="text-xs font-semibold text-violet">
                    Direct Application to Trust Office
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="grid size-9 place-items-center rounded-xl bg-navy text-white">
                      <GraduationCap className="size-4" />
                    </span>
                    <h3 className="text-base font-bold text-foreground">COMEDK / National Quota</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Engineering seats available for students from all over India based on ranks
                    obtained in <strong>COMEDK UGET</strong>, JEE (Main), or other nationally
                    recognized entrance examinations.
                  </p>
                </div>
                <div className="mt-5 border-t border-border/60 pt-3">
                  <span className="text-xs font-semibold text-violet">
                    Open for Non-Karnataka Students
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Programs Overview */}
          <div className="mt-16">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  Programs Available for Admission
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  All programs are approved by AICTE, New Delhi and affiliated with Visvesvaraya
                  Technological University (VTU), Belagavi.
                </p>
              </div>
              <Link
                to="/admissions/eligibility"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:underline dark:text-lime"
              >
                View detailed eligibility <ArrowRight className="size-4" />
              </Link>
            </div>

            {/* Undergraduate List */}
            <div className="mt-6 rounded-3xl border border-border/80 bg-surface p-6 sm:p-8">
              <div className="flex items-center gap-2 border-b border-border/60 pb-4">
                <GraduationCap className="size-5 text-navy" />
                <h3 className="text-lg font-bold text-foreground">
                  Undergraduate Programs (8 B.E. Disciplines — 4 Years)
                </h3>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {undergraduatePrograms.map((prog) => (
                  <div
                    key={prog.id}
                    className="flex flex-col justify-between rounded-xl border border-border/60 bg-card p-4 shadow-2xs"
                  >
                    <p className="text-sm font-bold text-foreground">{prog.title}</p>
                    <span className="mt-2 text-[11px] font-medium text-muted-foreground">
                      {prog.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Postgraduate List */}
            <div className="mt-6 rounded-3xl border border-border/80 bg-surface p-6 sm:p-8">
              <div className="flex items-center gap-2 border-b border-border/60 pb-4">
                <BookOpen className="size-5 text-navy" />
                <h3 className="text-lg font-bold text-foreground">
                  Postgraduate Programs (M.Tech, MBA &amp; MCA)
                </h3>
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {postgraduatePrograms.map((prog) => (
                  <div
                    key={prog.id}
                    className="flex flex-col justify-between rounded-xl border border-border/60 bg-card p-5 shadow-2xs"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-bold text-foreground">{prog.title}</h4>
                        <span className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-semibold text-secondary-foreground">
                          {prog.badge}
                        </span>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {prog.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Research List */}
            <div className="mt-6 rounded-3xl border border-border/80 bg-surface p-6 sm:p-8">
              <div className="flex items-center gap-2 border-b border-border/60 pb-4">
                <Atom className="size-5 text-navy" />
                <h3 className="text-lg font-bold text-foreground">
                  Doctoral Research (Ph.D. Programs)
                </h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                SDIT Research Centre provides facilities for doctoral research recognized by VTU in:
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {otherProgramsData.researchAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2 rounded-xl border border-border/60 bg-card p-3 text-sm font-semibold text-foreground shadow-2xs"
                  >
                    <CheckCircle2 className="size-4 shrink-0 text-lime-600 dark:text-lime-400" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Location & Official Contacts Banner */}
          <div className="mt-16 rounded-3xl border border-navy/20 bg-gradient-navy p-6 text-white shadow-card sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <span className="rounded-full bg-lime/20 px-3 py-1 text-xs font-bold text-lime">
                  Official Contact &amp; Campus Location
                </span>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {OFFICIAL_CONTACT.collegeName}
                </h2>
                <p className="mt-2 text-sm text-navy-foreground/80">
                  Managed by {OFFICIAL_CONTACT.trustName}
                </p>

                <div className="mt-6 space-y-3 text-sm text-navy-foreground/90">
                  <div className="flex items-start gap-3">
                    <MapPin className="size-4 shrink-0 text-lime" />
                    <span>
                      <strong>Campus Address:</strong> {OFFICIAL_CONTACT.campusAddress}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building className="size-4 shrink-0 text-lime" />
                    <span>
                      <strong>Trust Office:</strong> {OFFICIAL_CONTACT.trustAddress}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-navy-soft/60 p-6">
                <div>
                  <h3 className="text-base font-bold text-white">Admissions Enquiries</h3>
                  <div className="mt-4 space-y-2 text-sm text-navy-foreground/90">
                    <p className="flex items-center gap-2">
                      <Phone className="size-4 text-lime" />
                      <span>Campus: {OFFICIAL_CONTACT.campusPhones.join(" / ")}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="size-4 text-lime" />
                      <span>Helpline: {OFFICIAL_CONTACT.mobileHelplines.join(" / ")}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="size-4 text-lime" />
                      <span>Trust Office: {OFFICIAL_CONTACT.trustOfficePhones.join(", ")}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="size-4 text-lime" />
                      <span>Email: {OFFICIAL_CONTACT.emails.join(" / ")}</span>
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3 border-t border-white/10 pt-4">
                  <a
                    href={OFFICIAL_LINKS.applyNow}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-lime px-4 py-2 text-xs font-bold text-navy transition-colors hover:bg-lime/90"
                  >
                    Apply Now <ExternalLink className="size-3" />
                  </a>
                  <Link
                    to="/admissions/application-process"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/25 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    How to Apply <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ChatLauncher />
    </div>
  );
}
