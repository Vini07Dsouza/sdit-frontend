import { Link } from "@tanstack/react-router";
import {
  Library,
  FlaskConical,
  Monitor,
  Presentation,
  Trophy,
  Users,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Building,
  Bus,
  Utensils,
  Home,
  Radio,
  Trees,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { campusFacilityCards } from "@/data/siteContent";
import { additionalCampusAmenities } from "@/data/campusData";

const FACILITY_ICONS: Record<string, typeof Library> = {
  library: Library,
  laboratories: FlaskConical,
  "computer-facilities": Monitor,
  classrooms: Presentation,
  sports: Trophy,
  "student-facilities": Users,
};

const FACILITY_IMAGES: Record<string, string> = {
  library: "/images/library.jpg",
  laboratories: "/images/laboratories.jpg",
  "computer-facilities": "/images/computer_facilities.jpg",
  classrooms: "/images/classroom.jpg",
  sports: "/images/sports_games.jpg",
  "student-facilities": "/images/student_facilities.jpg",
};

const AMENITY_ICONS: Record<string, typeof Building> = {
  "seminar-halls": Radio,
  auditorium: Building,
  canteen: Utensils,
  transportation: Bus,
  hostels: Home,
  "green-campus": Trees,
};

const AMENITY_IMAGES: Record<string, string> = {
  "seminar-halls": "/images/seminarhall.jpg",
  auditorium: "/images/auditorium.jpg",
  canteen: "/images/shree-devi-canteen.jpg",
  transportation: "/images/shree-devi-eng-transport.jpg",
  hostels: "/images/hostel.png",
  "green-campus": "/images/about.jpg",
};

export function CampusSection() {
  return (
    <section id="campus" className="scroll-mt-24 bg-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Campus Infrastructure"
          title="Campus Facilities &amp; Environment"
          description="Shree Devi Institute of Technology offers modern physical, computing, academic, and student-support facilities across its serene Kenjar hilltop campus in Mangaluru."
        />

        {/* 6 Core Required Campus Facility Cards — Entire Card is Clickable */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {campusFacilityCards.map((facility) => {
            const Icon = FACILITY_ICONS[facility.id] ?? Library;
            const imgSrc = FACILITY_IMAGES[facility.id];

            return (
              <Link
                key={facility.id}
                to={facility.href}
                className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:p-7"
              >
                <div>
                  {imgSrc && (
                    <div className="mb-4 -mx-6 -mt-6 sm:-mx-7 sm:-mt-7 overflow-hidden">
                      <img
                        src={imgSrc}
                        alt={facility.title}
                        className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span
                      aria-hidden="true"
                      className="grid size-11 shrink-0 place-items-center rounded-xl bg-surface text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                    >
                      <Icon className="size-5" />
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700 dark:text-emerald-300">
                      <ShieldCheck className="size-3" />
                      Verified
                    </span>
                  </div>

                  <p className="mt-4 text-xs font-bold uppercase tracking-wider text-primary">
                    {facility.meta}
                  </p>

                  <h3 className="mt-1 text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-xl">
                    {facility.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {facility.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 border-t border-border/60 pt-4 text-xs font-bold text-primary">
                  <span>Explore {facility.title}</span>
                  <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Additional Verified Campus Amenities */}
        <div className="mt-16 rounded-3xl border border-border/80 bg-background p-6 shadow-soft sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="grid size-8 place-items-center rounded-lg bg-lime/15 text-lime-700 dark:text-lime-400">
                  <Sparkles className="size-4" />
                </span>
                <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  Additional Officially Verified Amenities
                </h3>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                Auxiliary facilities supporting student life, residential living, and institutional
                events.
              </p>
            </div>
            <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
              6 Campus Highlights
            </span>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {additionalCampusAmenities.map((amenity) => {
              const Icon = AMENITY_ICONS[amenity.id] || Building;
              const imgSrc = AMENITY_IMAGES[amenity.id];
              return (
                <div
                  key={amenity.id}
                  className="flex flex-col justify-between overflow-hidden rounded-2xl border border-border/70 bg-card p-5 shadow-xs transition-colors hover:border-navy/40 sm:p-6"
                >
                  <div>
                    {imgSrc && (
                      <div className="mb-4 -mx-5 -mt-5 sm:-mx-6 sm:-mt-6 overflow-hidden">
                        <img
                          src={imgSrc}
                          alt={amenity.title}
                          className="h-36 w-full object-cover transition-transform duration-300 hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}

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
                    <span className="font-semibold text-foreground">Official Detail: </span>
                    {amenity.verifiedDetails}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
