import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ChatLauncher } from "@/components/site/ChatLauncher";
import { sditEvents } from "@/data/eventsData";
import {
  CalendarDays,
  MapPin,
  Building2,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Award,
} from "lucide-react";

export const Route = createFileRoute("/campus-life/events/")({
  head: () => ({
    meta: [
      { title: "Official Events & Activities — Campus Life — SDIT" },
      {
        name: "description",
        content:
          "Official events, technical workshops, symposiums, cultural fests, conferences, and sports meets at Shree Devi Institute of Technology (SDIT), Mangaluru.",
      },
      {
        property: "og:title",
        content: "Official Events & Activities — Campus Life — SDIT",
      },
      {
        property: "og:description",
        content:
          "Explore official technical events, cultural fests, workshops, and historical conferences at SDIT Mangaluru.",
      },
    ],
  }),
  component: EventsIndexPage,
});

export function EventsIndexPage() {
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
              <Link to="/campus/index" className="hover:text-foreground">
                Campus Life
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-foreground">Official Events</li>
          </ol>
        </nav>

        {/* Back button */}
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-card-foreground shadow-soft transition-colors hover:border-violet hover:text-violet"
        >
          <ArrowLeft className="size-4" /> Back to Home
        </Link>

        {/* Header */}
        <div className="rounded-3xl border border-border bg-gradient-navy p-8 text-white shadow-soft sm:p-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-lime/15 px-3 py-1 text-xs font-bold tracking-wider text-lime uppercase">
            <CalendarDays className="size-3.5" /> Campus Life &amp; Activities
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Official SDIT Events &amp; Fests
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-navy-foreground/85 sm:text-base">
            From premier national-level cultural and technical fests to department workshops,
            international conferences, and annual sports championships, discover officially
            published events at Shree Devi Institute of Technology.
          </p>
        </div>

        {/* Events Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sditEvents.map((event) => (
            <div
              key={event.id}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:border-violet hover:shadow-card"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-violet/10 px-3 py-1 text-[11px] font-bold text-violet dark:bg-violet/20 dark:text-violet-300">
                    {event.category}
                  </span>
                  {event.verified && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                      <ShieldCheck className="size-3.5" /> Verified
                    </span>
                  )}
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                  <CalendarDays className="size-4 text-violet shrink-0" />
                  <span>{event.date}</span>
                </div>

                <h2 className="mt-2 text-lg font-bold tracking-tight text-card-foreground transition-colors group-hover:text-violet">
                  {event.title}
                </h2>

                <p className="mt-3 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                  {event.description}
                </p>

                <div className="mt-4 space-y-1.5 border-t border-border/60 pt-3 text-[11px] text-muted-foreground">
                  <div className="flex items-start gap-1.5">
                    <MapPin className="size-3.5 text-violet shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{event.venue}</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <Building2 className="size-3.5 text-violet shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{event.organizer}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-border/60 pt-4">
                <Link
                  to={`/campus-life/events/${event.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-navy transition-colors hover:text-violet dark:text-lime"
                >
                  View Details{" "}
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Footer Note */}
        <div className="mt-16 rounded-2xl border border-border bg-surface p-6 text-center text-xs text-muted-foreground">
          <p className="font-semibold text-foreground">Official Source Verification</p>
          <p className="mt-1">
            All events listed are sourced directly from official records and announcements published
            on <span className="font-semibold text-foreground">https://sdit.ac.in/</span>.
          </p>
        </div>
      </main>

      <Footer />
      <ChatLauncher />
    </div>
  );
}
