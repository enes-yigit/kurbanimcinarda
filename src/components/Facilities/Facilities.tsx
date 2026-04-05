"use client";

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Building2, Scale, ShieldCheck, Truck, MapPin, Navigation } from 'lucide-react';
import Link from "next/link";
import { Outfit, Inter } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const options = [
  {
    title: "Merkez Ofis",
    description: "Bağcılar'da geniş ve ferah yönetim",
    image: "/banner_image/merkezofis.png",
    icon: <Building2 size={24} className="text-white" />
  },
  {
    title: "Hassas Tartı",
    description: "Hak geçmeyen, milimetrik pay dağıtımı",
    image: "/banner_image/terazi.png",
    icon: <Scale size={24} className="text-white" />
  },
  {
    title: "Hijyenik Kesim",
    description: "İslami usullere uygun modern tesis",
    image: "/banner_image/kesim.png",
    icon: <ShieldCheck size={24} className="text-white" />
  },
  {
    title: "Soğuk Zincir",
    description: "Frigolu araçlarla kapınıza teslimat",
    image: "/banner_image/frigoarac.png",
    icon: <Truck size={24} className="text-white" />
  }
];

export default function Facilities() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);

  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions(prev => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <section className="py-24 sm:py-32 bg-[#0c1a12] font-sans text-white relative overflow-hidden" id="tesislerimiz">
       <div className="container z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* ── HEADER ── */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           viewport={{ once: true }}
           className="flex flex-col items-center justify-center max-w-[700px] mx-auto text-center"
         >
           <div className="inline-flex justify-center items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 font-extrabold text-[11px] uppercase tracking-widest mb-6">
             <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
             Sizi Bekliyoruz
           </div>
 
           <h2 className={`${outfit.className} text-[2.5rem] sm:text-5xl md:text-[3.5rem] font-extrabold tracking-tight text-white leading-[1.1]`}>
             İstanbul Kurban Kesim <span className="text-orange-500">Tesisimiz</span>
           </h2>
           <p className={`${inter.className} mt-6 text-gray-400 text-[16px] sm:text-[1.15rem] leading-[1.6] font-medium max-w-2xl mx-auto`}>
             Sadece dijitalde değil, Bağcılar merkezli ofisimizde ve modern tesisimizde her zaman yanınızdayız. Tüm İstanbul'a profesyonel hizmet veriyoruz.
           </p>
         </motion.div>

        <div className="h-10 sm:h-16"></div>

        {/* ── INTERACTIVE ACCORDION GALLERY ── */}
        <div className="w-full flex justify-center">
          <div className="flex w-full max-w-[1000px] h-[350px] sm:h-[450px] items-stretch relative rounded-3xl gap-2 sm:gap-4">
            {options.map((option, index) => (
              <div
                key={index}
                className={`
                  relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out
                `}
                style={{
                  backgroundImage: `url('${option.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backfaceVisibility: 'hidden',
                  opacity: animatedOptions.includes(index) ? 1 : 0,
                  transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-60px)',
                  minWidth: '50px',
                  borderRadius: '24px',
                  borderWidth: activeIndex === index ? '2px' : '0px',
                  borderStyle: 'solid',
                  borderColor: activeIndex === index ? '#f97316' : 'transparent',
                  cursor: 'pointer',
                  backgroundColor: '#18181b',
                  boxShadow: activeIndex === index 
                    ? '0 20px 60px rgba(0,0,0,0.50)' 
                    : 'none',
                  flex: activeIndex === index ? '8 1 0%' : '1 1 0%',
                  zIndex: activeIndex === index ? 10 : 1,
                }}
                onClick={() => handleOptionClick(index)}
              >
                {/* Gradient overlay for text readability */}
                <div 
                  className="absolute inset-x-0 bottom-0 pointer-events-none transition-all duration-700 ease-in-out"
                  style={{
                    height: '180px',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0) 100%)',
                    opacity: activeIndex === index ? 1 : 0.4
                  }}
                ></div>
                
                {/* Label with icon and info */}
                <div className="absolute left-0 right-0 bottom-4 sm:bottom-6 flex items-center justify-start h-12 z-2 pointer-events-none px-3 sm:px-5 gap-3 sm:gap-4 w-full">
                  
                  <div className={`min-w-[40px] sm:min-w-[48px] max-w-[40px] sm:max-w-[48px] h-[40px] sm:h-[48px] flex items-center justify-center rounded-full backdrop-blur-md shadow-lg border transition-all duration-500 ease-in-out ${activeIndex === index ? 'bg-orange-500 border-orange-400 scale-100' : 'bg-black/80 border-white/10 scale-90'}`}>
                    {React.cloneElement(option.icon as React.ReactElement<{ size: number }>, { size: activeIndex === index ? 24 : 18 })}
                  </div>
                  
                  <div className="text-white whitespace-pre relative overflow-hidden flex-1">
                    <div 
                      className={`${outfit.className} font-bold text-[16px] sm:text-[20px] transition-all duration-700 ease-in-out ${activeIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[25px]'}`}
                    >
                      {option.title}
                    </div>
                    <div 
                      className={`${inter.className} text-[12px] sm:text-[14px] text-gray-300 transition-all duration-700 ease-in-out mt-0.5 ${activeIndex === index ? 'opacity-100 translate-x-0 delay-75' : 'opacity-0 translate-x-[25px]'}`}
                    >
                      {option.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── LOCATION CTA BAR ── */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-14 sm:mt-24 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 shadow-2xl"
        >
          <div className="flex items-center gap-5 md:gap-6 w-full md:w-auto">
            <div className="bg-orange-500/20 text-orange-500 p-4 rounded-2xl shrink-0">
              <MapPin size={32} strokeWidth={2} />
            </div>
            <div>
              <div className="text-[12px] font-extrabold tracking-widest text-gray-400 uppercase mb-1">Açık Adresimiz</div>
              <div className={`${outfit.className} text-xl sm:text-2xl font-bold text-white leading-tight`}>
                Çınar Mah., 843. Sk., Büşra Apt. No: 4B
              </div>
              <div className="text-gray-400 font-medium mt-1">Bağcılar / İstanbul</div>
            </div>
          </div>
          
          <Link 
            href="https://www.google.com/maps/place/%C3%87%C4%B1nar+Kurban/@41.0341983,28.8619754,17z/data=!3m1!4b1!4m6!3m5!1s0x14cabbb1aa7a9f17:0xa4530a26710e3cb8!8m2!3d41.0341983!4d28.8619754!16s%2Fg%2F11xl06wsk_" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-5 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl text-[15px] font-bold shadow-xl shadow-orange-500/25 active:scale-95 transition-all group shrink-0"
          >
            <Navigation size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            Otomatik Navigasyon Başlat
          </Link>
        </motion.div>

       </div>
    </section>
  );
}
