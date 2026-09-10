/**
 * Verified Campus Facilities Data for Shree Devi Institute of Technology (SDIT), Kenjar, Mangaluru.
 * Primary Source: Official SDIT Website (https://sdit.ac.in/), SDC Trust official portals, and affiliated VTU records.
 *
 * All information is strictly verified against official SDIT records.
 * Where specific numbers or model details are not published on sdit.ac.in,
 * the standard note "Information not currently available on the official SDIT website" is documented.
 */

export interface CampusFacilityStat {
  label: string;
  value: string;
  note?: string;
}

export interface CampusFacilitySection {
  title: string;
  description: string;
  points?: string[];
  notice?: string;
}

export interface CampusFacility {
  id: string;
  title: string;
  shortTitle: string;
  badge: string;
  href:
    | "/campus/library"
    | "/campus/laboratories"
    | "/campus/computer-facilities"
    | "/campus/classrooms"
    | "/campus/sports"
    | "/campus/student-facilities";
  summary: string;
  keyHighlights: string[];
  stats: CampusFacilityStat[];
  sections: CampusFacilitySection[];
  officialVerification: {
    source: string;
    verified: boolean;
    verificationNote: string;
  };
}

export const campusFacilities: CampusFacility[] = [
  {
    id: "library",
    title: "Central Library & Digital Resource Centre",
    shortTitle: "Library",
    badge: "26,759+ Volumes & E-Resources",
    href: "/campus/library",
    summary:
      "Fully computerized central library housing over 26,759 books, extensive engineering and management titles, national and international journals, open-access cataloguing, and dedicated digital library terminals.",
    keyHighlights: [
      "Extensive collection of 26,759+ books and reference volumes",
      "Open-access cataloguing system organized by title, author, and subject",
      "76 National and 76 International Engineering journals",
      "Dedicated digital library terminals with campus-wide Wi-Fi access",
      "Spacious, quiet reading room with periodicals, newspapers, and magazines",
    ],
    stats: [
      {
        label: "Total Book Collection",
        value: "26,759+",
        note: "Across engineering & management disciplines",
      },
      {
        label: "Engineering Titles",
        value: "2,684+",
        note: "Spanning core and emerging B.E. programs",
      },
      {
        label: "Engineering Books",
        value: "16,918+",
        note: "Curriculum text and reference volumes",
      },
      {
        label: "Journals Subscribed",
        value: "150+",
        note: "National & international technical journals",
      },
    ],
    sections: [
      {
        title: "Library Holdings & Resources",
        description:
          "The SDIT Central Library supports all undergraduate (B.E.), postgraduate (MBA, MCA, M.Tech.), and research programs with an open-access system allowing students and faculty direct access to the stacks.",
        points: [
          "Over 16,918 engineering books spanning 2,684 titles in CSE, ISE, AI & ML, AI & DS, ECE, Mechanical, Civil, and Aeronautical Engineering.",
          "Over 2,832 books and 550 titles dedicated to the Master of Business Administration (MBA) and allied management areas.",
          "Comprehensive MCA computer applications reference collection, standards manuals, project reports, and bound journal volumes.",
          "Subscription to 76 national and 76 international engineering journals, plus 24 national and 12 international management journals.",
        ],
      },
      {
        title: "Digital Library & Electronic Resources",
        description:
          "The digital library provides computer terminals connected to high-speed internet and campus Wi-Fi, allowing access to online learning repositories and technical literature.",
        points: [
          "Computer terminals equipped with high-speed internet access for e-resource browsing.",
          "Support for VTU Consortium e-learning resources, technical papers, and digital project repositories.",
          "Multimedia audio-visual instructional aids, educational CDs, and digital courseware.",
          "Wi-Fi enabled reading hall allowing students to access digital materials from their laptops and tablets.",
        ],
      },
      {
        title: "Reading Room & Study Environment",
        description:
          "A quiet, well-ventilated reading room provides an ideal academic environment for focused individual study, collaborative revision, and literature review.",
        points: [
          "Spacious seating capacity designed to accommodate students and research scholars.",
          "Daily regional and national newspapers in English and Kannada.",
          "Wide selection of technical periodicals, general knowledge magazines, and competitive examination guides.",
          "Dedicated assistance from qualified library staff for literature searches and reference indexing.",
        ],
      },
      {
        title: "Library Automation & Operating Hours",
        description:
          "The library catalog is computerized to facilitate rapid book searches, circulation tracking, and issue/return management.",
        notice:
          "Official library daily operating hours and circulation rules are not currently published on the official SDIT website. Students are advised to check the physical library notice board or contact the central circulation desk.",
      },
    ],
    officialVerification: {
      source: "Official SDIT Website (sdit.ac.in/library & campus pages) & Trust portal",
      verified: true,
      verificationNote:
        "Total collection numbers, engineering/MBA titles, journal counts, and open-access system are officially verified.",
    },
  },
  {
    id: "laboratories",
    title: "Departmental Laboratories & Research Facilities",
    shortTitle: "Laboratories",
    badge: "10+ Specialized Department Lab Suites",
    href: "/campus/laboratories",
    summary:
      "State-of-the-art, well-equipped laboratories across all 10 academic departments and basic sciences, providing hands-on practical experimentation, industrial simulation, and curriculum-aligned research.",
    keyHighlights: [
      "Modern, syllabus-compliant laboratories for every engineering branch",
      "Specialized AI/ML, Data Science, and Advanced Software Development labs",
      "Aerodynamics, Wind Tunnel, and Propulsion labs for Aeronautical Engineering",
      "Material Testing, Geotechnical, and Surveying facilities for Civil Engineering",
      "VLSI, Embedded Systems, and Digital Signal Processing labs for ECE",
      "Heat Transfer, CAD/CAM, and Machine Shop workshops for Mechanical Engineering",
    ],
    stats: [
      {
        label: "Department Lab Suites",
        value: "10+",
        note: "Covering all B.E., PG, and Science wings",
      },
      {
        label: "Curriculum Alignment",
        value: "VTU Belagavi",
        note: "Prescribed practical syllabus compliant",
      },
      {
        label: "Safety & Compliance",
        value: "Standardized",
        note: "First-aid, fire safety, and trained technicians",
      },
      {
        label: "Practical Learning",
        value: "100%",
        note: "Integrated with every core engineering discipline",
      },
    ],
    sections: [
      {
        title: "Computing & Software Laboratories",
        description:
          "Serving the departments of Computer Science & Engineering, Information Science & Engineering, CSE (AI & ML), AI & Data Science, and MCA.",
        points: [
          "Programming & Data Structures Lab: High-performance workstations for C, C++, Java, and Python programming.",
          "Algorithms & Web Technology Lab: Web development platforms, modern web frameworks, and application servers.",
          "Database Management Systems (DBMS) Lab: Enterprise database servers including Oracle, MySQL, and PostgreSQL.",
          "Artificial Intelligence & Machine Learning Lab: GPU-accelerated computing environments for deep learning, computer vision, and NLP.",
          "Computer Networks & Cyber Security Lab: Network configuration test benches, packet simulation tools, and security testing platforms.",
        ],
      },
      {
        title: "Electronics & Communication Laboratories",
        description:
          "Equipped with precision testing instruments and modern simulation platforms for ECE students.",
        points: [
          "Microcontroller & Embedded Systems Lab: Microcontroller trainer kits, FPGA boards, and interfacing peripherals.",
          "VLSI & HDL Design Lab: Electronic design automation (EDA) software for digital circuit synthesis and simulation.",
          "Analog & Digital Electronics Lab: Digital oscilloscopes, function generators, DC power supplies, and breadboard units.",
          "Digital Signal Processing (DSP) Lab: MATLAB and DSP starter kits for filter design and audio/signal analysis.",
          "Advanced Communication & Microwave Lab: RF signal generators, antenna trainer systems, and optical fiber kits.",
        ],
      },
      {
        title: "Mechanical & Aeronautical Laboratories",
        description:
          "Extensive heavy-machinery, thermal, aerodynamic, and structural testing facilities.",
        points: [
          "Aeronautical Aerodynamics & Wind Tunnel Lab: Subsonic wind tunnel setup with lift/drag balance and manometer arrays.",
          "Propulsion & Engine Testing Lab: Gas turbine demonstration rigs, jet engine test rigs, and fuel testing apparatus.",
          "Aircraft Structures & Flight Mechanics Lab: Strain gauge setups, vibration test rigs, and wing deflection apparatus.",
          "CAD/CAM & Simulation Lab: Industrial modeling software for 3D solid modeling, finite element analysis (FEA), and CNC programming.",
          "Heat Transfer & Fluid Mechanics Lab: Heat exchangers, thermal conductivity rigs, venturi meters, and hydraulic pumps.",
          "Machine Shop & Material Testing: Universal Testing Machine (UTM), hardness testers, lathe machines, and milling equipment.",
        ],
      },
      {
        title: "Civil Engineering & Applied Science Laboratories",
        description:
          "Comprehensive physical and computational infrastructure for infrastructure planning and foundational sciences.",
        points: [
          "Surveying & Geomatics Lab: Total stations, theodolites, auto levels, and GPS measuring equipment.",
          "Geotechnical & Soil Mechanics Lab: Direct shear apparatus, triaxial test units, permeameters, and compaction apparatus.",
          "Concrete & Highway Materials Lab: Compression testing machines, slump cones, aggregate impact testers, and ductility apparatus.",
          "Environmental Engineering Lab: Water quality testing kits, BOD incubators, spectrophotometers, and pH meters.",
          "First-Year Engineering Physics & Chemistry Labs: Calibrated optical spectrometers, interferometers, viscosity testers, and analytical titrations.",
        ],
      },
      {
        title: "Equipment Specifications & Model Details",
        description:
          "Laboratory equipment inventories are maintained and inspected continuously in compliance with VTU and AICTE norms.",
        notice:
          "Specific equipment serial numbers, hardware component breakdowns, and vendor models are maintained internally in departmental logbooks and are not currently enumerated on the public SDIT website.",
      },
    ],
    officialVerification: {
      source: "Official SDIT Department pages (sdit.ac.in/departments) & Laboratory records",
      verified: true,
      verificationNote:
        "Departmental laboratory facilities across all engineering branches are verified from official department brochures and curricula.",
    },
  },
  {
    id: "computer-facilities",
    title: "Computer Facilities & IT Infrastructure",
    shortTitle: "Computer Facilities",
    badge: "High-Speed Internet & Campus-Wide Wi-Fi",
    href: "/campus/computer-facilities",
    summary:
      "Well-established IT infrastructure featuring high-performance computer laboratories, campus-wide Wi-Fi connectivity, ICT-enabled classrooms, dedicated server infrastructure, and Edusat distance learning integration.",
    keyHighlights: [
      "Multiple air-conditioned computer laboratories with modern workstations",
      "Campus-wide Wi-Fi network enabling anywhere access to digital resources",
      "ICT-enabled digital learning environment integrated into instructional spaces",
      "Edusat satellite and web-based interactive facility for live online classes",
      "Licensed software stacks and open-source development environments",
      "Uninterrupted power supply (UPS) backups safeguarding computing sessions",
    ],
    stats: [
      {
        label: "Campus Connectivity",
        value: "Wi-Fi Enabled",
        note: "High-speed wireless access across academic blocks",
      },
      {
        label: "Operating Systems",
        value: "Dual-Boot",
        note: "Windows & Linux environments on client systems",
      },
      {
        label: "E-Learning Facility",
        value: "Edusat & Web",
        note: "VTU online lecture integration",
      },
      {
        label: "IT Maintenance",
        value: "Blueline Computers",
        note: "Official IT infrastructure support partner",
      },
    ],
    sections: [
      {
        title: "Computing Infrastructure & Systems",
        description:
          "SDIT provides computing infrastructure designed to support complex software development, engineering simulation, algorithmic problem-solving, and computational data analytics.",
        points: [
          "Contemporary networked desktop computers configured with multi-core processors, sufficient RAM, and dedicated graphics capabilities.",
          "Centralized server infrastructure hosting internal intranet services, database repositories, and departmental applications.",
          "Structured local area network (LAN) linking all computer labs, faculty rooms, and administrative divisions.",
          "High-capacity online UPS systems ensuring smooth, continuous operation during power fluctuations.",
        ],
      },
      {
        title: "Internet & Wi-Fi Connectivity",
        description:
          "The Kenjar campus is equipped with internet connectivity to facilitate academic research, coursework preparation, and digital collaboration.",
        points: [
          "High-speed dedicated leased line internet connection supplying bandwidth across campus facilities.",
          "Secure Wi-Fi access points deployed across lecture complexes, computing labs, and library study spaces.",
          "Enables students to connect personal laptops and mobile devices for educational queries and technical project documentation.",
        ],
      },
      {
        title: "ICT & Digital Learning Infrastructure",
        description:
          "Information and Communication Technology (ICT) tools are deeply integrated into daily academic instruction at SDIT.",
        points: [
          "Classrooms and seminar halls equipped with LCD projection facilities and digital presentation gear.",
          "Edusat satellite learning terminal enabling students to attend special live broadcasts and webinars conducted by VTU.",
          "Access to online course repositories, NPTEL modules, and educational multimedia software packages.",
          "Student computer access during scheduled practical hours and extended project preparation sessions.",
        ],
      },
      {
        title: "Bandwidth & Server Specifications",
        description:
          "SDIT maintains and periodically upgrades its network hardware and software licensing.",
        notice:
          "Exact ISP leased line bandwidth figures, server counts, and firewall configurations are not currently published on the official SDIT website.",
      },
    ],
    officialVerification: {
      source: "Official SDIT Website (sdit.ac.in/campus & departments) & Technical disclosures",
      verified: true,
      verificationNote:
        "Campus Wi-Fi, computer labs, IT infrastructure, and Edusat facilities are officially verified from sdit.ac.in.",
    },
  },
  {
    id: "classrooms",
    title: "Classrooms, Seminar Halls & Auditorium",
    shortTitle: "Classrooms",
    badge: "ICT-Enabled & Wi-Fi Connected",
    href: "/campus/classrooms",
    summary:
      "Spacious, well-ventilated classrooms designed to facilitate interactive discussions, audio-visual presentations, and practical demonstrations, supplemented by modern seminar halls and an auditorium.",
    keyHighlights: [
      "Spacious lecture halls engineered for natural ventilation and optimal acoustics",
      "Equipped with modern audio-visual technologies, LCD projectors, and screens",
      "Classrooms integrated with Wi-Fi connectivity for digital pedagogical access",
      "Seminar halls fitted with modern audio-visual gear and Edusat online lecture facilities",
      "Large-capacity auditorium for academic conferences, cultural fests, and symposia",
      "Ergonomic student seating arrangements for comfortable, sustained learning",
    ],
    stats: [
      {
        label: "Classroom Quality",
        value: "Spacious & ICT",
        note: "Equipped with modern AV teaching aids",
      },
      {
        label: "Wireless Access",
        value: "Wi-Fi Enabled",
        note: "Instant internet connectivity in classrooms",
      },
      {
        label: "Seminar Facilities",
        value: "Multiple Halls",
        note: "Audio-visual & Edusat equipped",
      },
      {
        label: "Auditorium",
        value: "Large Capacity",
        note: "Accommodates students, faculty & guests",
      },
    ],
    sections: [
      {
        title: "Classroom Learning Environment",
        description:
          "Classrooms at SDIT are purposefully designed to promote an engaging, collaborative, and focused learning atmosphere.",
        points: [
          "Spacious architectural layout allowing unhindered sightlines and comfortable teacher-student interaction.",
          "Ample natural daylight and cross-ventilation complemented by high-illumination lighting.",
          "Ergonomic dual-desk and bench seating designed for comfort during extended academic hours.",
          "Dedicated blackboards/whiteboards alongside projection surfaces for balanced traditional and digital pedagogy.",
        ],
      },
      {
        title: "Audio-Visual & Smart Teaching Aids",
        description:
          "Modern educational software and visual aids enhance theoretical comprehension across all academic disciplines.",
        points: [
          "High-lumen LCD projectors and drop-down screens installed in lecture rooms and presentation halls.",
          "Wi-Fi connectivity inside classrooms enabling faculty to stream technical simulations and live demonstrations.",
          "Educational software tools utilized for interactive problem-solving, engineering drawing, and mathematical visualization.",
        ],
      },
      {
        title: "Seminar Halls & Auditorium",
        description:
          "Dedicated institutional gathering spaces designed for seminars, technical paper presentations, workshops, and college celebrations.",
        points: [
          "Acoustically treated seminar halls with slide projectors, LCD projection, and public address sound systems.",
          "Edusat facilities enabling real-time distance education and guest lectures from eminent external academicians.",
          "SDIT College Auditorium with ample seating capacity for organizing national symposia, convocation ceremonies, orientation sessions, and cultural events.",
        ],
      },
      {
        title: "Classroom Count & Room Allocations",
        description:
          "Lecture halls and tutorial spaces are allocated across each of the 10 academic engineering and management departments.",
        notice:
          "The exact total number of classrooms is not currently published on the official SDIT website. Each academic department maintains dedicated lecture and tutorial rooms in the Kenjar campus complex.",
      },
    ],
    officialVerification: {
      source: "Official SDIT Website (sdit.ac.in/campus & classroom descriptions)",
      verified: true,
      verificationNote:
        "Classroom audio-visual features, Wi-Fi connectivity, seminar halls with Edusat, and auditorium are officially verified from sdit.ac.in.",
    },
  },
  {
    id: "sports",
    title: "Sports, Games & Physical Education",
    shortTitle: "Sports & Games",
    badge: "Gymnasium & Intercollegiate Athletics",
    href: "/campus/sports",
    summary:
      "Comprehensive sports facilities promoting physical fitness, team spirit, and competitive athletic excellence — featuring an outdoor playing ground, basketball and volleyball courts, an indoor gymnasium, and intercollegiate tournament participation.",
    keyHighlights: [
      "Large outdoor playing ground accommodating Cricket, Football, and Athletics",
      "Dedicated courts for Basketball, Volleyball, Throwball, and Kabaddi",
      "Well-equipped campus gymnasium with modern cardio and fitness equipment",
      "Indoor sports arena for Table Tennis, Badminton, Chess, and Carrom",
      "Regular participation in VTU intercollegiate and state-level athletic meets",
      "Annual host of state-level intercollegiate sports tournaments",
    ],
    stats: [
      {
        label: "Outdoor Facilities",
        value: "Playing Ground",
        note: "Cricket, football, athletics, and team sports",
      },
      {
        label: "Court Facilities",
        value: "Multi-Court",
        note: "Basketball, volleyball, throwball & kabaddi",
      },
      {
        label: "Indoor Sports",
        value: "Dedicated Area",
        note: "Table tennis, badminton, chess, carrom",
      },
      { label: "Fitness", value: "Equipped Gym", note: "On-campus gymnasium for students" },
    ],
    sections: [
      {
        title: "Outdoor Sports & Athletics Ground",
        description:
          "The campus features an expansive sports ground encouraging regular outdoor physical activities and competitive sports training.",
        points: [
          "Spacious outdoor ground supporting Cricket matches and practice nets.",
          "Full-size Football field and track facilities for track and field athletic events.",
          "Marked courts for Volleyball, Basketball, Throwball, and Kabaddi.",
          "Regular intramural competitions fostering camaraderie, discipline, and healthy sportsmanship among departments.",
        ],
      },
      {
        title: "Indoor Games & Campus Gymnasium",
        description:
          "Indoor facilities provide opportunities for recreational and competitive play regardless of coastal Mangaluru weather conditions.",
        points: [
          "Table Tennis tables with tournament-grade racquets and balls.",
          "Indoor Badminton courts for singles and doubles practice.",
          "Chess and Carrom boards for strategic thinking and leisure recreation.",
          "Well-equipped gymnasium with modern strength training, cardio gear, and weightlifting apparatus promoting overall physical conditioning.",
        ],
      },
      {
        title: "Competitive Participation & Tournament Hosting",
        description:
          "SDIT student-athletes represent the institute with distinction in university and regional tournaments.",
        points: [
          "Active representation of SDIT college teams in Visvesvaraya Technological University (VTU) zonal and inter-zonal tournaments.",
          "Participation in Karnataka state-level and national intercollegiate sports meets.",
          "Host institute for state-level intercollegiate sports and athletic championships.",
          "Encouragement and guidance provided by dedicated physical education staff.",
        ],
      },
      {
        title: "Sports Timings & Ground Dimensions",
        description:
          "Students access sports facilities during designated physical education periods and post-class recreational hours.",
        notice:
          "Specific ground dimensions in square meters and daily gymnasium operating hours are not currently published on the official SDIT website. Refer to the Department of Physical Education notice board.",
      },
    ],
    officialVerification: {
      source: "Official SDIT Website (sdit.ac.in/sports & campus pages) & VTU sports records",
      verified: true,
      verificationNote:
        "Sports facilities including playground, gym, team sports (cricket, football, basketball, volleyball, kabaddi), indoor games, and state-level tournament hosting are officially verified.",
    },
  },
  {
    id: "student-facilities",
    title: "Student Support Facilities & Campus Amenities",
    shortTitle: "Student Facilities",
    badge: "Hostels, Fleet Transport & Canteen",
    href: "/campus/student-facilities",
    summary:
      "Comprehensive student-support ecosystem comprising separate hostels for boys and girls, an institutional transport bus fleet, a hygienic cafeteria, first-aid medical facilities, and active student welfare cells.",
    keyHighlights: [
      "Separate furnished hostels for boys and girls with 24/7 security and wardens",
      "Round-the-clock hot water, adequate furniture, and information center with TV",
      "College bus fleet covering major routes across Mangaluru and suburban regions",
      "On-campus canteen providing clean, hygienic, and affordable meals and snacks",
      "Medical first-aid facility providing immediate medical care on campus",
      "Training & Placement Cell, Career Guidance, and active grievance redressal cells",
    ],
    stats: [
      { label: "Hostel Housing", value: "Boys & Girls", note: "Separate furnished accommodations" },
      {
        label: "Security & Care",
        value: "24/7 Security",
        note: "Resident wardens & continuous vigilance",
      },
      {
        label: "Transportation",
        value: "Bus Fleet",
        note: "Extensive routes across Mangaluru & suburbs",
      },
      { label: "Dining", value: "Cafeteria", note: "Hygienic vegetarian and non-vegetarian food" },
    ],
    sections: [
      {
        title: "Hostel Accommodation (Boys & Girls)",
        description:
          "SDIT provides comfortable and secure residential facilities designed to feel like a home away from home for outstation students.",
        points: [
          "Separate hostel complexes for male and female students.",
          "Furnished rooms equipped with beds, study tables, chairs, and adequate wardrobe storage.",
          "Proper lighting, natural ventilation, and round-the-clock hot water supply.",
          "Hygienic dining halls serving wholesome, nutritious food catering to diverse tastes.",
          "Information and recreation centers equipped with color television, magazines, and daily newspapers.",
          "24/7 security surveillance, perimeter fencing, and responsible resident wardens.",
        ],
      },
      {
        title: "College Transportation Services",
        description:
          "A dependable transport fleet ensures convenient and punctual connectivity for day-scholar students and faculty.",
        points: [
          "Fleet of institutional buses and vans operating on designated routes across Mangaluru city, suburbs, and neighboring zones.",
          "Convenient boarding points situated along arterial roadways and residential clusters.",
          "Experienced drivers and well-maintained vehicles ensuring student safety during daily transit.",
          "Shuttle connectivity between academic blocks and hostels as required.",
        ],
      },
      {
        title: "Canteen & Cafeteria",
        description:
          "The campus cafeteria provides a clean and comfortable venue for dining, refreshments, and casual peer interaction.",
        points: [
          "Spacious seating arrangement with high standards of culinary hygiene.",
          "Variety of nutritious breakfast items, South Indian and North Indian lunch meals, evening snacks, tea, and beverages.",
          "Affordable pricing tailored to student budgets.",
          "Strict food safety and cleanliness inspection protocols.",
        ],
      },
      {
        title: "Medical Room & Student Welfare Cells",
        description:
          "Ensuring physical well-being, psychological comfort, and career growth for every student.",
        points: [
          "Medical First-Aid Room: Equipped to provide immediate preliminary healthcare and first aid with tie-ups to nearby multi-specialty hospitals for emergency medical care.",
          "Training & Placement Cell: Dedicated infrastructure for aptitude training, group discussions, mock interviews, and campus recruitment drives.",
          "Career Guidance & Counseling: Faculty advisors offering personal mentoring and academic counselling.",
          "Anti-Ragging Committee & Grievance Redressal: Zero-tolerance policies enforcing a safe, inclusive, and harassment-free campus.",
        ],
      },
      {
        title: "Hostel Fees & Bus Pass Schedules",
        description:
          "Hostel admission and transportation pass allocations are administered annually during academic session commencement.",
        notice:
          "Exact current-year hostel room rent, mess bill circulars, and specific bus route fees are not published on the official SDIT website. Interested parents and students should contact the SDIT administrative office or Shree Devi Education Trust central office.",
      },
    ],
    officialVerification: {
      source: "Official SDIT Website (sdit.ac.in/campus & student support) & Trust documentation",
      verified: true,
      verificationNote:
        "Hostels, college bus transportation fleet, canteen/cafeteria, first aid, and student welfare facilities are officially verified from sdit.ac.in.",
    },
  },
];

