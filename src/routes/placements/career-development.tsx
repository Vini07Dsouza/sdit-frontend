import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ChatLauncher } from "@/components/site/ChatLauncher";
import {
  ArrowLeft,
  Users,
  Compass,
  Globe2,
  FileCheck2,
  Sparkles,
  Award,
  HeartHandshake,
  Wrench,
  UserCheck,
  TrendingUp,
  ExternalLink,
} from "lucide-react";

export const Route = createFileRoute("/placements/career-development")({
  head: () => ({
    meta: [
      { title: "Career Development — Training & Placements — SDIT" },
      {
        name: "description",
        content:
          "Career counselling, higher education abroad guidance, competitive exam prep, and the official SHAPE Model at SDIT Mangaluru.",
      },
      {
        property: "og:title",
        content: "Career Development — Training & Placements — SDIT",
      },
    ],
  }),
  component: CareerDevelopmentPage,
});

export function CareerDevelopmentPage() {
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
            <li className="font-semibold text-foreground">Career Development</li>
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
            <Users className="size-3.5" /> Pillar 02
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Career Development &amp; Guidance
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-navy-foreground/85 sm:text-base">
            SDIT provides structured career guidance to assist students in mapping their career
            trajectories, exploring higher learning opportunities in India and abroad, and preparing
            for competitive assessments through institutional frameworks.
          </p>
        </div>

        {/* Core Guidance Streams */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* Career Counselling */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="grid size-12 place-items-center rounded-xl bg-accent text-accent-foreground">
              <Compass className="size-6" />
            </div>
            <h2 className="mt-4 text-xl font-bold text-card-foreground">Career Counselling</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              SDIT&apos;s Department of Placement &amp; Training functions as a dedicated nodal
              center for career counselling. Faculty advisors and placement coordinators offer
              personalized guidance regarding career opportunities in Engineering &amp; Technology
              fields.
            </p>
          </div>

          {/* Higher Education Guidance */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="grid size-12 place-items-center rounded-xl bg-accent text-accent-foreground">
              <Globe2 className="size-6" />
            </div>
            <h2 className="mt-4 text-xl font-bold text-card-foreground">
              Higher Education Guidance
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              The institute arranges interactive talks and informative sessions delivered by
              professionals and visiting delegates from international universities regarding higher
              education opportunities, master&apos;s programs, and global fellowships abroad.
            </p>
          </div>

          {/* Competitive Exam Guidance */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="grid size-12 place-items-center rounded-xl bg-accent text-accent-foreground">
              <FileCheck2 className="size-6" />
            </div>
            <h2 className="mt-4 text-xl font-bold text-card-foreground">
              Competitive Examinations
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              SDIT conducts specialized orientation sessions and aptitude training for competitive
              entrance examinations such as CAT, GMAT, and other national and state-level
              postgraduate assessments.
            </p>
          </div>
        </div>

        {/* The Official SDIT SHAPE Model */}
        <section className="mt-14 rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-violet/10 px-3 py-1 text-xs font-bold text-violet">
                <Sparkles className="size-3.5" /> Institutional Distinctiveness
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-card-foreground sm:text-3xl">
                The SDIT SHAPE Model
              </h2>
            </div>
            <span className="inline-flex rounded-full bg-surface px-3 py-1 text-xs font-semibold text-muted-foreground">
              Official Institutional Framework
            </span>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            As documented in SDIT&apos;s Institutional Values and Best Practices, the college
            implements the comprehensive <strong>SHAPE Model</strong> to ensure the holistic
            personal and professional development of every graduate:
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {/* S */}
            <div className="rounded-2xl border border-border bg-surface/60 p-5 transition-colors hover:border-violet/40">
              <div className="flex items-center justify-between">
                <span className="grid size-10 place-items-center rounded-xl bg-violet text-lg font-extrabold text-white">
                  S
                </span>
                <Award className="size-4 text-muted-foreground" />
              </div>
              <h3 className="mt-4 font-bold text-foreground">Soft Skills</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Communication skills, teamwork, problem-solving, leadership capabilities, public
                speaking, group discussions, and interactive role-plays.
              </p>
            </div>

            {/* H */}
            <div className="rounded-2xl border border-border bg-surface/60 p-5 transition-colors hover:border-violet/40">
              <div className="flex items-center justify-between">
                <span className="grid size-10 place-items-center rounded-xl bg-navy text-lg font-extrabold text-lime">
                  H
                </span>
                <HeartHandshake className="size-4 text-muted-foreground" />
              </div>
              <h3 className="mt-4 font-bold text-foreground">Human Values</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Ethical grounding, professional ethics, life skills, empathy, and social
                responsibility integrated into engineering practice.
              </p>
            </div>

            {/* A */}
            <div className="rounded-2xl border border-border bg-surface/60 p-5 transition-colors hover:border-violet/40">
              <div className="flex items-center justify-between">
                <span className="grid size-10 place-items-center rounded-xl bg-violet text-lg font-extrabold text-white">
                  A
                </span>
                <Wrench className="size-4 text-muted-foreground" />
              </div>
              <h3 className="mt-4 font-bold text-foreground">Add-on Courses</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Supplemental technical training modules and specialized certificate courses beyond
                the standard university curriculum.
              </p>
            </div>

            {/* P */}
            <div className="rounded-2xl border border-border bg-surface/60 p-5 transition-colors hover:border-violet/40">
              <div className="flex items-center justify-between">
                <span className="grid size-10 place-items-center rounded-xl bg-navy text-lg font-extrabold text-lime">
                  P
                </span>
                <UserCheck className="size-4 text-muted-foreground" />
              </div>
              <h3 className="mt-4 font-bold text-foreground">Personality Dev.</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Personality development programs, grooming, confidence building, executive presence,
                and professional conduct.
              </p>
            </div>

            {/* E */}
            <div className="rounded-2xl border border-border bg-surface/60 p-5 transition-colors hover:border-violet/40">
              <div className="flex items-center justify-between">
                <span className="grid size-10 place-items-center rounded-xl bg-violet text-lg font-extrabold text-white">
                  E
                </span>
                <TrendingUp className="size-4 text-muted-foreground" />
              </div>
              <h3 className="mt-4 font-bold text-foreground">Skill Enhancement</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Technical skill enhancement, diagnostic aptitude assessments, hands-on lab practice,
                and continuous technical refinement.
              </p>
            </div>
          </div>
        </section>

        {/* Verification Footer */}
        <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-muted-foreground">
            <p className="font-semibold text-foreground">Official Sources</p>
            <p>
              SDIT Institutional Values &amp; Best Practices and About the Placement official pages.
            </p>
          </div>
          <a
            href="https://sdit.ac.in/institutional-values-and-best-practices/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white hover:opacity-90 dark:bg-lime dark:text-navy"
          >
            SDIT Institutional Values Page <ExternalLink className="size-3" />
          </a>
        </div>
      </main>

      <Footer />
      <ChatLauncher />
    </div>
  );
}
