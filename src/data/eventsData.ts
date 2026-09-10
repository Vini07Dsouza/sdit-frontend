export interface SDITEvent {
  id: string;
  slug: string;
  title: string;
  date: string;
  venue: string;
  organizer: string;
  category: "Technical" | "Cultural" | "Conference" | "Sports" | "Workshop";
  description: string;
  fullDescription: string;
  highlights: string[];
  verified: boolean;
  isHistorical?: boolean;
}

export const sditEvents: SDITEvent[] = [
  {
    id: "drone-workshop",
    slug: "drone-workshop",
    title: "Workshop on Drone Industry Ready: Skills, Careers & Future Opportunities",
    date: "September 8, 2026",
    venue: "SDIT Campus, Kenjar, Mangaluru",
    organizer: "Department of Aeronautical Engineering in collaboration with ZenVed",
    category: "Workshop",
    description:
      "Organized by the Department of Aeronautical Engineering in collaboration with ZenVed, focusing on drone technology industry readiness, career paths, and technical skills.",
    fullDescription:
      "The Department of Aeronautical Engineering at Shree Devi Institute of Technology (SDIT), in collaboration with ZenVed, successfully conducted a specialized workshop titled 'Drone Industry Ready: Skills, Careers & Future Opportunities'. The session provided students with deep insights into unmanned aerial vehicle (UAV) technologies, pilot training requirements, payload integration, maintenance standards, and emerging career opportunities in the burgeoning drone sector.",
    highlights: [
      "Technical sessions on UAV design and applications",
      "Insights into drone industry career roles and skill requirements",
      "Interactive demonstrations and expert Q&A",
      "Collaboration between SDIT Aeronautical Dept and ZenVed",
    ],
    verified: true,
  },
  {
    id: "shree-devi-sambhram",
    slug: "shree-devi-sambhram",
    title: "Shree Devi Sambhram - National Level Cultural & Technical Fest",
    date: "Annual National Fest",
    venue: "SDIT Campus Auditoriums & Open Air Stage",
    organizer: "SDIT Cultural & Technical Committee",
    category: "Cultural",
    description:
      "A premier national-level inter-collegiate cultural and technical festival featuring technical competitions (paper presentation, coding, robotics) and vibrant cultural events.",
    fullDescription:
      "Shree Devi Sambhram is SDIT's flagship national-level inter-collegiate cultural and technical fest. Drawing student participants from engineering and management colleges across the state and country, the fest features a dynamic mix of technical competitions—such as paper presentations, coding challenges, and robo wars—alongside high-energy cultural events including group dance, fashion show, mad-ads, music, and photography contests.",
    highlights: [
      "National-level inter-collegiate participation",
      "Technical competitions: Coding, Robo Wars, Paper Presentation, Quiz",
      "Cultural showcases: Group Dance, Fashion Show, Battle of Bands",
      "Exhibition of student innovation and artistic talent",
    ],
    verified: true,
  },
  {
    id: "surabhi",
    slug: "surabhi",
    title: "Surabhi - Intra-College Technical & Cultural Fest",
    date: "Annual Campus Event",
    venue: "SDIT Campus",
    organizer: "Student Association & All Departments",
    category: "Technical",
    description:
      "Intra-college technical and cultural festival celebrating student talent, creativity, and inter-departmental collaboration across engineering, MCA, and MBA.",
    fullDescription:
      "Surabhi is SDIT's vibrant intra-college fest designed to encourage every student to showcase their hidden talents, technical acumen, and creative flair. Departments compete in various literary, artistic, coding, and design events, fostering camaraderie and holistic development across campus.",
    highlights: [
      "Inter-departmental competitions and trophy events",
      "Technical exhibitions and project displays",
      "Music, dance, drama, and literary competitions",
      "Encouraging first-year and senior student integration",
    ],
    verified: true,
  },
  {
    id: "world-conference-2019",
    slug: "world-conference-2019",
    title: "8th World Conference on Applied Sciences, Engineering and Management",
    date: "September 26–28, 2019",
    venue: "Shree Devi Institute of Technology, Mangaluru",
    organizer: "SDIT in collaboration with Kyushu University (Japan) & BRCORP Singapore",
    category: "Conference",
    description:
      "International academic research conference conducted in collaboration with Kyushu University of Japan and BRCORP Singapore.",
    fullDescription:
      "Shree Devi Institute of Technology proudly hosted the prestigious 8th World Conference on Applied Sciences, Engineering and Management from September 26 to 28, 2019. Organized in international collaboration with Kyushu University, Japan, and BRCORP Singapore, the conference brought together international researchers, academicians, and industry practitioners to present cutting-edge research papers and keynote findings across engineering and management domains.",
    highlights: [
      "International collaboration with Kyushu University (Japan) & BRCORP Singapore",
      "Peer-reviewed research paper presentations across engineering & management",
      "Keynote addresses by international academic delegates",
      "Published conference proceedings and global networking",
    ],
    verified: true,
    isHistorical: true,
  },
  {
    id: "samshodhan",
    slug: "samshodhan",
    title: "Samshodhan - Technical Project Exhibition",
    date: "Annual Academic Event",
    venue: "SDIT Laboratories & Exhibition Halls",
    organizer: "SDIT Academic & R&D Cell",
    category: "Technical",
    description:
      "Annual technical project exhibition showcasing innovative engineering models, prototypes, and R&D projects built by undergraduate and postgraduate students.",
    fullDescription:
      "Samshodhan is SDIT's dedicated technical project exhibition where final-year and junior engineering students present their capstone projects, working prototypes, IoT systems, automation models, and software applications. Evaluated by external industry experts and senior academicians, Samshodhan highlights practical engineering problem-solving.",
    highlights: [
      "Display of final-year B.E., MCA, and M.Tech capstone projects",
      "Evaluation by industry experts and senior professors",
      "Innovation awards and seed funding encouragement",
      "Industry visitor networking and prototype demonstrations",
    ],
    verified: true,
  },
  {
    id: "annual-sports-meet",
    slug: "annual-sports-meet",
    title: "Annual Sports Meet & Sports Mania",
    date: "Annual Inter-Departmental Event",
    venue: "SDIT Sports Grounds & Indoor Stadium",
    organizer: "Department of Physical Education & Sports Club",
    category: "Sports",
    description:
      "Annual athletic meet and inter-departmental sports tournaments fostering teamwork, fitness, and sportsmanship in track-and-field and indoor/outdoor games.",
    fullDescription:
      "The SDIT Annual Sports Meet and Sports Mania events are central to campus life, promoting physical well-being, discipline, and teamwork. Students compete in athletics, cricket, football, volleyball, throwball, basketball, badminton, chess, and table tennis. SDIT teams also actively participate in VTU zonal and state-level tournaments.",
    highlights: [
      "Track and field athletic championships",
      "Inter-departmental cricket, football, and volleyball leagues",
      "Indoor games: Badminton, Chess, Table Tennis",
      "Trophy presentations and champion athlete recognitions",
    ],
    verified: true,
  },
];
