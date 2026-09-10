import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ChatLauncher } from "@/components/site/ChatLauncher";
import {
  Briefcase,
  GraduationCap,
  Users,
  Building2,
  ArrowRight,
  ShieldCheck,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  UserCheck,
  Building,
} from "lucide-react";

export const Route = createFileRoute("/placements/")({
  head: () => ({
    meta: [
      { title: "Training & Placements — Shree Devi Institute of Technology (SDIT)" },
      {
        name: "description",
        content:
          "Official Training & Placement cell of Shree Devi Institute of Technology (SDIT), Kenjar, Mangaluru. Pre-placement training, SHAPE model, campus recruitment, and industry interactions.",
      },
      {
        property: "og:title",
        content: "Training & Placements — Shree Devi Institute of Technology (SDIT)",
      },
      {
        property: "og:description",
        content:
          "Career readiness support, pre-placement training, campus recruitment drives, and industry interaction at SDIT Mangaluru.",
      },
    ],
  }),
  component: PlacementsIndexPage,
});

interface PlacementCardItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  icon: typeof Briefcase;
  highlights: string[];
}

const PLACEMENT_CARDS: PlacementCardItem[] = [
  {
    id: "training",
    title: "Training",
    subtitle: "Skill Building & Preparation",
    description:
      "Structured pre-placement training, aptitude and logical skills, technical and communication training for 2nd and 3rd year students, PDP programs, technology training, bridge courses, and mock interviews.",
    href: "/placements/training",
    icon: GraduationCap,
    highlights: [
      "Aptitude & Logical Skills Training",
      "Technical & Communication Training",
      "PDP & Technology Training Programs",
      "Mock Interviews Conducted by Experts",
    ],
  },
  {
    id: "career",
    title: "Career Development",
    subtitle: "Guidance & SHAPE Model",
    description:
      "Personalized career counselling, higher education guidance for studying abroad, competitive examination guidance (CAT, GMAT, aptitude), and SDIT's institutional SHAPE Model.",
    href: "/placements/career-development",
    icon: Users,
    highlights: [
      "Career Guidance & Counselling",
      "Higher Education Guidance Abroad",
      "Competitive Exam Guidance (CAT, GMAT)",
      "Official SDIT SHAPE Model",
    ],
  },
  {
    id: "support",
    title: "Placement Support",
    subtitle: "Recruitment & Infrastructure",
    description:
      "Facilitating campus and pool recruitment drives involving regional colleges, internship assistance for projects, placement talks by resource persons, and dedicated interview facilities.",
    href: "/placements/placement-support",
    icon: Briefcase,
    highlights: [
      "Campus & Pool Campus Drives",
      "Project Internship Assistance",
      "Seminar Hall & GD/Interview Rooms",
      "Pre-Drive Placement Talks",
    ],
  },
  {
    id: "industry",
    title: "Industry Interaction",
    subtitle: "Industrial Exposure & Visits",
    description:
      "Bridging academia and corporate requirements through organized industrial visits for early exposure, vocational training encouragement, expert industry talks, and collaborative interactions.",
    href: "/placements/industry-interaction",
    icon: Building2,
    highlights: [
      "Organized Industrial Visits",
      "Early Industrial Exposure",
      "Vocational Training Support",
      "Expert Industry-Academia Talks",
    ],
  },
];

