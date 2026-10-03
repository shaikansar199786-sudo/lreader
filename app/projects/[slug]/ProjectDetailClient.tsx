"use client";

import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Calendar,
  Camera,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Compass,
  ExternalLink,
  Eye,
  FileCheck,
  LandPlot,
  Mail,
  MapPin,
  Maximize2,
  Menu,
  Phone,
  Play,
  Ruler,
  Search,
  ShieldCheck,
  Sparkles,
  Video,
  X,
  ZoomIn,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { useEffect, useState } from "react";
import EnquiryModal from "../../EnquiryModal";
import FooterSocials from "../../FooterSocials";
import {
  allProjectsData,
  getProjectBySlug,
  getProjectGallery,
  getProjectVideos,
} from "../../data/projectsData";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function ProjectDetailClient({ slug: propSlug }: { slug?: string }) {
  const params = useParams();
  const slug = propSlug || (typeof params?.slug === "string" ? params.slug : Array.isArray(params?.slug) ? params.slug[0] : "");
  const project = getProjectBySlug(slug);

  const [menuOpen, setMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryItems = project ? getProjectGallery(project) : [];
  const projectVideos = project ? getProjectVideos(project) : [];

  const galleryCategories = [
    "All",
    ...Array.from(new Set(galleryItems.map((item) => item.category))),
  ];

  const filteredGallery =
    selectedGalleryCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedGalleryCategory);

  const currentVideo = projectVideos[activeVideoIndex] || projectVideos[0];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev === 0 ? filteredGallery.length - 1 : prev - 1
        );
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev === filteredGallery.length - 1 ? 0 : prev + 1
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, filteredGallery.length]);

  if (!project) {
    return notFound();
  }

  const mainNavLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about-us" },
    { label: "Projects", href: "/projects", active: true },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

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
            <Image src="/logo.png" alt="VizagPlots" width={145} height={78} className="h-[58px] w-auto object-contain" priority />
          </Link>

          {/* Navigation */}
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

            <button
              type="button"
              onClick={() => setIsQuoteModalOpen(true)}
              aria-label="Search & Request a Quote"
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-medium text-slate-600 transition hover:border-[var(--green-700)] hover:bg-white hover:text-[var(--green-800)] shadow-sm cursor-pointer"
            >
              <Search size={14} className="text-[var(--green-700)]" />
              <span className="hidden 2xl:inline text-[11px] text-slate-400">Search projects...</span>
            </button>

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
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700"
            >
              <Search size={18} className="text-[var(--green-700)]" />
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Breadcrumb Bar */}
      <div className="border-b border-slate-200 bg-white py-3">
        <div className="mx-auto flex max-w-[1400px] items-center gap-2 px-5 sm:px-8 lg:px-10 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-[var(--green-800)]">Home</Link>
          <ChevronRight size={13} className="text-slate-400" />
          <Link href="/projects" className="hover:text-[var(--green-800)]">Projects</Link>
          <ChevronRight size={13} className="text-slate-400" />
          <span className="text-[var(--green-950)] font-bold">{project.name}</span>
        </div>
      </div>

      {/* Main Single Project Details */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column (8 cols): Media, Overview, Features, Amenities */}
            <div className="lg:col-span-8 space-y-7">
              {/* Media Card */}
              <div className="relative overflow-hidden rounded-3xl bg-slate-950 shadow-lg border border-slate-200/80">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-lime-400 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[var(--green-950)] shadow-md">
                      {project.badge}
                    </span>
                    <span className="rounded-full bg-white/90 backdrop-blur-sm px-3.5 py-1 text-xs font-bold text-slate-800 shadow-sm">
                      {project.approval}
                    </span>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-lime-300">
                      <MapPin size={15} />
                      <span>{project.location}</span>
                    </p>
                    <h1 className="display-font mt-1 text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                      {project.name}
                    </h1>
                  </div>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 rounded-3xl bg-white p-5 sm:p-6 shadow-sm border border-slate-200/80">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                    <Ruler size={13} className="text-[var(--green-700)]" />
                    Plot Size
                  </span>
                  <p className="mt-1 text-sm sm:text-base font-extrabold text-[var(--green-950)]">
                    {project.size}
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                    <Compass size={13} className="text-[var(--green-700)]" />
                    Facing
                  </span>
                  <p className="mt-1 text-sm sm:text-base font-extrabold text-[var(--green-950)]">
                    {project.facing}
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                    <FileCheck size={13} className="text-[var(--green-700)]" />
                    Approval
                  </span>
                  <p className="mt-1 text-sm sm:text-base font-extrabold text-[var(--green-950)]">
                    {project.approval}
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                    <ShieldCheck size={13} className="text-[var(--green-700)]" />
                    Status
                  </span>
                  <p className="mt-1 text-sm sm:text-base font-extrabold text-[#214b28]">
                    {project.status}
                  </p>
                </div>
              </div>

              {/* Overview Section */}
              <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-slate-200/80">
                <span className="inline-block rounded-full bg-lime-100 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-[var(--green-800)] border border-lime-300 mb-3">
                  ABOUT THE VENTURE
                </span>
                <h2 className="display-font text-2xl sm:text-3xl font-black text-[var(--green-950)]">
                  Project Overview
                </h2>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
                  {project.description}
                </p>
              </div>

              {/* Infrastructure & Amenities */}
              <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-slate-200/80">
                <span className="inline-block rounded-full bg-lime-100 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-[var(--green-800)] border border-lime-300 mb-3">
                  MODERN INFRASTRUCTURE
                </span>
                <h2 className="display-font text-2xl sm:text-3xl font-black text-[var(--green-950)] mb-5">
                  Layout Amenities & Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {project.amenities.map((amenity) => (
                    <div
                      key={amenity}
                      className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-3.5 text-xs sm:text-sm font-bold text-slate-700 transition hover:bg-white hover:border-[var(--green-700)]/30 hover:shadow-sm"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[var(--green-800)] text-lime-300">
                        <Check size={15} className="stroke-[3]" />
                      </div>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Highlights */}
              {project.locationHighlights && project.locationHighlights.length > 0 && (
                <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-slate-200/80">
                  <span className="inline-block rounded-full bg-lime-100 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-[var(--green-800)] border border-lime-300 mb-3">
                    STRATEGIC CONNECTIVITY
                  </span>
                  <h2 className="display-font text-2xl sm:text-3xl font-black text-[var(--green-950)] mb-4">
                    Location Advantages
                  </h2>
                  <div className="space-y-3">
                    {project.locationHighlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-slate-600">
                        <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-100 text-[var(--green-700)]">
                          <CheckCircle2 size={13} />
                        </div>
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Visual Gallery & Layout Master Plan */}
              <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-slate-200/80">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-lime-100 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-[var(--green-800)] border border-lime-300">
                      <Camera size={13} className="text-[var(--green-700)]" />
                      VENTURE VISUAL GALLERY
                    </span>
                    <h2 className="display-font mt-2 text-2xl sm:text-3xl font-black text-[var(--green-950)]">
                      Site Visuals & Layout Master Plan
                    </h2>
                    <p className="mt-1 text-xs sm:text-sm text-slate-500">
                      Authentic layout imagery, entrance archway, 40-ft wide internal roads, and landscaped green parks.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-slate-100 px-3.5 py-1 text-xs font-bold text-slate-700 border border-slate-200">
                      {filteredGallery.length} {filteredGallery.length === 1 ? "Visual" : "Visuals"}
                    </span>
                  </div>
                </div>

                {/* Category Filter Pills */}
                {galleryCategories.length > 1 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {galleryCategories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setSelectedGalleryCategory(cat)}
                        className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                          selectedGalleryCategory === cat
                            ? "bg-[var(--green-800)] text-white shadow-sm"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredGallery.map((img, idx) => (
                    <div
                      key={img.src + idx}
                      onClick={() => {
                        setLightboxIndex(idx);
                        setLightboxOpen(true);
                      }}
                      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[var(--green-700)]/40 hover:shadow-lg"
                    >
                      <div className="relative aspect-[4/3] w-full overflow-hidden">
                        <Image
                          src={img.src}
                          alt={img.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-108"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                        {/* Category Badge */}
                        <div className="absolute left-3 top-3">
                          <span className="rounded-full bg-black/60 backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-bold text-white border border-white/20">
                            {img.category}
                          </span>
                        </div>

                        {/* Zoom Overlay Icon */}
                        <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-slate-900 opacity-0 shadow transition group-hover:opacity-100 group-hover:scale-110">
                          <ZoomIn size={14} />
                        </div>

                        {/* Bottom Title */}
                        <div className="absolute bottom-3 left-3 right-3 text-white">
                          <p className="text-xs font-bold line-clamp-2 leading-snug drop-shadow-sm">
                            {img.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-100 pt-3">
                  <span>Click any visual to view in full-screen high resolution</span>
                  <span className="text-[var(--green-700)] font-semibold flex items-center gap-1">
                    <Eye size={13} /> High-Resolution Inspection
                  </span>
                </div>
              </div>

              {/* Official Video Walkthrough & Virtual Tour Section */}
              <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-slate-200/80">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-red-700 border border-red-200">
                      <Video size={13} className="text-red-600" />
                      OFFICIAL VIDEO WALKTHROUGHS & VIRTUAL TOUR
                    </span>
                    <h2 className="display-font mt-2 text-2xl sm:text-3xl font-black text-[var(--green-950)]">
                      Watch Venture Video Walkthrough
                    </h2>
                    <p className="mt-1 text-xs sm:text-sm text-slate-500">
                      Google & YouTube video tours showcasing layout development, 40ft roads, and amenities.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 border border-emerald-200">
                      <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
                      HD 1080p Video
                    </span>
                  </div>
                </div>

                {/* Active Video Player */}
                <div className="overflow-hidden rounded-2xl bg-slate-950 shadow-xl border border-slate-800">
                  <div className="relative aspect-[16/9] w-full">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${currentVideo.id}?autoplay=0&rel=0&modestbranding=1`}
                      title={currentVideo.title}
                      className="h-full w-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>

                  {/* Video Title Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#0b241b] p-4 text-white">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-lime-400/20 px-2.5 py-0.5 text-[10.5px] font-black uppercase tracking-wider text-lime-300 border border-lime-400/30">
                          {currentVideo.tag}
                        </span>
                        <span className="text-[11px] text-white/60">
                          Duration: {currentVideo.duration}
                        </span>
                      </div>
                      <h3 className="mt-1.5 text-sm sm:text-base font-bold text-white leading-snug">
                        {currentVideo.title}
                      </h3>
                    </div>

                    <a
                      href={`https://www.youtube.com/watch?v=${currentVideo.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 self-start sm:self-center shrink-0 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white transition hover:bg-white hover:text-slate-900"
                    >
                      <span>Watch on YouTube</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                {/* Video Playlist / Selector */}
                {projectVideos.length > 1 && (
                  <div className="mt-6">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                      <Play size={12} className="text-[var(--green-700)]" />
                      More Site Videos & Venture Tours ({projectVideos.length})
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {projectVideos.map((vid, idx) => {
                        const isSelected = idx === activeVideoIndex;
                        return (
                          <button
                            key={vid.id + idx}
                            type="button"
                            onClick={() => setActiveVideoIndex(idx)}
                            className={`flex items-start gap-3 rounded-2xl p-3 text-left transition-all cursor-pointer border ${
                              isSelected
                                ? "border-[var(--green-700)] bg-[var(--green-700)]/5 ring-2 ring-[var(--green-700)]/20 shadow-sm"
                                : "border-slate-200/90 bg-slate-50/70 hover:bg-white hover:border-slate-300"
                            }`}
                          >
                            {/* Thumbnail with duration */}
                            <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-xl bg-slate-900">
                              <img
                                src={`https://img.youtube.com/vi/${vid.id}/hqdefault.jpg`}
                                alt={vid.title}
                                className="h-full w-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                <div
                                  className={`flex h-6 w-6 items-center justify-center rounded-full ${
                                    isSelected
                                      ? "bg-lime-400 text-slate-900"
                                      : "bg-white/90 text-slate-900"
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
                )}

                {/* Free Site Visit Reassurance Banner */}
                <div className="mt-6 rounded-2xl bg-gradient-to-r from-[#0b241b] to-[#16432f] p-5 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10.5px] font-black uppercase tracking-widest text-lime-300">
                      COMPLIMENTARY SITE INSPECTION
                    </span>
                    <h4 className="display-font text-base sm:text-lg font-bold text-white mt-0.5">
                      Want to see {project.name} in person?
                    </h4>
                    <p className="text-xs text-white/70 mt-1 max-w-xl">
                      We provide free AC cab pickup and drop-off anywhere in Visakhapatnam with an expert advisor to answer all legal and layout questions.
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5 shrink-0">
                    <button
                      type="button"
                      onClick={() => setIsQuoteModalOpen(true)}
                      className="rounded-full bg-lime-400 px-4 py-2.5 text-xs font-extrabold text-[var(--green-950)] shadow-md transition hover:bg-lime-300 cursor-pointer whitespace-nowrap"
                    >
                      Book Free Site Visit
                    </button>
                    <a
                      href={`https://wa.me/919052867067?text=${encodeURIComponent(
                        `Hi, I watched the video tour of "${project.name}" and would like to arrange a site visit.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-[#25D366] px-4 py-2.5 text-xs font-bold text-white shadow-md transition hover:brightness-105 whitespace-nowrap flex items-center gap-1.5"
                    >
                      <WhatsAppIcon className="h-3.5 w-3.5 fill-white" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (4 cols): Sticky Enquiry & Quick Actions */}
            <div className="lg:col-span-4 sticky top-28 space-y-6">
              <div className="rounded-3xl bg-white p-6 sm:p-7 shadow-lg border border-slate-200/90">
                <span className="inline-block rounded-full bg-lime-100 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-[var(--green-800)] border border-lime-300">
                  Direct Advisory
                </span>
                <h3 className="display-font mt-2 text-2xl font-black text-[var(--green-950)]">
                  Enquire About {project.name}
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Get verified pricing, layout blueprint, and arrange a free cab site visit.
                </p>

                <div className="mt-6 space-y-3">
                  <button
                    type="button"
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="w-full flex items-center justify-center gap-2 rounded-full bg-[var(--green-800)] py-3.5 text-xs sm:text-sm font-extrabold text-white shadow-md transition hover:bg-[var(--green-950)] hover:scale-[1.01] active:scale-95 cursor-pointer"
                  >
                    <span>Request a Quote</span>
                    <ArrowRight size={16} />
                  </button>

                  <a
                    href={`https://wa.me/919052867067?text=${encodeURIComponent(
                      `Hi VizagPlots, I am interested in "${project.name}" at ${project.location}. Please share pricing and layout availability.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 text-xs sm:text-sm font-bold text-white shadow-md transition hover:brightness-105 hover:scale-[1.01] active:scale-95"
                  >
                    <WhatsAppIcon className="h-4 w-4 fill-white" />
                    <span>Chat on WhatsApp</span>
                  </a>

                  <a
                    href="tel:+919052867067"
                    className="w-full flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white py-3 text-xs sm:text-sm font-bold text-slate-800 transition hover:bg-slate-50"
                  >
                    <Phone size={15} className="text-[var(--green-700)]" />
                    <span>Call (+91) 9052867067</span>
                  </a>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-5 text-center">
                  <p className="text-[11px] font-semibold text-slate-400">
                    Trusted by 12,000+ Happy Families in Visakhapatnam
                  </p>
                </div>
              </div>

              {/* Back to all projects link */}
              <Link
                href="/projects"
                className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white p-4 text-xs font-bold text-slate-700 transition hover:text-[var(--green-800)] hover:border-[var(--green-700)] shadow-xs"
              >
                <ArrowLeft size={14} />
                <span>Browse All Other Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Explore More Ventures Section */}
      <section className="border-t border-slate-200 bg-white py-14">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="inline-block rounded-full bg-lime-100 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-[var(--green-800)] border border-lime-300">
                RECOMMENDED VENTURES
              </span>
              <h2 className="display-font mt-2 text-2xl sm:text-3xl font-black text-[var(--green-950)]">
                Explore More <span className="text-[#8dbb16]">Prime Ventures</span>
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[var(--green-800)] hover:text-[var(--green-950)] transition"
            >
              <span>View All 15+ Layouts</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {allProjectsData
              .filter((p) => p.slug !== project.slug)
              .slice(0, 3)
              .map((rel) => (
                <article
                  key={rel.slug}
                  className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:border-[var(--green-700)]/40"
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                      <Image
                        src={rel.image}
                        alt={rel.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <span className="absolute left-3.5 top-3.5 rounded-full bg-[#0b241b]/95 backdrop-blur px-3 py-0.5 text-[10.5px] font-bold text-lime-300 border border-lime-400/40">
                        {rel.badge}
                      </span>
                      <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                        <span className="text-xs font-semibold text-lime-300 flex items-center gap-1">
                          <MapPin size={12} /> {rel.location}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="display-font text-lg font-bold text-[var(--green-950)] group-hover:text-[var(--green-800)] transition">
                        {rel.name}
                      </h3>
                      <p className="mt-1 text-xs text-slate-500 line-clamp-2">
                        {rel.description}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 p-4 bg-slate-50/70 flex items-center gap-2">
                    <Link
                      href={`/projects/${rel.slug}`}
                      className="flex-1 flex items-center justify-center gap-1.5 rounded-full bg-[var(--green-800)] px-3 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-[var(--green-950)]"
                    >
                      <span>View Details</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0b241b] text-white pt-14 pb-8 border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <Link href="/">
                <Image src="/logo.png" alt="VizagPlots" width={145} height={78} className="h-14 w-auto brightness-0 invert object-contain" />
              </Link>
              <p className="mt-4 text-xs text-white/70 leading-relaxed max-w-sm">
                Authorized marketing advisory for Subhagruha Group ventures across Visakhapatnam, offering clear-title plotted communities with complete transparency.
              </p>
              <div className="mt-4">
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

            <div>
              <p className="text-xs font-extrabold uppercase tracking-[.2em] text-lime-300">Office Location</p>
              <div className="mt-5 text-xs text-white/65 space-y-2 leading-relaxed">
                <p className="flex items-start gap-2">
                  <MapPin size={14} className="text-lime-400 shrink-0 mt-0.5" />
                  <span>50-50-33/2, J R Plaza, Gurudwara Junction, Visakhapatnam, AP 530013</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={14} className="text-lime-400 shrink-0" />
                  <span>(+91) 9052867067</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={14} className="text-lime-400 shrink-0" />
                  <span>janishaik9@gmail.com</span>
                </p>
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
        href={`https://wa.me/919052867067?text=${encodeURIComponent(
          `Hi, I am interested in ${project.name} at ${project.location}.`
        )}`}
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

      {/* Full-Screen Lightbox Modal for Gallery Images */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-black/95 p-4 sm:p-6 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
        >
          {/* Top Bar */}
          <div className="flex w-full max-w-[1400px] items-center justify-between text-white border-b border-white/10 pb-4">
            <div>
              <span className="inline-block rounded-full bg-lime-400/20 px-2.5 py-0.5 text-[10px] font-bold text-lime-300 border border-lime-400/30">
                {filteredGallery[lightboxIndex]?.category}
              </span>
              <h3 className="mt-1 text-sm sm:text-base font-bold text-white">
                {filteredGallery[lightboxIndex]?.title}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-white/60">
                {lightboxIndex + 1} / {filteredGallery.length}
              </span>
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                aria-label="Close Lightbox"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Center Image with Previous & Next controls */}
          <div className="relative flex flex-1 w-full max-w-[1400px] items-center justify-center my-4 overflow-hidden">
            <button
              type="button"
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev === 0 ? filteredGallery.length - 1 : prev - 1
                )
              }
              aria-label="Previous Image"
              className="absolute left-2 sm:left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black/90 hover:scale-105 cursor-pointer"
            >
              <ChevronLeft size={26} />
            </button>

            <div className="relative h-full w-full max-h-[75vh] max-w-[1100px] flex items-center justify-center">
              <img
                src={filteredGallery[lightboxIndex]?.src}
                alt={filteredGallery[lightboxIndex]?.title}
                className="max-h-[75vh] max-w-full rounded-2xl object-contain shadow-2xl"
              />
            </div>

            <button
              type="button"
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev === filteredGallery.length - 1 ? 0 : prev + 1
                )
              }
              aria-label="Next Image"
              className="absolute right-2 sm:right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black/90 hover:scale-105 cursor-pointer"
            >
              <ChevronRight size={26} />
            </button>
          </div>

          {/* Bottom Thumbnails Strip */}
          <div className="w-full max-w-[1400px] overflow-x-auto hide-scrollbar border-t border-white/10 pt-3">
            <div className="flex items-center justify-center gap-2">
              {filteredGallery.map((thumb, idx) => (
                <button
                  key={thumb.src + idx}
                  type="button"
                  onClick={() => setLightboxIndex(idx)}
                  className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg transition cursor-pointer ${
                    idx === lightboxIndex
                      ? "ring-2 ring-lime-400 scale-105"
                      : "opacity-50 hover:opacity-100"
                  }`}
                >
                  <img
                    src={thumb.src}
                    alt={thumb.title}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
