import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ChatLauncher } from "@/components/site/ChatLauncher";
import {
  ArrowLeft,
  GraduationCap,
  Sparkles,
  BookOpen,
  Code,
  MessageSquare,
  UserCheck,
  Cpu,
  Layers,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

export const Route = createFileRoute("/placements/training")({
  head: () => ({
    meta: [
      { title: "Training Activities — Training & Placements — SDIT" },
      {
        name: "description",
        content:
          "Official training activities at SDIT Mangaluru: Pre-placement, aptitude, technical, communication, and personality development programs.",
      },
      {
        property: "og:title",
        content: "Training Activities — Training & Placements — SDIT Mangaluru",
      },
    ],
  }),
  component: TrainingPage,
});

export function TrainingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Breadcrumb navigation */}
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
            <li className="font-semibold text-foreground">Training</li>
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
            <GraduationCap className="size-3.5" /> Pillar 01
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Training Activities
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-navy-foreground/85 sm:text-base">
            The Department of Placement &amp; Training at Shree Devi Institute of Technology plans
            and implements comprehensive value-added programs and pre-placement training modules
            designed to prepare students for campus recruitment and technical careers.
          </p>
        </div>

        {/* Training Sections Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Pre-Placement Training */}
          <section className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                <BookOpen className="size-5" />
              </span>
              <div>
                <span className="text-xs font-bold text-violet uppercase">Core Preparation</span>
                <h2 className="text-xl font-bold text-card-foreground">Pre-Placement Training</h2>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              SDIT conducts structured pre-placement training specifically tailored for final-year
              students. This training encompasses aptitude enhancement, logical reasoning, and
              techniques for confidently facing recruitment interviews.
            </p>
            <div className="mt-6 space-y-2.5 border-t border-border/60 pt-4 text-xs font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                <span>Focus on analytical aptitude and quantitative problem solving</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                <span>Logical reasoning and verbal skill consolidation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                <span>Preparation strategies for facing campus selection panels</span>
              </div>
            </div>
          </section>

          {/* Aptitude & Logical Skills */}
          <section className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                <Sparkles className="size-5" />
              </span>
              <div>
                <span className="text-xs font-bold text-violet uppercase">Cognitive Skills</span>
                <h2 className="text-xl font-bold text-card-foreground">
                  Aptitude &amp; Logical Skills
                </h2>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Aptitude training forms a core foundation of SDIT&apos;s training curriculum.
              Systematic training sessions focus on numerical ability, data interpretation, critical
              thinking, and structured logical deduction.
            </p>
            <div className="mt-6 space-y-2.5 border-t border-border/60 pt-4 text-xs font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                <span>Progressive aptitude problem-solving drills</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                <span>Logical deduction and pattern analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                <span>Regular diagnostic assessments and evaluation feedback</span>
              </div>
            </div>
          </section>

          {/* Technical & Communication Training */}
          <section className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                <Code className="size-5" />
              </span>
              <div>
                <span className="text-xs font-bold text-violet uppercase">Semester 3 to 6</span>
                <h2 className="text-xl font-bold text-card-foreground">
                  Technical &amp; Communication Training
                </h2>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              According to the official SDIT Placement Training framework, dedicated aptitude,
              technical, and communication training are conducted systematically for second- and
              third-year engineering students to prepare them well before final-year recruitment
              drives.
            </p>
            <div className="mt-6 space-y-2.5 border-t border-border/60 pt-4 text-xs font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                <span>Technical training aligned with department core domains</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                <span>Communication classes and professional verbal articulation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                <span>Early foundation building during 2nd and 3rd academic years</span>
              </div>
            </div>
          </section>

          {/* Mock Interviews & Placement Talks */}
          <section className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                <UserCheck className="size-5" />
              </span>
              <div>
                <span className="text-xs font-bold text-violet uppercase">
                  Recruitment Simulation
                </span>
                <h2 className="text-xl font-bold text-card-foreground">
                  Mock Interviews &amp; Placement Talks
                </h2>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              SDIT organizes mock interview sessions conducted by experienced resource persons and
              industry experts to simulate real corporate interviews, evaluate body language, and
              refine technical responses.
            </p>
            <div className="mt-6 space-y-2.5 border-t border-border/60 pt-4 text-xs font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                <span>Expert-conducted simulated interview panels</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                <span>Constructive feedback on technical and HR responses</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                <span>Placement talks by invited corporate professionals</span>
              </div>
            </div>
          </section>
        </div>

        {/* Value-Added Programs (PDP, Tech Training, Bridge Courses) */}
        <section className="mt-12 rounded-3xl border border-border bg-surface/50 p-8 shadow-soft">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-wider text-violet uppercase">
              Value-Added Curriculum
            </span>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Value-Added Programs
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              SDIT plans and implements specialized value-added programs to complement standard
              university curricula:
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="grid size-10 place-items-center rounded-xl bg-violet/10 text-violet">
                <MessageSquare className="size-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-card-foreground">PDP Programs</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Personality Development Programs focusing on professional etiquette, executive
                communication, presentation skills, and workplace ethics.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="grid size-10 place-items-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <Cpu className="size-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-card-foreground">
                Technology Training Programs
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Specialized technology-focused training sessions that expose students to applied
                engineering concepts, software platforms, and emerging computational tools.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="grid size-10 place-items-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <Layers className="size-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-card-foreground">Bridge Courses</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Targeted transition courses designed to reinforce foundational concepts and prepare
                incoming students for advanced technical curricula.
              </p>
            </div>
          </div>
        </section>

        {/* Verification Footer Banner */}
        <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-muted-foreground">
            <p className="font-semibold text-foreground">Official Reference Source</p>
            <p>
              Information sourced from SDIT Placement Training
              (https://sdit.ac.in/placement-training/).
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
