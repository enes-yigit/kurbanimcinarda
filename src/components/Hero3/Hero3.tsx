"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { InteractiveImageAccordion, type AccordionItemData } from '@/components/ui/interactive-image-accordion';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUp: any = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] },
  }),
};

const kurbanAccordionItems: AccordionItemData[] = [
  {
    id: 1,
    title: 'Modern Tesis',
    subtitle: 'Veteriner denetimli, sertifikalı ortam',
    imageUrl: '/banner_image/section_1.png',
  },
  {
    id: 2,
    title: 'Hijyenik Kesim',
    subtitle: 'Uzman kasaplar, steril ortam',
    imageUrl: '/banner_image/kesim.png',
  },
  {
    id: 3,
    title: 'Hassas Tartı',
    subtitle: '7 kefeli sertifikalı terazi',
    imageUrl: '/banner_image/terazi.png',
  },
  {
    id: 4,
    title: 'Özenli Paketleme',
    subtitle: 'Vakum paket, etiketli, isminizle',
    imageUrl: '/banner_image/paket.png',
  },
  {
    id: 5,
    title: '1. Gün Teslimat',
    subtitle: 'Soğuk zincirli randevulu teslimat',
    imageUrl: '/banner_image/frigoarac.png',
  },
];

const trustItems = [
  { label: '30+ Yıllık Deneyim' },
  { label: 'Veteriner Onaylı' },
  { label: 'Kapak Garantisi' },
];

export default function Hero3() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fafafa] pt-28 pb-12 sm:pt-40 sm:pb-20">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-orange-100/40 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-amber-50/60 blur-[100px]" />
      </div>

      <div className="max-w-[90rem] px-5 mx-auto">
        {/* ── Top row: Text left + trust pills right ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">

          {/* Left: text */}
          <div className="max-w-2xl">
            <motion.div
              custom={0} variants={fadeUp} initial="hidden" animate="visible"
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 text-gray-600 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase mb-6 shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse inline-block" />
              İstanbul'un En Köklü Adresi
            </motion.div>

            <motion.h1
              custom={1} variants={fadeUp} initial="hidden" animate="visible"
              className="text-[2.4rem] sm:text-[3.2rem] lg:text-[3.8rem] font-extrabold tracking-tight text-gray-900 leading-[1.06]"
            >
              Aileniz İçin <br className="hidden sm:block" />
              <span className="text-orange-500">En Kaliteli</span> Seçim
            </motion.h1>

            <motion.p
              custom={2} variants={fadeUp} initial="hidden" animate="visible"
              className="mt-5 text-[16px] sm:text-[17.5px] text-gray-500 font-medium leading-relaxed max-w-xl"
            >
              2026 kurban kayıtlarımız başlamıştır. Modern tesislerimizde,
              güven ve huzurla ibadetinizi yerine getirmeniz için hizmetinizdeyiz.
            </motion.p>

            <motion.div
              custom={3} variants={fadeUp} initial="hidden" animate="visible"
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button
                size="lg"
                onClick={() => window.open('https://wa.me/902129099495', '_blank')}
                className="px-7 py-6 text-[15px] font-bold rounded-2xl bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25 hover:-translate-y-0.5 transition-all"
              >
                Kayıt Ol &amp; Bilgi Al
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById('akilli-asistan')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-7 py-6 text-[15px] font-bold rounded-2xl border-gray-200 text-gray-700 hover:bg-gray-50 hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
              >
                Paketleri İncele <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          {/* Right: trust pills */}
          <motion.div
            custom={3} variants={fadeUp} initial="hidden" animate="visible"
            className="flex flex-wrap gap-3 lg:justify-end"
          >
            {trustItems.map((t) => (
              <div
                key={t.label}
                className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-100 rounded-2xl shadow-sm"
              >
                <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-[13px] font-semibold text-gray-700">{t.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Accordion ── */}
        <motion.div
          custom={4} variants={fadeUp} initial="hidden" animate="visible"
        >
          <InteractiveImageAccordion
            items={kurbanAccordionItems}
            defaultIndex={4}
          />
        </motion.div>
      </div>
    </section>
  );
}
