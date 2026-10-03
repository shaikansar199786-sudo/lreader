"use client";

import {
  ArrowRight,
  Award,
  Building2,
  Calendar,
  Check,
  CheckCircle2,
  Compass,
  FileCheck,
  LandPlot,
  MapPin,
  Maximize2,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  TreePine,
  Waves,
  X,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import { ProjectDetail } from "./data/projectsData";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

interface ProjectDetailsModalProps {
  project: ProjectDetail | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: (projectName: string) => void;
}

export default function ProjectDetailsModal({
  project,
  isOpen,
  onClose,
  onRequestQuote,
}: ProjectDetailsModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-[860px] max-h-[92vh] overflow-y-auto rounded-3xl bg-white shadow-2xl border border-slate-100 my-auto z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition hover:bg-black/90 hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
        >
          <X size={18} />
        </button>

        {/* Media Hero Header */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-950">
          <img
            src={project.image}
            alt={project.name}
            className="h-full w-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Badges in Top Left */}
          <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-lime-400 px-3 py-1 text-xs font-black uppercase tracking-wider text-[var(--green-950)] shadow-md">
              {project.badge}
            </span>
            <span className="rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-slate-800 shadow-sm">
              {project.approval}
            </span>
          </div>

          {/* Hero Bottom Info Overlay */}
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <div className="flex items-center gap-1.5 text-xs font-bold text-lime-300">
              <MapPin size={14} className="shrink-0" />
              <span>{project.location}</span>
            </div>
            <h2 className="display-font mt-1 text-2xl sm:text-3xl lg:text-4xl font-black text-white drop-shadow-sm">
              {project.name}
            </h2>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-5 sm:p-8 space-y-6">
          {/* Quick Specifications Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-200/80">
            <div className="flex flex-col">
              <span className="text-[10.5px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                <Ruler size={12} className="text-[var(--green-700)]" />
                Plot Size
              </span>
              <span className="mt-1 text-xs sm:text-sm font-extrabold text-[var(--green-950)]">
                {project.size}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-[10.5px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                <Compass size={12} className="text-[var(--green-700)]" />
                Facing
              </span>
              <span className="mt-1 text-xs sm:text-sm font-extrabold text-[var(--green-950)]">
                {project.facing}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-[10.5px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                <FileCheck size={12} className="text-[var(--green-700)]" />
                Approval
              </span>
              <span className="mt-1 text-xs sm:text-sm font-extrabold text-[var(--green-950)]">
                {project.approval}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-[10.5px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                <ShieldCheck size={12} className="text-[var(--green-700)]" />
                Status
              </span>
              <span className="mt-1 text-xs sm:text-sm font-extrabold text-[#214b28]">
                {project.status}
              </span>
            </div>
          </div>

          {/* Overview & Description */}
          <div>
            <h3 className="display-font text-lg font-black text-[var(--green-950)] flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#8dbb16]" />
              Project Overview
            </h3>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
              {project.description}
            </p>
          </div>

          {/* Layout Features Tags */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2.5">
              Highlights & Clearances
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.features.map((feat) => (
                <span
                  key={feat}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-lime-50 px-3 py-1.5 text-xs font-bold text-[var(--green-900)] border border-lime-300/80 shadow-xs"
                >
                  <CheckCircle2 size={13} className="text-[#8dbb16]" />
                  <span>{feat}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Amenities Grid */}
          <div>
            <h3 className="display-font text-lg font-black text-[var(--green-950)] flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-[#8dbb16]" />
              Infrastructure & Amenities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.amenities.map((amenity, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3 text-xs font-bold text-slate-700 transition hover:bg-white hover:border-[var(--green-700)]/30 hover:shadow-sm"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--green-800)] text-lime-300 font-bold">
                    <Check size={14} className="stroke-[3]" />
                  </div>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location Highlights & Connectivity */}
          {project.locationHighlights && project.locationHighlights.length > 0 && (
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-4 sm:p-5">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-[var(--green-900)] flex items-center gap-2 mb-2.5">
                <MapPin size={14} className="text-[var(--green-700)]" />
                Location & Connectivity Highlights
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {project.locationHighlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--green-700)]" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA Footer Row */}
          <div className="border-t border-slate-200 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onRequestQuote(project.name);
                }}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-full bg-[var(--green-800)] px-6 py-3 text-xs sm:text-sm font-extrabold text-white shadow-md transition hover:bg-[var(--green-950)] hover:scale-[1.01] active:scale-95 cursor-pointer"
              >
                <span>Request a Quote</span>
                <ArrowRight size={15} />
              </button>

              <a
                href={`https://wa.me/919052867067?text=${encodeURIComponent(
                  `Hi VizagPlots, I would like complete details, pricing and layout for "${project.name}" at ${project.location}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition hover:brightness-105 hover:scale-[1.01] active:scale-95 cursor-pointer"
              >
                <WhatsAppIcon className="h-4 w-4 fill-white" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>

            <a
              href="tel:+919052867067"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-[var(--green-800)] transition"
            >
              <Phone size={14} className="text-[var(--green-700)]" />
              <span>Call: (+91) 9052867067</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
