import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ChatLauncher } from "@/components/site/ChatLauncher";
import { sditEvents } from "@/data/eventsData";
import {
  CalendarDays,
  MapPin,
  Building2,
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  History,
} from "lucide-react";

export const Route = createFileRoute("/campus-life/events/world-conference")({
  head: () => ({
    meta: [
      { title: "World Conference 2019 — SDIT Events" },
      {
        name: "description",
        content:
          "Official 8th World Conference on Applied Sciences, Engineering and Management hosted at SDIT Mangaluru in collaboration with Kyushu University, Japan and BRCORP Singapore.",
      },
      {
        property: "og:title",
        content: "World Conference 2019 — SDIT Events",
      },
    ],
  }),
  component: WorldConferencePage,
});

export function WorldConferencePage() {
  const event = sditEvents.find((e) => e.slug === "world-conference-2019")!;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-muted-foreground">
          <ol className="flex items-center gap-2">
            <li>
              <Link to="/" className="hover:text-foreground">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/campus-life/events" className="hover:text-foreground">
                Official Events
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-foreground">World Conference 2019</li>
          </ol>
        </nav>

        <Link
          to="/campus-life/events"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-card-foreground shadow-soft transition-colors hover:border-violet hover:text-violet"
        >
          <ArrowLeft className="size-4" /> Back to Official Events
        </Link>

        {/* Header */}
        <div className="rounded-3xl border border-border bg-gradient-navy p-8 text-white shadow-soft sm:p-12">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-lime/15 px-3 py-1 text-xs font-bold tracking-wider text-lime uppercase">
              {event.category}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-300">
              <History className="size-3.5" /> Historical Event (2019)
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
              <ShieldCheck className="size-3.5 text-lime" /> Official SDIT Record
            </span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {event.title}
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-navy-foreground/85 sm:text-base">
            {event.description}
          </p>
        </div>

        {/* Details Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
              <h2 className="text-xl font-bold text-card-foreground">Conference Overview</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {event.fullDescription}
              </p>

              <h3 className="mt-8 text-lg font-bold text-card-foreground">Conference Highlights</h3>
              <div className="mt-4 space-y-3">
                {event.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-border bg-surface/50 p-4 text-xs font-medium text-foreground"
                  >
                    <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Metadata */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8 space-y-6">
            <h2 className="text-base font-bold text-card-foreground border-b border-border/60 pb-3">
              Event Details
            </h2>

            <div className="space-y-4 text-xs">
              <div>
                <span className="font-semibold text-muted-foreground uppercase">Actual Date</span>
                <div className="mt-1 flex items-center gap-2 font-bold text-foreground">
                  <CalendarDays className="size-4 text-violet" />
                  <span>{event.date}</span>
                </div>
              </div>

              <div>
                <span className="font-semibold text-muted-foreground uppercase">Venue</span>
                <div className="mt-1 flex items-start gap-2 text-foreground">
                  <MapPin className="size-4 text-violet shrink-0 mt-0.5" />
                  <span>{event.venue}</span>
                </div>
              </div>

              <div>
                <span className="font-semibold text-muted-foreground uppercase">Collaborators</span>
                <div className="mt-1 flex items-start gap-2 text-foreground">
                  <Building2 className="size-4 text-violet shrink-0 mt-0.5" />
                  <span>{event.organizer}</span>
                </div>
              </div>
            </div>

            <div className="border-t border-border/60 pt-4">
              <a
                href="https://sdit.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-4 py-2.5 text-xs font-semibold text-white transition-opacity hover:opacity-90 dark:bg-lime dark:text-navy"
              >
                Official SDIT Website <ExternalLink className="size-3.5" />
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
