/**
 * Single source of truth for institutional website content.
 *
 * IMPORTANT DATA ACCURACY RULE:
 * No institutional facts are invented here. Every value that has not been
 * verified against official SDIT sources is an explicit placeholder and is
 * flagged with `verified: false`. Replace the strings below with verified data
 * later — no UI changes are required.
 */

export const PLACEHOLDER = "Official information will be added here.";

export interface NavItem {
  label: string;
  /** Hash target on the home page, or a route path. */
  href: string;
  kind: "section" | "route";
}

export const navItems: NavItem[] = [
  { label: "About", href: "/#about", kind: "section" },
  { label: "Academics", href: "/#academics", kind: "section" },
  { label: "Departments", href: "/#departments", kind: "section" },
  { label: "Admissions", href: "/admissions", kind: "route" },
  { label: "Campus", href: "/campus", kind: "route" },
  { label: "Training & Placements", href: "/placements", kind: "route" },
  { label: "Contact", href: "/#contact", kind: "section" },
];

export interface PlaceholderCard {
  id: string;
  title: string;
  description: string;
  verified: boolean;
}

/** Official 10 Academic Departments of SDIT */
export const departments: PlaceholderCard[] = [
  {
    id: "cse",
    title: "Department of Computer Science & Engineering",
    description:
      "The Department of Computer Science & Engineering (CSE) offers a four-year B.E. program focused on computer science, programming, software development, algorithms, databases, networking, and emerging technologies.",
    verified: true,
  },
  {
    id: "ise",
    title: "Department of Information Science & Engineering",
    description:
      "The Department of Information Science & Engineering focuses on information and communication technologies, data-intensive applications, software systems, and modern computing technologies.",
    verified: true,
  },
  {
    id: "cse-aiml",
    title:
      "Department of Computer Science & Engineering – Artificial Intelligence & Machine Learning",
    description:
      "The CSE (Artificial Intelligence & Machine Learning) department focuses on computer science fundamentals along with artificial intelligence, machine learning, intelligent systems, and emerging computational technologies.",
    verified: true,
  },
  {
    id: "aids",
    title: "Department of Artificial Intelligence & Data Science",
    description:
      "The Department of Artificial Intelligence & Data Science offers a four-year B.E. program designed around artificial intelligence, data science, machine learning, data analysis, and modern computational technologies.",
    verified: true,
  },
  {
    id: "ece",
    title: "Department of Electronics & Communication Engineering",
    description:
      "The Department of Electronics & Communication Engineering provides education in electronics, communication systems, digital systems, microprocessors, signal processing, VLSI, and related technologies.",
    verified: true,
  },
  {
    id: "me",
    title: "Department of Mechanical Engineering",
    description:
      "The Department of Mechanical Engineering focuses on mechanical systems, design, manufacturing, thermal engineering, materials, automation, and engineering applications.",
    verified: true,
  },
  {
    id: "cv",
    title: "Department of Civil Engineering",
    description:
      "The Department of Civil Engineering provides education in structural engineering, construction, surveying, transportation, environmental engineering, geotechnical engineering, concrete technology, and infrastructure development.",
    verified: true,
  },
  {
    id: "ae",
    title: "Department of Aeronautical Engineering",
    description:
      "The Department of Aeronautical Engineering focuses on aircraft design, aerodynamics, aircraft structures, propulsion systems, flight mechanics, and aerospace-related technologies.",
    verified: true,
  },
  {
    id: "mca",
    title: "Department of Master of Computer Applications (MCA)",
    description:
      "The Department of MCA offers postgraduate education in computer applications and focuses on programming, software development, databases, web technologies, and emerging areas of IT.",
    verified: true,
  },
  {
    id: "mba",
    title: "Department of Master of Business Administration (MBA)",
    description:
      "The Department of MBA provides postgraduate management education covering areas such as business management, finance, marketing, human resources, entrepreneurship, leadership, and strategic management.",
    verified: true,
  },
];

export const programs: PlaceholderCard[] = [
  {
    id: "ug",
    title: "Undergraduate Programs",
    description:
      "8 B.E. programs including CSE, ISE, AI & ML, AI & DS, ECE, Mechanical, Civil, and Aeronautical Engineering.",
    verified: true,
  },
  {
    id: "pg",
    title: "Postgraduate Programs",
    description:
      "Advanced programs including M.Tech. in Construction Technology, Master of Business Administration (MBA), and Master of Computer Applications (MCA).",
    verified: true,
  },
  {
    id: "other",
    title: "Other Programs",
    description:
      "SDIT Research Centre offering doctoral Ph.D. programs in Physics, Chemistry, Civil Engineering, and Management / MBA.",
    verified: true,
  },
];

