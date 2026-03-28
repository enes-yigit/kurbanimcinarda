"use client";

import { motion } from 'framer-motion';
import { ArrowDown, CheckCircle2, Phone, ShieldCheck, Scale, Truck, Gift } from 'lucide-react';
import { Inter, Outfit } from 'next/font/google';
import Image from 'next/image';

const outfit = Outfit({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export default function Hero5() {
  const scrollToPackages = () => {
    document.getElementById('paketler')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* ── IMAGE BACKGROUND (Replaced Video) ── */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image 
          src="/banner_image/section_1.png" 
          alt="Çınar Kurban Tesisleri" 
          fill 
          priority
          className="object-cover object-center"
        />
      </div>

      {/* ── OVERLAYS ── */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#fafafa] via-transparent to-black/30 z-0"></div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center mt-12 sm:mt-0">
        
        {/* Top badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-xs font-bold tracking-[0.15em] uppercase mb-8"
        >
          <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse inline-block" />
          İstanbul'un Kurbanlık Adresi
        </motion.div>

        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={`${outfit.className} text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold text-white leading-[1.05] tracking-tight max-w-4xl drop-shadow-lg`}
        >
          Aileniz İçin <br/> 
          <span className="text-orange-500">En Kaliteli</span> Seçim
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`${inter.className} mt-6 sm:mt-8 text-lg sm:text-xl text-gray-200 font-medium leading-relaxed max-w-2xl drop-shadow`}
        >
          2026 kurban kayıtlarımız başlamıştır. Modern tesislerimizde, profesyonel hizmetle kurban ibadetinizi güvenle yerine getirin.
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
