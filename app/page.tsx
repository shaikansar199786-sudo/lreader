"use client";

import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  Calendar,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  Compass,
  CreditCard,
  Download,
  FileCheck2,
  FileText,
  Globe2,
  Headphones,
  HelpCircle,
  Home,
  IndianRupee,
  KeyRound,
  LandPlot,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  Pause,
  Phone,
  Play,
  Quote,
  Ruler,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Trees,
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
      <div className="absolute inset-0 rounded-full bg-lime-400/25 blur-md animate-pulse" />
      <div className="relative flex h-[106px] w-[106px] sm:h-[122px] sm:w-[122px] items-center justify-center rounded-full border-2 border-dashed border-lime-400 bg-slate-950/85 p-1 shadow-[0_0_22px_rgba(163,230,53,0.45)] backdrop-blur-md">
        <div className="absolute inset-1 rounded-full border border-lime-400/40" />
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
    label: "Million Sq. Ft. Delivered",
    icon: Building2,
  },
  {
    num: "12",
    suffix: "K+",
    label: "Happy Families & Investors",
    icon: Users,
  },
  {
    num: "100",
    suffix: "+",
    label: "Approved Plotted Ventures",
    icon: MapPin,
  },
];

// Subhagruha's 6 True Real Estate Plotted Services
const realEstateServices = [
  {
    title: "VMRDA & RERA Approved Layouts",
    desc: "100% legally scrutinized residential plots with clear titles, sanctioned LP numbers, and immediate spot registration at Sub-Registrar offices.",
    icon: ShieldCheck,
    tag: "Legally Verified",
  },
  {
    title: "Complimentary Cab Site Visit",
    desc: "Free doorstep pickup & drop in comfortable AC cabs for your entire family to inspect prime ventures across Visakhapatnam growth corridors.",
    icon: Navigation,
    tag: "Free Family Cab",
  },
  {
    title: "30-Year Legal Title Scrutiny",
    desc: "Complete documentation transparency with 30-year link deeds, Encumbrance Certificates (EC), and legal scrutiny reports available before commitment.",
    icon: FileCheck2,
    tag: "100% Clear Title",
  },
  {
    title: "Pre-Approved Bank Loans (Up to 75%)",
    desc: "Tied up with leading financial institutions including SBI, HDFC Bank, Axis Bank, and LIC Housing Finance for rapid plot loan approvals.",
    icon: CreditCard,
    tag: "SBI & HDFC Pre-Approved",
  },
  {
    title: "Gated Township Infrastructure",
    desc: "33ft, 40ft & 60ft wide BT blacktop roads, underground drainage, avenue plantations, overhead water storage, and 24/7 security with grand entrance arches.",
    icon: Trees,
    tag: "World-Class Living",
  },
  {
    title: "Dedicated NRI Property Desk",
    desc: "Tailored assistance for Non-Resident Indians including FEMA compliance, Power of Attorney (PoA) guidance, virtual video tours, and resale advisory.",
    icon: Globe2,
    tag: "Global Support",
  },
];

