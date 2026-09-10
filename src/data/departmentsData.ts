export interface DepartmentItem {
  id: string;
  name: string;
  shortCode?: string;
  degreeLevel: string;
  description: string;
}

export interface AdditionalAcademicArea {
  id: string;
  title: string;
  badge: string;
  description: string;
}

export const academicDepartments: DepartmentItem[] = [
  {
    id: "cse",
    name: "Department of Computer Science & Engineering",
    shortCode: "CSE",
    degreeLevel: "Undergraduate (B.E.)",
    description:
      "The Department of Computer Science & Engineering (CSE) offers a four-year B.E. program focused on computer science, programming, software development, algorithms, databases, networking, and emerging technologies. The department emphasizes practical learning, research, industry interaction, and the development of professional skills.",
  },
  {
    id: "ise",
    name: "Department of Information Science & Engineering",
    shortCode: "ISE",
    degreeLevel: "Undergraduate (B.E.)",
    description:
      "The Department of Information Science & Engineering focuses on information and communication technologies, data-intensive applications, software systems, and modern computing technologies. The department offers an eight-semester B.E. program aligned with VTU curriculum and encourages students to participate in industry seminars, conferences, and technology-related activities.",
  },
  {
    id: "cse-aiml",
    name: "Department of Computer Science & Engineering – Artificial Intelligence & Machine Learning",
    shortCode: "CSE (AI & ML)",
    degreeLevel: "Undergraduate (B.E.)",
    description:
      "The CSE (Artificial Intelligence & Machine Learning) department focuses on computer science fundamentals along with artificial intelligence, machine learning, intelligent systems, and emerging computational technologies. The program aims to develop students' technical, analytical, problem-solving, and research capabilities.",
  },
  {
    id: "aids",
    name: "Department of Artificial Intelligence & Data Science",
    shortCode: "AI & DS",
    degreeLevel: "Undergraduate (B.E.)",
    description:
      "The Department of Artificial Intelligence & Data Science offers a four-year B.E. program designed around artificial intelligence, data science, machine learning, data analysis, and modern computational technologies. The department emphasizes practical learning, research, industry interaction, and hands-on technical skills.",
  },
  {
    id: "ece",
    name: "Department of Electronics & Communication Engineering",
    shortCode: "ECE",
    degreeLevel: "Undergraduate (B.E.)",
    description:
      "The Department of Electronics & Communication Engineering provides education in electronics, communication systems, digital systems, microprocessors, signal processing, VLSI, and related technologies. The department focuses on developing skills required for careers in telecommunications, electronics, computer-related industries, system implementation, operation, and maintenance.",
  },
  {
    id: "me",
    name: "Department of Mechanical Engineering",
    shortCode: "ME",
    degreeLevel: "Undergraduate (B.E.)",
    description:
      "The Department of Mechanical Engineering focuses on mechanical systems, design, manufacturing, thermal engineering, materials, automation, and engineering applications. The department emphasizes practical knowledge, laboratory work, technical projects, and industry-oriented learning.",
  },
  {
    id: "cv",
    name: "Department of Civil Engineering",
    shortCode: "CV",
    degreeLevel: "Undergraduate (B.E.)",
    description:
      "The Department of Civil Engineering provides education in structural engineering, construction, surveying, transportation, environmental engineering, geotechnical engineering, concrete technology, and infrastructure development. The department supports practical learning through specialized laboratories including materials testing, surveying, CAD, concrete and highway, hydraulics, and environmental engineering laboratories.",
  },
  {
    id: "ae",
    name: "Department of Aeronautical Engineering",
    shortCode: "AE",
    degreeLevel: "Undergraduate (B.E.)",
    description:
      "The Department of Aeronautical Engineering focuses on aircraft design, aerodynamics, aircraft structures, propulsion systems, flight mechanics, and aerospace-related technologies. The department provides students with theoretical knowledge and practical exposure relevant to the aviation and aerospace sectors.",
  },
  {
    id: "mca",
    name: "Department of Master of Computer Applications (MCA)",
    shortCode: "MCA",
    degreeLevel: "Postgraduate",
    description:
      "The Department of MCA offers postgraduate education in computer applications and focuses on programming, software development, databases, web technologies, computer applications, and emerging areas of information technology. The department emphasizes practical skills, projects, research, and industry-oriented learning.",
  },
  {
    id: "mba",
    name: "Department of Master of Business Administration (MBA)",
    shortCode: "MBA",
    degreeLevel: "Postgraduate",
    description:
      "The Department of MBA provides postgraduate management education covering areas such as business management, finance, marketing, human resources, entrepreneurship, leadership, and strategic management. The department aims to develop managerial, analytical, communication, and decision-making skills.",
  },
];

export const additionalAcademicAreas: AdditionalAcademicArea[] = [
  {
    id: "mtech-ct",
    title: "M.Tech. – Construction Technology",
    badge: "Postgraduate Engineering",
    description:
      "The postgraduate M.Tech. program focuses on advanced construction technology, construction practices, materials, structural systems, and project-related applications.",
  },
  {
    id: "basic-science",
    title: "Basic Science Department",
    badge: "Foundational Sciences",
    description:
      "The Basic Science department provides foundational education in subjects such as mathematics, physics, chemistry, and other basic engineering sciences that support students across engineering programs.",
  },
  {
    id: "research-phd",
    title: "Research Centre (Ph.D.)",
    badge: "Doctoral Research",
    description:
      "The Research Centre supports doctoral-level research and promotes research, innovation, and academic collaboration across relevant disciplines.",
  },
];
