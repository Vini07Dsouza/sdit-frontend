import { academicDepartments, additionalAcademicAreas } from "@/data/departmentsData";
import {
  Code2,
  Network,
  Brain,
  Database,
  Cpu,
  Cog,
  Building2,
  Plane,
  Terminal,
  Briefcase,
  HardHat,
  Atom,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const departmentIcons = [
  Code2, // 1. CSE
  Network, // 2. ISE
  Brain, // 3. CSE - AIML
  Database, // 4. AI & DS
  Cpu, // 5. ECE
  Cog, // 6. ME
  Building2, // 7. CV
  Plane, // 8. AE
  Terminal, // 9. MCA
  Briefcase, // 10. MBA
];

const additionalIcons = [
  HardHat, // M.Tech CT
  Atom, // Basic Science
  GraduationCap, // Research Centre
];

export function DepartmentsSection() {
  return (
    <section id="departments" className="scroll-mt-24 bg-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Academic Departments"
          title="Departments &amp; Faculty"
          description="SDIT houses 10 dedicated departments offering accredited programs, state-of-the-art laboratories, industry collaboration, and practical research."
        />

        {/* 10 Core Academic Departments */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {academicDepartments.map((dept, index) => {
            const Icon = departmentIcons[index % departmentIcons.length];
            const deptNumber = String(index + 1).padStart(2, "0");

            return (
              <div
                key={dept.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-navy hover:shadow-soft sm:p-7"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="grid size-11 shrink-0 place-items-center rounded-xl bg-surface text-navy transition-colors group-hover:bg-gradient-navy group-hover:text-lime"
                      >
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                          Department {deptNumber}
                        </span>
                        {dept.shortCode && (
                          <span className="ml-2 rounded-md bg-secondary px-2 py-0.5 text-[11px] font-bold text-secondary-foreground">
                            {dept.shortCode}
                          </span>
                        )}
                      </div>
                    </div>

                    <span className="rounded-full bg-navy/5 px-2.5 py-0.5 text-[11px] font-semibold text-muted-foreground">
                      {dept.degreeLevel}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold tracking-tight text-foreground sm:text-xl">
                    {dept.name}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {dept.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Academic Areas */}
        <div className="mt-16 rounded-3xl border border-border/80 bg-background p-6 shadow-soft sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="grid size-8 place-items-center rounded-lg bg-lime/15 text-lime-700 dark:text-lime-400">
                  <Sparkles className="size-4" />
                </span>
                <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  Additional Academic Areas
                </h3>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                Foundational sciences, specialized postgraduate engineering, and doctoral research
                centre.
              </p>
            </div>
            <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
              3 Specialized Wings
            </span>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {additionalAcademicAreas.map((area, index) => {
              const Icon = additionalIcons[index % additionalIcons.length];
              return (
                <div
                  key={area.id}
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
                        {area.badge}
                      </span>
                    </div>

                    <h4 className="mt-4 text-base font-bold text-foreground sm:text-lg">
                      {area.title}
                    </h4>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                      {area.description}
                    </p>
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
