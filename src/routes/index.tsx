import { useEffect } from "react";
import { createFileRoute, useRouterState } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { HeroSection } from "@/components/site/HeroSection";
import { AboutSection } from "@/components/site/AboutSection";
import { DepartmentsSection } from "@/components/site/DepartmentsSection";
import { ProgramsSection } from "@/components/site/ProgramsSection";
import { AdmissionsSection } from "@/components/site/AdmissionsSection";
import { CampusSection } from "@/components/site/CampusSection";
import { PlacementsSection } from "@/components/site/PlacementsSection";
import { EventsSection } from "@/components/site/EventsSection";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";
import { ChatLauncher } from "@/components/site/ChatLauncher";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SDIT Mangaluru — Shree Devi Institute of Technology" },
      {
        name: "description",
        content:
          "Shree Devi Institute of Technology, Mangaluru, Karnataka — engineering and technology education, featuring SDIT NOVA, the SDIT AI Assistant for admissions, academics and campus information.",
      },
      { property: "og:title", content: "Shree Devi Institute of Technology, Mangaluru" },
      {
        property: "og:description",
        content:
          "Engineering and technology education in Mangaluru, Karnataka, featuring SDIT NOVA, the SDIT AI Assistant.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const hash = useRouterState({ select: (s) => s.location.hash });

  useEffect(() => {
    const rawHash = hash || (typeof window !== "undefined" ? window.location.hash : "");
    if (rawHash) {
      const targetId = rawHash.replace("#", "");
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <DepartmentsSection />
        <AdmissionsSection />
        <CampusSection />
        <PlacementsSection />
        <EventsSection />
        <ContactSection />
      </main>
      <Footer />
      <ChatLauncher />
    </div>
  );
}
