"use client";

import {
  ArrowRight,
  Award,
  Building2,
  Calendar,
  Check,
  ChevronRight,
  Compass,
  FileCheck,
  Filter,
  LandPlot,
  Mail,
  ExternalLink,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Play,
  Ruler,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  Video,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import EnquiryModal from "../EnquiryModal";
import FooterSocials from "../FooterSocials";
import { defaultProjectVideos, getProjectByName } from "../data/projectsData";

function WhatsAppIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.05 20.15ZM16.57 14.43C16.32 14.31 15.1 13.71 14.87 13.63C14.65 13.54 14.48 13.5 14.32 13.75C14.15 13.99 13.69 14.53 13.55 14.69C13.41 14.86 13.27 14.88 13.02 14.75C12.78 14.63 11.99 14.37 11.05 13.54C10.32 12.89 9.83 12.08 9.69 11.83C9.55 11.59 9.67 11.45 9.8 11.33C9.91 11.22 10.04 11.05 10.17 10.91C10.29 10.76 10.33 10.65 10.42 10.49C10.5 10.32 10.46 10.18 10.4 10.06C10.33 9.93 9.84 8.73 9.64 8.23C9.44 7.74 9.24 7.81 9.09 7.8C8.95 7.79 8.78 7.79 8.62 7.79C8.45 7.79 8.18 7.85 7.95 8.1C7.72 8.35 7.08 8.95 7.08 10.17C7.08 11.39 7.97 12.56 8.09 12.73C8.22 12.89 9.84 15.39 12.33 16.46C12.92 16.72 13.38 16.87 13.74 16.99C14.34 17.18 14.88 17.15 15.31 17.09C15.79 17.02 16.79 16.49 17 15.9C17.21 15.31 17.21 14.8 17.15 14.69C17.08 14.59 16.82 14.55 16.57 14.43Z" />
    </svg>
  );
}

interface Project {
  name: string;
  area: string;
  locationDetails: string;
  badge: string;
  approval: string;
  size: string;
  image: string;
  description: string;
  features: string[];
}

