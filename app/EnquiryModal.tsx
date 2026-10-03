"use client";

import { ArrowRight, CheckCircle2, Send, X } from "lucide-react";
import { useEffect, useState } from "react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

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

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const text = `Hi VizagPlots, I would like to request a quote.%0A%0A*Name:* ${encodeURIComponent(
      fullName
    )}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Email:* ${encodeURIComponent(
      email
    )}%0A*Project:* ${encodeURIComponent(project || "Not specified")}%0A*Message:* ${encodeURIComponent(
      message || "None"
    )}`;

    // Open WhatsApp in new tab after brief delay
    setTimeout(() => {
      window.open(`https://wa.me/919052867067?text=${text}`, "_blank");
    }, 600);
  };

  const handleReset = () => {
    setFullName("");
    setPhone("");
    setEmail("");
    setProject("");
    setMessage("");
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/65 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-[580px] max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-5 sm:p-7 shadow-2xl border border-slate-100 my-auto z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-4 top-4 sm:right-5 sm:top-5 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition z-10 cursor-pointer"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div className="py-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-lime-100 text-[var(--green-700)] mb-3">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="display-font text-xl sm:text-2xl font-black text-[var(--green-950)]">
              Quote Request Received!
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
              Thank you, <span className="font-bold text-slate-800">{fullName}</span>. Our advisory team will respond within one business day. We are opening WhatsApp to connect you directly.
            </p>
            <button
              onClick={handleReset}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--green-800)] px-6 py-2.5 text-xs font-bold text-white shadow-md hover:bg-[var(--green-950)] transition cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="pr-8">
              <span className="inline-block rounded-full bg-lime-100 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-[var(--green-800)] border border-lime-300">
                Enquire Now
              </span>
              <h2 className="display-font mt-1.5 text-xl sm:text-2xl font-black text-[var(--green-950)] leading-tight">
                Request a Quote
              </h2>
              <p className="mt-1 text-xs text-slate-500 leading-normal">
                Tell us what you&apos;re looking for — our team responds within one business day.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              {/* Row 1: Full Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Full Name */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2 text-xs sm:text-sm outline-none focus:border-[var(--green-700)] focus:bg-white focus:ring-1 focus:ring-[var(--green-700)] transition"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2 text-xs sm:text-sm outline-none focus:border-[var(--green-700)] focus:bg-white focus:ring-1 focus:ring-[var(--green-700)] transition"
                  />
                </div>
              </div>

              {/* Row 2: Email Address & Interested Project */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Email Address */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2 text-xs sm:text-sm outline-none focus:border-[var(--green-700)] focus:bg-white focus:ring-1 focus:ring-[var(--green-700)] transition"
                  />
                </div>

                {/* Interested Project Dropdown */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Interested Project
                  </label>
                  <select
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2 text-xs sm:text-sm outline-none focus:border-[var(--green-700)] focus:bg-white focus:ring-1 focus:ring-[var(--green-700)] transition text-slate-700"
                  >
                    <option value="">Select a project</option>
                    <option value="Sukrithi Aawas">Sukrithi Aawas (Visakhapatnam)</option>
                    <option value="Sukruthi Ananthika">Sukruthi Ananthika (Srikakulam Highway)</option>
                    <option value="Sukrithi Windsor">Sukrithi Windsor (Bheemannadorapalem)</option>
                    <option value="Sukrithi Sathvik">Sukrithi Sathvik (Gantlam)</option>
                    <option value="Sukrithi Nivas Phase 3">Sukrithi Nivas Phase 3 (Visakhapatnam)</option>
                    <option value="Maple Meadows">Maple Meadows (Modavalasa)</option>
                    <option value="Sukriti Sampath Phase 1 & 2">Sukriti Sampath Phase 1 & 2 (Sontyam)</option>
                    <option value="Sukrithi Lohitha">Sukrithi Lohitha (Anandapuram)</option>
                    <option value="Sukrithi Saanvi Phase 4">Sukrithi Saanvi Phase 4 (Bhogapuram Airport)</option>
                    <option value="Sukeerthi Sadan Phase 2">Sukeerthi Sadan Phase 2 (Kothavalasa)</option>
                    <option value="General Residential Plot Enquiry">General Residential Plot Enquiry</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us a little about what you're looking for"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2 text-xs sm:text-sm outline-none focus:border-[var(--green-700)] focus:bg-white focus:ring-1 focus:ring-[var(--green-700)] transition resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-full bg-[var(--green-800)] py-3 text-xs sm:text-sm font-extrabold text-white shadow-md transition-all hover:bg-[var(--green-950)] hover:scale-[1.005] active:scale-95 cursor-pointer mt-1"
              >
                <span>Request a Quote</span>
                <ArrowRight size={15} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
