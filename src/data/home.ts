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
};

export const aboutMetrics: AboutMetric[] = [
  { value: "18+", label: "Years building at scale" },
  { value: "42", label: "Specialists across disciplines" },
  { value: "27", label: "Cities delivered in" },
];

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
  },
  {
    name: "Aster Financial Tower Retrofit",
    location: "Chicago, IL",
    category: "Commercial",
    year: "2024",
    scope: "63-story seismic reinforcement and full MEP modernization under active occupancy.",
  },
  {
    name: "Crescent Line Transit Hub",
    location: "Austin, TX",
    category: "Infrastructure",
    year: "2026",
    scope: "Intermodal station with retail concourse, steel canopy system, and expanded platform access.",
  },
];