// Corridor-Categorized Projects
const allVentures = [
  {
    name: "Sukrithi Saanvi Phase 4",
    slug: "sukrithi-saanvi-phase-4",
    corridor: "Bhogapuram",
    corridorLabel: "Bhogapuram Airport Corridor",
    location: "Near Green Field International Airport, Bhogapuram",
    approval: "VUDA & VMRDA Approved",
    lpNo: "LP Available on Request",
    size: "167 - 500 Sq. Yds",
    facing: "East & North Facing Plots",
    priceNote: "High Appreciation Zone",
    status: "Active Sale",
    image: "/subhagruha/proj-sukrithi-saanvi4.jpg",
    tags: ["Airport Facing", "Gated Security", "Overhead Tank", "Avenue Plantation"],
  },
  {
    name: "Sukrithi Lohitha",
    slug: "sukrithi-lohitha",
    corridor: "Anandapuram",
    corridorLabel: "Anandapuram Highway Hub",
    location: "Anandapuram Junction, Visakhapatnam",
    approval: "VMRDA Approved",
    lpNo: "Sanctioned VMRDA Layout",
    size: "150 - 400 Sq. Yds",
    facing: "East, West & Corner Plots",
    priceNote: "Ready to Register",
    status: "Active Sale",
    image: "/subhagruha/proj-sukrithi-lohitha.jpg",
    tags: ["Highway Connectivity", "Underground Drainage", "Blacktop Roads", "Park Zone"],
  },
  {
    name: "Sukrithi Windsor",
    slug: "sukrithi-windsor",
    corridor: "Anandapuram",
    corridorLabel: "Anandapuram Growth Corridor",
    location: "Bheemannadorapalem, Anandapuram Mandal, Vizag",
    approval: "VMRDA Approved",
    lpNo: "Clear Title Layout",
    size: "150 - 450 Sq. Yds",
    facing: "North & East Facing",
    priceNote: "Bank Loan Eligible",
    status: "For Sale",
    image: "/subhagruha/sukrithi-windsor.jpg",
    tags: ["Compound Wall", "Street Lighting", "24/7 Guard", "100% Vaastu"],
  },
  {
    name: "Maple Meadows",
    slug: "maple-meadows",
    corridor: "Modavalasa",
    corridorLabel: "Modavalasa & Sontyam",
    location: "Modavalasa Village, Near Sontyam Corridor, Vizag",
    approval: "VMRDA Approved",
    lpNo: "Sanctioned Layout",
    size: "200 - 600 Sq. Yds",
    facing: "South & East Facing",
    priceNote: "Fast Growing Hub",
    status: "For Sale",
    image: "/subhagruha/maple-meadows.png",
    tags: ["Grand Arch", "Tree-Lined Roads", "Green Children Park", "Water Tap Connection"],
  },
  {
    name: "Subhagruha Sukrithi Saanvi Phase-3",
    slug: "subhagruha-sukrithi-saanvi-phase-3",
    corridor: "Tagarapuvalasa",
    corridorLabel: "Tagarapuvalasa Coastal Corridor",
    location: "Tagarapuvalasa Highway Arterial, Visakhapatnam",
    approval: "VMRDA Approved",
    lpNo: "VMRDA Sanctioned",
    size: "167 - 350 Sq. Yds",
    facing: "North & East Facing",
    priceNote: "Ready for Construction",
    status: "Active Sale",
    image: "/subhagruha/gallery-saanvi.png",
    tags: ["Near Educational Hubs", "33ft BT Roads", "Electricity Lines", "Immediate Spot Reg"],
  },
  {
    name: "Sukriti Sampath",
    slug: "sukriti-sampath",
    corridor: "Modavalasa",
    corridorLabel: "Sontyam Corridor",
    location: "Sontyam, Visakhapatnam",
    approval: "Clear Title Layout",
    lpNo: "Clear Legal Scrutiny",
    size: "150 - 400 Sq. Yds",
    facing: "East & North Facing",
    priceNote: "Affordable Land Investment",
    status: "Active Sale",
    image: "/subhagruha/proj-sukrithi-sampath.jpg",
    tags: ["Sontyam Hub", "Immediate Registration", "Avenue Trees", "Bank Loan Assistance"],
  },
  {
    name: "Sukrithi Nivas Phase 3",
    slug: "sukrithi-nivas-phase-3",
    corridor: "Tagarapuvalasa",
    corridorLabel: "Tagarapuvalasa Expansion",
    location: "Tagarapuvalasa - Bheemili Corridor, Vizag",
    approval: "VMRDA Approved",
    lpNo: "Approved Layout",
    size: "167 - 450 Sq. Yds",
    facing: "East & West Facing",
    priceNote: "High ROI Potential",
    status: "Active Sale",
    image: "/subhagruha/proj-sukrithi-nivas.jpg",
    tags: ["Bheemili Connectivity", "Clear Title Deeds", "Parks & Play Area", "Wide Roads"],
  },
  {
    name: "Sukruthi Ananthika",
    slug: "sukruthi-ananthika",
    corridor: "Anandapuram",
    corridorLabel: "Highway Growth Corridor",
    location: "Srikakulam - Vizag National Highway, Visakhapatnam",
    approval: "VMRDA Approved",
    lpNo: "VMRDA Sanctioned",
    size: "12,000 Sq.Ft Layout Plots",
    facing: "West & North Facing",
    priceNote: "Highway Facing Premium",
    status: "Upcoming Venture",
    image: "/subhagruha/sukruthi-ananthika.jpg",
    tags: ["Direct NH-16 Frontage", "Near Oakridge Corridor", "Gated Township", "Lush Parks"],
  },
  {
    name: "Sukrithi Sathvik",
    slug: "sukrithi-sathvik",
    corridor: "Modavalasa",
    corridorLabel: "Vizianagaram Highway",
    location: "Gantlam, Vizianagaram Highway, Vizag Region",
    approval: "Clear Title Layout",
    lpNo: "Clear Title",
    size: "133 - 300 Sq. Yds",
    facing: "South & East Facing",
    priceNote: "Budget Friendly",
    status: "For Sale",
    image: "/subhagruha/sukrithi-sathvik.png",
    tags: ["Gated Security", "Overhead Water Tank", "Avenue Trees", "Bank Loan Support"],
  },
];

// The Real Estate Customer Journey (replacing construction steps)
const processSteps = [
  {
    num: "01",
    title: "Free Cab Site Visit",
    desc: "Complimentary AC doorstep pickup for your family to inspect ventures firsthand.",
    icon: Navigation,
  },
  {
    num: "02",
    title: "Plot & Facing Selection",
    desc: "Choose East/North facing plots, corner units, and preferred sizes (167 - 500 Sq. Yds).",
    icon: Compass,
  },
  {
    num: "03",
    title: "Legal & Title Verification",
    desc: "Review VMRDA LP approvals, 30-year link documents, and RERA registration with 100% transparency.",
    icon: FileCheck2,
  },
  {
    num: "04",
    title: "Bank Loan Assistance",
    desc: "Pre-approved loans up to 75% arranged with SBI, HDFC, Axis Bank & LIC Housing Finance.",
    icon: CreditCard,
  },
  {
    num: "05",
    title: "Spot Registration",
    desc: "Execute the registered sale deed at the Sub-Registrar office with instant patta handover.",
    icon: KeyRound,
  },
];

// Pre-Approved Banking Partners
const bankingPartners = [
  { name: "State Bank of India", badge: "SBI Home & Plot Loan", rate: "Pre-Approved" },
  { name: "HDFC Bank", badge: "HDFC Home Loans", rate: "Up to 75% Funding" },
  { name: "Axis Bank", badge: "Axis Bank Home Loan", rate: "Fast Sanction" },
  { name: "Tata Capital", badge: "Tata Housing Finance", rate: "Low Interest" },
  { name: "ICICI Bank", badge: "ICICI Home Loans", rate: "Minimal Paperwork" },
];

