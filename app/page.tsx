 "use client";

import {
  ArrowDownRight,
  ArrowRight,
  Award,
  Building2,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  Compass,
  Construction,
  CreditCard,
  FileText,
  HardHat,
  Headphones,
  Home,
  IndianRupee,
  KeyRound,
  LandPlot,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Pause,
  PencilRuler,
  Phone,
  Play,
  Quote,
  Ruler,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Video,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import EnquiryModal from "./EnquiryModal";
import FooterSocials from "./FooterSocials";

function WhatsAppIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.05 20.15ZM16.57 14.43C16.32 14.31 15.1 13.71 14.87 13.63C14.65 13.54 14.48 13.5 14.32 13.75C14.15 13.99 13.69 14.53 13.55 14.69C13.41 14.86 13.27 14.88 13.02 14.75C12.78 14.63 11.99 14.37 11.05 13.54C10.32 12.89 9.83 12.08 9.69 11.83C9.55 11.59 9.67 11.45 9.8 11.33C9.91 11.22 10.04 11.05 10.17 10.91C10.29 10.76 10.33 10.65 10.42 10.49C10.5 10.32 10.46 10.18 10.4 10.06C10.33 9.93 9.84 8.73 9.64 8.23C9.44 7.74 9.24 7.81 9.09 7.8C8.95 7.79 8.78 7.79 8.62 7.79C8.45 7.79 8.18 7.85 7.95 8.1C7.72 8.35 7.08 8.95 7.08 10.17C7.08 11.39 7.97 12.56 8.09 12.73C8.22 12.89 9.84 15.39 12.33 16.46C12.92 16.72 13.38 16.87 13.74 16.99C14.34 17.18 14.88 17.15 15.31 17.09C15.79 17.02 16.79 16.49 17 15.9C17.21 15.31 17.21 14.8 17.15 14.69C17.08 14.59 16.82 14.55 16.57 14.43Z" />
    </svg>
  );
}

function OfficialStampBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`animate-stamp-in group relative flex items-center justify-center select-none ${className}`}
    >
      {/* Outer subtle glow */}
      <div className="absolute inset-0 rounded-full bg-lime-400/25 blur-md animate-pulse" />

      {/* Main Stamp Container with rubber-stamp angled aesthetic */}
      <div className="relative flex h-[106px] w-[106px] sm:h-[122px] sm:w-[122px] items-center justify-center rounded-full border-2 border-dashed border-lime-400 bg-slate-950/85 p-1 shadow-[0_0_22px_rgba(163,230,53,0.45)] backdrop-blur-md">
        {/* Inner double border ring */}
        <div className="absolute inset-1 rounded-full border border-lime-400/40" />

        {/* Rotating Circular Text Ring */}
        <svg
          viewBox="0 0 120 120"
          className="absolute inset-0 h-full w-full animate-[spin_18s_linear_infinite]"
        >
          <path
            id="stampPath"
            d="M 60,60 m -42,0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
            fill="none"
          />
          <text className="fill-lime-300 font-black uppercase text-[8px] tracking-[2.4px]">
            <textPath href="#stampPath" startOffset="0%">
              ★ VUDA &amp; VMRDA APPROVED ★ 20+ YEARS ★
            </textPath>
          </text>
        </svg>

        {/* Center Emblem with Official Shield & 20+ Years */}
        <div className="relative flex flex-col items-center justify-center text-center">
          <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-lime-400 text-slate-950 shadow-sm">
            <ShieldCheck size={14} className="stroke-[2.5]" />
          </div>
          <span className="mt-0.5 font-black text-xs sm:text-sm tracking-tight text-white leading-none">
            20+ <span className="text-lime-300">YRS</span>
          </span>
          <span className="text-[6.5px] sm:text-[7.5px] font-extrabold uppercase tracking-widest text-lime-400/90 leading-tight">
            APPROVED
          </span>
        </div>
      </div>
    </div>
  );
}

const heroSlides = [
  {
    type: "image" as const,
    image: "/hero-banner-1.jpg",
    alt: "Subhagruha Coastal Horizon Plotted Layout in Visakhapatnam",
    label: "Banner 1",
  },
  {
    type: "image" as const,
    image: "/hero-banner-2.jpg",
    alt: "Subhagruha Gated Plotted Community in Visakhapatnam",
    label: "Banner 2",
  },
  {
    type: "video" as const,
    video: "/hero-amenities-clip.mp4",
    poster: "/hero-banner-1.jpg",
    alt: "Subhagruha Greenery, Avenue Trees & Children Park Amenities Video Walkthrough",
    label: "Layout Amenities Video",
  },
];

const plots = [
  {
    title: "Sukrithi Aawas",
    slug: "sukrithi-aawas",
    location: "Visakhapatnam, Andhra Pradesh",
    size: "3 Cent / Layout Plots",
    tags: ["Clear Title", "Immediate Registration", "Avenue Plantation"],
    image: "/subhagruha/sukrithi-aawas.jpg",
    badge: "Ready to Register",
  },
  {
    title: "Sukruthi Ananthika",
    slug: "sukruthi-ananthika",
    location: "Srikakulam Highway, Visakhapatnam",
    size: "12,000 Sq.Ft Layout",
    tags: ["Highway Facing", "Gated Community", "Children Play Area"],
    image: "/subhagruha/sukruthi-ananthika.jpg",
    badge: "Upcoming Venture",
  },
  {
    title: "Sukrithi Windsor",
    slug: "sukrithi-windsor",
    location: "Bheemannadorapalem, Vizag",
    size: "Premium Residential Plots",
    tags: ["VMRDA Approved", "Fast Appreciation", "Clear Legal Title"],
    image: "/subhagruha/sukrithi-windsor.jpg",
    badge: "For Sale",
  },
  {
    title: "Sukrithi Sathvik",
    slug: "sukrithi-sathvik",
    location: "Gantlam, Vizianagaram Highway",
    size: "1,200 Sq. Ft Plots",
    tags: ["Gated Security", "Overhead Water Tank", "Avenue Trees"],
    image: "/subhagruha/sukrithi-sathvik.png",
    badge: "For Sale",
  },
];

