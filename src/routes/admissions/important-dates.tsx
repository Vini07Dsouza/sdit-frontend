import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ChatLauncher } from "@/components/site/ChatLauncher";
import { AdmissionsPageHeader } from "@/components/site/AdmissionsPageHeader";
import { OFFICIAL_CONTACT, OFFICIAL_LINKS } from "@/data/admissionsData";
import {
  Calendar,
  AlertTriangle,
  ExternalLink,
  Phone,
  Mail,
  Clock,
  Bell,
  Building,
} from "lucide-react";

export const Route = createFileRoute("/admissions/important-dates")({
  head: () => ({
    meta: [
      { title: "Important Dates — Shree Devi Institute of Technology (SDIT)" },
      {
        name: "description",
        content:
          "Official admission dates, deadlines, and notifications for Shree Devi Institute of Technology (SDIT), Mangaluru.",
      },
      {
        property: "og:title",
        content: "Important Dates — Shree Devi Institute of Technology (SDIT)",
      },
      {
        property: "og:description",
        content:
          "Check the latest admission schedule, counseling dates, and official announcements for SDIT Mangaluru.",
      },
    ],
  }),
  component: ImportantDatesPage,
});

function ImportantDatesPage() {
  const dateItems = [
    {
      title: "Application Opening Date",
      status: "Not currently published on the official SDIT website",
      notes:
        "Applications for the current academic session are processed on an ongoing basis. Contact SDIT admissions desk for current availability.",
    },
    {
      title: "Application Closing Date / Last Date to Apply",
      status: "Not currently published on the official SDIT website",
      notes: "Subject to seat availability across branches and KEA counseling schedules.",
    },
    {
      title: "Admission Deadline",
      status: "Not currently published on the official SDIT website",
      notes:
        "Determined in accordance with VTU calendar of events and state government regulations.",
    },
    {
      title: "KEA KCET / Karnataka PGCET Counselling Dates",
      status: "Announced independently by KEA (Karnataka Examinations Authority)",
      notes:
        "Candidates must follow the official KEA portal (cetonline.karnataka.gov.in) for option entry, mock allotment, and round-wise reporting schedules.",
    },
    {
      title: "COMEDK UGET Counselling & Reporting Dates",
      status: "Announced independently by COMEDK",
      notes:
        "Follow the official COMEDK portal (comedk.org) for round schedules and reporting at SDIT.",
    },
    {
      title: "Commencement of First Year Classes / Orientation",
      status: "Not currently published on the official SDIT website",
      notes:
        "Orientation dates are notified directly to admitted candidates prior to the start of the academic semester as per VTU notification.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <AdmissionsPageHeader
          currentPage="important-dates"
          eyebrow="Schedule & Deadlines"
          title="Important Dates"
          description="Official schedule, deadlines, and notifications for admissions to Shree Devi Institute of Technology, Mangaluru."
        />

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          {/* Official Mandated Notice Box */}
          <div className="rounded-3xl border border-amber-500/30 bg-amber-50/70 p-6 text-amber-950 dark:bg-amber-950/20 dark:text-amber-200 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-amber-500/20 text-amber-700 dark:text-amber-400">
                <AlertTriangle className="size-6" />
              </span>
              <div>
                <h2 className="text-lg font-bold sm:text-xl">Official Publication Notice</h2>
                <p className="mt-2 text-sm leading-relaxed sm:text-base">
                  Admission dates are not currently published on the official SDIT website. Students
                  are advised to check the official SDIT website or contact the institute for the
                  latest admission notifications and deadlines.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={OFFICIAL_LINKS.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-amber-900 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-amber-800 dark:bg-amber-400 dark:text-navy"
                  >
                    Visit Official SDIT Website <ExternalLink className="size-3" />
                  </a>
                  <a
                    href={OFFICIAL_LINKS.contactUs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-amber-800/30 px-4 py-2 text-xs font-semibold transition-colors hover:bg-amber-500/10"
                  >
                    Contact SDIT Directly <ExternalLink className="size-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Published Status by Event */}
          <div className="mt-12">
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Admission Events &amp; Publication Status
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Status of individual admission dates based on current official records.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {dateItems.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col justify-between rounded-2xl border border-border bg-card p-5 shadow-soft"
                >
                  <div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="size-4 text-navy dark:text-lime" />
                      <span className="text-xs font-semibold uppercase tracking-wider">
                        Admission Event
                      </span>
                    </div>

                    <h3 className="mt-3 text-base font-bold text-foreground">{item.title}</h3>

                    <div className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground">
                      <Clock className="size-3 shrink-0" />
                      <span>{item.status}</span>
                    </div>

                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      {item.notes}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Advisory & Notification Channels */}
          <div className="mt-14 rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-8 lg:p-10">
            <div className="flex items-center gap-3 border-b border-border/60 pb-5">
              <span className="grid size-10 place-items-center rounded-xl bg-navy text-lime">
                <Bell className="size-5" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-foreground sm:text-xl">
                  How to Receive Latest Notifications
                </h3>
                <p className="text-xs text-muted-foreground sm:text-sm">
                  Official channels to verify admission schedules and seat availability.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-border/70 bg-card p-5">
                <h4 className="font-bold text-foreground">
                  1. Contact the Admissions Desk Directly
                </h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Call the institute office or mobile helplines to get immediate real-time
                  information regarding current seat availability, application submission dates, and
                  fee schedules.
                </p>
                <div className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <Phone className="size-3.5 text-navy dark:text-lime" />
                    <span>Campus: {OFFICIAL_CONTACT.campusPhones.join(" / ")}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="size-3.5 text-navy dark:text-lime" />
                    <span>Helpline: {OFFICIAL_CONTACT.mobileHelplines.join(" / ")}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="size-3.5 text-navy dark:text-lime" />
                    <span>Email: {OFFICIAL_CONTACT.emails.join(" / ")}</span>
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-border/70 bg-card p-5">
                <h4 className="font-bold text-foreground">2. Visit Campus or Trust Office</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Prospective students and parents are welcome to visit the Kenjar campus or Trust
                  administrative office at Ballalbagh, Mangaluru for personal counseling and date
                  verifications.
                </p>
                <div className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <Building className="mt-0.5 size-3.5 shrink-0 text-navy dark:text-lime" />
                    <span>Campus: {OFFICIAL_CONTACT.campusAddress}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Building className="mt-0.5 size-3.5 shrink-0 text-navy dark:text-lime" />
                    <span>Trust Office: {OFFICIAL_CONTACT.trustAddress}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ChatLauncher />
    </div>
  );
}
