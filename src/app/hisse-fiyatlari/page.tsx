"use client";

import React from "react";
import { motion } from "framer-motion";
import { Outfit, Inter } from "next/font/google";
import { Wallet, Info } from "lucide-react";

import PricingSection from "@/components/ui/pricing-section-3";
import FAQ from "@/components/FAQ/FAQ";

const outfit = Outfit({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function HisseFiyatlariPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">

      {/* ── CINEMATIC HEADER (Karanlık Kapak: Logo ve Navbar'ı Okunaklı Yapar) ── */}
      <section className="relative w-full h-[65vh] min-h-[550px] flex items-center justify-center overflow-hidden">
        {/* Dark Background Overlay Image (8K Cinematic AI Gen) */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-105"
          style={{ backgroundImage: "url('/banner_image/cinematic_hero.png')" }}
        >
          {/* Heavy gradient bottom to top to ensure navbar logo and hero text are perfectly visible */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/95"></div>
        </div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex justify-center items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 font-extrabold text-[12px] uppercase tracking-widest mb-6 backdrop-blur-md"
          >
            <Wallet size={16} />
            Hisse Listesi
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`${outfit.className} text-[2.5rem] sm:text-5xl md:text-[5rem] font-extrabold tracking-tight text-white leading-[1.1] mb-6 drop-shadow-xl`}
          >
            Büyükbaş ve Küçükbaş <br className="hidden md:block" />
            <span className="text-orange-500">2026 Erken Kayıt</span> Fiyatları
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`${inter.className} text-gray-300 text-[16px] sm:text-[1.2rem] leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-lg`}
          >
            İslami usullere uygun kesim, tartım garantisi ve özel teslimatla kurban ibadetinizi riske atmayın. Erken kayıt avantajlarını inceleyin.
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-16 sm:bottom-24 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-8 h-12 rounded-full border-2 border-white/20 flex justify-center p-1"
          >
            <div className="w-1.5 h-3 bg-orange-500 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── PRICING COMPONENT (Ana bileşeni içe aktararak kod karmaşasını ve veri kopukluğunu önledik) ── */}
      <section className="relative z-20 -mt-10 sm:-mt-20">
        <div className="bg-transparent sm:bg-white rounded-[2rem] sm:rounded-t-[3rem] shadow-none sm:shadow-2xl shadow-gray-200/50 py-1 sm:py-6 overflow-hidden max-w-7xl mx-auto border-t-0 sm:border-t sm:border-t-white relative before:absolute before:inset-x-0 before:top-[-100px] sm:before:hidden before:h-[200px] before:bg-gradient-to-b before:from-transparent before:to-white">
          <div className="relative z-10 bg-white sm:bg-transparent rounded-t-[2rem] sm:rounded-none">
            <PricingSection />
          </div>
        </div>
      </section>

      {/* ── INFO BANNER ── */}
      <section className="py-12 sm:py-24 max-w-5xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-orange-50 border border-orange-200/60 rounded-3xl p-8 sm:p-12 text-center shadow-lg"
        >
          <div className="inline-flex items-center justify-center p-3 sm:p-4 bg-orange-100 rounded-2xl mb-6 text-orange-600">
            <Info size={32} />
          </div>
          <h3 className={`${outfit.className} text-2xl sm:text-[32px] font-bold text-gray-900 mb-5`}>Ön Kayıt Süreci Nasıl İşler?</h3>
          <p className={`${inter.className} text-gray-600 text-[15px] sm:text-[17px] leading-[1.8]`}>Memnun kalmamanız
            Listelenen fiyat aralıkları Çınar Kurban Tesisi'nin 2026 yılı için açıkladığı ön kayıt değerleridir. Kesin fiyatlar Kurban bayramına ortalama 2 ay kala piyasa şartları göz önünde bulundurularak resmileşecek olup, yatırdığınız kapora (ön ödeme) toplam hisse tutarınızdan düşülecektir. durumunda şartsız koşulsuz <span className="font-bold text-gray-900">tam iade hakkınız garanti altındadır.</span>
          </p>
        </motion.div>
      </section>

      {/* ── FAQ SECTION (Daha önce kurduğumuz SSS Modülü otomatik olarak buraya yüklenir) ── */}
      <FAQ />

    </main>
  );
}
