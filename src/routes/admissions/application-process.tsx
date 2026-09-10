import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ChatLauncher } from "@/components/site/ChatLauncher";
import { AdmissionsPageHeader } from "@/components/site/AdmissionsPageHeader";
import { OFFICIAL_LINKS, OFFICIAL_CONTACT, REQUIRED_DOCUMENTS } from "@/data/admissionsData";
import {
  CheckCircle2,
  FileCheck,
  Send,
  Files,
  ShieldCheck,
  PhoneCall,
  ExternalLink,
  Download,
  Mail,
  MapPin,
  Phone,
  Building,
} from "lucide-react";

export const Route = createFileRoute("/admissions/application-process")({
  head: () => ({
    meta: [
      { title: "Application Process — Shree Devi Institute of Technology (SDIT)" },
      {
        name: "description",
        content:
          "Official Application Process for Shree Devi Institute of Technology (SDIT), Mangaluru. How to apply online, download forms, submit documents, and contact admissions.",
      },
      {
        property: "og:title",
        content: "Application Process — Shree Devi Institute of Technology (SDIT)",
      },
      {
        property: "og:description",
        content:
          "Step-by-step verified application procedure for SDIT undergraduate and postgraduate programs with direct official links.",
      },
    ],
  }),
  component: ApplicationProcessPage,
});

