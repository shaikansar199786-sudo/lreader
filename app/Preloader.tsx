"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

function getDestinationLabel(pathname: string): string {
  if (pathname === "/") return "Welcome to VizagPlots";
  if (pathname.startsWith("/about")) return "Loading About VizagPlots...";
  if (pathname.startsWith("/projects/")) return "Loading Project Details...";
  if (pathname.startsWith("/projects")) return "Exploring Prime Ventures...";
  if (pathname.startsWith("/blog")) return "Loading Real Estate Insights...";
  if (pathname.startsWith("/contact")) return "Loading Contact & Site Visits...";
  return "Loading Verified Corridors...";
}

export default function Preloader() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [isInitial, setIsInitial] = useState(true);
  const [stepText, setStepText] = useState("Locating Prime Plots...");
  const [progress, setProgress] = useState(20);
  const [animKey, setAnimKey] = useState(0);

  const prevPathnameRef = useRef(pathname);
  const navigationStartTimeRef = useRef<number>(Date.now());
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const exitTimerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Helper to start loading animation on page changes
  const startTransition = (destinationPath: string) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);

    navigationStartTimeRef.current = Date.now();
    setIsInitial(false);
    setAnimKey((prev) => prev + 1); // Forces fresh remount of SVG and all CSS animations
    setIsVisible(true);
    setIsExiting(false);
    setProgress(25);
    setStepText(getDestinationLabel(destinationPath));

    // Progress bar animation
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => (prev < 85 ? prev + Math.floor(Math.random() * 15) + 5 : prev));
    }, 120);

    // Safeguard timeout
    timerRef.current = setTimeout(() => {
      finishTransition();
    }, 3000);
  };

  // Helper to finish loading and smoothly fade out
  const finishTransition = () => {
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    setProgress(100);

    // Minimum display time ensures user clearly sees "VIZAGPLOTS" animation
    const elapsed = Date.now() - navigationStartTimeRef.current;
    const minDisplayTime = isInitial ? 1400 : 750;
    const delay = Math.max(100, minDisplayTime - elapsed);

    exitTimerRef.current = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIsVisible(false);
        setIsExiting(false);
        setProgress(0);
      }, 400); // 400ms fade-out transition
    }, delay);
  };

  // Initial site visit animation
  useEffect(() => {
    navigationStartTimeRef.current = Date.now();

    const t1 = setTimeout(() => setStepText("Mapping Approved Corridors..."), 400);
    const t2 = setTimeout(() => setStepText("Connecting Verified Locations..."), 800);
    const t3 = setTimeout(() => setStepText("Welcome to VizagPlots"), 1200);

    setProgress(40);
    const pTimer = setTimeout(() => setProgress(85), 600);

    const tExit = setTimeout(() => {
      setProgress(100);
      setIsExiting(true);
    }, 1800);

    const tDone = setTimeout(() => {
      setIsVisible(false);
      setIsExiting(false);
      setProgress(0);
      setIsInitial(false);
    }, 2200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(pTimer);
      clearTimeout(tExit);
      clearTimeout(tDone);
    };
  }, []);

  // Listen to pathname changes (route change completed)
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      finishTransition();
    }
  }, [pathname]);

  // Global click & popstate listeners for page change detection
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Ignore external links, new tabs, modifier keys, downloads, tel/mail
      if (
        anchor.target === "_blank" ||
        anchor.hasAttribute("download") ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.altKey ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("javascript:") ||
        href.startsWith("https://wa.me") ||
        href.startsWith("http://wa.me")
      ) {
        return;
      }

      try {
        const url = new URL(anchor.href, window.location.href);
        // Only trigger for same-origin internal navigations
        if (url.origin === window.location.origin) {
          if (
            url.pathname === window.location.pathname &&
            url.search === window.location.search
          ) {
            return;
          }

          startTransition(url.pathname);
        }
      } catch {
        // ignore invalid URL
      }
    };

    const handlePopState = () => {
      startTransition(window.location.pathname);
    };

    window.addEventListener("click", handleAnchorClick, true);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("click", handleAnchorClick, true);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsExiting(false);
    }, 200);
  };

  if (!isVisible) return null;

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/98 backdrop-blur-md transition-all duration-400 ease-out select-none cursor-pointer ${
        isExiting
          ? "opacity-0 pointer-events-none scale-105"
          : "opacity-100 pointer-events-auto scale-100"
      }`}
    >
      {/* Subtle radial ambient background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(162,207,36,0.15)_0%,transparent_65%)]" />

      {/* Center Animated Logo & Branding (Remounted on every navigation with animKey) */}
      <div key={animKey} className="relative flex flex-col items-center justify-center px-4">
        {/* Animated Vector Logo */}
        <div className="relative w-[290px] sm:w-[360px] md:w-[420px] max-w-full">
          <svg
            viewBox="0 0 420 220"
            className="w-full h-auto overflow-visible drop-shadow-sm"
          >
            <defs>
              <filter id="limeGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Radar wave 1 (under Pin 1) */}
            <circle
              cx="175"
              cy="89"
              r="6"
              fill="none"
              stroke="#a2cf24"
              strokeWidth="2"
              className="animate-radar-1"
            />

            {/* Left Pin Shadow */}
            <ellipse
              cx="175"
              cy="89"
              rx="30"
              ry="7"
              fill="#a2cf24"
              className={isInitial ? "animate-shadow-1" : "animate-shadow-quick-1"}
            />

            {/* Road / Connecting Pathway */}
            <g id="preloader-road" className={isInitial ? "animate-road" : "animate-road-quick"}>
              {/* Dark Green Road base */}
              <path
                d="M 105 104 L 180 94 L 140 128 L 305 128"
                fill="none"
                stroke="#3b4d24"
                strokeWidth="7"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              {/* Lime Green Road stripe */}
              <path
                d="M 112 100 L 182 90 L 144 124 L 300 124"
                fill="none"
                stroke="#a2cf24"
                strokeWidth="5"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              {/* Dashed center line */}
              <path
                d="M 118 102 L 181 92 L 142 126 L 295 126"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.4"
                strokeDasharray="5 4"
                strokeLinecap="round"
              />
            </g>

            {/* Left Pin 1 (Dark Olive Green) */}
            <g id="preloader-pin-1" className={isInitial ? "animate-pin-1" : "animate-pin-quick-1"}>
              <path
                d="M 175 88 C 158 68, 149 55, 149 40 C 149 25.6, 160.6 14, 175 14 C 189.4 14, 201 25.6, 201 40 C 201 55, 192 68, 175 88 Z"
                fill="#3b4d24"
              />
              <circle cx="175" cy="40" r="9" fill="#ffffff" />
            </g>

            {/* Radar wave 2 (under Pin 2) */}
            <circle
              cx="255"
              cy="100"
              r="6"
              fill="none"
              stroke="#3b4d24"
              strokeWidth="2"
              className="animate-radar-2"
            />

            {/* Right Pin Shadow */}
            <ellipse
              cx="255"
              cy="100"
              rx="40"
              ry="9"
              fill="#3b4d24"
              className={isInitial ? "animate-shadow-2" : "animate-shadow-quick-2"}
            />

            {/* Right Pin 2 (Bright Lime Green) */}
            <g id="preloader-pin-2" className={isInitial ? "animate-pin-2" : "animate-pin-quick-2"}>
              <path
                d="M 255 99 C 235 74, 224 59, 224 40 C 224 22.8, 237.8 9, 255 9 C 272.2 9, 286 22.8, 286 40 C 286 59, 275 74, 255 99 Z"
                fill="#a2cf24"
              />
              <circle cx="255" cy="40" r="12" fill="#ffffff" />
            </g>

            {/* Title: VIZAGPLOTS - ALWAYS VISIBLE WITH CLEAN REVEAL ANIMATION */}
            <g className={isInitial ? "animate-logo-text" : "animate-logo-text-transition"}>
              <text
                x="210"
                y="182"
                textAnchor="middle"
                fontFamily="'Arial Black', Impact, sans-serif"
                fontWeight="900"
                fontSize="46"
                letterSpacing="1.5"
              >
                <tspan fill="#3b4d24">VIZAG</tspan>
                <tspan fill="#a2cf24">PLOTS</tspan>
              </text>
            </g>
          </svg>
        </div>

        {/* Dynamic destination/status pill */}
        <div className="mt-4 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-[#8dbb16] animate-ping" />
          <p className="text-[12px] sm:text-xs font-bold tracking-[0.2em] uppercase text-slate-800 transition-all duration-300">
            {stepText}
          </p>
        </div>

        {/* Tagline */}
        <p className={`mt-2 text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase text-[#63860c] ${isInitial ? "animate-tagline" : "animate-tagline-transition"}`}>
          Find the Perfect Plot · Build Your Dream Home
        </p>

        {/* Progress percent indicator */}
        <div className="mt-4 w-40 sm:w-48 bg-slate-100 rounded-full h-1.5 overflow-hidden">
          <div
            className="h-full bg-[#8dbb16] transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Skip button hint */}
        <span className="mt-5 text-[10px] font-semibold text-slate-400 hover:text-slate-600 transition-colors">
          Click anywhere to skip
        </span>
      </div>
    </div>
  );
}
