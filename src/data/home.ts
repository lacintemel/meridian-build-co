export type AboutMetric = {
  value: string;
  label: string;
};

export type Service = {
  title: string;
  description: string;
  details: string;
};

export type Project = {
  name: string;
  location: string;
  category: string;
  year: string;
  scope: string;

  // NEW fields for detail pages
  slug: string;
  description: string;
  client?: string;
  completionDate: string;
  budget?: string;
  area?: string;
  services: string[];
  images: {
    hero: string;
    gallery: { url: string; alt: string; caption?: string }[];
  };
  challenges?: string;
  solution?: string;
  outcomes?: string;
  relatedProjects?: string[];
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio?: string;
};

// Services
export const services: Service[] = [
  {
    title: "Design-Build Delivery",
    description: "Single-partner accountability from concept studies to handover.",
    details: "Integrated architecture, engineering, permitting, and construction management under one schedule.",
  },
  {
    title: "Commercial Construction",
    description: "High-performance office, retail, and mixed-use environments.",
    details: "Phased delivery strategies keep tenants operating while major structural upgrades are executed.",
  },
  {
    title: "Infrastructure & Civic",
    description: "Transit, public realm, and institutional facilities with long-term value.",
    details: "We coordinate public stakeholders, compliance requirements, and durable material systems.",
  },
];

