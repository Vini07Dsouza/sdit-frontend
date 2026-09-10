/**
 * Guided menu structure for the help desk.
 *
 * The frontend owns NAVIGATION ONLY. Every informational option carries the
 * natural-language question that gets sent to the backend — no institutional
 * facts are stored here.
 */

export type MenuAction =
  | { kind: "query"; query: string }
  | { kind: "submenu"; menuId: MenuId }
  | { kind: "tel" }
  | { kind: "maps" };

export interface MenuOption {
  id: string;
  label: string;
  emoji?: string;
  action: MenuAction;
}

export interface Menu {
  id: string;
  /** Shown above the options when this menu is open. */
  title: string;
  parentId?: string;
  options: MenuOption[];
}

const departmentNames = [
  "MCA",
  "MBA",
  "Computer Science & Engineering",
  "Information Science & Engineering",
  "Artificial Intelligence & Data Science",
  "Electronics & Communication Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
  "Aeronautical Engineering",
] as const;

function slug(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Per-department detail menus, generated from the department list. */
const departmentMenus: Menu[] = departmentNames.map((name) => ({
  id: `dept-${slug(name)}`,
  title: name,
  parentId: "departments",
  options: [
    {
      id: "about",
      label: `About ${name}`,
      action: { kind: "query", query: `Tell me about the ${name} department at SDIT.` },
    },
    {
      id: "hod",
      label: "HOD",
      action: { kind: "query", query: `Who is the HOD of ${name} at SDIT?` },
    },
    {
      id: "eligibility",
      label: "Eligibility",
      action: { kind: "query", query: `What is the eligibility for ${name} at SDIT?` },
    },
    {
      id: "contact",
      label: "Contact / more information",
      action: {
        kind: "query",
        query: `How can I contact the ${name} department at SDIT for more information?`,
      },
    },
  ],
}));

const menuList: Menu[] = [
  {
    id: "root",
    title: "Choose a topic",
    options: [
      {
        id: "courses",
        label: "Courses",
        emoji: "🎓",
        action: { kind: "submenu", menuId: "courses" },
      },
      {
        id: "admissions",
        label: "Admissions",
        emoji: "📝",
        action: { kind: "submenu", menuId: "admissions" },
      },
      {
        id: "departments",
        label: "Departments & HODs",
        emoji: "🏫",
        action: { kind: "submenu", menuId: "departments" },
      },
      {
        id: "fees",
        label: "Fees & Scholarships",
        emoji: "💰",
        action: { kind: "submenu", menuId: "fees" },
      },
      {
        id: "placements",
        label: "Placements",
        emoji: "💼",
        action: { kind: "submenu", menuId: "placements" },
      },
      {
        id: "campus",
        label: "Campus Facilities",
        emoji: "🏢",
        action: { kind: "submenu", menuId: "campus" },
      },
      { id: "directions", label: "Directions", emoji: "📍", action: { kind: "maps" } },
      { id: "call", label: "Call Us", emoji: "📞", action: { kind: "tel" } },
    ],
  },
  {
    id: "courses",
    title: "Courses",
    parentId: "root",
    options: [
      {
        id: "ug",
        label: "Undergraduate programmes",
        action: { kind: "query", query: "What undergraduate programmes are offered at SDIT?" },
      },
      {
        id: "pg",
        label: "Postgraduate programmes",
        action: { kind: "query", query: "What postgraduate programmes are offered at SDIT?" },
      },
      {
        id: "all",
        label: "All programmes",
        action: { kind: "query", query: "List all the programmes offered at SDIT." },
      },
    ],
  },
  {
    id: "admissions",
    title: "Admissions",
    parentId: "root",
    options: [
      {
        id: "eligibility",
        label: "Eligibility",
        action: { kind: "query", query: "What is the admission eligibility at SDIT?" },
      },
      {
        id: "programmes",
        label: "Available programmes",
        action: { kind: "query", query: "Which programmes are available for admission at SDIT?" },
      },
      {
        id: "info",
        label: "Admission information",
        action: { kind: "query", query: "Tell me about the admission process at SDIT." },
      },
      {
        id: "codes",
        label: "College codes",
        action: { kind: "query", query: "What are the college codes of SDIT?" },
      },
      {
        id: "contact",
        label: "Contact for admission",
        action: { kind: "query", query: "Whom should I contact for admission enquiries at SDIT?" },
      },
    ],
  },
  {
    id: "departments",
    title: "Departments & HODs",
    parentId: "root",
    options: departmentNames.map((name) => ({
      id: slug(name),
      label: name,
      action: { kind: "submenu", menuId: `dept-${slug(name)}` } as MenuAction,
    })),
  },
  {
    id: "fees",
    title: "Fees & Scholarships",
    parentId: "root",
    options: [
      {
        id: "fees",
        label: "Fee information",
        action: { kind: "query", query: "What is the fee structure at SDIT?" },
      },
      {
        id: "scholarships",
        label: "Scholarships",
        action: { kind: "query", query: "What scholarships are available at SDIT?" },
      },
      {
        id: "fee-contact",
        label: "Contact for fee enquiry",
        action: { kind: "query", query: "Whom should I contact for a fee enquiry at SDIT?" },
      },
      {
        id: "sch-contact",
        label: "Contact for scholarship enquiry",
        action: {
          kind: "query",
          query: "Whom should I contact for a scholarship enquiry at SDIT?",
        },
      },
    ],
  },
  {
    id: "placements",
    title: "Placements",
    parentId: "root",
    options: [
      {
        id: "info",
        label: "Placement information",
        action: { kind: "query", query: "Tell me about placements at SDIT." },
      },
      {
        id: "training",
        label: "Training & placement",
        action: { kind: "query", query: "Tell me about the training and placement cell at SDIT." },
      },
      {
        id: "recruit",
        label: "Recruitment information",
        action: { kind: "query", query: "Which companies recruit from SDIT?" },
      },
      {
        id: "contact",
        label: "Placement contact",
        action: { kind: "query", query: "Whom should I contact about placements at SDIT?" },
      },
    ],
  },
  {
    id: "campus",
    title: "Campus Facilities",
    parentId: "root",
    options: [
      {
        id: "hostel",
        label: "Hostel",
        action: { kind: "query", query: "Tell me about the hostel facility at SDIT." },
      },
      {
        id: "library",
        label: "Library",
        action: { kind: "query", query: "Tell me about the library at SDIT." },
      },
      {
        id: "transport",
        label: "Transport",
        action: { kind: "query", query: "Tell me about transport facilities at SDIT." },
      },
      {
        id: "sports",
        label: "Sports",
        action: { kind: "query", query: "Tell me about sports facilities at SDIT." },
      },
      {
        id: "labs",
        label: "Laboratories",
        action: { kind: "query", query: "Tell me about the laboratories at SDIT." },
      },
      {
        id: "canteen",
        label: "Canteen",
        action: { kind: "query", query: "Tell me about the canteen at SDIT." },
      },
      {
        id: "other",
        label: "Other facilities",
        action: { kind: "query", query: "What other facilities are available on the SDIT campus?" },
      },
    ],
  },
  ...departmentMenus,
];

export const menus: Record<string, Menu> = Object.fromEntries(
  menuList.map((menu) => [menu.id, menu]),
);

export type MenuId = string;

export const ROOT_MENU_ID = "root";
