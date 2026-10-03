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
      <div className="relative flex h-[106px] w-[106px] sm:h-[122px] sm:w-[122px] items-center justify-center rounded-full border-2 border-dashed border-lime-400 bg-slate-950/90 p-1 shadow-[0_0_30px_rgba(163,230,53,0.5)] backdrop-blur-md">
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
    label: "Total Years of Legacy",
    desc: "Unbroken record of on-time delivery",
    icon: Award,
  },
  {
    num: "158",
    suffix: "M+",
    label: "Million Sq. Ft. Delivered",
    desc: "Master-planned residential space",
    icon: Building2,
  },
  {
    num: "12",
    suffix: "K+",
    label: "Happy Families & Investors",
    desc: "Across AP, Telangana & NRI diaspora",
    icon: Users,
  },
  {
    num: "100",
    suffix: "+",
    label: "Sanctioned Plotted Ventures",
    desc: "VMRDA, HMDA & RERA compliant",
    icon: MapPin,
  },
];

// Subhagruha's 6 True Real Estate Plotted Services
const realEstateServices = [
  {
    num: "01",
    title: "VMRDA & RERA Approved Layouts",
    desc: "100% legally scrutinized residential plots with clear titles, sanctioned LP drawings, and immediate spot registration at local Sub-Registrar offices.",
    icon: ShieldCheck,
    tag: "Legally Verified",
    badge: "100% Clear Title",
  },
  {
    num: "02",
    title: "Complimentary Cab Site Visit",
    desc: "Free doorstep pickup & drop in comfortable AC cabs for your entire family to inspect prime ventures across Visakhapatnam growth corridors.",
    icon: Navigation,
    tag: "Family Convenience",
    badge: "Free Doorstep AC Cab",
  },
  {
    num: "03",
    title: "30-Year Legal Title Scrutiny",
    desc: "Complete documentation transparency with 30-year link deeds, Encumbrance Certificates (EC), and official legal scrutiny reports available before commitment.",
    icon: FileCheck2,
    tag: "Zero Legal Risk",
    badge: "Full Transparency",
  },
  {
    num: "04",
    title: "Pre-Approved Bank Loans (Up to 75%)",
    desc: "Direct tie-ups with leading nationalized banks including SBI, HDFC Bank, Axis Bank, and LIC Housing Finance for rapid plot loan sanctions with minimal paperwork.",
    icon: CreditCard,
    tag: "Low Interest Rates",
    badge: "SBI & HDFC Approved",
  },
  {
    num: "05",
    title: "Gated Township Infrastructure",
    desc: "33ft, 40ft & 60ft wide BT blacktop roads, underground drainage, avenue plantations, overhead water storage, and 24/7 security with grand entrance arches.",
    icon: Trees,
    tag: "Luxury Community",
    badge: "Ready Infrastructure",
  },
  {
    num: "06",
    title: "Dedicated NRI Property Desk",
    desc: "Tailored assistance for Non-Resident Indians including FEMA compliance, Power of Attorney (PoA) guidance, digital video walkthroughs, and capital appreciation advisory.",
    icon: Globe2,
    tag: "Global Investors",
    badge: "FEMA Compliant",
  },
];