const upcomingVentures = [
  {
    name: "Sukruthi Ananthika",
    slug: "sukruthi-ananthika",
    location: "Srikakulam highway, Visakhapatnam",
    size: "12,000 Sq.Ft",
    facing: "West Facing",
    highlights: ["Highway Facing", "Gated Community", "Children Play Area"],
    image: "/subhagruha/sukruthi-ananthika.jpg",
  },
  {
    name: "Maple Meadows",
    slug: "maple-meadows",
    location: "Modavalasa village, Bangar Raju Peta, Visakhapatnam",
    size: "3,200 Sq. Ft",
    facing: "South Facing",
    highlights: ["Grand Arch Entrance", "Tree-Lined Roads", "Green Parks"],
    image: "/subhagruha/gallery-maple.png",
  },
  {
    name: "Sukrithi Aawas",
    slug: "sukrithi-aawas",
    location: "Visakhapatnam, Andhra Pradesh",
    size: "3 Cent / Layout Plots",
    facing: "North Facing",
    highlights: ["Clear Title", "Immediate Registration", "Avenue Plantation"],
    image: "/subhagruha/sukrithi-aawas.jpg",
  },
];

const recentProjects = [
  {
    name: "Sukrithi Windsor",
    slug: "sukrithi-windsor",
    location: "Bheemannadorapalem, Vizag",
    size: "Premium Plots",
    facing: "East Facing",
    type: "Residential Plot",
    status: "Sale",
    image: "/subhagruha/sukrithi-windsor.jpg",
  },
  {
    name: "Sukrithi Aawas",
    slug: "sukrithi-aawas",
    location: "Visakhapatnam, Andhra Pradesh",
    size: "3 Cent / Plots",
    facing: "North Facing",
    type: "Residential Plot",
    status: "Sale",
    image: "/subhagruha/sukrithi-aawas.jpg",
  },
  {
    name: "Sukeerthi Sadan Phase 2",
    slug: "sukeerthi-sadan-phase-2",
    location: "Kothavalasa, Vizag",
    size: "12,345 Sq.Ft",
    facing: "East Facing",
    type: "Residential Plot",
    status: "Sale",
    image: "/subhagruha/sukeerthi-sadan-phase-2.jpeg",
  },
  {
    name: "Sukeerthi Sadan Phase 1",
    slug: "sukeerthi-sadan-phase-1",
    location: "Kothavalasa, Vizag",
    size: "23,456 Sq.Ft",
    facing: "South Facing",
    type: "Residential Plot",
    status: "Sale",
    image: "/subhagruha/sukeerthi-sadan-phase-1.png",
  },
  {
    name: "Sukrithi Springs",
    slug: "sukrithi-springs",
    location: "Visakhapatnam, Andhra Pradesh",
    size: "200 Sq.Yards",
    facing: "East Facing",
    type: "Residential Plot",
    status: "Sale",
    image: "/subhagruha/sukrithi-springs.jpg",
  },
  {
    name: "Maple Meadows",
    slug: "maple-meadows",
    location: "Modavalasa village, Vizag",
    size: "3,200 Sq. Ft",
    facing: "South Facing",
    type: "Residential Plot",
    status: "Sale",
    image: "/subhagruha/maple-meadows.png",
  },
  {
    name: "Sukruthi Ananthika",
    slug: "sukruthi-ananthika",
    location: "Visakhapatnam, Andhra Pradesh",
    size: "12,000 Sq.Ft",
    facing: "West Facing",
    type: "Residential Plot",
    status: "Sale",
    image: "/subhagruha/sukruthi-ananthika.jpg",
  },
  {
    name: "Subhagruha Sukrithi Saanvi Phase-3",
    slug: "subhagruha-sukrithi-saanvi-phase-3",
    location: "Tagarapuvalasa, Vizag",
    size: "2,000 Sq. Ft",
    facing: "North Facing",
    type: "Residential Plot",
    status: "Sale",
    image: "/subhagruha/gallery-saanvi.png",
  },
  {
    name: "Sukrithi Sathvik",
    slug: "sukrithi-sathvik",
    location: "Gantlam, Vizianagaram",
    size: "1,200 Sq.ft",
    facing: "South Facing",
    type: "Residential Plot",
    status: "Sale",
    image: "/subhagruha/sukrithi-sathvik.png",
  },
];


const processSteps = [
  {
    num: "1",
    title: "1. Plot Selection",
    desc: "Find the perfect location",
    icon: LandPlot,
  },
  {
    num: "2",
    title: "2. Planning",
    desc: "Feasibility & approvals",
    icon: FileText,
  },
  {
    num: "3",
    title: "3. Design",
    desc: "Build your vision",
    icon: PencilRuler,
  },
  {
    num: "4",
    title: "4. Construction",
    desc: "Quality materials & skilled team",
    icon: HardHat,
  },
  {
    num: "5",
    title: "5. Quality Check",
    desc: "Safety & standards",
    icon: ShieldCheck,
  },
  {
    num: "6",
    title: "6. Handover",
    desc: "Your dream home is ready",
    icon: KeyRound,
  },
];

const companyStats = [
  {
    num: "20",
    suffix: "+",
    label: "Total Years of Experience",
    icon: Award,
  },
  {
    num: "158",
    suffix: "M+",
    label: "Million Sq. Ft. Development",
    icon: Building2,
  },
  {
    num: "12",
    suffix: "K+",
    label: "Happy Families & Homes",
    icon: Users,
  },
  {
    num: "100",
    suffix: "+",
    label: "Landmarks Nearby",
    icon: MapPin,
  },
];

const whyChooseItems = [
  {
    num: "01",
    title: "20+ Years of Experience",
    desc: "Years of trusted presence in Visakhapatnam, backed by consistent development and timely project delivery.",
    icon: Award,
  },
  {
    num: "02",
    title: "RERA & VMRDA Compliant",
    desc: "Well-planned layouts backed by relevant approvals and verified property titles, wherever documented.",
    icon: ShieldCheck,
  },
  {
    num: "03",
    title: "Prime, Growing Locations",
    desc: "Strategically located across Vizag’s key growth corridors — Tagarapuvalasa, Anandapuram, Sontyam and beyond.",
    icon: MapPin,
  },
  {
    num: "04",
    title: "Transparent Dealings",
    desc: "Clear pricing, transparent documentation and open communication from enquiry to registration.",
    icon: CircleCheck,
  },
  {
    num: "05",
    title: "Flexible Payment Plans",
    desc: "Flexible installment plans designed to make land investment easier and more accessible.",
    icon: CreditCard,
  },
  {
    num: "06",
    title: "End-to-End Support",
    desc: "Complete support with legal documentation, loan paperwork and registration for local, NRI and out-of-state buyers.",
    icon: Headphones,
  },
];