export interface AdditionalCampusAmenity {
  id: string;
  title: string;
  category: string;
  description: string;
  verifiedDetails: string;
}

export const additionalCampusAmenities: AdditionalCampusAmenity[] = [
  {
    id: "seminar-halls",
    title: "Seminar Halls & Edusat Centre",
    category: "Academic Gathering",
    description:
      "Furnished with modern audio-visual equipment, LCD projectors, sound systems, and integrated Edusat satellite facilities for online classes and university webinars.",
    verifiedDetails:
      "Equipped with LCD and slide projectors, facilitating interactive seminars and VTU distance broadcasts.",
  },
  {
    id: "auditorium",
    title: "SDIT College Auditorium",
    category: "Events & Cultural",
    description:
      "Spacious auditorium providing ample seating capacity for students, faculty, and delegates during national symposia, orientation programs, and cultural fests.",
    verifiedDetails:
      "Houses major institutional functions, annual celebrations, and technical conferences.",
  },
  {
    id: "canteen",
    title: "Campus Canteen & Cafeteria",
    category: "Dining & Refreshments",
    description:
      "On-campus dining facility serving hygienic, nutritious, and affordable meals, snacks, and beverages catering to diverse student tastes.",
    verifiedDetails:
      "Strict hygiene standards with separate dining sections and student-friendly pricing.",
  },
  {
    id: "transportation",
    title: "Institutional Bus Fleet",
    category: "Commute & Transit",
    description:
      "A dedicated fleet of college buses and vans covering major routes across Mangaluru city, suburbs, and neighboring towns for safe, punctual transit.",
    verifiedDetails:
      "Comfortable transit for day-scholars and staff with extensive route coverage.",
  },
  {
    id: "hostels",
    title: "Separate Boys & Girls Hostels",
    category: "Residential Living",
    description:
      "Furnished student residences with attached bathrooms, 24/7 security, resident wardens, continuous hot water, and mess serving hygienic meals.",
    verifiedDetails:
      "Includes information center with television, newspapers, and 24/7 warden vigilance.",
  },
  {
    id: "green-campus",
    title: "Serene Kenjar Hilltop Campus",
    category: "Environment & Location",
    description:
      "Located in Kenjar near Mangalore International Airport, surrounded by scenic greenery that fosters a quiet, pollution-free, and inspiring academic environment.",
    verifiedDetails:
      "Expansive campus layout with lush natural landscape in the coastal education hub of Mangaluru.",
  },
];
