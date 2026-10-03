"use client";

import {
  Building2,
  Calendar,
  Car,
  CheckCircle2,
  Clock,
  Compass,
  FileCheck2,
  HelpCircle,
  LandPlot,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import EnquiryModal from "../EnquiryModal";
import FooterSocials from "../FooterSocials";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const contactFaqs = [
  {
    q: "How do I schedule a complimentary site visit?",
    a: "You can book directly via the contact form on this page or call us at (+91) 9052867067. We offer free AC cab pick-up & drop from your home or hotel anywhere across Visakhapatnam, Anakapalle, or Vizianagaram at your chosen time.",
  },
  {
    q: "Are all ventures 100% VMRDA / VUDA approved?",
    a: "Yes, every layout offered through VizagPlots comes with clear title deeds, approved LP numbers from VMRDA (Visakhapatnam Metropolitan Region Development Authority) or VUDA, and AP RERA registration where applicable.",
  },
  {
    q: "Can you assist with bank loans for plot purchases?",
    a: "Absolutely! We work closely with leading nationalized and private banks including SBI, HDFC, ICICI, Bank of Baroda, and LIC Housing Finance to arrange plot purchase loans up to 70% to 80% with fast documentation approval.",
  },
  {
    q: "Do you arrange pickup for NRI and outstation buyers?",
    a: "Yes. For our non-resident and outstation clients arriving via Visakhapatnam International Airport (VTZ) or Vizag Railway Station, our executive provides chauffeur-driven pickup, layout tour, and drop back.",
  },
  {
    q: "What is the typical timeframe for spot registration?",
    a: "Once plot allocation and payment terms are confirmed, our legal and documentation team completes registration at the relevant Sub-Registrar Office (SRO) within 24 to 48 hours with immediate document handover.",
  },
];

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Form State
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    project: "Subhagruha Sukrithi Avanthika - Anandapuram",
    plotsize: "200 - 300 Sq. Yds",
    message: "",
    needSiteVisitCab: true,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const mainNavLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about-us" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact", active: true },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 800);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <EnquiryModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[74px] max-w-[1400px] items-center justify-between px-5 lg:px-10">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="VizagPlots"
              width={145}
              height={78}
              className="h-[58px] w-auto object-contain"
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-7 2xl:gap-9 xl:flex h-[74px]">
            {mainNavLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`relative flex h-full items-center px-1 text-[15px] lg:text-[16px] tracking-wide transition-colors ${
                  item.active
                    ? "font-extrabold text-[#7ba513]"
                    : "font-semibold text-slate-700 hover:text-[#8dbb16]"
                }`}
              >
                {item.label}
                {item.active && (
                  <span className="absolute bottom-0 left-0 right-0 h-[3.5px] rounded-t-full bg-[#8dbb16] shadow-sm" />
                )}
              </Link>
            ))}
          </nav>

          {/* Quick Contact & Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919052867067"
              className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-[#7ba513] transition"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-[#8dbb16]">
                <Phone className="h-4 w-4" />
              </div>
              <span>(+91) 9052867067</span>
            </a>

            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#8dbb16] to-[#769e10] px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-lime-700/20 transition hover:from-[#7ba513] hover:to-[#63860c] hover:shadow-lg active:scale-95"
            >
              <Sparkles className="h-4 w-4" />
              <span>Request a Quote</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 xl:hidden hover:bg-slate-100"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="border-b border-slate-200 bg-white px-5 py-5 xl:hidden shadow-lg animate-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-3 font-semibold text-slate-700">
              {mainNavLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-3 py-2 text-base transition ${
                    item.active
                      ? "bg-lime-50 font-bold text-[#7ba513]"
                      : "hover:bg-slate-50 hover:text-[#8dbb16]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
                <a
                  href="tel:+919052867067"
                  className="flex items-center gap-2 text-sm font-semibold text-slate-800"
                >
                  <Phone className="h-4 w-4 text-[#8dbb16]" />
                  (+91) 9052867067
                </a>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    setIsQuoteModalOpen(true);
                  }}
                  className="w-full rounded-xl bg-[#8dbb16] py-3 text-center text-sm font-bold text-white shadow"
                >
                  Request a Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-16 lg:py-20 text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#8dbb16_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-lime-400 mb-3">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-white">Contact Us</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-lime-500/30 bg-lime-500/10 px-4 py-1.5 text-xs font-bold text-lime-400 backdrop-blur-sm mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              <span>DIRECT DEVELOPER CONSULTATION & COMPLIMENTARY SITE VISITS</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
              Get in Touch with Vizag’s Premier Plot Specialists
            </h1>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed">
              Have questions about upcoming ventures along Bhogapuram Highway, Anandapuram, or Kothavalasa? 
              Connect directly with our senior layout advisory team. We respond within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Contact Channels Cards */}
      <section className="relative -mt-8 z-10 mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Visit Office */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md shadow-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime-50 text-[#7ba513] mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Visit Our Office</h3>
              <p className="text-xs text-slate-500 mb-3">Central Visakhapatnam Location</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                50-50-33/2, J R Plaza, Gurudwara Junction, Visakhapatnam, AP 530013
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Gurudwara+Junction+Visakhapatnam"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-[#7ba513] hover:text-[#63860c]"
            >
              <span>Get Directions</span>
              <Compass className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Card 2: Phone */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md shadow-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Call Us Directly</h3>
              <p className="text-xs text-slate-500 mb-3">Daily 8:00 AM – 9:00 PM IST</p>
              <p className="text-sm font-semibold text-slate-800">
                (+91) 9052867067
              </p>
              <p className="text-xs text-slate-500 mt-1">Instant voice guidance on plot availability</p>
            </div>
            <a
              href="tel:+919052867067"
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
            >
              <span>Call Now</span>
              <Phone className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Card 3: WhatsApp */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md shadow-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
                <WhatsAppIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">WhatsApp Chat</h3>
              <p className="text-xs text-slate-500 mb-3">Instant Layout Brochures & Prices</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Connect directly for instant PDF layouts, LP numbers, and drone tour videos.
              </p>
            </div>
            <a
              href="https://wa.me/919052867067?text=Hi%20VizagPlots,%20I%20would%20like%20more%20information%20on%20available%20ventures."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700"
            >
              <span>Start WhatsApp Chat</span>
              <WhatsAppIcon className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Card 4: Email */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md shadow-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600 mb-4 group-hover:scale-110 transition-transform">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Email Inquiries</h3>
              <p className="text-xs text-slate-500 mb-3">For NRI & Investor Portfolios</p>
              <p className="text-sm font-semibold text-slate-800 break-all">
                janishaik9@gmail.com
              </p>
              <p className="text-xs text-slate-500 mt-1">Detailed documentation & corporate inquiries</p>
            </div>
            <a
              href="mailto:janishaik9@gmail.com"
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 hover:text-purple-700"
            >
              <span>Write to Us</span>
              <Mail className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Main Content: Form & Assurance Showcase */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Contact & Booking Form (7 Cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-8 md:p-10 shadow-lg shadow-slate-100">
              <div className="border-b border-slate-100 pb-6 mb-8">
                <span className="inline-block px-3 py-1 bg-lime-50 text-[#7ba513] text-xs font-bold uppercase tracking-wider rounded-md mb-2">
                  Direct Layout Inquiry
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900">
                  Send a Message or Book a Free Site Visit
                </h2>
                <p className="text-slate-500 text-sm mt-1">
                  Fill in your details below and our layout coordinator will contact you with exact plot coordinates and price quotation.
                </p>
              </div>

              {formSubmitted ? (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-8 text-center animate-in fade-in duration-300">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-white mb-4 shadow-lg shadow-emerald-600/20">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">
                    Inquiry Received Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                    Thank you, <span className="font-bold text-slate-800">{formState.name}</span>. One of our dedicated plot consultants will reach out to you at <span className="font-bold text-slate-800">{formState.phone}</span> within one business day.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <a
                      href={`https://wa.me/919052867067?text=Hi%20VizagPlots,%20I%20just%20submitted%20an%20inquiry%20for%20${encodeURIComponent(formState.project)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-md hover:bg-emerald-700 transition"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      <span>Speed Up via WhatsApp</span>
                    </a>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormState({
                          name: "",
                          phone: "",
                          email: "",
                          project: "Subhagruha Sukrithi Avanthika - Anandapuram",
                          plotsize: "200 - 300 Sq. Yds",
                          message: "",
                          needSiteVisitCab: true,
                        });
                      }}
                      className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-100 transition"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Ramesh Varma"
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-[#8dbb16] focus:outline-none focus:ring-2 focus:ring-[#8dbb16]/20 transition"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-[#8dbb16] focus:outline-none focus:ring-2 focus:ring-[#8dbb16]/20 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="yourname@gmail.com"
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-[#8dbb16] focus:outline-none focus:ring-2 focus:ring-[#8dbb16]/20 transition"
                      />
                    </div>

                    {/* Plot Size Preference */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Plot Size Requirement
                      </label>
                      <select
                        value={formState.plotsize}
                        onChange={(e) => setFormState({ ...formState, plotsize: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 focus:border-[#8dbb16] focus:outline-none focus:ring-2 focus:ring-[#8dbb16]/20 transition"
                      >
                        <option>150 - 200 Sq. Yds (Compact / Budget)</option>
                        <option>200 - 300 Sq. Yds (Standard Villa Bit)</option>
                        <option>300 - 500 Sq. Yds (Executive Large Plot)</option>
                        <option>500+ Sq. Yds (Corner / Commercial Road)</option>
                      </select>
                    </div>
                  </div>

                  {/* Project of Interest */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Interested Venture / Corridor
                    </label>
                    <select
                      value={formState.project}
                      onChange={(e) => setFormState({ ...formState, project: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 focus:border-[#8dbb16] focus:outline-none focus:ring-2 focus:ring-[#8dbb16]/20 transition"
                    >
                      <option>Subhagruha Sukrithi Avanthika - Anandapuram</option>
                      <option>Sukrithi Royal - Bhogapuram Highway (Near Airport)</option>
                      <option>Sukrithi Grand - Boyapalem / Gambheeram</option>
                      <option>Sukrithi Dheera - Kothavalasa Growth Zone</option>
                      <option>Sukrithi Ujwala - Sontyam Main Road</option>
                      <option>General Inquiry / Need Expert Guidance</option>
                    </select>
                  </div>

                  {/* Site Visit Checkbox */}
                  <div className="rounded-xl border border-lime-200 bg-lime-50/60 p-4">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formState.needSiteVisitCab}
                        onChange={(e) => setFormState({ ...formState, needSiteVisitCab: e.target.checked })}
                        className="mt-1 h-5 w-5 rounded border-slate-300 text-[#8dbb16] focus:ring-[#8dbb16]"
                      />
                      <div>
                        <p className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                          <Car className="h-4 w-4 text-[#7ba513]" />
                          Book Complimentary Chauffeur-Driven AC Cab Site Visit
                        </p>
                        <p className="text-xs text-slate-600 mt-0.5">
                          Free door-step pick-up & drop across Vizag at zero cost and no booking obligation.
                        </p>
                      </div>
                    </label>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Your Message or Questions
                    </label>
                    <textarea
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Specify your preferred date for site visit, face preference (East/North/Corner), or budget range..."
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-[#8dbb16] focus:outline-none focus:ring-2 focus:ring-[#8dbb16]/20 transition"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#8dbb16] to-[#769e10] py-4 text-base font-bold text-white shadow-lg shadow-lime-700/25 transition hover:from-[#7ba513] hover:to-[#63860c] active:scale-[0.99] disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        <span>Sending Your Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message & Book Consultation</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right: Site Visit VIP Experience & Legal Assurances (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* VIP Cab Visit Card */}
              <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Car className="h-40 w-40 text-[#8dbb16]" />
                </div>
                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full bg-lime-500/20 px-3 py-1 text-xs font-bold text-lime-400 mb-4 border border-lime-500/30">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>ZERO-COST CONVENIENCE</span>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2">
                    Complimentary Doorstep Site Visit
                  </h3>
                  <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                    Seeing the plot in person, inspecting the road width, boundary stones, and nearby infrastructure is essential before making an investment.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-lime-400 shrink-0">
                        <Car className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Chauffeur-Driven AC Cab</h4>
                        <p className="text-xs text-slate-400">Pick-up and drop right from your doorstep in Vizag.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-lime-400 shrink-0">
                        <FileCheck2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Live On-Site Legal Verification</h4>
                        <p className="text-xs text-slate-400">Review layout plan, LP number approvals, and link documents with our expert.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-lime-400 shrink-0">
                        <Clock className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Your Preferred Timing</h4>
                        <p className="text-xs text-slate-400">Available 7 days a week, mornings and afternoons.</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400">Site Visit Hotline</p>
                      <p className="text-lg font-bold text-white">(+91) 9052867067</p>
                    </div>
                    <a
                      href="tel:+919052867067"
                      className="rounded-full bg-[#8dbb16] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#7ba513] transition shadow"
                    >
                      Call to Book
                    </a>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-md shadow-slate-100">
                <h4 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-[#7ba513]" />
                  <span>The VizagPlots Assurance</span>
                </h4>
                <ul className="space-y-3.5 text-sm text-slate-600">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>100% VMRDA / VUDA approved layout plans</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>100% Clear titles with verified link documentation</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Complete 100% Vaastu compliant plots & road layouts</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Bank loan tie-ups with SBI, HDFC, ICICI, LIC HFL</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Immediate spot registration support at Sub-Registrar Office</span>
                  </li>
                </ul>
              </div>

              {/* Head Office Address Box */}
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-md shadow-slate-100">
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-[#7ba513]" />
                  <span>Administrative Office</span>
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  <strong>VizagPlots / Subhagruha Group</strong><br />
                  50-50-33/2, J R Plaza, Gurudwara Junction,<br />
                  Visakhapatnam, Andhra Pradesh 530013
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs font-semibold text-slate-500">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-[#7ba513]" />
                    Mon - Sun: 9:00 AM – 8:00 PM
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Embedded Google Map Section */}
      <section className="border-t border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7ba513]">
              Location & Accessibility
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-1">
              Conveniently Located at Gurudwara Junction
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Our central office is easily accessible from any part of Vizag via NH-16 and RTC Complex.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-xl h-[420px]">
            <iframe
              title="VizagPlots Office Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15199.309320347318!2d83.29828456073867!3d17.728867540209426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39433994d50907%3A0x6b44747eb68ec42!2sGurudwara%20Junction%2C%20Visakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-5 lg:px-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-lime-100 px-3.5 py-1 text-xs font-bold text-[#7ba513] mb-3">
              <HelpCircle className="h-4 w-4" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-slate-900">
              Everything You Need to Know
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Common questions about plot visits, VMRDA sanctions, registrations, and payment plans.
            </p>
          </div>

          <div className="space-y-4">
            {contactFaqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-slate-200 bg-white transition-all overflow-hidden shadow-sm hover:shadow"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-5 text-left font-bold text-slate-900 transition hover:text-[#7ba513]"
                  >
                    <span className="text-base md:text-lg">{faq.q}</span>
                    <span className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 transition-transform ${isOpen ? "rotate-180 bg-lime-100 text-[#7ba513]" : "text-slate-600"}`}>
                      ↓
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-16 text-white border-t border-slate-800">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10 text-center">
          <h2 className="text-2xl md:text-4xl font-black mb-4">
            Ready to Secure Your Plot in Visakhapatnam?
          </h2>
          <p className="max-w-2xl mx-auto text-slate-300 text-sm md:text-base mb-8">
            Speak directly with our senior layout advisory team today. Get exact pricing, master plan layouts, and secure your site visit slot.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+919052867067"
              className="inline-flex items-center gap-2 rounded-full bg-[#8dbb16] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-lime-700/30 hover:bg-[#7ba513] transition active:scale-95"
            >
              <Phone className="h-4 w-4" />
              <span>Call (+91) 9052867067</span>
            </a>
            <a
              href="https://wa.me/919052867067?text=Hi%20VizagPlots,%20I%20am%20interested%20in%20residential%20plots%20in%20Vizag."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-700/30 hover:bg-emerald-700 transition active:scale-95"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>Chat on WhatsApp</span>
            </a>
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur hover:bg-white/20 transition active:scale-95"
            >
              <Sparkles className="h-4 w-4" />
              <span>Request Quote</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/logo.png"
                  alt="VizagPlots"
                  width={140}
                  height={75}
                  className="h-12 w-auto object-contain brightness-0 invert"
                />
              </Link>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Your premier source for VMRDA approved residential plots, gated community layouts, and high-growth land investments across Visakhapatnam.
              </p>
              <p className="text-xs text-slate-500 mb-4">
                Official channel partner for Subhagruha Projects in Andhra Pradesh.
              </p>
              <FooterSocials />
            </div>

            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-2.5 text-sm">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li><Link href="/about-us" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="/projects" className="hover:text-white transition">All Projects & Ventures</Link></li>
                <li><Link href="/blog" className="hover:text-white transition">Blog & Real Estate Guides</Link></li>
                <li><Link href="/contact" className="text-lime-400 font-semibold">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Popular Corridors</h4>
              <ul className="space-y-2.5 text-sm">
                <li><Link href="/projects" className="hover:text-white transition">Bhogapuram Airport Corridor</Link></li>
                <li><Link href="/projects" className="hover:text-white transition">Anandapuram 6-Lane Highway</Link></li>
                <li><Link href="/projects" className="hover:text-white transition">Boyapalem & Gambheeram</Link></li>
                <li><Link href="/projects" className="hover:text-white transition">Kothavalasa Growth Zone</Link></li>
                <li><Link href="/projects" className="hover:text-white transition">Sontyam Residential Bit</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Corporate Office</h4>
              <p className="text-sm text-slate-400 leading-relaxed mb-3">
                50-50-33/2, J R Plaza, Gurudwara Junction, Visakhapatnam, Andhra Pradesh 530013
              </p>
              <p className="text-sm text-slate-400 mb-1">
                <strong>Phone:</strong> (+91) 9052867067
              </p>
              <p className="text-sm text-slate-400 mb-3">
                <strong>Email:</strong> janishaik9@gmail.com
              </p>
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  Site Visits Open Today
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>© {new Date().getFullYear()} VizagPlots. All Rights Reserved. VMRDA / VUDA Approved Projects.</p>
            <div className="flex gap-6">
              <Link href="/about-us" className="hover:text-slate-400">Privacy Policy</Link>
              <Link href="/about-us" className="hover:text-slate-400">Terms of Service</Link>
              <Link href="/contact" className="hover:text-slate-400">Support</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919052867067?text=Hi%20VizagPlots,%20I%20have%20an%20inquiry%20regarding%20plots%20in%20Vizag."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-900/30 transition hover:bg-emerald-600 hover:scale-110 active:scale-95"
      >
        <WhatsAppIcon className="h-8 w-8" />
      </a>
    </main>
  );
}