// Corridor-Categorized Projects with pricing and real estate specs
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
    facing: "East & North Facing",
    priceStarting: "₹14,500 / Sq. Yd",
    totalEst: "From ₹24 Lakhs",
    status: "Active Sale",
    image: "/subhagruha/proj-sukrithi-saanvi4.jpg",
    tags: ["Airport Frontage", "Grand Arch Entrance", "Overhead Tank", "Avenue Plantation"],
    featured: true,
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
    facing: "East, West & Corner Units",
    priceStarting: "₹13,800 / Sq. Yd",
    totalEst: "From ₹21 Lakhs",
    status: "Active Sale",
    image: "/subhagruha/proj-sukrithi-lohitha.jpg",
    tags: ["Highway Connectivity", "Underground Drainage", "Blacktop Roads", "Park Zone"],
    featured: true,
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
    priceStarting: "₹12,500 / Sq. Yd",
    totalEst: "From ₹19 Lakhs",
    status: "For Sale",
    image: "/subhagruha/sukrithi-windsor.jpg",
    tags: ["Compound Wall", "Street Lighting", "24/7 Guard", "100% Vaastu"],
    featured: true,
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
    priceStarting: "₹11,500 / Sq. Yd",
    totalEst: "From ₹23 Lakhs",
    status: "For Sale",
    image: "/subhagruha/maple-meadows.png",
    tags: ["Grand Arch", "Tree-Lined Roads", "Green Children Park", "Water Tap Connection"],
    featured: false,
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
    priceStarting: "₹13,200 / Sq. Yd",
    totalEst: "From ₹22 Lakhs",
    status: "Active Sale",
    image: "/subhagruha/gallery-saanvi.png",
    tags: ["Near Educational Hubs", "33ft BT Roads", "Electricity Lines", "Immediate Spot Reg"],
    featured: false,
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
    priceStarting: "₹10,800 / Sq. Yd",
    totalEst: "From ₹16.5 Lakhs",
    status: "Active Sale",
    image: "/subhagruha/proj-sukrithi-sampath.jpg",
    tags: ["Sontyam Hub", "Immediate Registration", "Avenue Trees", "Bank Loan Assistance"],
    featured: false,
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
    priceStarting: "₹12,800 / Sq. Yd",
    totalEst: "From ₹21.5 Lakhs",
    status: "Active Sale",
    image: "/subhagruha/proj-sukrithi-nivas.jpg",
    tags: ["Bheemili Connectivity", "Clear Title Deeds", "Parks & Play Area", "Wide Roads"],
    featured: false,
  },
  {
    name: "Sukruthi Ananthika",
    slug: "sukruthi-ananthika",
    corridor: "Anandapuram",
    corridorLabel: "Highway Growth Corridor",
    location: "Srikakulam - Vizag National Highway, Visakhapatnam",
    approval: "VMRDA Approved",
    lpNo: "VMRDA Sanctioned",
    size: "12,000 Sq.Ft Layout",
    facing: "West & North Facing",
    priceStarting: "Premium Highway",
    totalEst: "Enquire for Price",
    status: "Upcoming Venture",
    image: "/subhagruha/sukruthi-ananthika.jpg",
    tags: ["Direct NH-16 Frontage", "Near Oakridge Corridor", "Gated Township", "Lush Parks"],
    featured: false,
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
    priceStarting: "₹9,500 / Sq. Yd",
    totalEst: "From ₹12.5 Lakhs",
    status: "For Sale",
    image: "/subhagruha/sukrithi-sathvik.png",
    tags: ["Gated Security", "Overhead Water Tank", "Avenue Trees", "Bank Loan Support"],
    featured: false,
  },
];

// The Real Estate Customer Journey
const processSteps = [
  {
    num: "01",
    title: "Free Cab Site Visit",
    desc: "Complimentary door-to-door AC cab pickup for your family to inspect layout developments firsthand.",
    icon: Navigation,
  },
  {
    num: "02",
    title: "Plot & Facing Selection",
    desc: "Choose East/North facing plots, corner units, and preferred sizes (167 - 500 Sq. Yds) with Vaastu alignment.",
    icon: Compass,
  },
  {
    num: "03",
    title: "Legal & Title Verification",
    desc: "Review VMRDA LP approvals, 30-year link documents, and RERA compliance with 100% legal transparency.",
    icon: FileCheck2,
  },
  {
    num: "04",
    title: "Bank Loan Assistance",
    desc: "Pre-approved loans up to 75% arranged through SBI, HDFC Bank, Axis Bank & LIC Housing Finance.",
    icon: CreditCard,
  },
  {
    num: "05",
    title: "Spot Registration",
    desc: "Execution of the registered sale deed at the local Sub-Registrar office with instant patta handover.",
    icon: KeyRound,
  },
];

// Pre-Approved Banking Partners
const bankingPartners = [
  { name: "State Bank of India", badge: "SBI Home & Plot Loan", rate: "Pre-Approved 75%" },
  { name: "HDFC Bank", badge: "HDFC Home Loans", rate: "Fast Sanction" },
  { name: "Axis Bank", badge: "Axis Bank Home Loan", rate: "Low Interest" },
  { name: "Tata Capital", badge: "Tata Housing Finance", rate: "Flexible Tenure" },
  { name: "ICICI Bank", badge: "ICICI Home Loans", rate: "Minimal Paperwork" },
];

