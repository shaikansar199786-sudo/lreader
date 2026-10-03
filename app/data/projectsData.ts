export interface ProjectGalleryItem {
  src: string;
  title: string;
  category: "Master Plan" | "Entrance Arch" | "Internal Roads" | "Green Parks" | "Site Progress" | "Venture View" | "Infrastructure";
}

export interface ProjectVideoItem {
  id: string;
  title: string;
  duration: string;
  tag: string;
  channel: string;
}

export interface ProjectDetail {
  slug: string;
  name: string;
  location: string;
  locationDetails: string;
  size: string;
  facing: string;
  approval: string;
  status: string;
  badge: string;
  image: string;
  description: string;
  features: string[];
  amenities: string[];
  locationHighlights: string[];
  gallery?: ProjectGalleryItem[];
  videos?: ProjectVideoItem[];
}

export const allProjectsData: ProjectDetail[] = [
  {
    slug: "sukrithi-aawas",
    name: "Sukrithi Aawas",
    location: "Visakhapatnam, Andhra Pradesh",
    locationDetails: "Prime Visakhapatnam Residential Expansion Zone, Andhra Pradesh",
    size: "3 Cent / Layout Plots",
    facing: "North Facing",
    approval: "Clear Title Layout",
    status: "Ready to Register",
    badge: "Ready to Register",
    image: "/subhagruha/sukrithi-aawas.jpg",
    description:
      "Subhagruha presents 'Sukrithi Aawas', offering limited premium residential plots where only a select few can get to be a part of Visakhapatnam's finest living. A gated plotted layout with full electricity, wide internal roads, and dedicated maintenance services. Living in Sukrithi Aawas ensures you compromise neither on luxury nor peace of mind. Nestled amid lush greenery and a pollution-free environment with rich heritage, the township is designed to offer a tranquil living experience with immense value appreciation.",
    features: [
      "Clear Title Layout",
      "Immediate Registration",
      "Bank Loan Eligible",
      "Avenue Plantation",
      "Gated Community Security",
      "24/7 Water & Power Lines",
    ],
    amenities: [
      "Grand Entrance Archway",
      "33ft & 40ft Wide Internal Roads",
      "Underground Drainage System",
      "Street Lighting Infrastructure",
      "Dedicated Children Play Park",
      "Compound Wall with Manned Security",
      "Rainwater Harvesting Pits",
      "100% Vaastu Compliant Planning",
    ],
    locationHighlights: [
      "Few minutes' drive to National Highway arteries",
      "Close to prestigious international schools & colleges",
      "Easy access to IT SEZ and commercial employment hubs",
      "Quick connectivity to Vizag Railway Station and Bus Terminal",
      "Surrounded by established residential colonies and supermarkets",
    ],
  },
  {
    slug: "sukruthi-ananthika",
    name: "Sukruthi Ananthika",
    location: "Srikakulam Highway, Visakhapatnam",
    locationDetails: "Direct National Highway Facing, Near Oakridge International Corridor, Vizag",
    size: "12,000 Sq.Ft Layout / Custom Plots",
    facing: "West Facing",
    approval: "VMRDA Approved",
    status: "Upcoming Venture",
    badge: "Upcoming Venture",
    image: "/subhagruha/sukruthi-ananthika.jpg",
    description:
      "Directly facing the National Highway, Sukruthi Ananthika allows you to savor the splendor and sunshine of Visakhapatnam — the financial and executive capital of Andhra Pradesh. Rising as a pivotal growth center, this suburban paradise offers a peaceful getaway from urban congestion while ensuring unmatched connectivity. The locale enables an idyllic work-life balance through direct proximity to IT SEZs, top educational institutions, healthcare centers, and transit hubs.",
    features: [
      "Highway Facing Location",
      "VMRDA Approved Layout",
      "Gated Community",
      "Children Play Area",
      "Avenue Plantation",
      "Rapid Value Appreciation",
    ],
    amenities: [
      "Grand Gate & Boundary Wall",
      "Wide BT Internal Blacktop Roads",
      "Lush Landscaped Green Parks",
      "24/7 Professional Security Guard",
      "Reliable Water Supply Network",
      "Overhead Water Storage Tank",
      "Avenue Trees on Both Sides",
      "Modern Street Lighting",
    ],
    locationHighlights: [
      "Direct frontage on Vizag - Srikakulam National Highway (NH-16)",
      "Near Oakridge International School and top engineering colleges",
      "15 minutes to Madhurawada IT corridor and Rushikonda beach",
      "Convenient access to healthcare parks and specialty hospitals",
      "Positioned along the high-momentum smart city development corridor",
    ],
  },
  {
    slug: "sukrithi-windsor",
    name: "Sukrithi Windsor",
    location: "Bheemannadorapalem, Vizag",
    locationDetails: "Anandapuram Mandal, North Visakhapatnam Corridor, AP",
    size: "150 - 400 Sq. Yds",
    facing: "East & North Facing",
    approval: "VMRDA Approved",
    status: "For Sale",
    badge: "VMRDA Approved",
    image: "/subhagruha/sukrithi-windsor.jpg",
    description:
      "Bheemannadorapalem is a premier high-potential residential and commercial investment zone in North Visakhapatnam. Situated within Anandapuram Mandal, it sits directly inside the city's fastest-growing suburban expansion corridor, heavily supported by master-planned infrastructure from the Visakhapatnam Metropolitan Region Development Authority (VMRDA). Sukrithi Windsor offers well-demarcated plots with world-class gated infrastructure.",
    features: [
      "VMRDA Approved Layout",
      "Compound Wall with Gate",
      "Avenue Plantations",
      "Children's Play Area",
      "Street Lights & Electricity",
      "100% Vaastu Compliant",
    ],
    amenities: [
      "33ft and 40ft All Blacktop Roads",
      "Complete Perimeter Compound Wall",
      "24/7 Security Personnel at Entrance",
      "Underground Drainage System",
      "Dedicated Children Play Park",
      "Lush Landscaped Avenues & Gardens",
      "Water Supply Tap to Every Plot",
      "Dedicated Electricity Transformers",
    ],
    locationHighlights: [
      "Located in the prime Anandapuram - Bheemannadorapalem growth corridor",
      "Seamless connectivity to Tagarapuvalasa and Bhogapuram Airport zone",
      "Close to major engineering, medical, and pharmacy universities",
      "High return on investment driven by multi-lane highway connectivity",
      "Clean, pollution-free living surrounded by natural green topography",
    ],
  },
  {
    slug: "sukrithi-sathvik",
    name: "Sukrithi Sathvik",
    location: "Gantlam, Vizianagaram Highway",
    locationDetails: "Gantlam Junction, Vizianagaram Highway Corridor",
    size: "1,200 Sq. Ft Plots",
    facing: "South Facing",
    approval: "Approved Layout",
    status: "For Sale",
    badge: "Prime Location",
    image: "/subhagruha/sukrithi-sathvik.png",
    description:
      "Subhagruha's Sukrithi Sathvik Venture is the perfect place to call home and build generational wealth. Located in a peaceful and serene environment, yet closely connected to key educational institutions, transport links, and commercial hubs. Designed with comprehensive modern amenities including wide blacktop roads, dedicated water storage, and walking tracks for healthy community living.",
    features: [
      "100% Vaastu Compliant",
      "33ft & 40ft All BT Roads",
      "Rain Harvesting Pits",
      "24/7 Gated Security",
      "Dedicated Water Tank",
      "Children Play Area",
    ],
    amenities: [
      "Dedicated Overhead Water Tank",
      "Underground Drainage System",
      "Walking Track for Residents",
      "Lush Avenue Tree Plantation",
      "Street Lighting on All Roads",
      "Perimeter Compound Wall",
      "Clear Verified Land Titles",
      "Immediate Registration Assistance",
    ],
    locationHighlights: [
      "Strategically situated along the Vizag - Vizianagaram growth artery",
      "Minutes away from major transport depots and connecting railway links",
      "Peaceful suburban atmosphere with rapidly developing residential neighborhoods",
      "Close proximity to reputable schools, colleges, and regional hospitals",
      "Attractively priced plotted units ideal for early capital appreciation",
    ],
  },
  {
    slug: "maple-meadows",
    name: "Maple Meadows",
    location: "Modavalasa, Visakhapatnam",
    locationDetails: "Modavalasa Village, Bangar Raju Peta, Visakhapatnam",
    size: "3,200 Sq. Ft Layout Units",
    facing: "South Facing",
    approval: "VMRDA Approved",
    status: "Sale",
    badge: "Gated Community",
    image: "/subhagruha/maple-meadows.png",
    description:
      "Luxury gated plotted living accessible to families who aspire to a premier lifestyle. Meticulously landscaped with tree-lined roads, green parks, and seasonal blooms, Maple Meadows celebrates emotional and spiritual well-being alongside material investment security. Located in the coveted Modavalasa belt with instant connectivity to regional growth corridors.",
    features: [
      "Grand Entrance Arch",
      "Meticulously Landscaped Layout",
      "Tree-Lined Avenues",
      "Green Recreation Parks",
      "24/7 Security",
      "Clear Title & Approvals",
    ],
    amenities: [
      "Grand Architectural Entrance Archway",
      "Wide Internal BT Roads",
      "Full Gated Community Compound",
      "Modern Street Lights",
      "Dedicated Children Play Park",
      "Walking and Jogging Pathways",
      "Continuous Water & Power Distribution",
      "Professional Layout Maintenance",
    ],
    locationHighlights: [
      "Minutes from National Highway connecting Vizag and Vizianagaram",
      "Close to leading international schools and professional colleges",
      "Rapidly developing residential pocket with strong capital growth",
      "Convenient access to shopping, dining, and healthcare centers",
      "Serene, green natural surroundings with fresh air and open horizons",
    ],
  },
  {
    slug: "sukeerthi-sadan-phase-2",
    name: "Sukeerthi Sadan Phase 2",
    location: "Kothavalasa, Vizag Corridor",
    locationDetails: "Kothavalasa Junction, Near Railway Station Corridor, Vizag",
    size: "12,345 Sq. Ft Layout",
    facing: "East Facing",
    approval: "VMRDA Approved",
    status: "For Sale",
    badge: "VMRDA Approved",
    image: "/subhagruha/sukeerthi-sadan-phase-2.jpeg",
    description:
      "Sukeerthi Sadan Phase 2 is an established, approved plotted development situated in Kothavalasa — one of the most reliable and affordable residential hubs in the Visakhapatnam metropolitan region. Featuring wide blacktop roads, clear demarcation, and easy access to both rail transport and major highways.",
    features: [
      "Near Railway Station",
      "VMRDA Approved",
      "Clear Legal Titles",
      "40ft Internal Roads",
      "Security Guard Protection",
      "Bank Loan Availability",
    ],
    amenities: [
      "40ft & 33ft Wide Internal Roads",
      "Water Supply Tap to Each Plot",
      "Overhead Water Tank Facility",
      "Drainage & Rainwater Infiltration",
      "Electricity Lines with Streetlights",
      "Children Recreation Area",
      "Boundary Wall with Entrance Arch",
      "Avenue Plantation",
    ],
    locationHighlights: [
      "Walking distance to Kothavalasa Railway Junction",
      "Easy commute to industrial corridors and Visakhapatnam City",
      "Surrounded by banks, markets, pharmacies, and educational institutes",
      "Peaceful living environment away from metropolitan noise",
      "Affordable plot pricing with high historical rental & land value growth",
    ],
  },
  {
    slug: "sukeerthi-sadan-phase-1",
    name: "Sukeerthi Sadan Phase 1",
    location: "Kothavalasa, Vizag",
    locationDetails: "Near Kothavalasa Main Road, Vizag",
    size: "23,456 Sq. Ft Layout",
    facing: "South Facing",
    approval: "VMRDA Approved",
    status: "For Sale",
    badge: "Established Layout",
    image: "/subhagruha/sukeerthi-sadan-phase-1.png",
    description:
      "Phase 1 of the celebrated Sukeerthi Sadan development in Kothavalasa. Fully developed layout with established roads, avenue trees, and families who have already initiated residential construction. Backed by verified legal documentation and direct registration.",
    features: [
      "Ready for Construction",
      "VMRDA Approved",
      "Established Infrastructure",
      "Clear Documentation",
      "Wide Internal Roads",
      "Immediate Registration",
    ],
    amenities: [
      "Blacktop Internal Roads",
      "Water Supply Infrastructure",
      "Electricity Connections Active",
      "Compound Boundary Wall",
      "Tree-Lined Streets",
      "100% Vaastu Compliance",
    ],
    locationHighlights: [
      "Centrally positioned in Kothavalasa town",
      "Quick access to main state highway arteries",
      "Established neighborhood with daily convenience stores nearby",
    ],
  },
  {
    slug: "subhagruha-sukrithi-saanvi-phase-3",
    name: "Subhagruha Sukrithi Saanvi Phase-3",
    location: "Tagarapuvalasa, Vizag Corridor",
    locationDetails: "Tagarapuvalasa Educational Corridor, Visakhapatnam",
    size: "2,000 Sq. Ft Plots",
    facing: "North Facing",
    approval: "VMRDA Approved",
    status: "For Sale",
    badge: "Tagarapuvalasa Corridor",
    image: "/subhagruha/gallery-saanvi.png",
    description:
      "Strategically situated in the vibrant Tagarapuvalasa corridor — widely known as Visakhapatnam's educational epicenter. Sukrithi Saanvi Phase 3 delivers gated community plotted layouts with underground infrastructure, landscaped avenues, and proximity to major commercial corridors.",
    features: [
      "Tagarapuvalasa Growth Corridor",
      "VMRDA Approved",
      "Underground Drainage",
      "Park Facing Plots Available",
      "24/7 Security",
      "Avenue Trees",
    ],
    amenities: [
      "Wide BT Roads with Curbs",
      "Underground Drainage Network",
      "Children's Play Park & Green Lawn",
      "Full Layout Perimeter Wall",
      "Modern Street Lighting",
      "Clear Title & Verified Approvals",
    ],
    locationHighlights: [
      "Located in the Tagarapuvalasa - Anandapuram educational belt",
      "Close to engineering, management, and medical campuses",
      "Short drive to Bhogapuram International Airport zone",
      "Excellent highway connectivity to Vizag city center",
    ],
  },
  {
    slug: "sukrithi-saanvi-phase-4",
    name: "Sukrithi Saanvi Phase 4",
    location: "Bhogapuram Airport Corridor",
    locationDetails: "Bhogapuram International Airport Growth Zone, AP",
    size: "200 - 400 Sq. Yds",
    facing: "East & North Facing",
    approval: "VUDA / VMRDA Approved",
    status: "Airport Corridor",
    badge: "Airport Corridor",
    image: "/subhagruha/proj-sukrithi-saanvi4.jpg",
    description:
      "Sukrithi Saanvi Phase 4 offers prime residential plots for sale in Bhogapuram, strategically situated in the mega international airport growth zone. Rapid infrastructure appreciation, prospective aerotropolis developments, and high ROI make this one of the most sought-after investment corridors in Andhra Pradesh.",
    features: [
      "Bhogapuram Airport Vicinity",
      "VUDA / VMRDA Approved",
      "High Appreciation ROI",
      "Water Tap to Each Plot",
      "Blacktop Roads",
      "100% Vaastu",
    ],
    amenities: [
      "Grand Highway Entry Gate",
      "40ft & 33ft All BT Roads",
      "Avenue Plantation",
      "Dedicated Overhead Water Storage",
      "24/7 Manned Security",
      "Children Recreation Park",
    ],
    locationHighlights: [
      "Direct proximity to the upcoming Bhogapuram International Airport",
      "Positioned along the 6-lane National Highway economic corridor",
      "Expected multi-fold appreciation driven by aero-city infrastructure",
      "Close to beach tourism corridors and coastal recreational zones",
    ],
  },
  {
    slug: "sukrithi-springs",
    name: "Sukrithi Springs",
    location: "Visakhapatnam, Andhra Pradesh",
    locationDetails: "Visakhapatnam Metropolitan Expansion Zone, AP",
    size: "200 Sq. Yards",
    facing: "East Facing",
    approval: "Clear Title Layout",
    status: "For Sale",
    badge: "Prime Residential",
    image: "/subhagruha/sukrithi-springs.jpg",
    description:
      "Sukrithi Springs offers thoughtfully developed residential plots in Visakhapatnam. Boasting clear legal documentation, verified parent titles, and immediate registration capabilities, this development combines urban convenience with peaceful suburban tranquility.",
    features: [
      "Clear Legal Title",
      "Immediate Registration",
      "Bank Loan Assistance",
      "Avenue Trees",
      "East Facing Options",
      "Gated Security",
    ],
    amenities: [
      "Wide Internal Roads",
      "Electric Infrastructure Installed",
      "Continuous Water Connection Points",
      "Gated Layout Compound",
      "Street Lights",
    ],
    locationHighlights: [
      "Strategic location with short transit times to Vizag City",
      "Proximity to commercial markets and convenience stores",
      "High residential rental and resale demand in surrounding area",
    ],
  },
  {
    slug: "sukrithi-nivas-phase-3",
    name: "Sukrithi Nivas Phase 3",
    location: "Visakhapatnam, Andhra Pradesh",
    locationDetails: "Visakhapatnam Urban Corridor, Andhra Pradesh",
    size: "150 - 300 Sq. Yds",
    facing: "East & North Facing",
    approval: "VMRDA Approved",
    status: "For Sale",
    badge: "Open Plots",
    image: "/subhagruha/proj-sukrithi-nivas.jpg",
    description:
      "Sukrithi Nivas Phase 3 offers thoughtfully planned plots designed for homebuyers and long-term investors. Developed by Subhagruha Infra Projects, focused on quality infrastructure, seamless connectivity, and comfortable future living in Visakhapatnam.",
    features: [
      "VMRDA Approved",
      "40ft BT Roads",
      "Underground Drainage",
      "Avenue Trees",
      "Immediate Registration",
      "Bank Loan Support",
    ],
    amenities: [
      "40ft Wide Internal Roads",
      "Underground Drainage Network",
      "Children Recreation Park",
      "Compound Boundary Wall",
      "Street Lighting",
      "Water Supply Connection",
    ],
    locationHighlights: [
      "Convenient transit to central Visakhapatnam",
      "Surrounded by prominent schools, colleges, and medical centers",
      "High capital growth corridor with rapid infrastructure progress",
    ],
  },
  {
    slug: "sukriti-sampath",
    name: "Sukriti Sampath Phase 1 - 2",
    location: "Sontyam, Visakhapatnam",
    locationDetails: "Sontyam Growth Corridor, Visakhapatnam, AP",
    size: "Plots & Layout Units",
    facing: "East & West Facing",
    approval: "VUDA Approved",
    status: "For Sale",
    badge: "Open Plots",
    image: "/subhagruha/proj-sukrithi-sampath.jpg",
    description:
      "Sukriti Sampath Phase 1 & 2 offers premium plots for sale in Sontyam, Visakhapatnam, ideal for building your dream home or securing long-term high capital appreciation in a clean, scenic green landscape.",
    features: [
      "Immediate Registration",
      "Clear Titles",
      "Compound Wall",
      "Water Supply",
      "VUDA Approved",
      "Avenue Trees",
    ],
    amenities: [
      "All Blacktop Internal Roads",
      "Gated Community Entrance",
      "Children Play Area",
      "Dedicated Water Tap Lines",
      "Electricity Connections",
    ],
    locationHighlights: [
      "Located in the serene, rapidly developing Sontyam corridor",
      "Direct road connectivity to Anandapuram and Pendurthi",
      "Clean air, elevated greenery, and peaceful living environment",
    ],
  },
  {
    slug: "sukrithi-lohitha",
    name: "Sukrithi Lohitha",
    location: "Anandapuram, Vizag",
    locationDetails: "Anandapuram Junction Growth Corridor, Vizag",
    size: "167 - 300 Sq. Yds",
    facing: "North & East Facing",
    approval: "VMRDA Approved",
    status: "Upcoming Venture",
    badge: "Upcoming Venture",
    image: "/subhagruha/proj-sukrithi-lohitha.jpg",
    description:
      "Sukrithi Lohitha is an upcoming master-planned plotted layout in Anandapuram, one of the strategic multi-highway intersection nodes of Visakhapatnam. Featuring prime residential plots with world-class amenities.",
    features: [
      "Anandapuram Growth Node",
      "VMRDA Approved",
      "Wide BT Roads",
      "Underground Drainage",
      "24/7 Security",
      "Clear Title",
    ],
    amenities: [
      "Grand Entrance Arch",
      "40ft & 33ft BT Roads",
      "Landscaped Parks",
      "Overhead Water Tank",
      "Compound Wall with Gate",
    ],
    locationHighlights: [
      "Direct connectivity to 6-lane national highway",
      "Close to major educational hubs and healthcare zones",
      "High expected appreciation before airport commercialization",
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
  const found = allProjectsData.find(
    (p) =>
      p.slug === normalized ||
      p.slug.includes(normalized) ||
      normalized.includes(p.slug) ||
      p.name.toLowerCase() === slug.toLowerCase()
  );
  if (found) return found;
  // If not exact, try word match
  return allProjectsData.find((p) => {
    const pWords = p.name.toLowerCase().split(/\s+/);
    return pWords.some((w) => w.length > 4 && normalized.includes(w));
  });
}

export function getProjectByName(name: string): ProjectDetail | undefined {
  if (!name) return undefined;
  const clean = name.toLowerCase().trim();
  return allProjectsData.find(
    (p) =>
      p.name.toLowerCase().trim() === clean ||
      clean.includes(p.name.toLowerCase()) ||
      p.name.toLowerCase().includes(clean) ||
      p.slug === clean.replace(/[^a-z0-9]/g, "-")
  );
}

export const defaultProjectVideos: ProjectVideoItem[] = [
  {
    id: "U-PgRUHyDdc",
    title: "Official Venture Walkthrough & Layout Master Plan",
    duration: "4:15",
    tag: "Site Walkthrough",
    channel: "Subhagruha Official",
  },
  {
    id: "UFoHxmdnpww",
    title: "40ft BT Roads & Underground Infrastructure Progress",
    duration: "3:40",
    tag: "Development Progress",
    channel: "Subhagruha Vizag",
  },
  {
    id: "L4KVD9lQEgc",
    title: "Greenery, Avenue Trees & Children Park Amenities",
    duration: "5:20",
    tag: "Layout Amenities",
    channel: "Subhagruha Projects",
  },
  {
    id: "SbkkSLkE5do",
    title: "Customer Experiences & Investment Testimonials",
    duration: "4:05",
    tag: "Customer Reviews",
    channel: "Subhagruha Group",
  },
  {
    id: "gg4HHgffqJQ",
    title: "Bhogapuram International Airport Growth Corridor Video",
    duration: "6:10",
    tag: "Airport Corridor",
    channel: "Subhagruha Group",
  },
];

export function getProjectGallery(project: ProjectDetail): ProjectGalleryItem[] {
  if (project.gallery && project.gallery.length > 0) {
    return project.gallery;
  }

  return [
    {
      src: project.image,
      title: `${project.name} - Front Layout Visual`,
      category: "Venture View",
    },
    {
      src: "/subhagruha/gallery-subhagruha.png",
      title: `${project.name} - Official Layout Master Plan & Plot Blueprint`,
      category: "Master Plan",
    },
    {
      src: "/subhagruha/gallery-avanthika.png",
      title: "Grand Entrance Archway & 24/7 Security Gate",
      category: "Entrance Arch",
    },
    {
      src: "/subhagruha/gallery-srujana.png",
      title: "40-Foot Wide Blacktop Internal Roads & Curbing",
      category: "Internal Roads",
    },
    {
      src: "/subhagruha/gallery-saanvi.png",
      title: "Landscaped Children's Play Zone & Green Recreation",
      category: "Green Parks",
    },
    {
      src: "/layout-ground.jpg",
      title: "On-Site Clear Plot Demarcation & Boundary Stones",
      category: "Site Progress",
    },
    {
      src: "/subhagruha/gallery-maple.png",
      title: "Avenue Plantation & Overhead Water Tank Infrastructure",
      category: "Infrastructure",
    },
  ];
}

export function getProjectVideos(project: ProjectDetail): ProjectVideoItem[] {
  if (project.videos && project.videos.length > 0) {
    return project.videos;
  }
  return defaultProjectVideos;
}

