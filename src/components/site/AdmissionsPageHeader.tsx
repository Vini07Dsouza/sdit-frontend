import { Link } from "@tanstack/react-router";
import { ArrowLeft, ChevronRight, FileText, CheckCircle2, Send, Calendar } from "lucide-react";

interface AdmissionsPageHeaderProps {
  currentPage: "overview" | "eligibility" | "application-process" | "important-dates";
  title: string;
  eyebrow: string;
  description: string;
}

const NAV_TABS = [
  {
    id: "overview",
    label: "Admission Overview",
    to: "/admissions/overview" as const,
    icon: FileText,
  },
  {
    id: "eligibility",
    label: "Eligibility Criteria",
    to: "/admissions/eligibility" as const,
    icon: CheckCircle2,
  },
  {
    id: "application-process",
    label: "Application Process",
    to: "/admissions/application-process" as const,
    icon: Send,
  },
  {
    id: "important-dates",
    label: "Important Dates",
    to: "/admissions/important-dates" as const,
    icon: Calendar,
  },
];

export function AdmissionsPageHeader({
  currentPage,
  title,
  eyebrow,
  description,
}: AdmissionsPageHeaderProps) {
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
            <Link to="/admissions" className="transition-colors hover:text-white">
              Admissions
            </Link>
            <ChevronRight className="size-3.5 text-navy-foreground/40" />
            <span className="font-semibold text-lime">{title}</span>
          </nav>

          <Link
            to="/admissions"
            className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/20 bg-navy-soft/40 px-3.5 py-1.5 text-xs font-semibold text-navy-foreground transition-all hover:border-lime/40 hover:bg-navy-soft hover:text-white"
          >
            <ArrowLeft className="size-3.5" />
            Back to Admissions
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

        {/* Admissions Navigation Tabs */}
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
