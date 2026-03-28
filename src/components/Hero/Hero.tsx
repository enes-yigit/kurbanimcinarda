"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Truck, Scale, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

// ─── Animation Variants ──────────────────────────────────────────────────────

const fadeUp: any = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeIn: any = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

const float: any = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
};

const floatSlow: any = {
  animate: {
    y: [0, -6, 0],
    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 },
  },
};

// ─── Feature Badge ────────────────────────────────────────────────────────────

interface FeatureBadgeProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  accent?: string;
}

function FeatureBadge({ icon, title, subtitle, accent = 'orange' }: FeatureBadgeProps) {
  const accentMap: Record<string, string> = {
    orange: 'bg-orange-50 text-orange-500 ring-orange-100',
    green:  'bg-green-50  text-green-600  ring-green-100',
    blue:   'bg-blue-50   text-blue-600   ring-blue-100',
  };
  const cls = accentMap[accent] ?? accentMap.orange;

  return (
    <div className="flex items-center gap-3.5 group">
      {/* Icon bubble */}
      <div
        className={`flex-shrink-0 flex h-11 w-11 items-center justify-center rounded-2xl ring-1 shadow-sm transition-transform duration-300 group-hover:scale-110 ${cls}`}
      >
        {icon}
      </div>

      {/* Text */}
      <div className="flex flex-col leading-tight">
        <span className="text-[17px] font-bold text-gray-900 tracking-tight">{title}</span>
        <span className="text-[12px] font-medium text-gray-400 mt-0.5 tracking-wide">{subtitle}</span>
      </div>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fafafa] pt-32 pb-16 sm:pt-48 sm:pb-28">

      {/* ── Subtle background blobs ── */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-orange-100/40 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-amber-50/60 blur-[100px]" />
      </div>

      <div className="max-w-[85rem] px-5 mx-auto grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-6">

        {/* ══════════════════════════════════════════
            LEFT — Text content
        ══════════════════════════════════════════ */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left z-10">

          {/* Eyebrow pill */}
          <motion.div
            custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 text-gray-600 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase mb-7 shadow-sm"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-orange-400 animate-pulse" />
            İstanbul'un En Köklü Adresi
          </motion.div>

          {/* Heading */}
          <motion.h1
            custom={1} variants={fadeUp} initial="hidden" animate="visible"
            className="text-[2.6rem] sm:text-[3.25rem] lg:text-[3.6rem] font-extrabold tracking-tight text-gray-900 leading-[1.08]"
          >
            Aileniz İçin{' '}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">En Kaliteli</span>
              {/* underline accent */}
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 220 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M2 7 C40 3, 130 3, 218 7"
                  stroke="#f97316"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            {' '}Seçim
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={2} variants={fadeUp} initial="hidden" animate="visible"
            className="mt-6 max-w-md text-[16.5px] sm:text-[17.5px] text-gray-500 font-medium leading-relaxed"
          >
            2026 kurban kayıtlarımız başlamıştır. Modern tesislerimizde, aynı güven ve huzurla ibadetinizi yerine getirmeniz için hizmetinizdeyiz.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={3} variants={fadeUp} initial="hidden" animate="visible"
            className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start w-full sm:w-auto"
          >
            <Button
              size="lg"
              onClick={() => window.open('https://wa.me/902129099495', '_blank')}
              className="px-7 py-6 text-[15px] font-bold tracking-wide rounded-2xl bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              Kayıt Ol &amp; Bilgi Al
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('akilli-asistan')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-7 py-6 text-[15px] font-bold tracking-wide rounded-2xl border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              Paketleri İncele
            </Button>
          </motion.div>

          {/* ── Feature badges ─────────────────────── */}
          <motion.div
            custom={4} variants={fadeUp} initial="hidden" animate="visible"
            className="mt-12 w-full"
          >
            {/* Divider */}
            <div className="flex items-center gap-3 mb-7">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-gray-400">
                Neden Biz?
              </span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5">

              {/* Badge 1 */}
              <motion.div
                custom={0} variants={fadeUp} initial="hidden" animate="visible"
                className="flex items-start gap-3.5 rounded-2xl bg-white border border-gray-100 shadow-sm px-4 py-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500 ring-1 ring-orange-100 mt-0.5">
                  <Truck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[15px] font-extrabold text-gray-900 leading-tight">1. Gün Teslimat</p>
                  <p className="text-[12px] text-gray-400 font-medium mt-1 leading-snug">Randevulu &amp; soğuk zincirli</p>
                </div>
              </motion.div>

              {/* Badge 2 */}
              <motion.div
                custom={1} variants={fadeUp} initial="hidden" animate="visible"
                className="flex items-start gap-3.5 rounded-2xl bg-white border border-gray-100 shadow-sm px-4 py-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 mt-0.5">
                  <Scale className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[15px] font-extrabold text-gray-900 leading-tight">7 Kefeli Tartı</p>
                  <p className="text-[12px] text-gray-400 font-medium mt-1 leading-snug">Hassas &amp; sertifikalı ölçüm</p>
                </div>
              </motion.div>

              {/* Badge 3 */}
              <motion.div
                custom={2} variants={fadeUp} initial="hidden" animate="visible"
                className="flex items-start gap-3.5 rounded-2xl bg-white border border-gray-100 shadow-sm px-4 py-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600 ring-1 ring-green-100 mt-0.5">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[15px] font-extrabold text-gray-900 leading-tight">Kapak Garantisi</p>
                  <p className="text-[12px] text-gray-400 font-medium mt-1 leading-snug">Hiçbir parça atılmaz</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* ══════════════════════════════════════════
            RIGHT — Image collage
        ══════════════════════════════════════════ */}
        <div className="relative min-h-[460px] sm:min-h-[580px] w-full mt-8 lg:mt-0">

          {/* ── Main image (top-right, large) ── */}
          <motion.div
            custom={0} variants={fadeIn} initial="hidden" animate="visible"
            className="absolute right-0 top-0 w-[55%] sm:w-[58%]"
          >
            <motion.div
              variants={float} animate="animate"
              className="rounded-[2rem] sm:rounded-[2.8rem] overflow-hidden shadow-2xl border-[3px] border-white ring-1 ring-black/5"
            >
              <Image
                src="/banner_image/section_1.png"
                alt="Modern tesis ve hayvanlar"
                width={560}
                height={380}
                className="w-full h-full object-cover"
                priority
              />
            </motion.div>

            {/* Floating trust badge on top of main image */}
            <motion.div
              custom={2} variants={fadeUp} initial="hidden" animate="visible"
              className="absolute -bottom-4 -left-6 sm:-left-8 bg-white rounded-2xl shadow-xl border border-gray-100/80 px-4 py-3 flex items-center gap-2.5 z-30"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-green-50 text-green-500">
                <CheckCircle2 className="h-4.5 w-4.5 w-5 h-5" />
              </div>
              <div className="leading-tight">
                <p className="text-[13px] font-bold text-gray-800">30+ Yıllık Tecrübe</p>
                <p className="text-[11px] text-gray-400 font-medium">İstanbul'un tercihi</p>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Secondary image (bottom-left) ── */}
          <motion.div
            custom={1} variants={fadeIn} initial="hidden" animate="visible"
            className="absolute left-0 bottom-0 w-[48%] sm:w-[50%]"
          >
            <motion.div
              variants={floatSlow} animate="animate"
              className="rounded-[2rem] sm:rounded-[2.8rem] overflow-hidden shadow-xl border-[3px] border-white ring-1 ring-black/5"
            >
              <Image
                src="/banner_image/paket.png"
                alt="Özenle hazırlanmış paketler"
                width={440}
                height={320}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* ── Small accent image (mid-right, peeking) ── */}
          <motion.div
            custom={2} variants={fadeIn} initial="hidden" animate="visible"
            className="absolute right-[-6%] sm:right-[-4%] top-[46%] w-[30%] sm:w-[32%] z-20"
          >
            <motion.div
              variants={float} animate="animate"
              className="rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-2xl border-[3px] border-white ring-1 ring-black/5"
              style={{ animationDelay: '1.5s' }}
            >
              <Image
                src="/banner_image/terazi.png"
                alt="Hassas tartı"
                width={240}
                height={200}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* ── Decorative blobs behind images ── */}
          <div className="absolute top-1/4 right-1/4 h-40 w-40 rounded-full bg-orange-200/25 blur-3xl -z-10" />
          <div className="absolute bottom-1/4 left-1/4 h-32 w-32 rounded-full bg-amber-100/40 blur-3xl -z-10" />
        </div>

      </div>
    </section>
  );
}
