import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
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

export const Route = createFileRoute("/chat")({
  head: () => ({
    meta: [
      {
        title: "SDIT AI Assistant — Shree Devi Institute of Technology",
      },
      {
        name: "description",
        content:
          "Official AI Assistant for Shree Devi Institute of Technology, Mangaluru — Ask about courses, admissions, fees, placements, departments, and campus facilities.",
      },
      {
        property: "og:title",
        content: "SDIT AI Assistant — Shree Devi Institute of Technology",
      },
      {
        property: "og:description",
        content: "Simple guided college chatbot for Shree Devi Institute of Technology, Mangaluru.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ChatPage,
});

function ChatPage() {
  useEffect(() => {
    // If we want the chat widget to auto-open when visiting /chat, we can trigger a click or state if needed,
    // but ChatLauncher manages its state. We can also render the home page with ChatLauncher.
  }, []);

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
