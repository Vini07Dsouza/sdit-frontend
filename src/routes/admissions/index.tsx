import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ChatLauncher } from "@/components/site/ChatLauncher";
import { admissionBlocks } from "@/data/siteContent";
import { SDIT_CODES, OFFICIAL_CONTACT, OFFICIAL_LINKS } from "@/data/admissionsData";
import {
  GraduationCap,
  CheckCircle2,
  Send,
  Calendar,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Hash,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Building,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/admissions/")({
  head: () => ({
    meta: [
      { title: "Admissions — Shree Devi Institute of Technology (SDIT)" },
      {
        name: "description",
        content:
          "Official Admissions Portal for Shree Devi Institute of Technology (SDIT), Kenjar, Mangaluru. CET Code E-146, PGCET codes, B.E., MBA, MCA, M.Tech eligibility and application process.",
      },
      {
        property: "og:title",
        content: "Admissions — Shree Devi Institute of Technology (SDIT)",
      },
      {
        property: "og:description",
        content:
          "Verified admission procedures, KEA CET Code E-146, eligibility requirements, and application guidelines for SDIT Mangaluru.",
      },
    ],
  }),
  component: AdmissionsIndexPage,
});

const CARD_ICONS = {
  overview: GraduationCap,
  eligibility: CheckCircle2,
  process: Send,
  dates: Calendar,
};

function AdmissionsIndexPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Admissions Portal Hero Banner */}
        <section className="relative overflow-hidden bg-gradient-navy py-16 text-navy-foreground sm:py-20 lg:py-24">
          <div aria-hidden="true" className="absolute inset-0 bg-tech-grid opacity-60" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-xs text-navy-foreground/75 sm:text-sm"
            >
              <Link to="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <ChevronRight className="size-3.5 text-navy-foreground/40" />
              <span className="font-semibold text-lime">Admissions</span>
            </nav>

            <div className="mt-6 max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-lime/15 px-3 py-1 text-xs font-bold tracking-wider text-lime uppercase">
                <Sparkles className="size-3.5" />
                Official Admissions Portal
              </span>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Admissions at SDIT
              </h1>
              <p className="mt-4 text-base leading-relaxed text-navy-foreground/85 sm:text-lg">
                Explore verified admission pathways, academic eligibility criteria, application
                procedures, and counseling codes for Shree Devi Institute of Technology, Kenjar,
                Mangaluru.
              </p>
            </div>
          </div>
        </section>

        {/* 4 Interactive Admissions Section Cards */}
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Admission Information Sections
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Select any section below for official, verified admission guidelines.
              </p>
            </div>
            <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
              4 Dedicated Portals
            </span>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {admissionBlocks.map((block) => {
              const Icon = CARD_ICONS[block.id as keyof typeof CARD_ICONS] || GraduationCap;

              return (
                <Link
                  key={block.id}
                  to={block.href}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-navy group-hover:text-lime">
                        <Icon className="size-5" />
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-lime/15 px-2.5 py-0.5 text-[11px] font-semibold text-lime-800 dark:text-lime-300">
                        <ShieldCheck className="size-3" />
                        Verified
                      </span>
                    </div>

                    <p className="mt-4 text-xs font-bold uppercase tracking-wider text-violet">
                      {block.meta}
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                      {block.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {block.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-1.5 border-t border-border/60 pt-4 text-xs font-bold text-foreground transition-colors group-hover:text-primary">
                    <span>View Details</span>
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Official Entrance & Counselling Codes */}
          <div className="mt-14 rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-8">
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

          {/* Admission Routes & Categories */}
          <div className="mt-12">
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Admission Pathways
            </h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              SDIT admits eligible candidates through government quota counselling and direct
              management seats.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="flex items-center gap-2">
                  <span className="grid size-9 place-items-center rounded-xl bg-navy text-white">
                    <ShieldCheck className="size-4" />
                  </span>
                  <h3 className="text-base font-bold text-foreground">Government Quota (KEA)</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Seats are allocated through the Karnataka Examinations Authority (KEA) centralized
                  counselling based on merit ranks in <strong>KCET</strong> (for B.E.) or{" "}
                  <strong>Karnataka PGCET</strong> (for MBA, MCA, M.Tech), subject to state
                  reservation norms.
                </p>
                <div className="mt-5 border-t border-border/60 pt-3">
                  <Link
                    to="/admissions/overview"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-navy hover:underline dark:text-lime"
                  >
                    <span>Read quota details</span>
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="flex items-center gap-2">
                  <span className="grid size-9 place-items-center rounded-xl bg-violet text-white">
                    <Building className="size-4" />
                  </span>
                  <h3 className="text-base font-bold text-foreground">Management Quota</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Direct admission under Management quota is available for candidates meeting the
                  minimum eligibility criteria prescribed by VTU and AICTE. Candidates can apply
                  directly through the college or administrative office.
                </p>
                <div className="mt-5 border-t border-border/60 pt-3">
                  <Link
                    to="/admissions/application-process"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-navy hover:underline dark:text-lime"
                  >
                    <span>View application steps</span>
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Official Admissions Office & Helplines */}
          <div className="mt-12 rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Official Admissions Office &amp; Inquiries
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Direct all official admissions inquiries to the college admission cell or the Shree
              Devi Education Trust administrative office.
            </p>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-border/70 bg-surface p-5">
                <div className="flex items-center gap-2 font-bold text-foreground">
                  <MapPin className="size-4 text-violet" />
                  <span>Campus Location</span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {OFFICIAL_CONTACT.campusAddress}
                </p>
              </div>

              <div className="rounded-xl border border-border/70 bg-surface p-5">
                <div className="flex items-center gap-2 font-bold text-foreground">
                  <Phone className="size-4 text-violet" />
                  <span>Telephone Helplines</span>
                </div>
                <div className="mt-2 space-y-1 text-xs text-muted-foreground">
                  <p>Campus: {OFFICIAL_CONTACT.campusPhones.join(", ")}</p>
                  <p>Mobile: {OFFICIAL_CONTACT.mobileHelplines.join(", ")}</p>
                  <p>Trust: {OFFICIAL_CONTACT.trustOfficePhones.join(", ")}</p>
                </div>
              </div>

              <div className="rounded-xl border border-border/70 bg-surface p-5">
                <div className="flex items-center gap-2 font-bold text-foreground">
                  <Mail className="size-4 text-violet" />
                  <span>Official Email &amp; Web</span>
                </div>
                <div className="mt-2 space-y-1 text-xs text-muted-foreground">
                  {OFFICIAL_CONTACT.emails.map((e) => (
                    <p key={e}>
                      <a href={`mailto:${e}`} className="text-foreground hover:underline">
                        {e}
                      </a>
                    </p>
                  ))}
                  <p className="pt-1">
                    <a
                      href={OFFICIAL_LINKS.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:underline"
                    >
                      <span>Visit sdit.ac.in</span>
                      <ExternalLink className="size-3" />
                    </a>
                  </p>
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