export interface AdmissionBlockCard {
  id: string;
  title: string;
  meta: string;
  description: string;
  href:
    | "/admissions/overview"
    | "/admissions/eligibility"
    | "/admissions/application-process"
    | "/admissions/important-dates";
  verified: boolean;
}

export const admissionBlocks: AdmissionBlockCard[] = [
  {
    id: "overview",
    title: "Admission Overview",
    meta: "KEA CET Code: E-146",
    description:
      "Explore SDIT's 8 B.E. engineering disciplines, MBA, MCA, M.Tech, and Ph.D. research programs, official entrance codes, and admission pathways.",
    href: "/admissions/overview",
    verified: true,
  },
  {
    id: "eligibility",
    title: "Eligibility Criteria",
    meta: "10+2 & Degree Norms",
    description:
      "Official academic qualifications: 45% in 10+2 with Physics & Math for B.E. (40% SC/ST/OBC), 50% in degree for MBA/MCA/M.Tech (45% reserved categories).",
    href: "/admissions/eligibility",
    verified: true,
  },
  {
    id: "process",
    title: "Application Process",
    meta: "Official SDIT Portals",
    description:
      "Step-by-step guidance to apply through official SDIT online facilities, download application forms, submit certificates, and verify credentials.",
    href: "/admissions/application-process",
    verified: true,
  },
  {
    id: "dates",
    title: "Important Dates",
    meta: "Official Publication Status",
    description:
      "Admission dates are not currently published on the official SDIT website. Review official publication status and direct contact helplines.",
    href: "/admissions/important-dates",
    verified: true,
  },
];

export interface CampusFacilityCard {
  id: string;
  title: string;
  meta: string;
  description: string;
  href:
    | "/campus/library"
    | "/campus/laboratories"
    | "/campus/computer-facilities"
    | "/campus/classrooms"
    | "/campus/sports"
    | "/campus/student-facilities";
  verified: boolean;
}

export const campusFacilityCards: CampusFacilityCard[] = [
  {
    id: "library",
    title: "Library",
    meta: "26,759+ Books & Digital Library",
    description:
      "Fully computerized central library housing over 26,759 volumes, 2,684+ engineering titles, 150+ journals, open-access cataloguing, and online e-resources.",
    href: "/campus/library",
    verified: true,
  },
  {
    id: "laboratories",
    title: "Laboratories",
    meta: "10+ Departmental Lab Suites",
    description:
      "State-of-the-art, syllabus-compliant laboratories across all 10 departments, featuring specialized computing, electronics, mechanical workshops, and wind tunnel setups.",
    href: "/campus/laboratories",
    verified: true,
  },
  {
    id: "computer-facilities",
    title: "Computer Facilities",
    meta: "Wi-Fi & ICT Infrastructure",
    description:
      "High-speed internet, campus-wide Wi-Fi, modern networked computer labs, Edusat distance learning integration, and licensed software platforms.",
    href: "/campus/computer-facilities",
    verified: true,
  },
  {
    id: "classrooms",
    title: "Classrooms",
    meta: "ICT-Enabled & AV Integrated",
    description:
      "Spacious, well-ventilated lecture halls with Wi-Fi connectivity, LCD projection, educational software, seminar halls with Edusat, and a large college auditorium.",
    href: "/campus/classrooms",
    verified: true,
  },
  {
    id: "sports",
    title: "Sports & Games",
    meta: "Grounds, Gym & Tournaments",
    description:
      "Comprehensive sports facilities including an outdoor playing ground for cricket and football, courts for basketball and volleyball, indoor gym, and VTU tournaments.",
    href: "/campus/sports",
    verified: true,
  },
  {
    id: "student-facilities",
    title: "Student Facilities",
    meta: "Hostels, Bus Fleet & Canteen",
    description:
      "Student-centric campus amenities featuring separate boys and girls hostels with 24/7 security, an institutional bus fleet across Mangaluru, cafeteria, and first aid.",
    href: "/campus/student-facilities",
    verified: true,
  },
];

