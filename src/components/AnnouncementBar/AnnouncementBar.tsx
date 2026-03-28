"use client";

import { MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-[#1a2f24] text-[#d4c6b1] text-xs font-medium tracking-wide z-[100] relative border-b border-[#2d4a3a]">
      {/* ── DESKTOP & TABLET VIEW (md and up) ── */}
      <div className="hidden md:flex max-w-[85rem] mx-auto px-6 py-2 items-center justify-between">
        
        {/* Left Side: Insta + Phone (White) */}
        <div className="flex items-center gap-5">
          <Link 
            href="https://www.instagram.com/kurbanimcinarda" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors duration-200" 
            aria-label="Instagram"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </Link>
          <a href="tel:+902129099495" className="flex items-center gap-1.5 text-white hover:text-gray-300 transition-colors duration-200">
            <Phone size={12} />
            <span>0212 909 94 95</span>
          </a>
        </div>

        {/* Center: Brand Trust (Beige) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] uppercase font-bold tracking-[0.2em] opacity-90">
          16 YILLIK DENEYİM • ERKEN KAYIT FIRSATI
        </div>

        {/* Right Side: Location (Beige) */}
        <div className="flex items-center gap-2 opacity-90">
          <MapPin size={12} />
          <span>Bağcılar / İstanbul</span>
        </div>
      </div>

      {/* ── MOBILE VIEW (below md) ── */}
      <div className="md:hidden flex flex-col items-center justify-center py-2 gap-1.5 text-[10px] max-w-full px-4">
        {/* Top Mobile Row: IG + Phone + Location */}
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-3">
            <Link 
              href="https://www.instagram.com/kurbanimcinarda" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white" 
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </Link>
            <a href="tel:+902129099495" className="flex items-center gap-1 text-white">
              <Phone size={9} />
              <span>0212 909 94 95</span>
            </a>
          </div>
          <div className="flex items-center gap-1 opacity-90">
            <MapPin size={9} />
            <span>Bağcılar / İstanbul</span>
          </div>
        </div>
        {/* Bottom Mobile Row: Trust Badge */}
        <div className="uppercase font-bold tracking-[0.14em] opacity-80 text-[8.5px] w-full text-center border-t border-[#2d4a3a]/50 pt-1.5 mt-0.5">
          16 YILLIK DENEYİM • ERKEN KAYIT FIRSATI
        </div>
      </div>
    </div>
  );
}
