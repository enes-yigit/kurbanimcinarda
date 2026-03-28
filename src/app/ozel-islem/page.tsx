"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Outfit, Inter } from "next/font/google";
import { 
  CheckCircle2, 
  UtensilsCrossed, 
  Beef, 
  PackageCheck, 
  Truck, 
  ShieldCheck,
  Droplets,
  Search,
  Stethoscope,
  Users,
  Video,
  MapPin,
  Box,
  ChefHat
} from "lucide-react";

const outfit = Outfit({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function OzelIslemPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col overflow-hidden">
      
      {/* ── 1. CINEMATIC HERO SECTION (WITH VIDEO) ── */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-black">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-60 transform scale-105"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Dark Gradient Overlays for Readability and Premium Feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-[#0c1a12] z-0"></div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center mt-20">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="inline-flex justify-center items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white font-extrabold text-[12px] uppercase tracking-widest mb-6 backdrop-blur-md"
           >
             <ChefHat size={16} className="text-orange-400" />
             VİP Kasaplık Modülü
           </motion.div>

           <motion.h1 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.1 }}
             className={`${outfit.className} text-[3rem] sm:text-5xl md:text-[5.5rem] font-extrabold tracking-tight text-white leading-[1.05] mb-6 drop-shadow-2xl`}
           >
             Özel İşleme & <br className="hidden md:block"/> 
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Profesyonel Kasaplık</span>
           </motion.h1>

           <motion.p 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className={`${inter.className} text-gray-300 text-[16px] sm:text-[1.25rem] leading-relaxed max-w-3xl mx-auto font-medium`}>
             Siz evinizde bayramın tadını çıkarırken, kurbanınız usta ellerde dinlendirilsin, işlensin, vakumlansın ve kapınıza kadar teslim edilsin.
           </motion.p>
           
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.3 }}
             className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
           >
             <Link href="https://wa.me/902129099495" target="_blank" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold transition-all active:scale-95 shadow-lg shadow-orange-500/30">
               <CheckCircle2 size={20} />
               Hemen Vekalet Verin
             </Link>
           </motion.div>
        </div>
      </section>

      {/* ── 2. NELER YAPILIYOR? (Premium Bento Grid) ── */}
      <section className="py-24 relative z-20 bg-white" id="hizmet-icerigi">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className={`${outfit.className} text-[2.5rem] sm:text-[3.5rem] font-extrabold text-gray-900 leading-tight`}>
              Tesislerimizde <span className="text-orange-500">Neler Yapıyoruz?</span>
            </h2>
            <p className={`${inter.className} mt-4 text-gray-500 text-lg max-w-2xl mx-auto`}>
              Kurbanınızı tamamen sizin arzunuza göre parçalanmış, kemiğinden sıyrılmış, kıymalık ve kuşbaşılık olarak hazırlıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            
            {/* Sol: Adımlar (Vertical Flow) - 5 Cols */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-5 bg-gray-50 p-8 sm:p-10 rounded-[2.5rem] border border-gray-100 flex flex-col justify-center"
            >
              <h3 className={`${outfit.className} text-2xl font-bold text-gray-900 mb-8`}>Operasyon Şeması</h3>
              <div className="flex flex-col gap-8 relative">
                <div className="absolute left-6 top-10 bottom-10 w-0.5 bg-gray-200 z-0 hidden sm:block"></div>
                
                {[
                  { title: "Profesyonel İşleme", desc: "Etleriniz usta kasaplarımızın tezgahında dikkatle sıyrılır ve işlenir." },
                  { title: "Vakumlu Paketleme", desc: "Uzun süreli saklama garantisiyle, gıda uyumlu hijyenik poşetleme." },
                  { title: "İslami Hassasiyet", desc: "Kan akıtma ve karkas dinlendirme sürecine harfiyen riayet." },
                  { title: "Soğuk Zincir", desc: "Adresinize özel frigofrik araçlarımızla kapınıza bozulmadan teslim." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5 relative z-10 group">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-orange-500 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                      <CheckCircle2 size={20} className="text-orange-500" />
                    </div>
                    <div>
                      <h4 className={`${outfit.className} text-lg font-bold text-gray-900`}>{item.title}</h4>
                      <p className={`${inter.className} text-sm text-gray-500 mt-1 leading-relaxed`}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Sağ: Görsel Bento Box - 7 Cols */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            >
               <div className="bg-[#0c1a12] rounded-[2rem] p-8 sm:p-10 flex flex-col justify-between text-white aspect-square shadow-xl group hover:-translate-y-2 transition-transform">
                  <div className="p-4 bg-white/10 w-fit rounded-2xl mb-8">
                    <Beef size={40} className="text-orange-400" />
                  </div>
                  <div>
                    <h4 className={`${outfit.className} text-2xl font-bold mb-2`}>Et Dinlendirme</h4>
                    <p className="text-gray-400 text-sm font-medium mb-4">Sıcak karkas et işlem görmez. Kesimden sonra şoklanarak dinlendirilir.</p>
                  </div>
               </div>

               <div className="bg-orange-50 border border-orange-100 rounded-[2rem] p-8 sm:p-10 flex flex-col justify-between aspect-square group hover:-translate-y-2 transition-transform">
                  <div className="p-4 bg-orange-500 text-white w-fit rounded-2xl mb-8">
                    <UtensilsCrossed size={40} />
                  </div>
                  <div>
                    <h4 className={`${outfit.className} text-2xl text-gray-900 font-bold mb-2`}>Kıyma & Kuşbaşı</h4>
                    <p className="text-gray-600 text-sm font-medium">Hisseniz tamamen talebinize uygun pratik paketlerle hazırlanır.</p>
                  </div>
               </div>

               <div className="bg-white border border-gray-100 rounded-[2rem] p-8 sm:p-10 flex flex-col justify-between aspect-square shadow-sm sm:col-span-2 group hover:-translate-y-2 transition-transform">
                 <div className="flex justify-between items-start">
                    <div className="p-4 bg-gray-900 text-white w-fit rounded-2xl mb-8">
                      <PackageCheck size={32} />
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 font-bold text-[11px] rounded-full uppercase tracking-wider">
                      İki Tur Çekim
                    </div>
                 </div>
                 <div>
                   <h4 className={`${outfit.className} text-3xl font-bold text-gray-900 mb-2`}>Lokum Kıvamında</h4>
                   <p className="text-gray-500 text-sm sm:text-base font-medium max-w-md">Sinirlerinden arındırılmış, dinlenmiş kurban etinden çift çekim muazzam kıyma garantisi.</p>
                 </div>
               </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 3. NEDEN ÖZEL KASAPLIK? (Minimal Icon Grid) ── */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`${outfit.className} text-[2.5rem] sm:text-[3rem] font-extrabold text-gray-900 mb-16`}>
            Neden <span className="text-orange-500">Bizi Seçmelisiniz?</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {[
              { icon: ShieldCheck, title: "İslami Hassasiyet", text: "Vekaletiniz İslami usullere tam yetkin Diyanet/Kasaplar Odası onaylı ekibimizle yerine getirilir." },
              { icon: Stethoscope, title: "Veteriner Kontrolü", text: "Tüm kurbanlıklar veteriner hekimlerimizce kesim öncesi ve sonrası sıkı denetime tabi tutulur." },
              { icon: Droplets, title: "Eksiksiz Hijyen", text: "Etin havayla ve bakteriyle temasını kesen, paslanmaz tezgahlı üst düzey hijyenik tesisler." },
              { icon: Users, title: "Profesyonel Kadro", text: "Özel kasaplık hizmetinde tecrübeli karkas sıyırma ve doğrama ustalarıyla çalışıyoruz." },
              { icon: Search, title: "Şeffaf Süreç", text: "Kimin hissesine hangi hayvanın ne zaman girdiği tamamen kayıt ve barkod altındadır." },
              { icon: Video, title: "Video Kaydı", text: "Kesim esnasında vekalet okunurken çekilen videolarınız adınıza özel olarak gönderilir." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-gray-900 mb-5 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                  <feature.icon size={28} strokeWidth={1.5} />
                </div>
                <h4 className={`${outfit.className} text-xl font-bold text-gray-900 mb-2`}>{feature.title}</h4>
                <p className={`${inter.className} text-[15px] text-gray-500 max-w-[280px]`}>{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. TESLİMAT & HİSSE DETAYI (Compact Info Cards) ── */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
             
             {/* Kutu 1: Soğuk Zincir */}
             <div className="bg-[#0c1a12] rounded-[2.5rem] p-8 sm:p-12 border border-gray-800 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute right-0 top-0 w-64 h-64 bg-orange-500/10 blur-[80px] rounded-full" />
                
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-white/10 rounded-xl"><Truck size={24} className="text-orange-400" /></div>
                    <h3 className={`${outfit.className} text-2xl font-bold text-white`}>Teslimat Süreci</h3>
                  </div>
                  <p className="text-gray-400 text-[15px] leading-relaxed mb-6">Özel kasaplık hizmeti için dinlendirilmesi gereken karkas etin işlenmesi bir zaman gerektirir. Bu sebeple teslimatlar ortalama <strong className="text-white">Bayramın 3. veya 4. Günü</strong> gerçekleşmektedir.</p>
                </div>

                <div className="mt-8 p-5 bg-white/5 border border-white/10 rounded-2xl">
                   <h5 className="text-white font-bold text-sm mb-1 uppercase tracking-wider text-orange-400">Hizmet Garantisi</h5>
                   <p className="text-gray-400 text-sm">İstanbul genelinde frigorifik (soğutuculu) özel filomuzla etiniz zincir kırılmadan getirilir.</p>
                </div>
             </div>

             {/* Kutu 2: Paketleme Tipi */}
             <div className="bg-orange-50 rounded-[2.5rem] p-8 sm:p-12 border border-orange-100 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-orange-500 rounded-xl text-white"><Box size={24} /></div>
                    <h3 className={`${outfit.className} text-2xl font-bold text-gray-900`}>Paketleme Türü</h3>
                  </div>
                  <h4 className={`${outfit.className} text-xl sm:text-2xl font-bold text-orange-600 mb-4`}>Gıda Uyumu Vakumlu Poşetleme</h4>
                  <p className="text-gray-600 text-[15px] leading-relaxed">Etin havayla temasını kestiği için hijyen, renk koruması ve dondurucu istiflemesine en uygun paketleme çözümüdür.</p>
                </div>
                
                <div className="mt-8 flex gap-3">
                  <span className="px-4 py-2 bg-white rounded-full text-xs font-bold text-gray-500 uppercase tracking-widest border border-gray-200 shadow-sm">Büyükbaş Ayrı</span>
                  <span className="px-4 py-2 bg-white rounded-full text-xs font-bold text-gray-500 uppercase tracking-widest border border-gray-200 shadow-sm">Özel Seçim Ayrı</span>
                </div>
             </div>

          </div>
        </div>
      </section>

      {/* ── 5. DEEP BLUE (ORANGE/DARK) CTA ── */}
      <section className="pb-24 pt-4 px-4">
        <div className="container max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-[3rem] p-10 sm:p-16 text-center shadow-2xl relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent pointer-events-none" />
             
             <h2 className={`${outfit.className} text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 relative z-10 max-w-3xl mx-auto`}>
               Kurbanınızı Ev Konforunda, İşlenmiş Karşılayın.
             </h2>
             <p className={`${inter.className} text-gray-400 text-[16px] sm:text-[1.1rem] leading-relaxed max-w-2xl mx-auto mb-10 relative z-10`}>
               Alanında uzman kasaplarımız yorulmadan kurbanınızı itinayla işlesin, sıyırsın ve paketlesin. Kalan zamanda bayramın tadını ailenizle çıkarın.
             </p>
             
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
               <Link href="https://wa.me/902129099495" target="_blank" className="w-full sm:w-auto px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold transition-transform active:scale-95 shadow-lg flex justify-center items-center gap-2">
                 <CheckCircle2 size={20} /> Bilgi & Rezervasyon
               </Link>
               <Link href="tel:+902129099495" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold transition-all flex justify-center items-center">
                 Bizi Arayın
               </Link>
             </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
