import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ChatLauncher } from "@/components/site/ChatLauncher";
import { campusFacilities, additionalCampusAmenities } from "@/data/campusData";
import {
  Library,
  FlaskConical,
  Monitor,
  Presentation,
  Trophy,
  Users,
  Building,
  Bus,
  Utensils,
  Home,
  Radio,
  Trees,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export const Route = createFileRoute("/campus/")({
  head: () => ({
    meta: [
      { title: "Campus Facilities — Shree Devi Institute of Technology (SDIT)" },
      {
        name: "description",
        content:
          "Official campus facilities directory for Shree Devi Institute of Technology (SDIT), Kenjar, Mangaluru. Library, laboratories, computer facilities, classrooms, sports, and student hostels.",
      },
      {
        property: "og:title",
        content: "Campus Facilities — Shree Devi Institute of Technology (SDIT)",
      },
      {
        property: "og:description",
        content:
          "Explore verified academic and student infrastructure at SDIT Mangaluru: 26,759+ volume library, departmental labs, ICT classrooms, and sports arena.",
      },
    ],
  }),
  component: CampusIndexPage,
});

const FACILITY_ICONS: Record<string, typeof Library> = {
  library: Library,
  laboratories: FlaskConical,
  "computer-facilities": Monitor,
  classrooms: Presentation,
  sports: Trophy,
  "student-facilities": Users,
};

const AMENITY_ICONS: Record<string, typeof Building> = {
  "seminar-halls": Radio,
  auditorium: Building,
  canteen: Utensils,
  transportation: Bus,
  hostels: Home,
  "green-campus": Trees,
};

function CampusIndexPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Hero Banner */}
        <div className="relative overflow-hidden bg-gradient-navy pt-24 pb-16 text-navy-foreground sm:pt-28 sm:pb-20">
          <div aria-hidden="true" className="absolute inset-0 bg-tech-grid opacity-50" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block rounded-full bg-lime/15 px-3 py-1 text-xs font-bold tracking-wider text-lime uppercase">
                Campus Infrastructure
              </span>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Campus &amp; Facilities
              </h1>
              <p className="mt-4 text-base leading-relaxed text-navy-foreground/85 sm:text-lg">
                Discover the physical, academic, and student-support infrastructure across the
                serene Kenjar hilltop campus of Shree Devi Institute of Technology (SDIT), Mangaluru
                — featuring a 26,759+ volume central library, high-tech departmental laboratories,
                ICT-enabled smart classrooms, modern computer facilities, sports arena, and student
                hostels.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
              <div className="rounded-2xl border border-navy-foreground/15 bg-navy-soft/60 p-4">
                <p className="text-2xl font-black text-lime sm:text-3xl">26,759+</p>
                <p className="mt-1 text-xs font-semibold text-navy-foreground/90">
                  Books &amp; E-Resources
                </p>
              </div>
              <div className="rounded-2xl border border-navy-foreground/15 bg-navy-soft/60 p-4">
                <p className="text-2xl font-black text-lime sm:text-3xl">10+</p>
                <p className="mt-1 text-xs font-semibold text-navy-foreground/90">
                  Department Lab Suites
                </p>
              </div>
              <div className="rounded-2xl border border-navy-foreground/15 bg-navy-soft/60 p-4">
                <p className="text-2xl font-black text-lime sm:text-3xl">Wi-Fi</p>
                <p className="mt-1 text-xs font-semibold text-navy-foreground/90">
                  Connected Classrooms
                </p>
              </div>
              <div className="rounded-2xl border border-navy-foreground/15 bg-navy-soft/60 p-4">
                <p className="text-2xl font-black text-lime sm:text-3xl">VTU</p>
                <p className="mt-1 text-xs font-semibold text-navy-foreground/90">
                  Intercollegiate Sports
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Required Campus Facility Cards */}
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-violet">
                Explore Dedicated Facility Pages
              </span>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Core Campus Facilities
              </h2>
            </div>
            <p className="text-sm text-muted-foreground sm:max-w-md">
              Select any facility card to view comprehensive verified specifications, laboratories,
              and learning environments.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {campusFacilities.map((facility) => {
              const Icon = FACILITY_ICONS[facility.id] || Library;

              return (
                <Link
                  key={facility.id}
                  to={facility.href}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex size-11 items-center justify-center rounded-xl bg-surface text-navy transition-colors group-hover:bg-gradient-navy group-hover:text-lime">
                        <Icon className="size-5" />
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-lime/15 px-2.5 py-0.5 text-[11px] font-semibold text-lime-800 dark:text-lime-300">
                        <ShieldCheck className="size-3" />
                        Verified
                      </span>
                    </div>

                    <p className="mt-4 text-xs font-bold uppercase tracking-wider text-violet">
                      {facility.badge}
                    </p>

                    <h3 className="mt-1 text-lg font-bold text-card-foreground transition-colors group-hover:text-navy dark:group-hover:text-lime">
                      {facility.shortTitle}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {facility.summary}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-1.5 border-t border-border/60 pt-4 text-xs font-bold text-navy dark:text-lime">
                    <span>Explore {facility.shortTitle}</span>
                    <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Additional Campus Amenities */}
          <div className="mt-16 rounded-3xl border border-border/80 bg-surface p-6 shadow-soft sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-5">
              <div>
                <div className="flex items-center gap-2">
                  <span className="grid size-8 place-items-center rounded-lg bg-lime/15 text-lime-700 dark:text-lime-400">
                    <Sparkles className="size-4" />
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    Additional Officially Verified Campus Amenities
                  </h3>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Supporting infrastructure providing residential, recreational, and transit
                  facilities for SDIT students.
                </p>
              </div>
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                6 Campus Highlights
              </span>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {additionalCampusAmenities.map((amenity) => {
                const Icon = AMENITY_ICONS[amenity.id] || Building;
                return (
                  <div
                    key={amenity.id}
                    className="flex flex-col justify-between rounded-2xl border border-border/70 bg-card p-5 shadow-xs transition-colors hover:border-navy/40 sm:p-6"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <span
                          aria-hidden="true"
                          className="grid size-10 place-items-center rounded-xl bg-surface text-navy"
                        >
                          <Icon className="size-5" />
                        </span>
                        <span className="rounded-md bg-secondary px-2 py-0.5 text-[11px] font-semibold text-secondary-foreground">
                          {amenity.category}
                        </span>
                      </div>

                      <h4 className="mt-4 text-base font-bold text-foreground sm:text-lg">
                        {amenity.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {amenity.description}
                      </p>
                    </div>

                    <div className="mt-4 border-t border-border/50 pt-3 text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">Verified: </span>
                      {amenity.verifiedDetails}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Official Verification Banner */}
          <div className="mt-12 flex flex-col items-start gap-4 rounded-3xl border border-navy/20 bg-gradient-to-r from-navy/5 via-lime/5 to-transparent p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-start gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-navy text-lime">
                <ShieldCheck className="size-5" />
              </span>
              <div>
                <h4 className="text-base font-bold text-foreground sm:text-lg">
                  Official Verification Source
                </h4>
                <p className="text-sm text-muted-foreground">
                  Primary Source: Official SDIT Website (sdit.ac.in), Shree Devi College portals,
                  and affiliated VTU institutional records.
                </p>
              </div>
            </div>

            <a
              href="https://sdit.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
            >
              Visit Official SDIT Website <ExternalLink className="size-3" />
            </a>
          </div>
        </div>
      </main>

      <Footer />
      <ChatLauncher />
    </div>
  );
}
