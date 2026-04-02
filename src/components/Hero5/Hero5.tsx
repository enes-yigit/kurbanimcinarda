"use client";

import { motion, LayoutGroup } from 'framer-motion';
import { ArrowDown, CheckCircle2, Phone, ShieldCheck, Scale, Truck, Gift } from 'lucide-react';
import { Inter, Outfit } from 'next/font/google';
import Image from 'next/image';
import { TextRotate } from '@/components/ui/text-rotate';

const outfit = Outfit({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export default function Hero5() {
  const scrollToPackages = () => {
    document.getElementById('paketler')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-[100dvh] bg-[#0c1a12] flex flex-col justify-center md:items-center pt-[170px] sm:pt-[190px] md:pt-[200px] pb-16 overflow-hidden">

      {/* ── IMAGE BACKGROUND ── */}
      {/* Height restricted on mobile to prevent blurry zoom-in of wide desktop images */}
      <div className="absolute top-0 left-0 w-full h-[65dvh] sm:h-full z-0 overflow-hidden">
        <Image
          src="/banner_image/section_1.png"
          alt="Çınar Kurban Tesisleri"
          fill
          priority
          className="object-cover object-[85%_top] sm:object-center transition-all duration-700"
        />
        {/* Soft fade-out for bottom edge of image on mobile */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0c1a12] to-transparent sm:hidden z-10" />
      </div>

      {/* ── OVERLAYS ── */}
      <div className="absolute inset-0 bg-[#0c1a12]/40 sm:bg-black/60 z-0 mix-blend-multiply sm:mix-blend-normal"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#fafafa] via-[#0c1a12]/95 sm:via-transparent to-black/40 z-0"></div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">

        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-xs font-bold tracking-[0.15em] uppercase mb-8"
        >
          <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse inline-block" />
          İstanbul'un Kurbanlık Adresi
        </motion.div>

        {/* Title */}
        <LayoutGroup>
          <motion.h1 
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`${outfit.className} flex flex-col items-center text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold text-white leading-[1.1] tracking-tight max-w-4xl drop-shadow-lg`}
          >
            <motion.span layout>Aileniz İçin</motion.span>
            <motion.div layout className="flex flex-wrap items-baseline justify-center gap-x-2 sm:gap-x-4 mt-1 sm:mt-2">
              <TextRotate
                texts={[
                  "En Kaliteli",
                  "En Hijyenik",
                  "En Güvenilir",
                  "En Sağlıklı",
                  "En Hızlı"
                ]}
                mainClassName="text-orange-500 overflow-visible"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-1 sm:pb-2"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={3000}
              />
              <motion.span layout className="pb-1 sm:pb-2">Seçim</motion.span>
            </motion.div>
          </motion.h1>
        </LayoutGroup>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`${inter.className} mt-6 sm:mt-8 text-lg sm:text-xl text-gray-200 font-medium leading-relaxed max-w-2xl drop-shadow`}
        >
          2026 kurban kayıtlarımız başlamıştır. Modern tesisimizde, profesyonel hizmetle kurban ibadetinizi güvenle yerine getirin.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 mb-20 flex flex-wrap justify-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => window.open('https://wa.me/902129099495', '_blank')}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 active:scale-95 transition-all text-white rounded-xl text-base font-bold shadow-xl shadow-orange-500/30"
          >
            <Phone size={20} /> Kayıt Ol & Bilgi Al
          </button>

          <button
            onClick={scrollToPackages}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 active:scale-95 backdrop-blur-md border border-white/30 transition-all text-white rounded-xl text-base font-bold"
          >
            Hisse Fiyatları <ArrowDown size={20} />
          </button>
        </motion.div>

        {/* ── FEATURE CARDS ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 pb-12"
        >
          {/* Card 1: 1. Gün Geleneksel Teslim */}
          <div className="bg-[#fafafa] sm:bg-white/95 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden flex flex-col text-left shadow-2xl hover:-translate-y-1.5 transition-transform duration-300 group">
            <div className="relative w-full h-44 overflow-hidden">
              <Image src="/banner_image/frigoarac.png" alt="Frigolu Araç ile Sevkiyat" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="p-5 flex items-start gap-4 flex-1">
              <div className="bg-emerald-100 text-emerald-600 p-2.5 rounded-xl shrink-0 shadow-sm mt-0.5">
                <Truck size={22} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className={`${outfit.className} text-[1.2rem] font-extrabold text-gray-900 mb-1.5 leading-tight`}>1. Gün Geleneksel Teslim</h3>
                <p className={`${inter.className} text-[14px] text-gray-500 font-medium leading-snug`}>Kurbanınız kesildikten sonra sıcak etiniz adaletlice parçalanıp 1. gün size ulaştırılır.</p>
              </div>
            </div>
          </div>

          {/* Card 2: 5. Gün Randevulu Teslim */}
          <div className="bg-[#fafafa] sm:bg-white/95 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden flex flex-col text-left shadow-2xl hover:-translate-y-1.5 transition-transform duration-300 group">
            <div className="relative w-full h-44 overflow-hidden">
              <Image src="/banner_image/paket.png" alt="Özel Teslimat Hazırlığı" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="p-5 flex items-start gap-4 flex-1">
              <div className="bg-orange-100 text-orange-600 p-2.5 rounded-xl shrink-0 shadow-sm mt-0.5">
                <Gift size={22} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className={`${outfit.className} text-[1.2rem] font-extrabold text-gray-900 mb-1.5 leading-tight`}>5. Gün Randevulu Teslim</h3>
                <p className={`${inter.className} text-[14px] text-gray-500 font-medium leading-snug`}>Kurban etleriniz kuşbaşı ve kıyma gibi sizin için işlenip paketlenerek 5. gün teslim edilir.</p>
              </div>
            </div>
          </div>

          {/* Card 3: 7 Kefeli Hassas Tartı */}
          <div className="bg-[#fafafa] sm:bg-white/95 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden flex flex-col text-left shadow-2xl hover:-translate-y-1.5 transition-transform duration-300 group">
            <div className="relative w-full h-44 overflow-hidden bg-white">
              <Image src="/banner_image/terazi.png" alt="Hassas Tartı Teknolojisi" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="p-5 flex items-start gap-4 flex-1">
              <div className="bg-blue-100 text-blue-600 p-2.5 rounded-xl shrink-0 shadow-sm mt-0.5">
                <Scale size={22} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className={`${outfit.className} text-[1.2rem] font-extrabold text-gray-900 mb-1.5 leading-tight`}>7 Kefeli Hassas Tartı</h3>
                <p className={`${inter.className} text-[14px] text-gray-500 font-medium leading-snug`}>Hakkınız gramı gramına tam olarak ölçülür, 7 hissedara adaletli pay dağıtımı yapılır.</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