// Customer Testimonials from subhagruha.net
const testimonials = [
  {
    name: "Keshav Atal",
    role: "Plot Owner",
    venture: "Sukrithi Avanthika",
    rating: 5,
    review:
      "Subhagruha Plots offers exceptional care and responsible service. My family is extremely satisfied with the respect they provide to customers — truly among the best real estate teams in Vizag.",
  },
  {
    name: "Samantra Smruti",
    role: "Investor",
    venture: "Bhogapuram Airport Corridor",
    rating: 5,
    review:
      "Investing in Subhagruha plots was one of my best decisions. With excellent development, highway connectivity, and VMRDA-approved layouts, the team guided me smoothly at every step.",
  },
  {
    name: "Eswar Abhinav",
    role: "Plot Owner",
    venture: "Sukrithi Windsor",
    rating: 5,
    review:
      "I recently bought a 150 sq. yard plot from Subhagruha and had a seamless experience. Their loan support and transparent documentation make them the most trusted choice in Visakhapatnam.",
  },
  {
    name: "Shaik Mahaboob Roshan",
    role: "Homeowner",
    venture: "Anandapuram Corridor",
    rating: 5,
    review:
      "Subhagruha's projects in Vizag offer peaceful, secure living with well-planned gated communities, wide blacktop roads, and quick connectivity to top schools, hospitals, and highways.",
  },
  {
    name: "Mahidhar Ponnada",
    role: "Investor",
    venture: "Sukrithi Sathvik",
    rating: 5,
    review:
      "We invested in two Subhagruha plots and are extremely satisfied. The venture is fully developed near the highway, offering excellent infrastructure and huge future appreciation.",
  },
];

// Comprehensive Real Estate FAQ
const faqs = [
  {
    q: "Are Subhagruha ventures approved by VMRDA & VUDA?",
    a: "Yes. All Subhagruha residential plotted townships across Visakhapatnam are developed in accordance with the regulatory standards of the Visakhapatnam Metropolitan Region Development Authority (VMRDA / VUDA) with clear titles, sanctioned LP drawings, and complete documentation.",
  },
  {
    q: "Are the plots eligible for bank loans?",
    a: "Yes, our ventures are pre-approved by leading financial institutions including State Bank of India (SBI), HDFC Bank, Axis Bank, Tata Capital, and LIC Housing Finance. Buyers can finance up to 70% to 75% of the plot cost with low interest rates.",
  },
  {
    q: "How does the complimentary cab site visit work?",
    a: "We provide free doorstep pickup and drop in air-conditioned vehicles for you and your family. Our expert property advisors will guide you through the chosen ventures, show master layout plans, and clarify plot demarcations.",
  },
  {
    q: "Can NRIs and out-of-state buyers purchase Subhagruha plots?",
    a: "Absolutely. NRIs and non-local buyers regularly invest in our Visakhapatnam growth corridors. We provide end-to-end remote assistance, including Power of Attorney (PoA) guidance, digital video walkthroughs, and legal title scrutinies.",
  },
  {
    q: "What infrastructure amenities are included in each layout?",
    a: "Every Subhagruha layout features wide 33ft, 40ft, or 60ft blacktop internal roads, underground drainage, overhead water storage, underground electricity cabling & streetlights, avenue plantations, and dedicated children play parks secured by boundary walls.",
  },
  {
    q: "When can spot registration be completed?",
    a: "Registration can be completed immediately at the local Sub-Registrar office once documentation and payment milestones are finalized. We handle all registration paperwork to ensure instant handover of your registered sale deed.",
  },
];

