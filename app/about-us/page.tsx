"use client";

import {
  ArrowRight,
  Award,
  Building2,
  Check,
  ChevronRight,
  CircleCheck,
  Compass,
  FileCheck,
  FileText,
  HeartHandshake,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import EnquiryModal from "../EnquiryModal";
import FooterSocials from "../FooterSocials";

function WhatsAppIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.05 20.15ZM16.57 14.43C16.32 14.31 15.1 13.71 14.87 13.63C14.65 13.54 14.48 13.5 14.32 13.75C14.15 13.99 13.69 14.53 13.55 14.69C13.41 14.86 13.27 14.88 13.02 14.75C12.78 14.63 11.99 14.37 11.05 13.54C10.32 12.89 9.83 12.08 9.69 11.83C9.55 11.59 9.67 11.45 9.8 11.33C9.91 11.22 10.04 11.05 10.17 10.91C10.29 10.76 10.33 10.65 10.42 10.49C10.5 10.32 10.46 10.18 10.4 10.06C10.33 9.93 9.84 8.73 9.64 8.23C9.44 7.74 9.24 7.81 9.09 7.8C8.95 7.79 8.78 7.79 8.62 7.79C8.45 7.79 8.18 7.85 7.95 8.1C7.72 8.35 7.08 8.95 7.08 10.17C7.08 11.39 7.97 12.56 8.09 12.73C8.22 12.89 9.84 15.39 12.33 16.46C12.92 16.72 13.38 16.87 13.74 16.99C14.34 17.18 14.88 17.15 15.31 17.09C15.79 17.02 16.79 16.49 17 15.9C17.21 15.31 17.21 14.8 17.15 14.69C17.08 14.59 16.82 14.55 16.57 14.43Z" />
    </svg>
  );
}

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

const coreValues = [
  {
    title: "Integrity",
    desc: "Transparent dealings and clear documentation you can trust, every step of the way.",
    icon: ShieldCheck,
  },
  {
    title: "Transparency",
    desc: "Clarity at every step with transparent pricing, verified titles and open communication from enquiry to registration.",
    icon: FileCheck,
  },
  {
    title: "On-Time Delivery",
    desc: "Thoughtfully planned infrastructure, backed by reliable handover commitments and timely execution.",
    icon: Award,
  },
  {
    title: "Customer-First Service",
    desc: "Continued professional assistance from plot selection to loan processing, registration and beyond.",
    icon: HeartHandshake,
  },
];

const whyChooseItems = [
  {
    num: "01",
    title: "20+ Years of Experience",
    desc: "Years of trusted presence in Visakhapatnam, backed by consistent development and timely project delivery.",
  },
  {
    num: "02",
    title: "RERA & VMRDA Compliant",
    desc: "Well-planned layouts backed by relevant approvals and verified property titles, wherever documented.",
  },
  {
    num: "03",
    title: "Prime, Growing Locations",
    desc: "Strategically located across Vizag’s key growth corridors — Tagarapuvalasa, Anandapuram, Sontyam and beyond.",
  },
  {
    num: "04",
    title: "Transparent Dealings",
    desc: "Clear pricing, transparent documentation and open communication from enquiry to registration.",
  },
  {
    num: "05",
    title: "Flexible Payment Plans",
    desc: "Flexible installment plans designed to make land investment easier and more accessible.",
  },
  {
    num: "06",
    title: "End-to-End Support",
    desc: "Complete support with legal documentation, loan paperwork and registration for local, NRI and out-of-state buyers.",
  },
];