const testimonials = [
  {
    name: "Santosh",
    role: "Led Business",
    review: "Subhagruha group is the best place to invest in real estate. I had bought a plot in Sukrithi Avanthika venture.",
    venture: "Sukrithi Avanthika",
    rating: 5,
    initials: "S",
  },
  {
    name: "Abhishek",
    role: "Business man",
    review: "They have got all of the approvals for the venture which I bought a plot venture near to Vizianagaram.",
    venture: "Vizianagaram Venture",
    rating: 5,
    initials: "A",
  },
  {
    name: "Vimala",
    role: "Software Engineer",
    review: "Best Best Company in the City. Excellent Layout, Excellent Venture Developments, Excellent Location.",
    venture: "Visakhapatnam Corridor",
    rating: 5,
    initials: "V",
  },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  // Auto-play slider: 6s for images, 14s for video (full 0:36-0:50 clip)
  useEffect(() => {
    const delay = currentSlide === 2 ? 14000 : 6000;
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, delay);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  // Ensure local video plays from start whenever slide 2 becomes active
  useEffect(() => {
    if (currentSlide === 2 && heroVideoRef.current) {
      heroVideoRef.current.currentTime = 0;
      heroVideoRef.current.play().catch(() => {});
      setIsVideoPlaying(true);
    }
  }, [currentSlide]);

  const toggleVideoMute = () => {
    if (heroVideoRef.current) {
      heroVideoRef.current.muted = !heroVideoRef.current.muted;
      setIsVideoMuted(heroVideoRef.current.muted);
    }
  };

  const toggleVideoPlayback = () => {
    if (heroVideoRef.current) {
      if (heroVideoRef.current.paused) {
        heroVideoRef.current.play();
        setIsVideoPlaying(true);
      } else {
        heroVideoRef.current.pause();
        setIsVideoPlaying(false);
      }
    }
  };

  const mainNavLinks = [
    { label: "Home", href: "/", active: true },
    { label: "About", href: "/about-us", active: false },
    { label: "Projects", href: "/projects", active: false },
    { label: "Blog", href: "/blog", active: false },
    { label: "Contact", href: "/contact", active: false },
  ];

  return (
    <main className="overflow-hidden">
      {/* Enquiry Now / Request a Quote Modal Popup */}
      <EnquiryModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[74px] max-w-[1400px] items-center justify-between px-5 lg:px-10">
          <a href="#home" className="flex items-center">
            <Image src="/logo.png" alt="VizagPlots" width={145} height={78} className="h-[58px] w-auto object-contain" priority />
          </a>

          {/* Main Navigation (ONLY Home, About, Projects, Blog, Contact) */}
          <nav className="hidden items-center gap-7 2xl:gap-9 xl:flex h-[74px]">
            {mainNavLinks.map((item) => (
              <a
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
              </a>
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
            {/* Mobile Search Button */}
            <button
              type="button"
              onClick={() => setIsQuoteModalOpen(true)}
              aria-label="Open Request a Quote modal"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50"
            >
              <Search size={18} className="text-[var(--green-700)]" />
            </button>

            <button aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg border border-slate-200 p-2">
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-5 py-5 xl:hidden shadow-lg">
            <div className="grid gap-2">
              {mainNavLinks.map((item) => (
                <a
                  onClick={() => setMenuOpen(false)}
                  key={item.label}
                  href={item.href}
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
                </a>
              ))}
              <div className="mt-2 flex flex-col gap-2.5 border-t border-slate-100 pt-3">
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
                <a href="tel:+919052867067" className="flex items-center gap-2 text-xs font-bold text-slate-800 pt-1">
                  <Phone size={14} className="text-[var(--green-700)]" />
                  <span>(+91) 9052867067</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Banner Slider (Slide 1: Banner 1, Slide 2: Banner 2, Slide 3: Local Amenities Video) */}
      <section id="home" className="relative min-h-[380px] sm:min-h-[480px] md:min-h-[580px] lg:min-h-[660px] text-white flex items-center overflow-hidden border-b border-slate-200 bg-slate-950">
        {/* Animated Official Stamp Seal (VUDA & VMRDA Approved, 20+ Years) */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-10 md:right-12 md:left-auto z-20 pointer-events-none">
          <OfficialStampBadge />
        </div>
        {/* Slides Cross-Fade Container */}
        {heroSlides.map((slide, idx) => (
          <div
            key={slide.label}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 z-0" : "opacity-0 -z-10 pointer-events-none"
            }`}
          >
            {slide.type === "image" ? (
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={idx === 0}
                quality={100}
                unoptimized
                className="object-cover object-center"
                sizes="100vw"
              />
            ) : (
              <div className="relative h-full w-full">
                <video
                  ref={heroVideoRef}
                  src={slide.video}
                  poster={slide.poster}
                  autoPlay
                  loop
                  muted={isVideoMuted}
                  playsInline
                  className="h-full w-full object-cover object-center"
                />
              </div>
            )}
            {/* Cinematic subtle darkening overlay across each slide */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}

        {/* Left-side Gradient Overlay: Smooth fade covering up to content end (hidden on mobile for pure clean banner) */}
        <div
          aria-hidden="true"
          className="hidden md:block pointer-events-none absolute inset-y-0 left-0 z-[1] w-full md:w-[75%] lg:w-[62%] xl:w-[54%] bg-gradient-to-r from-black/95 via-black/80 to-transparent"
        />

        {/* Main Banner Text Overlay (Hidden on Mobile as requested, only pure banner visible on mobile) */}
        <div className="hidden md:block relative z-10 mx-auto w-full max-w-[1400px] px-6 py-20 lg:px-10">
          <div className="max-w-[720px]">
            {/* Top Badges */}
            <div className="mb-4 flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0b241b] border border-lime-400/50 px-3.5 py-1 text-xs font-black tracking-wider text-lime-300 shadow-md">
                <ShieldCheck size={14} className="text-lime-300" />
                VUDA & VMRDA APPROVED
              </span>
              <span className="inline-flex items-center rounded-full bg-[#0b241b] border border-white/30 px-3.5 py-1 text-xs font-bold text-white shadow-md">
                20+ YEARS OF ON-TIME DEVELOPMENT
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="display-font text-3xl font-black sm:text-5xl lg:text-[3.5rem] leading-[1.08] text-white [text-shadow:_0_2px_12px_rgba(0,0,0,0.85)]">
              Leading Real Estate
              <br />
              <span className="text-lime-300 [text-shadow:_0_2px_12px_rgba(0,0,0,0.85)]">Company in Vizag</span>
            </h1>

            {/* Subtitle / Value Proposition */}
            <p className="mt-5 max-w-xl text-sm sm:text-base leading-7 text-white font-medium [text-shadow:_0_1px_6px_rgba(0,0,0,0.9)]">
              Over 20 years of on-time development and excellence in delivering premium, clear-title residential plots in prime growth corridors of Visakhapatnam.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#plots"
                className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3.5 text-xs sm:text-sm font-extrabold text-[var(--green-950)] shadow-lg transition-all hover:bg-lime-300 hover:scale-105 active:scale-95"
              >
                <span>Explore Plots</span>
                <ArrowRight size={16} />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#0b241b] border border-white/40 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg transition-all hover:bg-[#123b2a]"
              >
                <span>Schedule a Site Visit</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Slide Indicators & Video Controls Bar */}
        <div className="absolute bottom-6 right-6 z-20 flex flex-wrap items-center gap-2.5">
          {/* 3-Slide Selector Buttons */}
          <div className="flex items-center gap-1.5 rounded-full bg-black/75 backdrop-blur-md p-1.5 border border-white/20 shadow-xl">
            {heroSlides.map((slide, idx) => (
              <button
                key={slide.label}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Switch to ${slide.label}`}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                  idx === currentSlide
                    ? "bg-lime-400 text-slate-900 shadow-md scale-102"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {slide.type === "video" && (
                  <Play size={10} className={`fill-current ${idx === currentSlide ? "text-slate-900" : "text-lime-300"}`} />
                )}
                <span>{slide.label}</span>
              </button>
            ))}
          </div>

          {/* Video Audio & Playback Controls (shown when on video slide) */}
          {currentSlide === 2 && (
            <div className="flex items-center gap-1.5 animate-in fade-in duration-300">
              <button
                type="button"
                onClick={toggleVideoPlayback}
                aria-label={isVideoPlaying ? "Pause Video" : "Play Video"}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-black/75 text-white backdrop-blur-md border border-white/20 transition hover:bg-black hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
              >
                {isVideoPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
              </button>

              <button
                type="button"
                onClick={toggleVideoMute}
                aria-label={isVideoMuted ? "Unmute Video" : "Mute Video"}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-black/75 text-white backdrop-blur-md border border-white/20 transition hover:bg-black hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
              >
                {isVideoMuted ? <VolumeX size={14} /> : <Volume2 size={14} className="text-lime-300" />}
              </button>
            </div>
          )}
        </div>

        {/* Previous and Next Navigation Arrows */}
        <button
          type="button"
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
          aria-label="Previous Slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md border border-white/20 transition hover:bg-black/80 hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          type="button"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          aria-label="Next Slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md border border-white/20 transition hover:bg-black/80 hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
        >
          <ChevronRight size={22} />
        </button>
      </section>

      {/* Key Company Statistics / Achievements Bar */}
      <section className="relative z-20 -mt-8 sm:-mt-12 mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 rounded-3xl bg-white p-5 sm:p-7 shadow-[0_16px_50px_rgba(11,36,27,0.1)] border border-slate-100">
          {companyStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`flex items-center gap-3.5 pr-2 ${
                  idx % 2 === 0 ? "border-r border-slate-100" : ""
                } ${idx < 2 ? "border-b pb-4 sm:border-b-0 sm:pb-0" : ""} ${
                  idx < 3 ? "lg:border-r border-slate-100" : "lg:border-r-0"
                }`}
              >
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-lime-100/90 text-[var(--green-800)] shadow-sm">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-[var(--green-700)]" />
                </div>
                <div>
                  <div className="display-font text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[var(--green-950)]">
                    {stat.num}<span className="text-[#8dbb16]">{stat.suffix}</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-slate-700 mt-0.5 leading-snug">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* About */}
      <section id="about-us" className="blueprint relative overflow-hidden bg-white py-[50px]">
        <div className="relative z-10 mx-auto grid max-w-[1260px] gap-14 px-6 lg:grid-cols-[1fr_480px] lg:items-center lg:px-10">
          <div>
            <span className="mb-3.5 inline-flex items-center rounded-full border border-[var(--green-700)]/30 bg-[var(--green-700)]/5 px-3.5 py-1 text-xs font-extrabold tracking-[.2em] text-[var(--green-700)]">
              ABOUT US
            </span>
            <h2 className="display-font max-w-xl text-3xl font-black sm:text-4xl lg:text-[2.5rem] leading-[1.08] text-[var(--green-950)]">
              Building More Than
              <br />
              <span className="text-[#8dbb16]">Just Homes</span>
            </h2>
            <p className="mt-7 max-w-2xl text-[15px] leading-7 text-slate-600">
              VizagPlots brings residential land and construction support together under one trusted journey. We focus on helping customers make clear property decisions, plan confidently and build with dependable quality.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-7 border-y border-slate-200 py-7 md:grid-cols-4">
              {[
                ["Quality Focus", "Dependable workmanship and attention to detail."],
                ["Customer First", "Your goals guide every important decision."],
                ["Transparent Process", "Clear communication without unnecessary surprises."],
                ["Trusted Experience", "A reliable team supporting your journey."],
              ].map(([title, text]) => (
                <div key={title}>
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-lime-100 text-[var(--green-700)]"><CircleCheck size={18} /></div>
                  <h3 className="text-xs font-extrabold text-slate-800">{title}</h3>
                  <p className="mt-1 text-[11px] leading-5 text-slate-500">{text}</p>
                </div>
              ))}
            </div>

            <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--green-800)] px-5 py-3 text-xs font-bold text-white hover:bg-[var(--green-950)]">
              Read More About Us <ArrowRight size={15} />
            </a>
          </div>

          <div className="relative h-[520px] overflow-hidden rounded-2xl border border-slate-100 shadow-md">
            <Image
              src="/about-us.png"
              alt="VizagPlots - Modern home and plots overlooking Visakhapatnam coastline"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-[var(--green-950)]/90 p-6 text-white backdrop-blur-md border border-white/10 shadow-lg">
              <p className="text-[10px] font-bold tracking-[.22em] text-lime-300">OUR VISION</p>
              <p className="display-font mt-2 text-2xl sm:text-3xl leading-snug">A better path from plot to home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plots */}
      <section id="plots" className="bg-white py-[50px]">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="mb-2.5 flex items-center gap-2">
                <span className="inline-block h-[2px] w-6 bg-[#214b28]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#214b28]">FEATURED PLOTS</span>
              </div>
              <h2 className="display-font text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-[2.5rem] leading-tight">
                Premium <span className="text-[#8dbb16]">Residential Plots</span>
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                Invest in prime locations with excellent connectivity, modern infrastructure and high growth potential.
              </p>
            </div>
            <a href="#contact" className="inline-flex items-center gap-1.5 self-start pb-1 text-sm font-semibold text-[#214b28] transition-colors hover:text-[#16381e] sm:self-end">
              View All Plots <ArrowRight size={16} />
            </a>
          </div>

          <div className="mt-6 sm:mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {plots.map((plot) => (
              <article
                key={plot.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
              >
                <div className="relative h-40 w-full overflow-hidden bg-slate-100 sm:h-44">
                  <img
                    src={plot.image}
                    alt={plot.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute right-3 top-3 rounded-full bg-[#214b28] px-3 py-0.5 text-[11px] font-semibold text-white shadow-sm">
                    {plot.badge}
                  </span>
                </div>
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#214b28]">
                      <MapPin size={13} className="shrink-0 fill-[#214b28] text-[#214b28]" />
                      <span>{plot.location}</span>
                    </div>
                    <h3 className="mt-1 text-base font-bold tracking-tight text-slate-900">{plot.title}</h3>
                    <div className="mt-2 flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <LandPlot size={14} className="text-[#214b28]" />
                      <span>{plot.size}</span>
                    </div>
                    <div className="mt-2.5 flex min-h-[46px] flex-wrap content-start items-start gap-1.5">
                      {plot.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-slate-100/90 px-2 py-0.5 text-[10.5px] font-medium text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <Link
                      href={`/projects/${plot.slug}`}
                      className="flex items-center justify-center rounded-lg bg-[#214b28] px-2.5 sm:px-3 py-2 text-center text-[11px] font-semibold tracking-tight text-white shadow-sm transition-colors hover:bg-[#16381e] whitespace-nowrap xl:text-xs"
                    >
                      View Details
                    </Link>
                    <a
                      href={`https://wa.me/919052867067?text=${encodeURIComponent(
                        "Hi, I am interested in " + plot.title + " at " + plot.location + ". Please share pricing and layout availability."
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 rounded-lg border border-[#214b28] bg-white px-2 sm:px-2.5 py-2 text-center text-[11px] font-semibold tracking-tight text-[#214b28] transition-colors hover:bg-[#214b28]/5 whitespace-nowrap xl:text-xs"
                    >
                      <WhatsAppIcon className="h-3.5 w-3.5 shrink-0 fill-[#214b28]" />
                      <span className="whitespace-nowrap">WhatsApp Enquiry</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* New Ventures */}
      <section id="new-ventures" className="bg-white py-[50px]">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="mb-3 inline-flex items-center rounded-full border border-[var(--green-700)]/30 bg-[var(--green-700)]/5 px-3.5 py-1 text-xs font-extrabold tracking-[.2em] text-[var(--green-700)]">
                UPCOMING PROJECTS
              </span>
              <h2 className="display-font mt-2 text-3xl font-black sm:text-4xl lg:text-[2.5rem] leading-tight text-[var(--green-950)]">
                New & Upcoming <span className="text-[#8dbb16]">Ventures</span>
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                Thoughtfully planned communities in growing corridors of Visakhapatnam, featuring modern infrastructure and clear approvals.
              </p>
            </div>
          </div>

          <div className="mt-6 sm:mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingVentures.map((venture) => (
              <article
                key={venture.name}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--green-700)]/40 hover:shadow-[0_12px_32px_rgba(18,59,42,0.12)]"
              >
                {/* Venture Image with badges */}
                <div className="relative h-[210px] sm:h-[220px] w-full overflow-hidden bg-slate-100">
                  <img
                    src={venture.image}
                    alt={venture.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute left-3.5 top-3.5">
                    <span className="rounded-full bg-emerald-700/90 backdrop-blur-sm px-3 py-1 text-[11px] font-bold text-white shadow-sm">
                      Upcoming Venture
                    </span>
                  </div>

                  <div className="absolute right-3.5 top-3.5">
                    <span className="rounded-full bg-white/95 backdrop-blur-sm px-2.5 py-1 text-[11px] font-bold text-[var(--green-950)] shadow-sm flex items-center gap-1">
                      <Compass size={12} className="text-[var(--green-700)]" />
                      {venture.facing}
                    </span>
                  </div>

                  {/* Venture Title Overlay */}
                  <div className="absolute bottom-3 left-3.5 right-3.5">
                    <h3 className="display-font text-xl font-bold text-white drop-shadow-sm">
                      {venture.name}
                    </h3>
                  </div>
                </div>

                {/* Venture Details */}
                <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                  <div>
                    {/* Location */}
                    <div className="flex items-start gap-1.5 text-xs font-semibold text-slate-600">
                      <MapPin size={14} className="mt-0.5 shrink-0 text-[var(--green-700)]" />
                      <span className="line-clamp-1">{venture.location}</span>
                    </div>

                    {/* Specifications */}
                    <div className="mt-3.5 grid grid-cols-2 gap-2 border-y border-slate-100 py-3 text-xs">
                      <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                        <Ruler size={13} className="text-[var(--green-700)] shrink-0" />
                        <span>{venture.size}</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                        <Compass size={13} className="text-[var(--green-700)] shrink-0" />
                        <span>{venture.facing}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {venture.highlights.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-emerald-50/90 px-2 py-0.5 text-[10.5px] font-medium text-emerald-800 border border-emerald-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons: KNOW DETAILS and WhatsApp Enquiry */}
                  <div className="mt-4 grid grid-cols-2 gap-2 pt-3 border-t border-slate-100">
                    <Link
                      href={`/projects/${venture.slug}`}
                      className="flex items-center justify-center gap-1.5 rounded-lg bg-[#214b28] px-2 sm:px-3 py-2 text-center text-[11px] font-bold tracking-tight text-white shadow-sm transition-colors hover:bg-[#16381e] whitespace-nowrap xl:text-xs"
                    >
                      <span>KNOW DETAILS</span>
                      <ArrowRight size={13} />
                    </Link>
                    <a
                      href={`https://wa.me/919052867067?text=${encodeURIComponent(
                        `Hi, I am interested in upcoming venture "${venture.name}" at ${venture.location}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 rounded-lg border border-[#214b28] bg-white px-2 sm:px-2.5 py-2 text-center text-[11px] font-semibold tracking-tight text-[#214b28] transition-colors hover:bg-[#214b28]/5 whitespace-nowrap xl:text-xs"
                    >
                      <WhatsAppIcon className="h-3.5 w-3.5 shrink-0 fill-[#214b28]" />
                      <span className="whitespace-nowrap">WhatsApp Enquiry</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section id="how-we-work" className="relative overflow-hidden bg-gradient-to-r from-[#0b2416] via-[#143e22] to-[#0d2817] py-[50px] text-white shadow-inner">
        {/* Atmospheric background glows */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(163,230,53,0.1),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(23,77,53,0.4),transparent_60%)]" />
        
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-10">
            {/* Left Column: Heading and CTA */}
            <div className="lg:w-[27%] shrink-0">
              <span className="text-[11px] font-extrabold tracking-[0.22em] text-emerald-300 uppercase">
                OUR PROCESS
              </span>
              <h2 className="display-font mt-1.5 text-3xl font-black sm:text-4xl lg:text-[2.5rem] leading-[1.1] text-white">
                How We <span className="text-[#a6d51d]">Work</span>
              </h2>
              <p className="mt-3 text-xs sm:text-[13px] leading-5 text-emerald-100/80">
                From finding the right plot to handing over your dream home, we support you at every step.
              </p>
              <div className="mt-5 sm:mt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#9ec828] px-5 py-2.5 text-xs font-black text-[#0c2914] shadow-md transition-all hover:bg-[#ade22f] hover:shadow-lg hover:scale-105 active:scale-95"
                >
                  <span>Our Process</span>
                  <ArrowRight size={14} className="stroke-[2.5]" />
                </a>
              </div>
            </div>

            {/* Right Column: 6 Steps with Animated Flowing Arrows */}
            <div className="lg:w-[73%] overflow-x-auto hide-scrollbar pb-3 lg:pb-0">
              <div className="flex items-start justify-between min-w-[700px] lg:min-w-0 w-full">
                {processSteps.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start flex-1 min-w-0">
                      <div className="flex flex-col items-center text-center w-full px-1">
                        {/* Circular icon with dark green ring border */}
                        <div className="flex h-14 w-14 sm:h-[58px] sm:w-[58px] items-center justify-center rounded-full bg-white border-[3.5px] border-[#2d6136] text-[#144723] shadow-[0_4px_16px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-110">
                          <Icon size={24} className="stroke-[2.2]" />
                        </div>
                        {/* Step title */}
                        <h3 className="mt-3 text-xs sm:text-[13px] font-bold text-white tracking-tight whitespace-nowrap">
                          {item.title}
                        </h3>
                        {/* Step description */}
                        <p className="mt-1 max-w-[105px] text-[11px] leading-tight text-emerald-100/75">
                          {item.desc}
                        </p>
                      </div>

                      {/* Animated connecting arrow, vertically centered with circle */}
                      {index < processSteps.length - 1 && (
                        <div className="flex h-14 sm:h-[58px] items-center justify-center px-0.5 sm:px-1 shrink-0">
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 text-lime-400 animate-arrow-flow"
                            style={{ animationDelay: `${index * 0.22}s` }}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <polyline points="14 5 21 12 14 19" />
                          </svg>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent projects */}
      <section id="projects" className="bg-[var(--soft)] py-[50px]">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <span className="mb-3 inline-flex items-center rounded-full border border-[var(--green-700)]/30 bg-[var(--green-700)]/5 px-3.5 py-1 text-xs font-extrabold tracking-[.2em] text-[var(--green-700)]">
            OUR LATEST WORK
          </span>
          <h2 className="display-font mt-2 text-3xl font-black sm:text-4xl lg:text-[2.5rem] leading-tight text-[var(--green-950)]">
            Recent <span className="text-[#8dbb16]">Projects</span>
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">A glimpse of our latest construction projects, built with quality attention to detail.</p>
          <div className="mt-6 sm:mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recentProjects.map((project) => (
              <ProjectCard key={project.name + project.location} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section id="why-choose-us" className="bg-white py-[50px]">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Video Showcase */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-950 shadow-2xl">
                {showVideo ? (
                  <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full">
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?autoplay=1&mute=0&rel=0"
                      title="VizagPlots Property Walkthrough Video"
                      className="h-full w-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <button
                      type="button"
                      onClick={() => setShowVideo(false)}
                      aria-label="Close video"
                      className="absolute right-3.5 top-3.5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/75 text-white backdrop-blur transition-all hover:bg-black hover:scale-105 active:scale-95 shadow-md"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ) : (
                  <div
                    className="group relative aspect-[16/10] sm:aspect-[4/3] w-full cursor-pointer overflow-hidden"
                    onClick={() => setShowVideo(true)}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85"
                      alt="Property walkthrough video preview"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20" />

                    {/* Top Badges */}
                    <div className="absolute left-4 top-4 flex items-center gap-2">
                      <span className="flex items-center gap-2 rounded-full bg-emerald-600/95 backdrop-blur-sm px-3.5 py-1 text-xs font-bold text-white shadow-lg">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                        </span>
                        <span>PROPERTY WALKTHROUGH</span>
                      </span>
                    </div>

                    <div className="absolute right-4 top-4">
                      <span className="rounded-full bg-black/60 backdrop-blur-sm px-2.5 py-0.5 text-[11px] font-semibold text-white/90">
                        HD 1080p
                      </span>
                    </div>

                    {/* Pulsing Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative flex items-center justify-center">
                        <div className="absolute -inset-4 rounded-full bg-lime-400/30 animate-ping opacity-60" />
                        <div className="absolute -inset-2 rounded-full bg-lime-400/40 blur-sm" />
                        <button
                          type="button"
                          aria-label="Play video walkthrough"
                          className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-lime-400 text-[var(--green-950)] shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-lime-300 group-active:scale-95"
                        >
                          <Play size={28} className="ml-1 fill-current stroke-current" />
                        </button>
                      </div>
                    </div>

                    {/* Bottom glassmorphic overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-white/95 backdrop-blur-md p-3.5 sm:p-4 shadow-xl border border-white/40">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--green-950)] text-lime-400 font-black text-sm shadow">
                          20+
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[var(--green-950)]">Years of Trusted Excellence</p>
                          <p className="text-[11px] text-slate-500">12,000+ Happy Families & Homes</p>
                        </div>
                      </div>
                      <span className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-[var(--green-800)]">
                        Play Video →
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="flex flex-col justify-center lg:col-span-7">
              <span className="mb-3 inline-flex items-center rounded-full border border-[var(--green-700)]/30 bg-[var(--green-700)]/5 px-3.5 py-1 text-xs font-extrabold tracking-[.2em] text-[var(--green-700)] w-fit">
                THE VIZAGPLOTS DIFFERENCE
              </span>
              <h2 className="display-font text-3xl font-black sm:text-4xl lg:text-[2.5rem] leading-tight text-[var(--green-950)]">
                Why Choose <span className="text-[#8dbb16]">Us</span>
              </h2>
              <p className="mt-2.5 text-sm leading-6 text-slate-600">
                Over 20 years of trusted presence in Visakhapatnam, offering clear-title plotted developments with comprehensive customer support.
              </p>

              {/* 6 Feature Items */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {whyChooseItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.num}
                      className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-[var(--soft)] p-4 transition-all duration-300 hover:border-[var(--green-700)]/40 hover:bg-white hover:shadow-md"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-black tracking-wider text-[var(--green-800)] bg-lime-100/90 px-2 py-0.5 rounded-md border border-lime-300/60 font-mono">
                            {item.num}
                          </span>
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--green-800)] text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                            <Icon size={14} />
                          </div>
                        </div>
                        <h3 className="mt-2.5 text-sm font-bold text-[var(--green-950)] leading-snug">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-slate-500">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom CTA Row */}
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--green-800)] px-6 py-3 text-xs font-bold text-white shadow-md transition-all hover:bg-[var(--green-950)] hover:scale-105 active:scale-95"
                >
                  <span>Schedule a Free Site Visit</span>
                  <ArrowRight size={15} />
                </a>
                <a
                  href="https://wa.me/919052867067?text=Hi%2C%20I%20would%20like%20to%20chat%20with%20an%20expert%20about%20VizagPlots."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-xs font-bold text-[var(--green-950)] shadow-sm transition-all hover:bg-slate-50"
                >
                  <WhatsAppIcon className="h-4 w-4 fill-[#25D366]" />
                  <span>Chat with an Expert</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-[var(--soft)] py-[60px]">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="mb-3 inline-flex items-center rounded-full border border-[var(--green-700)]/30 bg-[var(--green-700)]/5 px-3.5 py-1 text-xs font-extrabold tracking-[.2em] text-[var(--green-700)]">
              WHAT OUR CLIENTS SAY
            </span>
            <h2 className="display-font mt-2 text-3xl font-black sm:text-4xl lg:text-[2.5rem] leading-tight text-[var(--green-950)]">
              Customer <span className="text-[#8dbb16]">Testimonials</span>
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Real feedback from customers who invested in Subhagruha plotted ventures in Visakhapatnam and Vizianagaram.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:border-[var(--green-700)]/30"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-100 text-[var(--green-800)]">
                      <Quote size={13} className="fill-current opacity-70" />
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-slate-700 font-medium">
                    &ldquo;{item.review}&rdquo;
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-3.5 border-t border-slate-100 pt-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--green-900)] to-[var(--green-700)] text-lime-300 font-black text-sm shadow">
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--green-950)]">{item.name}</h4>
                    <p className="text-xs font-semibold text-slate-500">{item.role}</p>
                    <span className="inline-block mt-0.5 text-[10px] font-bold text-[var(--green-700)] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {item.venture}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact */}
      <section id="contact" className="bg-white py-[60px]">
        <div className="mx-auto grid max-w-[1260px] gap-12 px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-10">
          <div>
            <span className="inline-flex items-center rounded-full border border-[var(--green-700)]/30 bg-[var(--green-700)]/5 px-3 py-1 text-xs font-extrabold tracking-[.25em] text-[var(--green-700)]">
              GET IN TOUCH
            </span>
            <h2 className="display-font mt-3 text-4xl sm:text-5xl text-[var(--green-950)] lg:text-6xl">
              Contact <span className="text-[#8dbb16]">Us</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
              We&apos;re here to help you find your plot, plan your home and move forward with confidence. Visit our office or reach out anytime.
            </p>
            <div className="mt-8 grid gap-4">
              <ContactItem
                icon={Phone}
                label="Phone Number"
                value="(+91) 9052867067"
                href="tel:+919052867067"
              />
              <ContactItem
                icon={MessageCircle}
                label="WhatsApp"
                value="(+91) 9052867067"
                href="https://wa.me/919052867067?text=Hi%20VizagPlots%2C%20I%20am%20interested%20in%20plots%20in%20Visakhapatnam."
              />
              <ContactItem
                icon={Mail}
                label="Email Address"
                value="janishaik9@gmail.com"
                href="mailto:janishaik9@gmail.com"
              />
              <ContactItem
                icon={MapPin}
                label="Office Address"
                value="50-50-33/2, J R Plaza, Gurudwara Junction, Visakhapatnam, Andhra Pradesh 530013"
                href="https://www.google.com/maps/search/?api=1&query=50-50-33%2F2%2C+J+R+Plaza%2C+Gurudwara+Junction%2C+Visakhapatnam%2C+Andhra+Pradesh+530013"
              />
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <form className="rounded-2xl border border-slate-200 bg-white p-6 md:col-span-1 shadow-sm">
              <h3 className="display-font text-2xl text-[var(--green-950)]">Start a Conversation</h3>
              <p className="mt-1 text-xs text-slate-500">Drop us a message and our team will get in touch shortly.</p>
              <div className="mt-5 grid gap-3">
                <input className="rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[var(--green-700)] focus:ring-1 focus:ring-[var(--green-700)]" placeholder="Your Name" />
                <input className="rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[var(--green-700)] focus:ring-1 focus:ring-[var(--green-700)]" placeholder="Phone Number" />
                <input className="rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[var(--green-700)] focus:ring-1 focus:ring-[var(--green-700)]" placeholder="Email Address" />
                <textarea className="min-h-24 rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[var(--green-700)] focus:ring-1 focus:ring-[var(--green-700)]" placeholder="How can we help?" />
                <button type="button" className="rounded-full bg-[var(--green-800)] px-5 py-3 text-xs font-extrabold text-white transition hover:bg-[var(--green-950)]">
                  Send Enquiry →
                </button>
              </div>
            </form>

            {/* Interactive Location Map */}
            <div className="flex flex-col min-h-[380px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="relative flex-1 w-full min-h-[290px]">
                <iframe
                  title="VizagPlots Office Location - J R Plaza, Gurudwara Junction"
                  src="https://maps.google.com/maps?q=50-50-33%2F2%2C+J+R+Plaza%2C+Gurudwara+Junction%2C+Visakhapatnam%2C+Andhra+Pradesh+530013&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
              <div className="bg-slate-50 p-4 border-t border-slate-200">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-1.5 text-[var(--green-800)]">
                      <MapPin size={15} className="shrink-0" />
                      <p className="text-xs font-extrabold text-[var(--green-950)]">VizagPlots Office</p>
                    </div>
                    <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                      50-50-33/2, J R Plaza, Gurudwara Junction, Visakhapatnam - 530013
                    </p>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=50-50-33%2F2%2C+J+R+Plaza%2C+Gurudwara+Junction%2C+Visakhapatnam%2C+Andhra+Pradesh+530013"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-1 rounded-full bg-[var(--green-700)] px-3 py-1.5 text-[11px] font-bold text-white shadow-sm transition hover:bg-[var(--green-900)] whitespace-nowrap"
                  >
                    <span>View Map</span>
                    <ArrowRight size={11} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--green-950)] py-14 text-white">
        <div className="mx-auto max-w-[1260px] px-6 lg:px-10">
          <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
            <div>
              <Image src="/logo.png" alt="VizagPlots" width={145} height={78} className="h-16 w-auto rounded bg-white p-1 object-contain" />
              <p className="mt-5 max-w-sm text-xs leading-6 text-white/55">Residential plots and complete construction support for customers ready to turn land into a place they can call home.</p>
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
                <Link href="/projects" className="hover:text-white transition">Projects</Link>
                <Link href="/blog" className="hover:text-white transition">Blog</Link>
                <Link href="/contact" className="hover:text-white transition">Contact</Link>
              </div>
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[.2em] text-lime-300">Connect</p>
              <div className="mt-5 grid gap-3 text-xs text-white/65">
                <button
                  type="button"
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="text-left text-lime-300 font-semibold hover:underline cursor-pointer"
                >
                  Request a Quote
                </button>
                <Link href="/contact" className="hover:text-white transition">Contact Us</Link>
                <a href="https://wa.me/919052867067" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">WhatsApp: (+91) 9052867067</a>
                <a href="tel:+919052867067" className="hover:text-white transition">Call: (+91) 9052867067</a>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-[10px] text-white/40 sm:flex-row">
            <span>© 2026 VizagPlots. All rights reserved.</span>
            <span>Privacy Policy · Terms & Conditions</span>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Quick Action */}
      <a
        href="https://wa.me/919052867067?text=Hi%20VizagPlots%2C%20I%20am%20interested%20in%20plots%20in%20Visakhapatnam."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110 active:scale-95 group"
      >
        <WhatsAppIcon className="h-7 w-7 fill-white" />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>
    </main>
  );
}

function Info({ title, text, icon: Icon }: { title: string; text: string; icon: React.ElementType }) {
  return (
    <div className="flex gap-3">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime-100 text-[var(--green-700)]"><Icon size={15} /></div>
      <div><h4 className="text-xs font-extrabold text-[var(--green-950)]">{title}</h4><p className="mt-1 text-[11px] leading-5 text-slate-500">{text}</p></div>
    </div>
  );
}

function ProjectCard({
  project,
}: {
  project: {
    name: string;
    slug?: string;
    location: string;
    type: string;
    status: string;
    image: string;
    link?: string;
    size?: string;
    facing?: string;
  };
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
      <div className="relative h-40 w-full overflow-hidden bg-slate-100 sm:h-44">
        <img
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute right-3 top-3 rounded-full bg-[#214b28] px-3 py-0.5 text-[11px] font-semibold text-white shadow-sm">
          {project.status}
        </span>
        {project.facing && (
          <span className="absolute left-3 top-3 rounded-full bg-white/95 backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-semibold text-[#214b28] shadow-sm">
            {project.facing}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#214b28]">
            <MapPin size={13} className="shrink-0 fill-[#214b28] text-[#214b28]" />
            <span className="line-clamp-1">{project.location}</span>
          </div>
          <h3 className="mt-1 text-base font-bold tracking-tight text-slate-900 line-clamp-1">{project.name}</h3>
          <div className="mt-2 flex items-center">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-lime-300/80 bg-lime-50/90 px-2.5 py-1 text-[11px] sm:text-xs font-semibold text-[var(--green-950)] shadow-xs">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#8dbb16]" />
              <span>{project.size ? `${project.size} · ${project.type}` : project.type}</span>
            </span>
          </div>
        </div>
        <div className="mt-3 pt-1">
          <Link
            href={`/projects/${project.slug || "sukrithi-aawas"}`}
            className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#214b28] px-3 py-2 text-center text-xs font-semibold text-white shadow-sm transition-colors hover:bg-[#16381e]"
          >
            <span>View Details</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4 group">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lime-100 text-[var(--green-700)] transition-colors group-hover:bg-[var(--green-700)] group-hover:text-white">
        <Icon size={18} />
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{label}</p>
        <p className="mt-0.5 text-xs sm:text-sm font-semibold text-[var(--green-950)] group-hover:text-[var(--green-700)] transition-colors">
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="block transition-transform hover:translate-x-1"
      >
        {content}
      </a>
    );
  }

  return content;
}