export const facilities: PlaceholderCard[] = [
  {
    id: "library",
    title: "Library",
    description:
      "Central Library housing over 26,759 books, open-access cataloguing, 150+ journals, digital library terminals, and a spacious reading room.",
    verified: true,
  },
  {
    id: "labs",
    title: "Laboratories",
    description:
      "State-of-the-art departmental laboratories providing practical hands-on experimentation across all 10 engineering and science branches.",
    verified: true,
  },
  {
    id: "computing",
    title: "Computer Facilities",
    description:
      "High-performance computer labs, campus-wide Wi-Fi connectivity, Edusat satellite learning, and modern ICT digital infrastructure.",
    verified: true,
  },
  {
    id: "classrooms",
    title: "Classrooms",
    description:
      "Spacious, well-ventilated ICT-enabled classrooms equipped with audio-visual presentation aids, Wi-Fi, seminar halls, and college auditorium.",
    verified: true,
  },
  {
    id: "sports",
    title: "Sports & Games",
    description:
      "Outdoor athletics and sports ground, basketball/volleyball courts, well-equipped gymnasium, indoor games, and state-level tournament participation.",
    verified: true,
  },
  {
    id: "student",
    title: "Student Facilities",
    description:
      "Separate boys and girls hostels, fleet of college buses, hygienic campus cafeteria, first-aid medical care, and student welfare cells.",
    verified: true,
  },
];

export const placementBlocks: PlaceholderCard[] = [
  {
    id: "training",
    title: "Training",
    description:
      "Comprehensive programs including pre-placement training, aptitude, technical skill enhancement, communication skills, personality development (PDP), technology training, bridge courses, and mock interviews.",
    verified: true,
  },
  {
    id: "career",
    title: "Career Development",
    description:
      "Strategic guidance through career counselling, higher education support, soft skills, aptitude preparation, and the SDIT SHAPE Model (Soft Skills, Human Values, Additional Technical Training, Personality Development, Technical Skill Enhancement).",
    verified: true,
  },
  {
    id: "support",
    title: "Placement Support",
    description:
      "Facilitating campus and pool recruitment drives, mock interviews, placement talks, internship assistance, and interview preparation with dedicated recruitment facilities.",
    verified: true,
  },
  {
    id: "industry",
    title: "Industry Interaction",
    description:
      "Bridging academia-industry gaps via industrial visits for early exposure, vocational training, industry talks by experts, and structured industry-academia interaction initiatives.",
    verified: true,
  },
];

export interface EventItem {
  id: string;
  title: string;
  date: string;
  description: string;
  verified: boolean;
}

export const events: EventItem[] = [
  {
    id: "event-1",
    title: "Event title placeholder",
    date: "Date to be announced",
    description: PLACEHOLDER,
    verified: false,
  },
  {
    id: "event-2",
    title: "Event title placeholder",
    date: "Date to be announced",
    description: PLACEHOLDER,
    verified: false,
  },
  {
    id: "event-3",
    title: "Event title placeholder",
    date: "Date to be announced",
    description: PLACEHOLDER,
    verified: false,
  },
];

export interface ContactField {
  id: string;
  label: string;
  value: string;
  verified: boolean;
}

export const contactFields: ContactField[] = [
  { id: "address", label: "Address", value: PLACEHOLDER, verified: false },
  { id: "phone", label: "Phone", value: PLACEHOLDER, verified: false },
  { id: "email", label: "Email", value: PLACEHOLDER, verified: false },
  { id: "hours", label: "Office Hours", value: PLACEHOLDER, verified: false },
  { id: "map", label: "Map / Location", value: PLACEHOLDER, verified: false },
];

export const suggestedQuestions = [
  { label: "Admissions", query: "Tell me about admissions at SDIT." },
  { label: "Courses", query: "What courses are offered at SDIT?" },
  { label: "Departments", query: "Which departments are there at SDIT?" },
  { label: "Fees", query: "What is the fee structure at SDIT?" },
  { label: "Placements", query: "How does placement support work at SDIT?" },
  { label: "Scholarships", query: "What scholarships are available at SDIT?" },
  { label: "Campus facilities", query: "What campus facilities does SDIT have?" },
  { label: "Contact information", query: "How can I contact SDIT?" },
] as const;

export const WELCOME_MESSAGE =
  "Hello! I'm SDIT AI-ASSISTANT, your official SDIT AI Assistant. I can help you find information about admissions, courses, departments, fees, placements, campus facilities, events, scholarships and other college-related information.";