// Verified Customer Testimonials
const testimonials = [
  {
    name: "Keshav Atal",
    role: "Verified Plot Owner",
    venture: "Sukrithi Avanthika",
    rating: 5,
    review:
      "Subhagruha Plots offers exceptional care and responsible service. My family is extremely satisfied with the respect and transparency they provide to customers — truly among the best real estate teams in Visakhapatnam.",
  },
  {
    name: "Samantra Smruti",
    role: "NRI Land Investor",
    venture: "Bhogapuram Airport Corridor",
    rating: 5,
    review:
      "Investing in Subhagruha plots in the Bhogapuram corridor was one of my best financial decisions. With highway connectivity, clear titles, and VMRDA-approved layout drawings, the team guided me smoothly through remote documentation.",
  },
  {
    name: "Eswar Abhinav",
    role: "Homeowner",
    venture: "Sukrithi Windsor",
    rating: 5,
    review:
      "I recently purchased a 150 sq. yard plot from Subhagruha and had a seamless experience. Their loan support with SBI and clear title documentation make them the most dependable choice in Vizag.",
  },
  {
    name: "Shaik Mahaboob Roshan",
    role: "Verified Buyer",
    venture: "Anandapuram Corridor",
    rating: 5,
    review:
      "Subhagruha's projects in Vizag offer peaceful, secure living with well-planned gated communities, wide blacktop roads, underground water lines, and quick connectivity to top schools, hospitals, and national highways.",
  },
  {
    name: "Mahidhar Ponnada",
    role: "Long-term Investor",
    venture: "Sukrithi Sathvik",
    rating: 5,
    review:
      "We invested in two Subhagruha plots and are extremely satisfied. The venture is fully developed with compound walls, security gates, and avenue plantations, providing huge value appreciation.",
  },
];