const mainNavLinks = [
  { label: "Home", href: "/", active: true },
  { label: "About Us", href: "/about-us" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedCorridor, setSelectedCorridor] = useState<string>("All");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Hero Quick Enquiry State
  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadProject, setLeadProject] = useState("Sukrithi Saanvi (Bhogapuram Airport)");
  const [leadDay, setLeadDay] = useState("This Weekend (Free Cab)");
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [leadSuccess, setLeadSuccess] = useState(false);

  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  // Auto-play slider: 6s for images, 14s for video
  useEffect(() => {
    const delay = currentSlide === 2 ? 14000 : 6000;
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, delay);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  useEffect(() => {
    if (currentSlide === 2 && heroVideoRef.current) {
      heroVideoRef.current.currentTime = 0;
      heroVideoRef.current.play().catch(() => {});
      setIsVideoPlaying(true);
    }
  }, [currentSlide]);

  const toggleVideoPlayback = () => {
    if (!heroVideoRef.current) return;
    if (heroVideoRef.current.paused) {
      heroVideoRef.current.play();
      setIsVideoPlaying(true);
    } else {
      heroVideoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };

  const toggleVideoMute = () => {
    if (!heroVideoRef.current) return;
    heroVideoRef.current.muted = !heroVideoRef.current.muted;
    setIsVideoMuted(heroVideoRef.current.muted);
  };

  const handleHeroLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadPhone.trim()) return;

    setIsSubmittingLead(true);
    const msg = `*Free Site Visit Request - VizagPlots / Subhagruha*%0A%0A*Name:* ${encodeURIComponent(
      leadName || "Interested Buyer"
    )}%0A*Phone:* ${encodeURIComponent(leadPhone)}%0A*Interested Venture:* ${encodeURIComponent(
      leadProject
    )}%0A*Preferred Timing:* ${encodeURIComponent(
      leadDay
    )}%0A%0APlease arrange a complimentary AC cab pickup and share layout brochure.`;

    const waUrl = `https://wa.me/919052867067?text=${msg}`;
    window.open(waUrl, "_blank");
    setIsSubmittingLead(false);
    setLeadSuccess(true);
  };

  // Filter projects by Corridor
  const filteredVentures =
    selectedCorridor === "All"
      ? allVentures
      : allVentures.filter((v) => v.corridor === selectedCorridor);

  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased selection:bg-lime-400 selection:text-slate-950">
      {/* Top Banner Ribbon */}
      <div className="bg-[#0b241b] px-4 py-2 text-center text-xs font-semibold text-white/90 border-b border-lime-400/20">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-lime-400 animate-ping" />
            <span className="text-lime-300 font-bold uppercase tracking-wider text-[11px]">
              VMRDA &amp; VUDA Approved Townships
            </span>
            <span className="hidden md:inline text-white/60">· Over 20 Years of On-Time Development</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold">
            <a
              href="tel:+919052867067"
              className="flex items-center gap-1.5 hover:text-lime-300 transition-colors"
            >
              <Phone size={13} className="text-lime-400" />
              <span>(+91) 9052867067</span>
            </a>
            <span className="hidden sm:inline text-white/30">|</span>
            <a
              href="https://wa.me/919052867067?text=Hi%2C%20I%20am%20interested%20in%20learning%20more%20about%20Subhagruha%20ventures."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 text-lime-300 hover:text-lime-200"
            >
              <WhatsAppIcon className="h-3.5 w-3.5 fill-lime-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-11 w-44 sm:h-12 sm:w-48">
              <Image
                src="/logo.png"
                alt="VizagPlots - Subhagruha Group Channel Partner"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {mainNavLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-bold tracking-tight transition-colors hover:text-[#174d35] ${
                  link.active ? "text-[#174d35] border-b-2 border-lime-500 pb-1" : "text-slate-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#174d35] px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-[#0b241b] hover:scale-105 active:scale-95"
            >
              <Navigation size={14} className="text-lime-400" />
              <span>Book Free Cab Visit</span>
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-lg border border-slate-200 p-2 text-slate-700 lg:hidden hover:bg-slate-50"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden shadow-lg animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-3">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`py-2 text-base font-bold border-b border-slate-100 ${
                    link.active ? "text-[#174d35]" : "text-slate-700"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    setIsQuoteModalOpen(true);
                  }}
                  className="flex items-center justify-center gap-2 rounded-full bg-[#174d35] py-3 text-xs font-bold text-white shadow-sm"
                >
                  <Navigation size={14} className="text-lime-400" />
                  <span>Book Free Cab Site Visit</span>
                </button>
                <a
                  href="tel:+919052867067"
                  className="flex items-center justify-center gap-2 rounded-full border border-slate-300 py-2.5 text-xs font-bold text-slate-800"
                >
                  <Phone size={14} className="text-[#174d35]" />
                  <span>Call: (+91) 9052867067</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Banner Section with Embedded Lead Generation Card */}
      <section
        id="home"
        className="relative min-h-[560px] lg:min-h-[640px] text-white flex items-center overflow-hidden border-b border-slate-200 bg-slate-950"
      >
        {/* Stamp Badge */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-20 pointer-events-none">
          <OfficialStampBadge />
        </div>

        {/* Background Slider / Video Container */}
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
                quality={95}
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
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/60" />
          </div>
        ))}

        {/* Hero Content: 2-Column High-Converting Grid */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Headline & Value Proposition */}
            <div className="lg:col-span-7 pt-12 md:pt-0">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-lime-400/40 bg-[#0b241b]/90 px-3.5 py-1 text-xs font-extrabold tracking-wider text-lime-300 shadow-md">
                <ShieldCheck size={14} className="text-lime-400" />
                <span>VMRDA &amp; VUDA APPROVED TOWNSHIPS</span>
              </div>

              <h1 className="display-font text-3xl font-black sm:text-5xl lg:text-[3.25rem] leading-[1.08] text-white [text-shadow:_0_2px_12px_rgba(0,0,0,0.85)]">
                Leading Real Estate
                <br />
                <span className="text-lime-300 [text-shadow:_0_2px_12px_rgba(0,0,0,0.85)]">
                  Company in Vizag
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-slate-200 font-medium">
                Over 20 years of trusted legacy delivering clear-title, legally approved residential
                plotted layouts across Visakhapatnam's high-growth corridors — Bhogapuram Airport
                Corridor, Anandapuram, Tagarapuvalasa, and Sontyam.
              </p>

              {/* 3 Quick Badges */}
              <div className="mt-6 flex flex-wrap items-center gap-2.5 text-xs font-bold text-white">
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-black/60 backdrop-blur-md px-3 py-1.5 border border-white/15">
                  <BadgeCheck size={14} className="text-lime-400" />
                  Immediate Spot Registration
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-black/60 backdrop-blur-md px-3 py-1.5 border border-white/15">
                  <BadgeCheck size={14} className="text-lime-400" />
                  100% Vaastu Compliant
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-black/60 backdrop-blur-md px-3 py-1.5 border border-white/15">
                  <BadgeCheck size={14} className="text-lime-400" />
                  Up to 75% Bank Loan Approved
                </span>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href="#ventures"
                  className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3.5 text-xs sm:text-sm font-black text-slate-950 shadow-xl transition-all hover:bg-lime-300 hover:scale-105 active:scale-95"
                >
                  <span>Explore Plotted Ventures</span>
                  <ArrowRight size={16} />
                </a>
                <a
                  href="tel:+919052867067"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/30 px-5 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg transition-all hover:bg-white/20"
                >
                  <Phone size={15} className="text-lime-300" />
                  <span>Call Property Expert</span>
                </a>
              </div>
            </div>

            {/* Right Column: High-Converting "Request a Quote & Cab Visit" Form (matching subhagruha.net) */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-lime-400/30 bg-slate-950/85 p-6 sm:p-7 shadow-[0_16px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl">
                <div className="mb-4">
                  <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-widest text-lime-400">
                    <Sparkles size={12} />
                    Complimentary Service
                  </span>
                  <h3 className="display-font text-xl sm:text-2xl font-bold text-white mt-1">
                    Book Free Cab &amp; Site Visit
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Doorstep AC cab pickup for your family with guided inspection of prime ventures.
                  </p>
                </div>

                {leadSuccess ? (
                  <div className="rounded-2xl bg-emerald-950/80 border border-emerald-500/50 p-6 text-center animate-in fade-in">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-slate-950 shadow-md">
                      <Check size={24} className="stroke-[3]" />
                    </div>
                    <h4 className="mt-3 text-base font-bold text-white">Visit Request Sent!</h4>
                    <p className="mt-1 text-xs text-emerald-200">
                      Our coordinator has received your request on WhatsApp and will call to confirm
                      pickup time and location.
                    </p>
                    <button
                      onClick={() => setLeadSuccess(false)}
                      className="mt-4 text-xs font-bold text-lime-300 underline"
                    >
                      Book another inspection
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleHeroLeadSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={leadName}
                        onChange={(e) => setLeadName(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full rounded-xl border border-white/20 bg-white/10 px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={leadPhone}
                        onChange={(e) => setLeadPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl border border-white/20 bg-white/10 px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                        Select Growth Corridor / Project
                      </label>
                      <select
                        value={leadProject}
                        onChange={(e) => setLeadProject(e.target.value)}
                        className="w-full rounded-xl border border-white/20 bg-slate-900 px-3.5 py-2.5 text-xs text-white focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-400"
                      >
                        <option value="Sukrithi Saanvi (Bhogapuram Airport)">
                          Bhogapuram Airport Corridor — Sukrithi Saanvi
                        </option>
                        <option value="Sukrithi Lohitha (Anandapuram)">
                          Anandapuram Highway — Sukrithi Lohitha
                        </option>
                        <option value="Sukrithi Windsor (Bheemannadorapalem)">
                          Bheemannadorapalem — Sukrithi Windsor
                        </option>
                        <option value="Maple Meadows (Modavalasa)">
                          Modavalasa — Maple Meadows
                        </option>
                        <option value="Sukriti Sampath (Sontyam)">
                          Sontyam Corridor — Sukriti Sampath
                        </option>
                        <option value="Tagarapuvalasa Corridor">
                          Tagarapuvalasa Coastal Layouts
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                        Preferred Visit Day
                      </label>
                      <select
                        value={leadDay}
                        onChange={(e) => setLeadDay(e.target.value)}
                        className="w-full rounded-xl border border-white/20 bg-slate-900 px-3.5 py-2.5 text-xs text-white focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-400"
                      >
                        <option value="Today">Today (Immediate Visit)</option>
                        <option value="This Weekend (Free Cab)">This Weekend (Saturday / Sunday)</option>
                        <option value="Tomorrow">Tomorrow</option>
                        <option value="Next Week">Next Week</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmittingLead}
                      className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-lime-400 py-3 text-xs font-black uppercase tracking-wider text-slate-950 shadow-lg transition-all hover:bg-lime-300 active:scale-95 disabled:opacity-50"
                    >
                      <WhatsAppIcon className="h-4 w-4 fill-slate-950" />
                      <span>Book Free Cab on WhatsApp</span>
                    </button>

                    <p className="text-center text-[10px] text-slate-400">
                      🔒 No spam. Our Visakhapatnam team responds within 15 minutes.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Slide Selector & Controls */}
        <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
          <div className="flex items-center gap-1.5 rounded-full bg-black/75 backdrop-blur-md p-1 border border-white/20">
            {heroSlides.map((slide, idx) => (
              <button
                key={slide.label}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                className={`rounded-full px-2.5 py-1 text-[11px] font-bold transition-all ${
                  idx === currentSlide
                    ? "bg-lime-400 text-slate-950"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {slide.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Key Company Statistics Bar */}
      <section className="relative z-20 -mt-6 sm:-mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-lime-100/90 text-[#174d35] shadow-xs">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-[#174d35]" />
                </div>
                <div>
                  <div className="display-font text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#0b241b]">
                    {stat.num}
                    <span className="text-[#8dbb16]">{stat.suffix}</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-slate-700 mt-0.5 leading-snug">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION: Our Real Estate Plotted Services (Replacing Construction Contractor copy) */}
      <section id="services" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1f6843]/30 bg-[#1f6843]/10 px-3.5 py-1 text-xs font-extrabold tracking-widest text-[#174d35] uppercase">
              What We Offer
            </span>
            <h2 className="display-font mt-3 text-3xl font-black sm:text-4xl lg:text-[2.65rem] text-[#0b241b] leading-tight">
              Comprehensive <span className="text-[#8dbb16]">Real Estate Services</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              We specialize in delivering legally approved, high-appreciation residential plotted
              communities with transparent documentation and complete buyer support at every step.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {realEstateServices.map((srv) => {
              const Icon = srv.icon;
              return (
                <div
                  key={srv.title}
                  className="group relative flex flex-col justify-between rounded-3xl bg-white p-7 shadow-xs border border-slate-200 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#174d35]/30"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-emerald-50 text-[#174d35] transition-colors group-hover:bg-[#174d35] group-hover:text-white">
                        <Icon size={26} className="stroke-[2.2]" />
                      </div>
                      <span className="rounded-full bg-lime-100 px-3 py-1 text-[11px] font-extrabold text-[#174d35]">
                        {srv.tag}
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-slate-900 group-hover:text-[#174d35] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                      {srv.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#174d35]">
                    <span>Learn More</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION: Corridor-Based Filterable Project Catalog ("Samples" Overhauled) */}
      <section id="ventures" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="mb-2.5 flex items-center gap-2">
                <span className="inline-block h-[2px] w-6 bg-[#174d35]" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#174d35]">
                  PREMIUM RESIDENTIAL PLOTS
                </span>
              </div>
              <h2 className="display-font text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-[2.65rem] leading-tight">
                Quality Plotted <span className="text-[#8dbb16]">Communities in Vizag</span>
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                Explore legally approved layouts strategically located across Visakhapatnam's fastest
                growing highway, airport, and IT development corridors.
              </p>
            </div>

            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-[#174d35] px-5 py-2.5 text-xs font-bold text-[#174d35] hover:bg-[#174d35] hover:text-white transition-all self-start md:self-end"
            >
              <Download size={14} />
              <span>Download Master Plans PDF</span>
            </button>
          </div>

          {/* Corridor Filter Tabs */}
          <div className="mt-8 flex flex-wrap gap-2 border-b border-slate-200 pb-4">
            {[
              { id: "All", label: "All Ventures" },
              { id: "Bhogapuram", label: "Bhogapuram (Airport Corridor)" },
              { id: "Anandapuram", label: "Anandapuram (Highway Hub)" },
              { id: "Tagarapuvalasa", label: "Tagarapuvalasa (Coastal)" },
              { id: "Modavalasa", label: "Modavalasa & Sontyam" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCorridor(tab.id)}
                className={`rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                  selectedCorridor === tab.id
                    ? "bg-[#174d35] text-white shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Project Cards Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredVentures.map((v) => (
              <article
                key={v.name}
                className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-lime-500/50"
              >
                {/* Image and Badges */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src={v.image}
                    alt={`${v.name} plotted layout in Visakhapatnam`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute left-3.5 top-3.5 flex flex-wrap gap-1.5">
                    <span className="rounded-full bg-emerald-800/95 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-white shadow-xs">
                      {v.approval}
                    </span>
                    <span className="rounded-full bg-black/60 backdrop-blur-md px-2.5 py-1 text-[10px] font-semibold text-lime-300">
                      {v.corridorLabel}
                    </span>
                  </div>

                  <div className="absolute right-3.5 top-3.5">
                    <span className="rounded-full bg-lime-400 text-slate-950 font-black px-2.5 py-0.5 text-[10px] shadow-sm">
                      {v.status}
                    </span>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="display-font text-xl font-bold text-white drop-shadow-sm line-clamp-1">
                      {v.name}
                    </h3>
                  </div>
                </div>

                {/* Body Details */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    {/* Location */}
                    <div className="flex items-start gap-1.5 text-xs font-semibold text-slate-700">
                      <MapPin size={14} className="mt-0.5 shrink-0 text-[#174d35]" />
                      <span className="line-clamp-1">{v.location}</span>
                    </div>

                    {/* Plot Specifications Grid */}
                    <div className="mt-3.5 grid grid-cols-2 gap-2 rounded-2xl bg-slate-50 p-3 text-xs border border-slate-100">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">
                          Plot Sizes
                        </span>
                        <span className="font-bold text-slate-900 mt-0.5 block">{v.size}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">
                          Facing Options
                        </span>
                        <span className="font-bold text-slate-900 mt-0.5 block">{v.facing}</span>
                      </div>
                    </div>

                    {/* Amenity Tags */}
                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {v.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-[#174d35] border border-emerald-100/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 3 Action Buttons: View Details, Download Brochure, WhatsApp Enquiry */}
                  <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-2">
                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        href={`/projects/${v.slug}`}
                        className="flex items-center justify-center gap-1 rounded-xl bg-[#174d35] px-3 py-2.5 text-center text-xs font-bold text-white shadow-sm hover:bg-[#0b241b] transition-colors"
                      >
                        <span>View Details</span>
                        <ArrowRight size={13} />
                      </Link>

                      <button
                        type="button"
                        onClick={() => setIsQuoteModalOpen(true)}
                        className="flex items-center justify-center gap-1 rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-center text-xs font-bold text-slate-800 hover:bg-slate-50 transition-colors"
                      >
                        <Download size={13} className="text-[#174d35]" />
                        <span>Brochure</span>
                      </button>
                    </div>

                    <a
                      href={`https://wa.me/919052867067?text=${encodeURIComponent(
                        `Hi Subhagruha, I am interested in layout "${v.name}" at ${v.location}. Please share Master Plan and price list.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 rounded-xl border border-emerald-600 bg-emerald-50/70 px-3 py-2 text-center text-xs font-bold text-emerald-900 hover:bg-emerald-100 transition-colors"
                    >
                      <WhatsAppIcon className="h-3.5 w-3.5 fill-[#25D366]" />
                      <span>WhatsApp Price List &amp; LP Map</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: Customer Journey (How We Work - Plotted Real Estate Flow) */}
      <section
        id="how-we-work"
        className="relative overflow-hidden bg-gradient-to-r from-[#0b2416] via-[#143e22] to-[#0d2817] py-20 text-white shadow-inner"
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-extrabold tracking-widest text-lime-300 uppercase">
              TRANSPARENT JOURNEY
            </span>
            <h2 className="display-font mt-2 text-3xl font-black sm:text-4xl lg:text-[2.65rem] text-white">
              How We Work: <span className="text-lime-300">From Visit to Spot Registration</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
              Our 5-step transparent process ensures complete peace of mind, verified legal titles,
              and seamless ownership handover.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="relative flex flex-col items-center text-center rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-md transition-all hover:bg-white/10 hover:border-lime-400/40"
                >
                  <span className="absolute -top-3.5 rounded-full bg-lime-400 text-slate-950 font-black px-2.5 py-0.5 text-xs shadow-md">
                    {step.num}
                  </span>
                  <div className="mt-2 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#174d35] shadow-lg">
                    <Icon size={24} className="stroke-[2.2]" />
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-white tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-emerald-100/75">{step.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-7 py-3.5 text-xs sm:text-sm font-black text-slate-950 shadow-xl transition-all hover:bg-lime-300 hover:scale-105 active:scale-95"
            >
              <span>Schedule Your Free Site Visit Now</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION: Pre-Approved Banking Partners (NEW SECTION) */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#174d35]">
              <CreditCard size={14} className="text-[#174d35]" />
              FINANCIAL TIE-UPS
            </span>
            <h2 className="display-font mt-2 text-2xl sm:text-3xl font-bold text-slate-950">
              Pre-Approved Loans by Leading Banks
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
              Enjoy hassle-free financing up to 75% of your plot investment with minimal documentation.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {bankingPartners.map((bank) => (
              <div
                key={bank.name}
                className="flex flex-col items-center justify-center rounded-2xl bg-slate-50 border border-slate-200/90 p-5 text-center transition-all hover:border-[#174d35] hover:bg-white hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-xs border border-slate-200 text-[#174d35] font-black text-sm">
                  {bank.name.split(" ")[0]}
                </div>
                <h4 className="mt-3 text-xs font-bold text-slate-900">{bank.name}</h4>
                <span className="mt-1 rounded-full bg-emerald-100 text-[#174d35] text-[10px] font-extrabold px-2 py-0.5">
                  {bank.rate}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: About Subhagruha Group & Leadership */}
      <section id="about-us" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Founder Image and 20+ Years Legacy Badge */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
                <div className="relative h-[420px] sm:h-[480px] w-full">
                  <Image
                    src="/subhagruha/founder.png"
                    alt="Subhagruha Leadership - Real Estate Developer in Visakhapatnam"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-xs font-extrabold tracking-widest text-lime-400 uppercase">
                      LEADERSHIP VISION
                    </span>
                    <h4 className="display-font text-xl font-bold mt-1">
                      Mr. Namburu Kalyan Chakravarthy
                    </h4>
                    <p className="text-xs text-slate-300">
                      Chairman &amp; Managing Director — Subhagruha Group
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Company Story & Trust Points */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1f6843]/30 bg-[#1f6843]/10 px-3.5 py-1 text-xs font-extrabold tracking-widest text-[#174d35] uppercase">
                ABOUT SUBHAGRUHA GROUP
              </span>
              <h2 className="display-font mt-3 text-3xl font-black sm:text-4xl lg:text-[2.65rem] text-[#0b241b] leading-tight">
                Two Decades of Building <span className="text-[#8dbb16]">Trust in Visakhapatnam</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                Subhagruha is a trusted and reputed real estate development brand across Andhra
                Pradesh and Telangana. With over 20 years of experience, Subhagruha has successfully
                delivered 100+ legally approved plotted townships, serving over 12,000 satisfied
                families and investors.
              </p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                Every layout is developed with wide internal blacktop roads, underground infrastructure,
                green parks, and avenue plantations — positioned strategically along Visakhapatnam's
                prime growth axes including Bhogapuram International Airport and Anandapuram Highway.
              </p>

              {/* 4 Core Pillars */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  ["VMRDA & VUDA Sanctioned", "Legally compliant layouts with complete transparency."],
                  ["Clear 30-Year Titles", "Verified land records with spot registration."],
                  ["100% Vaastu Compliance", "Harmonious layout planning with prime East & North facings."],
                  ["Complete Buyer Support", "End-to-end guidance from site visit to registration."],
                ].map(([title, desc]) => (
                  <div key={title} className="rounded-2xl bg-white p-4 border border-slate-200">
                    <div className="flex items-center gap-2">
                      <CircleCheck size={16} className="text-[#174d35]" />
                      <h4 className="text-xs font-bold text-slate-900">{title}</h4>
                    </div>
                    <p className="mt-1 text-[11px] leading-relaxed text-slate-500">{desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/about-us"
                  className="inline-flex items-center gap-2 rounded-full bg-[#174d35] px-6 py-3 text-xs font-bold text-white hover:bg-[#0b241b] transition-all"
                >
                  <span>Know More About Subhagruha</span>
                  <ArrowRight size={14} />
                </Link>
                <a
                  href="tel:+919052867067"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-xs font-bold text-slate-800 hover:bg-slate-50 transition-all"
                >
                  <Phone size={14} className="text-[#174d35]" />
                  <span>Call: (+91) 9052867067</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Customer Testimonials from subhagruha.net */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-extrabold tracking-widest text-[#174d35] uppercase">
              VERIFIED BUYERS
            </span>
            <h2 className="display-font mt-2 text-3xl font-black sm:text-4xl text-slate-950">
              What Our Plot Owners Say
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Real feedback from families and investors who bought residential plots in our Vizag ventures.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex flex-col justify-between rounded-3xl bg-slate-50 p-6 sm:p-7 border border-slate-200 shadow-xs"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-700 italic">
                    "{t.review}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{t.name}</h4>
                    <p className="text-[11px] text-slate-500">{t.role}</p>
                  </div>
                  <span className="rounded-full bg-emerald-100 text-[#174d35] text-[10px] font-bold px-2.5 py-1">
                    {t.venture}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: Real Estate FAQ Accordion (NEW SECTION) */}
      <section id="faq" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#174d35]">
              <HelpCircle size={14} className="text-[#174d35]" />
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="display-font mt-2 text-3xl font-black sm:text-4xl text-slate-950">
              Everything You Need to Know
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Clear answers regarding VMRDA approvals, bank loans, site visits, and registration.
            </p>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-xs transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm font-bold text-slate-900 hover:text-[#174d35] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-[#174d35] transition-transform duration-300 shrink-0 ml-4 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-3 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strong Call to Action Banner */}
      <section className="relative overflow-hidden bg-[#0b241b] py-20 text-white">
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-lime-400/40 bg-lime-400/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-lime-300">
            SECURE YOUR INVESTMENT TODAY
          </span>
          <h2 className="display-font mt-4 text-3xl font-black sm:text-5xl lg:text-[3.25rem] leading-tight">
            Planning to Invest in <span className="text-lime-300">Visakhapatnam Plots?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-300">
            Book a complimentary door-to-door AC cab site visit with our team, verify approved VMRDA
            LP layout drawings, and select prime East/North facing plots before prices appreciate.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-7 py-4 text-xs sm:text-sm font-black text-slate-950 shadow-xl transition-all hover:bg-lime-300 hover:scale-105 active:scale-95"
            >
              <Navigation size={16} />
              <span>Book Free Cab Site Visit</span>
            </button>
            <a
              href="https://wa.me/919052867067?text=Hi%2C%20I%20want%20to%20consult%20regarding%20Subhagruha%20plots%20in%20Vizag."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-4 text-xs sm:text-sm font-bold text-white shadow-lg transition-all hover:bg-white/20"
            >
              <WhatsAppIcon className="h-4 w-4 fill-[#25D366]" />
              <span>Chat with Advisor</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Contact Info */}
            <div className="lg:col-span-5">
              <span className="text-xs font-extrabold tracking-widest text-[#174d35] uppercase">
                GET IN TOUCH
              </span>
              <h2 className="display-font mt-2 text-3xl font-black text-slate-950 sm:text-4xl">
                Visit Our Visakhapatnam Office
              </h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Connect with our authorized property consultants for brochure copies, master layout
                plans, and transparent price quotations.
              </p>

              <div className="mt-8 space-y-5">
                <ContactItem
                  icon={Phone}
                  label="Direct Call Support"
                  value="(+91) 9052867067 / (+91) 7989097790"
                  href="tel:+919052867067"
                />
                <ContactItem
                  icon={WhatsAppIcon}
                  label="WhatsApp Helpline"
                  value="Chat Directly on WhatsApp"
                  href="https://wa.me/919052867067?text=Hi%2C%20I%20want%20to%20inquire%20about%20plots%20in%20Vizag."
                />
                <ContactItem
                  icon={Mail}
                  label="Email Inquiries"
                  value="janishaik9@gmail.com"
                  href="mailto:janishaik9@gmail.com"
                />
                <ContactItem
                  icon={MapPin}
                  label="Office Address"
                  value="50-50-33/2, J R Plaza, Gurudwara Junction, Visakhapatnam, Andhra Pradesh 530013"
                  href="https://maps.google.com/?q=Gurudwara+Junction+Visakhapatnam"
                />
              </div>
            </div>

            {/* Right: Embedded Interactive Google Map */}
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
                <iframe
                  title="Subhagruha Visakhapatnam Office Location"
                  src="https://maps.google.com/maps?q=50-50-33%2F2%2C+J+R+Plaza%2C+Gurudwara+Junction%2C+Visakhapatnam%2C+Andhra+Pradesh+530013&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="h-[380px] sm:h-[450px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-[#0b241b] text-white pt-16 pb-12 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Col 1 */}
            <div>
              <div className="relative h-12 w-48 mb-4">
                <Image src="/logo.png" alt="VizagPlots Logo" fill className="object-contain" />
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Authorized Marketing Advisory for Subhagruha Group ventures across Visakhapatnam,
                offering clear-title, legally approved plotted townships in prime growth corridors.
              </p>
              <div className="mt-5">
                <FooterSocials />
              </div>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-lime-400 mb-4">
                Growth Corridors
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>• Bhogapuram (Greenfield Airport Zone)</li>
                <li>• Anandapuram (Highway Commercial Hub)</li>
                <li>• Tagarapuvalasa (Coastal Residential Corridor)</li>
                <li>• Bheemannadorapalem Township Zone</li>
                <li>• Sontyam &amp; Modavalasa Corridor</li>
                <li>• Madhurawada &amp; Kapuluppada IT SEZ</li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-lime-400 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>
                  <Link href="/about-us" className="hover:text-lime-300 transition-colors">
                    About Subhagruha
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-lime-300 transition-colors">
                    All Plotted Ventures
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-lime-300 transition-colors">
                    Real Estate Buyer Guides
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-lime-300 transition-colors">
                    Contact &amp; Site Visit
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="hover:text-lime-300 transition-colors text-left"
                  >
                    Request a Quote
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-lime-400 mb-4">
                Office Location
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                50-50-33/2, J R Plaza, Gurudwara Junction, Visakhapatnam, Andhra Pradesh 530013
              </p>
              <p className="mt-3 text-xs text-slate-300">
                <strong className="text-white">Phone:</strong> (+91) 9052867067
              </p>
              <p className="text-xs text-slate-300 mt-1">
                <strong className="text-white">Email:</strong> janishaik9@gmail.com
              </p>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
            <span>© 2026 Subhagruha Projects / VizagPlots. All rights reserved.</span>
            <span>VMRDA &amp; AP RERA Approved Residential Plotted Townships</span>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/919052867067?text=Hi%20VizagPlots%2C%20I%20am%20interested%20in%20learning%20more%20about%20Subhagruha%20ventures."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform hover:scale-110 active:scale-95 group"
      >
        <WhatsAppIcon className="h-7 w-7 fill-white" />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>

      {/* Enquiry / Brochure Modal */}
      <EnquiryModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </main>
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
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-[#174d35] transition-colors group-hover:bg-[#174d35] group-hover:text-white">
        <Icon size={18} />
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{label}</p>
        <p className="mt-0.5 text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#174d35] transition-colors">
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