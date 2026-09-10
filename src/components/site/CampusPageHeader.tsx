import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ChevronRight,
  Library,
  FlaskConical,
  Monitor,
  Presentation,
  Trophy,
  Users,
} from "lucide-react";

interface CampusPageHeaderProps {
  currentPage:
    | "library"
    | "laboratories"
    | "computer-facilities"
    | "classrooms"
    | "sports"
    | "student-facilities";
  title: string;
  eyebrow: string;
  description: string;
}

const NAV_TABS = [
  {
    id: "library",
    label: "Library",
    to: "/campus/library" as const,
    icon: Library,
  },
  {
    id: "laboratories",
    label: "Laboratories",
    to: "/campus/laboratories" as const,
    icon: FlaskConical,
  },
  {
    id: "computer-facilities",
    label: "Computer Facilities",
    to: "/campus/computer-facilities" as const,
    icon: Monitor,
  },
  {
    id: "classrooms",
    label: "Classrooms & Halls",
    to: "/campus/classrooms" as const,
    icon: Presentation,
  },
  {
    id: "sports",
    label: "Sports & Games",
    to: "/campus/sports" as const,
    icon: Trophy,
  },
  {
    id: "student-facilities",
    label: "Student Facilities",
    to: "/campus/student-facilities" as const,
    icon: Users,
  },
];

export function CampusPageHeader({
  currentPage,
  title,
  eyebrow,
  description,
}: CampusPageHeaderProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-navy pt-24 pb-12 text-navy-foreground sm:pt-28 sm:pb-16">
      <div aria-hidden="true" className="absolute inset-0 bg-tech-grid opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Back Link */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs text-navy-foreground/75 sm:text-sm"
          >
            <Link to="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="size-3.5 text-navy-foreground/40" />
            <Link to="/campus" className="transition-colors hover:text-white">
              Campus
            </Link>
            <ChevronRight className="size-3.5 text-navy-foreground/40" />
            <span className="font-semibold text-lime">{title}</span>
          </nav>

          <Link
            to="/campus"
            className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/20 bg-navy-soft/40 px-3.5 py-1.5 text-xs font-semibold text-navy-foreground transition-all hover:border-lime/40 hover:bg-navy-soft hover:text-white"
          >
            <ArrowLeft className="size-3.5" />
            Back to Campus
          </Link>
        </div>

        {/* Heading & Intro */}
        <div className="mt-8 max-w-3xl">
          <span className="inline-block rounded-full bg-lime/15 px-3 py-1 text-xs font-bold tracking-wider text-lime uppercase">
            {eyebrow}
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-navy-foreground/85 sm:text-lg">
            {description}
          </p>
        </div>

        {/* Campus Facilities Navigation Tabs */}
        <div className="mt-10 flex flex-wrap gap-2 border-t border-navy-foreground/15 pt-6">
          {NAV_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === currentPage;
            return (
              <Link
                key={tab.id}
                to={tab.to}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all duration-200 sm:text-sm ${
                  isActive
                    ? "bg-lime text-navy shadow-sm ring-2 ring-lime/40"
                    : "border border-navy-foreground/15 bg-navy-soft/60 text-navy-foreground/80 hover:border-navy-foreground/30 hover:bg-navy-soft hover:text-white"
                }`}
              >
                <Icon className="size-4" />
                <span>{tab.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