// Real Estate FAQ
const faqs = [
  {
    q: "Are Subhagruha ventures approved by VMRDA & VUDA?",
    a: "Yes. All Subhagruha residential plotted townships across Visakhapatnam are developed in accordance with the strict regulatory standards of the Visakhapatnam Metropolitan Region Development Authority (VMRDA / VUDA) with clear titles, sanctioned LP drawings, and complete documentation.",
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

  // Auto-play slider
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
    <main className="min-h-screen bg-white text-slate-900 antialiased selection:bg-lime-400 selection:text-slate-950 font-sans">
      {/* Top Banner Ribbon */}
      <div className="bg-[#071f16] px-4 py-2 text-center text-xs font-semibold text-white/90 border-b border-lime-400/20 shadow-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-lime-400 animate-ping" />
            <span className="text-lime-300 font-extrabold uppercase tracking-widest text-[11px]">
              VMRDA &amp; VUDA Approved Townships
            </span>
            <span className="hidden md:inline text-white/60">· 20+ Years of Trusted Real Estate Excellence</span>
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
              className="hidden sm:flex items-center gap-1.5 text-lime-300 hover:text-lime-200"
            >
              <WhatsAppIcon className="h-3.5 w-3.5 fill-lime-400" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl shadow-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
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

          <nav className="hidden items-center gap-8 lg:flex">
            {mainNavLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-bold tracking-tight transition-all hover:text-[#123e2c] ${
                  link.active
                    ? "text-[#123e2c] border-b-2 border-lime-500 pb-1"
                    : "text-slate-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#123e2c] to-[#071f16] border border-lime-400/40 px-5 py-2.5 text-xs font-black text-white shadow-[0_4px_14px_rgba(7,31,22,0.25)] transition-all hover:shadow-[0_6px_20px_rgba(184,234,28,0.35)] hover:scale-105 active:scale-95"
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
                    link.active ? "text-[#123e2c]" : "text-slate-700"
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
                  className="flex items-center justify-center gap-2 rounded-full bg-[#123e2c] py-3 text-xs font-bold text-white shadow-sm"
                >
                  <Navigation size={14} className="text-lime-400" />
                  <span>Book Free Cab Site Visit</span>
                </button>
                <a
                  href="tel:+919052867067"
                  className="flex items-center justify-center gap-2 rounded-full border border-slate-300 py-2.5 text-xs font-bold text-slate-800"
                >
                  <Phone size={14} className="text-[#123e2c]" />
                  <span>Call: (+91) 9052867067</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Banner Section with Luxury Glassmorphic VIP Concierge Form */}
      <section
        id="home"
        className="relative min-h-[580px] lg:min-h-[660px] text-white flex items-center overflow-hidden border-b border-slate-200 bg-slate-950"
      >
        {/* Animated Stamp Seal Badge */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-20 pointer-events-none">
          <OfficialStampBadge />
        </div>

        {/* Cross-fade Background Slider */}
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
                className="object-cover object-center scale-102"
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
            <div className="absolute inset-0 bg-slate-950/80" />
          </div>
        ))}

        {/* Hero Content: 2-Column Luxury Grid */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Architectural Luxury Headline */}
            <div className="lg:col-span-7 pt-12 md:pt-0">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-lime-400/50 bg-[#071f16]/95 px-4 py-1.5 text-xs font-black tracking-widest text-lime-300 shadow-[0_0_20px_rgba(163,230,53,0.3)] backdrop-blur-md">
                <ShieldCheck size={15} className="text-lime-400" />
                <span>VMRDA &amp; VUDA APPROVED TOWNSHIPS</span>
              </div>

              <h1 className="display-font text-3xl font-extrabold sm:text-5xl lg:text-[3.5rem] leading-[1.08] text-white [text-shadow:_0_2px_20px_rgba(0,0,0,0.9)]">
                Leading Real Estate
                <br />
                <span className="bg-gradient-to-r from-lime-300 via-emerald-200 to-lime-400 bg-clip-text text-transparent font-black italic">
                  Company in Vizag
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-slate-200 font-medium">
                Over 20 years of trusted legacy delivering clear-title, legally approved residential
                plotted layouts across Visakhapatnam's high-growth corridors — Bhogapuram Airport
                Corridor, Anandapuram, Tagarapuvalasa, and Sontyam.
              </p>

              {/* 3 Luxury Floating Trust Chips */}
              <div className="mt-6 flex flex-wrap items-center gap-2.5 text-xs font-bold text-white">
                <span className="inline-flex items-center gap-1.5 rounded-xl bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/20 shadow-md">
                  <BadgeCheck size={15} className="text-lime-400" />
                  Immediate Spot Registration
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-xl bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/20 shadow-md">
                  <BadgeCheck size={15} className="text-lime-400" />
                  100% Vaastu Compliant
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-xl bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/20 shadow-md">
                  <BadgeCheck size={15} className="text-lime-400" />
                  Up to 75% Bank Loan Approved
                </span>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#ventures"
                  className="inline-flex items-center gap-2 rounded-full bg-lime-400 hover:bg-lime-300 px-7 py-3.5 text-xs sm:text-sm font-black text-slate-950 shadow-[0_6px_25px_rgba(163,230,53,0.35)] transition-all hover:scale-105 active:scale-95"
                >
                  <span>Explore Plotted Ventures</span>
                  <ArrowRight size={16} />
                </a>
                <a
                  href="tel:+919052867067"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/30 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg transition-all hover:bg-white/20"
                >
                  <Phone size={15} className="text-lime-300" />
                  <span>Call: (+91) 9052867067</span>
                </a>
              </div>
            </div>

            {/* Right Column: Luxury VIP Concierge Form */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-lime-400/40 bg-slate-950/90 p-6 sm:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl">
                <div className="mb-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-lime-400/15 border border-lime-400/30 px-3 py-0.5 text-[10px] font-black uppercase tracking-widest text-lime-300">
                    <Sparkles size={11} className="text-lime-400" />
                    Complimentary VIP Service
                  </span>
                  <h3 className="display-font text-xl sm:text-2xl font-bold text-white mt-1.5">
                    Book Free Cab &amp; Site Visit
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Doorstep AC cab pickup for your family with on-site venture inspection and layout blueprints.
                  </p>
                </div>

                {leadSuccess ? (
                  <div className="rounded-2xl bg-emerald-950/80 border border-emerald-500/50 p-6 text-center animate-in fade-in">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400 text-slate-950 shadow-md">
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
                        className="w-full rounded-xl border border-white/20 bg-white/10 px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400/40 transition-all"
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
                        className="w-full rounded-xl border border-white/20 bg-white/10 px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400/40 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                        Select Growth Corridor / Project
                      </label>
                      <select
                        value={leadProject}
                        onChange={(e) => setLeadProject(e.target.value)}
                        className="w-full rounded-xl border border-white/20 bg-slate-900 px-3.5 py-2.5 text-xs text-white focus:border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400/40 transition-all"
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
                        className="w-full rounded-xl border border-white/20 bg-slate-900 px-3.5 py-2.5 text-xs text-white focus:border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400/40 transition-all"
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
                      className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-lime-400 hover:bg-lime-300 py-3 text-xs font-black uppercase tracking-wider text-slate-950 shadow-[0_4px_20px_rgba(163,230,53,0.35)] transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 cursor-pointer"
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

        {/* Slide Controls */}
        <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
          <div className="flex items-center gap-1.5 rounded-full bg-black/75 backdrop-blur-md p-1 border border-white/20">
            {heroSlides.map((slide, idx) => (
              <button
                key={slide.label}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                className={`rounded-full px-2.5 py-1 text-[11px] font-bold transition-all cursor-pointer ${
                  idx === currentSlide
                    ? "bg-lime-400 text-slate-950 shadow-sm"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {slide.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Elevated Statistics Bar */}
      <section className="relative z-20 -mt-8 sm:-mt-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 rounded-3xl bg-white/95 backdrop-blur-xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(7,31,22,0.12)] border border-slate-100">
          {companyStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`flex items-center gap-4 pr-2 ${
                  idx % 2 === 0 ? "border-r border-slate-100" : ""
                } ${idx < 2 ? "border-b pb-4 sm:border-b-0 sm:pb-0" : ""} ${
                  idx < 3 ? "lg:border-r border-slate-100" : "lg:border-r-0"
                }`}
              >
                <div className="flex h-13 w-13 sm:h-15 sm:w-15 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-50 to-lime-50 text-[#123e2c] border border-emerald-100 shadow-xs">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-[#123e2c]" />
                </div>
                <div>
                  <div className="display-font text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#071f16]">
                    {stat.num}
                    <span className="text-[#8dbb16]">{stat.suffix}</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5 leading-snug">
                    {stat.label}
                  </p>
                  <p className="hidden sm:block text-[11px] text-slate-500 mt-0.5">
                    {stat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 2: About Subhagruha Group & Leadership (Two Decades of Building Trust) */}
      <section id="about-us" className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Founder Image and 20+ Years Legacy Badge */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
                <div className="relative h-[440px] sm:h-[500px] w-full">
                  <Image
                    src="/subhagruha/founder.png"
                    alt="Subhagruha Leadership - Real Estate Developer in Visakhapatnam"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-xs font-extrabold tracking-widest text-lime-400 uppercase">
                      LEADERSHIP VISION
                    </span>
                    <h4 className="display-font text-2xl font-bold mt-1">
                      Mr. Namburu Kalyan Chakravarthy
                    </h4>
                    <p className="text-xs text-slate-300 font-medium">
                      Chairman &amp; Managing Director — Subhagruha Group
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Company Story & Trust Points */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1f6843]/30 bg-[#1f6843]/10 px-4 py-1 text-xs font-extrabold tracking-widest text-[#123e2c] uppercase">
                ABOUT SUBHAGRUHA GROUP
              </span>
              <h2 className="display-font mt-3.5 text-3xl font-black sm:text-4xl lg:text-[2.75rem] text-[#071f16] leading-tight">
                Two Decades of Building <span className="text-[#8dbb16]">Trust in Visakhapatnam</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-medium">
                Subhagruha is a trusted and reputed real estate development brand across Andhra
                Pradesh and Telangana. With over 20 years of experience, Subhagruha has successfully
                delivered 100+ legally approved plotted townships, serving over 12,000 satisfied
                families and investors.
              </p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 font-medium">
                Every layout is developed with wide internal blacktop roads, underground infrastructure,
                green parks, and avenue plantations — positioned strategically along Visakhapatnam's
                prime growth axes including Bhogapuram International Airport and Anandapuram Highway.
              </p>

              {/* 4 Core Pillars */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  ["VMRDA & VUDA Sanctioned", "Legally compliant layouts with complete transparency."],
                  ["Clear 30-Year Titles", "Verified land records with spot registration."],
                  ["100% Vaastu Compliance", "Harmonious layout planning with prime East & North facings."],
                  ["Complete Buyer Support", "End-to-end guidance from site visit to registration."],
                ].map(([title, desc]) => (
                  <div key={title} className="rounded-2xl bg-white p-4 border border-slate-200/90 shadow-xs">
                    <div className="flex items-center gap-2">
                      <CircleCheck size={17} className="text-[#123e2c]" />
                      <h4 className="text-xs font-bold text-slate-900">{title}</h4>
                    </div>
                    <p className="mt-1 text-[11px] leading-relaxed text-slate-500">{desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/about-us"
                  className="inline-flex items-center gap-2 rounded-full bg-[#123e2c] px-7 py-3.5 text-xs font-bold text-white hover:bg-[#071f16] transition-all shadow-md"
                >
                  <span>Know More About Subhagruha</span>
                  <ArrowRight size={14} />
                </Link>
                <a
                  href="tel:+919052867067"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-xs font-bold text-slate-800 hover:bg-slate-50 transition-all shadow-xs"
                >
                  <Phone size={14} className="text-[#123e2c]" />
                  <span>Call: (+91) 9052867067</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Corridor-Based Filterable Project Catalog ("Samples" Overhauled) */}
      <section id="ventures" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="mb-2.5 flex items-center gap-2">
                <span className="inline-block h-[2px] w-6 bg-[#123e2c]" />
                <span className="text-xs font-black uppercase tracking-wider text-[#123e2c]">
                  PRIME RESIDENTIAL PLOTS
                </span>
              </div>
              <h2 className="display-font text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-[2.75rem] leading-tight">
                Quality Plotted <span className="text-[#8dbb16]">Communities in Vizag</span>
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                Explore legally approved layouts strategically located across Visakhapatnam's fastest
                growing highway, airport, and IT development corridors.
              </p>
            </div>

            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#123e2c] px-6 py-3 text-xs font-black text-[#123e2c] hover:bg-[#123e2c] hover:text-white transition-all self-start md:self-end shadow-xs cursor-pointer"
            >
              <Download size={15} />
              <span>Download Master Plans PDF</span>
            </button>
          </div>

          {/* Corridor Filter Tabs */}
          <div className="mt-10 flex flex-wrap gap-2.5 border-b border-slate-200 pb-5">
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
                className={`rounded-full px-5 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                  selectedCorridor === tab.id
                    ? "bg-[#123e2c] text-white shadow-md scale-102"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Project Cards Grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVentures.map((v) => (
              <article
                key={v.name}
                className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(7,31,22,0.14)] hover:border-lime-400"
              >
                {/* Image and Badges */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  <img
                    src={v.image}
                    alt={`${v.name} plotted layout in Visakhapatnam`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-emerald-900/95 backdrop-blur-md px-3 py-1 text-[11px] font-extrabold text-white shadow-sm border border-emerald-500/30">
                      {v.approval}
                    </span>
                    <span className="rounded-full bg-black/70 backdrop-blur-md px-3 py-1 text-[10px] font-bold text-lime-300 border border-white/20">
                      {v.corridorLabel}
                    </span>
                  </div>

                  <div className="absolute right-4 top-4">
                    <span className="rounded-full bg-lime-400 text-slate-950 font-black px-3 py-1 text-[10px] shadow-sm">
                      {v.status}
                    </span>
                  </div>

                  {/* Title & Pricing Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="rounded-md bg-white/20 backdrop-blur-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-lime-300">
                      {v.priceStarting}
                    </span>
                    <h3 className="display-font text-2xl font-black text-white drop-shadow-md mt-1 line-clamp-1">
                      {v.name}
                    </h3>
                  </div>
                </div>

                {/* Body Details */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    {/* Location */}
                    <div className="flex items-start gap-1.5 text-xs font-semibold text-slate-700">
                      <MapPin size={15} className="mt-0.5 shrink-0 text-[#123e2c]" />
                      <span className="line-clamp-1">{v.location}</span>
                    </div>

                    {/* Plot Specifications Grid */}
                    <div className="mt-4 grid grid-cols-2 gap-3 rounded-2xl bg-slate-50 p-3.5 text-xs border border-slate-100">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                          Plot Sizes
                        </span>
                        <span className="font-bold text-slate-900 mt-0.5 block">{v.size}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                          Facing Options
                        </span>
                        <span className="font-bold text-slate-900 mt-0.5 block">{v.facing}</span>
                      </div>
                    </div>

                    {/* Amenity Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {v.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg bg-emerald-50/80 px-2.5 py-1 text-[11px] font-semibold text-[#123e2c] border border-emerald-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 3 Action Buttons: View Details, Download Brochure, WhatsApp Enquiry */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        href={`/projects/${v.slug}`}
                        className="flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#123e2c] to-[#071f16] px-3 py-2.5 text-center text-xs font-bold text-white shadow-sm hover:shadow-md transition-all"
                      >
                        <span>View Details</span>
                        <ArrowRight size={13} />
                      </Link>

                      <button
                        type="button"
                        onClick={() => setIsQuoteModalOpen(true)}
                        className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-center text-xs font-bold text-slate-800 hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        <Download size={13} className="text-[#123e2c]" />
                        <span>Brochure</span>
                      </button>
                    </div>

                    <a
                      href={`https://wa.me/919052867067?text=${encodeURIComponent(
                        `Hi Subhagruha, I am interested in layout "${v.name}" at ${v.location}. Please share Master Plan, LP number and price list.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 rounded-xl border border-emerald-500 bg-emerald-50 px-3 py-2.5 text-center text-xs font-black text-emerald-950 hover:bg-emerald-100 transition-colors shadow-xs"
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
        className="relative overflow-hidden bg-gradient-to-b from-[#071f16] via-[#0b291d] to-[#071f16] py-24 text-white shadow-inner"
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-extrabold tracking-widest text-lime-300 uppercase">
              TRANSPARENT 5-STEP PROCESS
            </span>
            <h2 className="display-font mt-3 text-3xl font-black sm:text-4xl lg:text-[2.75rem] text-white">
              How We Work: <span className="text-lime-300 italic font-black">From Site Visit to Registration</span>
            </h2>
            <p className="mt-3 text-sm text-emerald-100/80 leading-relaxed font-medium">
              Our 5-step transparent process ensures complete peace of mind, verified legal titles,
              and seamless ownership handover.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="relative flex flex-col items-center text-center rounded-3xl bg-white/5 border border-white/10 p-7 backdrop-blur-md transition-all hover:bg-white/10 hover:border-lime-400/50 hover:-translate-y-1"
                >
                  <span className="absolute -top-3.5 rounded-full bg-lime-400 text-slate-950 font-black px-3 py-0.5 text-xs shadow-md">
                    {step.num}
                  </span>
                  <div className="mt-2 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#123e2c] shadow-xl">
                    <Icon size={28} className="stroke-[2.2]" />
                  </div>
                  <h3 className="mt-5 text-sm font-bold text-white tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-emerald-100/75">{step.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-14 text-center">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-lime-400 via-emerald-400 to-lime-300 px-8 py-4 text-xs sm:text-sm font-black text-slate-950 shadow-[0_6px_30px_rgba(163,230,53,0.4)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Schedule Your Free Site Visit Now</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION: Pre-Approved Banking Partners */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-[#123e2c]">
              <CreditCard size={15} className="text-[#8dbb16]" />
              FINANCIAL INSTITUTION TIE-UPS
            </span>
            <h2 className="display-font mt-2 text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950">
              Pre-Approved Loans by Leading Banks
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium">
              Enjoy hassle-free financing up to 75% of your plot investment with minimal documentation and low interest rates.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {bankingPartners.map((bank) => (
              <div
                key={bank.name}
                className="group flex flex-col items-center justify-center rounded-3xl bg-slate-50 border border-slate-200/90 p-6 text-center transition-all duration-300 hover:border-[#123e2c] hover:bg-white hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm border border-slate-200 text-[#123e2c] font-black text-base group-hover:bg-[#123e2c] group-hover:text-white transition-colors">
                  {bank.name.split(" ")[0]}
                </div>
                <h4 className="mt-4 text-xs font-bold text-slate-900">{bank.name}</h4>
                <span className="mt-1.5 rounded-full bg-emerald-100 text-[#071f16] text-[10px] font-black px-2.5 py-0.5">
                  {bank.rate}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Our Real Estate Plotted Services (Comprehensive Real Estate Services) */}
      <section id="services" className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1f6843]/30 bg-[#1f6843]/10 px-4 py-1 text-xs font-black tracking-widest text-[#123e2c] uppercase">
              PLOTTED TOWNSHIP EXPERTISE
            </span>
            <h2 className="display-font mt-3.5 text-3xl font-black sm:text-4xl lg:text-[2.75rem] text-[#071f16] leading-tight">
              Comprehensive <span className="text-[#8dbb16]">Real Estate Services</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
              We specialize in delivering legally approved, high-appreciation residential plotted
              communities with transparent documentation and complete buyer support at every step.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {realEstateServices.map((srv) => {
              const Icon = srv.icon;
              return (
                <div
                  key={srv.title}
                  className="group relative flex flex-col justify-between rounded-3xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-slate-200/90 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(7,31,22,0.1)] hover:border-lime-400"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-50 to-lime-50 text-[#123e2c] border border-emerald-100/80 transition-all group-hover:bg-[#123e2c] group-hover:text-white group-hover:border-[#123e2c] shadow-xs">
                        <Icon size={26} className="stroke-[2.2]" />
                      </div>
                      <span className="rounded-full bg-lime-100/80 border border-lime-300/60 px-3 py-1 text-[11px] font-extrabold text-[#071f16]">
                        {srv.badge}
                      </span>
                    </div>

                    <h3 className="mt-6 text-lg font-bold text-slate-900 group-hover:text-[#123e2c] transition-colors leading-snug">
                      {srv.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
                      {srv.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#123e2c]">
                    <span className="font-extrabold uppercase tracking-wider text-[11px] text-[#8dbb16]">
                      {srv.tag}
                    </span>
                    <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Learn More <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION: Customer Testimonials from subhagruha.net */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-extrabold tracking-widest text-[#123e2c] uppercase">
              VERIFIED BUYERS
            </span>
            <h2 className="display-font mt-2 text-3xl font-black sm:text-4xl text-slate-950">
              What Our Plot Owners Say
            </h2>
            <p className="mt-2 text-sm text-slate-600 font-medium">
              Real feedback from families and investors who bought residential plots in our Vizag ventures.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-7">
            {testimonials.slice(0, 3).map((t) => (
              <div
                key={t.name}
                className="flex flex-col justify-between rounded-3xl bg-slate-50 p-7 sm:p-8 border border-slate-200/90 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-700 italic">
                    "{t.review}"
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{t.name}</h4>
                    <p className="text-[11px] text-slate-500 font-medium">{t.role}</p>
                  </div>
                  <span className="rounded-full bg-emerald-100 text-[#071f16] text-[10px] font-black px-3 py-1">
                    {t.venture}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: Real Estate FAQ Accordion */}
      <section id="faq" className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-[#123e2c]">
              <HelpCircle size={15} className="text-[#8dbb16]" />
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="display-font mt-2.5 text-3xl font-black sm:text-4xl text-slate-950">
              Everything You Need to Know
            </h2>
            <p className="mt-2 text-sm text-slate-600 font-medium">
              Clear answers regarding VMRDA approvals, bank loans, site visits, and registration.
            </p>
          </div>

          <div className="mt-12 space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-xs transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm font-bold text-slate-900 hover:text-[#123e2c] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-[#123e2c] transition-transform duration-300 shrink-0 ml-4 ${
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
      <section className="relative overflow-hidden bg-[#071f16] py-24 text-white">
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-lime-400/40 bg-lime-400/10 px-4 py-1 text-xs font-black uppercase tracking-widest text-lime-300">
            SECURE YOUR INVESTMENT TODAY
          </span>
          <h2 className="display-font mt-4 text-3xl font-black sm:text-5xl lg:text-[3.5rem] leading-tight">
            Planning to Invest in <span className="text-lime-300 italic">Visakhapatnam Plots?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-300 font-medium">
            Book a complimentary door-to-door AC cab site visit with our team, verify approved VMRDA
            LP layout drawings, and select prime East/North facing plots before prices appreciate.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-lime-400 via-emerald-400 to-lime-300 px-8 py-4 text-xs sm:text-sm font-black text-slate-950 shadow-[0_6px_30px_rgba(163,230,53,0.4)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Navigation size={16} />
              <span>Book Free Cab Site Visit</span>
            </button>
            <a
              href="https://wa.me/919052867067?text=Hi%2C%20I%20want%20to%20consult%20regarding%20Subhagruha%20plots%20in%20Vizag."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-xs sm:text-sm font-bold text-white shadow-lg transition-all hover:bg-white/20"
            >
              <WhatsAppIcon className="h-4 w-4 fill-[#25D366]" />
              <span>Chat with Advisor</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Contact Info */}
            <div className="lg:col-span-5">
              <span className="text-xs font-black tracking-widest text-[#123e2c] uppercase">
                GET IN TOUCH
              </span>
              <h2 className="display-font mt-2.5 text-3xl font-black text-slate-950 sm:text-4xl">
                Visit Our Visakhapatnam Office
              </h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed font-medium">
                Connect with our authorized property consultants for brochure copies, master layout
                plans, and transparent price quotations.
              </p>

              <div className="mt-9 space-y-5">
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
              <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
                <iframe
                  title="Subhagruha Visakhapatnam Office Location"
                  src="https://maps.google.com/maps?q=50-50-33%2F2%2C+J+R+Plaza%2C+Gurudwara+Junction%2C+Visakhapatnam%2C+Andhra+Pradesh+530013&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="h-[400px] sm:h-[460px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-[#071f16] text-white pt-18 pb-12 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Col 1 */}
            <div>
              <div className="relative h-12 w-48 mb-4">
                <Image src="/logo.png" alt="VizagPlots Logo" fill className="object-contain" />
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
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
                    className="hover:text-lime-300 transition-colors text-left cursor-pointer"
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
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-50 to-lime-50 text-[#123e2c] border border-emerald-100 transition-colors group-hover:bg-[#123e2c] group-hover:text-white">
        <Icon size={19} />
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{label}</p>
        <p className="mt-0.5 text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#123e2c] transition-colors">
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