export interface ProgramDetail {
  id: string;
  title: string;
  degreeType: string;
  badge: string;
  description: string;
}

export interface ResearchProgram {
  id: string;
  title: string;
  description: string;
  researchAreas: string[];
}

export const undergraduatePrograms: ProgramDetail[] = [
  {
    id: "cse",
    title: "B.E. Computer Science & Engineering (CSE)",
    degreeType: "Undergraduate",
    badge: "4-Year B.E.",
    description:
      "A 4-year engineering program focusing on programming, algorithms, databases, operating systems, networking, software development, and computer technologies.",
  },
  {
    id: "ise",
    title: "B.E. Information Science & Engineering (ISE)",
    degreeType: "Undergraduate",
    badge: "4-Year B.E.",
    description:
      "An engineering program focused on information technology, software systems, data structures, databases, networking, and modern computing technologies.",
  },
  {
    id: "cse-aiml",
    title: "B.E. Computer Science & Engineering (Artificial Intelligence & Machine Learning)",
    degreeType: "Undergraduate",
    badge: "Specialized B.E.",
    description:
      "A specialized CSE program focused on artificial intelligence, machine learning, intelligent systems, and emerging computing technologies.",
  },
  {
    id: "aids",
    title: "B.E. Artificial Intelligence & Data Science (AI & DS)",
    degreeType: "Undergraduate",
    badge: "4-Year B.E.",
    description:
      "A 4-year program focusing on artificial intelligence, data science, data analysis, machine learning, and related technologies.",
  },
  {
    id: "ece",
    title: "B.E. Electronics & Communication Engineering (ECE)",
    degreeType: "Undergraduate",
    badge: "4-Year B.E.",
    description:
      "A program covering electronics, communication systems, microprocessors, VLSI, digital systems, signal processing, and related technologies.",
  },
  {
    id: "me",
    title: "B.E. Mechanical Engineering",
    degreeType: "Undergraduate",
    badge: "4-Year B.E.",
    description:
      "An engineering program dealing with mechanical systems, manufacturing, design, thermal sciences, materials, and related engineering applications.",
  },
  {
    id: "cv",
    title: "B.E. Civil Engineering",
    degreeType: "Undergraduate",
    badge: "4-Year B.E.",
    description:
      "A program covering structural engineering, construction, surveying, environmental engineering, transportation, geotechnical engineering, and infrastructure development.",
  },
  {
    id: "ae",
    title: "B.E. Aeronautical Engineering",
    degreeType: "Undergraduate",
    badge: "4-Year B.E.",
    description:
      "An engineering program focused on aircraft, aerodynamics, aerospace systems, aircraft structures, propulsion, and related technologies.",
  },
];

export const postgraduatePrograms: ProgramDetail[] = [
  {
    id: "mtech-ct",
    title: "M.Tech. – Construction Technology",
    degreeType: "Postgraduate",
    badge: "2-Year M.Tech.",
    description:
      "A postgraduate engineering program focused on advanced construction technologies, structural systems, construction materials, project management, and modern construction practices.",
  },
  {
    id: "mba",
    title: "Master of Business Administration (MBA)",
    degreeType: "Postgraduate",
    badge: "2-Year MBA",
    description:
      "A postgraduate management program designed to develop knowledge and skills in business management, leadership, finance, marketing, human resources, and entrepreneurship.",
  },
  {
    id: "mca",
    title: "Master of Computer Applications (MCA)",
    degreeType: "Postgraduate",
    badge: "2-Year MCA",
    description:
      "A two-year full-time postgraduate program focusing on computer science, programming, software development, databases, web technologies, machine learning, data analytics, and practical project experience.",
  },
];

export const otherProgramsData: ResearchProgram = {
  id: "research",
  title: "1. Research Centre (Ph.D.)",
  description:
    "SDIT’s Research Centre promotes advanced research and knowledge generation, with doctoral research opportunities and research projects supported through national and international collaborations.",
  researchAreas: [
    "Ph.D. in Physics",
    "Ph.D. in Chemistry",
    "Ph.D. in Civil Engineering",
    "Ph.D. in Management / MBA",
  ],
};
