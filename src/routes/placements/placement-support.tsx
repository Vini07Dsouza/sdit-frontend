import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ChatLauncher } from "@/components/site/ChatLauncher";
import {
  ArrowLeft,
  Briefcase,
  UserCheck,
  Building2,
  Users2,
  FileCheck,
  Layers,
  History,
  TrendingUp,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

export const Route = createFileRoute("/placements/placement-support")({
  head: () => ({
    meta: [
      { title: "Placement Support — Training & Placements — SDIT" },
      {
        name: "description",
        content:
          "Official placement assistance, recruitment drives, infrastructure, and historical placement records at SDIT Mangaluru.",
      },
      {
        property: "og:title",
        content: "Placement Support — Training & Placements — SDIT",
      },
    ],
  }),
  component: PlacementSupportPage,
});

export function PlacementSupportPage() {
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
            <li className="font-semibold text-foreground">Placement Support</li>
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
            <Briefcase className="size-3.5" /> Pillar 03
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Placement Support &amp; Recruitment
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-navy-foreground/85 sm:text-base">
            The Department of Placement &amp; Training plays a central role in organizing campus
            recruitment drives, pool campus events, internship facilitation, and providing dedicated
            infrastructure for corporate visiting teams.
          </p>
        </div>

        {/* TPO Message Card & Department Scope */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* TPO Officer Info */}
          <div className="flex flex-col justify-between rounded-2xl border border-navy/20 bg-card p-6 shadow-soft sm:p-8">
            <div>
              <div className="flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-xl bg-navy text-lime">
                  <UserCheck className="size-6" />
                </span>
                <div>
                  <span className="text-xs font-bold text-violet uppercase">TPO Information</span>
                  <h2 className="text-lg font-bold text-card-foreground">
                    Roshal Lynshal Nazareth
                  </h2>
                  <p className="text-xs text-muted-foreground">Training and Placement Officer</p>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-surface p-4 text-xs leading-relaxed text-muted-foreground">
                <p className="italic">
                  &ldquo;The Training and Placement Cell functions as the vital link between our
                  aspiring graduates and leading corporate employers, ensuring students are nurtured
                  with technical and ethical competencies.&rdquo;
                </p>
                <p className="mt-2 text-[11px] font-semibold text-foreground">
                  — Message from TPO (Official SDIT Website)
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-border/60 pt-4">
              <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="size-3.5" />
                Official Faculty Placement Representative
              </span>
            </div>
          </div>

          {/* Placement Services & Drives */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8 lg:col-span-2">
            <h2 className="text-xl font-bold text-card-foreground">
              Campus Recruitment Operations
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              The Placement Department actively facilitates campus placement drives, coordinate
              schedules, handles pre-placement talks, and guides students through recruitment
              assessment stages:
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-surface/50 p-4">
                <div className="flex items-center gap-2 text-violet">
                  <Building2 className="size-4" />
                  <h3 className="text-sm font-bold text-foreground">Campus Recruitment</h3>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Hosting on-campus placement drives where corporate recruitment panels conduct
                  written tests, technical rounds, and HR interviews.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-4">
                <div className="flex items-center gap-2 text-violet">
                  <Users2 className="size-4" />
                  <h3 className="text-sm font-bold text-foreground">Pool Campus Drives</h3>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Organizing and participating in regional pool campus drives involving multiple
                  engineering colleges across the Mangaluru zone.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-4">
                <div className="flex items-center gap-2 text-violet">
                  <FileCheck className="size-4" />
                  <h3 className="text-sm font-bold text-foreground">Internship Assistance</h3>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Assisting students in securing mandatory industrial and academic project
                  internships in reputed software, core, and management sectors.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-4">
                <div className="flex items-center gap-2 text-violet">
                  <Layers className="size-4" />
                  <h3 className="text-sm font-bold text-foreground">Placement Talks</h3>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Pre-drive company presentations, corporate interaction sessions, and placement
                  talks by industry resource persons.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Recruitment Facilities Infrastructure */}
        <section className="mt-14 rounded-3xl border border-border bg-surface/50 p-8 shadow-soft">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-wider text-violet uppercase">
              Campus Facilities
            </span>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Dedicated Recruitment Facilities
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              SDIT provides state-of-the-art infrastructure exclusively dedicated to conducting
              smooth campus recruitment processes:
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <span className="font-mono text-sm font-bold text-violet">01</span>
              <h3 className="mt-2 text-base font-bold text-card-foreground">Seminar Hall</h3>
              <p className="mt-2 text-xs text-muted-foreground">
                Spacious air-conditioned seminar halls equipped with modern audiovisual systems for
                company pre-placement presentations and orientation.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <span className="font-mono text-sm font-bold text-violet">02</span>
              <h3 className="mt-2 text-base font-bold text-card-foreground">
                Group Discussion Rooms
              </h3>
              <p className="mt-2 text-xs text-muted-foreground">
                Dedicated rooms configured specifically for group discussions, case study
                evaluations, and team interaction assessments.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <span className="font-mono text-sm font-bold text-violet">03</span>
              <h3 className="mt-2 text-base font-bold text-card-foreground">Interview Cabins</h3>
              <p className="mt-2 text-xs text-muted-foreground">
                Private interview and discussion rooms for corporate panels to conduct one-on-one
                technical and HR interviews.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <span className="font-mono text-sm font-bold text-violet">04</span>
              <h3 className="mt-2 text-base font-bold text-card-foreground">
                Conferencing Facilities
              </h3>
              <p className="mt-2 text-xs text-muted-foreground">
                High-speed connectivity and video conferencing infrastructure for virtual interview
                rounds and online assessment tests.
              </p>
            </div>
          </div>
        </section>

        {/* Official Placement Highlights & Historical Data */}
        <section className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Recent Official SSR Information */}
          <div className="rounded-3xl border border-navy/20 bg-card p-8 shadow-soft">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
              <TrendingUp className="size-5" />
              <span className="text-xs font-bold tracking-wider uppercase">
                Recent Official Record (SSR 2024)
              </span>
            </div>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-card-foreground">
              Placement Performance
            </h2>
            <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-card-foreground">
              <p className="text-3xl font-extrabold text-emerald-700 dark:text-emerald-400">
                &gt; 85%
              </p>
              <p className="mt-2 text-sm font-semibold">
                Placement rate achieved for the past three batches.
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Official source: SDIT 2024 Self Study Report (SSR / NAAC).
              </p>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              In addition, official placement documentation records that an average of{" "}
              <strong>90–95% of eligible final-year students</strong> were placed through campus
              recruitments during the documented reporting period (Source: SDIT About the Placement
              page).
            </p>
          </div>

          {/* Historical Placement Record */}
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
            <div className="flex items-center gap-2 text-violet">
              <History className="size-5" />
              <span className="text-xs font-bold tracking-wider uppercase">
                Historical Placement Records
              </span>
            </div>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-card-foreground">
              Year-Wise Offer Letters
            </h2>
            <p className="mt-2 text-xs text-muted-foreground">
              As published on official SDIT placement archive records:
            </p>

            <div className="mt-6 divide-y divide-border/60 rounded-2xl border border-border bg-surface/50">
              <div className="flex items-center justify-between p-3.5 text-xs">
                <span className="font-semibold text-foreground">2020 Batch</span>
                <span className="font-bold text-violet">492+ Offer Letters</span>
              </div>
              <div className="flex items-center justify-between p-3.5 text-xs">
                <span className="font-semibold text-foreground">2019 Batch</span>
                <span className="font-bold text-violet">480+ Offer Letters</span>
              </div>
              <div className="flex items-center justify-between p-3.5 text-xs">
                <span className="font-semibold text-foreground">2018 Batch</span>
                <span className="font-bold text-violet">461+ Offer Letters</span>
              </div>
              <div className="flex items-center justify-between p-3.5 text-xs">
                <span className="font-semibold text-foreground">2017 Batch</span>
                <span className="font-bold text-violet">452+ Offer Letters</span>
              </div>
              <div className="flex items-center justify-between p-3.5 text-xs">
                <span className="font-semibold text-foreground">2016 Batch</span>
                <span className="font-bold text-violet">427+ Offer Letters</span>
              </div>
            </div>
          </div>
        </section>

        {/* Official Reference Verification Banner */}
        <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-muted-foreground">
            <p className="font-semibold text-foreground">Official Sources</p>
            <p>
              SDIT Message from TPO (https://sdit.ac.in/message-from-tpo/) &amp; About the Placement
              (https://sdit.ac.in/about-the-placement/).
            </p>
          </div>
          <a
            href="https://sdit.ac.in/about-the-placement/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white hover:opacity-90 dark:bg-lime dark:text-navy"
          >
            SDIT About Placement Page <ExternalLink className="size-3" />
          </a>
        </div>
      </main>

      <Footer />
      <ChatLauncher />
    </div>
  );
}