export function PlacementsIndexPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-navy pt-24 pb-16 text-navy-foreground sm:pt-28 sm:pb-20">
          <div aria-hidden="true" className="absolute inset-0 bg-tech-grid opacity-40" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-6 text-xs text-navy-foreground/70">
              <ol className="flex items-center gap-2">
                <li>
                  <Link to="/" className="hover:text-lime">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li className="font-semibold text-lime">Training & Placements</li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-lime/15 px-3 py-1 text-xs font-bold tracking-wider text-lime uppercase">
                <Sparkles className="size-3.5" />
                Training & Placements
              </div>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Career Readiness Support
              </h1>
              <p className="mt-4 text-base leading-relaxed text-navy-foreground/85 sm:text-lg">
                The Department of Placement &amp; Training at Shree Devi Institute of Technology
                (SDIT), Kenjar, Mangaluru, functions as a dedicated nodal cell fostering career
                readiness, professional skills, and strong corporate linkages.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction / Department Role */}
        <section className="border-b border-border/60 bg-surface/40 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  Department of Placement &amp; Training
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  At SDIT, the Training and Placement cell systematically plans and implements
                  value-added programs, pre-placement training, and technical and communication
                  skills enhancement to empower students across Engineering, MCA, and MBA
                  disciplines.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="flex items-center gap-2.5 rounded-xl border border-border/80 bg-card p-3 text-xs font-semibold text-card-foreground">
                    <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                    <span>Pre-Placement &amp; Aptitude Training</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl border border-border/80 bg-card p-3 text-xs font-semibold text-card-foreground">
                    <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                    <span>Value-Added PDP &amp; Bridge Courses</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl border border-border/80 bg-card p-3 text-xs font-semibold text-card-foreground">
                    <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                    <span>Career Counselling &amp; Higher Education</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl border border-border/80 bg-card p-3 text-xs font-semibold text-card-foreground">
                    <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                    <span>Campus &amp; Pool Recruitment Drives</span>
                  </div>
                </div>
              </div>

              {/* TPO Badge Card */}
              <div className="flex flex-col justify-between rounded-2xl border border-navy/20 bg-card p-6 shadow-soft">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="grid size-12 place-items-center rounded-xl bg-navy text-lime">
                      <UserCheck className="size-6" />
                    </span>
                    <div>
                      <p className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                        Placement Leadership
                      </p>
                      <h3 className="text-base font-bold text-foreground">
                        Roshal Lynshal Nazareth
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Training and Placement Officer (TPO)
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                    Directing pre-placement preparation, pool drives, internship guidance, and
                    corporate relations at SDIT Mangaluru.
                  </p>
                </div>
                <div className="mt-5 border-t border-border/60 pt-4">
                  <Link
                    to="/placements/placement-support"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-navy dark:text-lime hover:underline"
                  >
                    <span>View Placement Support &amp; Facilities</span>
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Core Clickable Cards */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-wider text-violet uppercase">
              Core Pillars
            </span>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Placement &amp; Career Pillars
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Select any of the four key domains below to explore detailed activities,
              methodologies, and official facilities.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PLACEMENT_CARDS.map((card) => {
              const Icon = card.icon;

              return (
                <Link
                  key={card.id}
                  to={card.href}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-violet/40 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex size-12 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-gradient-navy group-hover:text-lime">
                        <Icon className="size-6" />
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-surface px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                        <ShieldCheck className="size-3 text-emerald-500" />
                        Official
                      </span>
                    </div>

                    <p className="mt-4 text-xs font-bold tracking-wider text-violet uppercase">
                      {card.subtitle}
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-card-foreground transition-colors group-hover:text-navy dark:group-hover:text-lime">
                      {card.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {card.description}
                    </p>

                    <ul className="mt-4 space-y-1.5 border-t border-border/60 pt-3 text-xs text-muted-foreground">
                      {card.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="size-1 rounded-full bg-violet" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4 text-xs font-bold text-navy dark:text-lime">
                    <span>Explore Pillar</span>
                    <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Institutional Values & Best Practices: SHAPE Spotlight */}
          <div className="mt-14 overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
            <div className="grid gap-6 lg:grid-cols-3 lg:items-center">
              <div className="lg:col-span-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-violet/10 px-3 py-1 text-xs font-bold text-violet">
                  <Sparkles className="size-3.5" /> Institutional Distinctiveness
                </span>
                <h3 className="mt-3 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  The SDIT SHAPE Model
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  SDIT's institutional distinctiveness is driven by the SHAPE framework:{" "}
                  <strong>S</strong>oft Skills, <strong>H</strong>uman Values / Life Skills,{" "}
                  <strong>A</strong>dd-on Courses / Additional Technical Training,{" "}
                  <strong>P</strong>ersonality Development, and <strong>E</strong>nhancement
                  (Technical Skill Enhancement).
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-lg bg-surface px-3 py-1 text-xs font-semibold text-foreground">
                    S - Soft Skills
                  </span>
                  <span className="rounded-lg bg-surface px-3 py-1 text-xs font-semibold text-foreground">
                    H - Human Values
                  </span>
                  <span className="rounded-lg bg-surface px-3 py-1 text-xs font-semibold text-foreground">
                    A - Add-on Courses
                  </span>
                  <span className="rounded-lg bg-surface px-3 py-1 text-xs font-semibold text-foreground">
                    P - Personality Development
                  </span>
                  <span className="rounded-lg bg-surface px-3 py-1 text-xs font-semibold text-foreground">
                    E - Skill Enhancement
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3 lg:items-end">
                <Link
                  to="/placements/career-development"
                  className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-xs font-bold text-white shadow-soft transition-all hover:bg-navy/90 dark:bg-lime dark:text-navy"
                >
                  <span>Explore SHAPE Framework</span>
                  <ArrowRight className="size-3.5" />
                </Link>
                <Link
                  to="/placements/placement-support"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-semibold text-foreground hover:bg-surface"
                >
                  <Building className="size-3.5" />
                  <span>Recruitment Facilities</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Official Verification Reference Footer */}
          <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl border border-navy/20 bg-gradient-to-r from-navy/5 via-lime/5 to-transparent p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-navy text-lime">
                <ShieldCheck className="size-5" />
              </span>
              <div>
                <h4 className="text-sm font-bold text-foreground">
                  Verified Official SDIT Information
                </h4>
                <p className="text-xs text-muted-foreground">
                  Sourced from official SDIT Placement Training, Message from TPO, About the
                  Placement, and Institutional Values pages.
                </p>
              </div>
            </div>
            <a
              href="https://sdit.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90 dark:bg-lime dark:text-navy"
            >
              Visit sdit.ac.in <ExternalLink className="size-3" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <ChatLauncher />
    </div>
  );
}
