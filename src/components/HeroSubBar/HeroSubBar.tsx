"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Unique logos only
const defaultLogos = [
  { src: "/logos/dinery_logo.png", alt: "Dinery" },
  { src: "/logos/morekod_logo.png", alt: "Morekod" },
  { src: "/logos/safelogger_logo.png", alt: "SafeLogger" },
  { src: "/logos/tansesuar_png-logo.png", alt: "Tansesuar" },
  { src: "/logos/dinery_logo.png", alt: "Dinery Partner" }, // Extra filler for grid balance if needed
];

export default function HeroSubBar() {
  return (
    <div className="w-full bg-white border-y border-gray-100 py-16 flex flex-col items-center relative z-10">
      
      {/* Title and Subtitle matching reference image */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 px-4"
      >
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-gray-900 mb-2">
          Güvenilir Kurumsal Çözüm Ortaklarımız.
        </h2>
        <p className="text-[17px] sm:text-[19px] text-gray-500 font-normal tracking-tight max-w-2xl mx-auto">
          Alanında öncü yerel işletmelerden, saygın kurumsal markalara kadar İstanbul'un güvenini paylaşıyoruz.
        </p>
      </motion.div>
      
      {/* Static Responsive Grid */}
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 sm:gap-x-20 sm:gap-y-16">
          {defaultLogos.map((logo, index) => (
            <motion.div 
              key={`${logo.alt}-${index}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, opacity: 1 }}
              className="flex items-center justify-center w-32 sm:w-44 h-12 relative opacity-40 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
            >
              <Image 
                src={logo.src} 
                alt={logo.alt}
                fill
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
