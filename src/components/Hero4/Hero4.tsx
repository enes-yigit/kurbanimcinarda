"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight, Phone, Star } from 'lucide-react';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import Image from 'next/image';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dm = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm',
  display: 'swap',
});

const CREAM = '#F7F3EC';
const GREEN = '#243D24';
const GREEN_LIGHT = '#E3EBE1';
const SAND = '#C9B99A';
const INK = '#1C1A18';
const MUTED = '#8A8580';

const stagger = { visible: { transition: { staggerChildren: 0.11 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] as any } },
};

const features = [
  { value: '1. Gün', label: 'Randevulu Teslimat', sub: 'Soğuk zincirli frigolu araç' },
  { value: '7 Kefeli', label: 'Hassas Tartı', sub: 'Sertifikalı ölçüm sistemi' },
  { value: 'Kapak', label: 'Atma Garantisi', sub: 'Her parça size teslim edilir' },
];

export default function Hero4() {
  return (
    <section
      className={`${cormorant.variable} ${dm.variable} relative w-full overflow-hidden`}
      style={{ backgroundColor: CREAM }}
    >
      {/* ── Grain texture overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.18]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '200px',
        }}
      />

      {/* ── Ambient light blobs ── */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute -top-32 right-0 w-[700px] h-[700px] rounded-full blur-[130px]"
          style={{ backgroundColor: `${GREEN_LIGHT}60` }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full blur-[120px]"
          style={{ backgroundColor: `${SAND}30` }}
        />
      </div>

      {/* ════════════════════════════════════════════════ */}
      {/*  Main grid                                       */}
      {/* ════════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-20 pt-36 sm:pt-48 pb-0 grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-12 lg:gap-20 items-center">

        {/* ─── LEFT: COPY ─────────────────────────────── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-9">
            <span
              className="block h-px w-10"
              style={{ backgroundColor: GREEN }}
            />
            <span
              className={`${dm.className} text-[10.5px] font-bold tracking-[0.22em] uppercase`}
              style={{ color: GREEN }}
            >
              İstanbul'un En Köklü Adresi
            </span>
          </motion.div>

          {/* Heading — editorial serif */}
          <motion.h1
            variants={fadeUp}
            className={`${cormorant.className} leading-[0.93] font-light`}
            style={{
              fontSize: 'clamp(3.8rem, 7vw, 6.4rem)',
              color: INK,
            }}
          >
            Aileniz <br />
            <em
              className="italic font-semibold"
              style={{ color: GREEN }}
            >
              İçin En
            </em>
            <br />
            <span className="font-bold">Kaliteli Seçim</span>
          </motion.h1>

          {/* Decorative rule */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-4 my-8"
          >
            <div className="h-px flex-1 max-w-[48px]" style={{ backgroundColor: SAND }} />
            <Star className="h-3 w-3" style={{ color: SAND }} />
            <div className="h-px flex-1 max-w-[48px]" style={{ backgroundColor: SAND }} />
          </motion.div>

          {/* Body */}
          <motion.p
            variants={fadeUp}
            className={`${dm.className} text-[16px] leading-[1.75] max-w-[420px]`}
            style={{ color: MUTED }}
          >
            2026 kurban kayıtlarımız başlamıştır. Modern tesislerimizde veteriner
            denetimi altında, güven ve huzurla ibadetinizi yerine getirmeniz için
            30 yıldır hizmetinizdeyiz.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
            <button
              onClick={() => window.open('https://wa.me/902129099495', '_blank')}
              className={`${dm.className} inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-[14px] font-semibold text-white shadow-lg hover:-translate-y-0.5 transition-all duration-200`}
              style={{ backgroundColor: GREEN, boxShadow: `0 8px 24px ${GREEN}44` }}
            >
              <Phone className="h-4 w-4" />
              Kayıt Ol &amp; Bilgi Al
            </button>
            <button
              onClick={() => document.getElementById('akilli-asistan')?.scrollIntoView({ behavior: 'smooth' })}
              className={`${dm.className} inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-semibold border hover:-translate-y-0.5 transition-all duration-200`}
              style={{
                borderColor: SAND,
                color: INK,
                backgroundColor: 'transparent',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#EDE8DF')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              Paketleri İncele
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </motion.div>

          {/* Feature strip */}
          <motion.div
            variants={fadeUp}
            className="mt-14 pt-8 grid grid-cols-3 gap-5"
            style={{ borderTop: `1px solid ${SAND}80` }}
          >
            {features.map((f, i) => (
              <div key={i}>
                <p
                  className={`${cormorant.className} text-[22px] font-semibold leading-tight`}
                  style={{ color: INK }}
                >
                  {f.value}
                </p>
                <p
                  className={`${dm.className} text-[12px] font-semibold mt-0.5`}
                  style={{ color: INK }}
                >
                  {f.label}
                </p>
                <p
                  className={`${dm.className} text-[11px] mt-1 leading-snug`}
                  style={{ color: MUTED }}
                >
                  {f.sub}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ─── RIGHT: IMAGES ──────────────────────────── */}
        <motion.div
          className="relative hidden lg:block"
          style={{ height: '620px' }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as any, delay: 0.15 }}
        >
          {/* MAIN IMAGE — tall, left */}
          <div
            className="absolute top-0 left-0 overflow-hidden shadow-2xl"
            style={{
              width: '60%',
              height: '76%',
              borderRadius: '2.4rem',
              border: `4px solid ${CREAM}`,
            }}
          >
            <Image
              src="/banner_image/section_1.png"
              alt="Modern tesisimiz"
              fill
              className="object-cover"
              priority
            />
            {/* Inner vignette */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to bottom, transparent 60%, rgba(28,26,24,0.35))',
              }}
            />
          </div>

          {/* SECONDARY IMAGE — bottom right */}
          <div
            className="absolute bottom-0 right-0 overflow-hidden shadow-xl"
            style={{
              width: '54%',
              height: '52%',
              borderRadius: '2.4rem',
              border: `4px solid ${CREAM}`,
            }}
          >
            <Image
              src="/banner_image/paket.png"
              alt="Özenli paketleme"
              fill
              className="object-cover"
            />
          </div>

          {/* BADGE — "30+ Yıl" green pill top-right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute z-20 text-center"
            style={{
              top: '-16px',
              right: '8%',
              backgroundColor: GREEN,
              color: '#fff',
              borderRadius: '1.4rem',
              padding: '14px 22px',
              boxShadow: `0 12px 32px ${GREEN}44`,
            }}
          >
            <p className={`${cormorant.className} text-[42px] font-bold leading-none`}>30+</p>
            <p className={`${dm.className} text-[9px] font-semibold tracking-[0.18em] uppercase mt-1 opacity-80`}>
              Yıllık Tecrübe
            </p>
          </motion.div>

          {/* BADGE — "Veteriner Onaylı" cream card between images */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.5 }}
            className="absolute z-20"
            style={{
              top: '73%',
              left: '3%',
              backgroundColor: CREAM,
              border: `1px solid ${SAND}60`,
              borderRadius: '1.2rem',
              padding: '12px 18px',
              boxShadow: '0 8px 28px rgba(0,0,0,0.10)',
            }}
          >
            <div className="flex items-center gap-2.5">
              <div
                className="h-8 w-8 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: GREEN_LIGHT }}
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth={2.2}>
                  <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </div>
              <div>
                <p className={`${dm.className} text-[13px] font-bold`} style={{ color: INK }}>
                  Veteriner Onaylı
                </p>
                <p className={`${dm.className} text-[11px] mt-0.5`} style={{ color: MUTED }}>
                  Her hayvan sertifikalı
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Mobile image (single) ── */}
      <div className="lg:hidden relative mx-6 mt-10 h-[260px] rounded-3xl overflow-hidden shadow-xl">
        <Image src="/banner_image/section_1.png" alt="Tesisimiz" fill className="object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(28,26,24,0.6), transparent)' }} />
      </div>

      {/* ── Bottom footer band ── */}
      <div
        className="relative z-10 mt-14 border-t"
        style={{ borderColor: `${SAND}60` }}
      >
        <div
          className={`${dm.className} max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-20 py-5 flex flex-wrap items-center gap-x-8 gap-y-1 text-[11px] font-medium tracking-[0.14em] uppercase`}
          style={{ color: MUTED }}
        >
          <span>Çınar Kurban © 2026</span>
          <span className="hidden sm:inline">·</span>
          <span>İstanbul Anadolu Yakası</span>
          <span className="hidden sm:inline">·</span>
          <span>Frigolu Araç Teslimat</span>
          <span className="hidden sm:inline">·</span>
          <span>İslami Usul Kesim</span>
          <span className="hidden sm:inline">·</span>
          <span>Hisse &amp; Bütün Kurban</span>
        </div>
      </div>
    </section>
  );
}
