"use client";

import React from "react";
import { motion } from "framer-motion";
import { Outfit, Inter } from "next/font/google";
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  Navigation,
  MessageCircle,
  Building
} from "lucide-react";
import Link from "next/link";

const outfit = Outfit({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function IletisimPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
        
        {/* ── 1. CINEMATIC HERO SECTION ── */}
        <section className="relative w-full h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
          {/* Safe Real Photography Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-105"
            style={{ backgroundImage: "url('/banner_image/iletisim_hero.png')" }} 
          >
            {/* Deep gradient for white navbar and central title visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-[#0c1a12]"></div>
          </div>

          <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center mt-12">
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="inline-flex justify-center items-center gap-2 px-5 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 font-extrabold text-[12px] uppercase tracking-widest mb-6 backdrop-blur-md"
             >
               <Building size={16} />
               Tesisimize Bekliyoruz
             </motion.div>
   
             <motion.h1 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.1 }}
               className={`${outfit.className} text-[3rem] sm:text-5xl md:text-[5rem] font-extrabold tracking-tight text-white leading-[1.05] mb-6 drop-shadow-2xl`}
             >
               İletişim & <span className="text-orange-500">Konum</span>
             </motion.h1>
             
             <motion.p 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className={`${inter.className} text-gray-300 text-[16px] sm:text-[1.2rem] leading-relaxed max-w-2xl mx-auto font-medium`}>
               Bayram telaşına ortak olmak, kurban ibadetinizi en doğru ve huzurlu şekilde yerine getirmek için dilediğiniz zaman kapımızı çalabilirsiniz.
             </motion.p>
          </div>
        </section>

        {/* ── 2. CONTACT DETAILS & MAP (With Overlap "Çıkıntı" Effect) ── */}
        <section className="relative z-20 -mt-20 sm:-mt-28 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-[2rem] sm:rounded-[3rem] shadow-2xl shadow-gray-200/50 p-6 sm:p-10 border border-gray-100"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              
              {/* SOL: İLETİŞİM BİLGİLERİ - 5 COLS */}
              <div className="lg:col-span-5 flex flex-col gap-8 lg:pr-6">
                
                <h2 className={`${outfit.className} text-3xl font-extrabold text-gray-900 mb-2`}>
                  Bizimle <span className="text-orange-500">Bağlantıya Geçin</span>
                </h2>
                
                <div className="flex flex-col gap-6">
                  {/* Info 1 */}
                  <div className="flex items-start gap-5 p-5 bg-gray-50 rounded-2xl border border-gray-100/50 hover:bg-orange-50/50 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className={`${outfit.className} text-lg font-bold text-gray-900`}>Müşteri Hizmetleri</h3>
                      <a href="tel:+902129099495" className={`${inter.className} text-orange-600 font-bold block mt-1 hover:underline text-lg`}>0 212 909 94 95</a>
                      <p className="text-sm text-gray-500 mt-1 font-medium">Randevu & Tüm Süreçler (7/24)</p>
                    </div>
                  </div>

                  {/* Info 2 */}
                  <div className="flex items-start gap-5 p-5 bg-gray-50 rounded-2xl border border-gray-100/50 hover:bg-orange-50/50 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-gray-200 text-gray-600 flex items-center justify-center shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className={`${outfit.className} text-lg font-bold text-gray-900`}>Çalışma Saatleri</h3>
                      <p className={`${inter.className} text-gray-600 font-bold block mt-1`}>Pazartesi - Pazar: 09:00 - 19:00</p>
                      <p className="text-sm text-gray-500 mt-1 font-medium">Dini Bayramlar Dahil Kesintisiz</p>
                    </div>
                  </div>

                  {/* Info 3 */}
                  <div className="flex items-start gap-5 p-5 bg-gray-50 rounded-2xl border border-gray-100/50 hover:bg-orange-50/50 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-[#0c1a12] text-white flex items-center justify-center shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className={`${outfit.className} text-lg font-bold text-gray-900`}>Merkez Tesis & Ofis</h3>
                      <p className={`${inter.className} text-gray-600 mt-1 leading-relaxed`}>Çınar Mah., 843. Sk., Büşra Apt. No: 4B <br/> 34200 Bağcılar / İstanbul</p>
                    </div>
                  </div>

                  {/* Info 4 */}
                  <div className="flex items-start gap-5 p-5 bg-gray-50 rounded-2xl border border-gray-100/50 hover:bg-orange-50/50 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className={`${outfit.className} text-lg font-bold text-gray-900`}>E-Posta Adresi</h3>
                      <a href="mailto:cinarkurban@gmail.com" className={`${inter.className} text-blue-600 font-bold block mt-1 hover:underline`}>cinarkurban@gmail.com</a>
                    </div>
                  </div>

                </div>
              </div>

              {/* SAĞ: HARİTA VİTRİNİ - 7 COLS */}
              <div className="lg:col-span-7 bg-gray-100 rounded-[2rem] p-2 relative overflow-hidden flex flex-col h-full min-h-[500px] border border-gray-200">
                
                <h3 className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-md px-4 py-2 font-bold text-gray-900 rounded-full text-sm shadow-sm flex items-center gap-2">
                  <MapPin size={16} className="text-orange-500" /> Tesis Haritası
                </h3>

                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.5912249039143!2d28.861975400000002!3d41.0341983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabbb1aa7a9f17%3A0xa4530a26710e3cb8!2zw4fEsW5hciBLdXJiYW4!5e0!3m2!1str!2str!4v1774896050279!5m2!1str!2str"
                  className="w-full h-full rounded-[1.5rem] grayscale-[20%] contrast-[1.1]"
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col sm:flex-row gap-3">
                  <Link 
                    href="https://www.google.com/maps/place/%C3%87%C4%B1nar+Kurban/@41.0341983,28.8619754,17z/data=!3m1!4b1!4m6!3m5!1s0x14cabbb1aa7a9f17:0xa4530a26710e3cb8!8m2!3d41.0341983!4d28.8619754!16s%2Fg%2F11xl06wsk_" 
                    target="_blank" 
                    className="flex-1 bg-[#0c1a12] hover:bg-black text-white px-6 py-4 rounded-full font-bold shadow-xl flex items-center justify-center gap-2 transition-all active:scale-95"
                  >
                    <Navigation size={18} /> Yol Tarifi Al
                  </Link>
                  <Link 
                    href="https://wa.me/902129099495" 
                    target="_blank" 
                    className="flex-1 bg-white hover:bg-orange-50 text-gray-900 border border-gray-200 px-6 py-4 rounded-full font-bold shadow-xl flex items-center justify-center gap-2 transition-all active:scale-95"
                  >
                    <MessageCircle size={18} className="text-orange-500" /> Konum İste
                  </Link>
                </div>

              </div>

            </div>

          </motion.div>
        </section>

      </main>
  );
}
