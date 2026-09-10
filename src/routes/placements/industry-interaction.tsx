import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ChatLauncher } from "@/components/site/ChatLauncher";
import {
  ArrowLeft,
  Building2,
  Factory,
  Compass,
  Mic2,
  FileCheck2,
  Workflow,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

export const Route = createFileRoute("/placements/industry-interaction")({
  head: () => ({
    meta: [
      { title: "Industry Interaction — Training & Placements — SDIT" },
      {
        name: "description",
        content:
          "Official industry interaction, industrial visits, vocational training, and expert talks at SDIT Mangaluru.",
      },
      {
        property: "og:title",
        content: "Industry Interaction — Training & Placements — SDIT",
      },
    ],
  }),
  component: IndustryInteractionPage,
});

export function IndustryInteractionPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-muted-foreground">
          <ol className="flex items-center gap-2">
            <li>
              <Link to="/" className="hover:text-foreground">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/placements" className="hover:text-foreground">
                Training &amp; Placements
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-foreground">Industry Interaction</li>
          </ol>
        </nav>

        {/* Back button */}
        <Link
          to="/placements"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-card-foreground shadow-soft transition-colors hover:border-violet hover:text-violet"
        >
          <ArrowLeft className="size-4" /> Back to Training &amp; Placements
        </Link>

        {/* Header */}
        <div className="rounded-3xl border border-border bg-gradient-navy p-8 text-white shadow-soft sm:p-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-lime/15 px-3 py-1 text-xs font-bold tracking-wider text-lime uppercase">
            <Building2 className="size-3.5" /> Pillar 04
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Industry Interaction
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-navy-foreground/85 sm:text-base">
            SDIT bridges academic learning with real-world corporate demands through organized
            industrial visits, vocational training encouragement, expert interaction, and structured
            industry-academia linkages.
          </p>
        </div>

        {/* Core Industry Initiatives Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Industrial Visits */}
          <section className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                <Factory className="size-5" />
              </span>
              <div>
                <span className="text-xs font-bold text-violet uppercase">On-Site Exposure</span>
                <h2 className="text-xl font-bold text-card-foreground">Industrial Visits</h2>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The institute organizes regular industrial visits across various departments to
              provide students with early industrial exposure, observing live plant operations,
              software lifecycles, and manufacturing environments.
            </p>
            <div className="mt-6 space-y-2.5 border-t border-border/60 pt-4 text-xs font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                <span>Early exposure to real-world industrial environments</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                <span>Department-specific factory and corporate visits</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                <span>Direct interaction with plant managers and technical staff</span>
              </div>
            </div>
          </section>

          {/* Vocational Training */}
          <section className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                <Compass className="size-5" />
              </span>
              <div>
                <span className="text-xs font-bold text-violet uppercase">Practical Learning</span>
                <h2 className="text-xl font-bold text-card-foreground">Vocational Training</h2>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              SDIT actively encourages and assists students across their second, third, and final
              years to undergo practical vocational training in industrial sectors during academic
              semester breaks.
            </p>
            <div className="mt-6 space-y-2.5 border-t border-border/60 pt-4 text-xs font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                <span>Hands-on workplace skills during vacations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                <span>Departmental guidance in identifying vocational avenues</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                <span>Strengthening engineering problem-solving capabilities</span>
              </div>
            </div>
          </section>

          {/* Industry Talks by Resource Persons */}
          <section className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                <Mic2 className="size-5" />
              </span>
              <div>
                <span className="text-xs font-bold text-violet uppercase">Corporate Insights</span>
                <h2 className="text-xl font-bold text-card-foreground">
                  Industry Talks &amp; Seminars
                </h2>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Invited industry experts and corporate leaders deliver talks, guest lectures, and
              placement seminars to orient students toward emerging engineering methodologies,
              market expectations, and professional standards.
            </p>
            <div className="mt-6 space-y-2.5 border-t border-border/60 pt-4 text-xs font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                <span>Placement talks by corporate recruitment professionals</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                <span>Seminars on cutting-edge industry technologies</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                <span>Interactive question-and-answer forums with practitioners</span>
              </div>
            </div>
          </section>

          {/* Industry-Academia Linkage */}
          <section className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                <Workflow className="size-5" />
              </span>
              <div>
                <span className="text-xs font-bold text-violet uppercase">Synergy</span>
                <h2 className="text-xl font-bold text-card-foreground">
                  Industry-Academia Collaboration
                </h2>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The Department of Placement &amp; Training establishes ongoing interactions with
              regional and national enterprises to ensure curricula alignment, student project
              opportunities, and mutually beneficial talent pipelines.
            </p>
            <div className="mt-6 space-y-2.5 border-t border-border/60 pt-4 text-xs font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                <span>Student project collaboration and mentorship</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                <span>Feedback integration into value-added training programs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                <span>Long-term campus engagement with recruiting organizations</span>
              </div>
            </div>
          </section>
        </div>

        {/* Verification Reference Footer */}
        <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-muted-foreground">
            <p className="font-semibold text-foreground">Official Sources</p>
            <p>
              SDIT Placement &amp; Training (https://sdit.ac.in/placement-training/) &amp; About the
              Placement.
            </p>
          </div>
          <a
            href="https://sdit.ac.in/placement-training/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white hover:opacity-90 dark:bg-lime dark:text-navy"
          >
            SDIT Placement Training Page <ExternalLink className="size-3" />
          </a>
        </div>
      </main>

      <Footer />
      <ChatLauncher />
    </div>
  );
}
