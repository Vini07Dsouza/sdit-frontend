import { Link } from "@tanstack/react-router";
import { SectionHeading } from "./SectionHeading";
import { placementBlocks } from "@/data/siteContent";
import { Briefcase, GraduationCap, Users, Building2, ArrowRight, ShieldCheck } from "lucide-react";

const icons: Record<string, typeof Briefcase> = {
  training: GraduationCap,
  career: Users,
  support: Briefcase,
  industry: Building2,
};

const routeMap: Record<string, string> = {
  training: "/placements/training",
  career: "/placements/career-development",
  support: "/placements/placement-support",
  industry: "/placements/industry-interaction",
};

export function PlacementsSection() {
  return (
    <section id="placements" className="scroll-mt-24 bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Training &amp; Placements"
            title="Career Readiness Support"
            description="The Department of Placement & Training at Shree Devi Institute of Technology plans and implements pre-placement training, value-added programs, career counselling, and campus recruitment to build career readiness across all engineering and management disciplines."
          />
          <Link
            to="/placements"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-navy px-5 py-2.5 text-xs font-semibold text-white shadow-soft transition-all duration-200 hover:bg-navy/90 hover:shadow-card dark:bg-lime dark:text-navy sm:self-auto"
          >
            <span>Explore Placement Cell</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {placementBlocks.map((block) => {
            const Icon = icons[block.id] ?? Briefcase;
            const href = routeMap[block.id] ?? "/placements";

            return (
              <Link
                key={block.id}
                to={href}
                className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-violet/40 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-gradient-navy group-hover:text-lime">
                      <Icon className="size-5" />
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-surface px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                      <ShieldCheck className="size-3 text-emerald-500" />
                      Official
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-card-foreground transition-colors group-hover:text-navy dark:group-hover:text-lime">
                    {block.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {block.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 border-t border-border/60 pt-4 text-xs font-bold text-navy dark:text-lime">
                  <span>Explore Details</span>
                  <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