export default function AboutUsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const mainNavLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about-us", active: true },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

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
            src="/subhagruha/about-hero.jpg"
            alt="Twenty years of building trust in Visakhapatnam"
            fill
            priority
            quality={100}
            unoptimized
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-y-0 left-0 w-full lg:w-[65%] bg-gradient-to-r from-black/95 via-black/85 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 py-20 lg:px-10">
          <div className="max-w-[760px]">
            {/* Breadcrumb */}
            <nav className="mb-4 flex items-center gap-2 text-xs font-bold tracking-wider text-white/70">
              <Link href="/" className="hover:text-lime-300 transition">HOME</Link>
              <ChevronRight size={13} className="text-lime-400" />
              <span className="text-lime-300">ABOUT US</span>
            </nav>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0b241b] border border-lime-400/50 px-3.5 py-1 text-xs font-black tracking-wider text-lime-300 shadow-md">
              <ShieldCheck size={14} className="text-lime-300" />
              ABOUT SUBHAGRUHA
            </span>

            <h1 className="display-font mt-4 text-3xl font-black sm:text-5xl lg:text-[3.25rem] leading-[1.12] text-white">
              Twenty Years of Building Trust,{" "}
              <span className="text-lime-300">One Layout at a Time.</span>
            </h1>

            <p className="mt-5 max-w-xl text-sm sm:text-base leading-7 text-white/90 font-medium">
              A closer look at who we are, what we stand for, and why families across Visakhapatnam choose to build their future with us.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3.5 text-xs sm:text-sm font-extrabold text-[var(--green-950)] shadow-lg transition-all hover:bg-lime-300 hover:scale-105 active:scale-95"
              >
                <span>Explore Our Projects</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/919052867067?text=Hi%2C%20I%20would%20like%20to%20schedule%20a%20site%20visit."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#0b241b] border border-white/40 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg transition-all hover:bg-[#123b2a]"
              >
                <WhatsAppIcon className="h-4 w-4 fill-[#25D366]" />
                <span>Schedule a Site Visit</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Statistics Counter Bar */}
      <section className="relative z-20 -mt-10 sm:-mt-12 mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-10">
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

      {/* Who We Are */}
      <section className="blueprint relative overflow-hidden bg-white py-16 sm:py-20">
        <div className="relative z-10 mx-auto grid max-w-[1300px] gap-12 px-6 lg:grid-cols-12 lg:items-center lg:px-10">
          {/* Media Column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-[440px] overflow-hidden rounded-3xl border border-slate-200 shadow-xl bg-slate-50">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/subhagruha/founder.png"
                  alt="Subhagruha Founder and Leadership - Real Estate in Vizag"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-[var(--green-950)]/95 p-4 text-white backdrop-blur border border-white/10 shadow-lg flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-lime-300">ESTABLISHED LEGACY</p>
                  <p className="text-sm font-bold mt-0.5">Subhagruha Leadership</p>
                </div>
                <div className="rounded-xl bg-lime-400 px-3 py-1.5 text-center text-[var(--green-950)]">
                  <p className="text-base font-black leading-none">15+</p>
                  <p className="text-[9px] font-black uppercase">Layouts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7">
            <span className="mb-3 inline-flex items-center rounded-full border border-[var(--green-700)]/30 bg-[var(--green-700)]/5 px-3.5 py-1 text-xs font-extrabold tracking-[.2em] text-[var(--green-700)]">
              WHO WE ARE
            </span>
            <h2 className="display-font text-3xl font-black sm:text-4xl lg:text-[2.5rem] leading-[1.12] text-[var(--green-950)]">
              Leading Real Estate{" "}
              <span className="text-[#8dbb16]">Developers in Vizag</span>
            </h2>

            <div className="mt-6 space-y-4 text-sm sm:text-[15px] leading-7 text-slate-600">
              <p>
                Subhagruha is a trusted and reputed real estate company in Vizag, known for developing premium residential plotted communities with a strong focus on quality, thoughtful planning, and reliable execution. As an established property developer in Visakhapatnam, we are committed to transparency, customer satisfaction, and creating long-term value for every investment.
              </p>
              <p>
                Our projects are thoughtfully planned with quality infrastructure, modern amenities, and a focus on sustainable development. Backed by over 20 years of experience in Vizag’s real estate sector, Subhagruha strives to offer legally approved plots, well-planned layouts, and essential amenities that support comfortable living while enhancing the long-term potential of the property.
              </p>
            </div>

            {/* 4 Feature Badges */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                { title: "RERA & VMRDA Compliant", icon: ShieldCheck },
                { title: "Verified Legal Titles", icon: FileCheck },
                { title: "Flexible Payment Plans", icon: Award },
                { title: "End-to-End Buyer Support", icon: HeartHandshake },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-3 rounded-xl border border-slate-200/90 bg-[var(--soft)] p-3.5 transition hover:bg-white hover:shadow-sm"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--green-800)] text-lime-300">
                    <item.icon size={16} />
                  </div>
                  <span className="text-xs font-bold text-[var(--green-950)]">{item.title}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--green-800)] px-6 py-3 text-xs font-bold text-white shadow-md transition hover:bg-[var(--green-950)] hover:scale-105"
              >
                <span>Explore All Projects</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[var(--soft)] py-16 sm:py-20">
        <div className="mx-auto max-w-[1300px] px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="mb-2.5 inline-flex items-center rounded-full border border-[var(--green-700)]/30 bg-[var(--green-700)]/5 px-3.5 py-1 text-xs font-extrabold tracking-[.2em] text-[var(--green-700)]">
              MISSION & VISION
            </span>
            <h2 className="display-font mt-2 text-3xl font-black sm:text-4xl text-[var(--green-950)]">
              What Drives Every Layout <span className="text-[#8dbb16]">We Create</span>
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-[var(--green-950)] via-[var(--green-900)] to-[#071d15] p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-400 text-[var(--green-950)] shadow-md">
                <Compass size={28} />
              </div>
              <h3 className="display-font mt-6 text-2xl sm:text-3xl font-bold text-white">Our Mission</h3>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-200/90 font-medium">
                Our aim is to create thoughtfully planned residential layouts across Visakhapatnam, combining legal clarity, transparent pricing, quality infrastructure, and dependable guidance to build lasting trust with every customer.
              </p>
            </div>

            {/* Vision Card */}
            <div className="rounded-3xl border border-lime-300/40 bg-gradient-to-br from-[#123b2a] via-[#1a543b] to-[#0e3323] p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[var(--green-800)] shadow-md">
                <Target size={28} className="text-[var(--green-800)]" />
              </div>
              <h3 className="display-font mt-6 text-2xl sm:text-3xl font-bold text-white">Our Vision</h3>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-200/90 font-medium">
                To be the first choice for families and investors in Visakhapatnam’s planned land development sector, setting the benchmark for trust, transparency, and integrity—where our promises and documentation always stand together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1300px] px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="mb-2.5 inline-flex items-center rounded-full border border-[var(--green-700)]/30 bg-[var(--green-700)]/5 px-3.5 py-1 text-xs font-extrabold tracking-[.2em] text-[var(--green-700)]">
              CORE VALUES
            </span>
            <h2 className="display-font mt-2 text-3xl font-black sm:text-4xl text-[var(--green-950)]">
              Our Commitment <span className="text-[#8dbb16]">at Subhagruha</span>
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              The foundational principles that guide every decision and project from inception to handover.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="group rounded-2xl border border-slate-200/90 bg-[var(--soft)] p-6 transition-all duration-300 hover:border-[var(--green-700)]/40 hover:bg-white hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--green-800)] text-lime-300 shadow-sm transition-transform group-hover:scale-110">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-[var(--green-950)]">{val.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section (6 Points) */}
      <section className="bg-[var(--soft)] py-16 sm:py-20 border-t border-slate-200/60">
        <div className="mx-auto max-w-[1300px] px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="mb-2.5 inline-flex items-center rounded-full border border-[var(--green-700)]/30 bg-[var(--green-700)]/5 px-3.5 py-1 text-xs font-extrabold tracking-[.2em] text-[var(--green-700)]">
              WHY CHOOSE US
            </span>
            <h2 className="display-font mt-2 text-3xl font-black sm:text-4xl lg:text-[2.5rem] text-[var(--green-950)]">
              20 Years of Building in Vizag. <br />
              <span className="text-[#8dbb16]">A Legacy of Trust, Quality & Experience.</span>
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChooseItems.map((item) => (
              <div
                key={item.num}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 transition-all duration-300 hover:border-[var(--green-700)]/40 hover:shadow-md hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black tracking-wider text-[var(--green-800)] bg-lime-100/90 px-2.5 py-1 rounded-md border border-lime-300/60 font-mono">
                      {item.num}
                    </span>
                    <div className="h-2 w-2 rounded-full bg-lime-400 group-hover:scale-125 transition-transform" />
                  </div>
                  <h3 className="mt-3.5 text-base font-bold text-[var(--green-950)] leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[var(--green-950)] via-[var(--green-900)] to-[#0c2e1f] py-16 text-white text-center">
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <span className="inline-block rounded-full bg-lime-400/20 border border-lime-400/30 px-3.5 py-1 text-xs font-extrabold tracking-wider text-lime-300">
            GET STARTED TODAY
          </span>
          <h2 className="display-font mt-4 text-3xl font-black sm:text-4xl lg:text-5xl text-white">
            Ready to Own a Plot <span className="text-lime-300">in Vizag?</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
            Connect with our team for the latest layout availability, transparent pricing, and guided site visits, or explore our complete project portfolio.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-7 py-3.5 text-xs sm:text-sm font-extrabold text-[var(--green-950)] shadow-lg transition hover:bg-lime-300 hover:scale-105"
            >
              <span>Request a Quote</span>
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-xs sm:text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
            >
              <span>View All Projects</span>
            </Link>
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
                <Link href="/about-us" className="hover:text-white transition font-bold text-lime-300">About</Link>
                <Link href="/projects" className="hover:text-white transition">Projects</Link>
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