const allProjects: Project[] = [
  {
    name: "Sukrithi Nivas Phase 3",
    area: "Visakhapatnam",
    locationDetails: "Visakhapatnam Corridor, Andhra Pradesh",
    badge: "Open Plots",
    approval: "VMRDA Approved",
    size: "150 - 300 Sq. Yds",
    image: "/subhagruha/proj-sukrithi-nivas.jpg",
    description:
      "Sukrithi Nivas Phase 3 offers thoughtfully planned plots designed for homebuyers and long-term investors. Developed by Subhagruha Infra Projects, focused on quality infrastructure, seamless connectivity, and comfortable future living.",
    features: ["VMRDA Approved", "40ft BT Roads", "Underground Drainage", "Avenue Trees"],
  },
  {
    name: "Maple Meadows",
    area: "Modavalasa",
    locationDetails: "Modavalasa village, Bangar Raju Peta, Vizag",
    badge: "Premium Layout",
    approval: "Clear Title Layout",
    size: "3,200 Sq. Ft",
    image: "/subhagruha/proj-maple-meadows.jpg",
    description:
      "Maple Meadows by Subhagruha offers premium, well-developed residential plots in the rapidly growing corridor of Modavalasa. Grand arch entrance, tree-lined avenues, and a solid foundation for your high-return investment.",
    features: ["Grand Entrance Arch", "Tree-Lined Roads", "Green Landscaped Parks", "Electricity"],
  },
  {
    name: "Sukriti Sampath Phase 1 - 2",
    area: "Sontyam",
    locationDetails: "Sontyam Growth Corridor, Visakhapatnam",
    badge: "Open Plots",
    approval: "VUDA Approved",
    size: "Plots & Layout Units",
    image: "/subhagruha/proj-sukrithi-sampath.jpg",
    description:
      "Sukrithi Sampath Phase 1 & 2 offers premium plots for sale in Sontyam, Visakhapatnam, ideal for building your dream home or securing long-term high capital appreciation in a clean green landscape.",
    features: ["Immediate Registration", "Clear Titles", "Compound Wall", "Water Supply"],
  },
  {
    name: "Sukrithi Windsor",
    area: "Bheemannadorapalem",
    locationDetails: "Bheemannadorapalem, Vizag Region",
    badge: "For Sale",
    approval: "VMRDA Approved",
    size: "Premium Plotted Units",
    image: "/subhagruha/proj-sukrithi-windsor.jpg",
    description:
      "Sukrithi Windsor offers thoughtfully planned plots in Bheemannadorapalem, ideal for buyers looking for land in a fast-developing location with convenient national highway connectivity and high appreciation.",
    features: ["VMRDA Approved", "Fast Appreciation", "Clear Legal Title", "Street Lighting"],
  },
  {
    name: "Sukrithi Lohitha",
    area: "Anandapuram",
    locationDetails: "Anandapuram Highway Junction, Vizag",
    badge: "Highway Facing",
    approval: "DTCP / VMRDA",
    size: "167 - 250 Sq. Yds",
    image: "/subhagruha/proj-sukrithi-lohitha.jpg",
    description:
      "Sukrithi Lohitha offers premium plots for sale in Anandapuram, Vizag, with excellent connectivity to NH16, nearby educational institutes, and promising growth potential for future home builders.",
    features: ["Highway Connectivity", "24/7 Security", "Parks & Play Area", "Ready to Build"],
  },
  {
    name: "Sukrithi Saanvi Phase 4",
    area: "Bhogapuram",
    locationDetails: "Near Bhogapuram International Airport, AP",
    badge: "Airport Corridor",
    approval: "VUDA Approved",
    size: "200 - 400 Sq. Yds",
    image: "/subhagruha/proj-sukrithi-saanvi4.jpg",
    description:
      "Sukrithi Saanvi Phase 4 offers prime plots for sale in Bhogapuram, strategically situated in the mega international airport growth zone. Excellent prospective ROI and rapid infrastructure appreciation.",
    features: ["Airport Vicinity", "Blacktop Roads", "Water Tap to Each Plot", "100% Vaastu"],
  },
  {
    name: "Sukruthi Ananthika",
    area: "Visakhapatnam",
    locationDetails: "Srikakulam Highway, Visakhapatnam",
    badge: "Upcoming Venture",
    approval: "VMRDA Approved",
    size: "12,000 Sq. Ft Layout",
    image: "/subhagruha/sukruthi-ananthika.jpg",
    description:
      "Highway facing gated plotted community featuring grand entrance arch, wide internal roads, children's park, and comprehensive power and water infrastructure.",
    features: ["Highway Facing", "Gated Community", "Children Play Area", "Avenue Plantation"],
  },
  {
    name: "Sukrithi Aawas",
    area: "Visakhapatnam",
    locationDetails: "Prime Visakhapatnam Residential Corridor",
    badge: "Ready for Registration",
    approval: "Clear Title Layout",
    size: "3 Cent / Layout Plots",
    image: "/subhagruha/sukrithi-aawas.jpg",
    description:
      "Prime residential plots offering immediate registration, transparent legal documentation, and essential amenities supporting comfortable modern residential construction.",
    features: ["Immediate Registration", "Clear Title", "3 Cent Units", "Bank Loan Eligible"],
  },
  {
    name: "Sukeerthi Sadan Phase 2",
    area: "Kothavalasa",
    locationDetails: "Kothavalasa Junction, Vizag",
    badge: "For Sale",
    approval: "VMRDA Approved",
    size: "12,345 Sq. Ft Layout",
    image: "/subhagruha/sukeerthi-sadan-phase-2.jpeg",
    description:
      "Well-planned plotted development located in the peaceful growth hub of Kothavalasa, with easy access to railways, schools, and connecting national arteries.",
    features: ["Near Railway Station", "Clear Titles", "40ft Internal Roads", "Security Guard"],
  },
  {
    name: "Subhagruha Sukrithi Saanvi Phase-3",
    area: "Tagarapuvalasa",
    locationDetails: "Tagarapuvalasa, Vizag Corridor",
    badge: "Prime Location",
    approval: "VMRDA Approved",
    size: "2,000 Sq. Ft Plots",
    image: "/subhagruha/gallery-saanvi.png",
    description:
      "High-potential gated plotted community along the Tagarapuvalasa corridor, designed with top-tier infrastructure for families who value quality and security.",
    features: ["Tagarapuvalasa Corridor", "VMRDA Approved", "Underground Drainage", "Park Facing"],
  },
  {
    name: "Sukrithi Sathvik",
    area: "Gantlam",
    locationDetails: "Gantlam, Vizianagaram Highway Corridor",
    badge: "For Sale",
    approval: "Approved Layout",
    size: "1,200 Sq. Ft",
    image: "/subhagruha/sukrithi-sathvik.png",
    description:
      "Gated community with avenue trees, overhead water storage, and wide road access connecting seamlessly to Visakhapatnam and Vizianagaram city centers.",
    features: ["Compound Wall", "Gated Security", "Overhead Water Tank", "Avenue Trees"],
  },
  {
    name: "Sukrithi Springs",
    area: "Visakhapatnam",
    locationDetails: "Scenic Valley Corridor, Visakhapatnam",
    badge: "Eco Venture",
    approval: "Clear Title Layout",
    size: "200 - 500 Sq. Yds",
    image: "/subhagruha/sukrithi-springs.jpg",
    description:
      "Serene plotted development nestled against green landscapes, perfect for peaceful residential living with fresh breeze and lush green avenue plantations.",
    features: ["Green Surroundings", "Clear Title", "Electrification", "Immediate Possession"],
  },
];

