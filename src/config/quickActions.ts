import {
  GraduationCap,
  FileText,
  Building2,
  BadgePercent,
  Briefcase,
  Landmark,
  Compass,
  Phone,
} from "lucide-react";
import type { ComponentType } from "react";

export interface QuickActionItem {
  id: string;
  label: string;
  query: string;
  Icon: ComponentType<{ className?: string }>;
}

export const quickActionList: QuickActionItem[] = [
  {
    id: "courses",
    label: "Courses",
    query: "What courses and programmes are offered at SDIT?",
    Icon: GraduationCap,
  },
  {
    id: "admissions",
    label: "Admissions",
    query: "Tell me about the admission process, eligibility and requirements at SDIT.",
    Icon: FileText,
  },
  {
    id: "departments",
    label: "Departments & HODs",
    query: "What academic departments are there at SDIT and who are the HODs?",
    Icon: Building2,
  },
  {
    id: "fees",
    label: "Fees & Scholarships",
    query: "What is the fee structure and what scholarships are available at SDIT?",
    Icon: BadgePercent,
  },
  {
    id: "placements",
    label: "Placements",
    query: "Tell me about campus placements, top recruiters, and packages at SDIT.",
    Icon: Briefcase,
  },
  {
    id: "campus",
    label: "Campus Facilities",
    query: "What campus facilities, laboratories, library, and hostels does SDIT have?",
    Icon: Landmark,
  },
  {
    id: "directions",
    label: "Directions",
    query: "Where is the SDIT campus located and what are the directions to reach here?",
    Icon: Compass,
  },
  {
    id: "call",
    label: "Call Us",
    query: "What are the official contact numbers, helpline, and office phone to call SDIT?",
    Icon: Phone,
  },
];
