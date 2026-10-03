"use client";

import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  ExternalLink,
  FileCheck,
  Filter,
  LandPlot,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  Share2,
  ShieldCheck,
  Sparkles,
  Tag,
  User,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import EnquiryModal from "../EnquiryModal";
import FooterSocials from "../FooterSocials";
import { allBlogsData, BlogPost } from "../data/blogsData";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const categories = [
  "All Articles",
  "Market Trends",
  "Legal & Approvals",
  "Investment Insights",
  "Home Planning",
  "Corridor Spotlight",
  "Safety & Infrastructure",
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Articles");
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const mainNavLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about-us" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog", active: true },
    { label: "Contact", href: "/contact" },
  ];

  const featuredPost = allBlogsData.find((b) => b.featured) || allBlogsData[0];

  const filteredPosts = allBlogsData.filter((post) => {
    const matchesCategory =
      selectedCategory === "All Articles" || post.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="border-b border-slate-200 bg-white px-6 py-4 xl:hidden">
            <div className="flex flex-col gap-3">
              {mainNavLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm font-semibold transition ${
                    item.active ? "text-[var(--green-800)] font-bold" : "text-slate-700"
                  }`}
                >
                  {item.label}
                </Link>
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

      {/* Breadcrumb Bar */}
      <div className="border-b border-slate-200 bg-white py-3">
        <div className="mx-auto flex max-w-[1400px] items-center gap-2 px-5 sm:px-8 lg:px-10 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-[var(--green-800)]">Home</Link>
          <ChevronRight size={13} className="text-slate-400" />
          <span className="text-[var(--green-950)] font-bold">Real Estate Blog & Insights</span>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0b241b] via-[#113a29] to-[#0b241b] py-14 text-white sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(141,187,22,0.18),transparent_50%)]" />
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-lime-400/20 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-lime-300 border border-lime-400/30">
              <Sparkles size={13} className="text-lime-300" />
              VIZAG PROPERTY INTELLIGENCE & INSIGHTS
            </span>
            <h1 className="display-font mt-4 text-3xl font-black sm:text-5xl lg:text-[3.25rem] leading-[1.1] text-white">
              Real Estate <span className="text-lime-300">Insights & Guides</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/80">
              Expert market intelligence on Visakhapatnam land appreciation, Bhogapuram International Airport expansion, VMRDA plot legal diligence, and long-term wealth creation.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Category Filter Bar */}
      <section className="sticky top-[74px] z-40 border-b border-slate-200 bg-white/95 backdrop-blur shadow-xs">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10 py-3.5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar w-full md:w-auto pb-1 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[var(--green-800)] text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72 shrink-0">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, topics, areas..."
                className="w-full rounded-full border border-slate-200 bg-slate-50 py-2 pl-9 pr-8 text-xs font-medium outline-none transition focus:border-[var(--green-700)] focus:bg-white focus:ring-1 focus:ring-[var(--green-700)]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X size={13} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article Card (shown when All Articles is selected and no search) */}
      {selectedCategory === "All Articles" && !searchQuery && (
        <section className="py-10 border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-red-600">
                FEATURED SPOTLIGHT ARTICLE
              </span>
            </div>

            <article
              onClick={() => setActiveArticle(featuredPost)}
              className="group cursor-pointer overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:border-[var(--green-700)]/40 grid grid-cols-1 lg:grid-cols-12"
            >
              <div className="relative lg:col-span-6 aspect-[16/10] lg:aspect-auto w-full overflow-hidden bg-slate-900">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:hidden" />
                <span className="absolute left-4 top-4 rounded-full bg-[var(--green-800)] px-3.5 py-1 text-xs font-bold text-lime-300 border border-lime-400/30">
                  {featuredPost.category}
                </span>
              </div>

              <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1.5 font-semibold">
                      <Calendar size={13} className="text-[var(--green-700)]" />
                      {featuredPost.date}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1.5 font-semibold">
                      <Clock size={13} className="text-[var(--green-700)]" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="display-font text-2xl sm:text-3xl font-black text-[var(--green-950)] group-hover:text-[var(--green-800)] transition leading-tight">
                    {featuredPost.title}
                  </h2>

                  <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-slate-600 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {featuredPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-lime-50 px-2.5 py-1 text-[11px] font-semibold text-[var(--green-800)] border border-lime-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--green-800)] text-lime-300 font-bold text-xs">
                      {featuredPost.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">{featuredPost.author}</p>
                      <p className="text-[10.5px] text-slate-400">{featuredPost.authorRole}</p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[var(--green-800)] group-hover:translate-x-1 transition-transform">
                    <span>Read Full Article</span>
                    <ArrowRight size={15} />
                  </span>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs font-bold tracking-wider uppercase text-[var(--green-800)]">
                Showing {filteredPosts.length} Articles
              </p>
              <h2 className="display-font mt-1 text-2xl sm:text-3xl font-black text-[var(--green-950)]">
                {selectedCategory}
              </h2>
            </div>

            {selectedCategory !== "All Articles" && (
              <button
                type="button"
                onClick={() => setSelectedCategory("All Articles")}
                className="text-xs font-bold text-[var(--green-700)] hover:underline cursor-pointer"
              >
                Clear Category Filter ✕
              </button>
            )}
          </div>

          {filteredPosts.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center">
              <BookOpen className="mx-auto h-12 w-12 text-slate-300" />
              <h3 className="mt-4 text-lg font-bold text-slate-700">No articles found</h3>
              <p className="mt-1 text-xs text-slate-500">Try adjusting your search query or category filter</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("All Articles");
                  setSearchQuery("");
                }}
                className="mt-5 rounded-full bg-[var(--green-800)] px-5 py-2 text-xs font-bold text-white cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  onClick={() => setActiveArticle(post)}
                  className="group flex flex-col justify-between cursor-pointer overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[var(--green-700)]/40"
                >
                  <div>
                    {/* Thumbnail Image */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <span className="absolute left-3.5 top-3.5 rounded-full bg-[#0b241b]/95 backdrop-blur px-3 py-1 text-[11px] font-bold text-lime-300 border border-lime-400/30">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-3 text-[11px] text-slate-500 mb-2">
                        <span className="flex items-center gap-1 font-semibold">
                          <Calendar size={12} className="text-[var(--green-700)]" />
                          {post.date}
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1 font-semibold">
                          <Clock size={12} className="text-[var(--green-700)]" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="display-font text-lg font-bold text-[var(--green-950)] group-hover:text-[var(--green-800)] transition leading-snug">
                        {post.title}
                      </h3>

                      <p className="mt-2.5 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-1">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md bg-slate-100 px-2 py-0.5 text-[10.5px] font-medium text-slate-600"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 p-4 bg-slate-50/70 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-500">
                      By {post.author}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[var(--green-800)] group-hover:translate-x-1 transition-transform">
                      <span>Read Article</span>
                      <ArrowRight size={13} />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Property Alert & Land Price Trends Newsletter */}
      <section className="bg-gradient-to-r from-[var(--green-950)] via-[var(--green-900)] to-[#0c2e1f] py-14 text-white">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12 backdrop-blur-md flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-xl">
              <span className="inline-block rounded-full bg-lime-400/20 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-lime-300 border border-lime-400/30">
                WEEKLY MARKET REPORT
              </span>
              <h2 className="display-font mt-3 text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                Stay Ahead of <span className="text-lime-300">Vizag Plot Prices</span>
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Subscribe to receive verified land price appreciation charts, new layout launch announcements, and VMRDA legal insights straight to your WhatsApp or inbox.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <a
                href={`https://wa.me/919052867067?text=${encodeURIComponent(
                  "Hi VizagPlots, please subscribe me to your weekly Vizag plot price trends and venture updates."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg transition hover:brightness-105 active:scale-95"
              >
                <WhatsAppIcon className="h-4 w-4 fill-white" />
                <span>Join Property Alert on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => setIsQuoteModalOpen(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-lime-400 px-6 py-3.5 text-xs sm:text-sm font-extrabold text-[var(--green-950)] shadow-lg transition hover:bg-lime-300 active:scale-95 cursor-pointer"
              >
                <span>Request Price List PDF</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Full Article Reader Modal */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-6 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl border border-slate-200">
            {/* Modal Header Bar */}
            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-200 bg-white/95 px-6 py-4 backdrop-blur">
              <span className="rounded-full bg-lime-100 px-3 py-1 text-xs font-bold text-[var(--green-800)] border border-lime-300">
                {activeArticle.category}
              </span>

              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                aria-label="Close article"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200 hover:text-slate-900 cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Article Content */}
            <div className="p-6 sm:p-10">
              <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                <span className="flex items-center gap-1 font-semibold">
                  <Calendar size={13} className="text-[var(--green-700)]" />
                  {activeArticle.date}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1 font-semibold">
                  <Clock size={13} className="text-[var(--green-700)]" />
                  {activeArticle.readTime}
                </span>
                <span>·</span>
                <span className="font-semibold text-slate-700">By {activeArticle.author}</span>
              </div>

              <h1 className="display-font text-2xl sm:text-4xl font-black text-[var(--green-950)] leading-tight">
                {activeArticle.title}
              </h1>

              <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-900">
                <Image
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-8 space-y-7">
                {activeArticle.content.map((sec, idx) => (
                  <div key={idx} className="space-y-3">
                    <h3 className="display-font text-xl sm:text-2xl font-bold text-[var(--green-950)]">
                      {sec.heading}
                    </h3>
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="text-sm sm:text-base leading-relaxed text-slate-600">
                        {p}
                      </p>
                    ))}

                    {sec.keyTakeaways && (
                      <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200/80 my-4 space-y-2">
                        <p className="text-xs font-extrabold uppercase tracking-wider text-[var(--green-800)] flex items-center gap-1.5">
                          <CheckCircle2 size={14} className="text-[var(--green-700)]" />
                          Key Takeaways
                        </p>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 font-medium pl-2">
                          {sec.keyTakeaways.map((item, kIdx) => (
                            <li key={kIdx} className="flex items-start gap-2">
                              <span className="text-[var(--green-700)] font-bold">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Tags & Sharing */}
              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {activeArticle.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-lime-50 px-2.5 py-1 text-xs font-semibold text-[var(--green-800)] border border-lime-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <a
                  href={`https://wa.me/919052867067?text=${encodeURIComponent(
                    `Hi VizagPlots, I was reading your article "${activeArticle.title}" and would like to discuss plotted investment options.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-xs font-bold text-white shadow-md transition hover:brightness-105"
                >
                  <WhatsAppIcon className="h-4 w-4 fill-white" />
                  <span>Discuss This with an Expert</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

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
                <Link href="/projects" className="hover:text-white transition">Projects</Link>
                <Link href="/blog" className="hover:text-white transition font-bold text-lime-300">Blog</Link>
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
        href="https://wa.me/919052867067?text=Hi%2C%20I%20am%20interested%20in%20learning%20more%20about%20Subhagruha%20ventures."
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