const filterCategories = [
  "All",
  "Anandapuram",
  "Bheemannadorapalem",
  "Bhogapuram",
  "Modavalasa",
  "Sontyam",
  "Tagarapuvalasa",
  "Visakhapatnam",
  "Kothavalasa",
];

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const currentVideo = defaultProjectVideos[activeVideoIndex] || defaultProjectVideos[0];

  const mainNavLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about-us" },
    { label: "Projects", href: "/projects", active: true },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const filteredProjects = allProjects.filter((proj) => {
    const matchesFilter = selectedFilter === "All" || proj.area.toLowerCase() === selectedFilter.toLowerCase();
    const matchesSearch =
      searchQuery === "" ||
      proj.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.locationDetails.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Enquiry Now / Request a Quote Modal Popup */}
      <EnquiryModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[74px] max-w-[1400px] items-center justify-between px-5 lg:px-10">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="VizagPlots" width={145} height={78} className="h-[58px] w-auto object-contain" priority />
          </Link>

          {/* Main Navigation (ONLY Home, About, Projects, Blog, Contact) */}
          <nav className="hidden items-center gap-7 2xl:gap-9 xl:flex h-[74px]">
            {mainNavLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`relative flex h-full items-center px-1 text-[15px] lg:text-[16px] tracking-wide transition-colors ${
                  item.active
                    ? "font-extrabold text-[var(--green-950)]"
                    : "font-semibold text-slate-700 hover:text-[var(--green-800)]"
                }`}
              >
                <span>{item.label}</span>
                {item.active && (
                  <span className="absolute bottom-0 left-0 right-0 h-[3.5px] rounded-t-full bg-[#8dbb16] shadow-sm" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3.5 xl:flex">
            <a
              href="tel:+919052867067"
              className="flex items-center gap-1.5 text-xs font-bold text-slate-700 transition hover:text-[var(--green-800)]"
            >
              <Phone size={14} className="text-[var(--green-700)]" />
              <span>(+91) 9052867067</span>
            </a>

            {/* Search / Enquiry Icon Button */}
            <button
              type="button"
              onClick={() => setIsQuoteModalOpen(true)}
              aria-label="Search & Request a Quote"
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-medium text-slate-600 transition hover:border-[var(--green-700)] hover:bg-white hover:text-[var(--green-800)] shadow-sm cursor-pointer"
            >
              <Search size={14} className="text-[var(--green-700)]" />
              <span className="hidden 2xl:inline text-[11px] text-slate-400">Search projects...</span>
            </button>

            {/* Request a Quote Button */}
            <button
              type="button"
              onClick={() => setIsQuoteModalOpen(true)}
              className="rounded-full bg-[var(--green-700)] px-5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-[var(--green-900)] cursor-pointer"
            >
              Request a Quote
            </button>
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <button
              type="button"
              onClick={() => setIsQuoteModalOpen(true)}
              aria-label="Open Request a Quote modal"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50"
            >
              <Search size={18} className="text-[var(--green-700)]" />
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-6 py-5 xl:hidden shadow-lg">
            <div className="flex flex-col gap-2">
              {mainNavLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between py-2.5 text-[16px] transition border-b ${
                    item.active
                      ? "font-extrabold text-[var(--green-950)] border-[#8dbb16]"
                      : "font-semibold text-slate-700 border-slate-100 hover:text-[var(--green-800)]"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.active && (
                    <span className="rounded-full bg-lime-100 px-2.5 py-0.5 text-[11px] font-bold text-[var(--green-800)]">
                      Current
                    </span>
                  )}
                </Link>
              ))}
              <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    setIsQuoteModalOpen(true);
                  }}
                  className="flex items-center justify-center gap-2 rounded-full bg-[var(--green-800)] py-2.5 text-xs font-bold text-white shadow-sm"
                >
                  <Search size={14} />
                  <span>Request a Quote</span>
                </button>
                <a
                  href="tel:+919052867067"
                  className="flex items-center justify-center gap-2 rounded-full border border-slate-200 py-2.5 text-xs font-bold text-slate-800 shadow-sm"
                >
                  <Phone size={14} className="text-[var(--green-700)]" />
                  <span>Call (+91) 9052867067</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Banner */}
      <section className="relative min-h-[460px] sm:min-h-[500px] flex items-center overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/subhagruha/projects-hero.jpg"
            alt="Subhagruha residential plotted layout portfolio"
            fill
            priority
            quality={100}
            unoptimized
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-y-0 left-0 w-full lg:w-[65%] bg-gradient-to-r from-black/95 via-black/85 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 py-20 lg:px-10">
          <div className="max-w-[780px]">
            {/* Breadcrumb */}
            <nav className="mb-4 flex items-center gap-2 text-xs font-bold tracking-wider text-white/70">
              <Link href="/" className="hover:text-lime-300 transition">HOME</Link>
              <ChevronRight size={13} className="text-lime-400" />
              <span className="text-lime-300">OUR PROJECTS</span>
            </nav>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0b241b] border border-lime-400/50 px-3.5 py-1 text-xs font-black tracking-wider text-lime-300 shadow-md">
              <Building2 size={14} className="text-lime-300" />
              PORTFOLIO OF PLANNED LAYOUTS
            </span>

            <h1 className="display-font mt-4 text-3xl font-black sm:text-5xl lg:text-[3.25rem] leading-[1.12] text-white">
              Planned Layouts Across{" "}
              <span className="text-lime-300">Visakhapatnam Corridors</span>
            </h1>

            <p className="mt-5 max-w-xl text-sm sm:text-base leading-7 text-white/90 font-medium">
              Fifteen residential plot developments across the city’s fastest-growing corridors — each built on the same standard of legal approval, transparent dealing, and organised infrastructure.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#filter-section"
                className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3.5 text-xs sm:text-sm font-extrabold text-[var(--green-950)] shadow-lg transition hover:bg-lime-300 hover:scale-105"
              >
                <span>Browse Layouts</span>
                <ArrowRight size={16} />
              </a>
              <a
                href="https://wa.me/919052867067?text=Hi%2C%20I%20would%20like%20to%20get%20price%20sheet%20for%20all%20Subhagruha%20projects."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#0b241b] border border-white/40 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg transition hover:bg-[#123b2a]"
              >
                <WhatsAppIcon className="h-4 w-4 fill-[#25D366]" />
                <span>Get Complete Price Sheet</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section id="filter-section" className="sticky top-[74px] z-30 border-b border-slate-200 bg-white/95 backdrop-blur py-4 shadow-sm">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Corridor Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-1 lg:pb-0">
              {filterCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition-all whitespace-nowrap ${
                    selectedFilter === cat
                      ? "bg-[var(--green-800)] text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Live Search */}
            <div className="relative w-full lg:w-72">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search venture or location..."
                className="w-full rounded-full border border-slate-200 bg-slate-50 py-2 pl-9 pr-4 text-xs font-medium outline-none transition focus:border-[var(--green-700)] focus:bg-white focus:ring-1 focus:ring-[var(--green-700)]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          {/* Header count indicator */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs font-bold tracking-wider uppercase text-[var(--green-800)]">
                Showing {filteredProjects.length} of {allProjects.length} Developments
              </p>
              <h2 className="display-font mt-1 text-2xl sm:text-3xl font-black text-[var(--green-950)]">
                {selectedFilter === "All" ? "All Ventures in Vizag" : `Ventures in ${selectedFilter}`}
              </h2>
            </div>

            {selectedFilter !== "All" && (
              <button
                onClick={() => setSelectedFilter("All")}
                className="text-xs font-bold text-[var(--green-700)] hover:underline"
              >
                Clear Filter ✕
              </button>
            )}
          </div>

          {filteredProjects.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center">
              <Building2 className="mx-auto h-12 w-12 text-slate-300" />
              <h3 className="mt-4 text-lg font-bold text-slate-700">No ventures found matching your search</h3>
              <p className="mt-1 text-xs text-slate-500">Try adjusting your corridor filter or search query</p>
              <button
                onClick={() => {
                  setSelectedFilter("All");
                  setSearchQuery("");
                }}
                className="mt-5 rounded-full bg-[var(--green-800)] px-5 py-2 text-xs font-bold text-white"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredProjects.map((project) => (
                <article
                  key={project.name}
                  className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[var(--green-700)]/40"
                >
                  <div>
                    {/* Image Media Header */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                      <Image
                        src={project.image}
                        alt={`${project.name} in ${project.area}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                      {/* Top Badges */}
                      <span className="absolute left-3.5 top-3.5 rounded-full bg-[#0b241b]/95 backdrop-blur-sm px-3 py-1 text-[11px] font-black text-lime-300 border border-lime-400/40 shadow-sm">
                        {project.badge}
                      </span>
                      <span className="absolute right-3.5 top-3.5 rounded-full bg-black/60 backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-semibold text-white/95">
                        {project.approval}
                      </span>

                      {/* Bottom Image Overlay Details */}
                      <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white">
                        <div className="flex items-center gap-1.5 text-xs font-bold drop-shadow">
                          <MapPin size={13} className="text-lime-300 shrink-0" />
                          <span>{project.area}</span>
                        </div>
                        <span className="rounded bg-white/20 backdrop-blur-sm px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide">
                          {project.size}
                        </span>
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-6">
                      <h3 className="display-font text-xl font-bold text-[var(--green-950)] group-hover:text-[var(--green-800)] transition">
                        {project.name}
                      </h3>
                      <p className="mt-1 text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                        <MapPin size={12} className="shrink-0" />
                        <span>{project.locationDetails}</span>
                      </p>

                      <p className="mt-3.5 text-xs leading-relaxed text-slate-600 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Key Project Tags */}
                      <div className="mt-4 flex flex-wrap gap-1.5 border-t border-slate-100 pt-4">
                        {project.features.map((feat) => (
                          <span
                            key={feat}
                            className="inline-flex items-center gap-1 rounded-md bg-[var(--soft)] px-2.5 py-1 text-[11px] font-semibold text-slate-700 border border-slate-200/70"
                          >
                            <Check size={11} className="text-[var(--green-700)] stroke-[3]" />
                            <span>{feat}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="border-t border-slate-100 p-4 bg-slate-50/60 flex items-center gap-2">
                    <Link
                      href={`/projects/${getProjectByName(project.name)?.slug || "sukrithi-aawas"}`}
                      className="flex-1 flex items-center justify-center gap-1.5 rounded-full bg-[var(--green-800)] px-3.5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-[var(--green-950)] hover:scale-[1.01] active:scale-95"
                    >
                      <span>View Details</span>
                      <ArrowRight size={13} />
                    </Link>
                    <a
                      href={`https://wa.me/919052867067?text=${encodeURIComponent(
                        `Hi, I am interested in layout "${project.name}" in ${project.area}. Please share pricing and plot availability.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1 rounded-full border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-800 transition hover:bg-slate-100"
                    >
                      <WhatsAppIcon className="h-3.5 w-3.5 fill-[#25D366]" />
                      <span className="hidden sm:inline">WhatsApp</span>
                    </a>
                    <a
                      href="tel:+919052867067"
                      aria-label={`Call about ${project.name}`}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition hover:bg-slate-100 hover:text-[var(--green-800)]"
                    >
                      <Phone size={13} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Official Venture Video Walkthrough Section */}
      <section className="border-t border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-red-700 border border-red-200">
                <Video size={13} className="text-red-600" />
                VERIFIED GOOGLE & YOUTUBE SITE TOURS
              </span>
              <h2 className="display-font mt-2 text-2xl sm:text-3xl lg:text-4xl font-black text-[var(--green-950)]">
                Venture Site Walkthrough <span className="text-[#8dbb16]">Videos</span>
              </h2>
              <p className="mt-2 max-w-2xl text-xs sm:text-sm text-slate-500">
                Preview genuine on-ground development, 40-ft blacktop roads, landscaped parks, and drone views across Visakhapatnam ventures before visiting.
              </p>
            </div>

            <a
              href="https://www.youtube.com/@SubhagruhaGroup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 self-start sm:self-end text-xs font-bold text-[var(--green-800)] hover:text-[var(--green-950)] transition"
            >
              <span>Watch on YouTube</span>
              <ExternalLink size={13} />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Main Player */}
            <div className="lg:col-span-8 overflow-hidden rounded-3xl bg-slate-950 shadow-xl border border-slate-200/90">
              <div className="relative aspect-[16/9] w-full">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${currentVideo.id}?autoplay=0&rel=0&modestbranding=1`}
                  title={currentVideo.title}
                  className="h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#0b241b] p-5 text-white">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-lime-400/20 px-2.5 py-0.5 text-[10.5px] font-black uppercase tracking-wider text-lime-300 border border-lime-400/30">
                      {currentVideo.tag}
                    </span>
                    <span className="text-[11px] text-white/60">
                      Duration: {currentVideo.duration}
                    </span>
                  </div>
                  <h3 className="mt-1.5 text-base sm:text-lg font-bold text-white leading-snug">
                    {currentVideo.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="rounded-full bg-lime-400 px-4 py-2 text-xs font-extrabold text-[var(--green-950)] shadow transition hover:bg-lime-300 cursor-pointer whitespace-nowrap self-start sm:self-center"
                >
                  Book Free Site Visit
                </button>
              </div>
            </div>

            {/* Video List Selector */}
            <div className="lg:col-span-4 space-y-3">
              <p className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Play size={12} className="text-[var(--green-700)]" />
                Select Video Tour ({defaultProjectVideos.length})
              </p>

              {defaultProjectVideos.map((vid, idx) => {
                const isSelected = idx === activeVideoIndex;
                return (
                  <button
                    key={vid.id + idx}
                    type="button"
                    onClick={() => setActiveVideoIndex(idx)}
                    className={`w-full flex items-start gap-3 rounded-2xl p-3 text-left transition-all cursor-pointer border ${
                      isSelected
                        ? "border-[var(--green-700)] bg-[var(--green-700)]/5 ring-2 ring-[var(--green-700)]/20 shadow-sm"
                        : "border-slate-200/90 bg-slate-50/70 hover:bg-white hover:border-slate-300"
                    }`}
                  >
                    <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-xl bg-slate-900">
                      <img
                        src={`https://img.youtube.com/vi/${vid.id}/hqdefault.jpg`}
                        alt={vid.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div
                          className={`flex h-6 w-6 items-center justify-center rounded-full ${
                            isSelected ? "bg-lime-400 text-slate-900" : "bg-white/90 text-slate-900"
                          } shadow-sm`}
                        >
                          <Play size={10} className="ml-0.5 fill-current" />
                        </div>
                      </div>
                      <span className="absolute bottom-1 right-1 rounded bg-black/80 px-1 text-[9px] font-bold text-white">
                        {vid.duration}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[var(--green-700)]">
                        {vid.tag}
                      </span>
                      <h4 className="text-xs font-bold text-slate-800 line-clamp-2 leading-snug mt-0.5">
                        {vid.title}
                      </h4>
                      <p className="mt-1 text-[10.5px] text-slate-400">
                        {vid.channel}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Site Visit Assistance Band */}
      <section className="bg-gradient-to-r from-[var(--green-950)] via-[var(--green-900)] to-[#0c2e1f] py-16 text-white text-center">
        <div className="mx-auto max-w-3xl px-6">
          <span className="inline-block rounded-full bg-lime-400/20 border border-lime-400/30 px-3.5 py-1 text-xs font-extrabold tracking-wider text-lime-300">
            FREE GUIDED VISITS
          </span>
          <h2 className="display-font mt-4 text-3xl font-black sm:text-4xl text-white">
            Schedule a Free Guided <span className="text-lime-300">Site Visit</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
            Our property advisors provide complete on-ground site assistance, transport, document verification, and personalized guidance across all corridors in Visakhapatnam.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+919052867067"
              className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-7 py-3.5 text-xs sm:text-sm font-extrabold text-[var(--green-950)] shadow-lg transition hover:bg-lime-300 hover:scale-105"
            >
              <Phone size={15} />
              <span>Call (+91) 9052867067</span>
            </a>
            <a
              href="https://wa.me/919052867067?text=Hi%2C%20I%20would%20like%20to%20book%20a%20guided%20site%20visit."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-xs sm:text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
            >
              <WhatsAppIcon className="h-4 w-4 fill-[#25D366]" />
              <span>Book Site Visit on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--green-950)] py-14 text-white border-t border-white/10">
        <div className="mx-auto max-w-[1260px] px-6 lg:px-10">
          <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
            <div>
              <Image src="/logo.png" alt="VizagPlots" width={145} height={78} className="h-16 w-auto rounded bg-white p-1 object-contain" />
              <p className="mt-5 max-w-sm text-xs leading-6 text-white/55">
                Subhagruha Projects (India) Pvt Ltd — a trusted real estate developer delivering legally approved, premium residential plotted layouts across Visakhapatnam.
              </p>
              <div className="mt-5 flex flex-col gap-2.5 text-xs text-white/70">
                <a href="tel:+919052867067" className="hover:text-lime-300 transition flex items-center gap-2">
                  <Phone size={14} className="text-lime-400" />
                  <span>(+91) 9052867067</span>
                </a>
                <a href="mailto:janishaik9@gmail.com" className="hover:text-lime-300 transition flex items-center gap-2">
                  <Mail size={14} className="text-lime-400" />
                  <span>janishaik9@gmail.com</span>
                </a>
                <p className="text-white/60 text-[11px] leading-relaxed flex items-start gap-2 mt-1">
                  <MapPin size={14} className="text-lime-400 shrink-0 mt-0.5" />
                  <span>50-50-33/2, J R Plaza, Gurudwara Junction, Visakhapatnam, AP 530013</span>
                </p>
              </div>
              <div className="mt-5">
                <FooterSocials />
              </div>
            </div>

            <div>
              <p className="text-xs font-extrabold uppercase tracking-[.2em] text-lime-300">Quick Links</p>
              <div className="mt-5 grid gap-3 text-xs text-white/65">
                <Link href="/" className="hover:text-white transition">Home</Link>
                <Link href="/about-us" className="hover:text-white transition">About</Link>
                <Link href="/projects" className="hover:text-white transition font-bold text-lime-300">Projects</Link>
                <Link href="/blog" className="hover:text-white transition">Blog</Link>
                <Link href="/contact" className="hover:text-white transition">Contact</Link>
              </div>
            </div>

            <div>
              <p className="text-xs font-extrabold uppercase tracking-[.2em] text-lime-300">Connect</p>
              <div className="mt-5 grid gap-3 text-xs text-white/65">
                <Link href="/contact" className="hover:text-white transition">Contact Office</Link>
                <a href="https://wa.me/919052867067" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">WhatsApp: (+91) 9052867067</a>
                <a href="tel:+919052867067" className="hover:text-white transition">Call: (+91) 9052867067</a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-[10px] text-white/40 sm:flex-row">
            <span>© 2026 Subhagruha Projects (India) Pvt Ltd / VizagPlots. All rights reserved.</span>
            <span>Privacy Policy · Terms & Conditions</span>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Quick Action */}
      <a
        href="https://wa.me/919052867067?text=Hi%2C%20I%20am%20interested%20in%20learning%20more%20about%20Subhagruha%20ventures."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110 active:scale-95 group"
      >
        <WhatsAppIcon className="h-7 w-7 fill-white" />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us on WhatsApp
        </span>
      </a>
    </main>
  );
}