function ApplicationProcessPage() {
  const steps = [
    {
      stepNumber: "01",
      title: "Check Academic Eligibility",
      icon: CheckCircle2,
      description:
        "Carefully verify that you fulfill the educational qualification, required subject combinations (Physics and Mathematics with elective for B.E., or relevant Bachelor's degree for PG), and minimum percentage criteria prescribed by VTU and AICTE.",
      linkText: "Review Eligibility Criteria",
      linkTo: "/admissions/eligibility" as const,
    },
    {
      stepNumber: "02",
      title: "Select Your Desired Program",
      icon: FileCheck,
      description:
        "Choose your discipline from SDIT's 8 undergraduate Bachelor of Engineering (B.E.) programs, 3 postgraduate courses (MBA, MCA, M.Tech in Construction Technology), or doctoral research centre.",
      linkText: "View Programs & Codes",
      linkTo: "/admissions/overview" as const,
    },
    {
      stepNumber: "03",
      title: "Apply Through Official Application Facility",
      icon: Send,
      description:
        "Submit your application through the official SDIT application channels. You can apply online through the official portal or download the physical application form to submit directly to the admissions office.",
      officialButtons: true,
    },
    {
      stepNumber: "04",
      title: "Prepare Required Documents",
      icon: Files,
      description:
        "Organize original certificates along with attested copies: SSLC/10th marks card, PUC/10+2 marks card, Degree certificates (for PG), Transfer Certificate (TC), Conduct Certificate, Migration Certificate (for non-Karnataka candidates), Aadhaar copy, entrance exam score cards, and passport photographs.",
    },
    {
      stepNumber: "05",
      title: "Document Verification & Admission Confirmation",
      icon: ShieldCheck,
      description:
        "Present original certificates at the time of admission verification for scrutiny. For government quota seats, allotment orders from KEA (CET / PGCET) must be submitted. For management quota seats, admission is confirmed at the SDIT campus / Trust office upon credential verification.",
    },
    {
      stepNumber: "06",
      title: "Contact Admissions Office for Assistance",
      icon: PhoneCall,
      description:
        "Reach out to the SDIT Admissions Desk or Trust Office for any guidance regarding admission status, seat availability, document submission, or hostel facilities.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <AdmissionsPageHeader
          currentPage="application-process"
          eyebrow="Step-by-Step Guide"
          title="Application Process"
          description="Verified procedure for applying to undergraduate and postgraduate programs at Shree Devi Institute of Technology, Mangaluru, with direct access to official application forms and links."
        />

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          {/* Primary Action Buttons Bar */}
          <div className="rounded-3xl border border-navy/20 bg-gradient-navy p-6 text-white shadow-soft sm:p-8">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <span className="rounded-full bg-lime/20 px-3 py-1 text-xs font-bold text-lime">
                  Official Portals
                </span>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Official SDIT Application Facilities
                </h2>
                <p className="mt-1 max-w-2xl text-sm text-navy-foreground/80">
                  Access the official SDIT application facilities directly via the official
                  institute links below.
                </p>
              </div>

              {/* Required 3 Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={OFFICIAL_LINKS.applyNow}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-bold text-navy shadow-sm transition-all hover:bg-lime/90 hover:shadow-md"
                >
                  <Send className="size-4" />
                  Apply Now
                  <ExternalLink className="size-3.5 opacity-70" />
                </a>

                <a
                  href={OFFICIAL_LINKS.applicationForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-navy-soft px-5 py-3 text-sm font-bold text-white transition-all hover:bg-white/15"
                >
                  <Download className="size-4" />
                  Application Form
                  <ExternalLink className="size-3.5 opacity-70" />
                </a>

                <a
                  href={OFFICIAL_LINKS.contactUs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-navy-soft px-5 py-3 text-sm font-bold text-white transition-all hover:bg-white/15"
                >
                  <Phone className="size-4" />
                  Contact SDIT
                  <ExternalLink className="size-3.5 opacity-70" />
                </a>
              </div>
            </div>
          </div>

          {/* Sequential Application Steps */}
          <div className="mt-14">
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Step-by-Step Application Procedure
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Follow these official steps to complete your admission process at SDIT.
            </p>

            <div className="mt-8 space-y-6">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.stepNumber}
                    className="group relative flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:border-navy sm:flex-row sm:items-start sm:p-7"
                  >
                    <div className="flex items-center gap-4 sm:flex-col sm:items-center sm:gap-2">
                      <span className="text-2xl font-black text-navy/40 dark:text-lime/60 sm:text-3xl">
                        {step.stepNumber}
                      </span>
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-surface text-navy dark:bg-navy-soft dark:text-lime">
                        <Icon className="size-5" />
                      </span>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground sm:text-xl">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>

                      {step.linkTo && step.linkText && (
                        <div className="mt-3">
                          <Link
                            to={step.linkTo}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy hover:underline dark:text-lime"
                          >
                            {step.linkText} →
                          </Link>
                        </div>
                      )}

                      {step.officialButtons && (
                        <div className="mt-4 flex flex-wrap gap-3">
                          <a
                            href={OFFICIAL_LINKS.applyNow}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-lg bg-navy px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-navy/90 dark:bg-lime dark:text-navy"
                          >
                            Open Apply Now Page <ExternalLink className="size-3" />
                          </a>
                          <a
                            href={OFFICIAL_LINKS.applicationForm}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3.5 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-surface"
                          >
                            Download Application Form <ExternalLink className="size-3" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Required Documents Section */}
          <div className="mt-16 rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-8 lg:p-10">
            <div className="border-b border-border/60 pb-4">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                Checklist of Required Documents
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Candidates must submit original certificates and attested photocopies at the time of
                admission verification.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {REQUIRED_DOCUMENTS.map((doc) => (
                <div
                  key={doc.name}
                  className="flex flex-col justify-between rounded-xl border border-border/60 bg-card p-4 shadow-2xs"
                >
                  <div>
                    <span className="text-[10px] font-bold text-violet uppercase">
                      {doc.appliesTo}
                    </span>
                    <h3 className="mt-1 text-sm font-bold text-foreground">{doc.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      {doc.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Official Contact Box */}
          <div className="mt-14 rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">
              Admission Office Contact Information
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              For direct admission assistance, application tracking, or campus visits, please
              contact:
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-border/60 bg-surface p-5">
                <div className="flex items-center gap-2">
                  <MapPin className="size-5 text-navy dark:text-lime" />
                  <h3 className="font-bold text-foreground">Campus Address</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {OFFICIAL_CONTACT.campusAddress}
                </p>
                <div className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Phone:</strong>{" "}
                    {OFFICIAL_CONTACT.campusPhones.join(" / ")}
                  </p>
                  <p>
                    <strong className="text-foreground">Helplines:</strong>{" "}
                    {OFFICIAL_CONTACT.mobileHelplines.join(" / ")}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-border/60 bg-surface p-5">
                <div className="flex items-center gap-2">
                  <Building className="size-5 text-navy dark:text-lime" />
                  <h3 className="font-bold text-foreground">Trust Administrative Office</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {OFFICIAL_CONTACT.trustAddress}
                </p>
                <div className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Phones:</strong>{" "}
                    {OFFICIAL_CONTACT.trustOfficePhones.join(", ")}
                  </p>
                  <p>
                    <strong className="text-foreground">Email:</strong>{" "}
                    {OFFICIAL_CONTACT.emails.join(" / ")}
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
