import { Link } from "@tanstack/react-router";
import {
  GraduationCap,
  CheckCircle2,
  Send,
  Calendar,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { admissionBlocks } from "@/data/siteContent";
import { OFFICIAL_LINKS, OFFICIAL_CONTACT } from "@/data/admissionsData";

const CARD_ICONS = {
  overview: GraduationCap,
  eligibility: CheckCircle2,
  process: Send,
  dates: Calendar,
};

export function AdmissionsSection() {
  return (
    <section
      id="admissions"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-navy py-16 text-navy-foreground sm:py-20 lg:py-24"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-tech-grid opacity-60" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Admissions"
          title="Admissions at SDIT"
          description="Explore verified admission pathways, academic eligibility criteria, application procedures, and schedule notifications for Shree Devi Institute of Technology."
          tone="dark"
        />

        {/* 4 Interactive Admissions Cards — Entire card is clickable */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {admissionBlocks.map((block) => {
            const Icon = CARD_ICONS[block.id as keyof typeof CARD_ICONS] || GraduationCap;

            return (
              <Link
                key={block.id}
                to={block.href}
                className="group flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-lime/60 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground group-hover:bg-navy group-hover:text-lime transition-colors">
                      <Icon className="size-5" />
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-lime/15 px-2.5 py-0.5 text-[11px] font-semibold text-lime-800 dark:text-lime-300">
                      <ShieldCheck className="size-3" />
                      Verified
                    </span>
                  </div>

                  <p className="mt-4 text-xs font-bold uppercase tracking-wider text-violet">
                    {block.meta}
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-card-foreground group-hover:text-navy dark:group-hover:text-lime transition-colors">
                    {block.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {block.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 border-t border-border/60 pt-4 text-xs font-bold text-navy dark:text-lime">
                  <span>Explore {block.title}</span>
                  <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Official Admissions Helpline & Actions Banner */}
        <div className="mt-12 flex flex-col items-start gap-6 rounded-3xl border border-navy-foreground/15 bg-navy-soft/70 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-lime/20 px-2.5 py-0.5 text-xs font-bold text-lime">
                Official Helpline
              </span>
              <p className="font-bold text-white">Admissions Guidance &amp; Enquiries</p>
            </div>
            <p className="mt-2 max-w-xl text-sm text-navy-foreground/80">
              For direct counseling, eligibility queries, and seat availability at SDIT Kenjar, call{" "}
              <strong className="text-white">{OFFICIAL_CONTACT.campusPhones[0]}</strong> or mobile
              helpline <strong className="text-white">{OFFICIAL_CONTACT.mobileHelplines[0]}</strong>
              .
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={OFFICIAL_LINKS.applyNow}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-lime px-5 py-2.5 text-sm font-bold text-navy transition-all hover:bg-lime/90 hover:shadow-sm"
            >
              Apply Online <ExternalLink className="size-3.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-navy-foreground/25 px-5 py-2.5 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-soft hover:text-white"
            >
              Contact Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