export const projects: Project[] = [
  {
    name: "North Harbor Innovation Campus",
    location: "Seattle, WA",
    category: "Mixed-Use",
    year: "2025",
    scope: "1.2M sq ft campus with laboratories, workspace, and public courtyard grid.",
    slug: "north-harbor-innovation-campus",
    description: "A flagship mixed-use campus designed as a innovation hub for emerging technologies and collaborative workspace. The project integrates open laboratory spaces with modern office environments, creating a seamless flow between research and development.\n\nThe campus features a central public courtyard designed to encourage collaboration and community engagement. Cutting-edge sustainability features include green roofs, rainwater harvesting, and energy-efficient mechanical systems that prioritize environmental responsibility.",
    client: "Harbor Development Group",
    completionDate: "2025",
    budget: "$450M - $500M",
    area: "1.2M sq ft",
    services: ["Master Planning", "Architecture", "Structural Engineering", "MEP Engineering", "Project Management"],
    images: {
      hero: "file:///Users/lacintemel/.gemini/antigravity/brain/60ade206-e2ed-418e-a8a0-342dbc0eba0b/commercial_innovation_campus_thumb_1774794630006.png",
      gallery: [
        { url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=400&fit=crop", alt: "Main facade", caption: "North-facing facade with integrated solar shading" },
        { url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop", alt: "Interior lobby", caption: "Grand atrium connecting all seven laboratory levels" },
        { url: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=600&h=400&fit=crop", alt: "Courtyard", caption: "Central courtyard with tiered seating and water features" },
        { url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop", alt: "Workspace", caption: "Flexible workspace zones for collaboration" },
      ],
    },
    challenges: "Integrating multiple programmatic uses on a constrained urban site while maintaining walkability and public access. Coordinating construction logistics in a dense downtown location.",
    solution: "Vertical stacking of program elements with dedicated service cores. Phased construction approach allowing partial occupancy during final build-out. Underground parking solution preserving streetscape.",
    outcomes: "LEED Platinum certification. On-time delivery exceeding budget targets. 95% occupancy rate within first year.",
    relatedProjects: ["aster-financial-tower-retrofit"],
  },
  {
    name: "Aster Financial Tower Retrofit",
    location: "Chicago, IL",
    category: "Commercial",
    year: "2024",
    scope: "63-story seismic reinforcement and full MEP modernization under active occupancy.",
    slug: "aster-financial-tower-retrofit",
    description: "A comprehensive retrofit of a 1980s-era high-rise office tower, balancing seismic safety upgrades with modern amenities. This project required sophisticated sequencing to maintain tenant operations throughout a three-year construction period.\n\nThe retrofit included structural reinforcement to meet current seismic codes, complete mechanical and electrical system replacement, and architectural modernization of common areas and façade restoration.",
    client: "Aster Financial Corp",
    completionDate: "2024",
    budget: "$280M - $320M",
    area: "1.8M sq ft",
    services: ["Structural Engineering", "MEP Retrofit", "Architecture", "Phased Construction Management"],
    images: {
      hero: "file:///Users/lacintemel/.gemini/antigravity/brain/60ade206-e2ed-418e-a8a0-342dbc0eba0b/financial_tower_modernization_thumb_1774794682822.png",
      gallery: [
        { url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop", alt: "Tower exterior", caption: "Restored glass and steel facade with LED lighting" },
        { url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop", alt: "Lobby modernization", caption: "Reimagined main lobby with advanced security systems" },
        { url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop", alt: "Mechanical systems", caption: "State-of-the-art MEP infrastructure" },
        { url: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=600&h=400&fit=crop", alt: "Break spaces", caption: "New tenant amenity spaces on upper floors" },
      ],
    },
    challenges: "Performing structural seismic upgrades while maintaining 85% occupancy. Limited floor space for staging. Complex coordination with 150+ ongoing tenant operations.",
    solution: "Modular seismic reinforcement installed from core outward, zone by zone. Temporary construction areas isolated with temporary walls. 24/7 tenant communication program.",
    outcomes: "Project completed 6 weeks ahead of schedule. 99% tenant retention. Building value increased 35%. Full code compliance achieved.",
    relatedProjects: ["north-harbor-innovation-campus"],
  },
  {
    name: "Crescent Line Transit Hub",
    location: "Austin, TX",
    category: "Infrastructure",
    year: "2026",
    scope: "Intermodal station with retail concourse, steel canopy system, and expanded platform access.",
    slug: "crescent-line-transit-hub",
    description: "A cutting-edge intermodal transit center serving bus, rail, and pedestrian connections. The project creates a catalytic public realm improvement that anchors regional transit infrastructure while revitalizing the surrounding district.\n\nThe design emphasizes transparency and wayfinding with a dramatic steel canopy structure that becomes an iconic symbol for the region. Integrated retail and dining operations support operational sustainability.",
    client: "Capital Metropolitan Transportation Authority",
    completionDate: "2026",
    budget: "$85M - $110M",
    area: "385K sq ft",
    services: ["Station Design", "Structural Engineering", "Civil Infrastructure", "MEP Systems"],
    images: {
      hero: "file:///Users/lacintemel/.gemini/antigravity/brain/60ade206-e2ed-418e-a8a0-342dbc0eba0b/transit_hub_canopy_thumb_1774794700064.png",
      gallery: [
        { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop", alt: "Station entry", caption: "Dynamic entry pavilion with distinctive canopy" },
        { url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=400&fit=crop", alt: "Platform areas", caption: "Expanded platform with weather protection" },
        { url: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=600&h=400&fit=crop", alt: "Concourse", caption: "Retail concourse with natural light" },
        { url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop", alt: "Wayfinding", caption: "Intuitive wayfinding and accessibility features" },
      ],
    },
    challenges: "Coordinating three separate transit operators and modes. Operating bus and rail services during construction. Meeting stringent accessibility requirements.",
    solution: "Phased opening strategy allowing partial operation during build-out. Temporary service relocation during construction. Extensive community engagement program.",
    outcomes: "On-time delivery. Exceeded accessibility targets. $2.1B in regional economic development catalyzed.",
    relatedProjects: ["north-harbor-innovation-campus"],
  },
];

export const team: TeamMember[] = [
  {
    name: "Alexandra Chen",
    role: "Principal Architect",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    bio: "18 years of experience leading complex mixed-use developments across North America. Harvard GSD graduate with focus on sustainable urbanism.",
  },
  {
    name: "Marcus Johnson",
    role: "Senior Structural Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Structural engineering expertise in seismic retrofit and high-performance buildings. 22 years with focus on innovation in material systems.",
  },
  {
    name: "Priya Patel",
    role: "Project Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "Expert in complex project delivery and stakeholder management. Led $800M+ in infrastructure projects across multiple sectors.",
  },
  {
    name: "David Rodriguez",
    role: "Design Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    bio: "Award-winning design leader known for creating human-centered spaces. MIT graduate with passion for community engagement.",
  },
];

export const about = {
  history: "Founded in 2006, Meridian Build Co. emerged from a vision to redefine how complex projects are delivered. What began as a boutique architecture and engineering partnership has evolved into a multidisciplinary studio with expertise spanning design, engineering, and construction management.",
  story: "Founded in 2006, Meridian Build Co. emerged from a vision to redefine how complex projects are delivered. What began as a boutique architecture and engineering partnership has evolved into a multidisciplinary studio with expertise spanning design, engineering, and construction management.",
  mission: "To design and build transformative spaces that advance human connection, environmental stewardship, and long-term value creation.",
  vision: "A world where architecture and engineering elevate the built environment, creating communities that are resilient, inclusive, and inspiring.",
  stats: [
    { value: "18+", label: "Years building at scale" },
    { value: "42", label: "Specialists across disciplines" },
    { value: "27", label: "Cities delivered in" },
  ],
  values: [
    "Precision Engineering",
    "Innovative Design",
    "Collaborative Process",
    "Sustainable Outcomes",
  ]
};
