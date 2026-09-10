export interface AdmissionCode {
  program: string;
  code: string;
  authority: string;
  notes?: string;
}

export const SDIT_CODES: AdmissionCode[] = [
  {
    program: "B.E. (All Engineering Disciplines)",
    code: "E-146",
    authority: "Karnataka Examination Authority (KEA) CET",
    notes: "Use this code during KCET counseling option entry",
  },
  {
    program: "MBA (Master of Business Administration)",
    code: "B281",
    authority: "Karnataka PGCET (KEA)",
    notes: "Use during PGCET MBA option entry",
  },
  {
    program: "MCA (Master of Computer Applications)",
    code: "C476",
    authority: "Karnataka PGCET (KEA)",
    notes: "Use during PGCET MCA option entry",
  },
  {
    program: "M.Tech. (Construction Technology)",
    code: "T868",
    authority: "Karnataka PGCET (KEA)",
    notes: "Use during PGCET M.Tech option entry",
  },
];

export const OFFICIAL_LINKS = {
  website: "https://sdit.ac.in/",
  eligibility: "https://sdit.ac.in/eligibility/",
  applyNow: "https://sdit.ac.in/apply-now/",
  applicationForm: "https://sdit.ac.in/application-form/",
  contactUs: "https://sdit.ac.in/contact-us/",
};

export const OFFICIAL_CONTACT = {
  collegeName: "Shree Devi Institute of Technology",
  trustName: "Shree Devi Education Trust (Est. 1992)",
  campusAddress: "Airport Road, Kenjar, Mangaluru - 574142, Karnataka State, India",
  trustAddress: "Maina Tower, Ballalbagh, Mangaluru - 575003, Karnataka, India",
  campusPhones: ["+91 (824) 2254104", "+91 (824) 2254102"],
  mobileHelplines: ["+91 91411 81260", "+91 91411 81261"],
  trustOfficePhones: ["0824-2457937", "0824-2456501", "0824-2456511"],
  emails: ["info@sdc.ac.in", "sditprincipal@gmail.com"],
};

export const REQUIRED_DOCUMENTS = [
  {
    name: "SSLC / 10th Standard Marks Card",
    description: "Original and self-attested photocopies as proof of age and secondary education.",
    appliesTo: "All Applicants (UG & PG)",
  },
  {
    name: "PUC / 10+2 Marks Card",
    description:
      "Original and copies showing Physics, Mathematics and third elective subject marks.",
    appliesTo: "B.E. Applicants",
  },
  {
    name: "Qualifying Degree Marks Cards & Degree Certificate",
    description:
      "All semester/year marks sheets and Degree/Provisional Certificate from recognized university.",
    appliesTo: "MBA, MCA & M.Tech Applicants",
  },
  {
    name: "Entrance Examination Score / Rank Card",
    description:
      "Valid score/rank sheet of KCET / COMEDK / JEE (for B.E.) or Karnataka PGCET / KMAT / GATE (for PG).",
    appliesTo: "All Candidates (as applicable)",
  },
  {
    name: "Transfer Certificate (TC)",
    description: "Original Transfer Certificate issued by the institution last attended.",
    appliesTo: "All Applicants",
  },
  {
    name: "Conduct / Character Certificate",
    description: "Certificate of good conduct issued by the head of the previous institution.",
    appliesTo: "All Applicants",
  },
  {
    name: "Migration Certificate",
    description:
      "Required for candidates who completed qualifying examinations outside Karnataka state or from non-Karnataka boards/universities.",
    appliesTo: "Non-Karnataka Students",
  },
  {
    name: "Aadhaar Card Copy",
    description: "Clear photocopy of Government Identity (Aadhaar Card) for identity verification.",
    appliesTo: "All Applicants",
  },
  {
    name: "Recent Passport-size Photographs",
    description: "Recent color passport-size photographs as specified by the admissions office.",
    appliesTo: "All Applicants",
  },
];
