import { SectionHeading } from "./SectionHeading";
import { sditEvents } from "@/data/eventsData";
import { CalendarDays, ArrowRight, ShieldCheck, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function EventsSection() {
  const featuredEvents = sditEvents.slice(0, 3);

  return (
    <section id="events" className="scroll-mt-24 bg-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <SectionHeading
            eyebrow="Campus Life"
            title="Events"
            description="Official technical workshops, national-level cultural fests, conferences, and sports championships hosted at Shree Devi Institute of Technology."
          />
          <Link
            to="/campus-life/events"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-navy transition-colors hover:text-violet dark:text-lime"
          >
            View All Official Events <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featuredEvents.map((event, index) => (
            <div
              key={event.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:border-primary hover:shadow-card"
            >
              <div>
                {index === 0 && (
                  <div className="mb-4 -mx-6 -mt-6 overflow-hidden">
                    <img
                      src="/images/event_sambhram-img27.jpg"
                      alt="Shree Devi Sambhram Event"
                      className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
                {index === 1 && (
                  <div className="mb-4 -mx-6 -mt-6 overflow-hidden">
                    <img
                      src="/images/event-img2.jpg"
                      alt="Cultural Fest Performance"
                      className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
                {index >= 2 && (
                  <div className="mb-4 -mx-6 -mt-6 overflow-hidden">
                    <img
                      src="/images/seminarhall.jpg"
                      alt="Conference and Seminar"
                      className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}

                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold text-primary dark:bg-primary/20 dark:text-primary-300">
                    {event.category}
                  </span>
                  {event.verified && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                      <ShieldCheck className="size-3.5" /> Verified
                    </span>
                  )}
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                  <CalendarDays className="size-4 text-primary shrink-0" />
                  <span>{event.date}</span>
                </div>

                <h3 className="mt-2 text-lg font-bold tracking-tight text-card-foreground transition-colors group-hover:text-primary">
                  {event.title}
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                  {event.description}
                </p>

                <div className="mt-4 flex items-center gap-1.5 text-[11px] text-muted-foreground border-t border-border/60 pt-3">
                  <MapPin className="size-3.5 text-primary shrink-0" />
                  <span className="line-clamp-1">{event.venue}</span>
                </div>
              </div>

              <div className="mt-6 border-t border-border/60 pt-4">
                <Link
                  to={`/campus-life/events/${event.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary transition-colors hover:text-accent"
                >
                  View Details{" "}
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
