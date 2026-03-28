"use client";

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { HelpCircle, Handshake, Scissors, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { Outfit, Inter } from "next/font/google";
import Link from 'next/link';

const outfit = Outfit({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const options = [
  {
    title: "Vekalet İşlemleri",
    question: "Vekalet işlemleri nasıl yürütülüyor?",
    answer: "Vekaletiniz, kurban kesiminden önce dini kurallara uygun olarak görevli personelimiz veya hocamız tarafından alınmakta ve videoya çekilerek size ulaştırılmaktadır. Kasaplarımız tekbirlerle isminizi okuyarak kesimi gerçekleştirir.",
    image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=800&q=80", // Trust/Handshake theme
    icon: <Handshake size={24} className="text-white" />
  },
  {
    title: "Hisse Seçenekleri",
    question: "Standart Hisse ile Özel Seçim farkı nedir?",
    answer: "Standart hisselerimiz İslami usullere uygun olarak seçilmiş kaliteli dana/düvelerden oluşurken, Özel Seçim Tosun Grubumuz daha yüksek et verimine sahip, özenle seçilmiş ve özel besiye çekilmiş tosunlardan oluşmaktadır.",
    image: "https://images.unsplash.com/photo-1590403759368-8742cfd9ecfa?auto=format&fit=crop&w=800&q=80", // Cattle/Farm theme
    icon: <ShieldCheck size={24} className="text-white" />
  },
  {
    title: "Özel Kasaplık",
    question: "Et işleme hizmeti neleri kapsar?",
    answer: "Özel kasaplık hizmetimiz; etin, kıymanın, kuşbaşının profesyonel ekibimiz tarafından sizin istediğiniz ölçülerde kesilip, paketlenmesini ve hijyenik koşullarda dolabınıza kadar teslim edilmesini kapsar.",
    image: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&w=800&q=80", // Professional butchery/meat
    icon: <Scissors size={24} className="text-white" />
  },
  {
    title: "Kesim Takvimi",
    question: "Kesim işlemleri ne zaman gerçekleşiyor?",
    answer: "Kesim işlemlerimiz Kurban Bayramı'nın birinci günü sabah namazının ardından hızla başlar. İslami kurallara tamamen uygun olarak, bekletilmeden ilk gün içerisinde tamamlanır ve teslimat süreci devreye girer.",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80", // Time/Clock/Organization
    icon: <Clock size={24} className="text-white" />
  }
];

export default function FAQ() {
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
      }, 150 * i);
      timers.push(timer);
    });
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <section className="py-24 sm:py-32 bg-gray-50 relative overflow-hidden" id="faq">
       <div className="container z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* ── HEADER ── */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           viewport={{ once: true }}
           className="flex flex-col items-center justify-center max-w-[700px] mx-auto text-center"
         >
           <div className="inline-flex justify-center items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-orange-600 font-extrabold text-[11px] uppercase tracking-widest mb-6">
             <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
             Yardım Merkezi
           </div>
 
           <h2 className={`${outfit.className} text-[2.5rem] sm:text-5xl md:text-[3.5rem] font-extrabold tracking-tight text-gray-900 leading-[1.1]`}>
             Kurban Hakkında <br className="hidden sm:block"/> <span className="text-orange-500">Sıkça Sorulan Sorular</span>
           </h2>
           <p className={`${inter.className} mt-6 text-gray-500 text-[16px] sm:text-[1.15rem] leading-[1.6] font-medium max-w-2xl mx-auto`}>
             Süreçlerimiz, hizmet anlayışımız ve tesis kurallarımız hakkında merak ettiğiniz tüm detayları sizin için derledik.
           </p>
         </motion.div>

        <div className="h-10 sm:h-16"></div>

        {/* ── INTERACTIVE ACCORDION FAQ GALLERY ── */}
        <div className="w-full flex justify-center">
          <div className="flex w-full max-w-[1050px] h-[450px] sm:h-[500px] items-stretch relative rounded-[2rem] gap-2 sm:gap-4 touch-pan-x">
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
                  transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-40px)',
                  minWidth: '55px',
                  borderRadius: '24px',
                  borderWidth: activeIndex === index ? '2px' : '0px',
                  borderStyle: 'solid',
                  borderColor: activeIndex === index ? '#f97316' : 'transparent',
                  cursor: 'pointer',
                  backgroundColor: '#18181b',
                  boxShadow: activeIndex === index 
                    ? '0 20px 60px rgba(0,0,0,0.40)' 
                    : 'none',
                  flex: activeIndex === index ? '10 1 0%' : '1 1 0%',
                  zIndex: activeIndex === index ? 10 : 1,
                }}
                onClick={() => handleOptionClick(index)}
              >
                {/* Gradient overlay for readability */}
                <div 
                  className="absolute inset-x-0 bottom-0 pointer-events-none transition-all duration-700 ease-in-out"
                  style={{
                    height: '280px',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0) 100%)',
                    opacity: activeIndex === index ? 1 : 0.4
                  }}
                ></div>
                
                {/* Content Box */}
                <div className="absolute left-0 right-0 bottom-6 flex flex-col justify-end z-2 pointer-events-none px-4 sm:px-8 w-full h-full">
                  
                  {/* Icon Area (Visible even when collapsed) */}
                  <div className={`mb-4 min-w-[44px] sm:min-w-[50px] w-fit h-[44px] sm:h-[50px] flex items-center justify-center rounded-full backdrop-blur-md shadow-lg border transition-all duration-500 ease-in-out ${activeIndex === index ? 'bg-orange-500 border-orange-400 scale-100' : 'bg-black/60 border-white/20 scale-90 -ml-1 sm:ml-0'}`}>
                    {React.cloneElement(option.icon as React.ReactElement, { size: activeIndex === index ? 24 : 18 })}
                  </div>
                  
                  {/* Text Details Area */}
                  <div className="text-white relative flex-1 max-h-[160px] flex flex-col justify-end">
                    
                    {/* Collapsed Vertical Title (hidden when active) */}
                    <div 
                       className={`${outfit.className} absolute bottom-0 left-0 font-bold text-[16px] tracking-wider uppercase origin-bottom-left -rotate-90 whitespace-nowrap transition-all duration-500 ease-in-out text-white/50`}
                       style={{
                         opacity: activeIndex === index ? 0 : 1,
                         transform: activeIndex === index ? 'rotate(-90deg) translateY(20px)' : 'rotate(-90deg) translateY(0)',
                         pointerEvents: 'none'
                       }}
                    >
                       {option.title}
                    </div>

                    {/* Active Question & Answer */}
                    <div 
                      className={`${outfit.className} font-extrabold text-[22px] sm:text-[28px] leading-tight mb-3 transition-all duration-700 ease-in-out whitespace-normal`}
                      style={{
                        opacity: activeIndex === index ? 1 : 0,
                        transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'
                      }}
                    >
                      {option.question}
                    </div>
                    
                    <div 
                      className={`${inter.className} text-[14px] sm:text-[16px] text-gray-300 transition-all duration-700 ease-in-out font-medium leading-[1.6] whitespace-normal`}
                      style={{
                        opacity: activeIndex === index ? 1 : 0,
                        transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)',
                        transitionDelay: '100ms'
                      }}
                    >
                      {option.answer}
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── ACTION CTA ── */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.3 }}
           viewport={{ once: true }}
           className="mt-16 flex justify-center"
        >
          <Link href="/sikca-sorulan-sorular" className="group flex items-center gap-2 px-8 py-4 rounded-full border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all font-bold text-sm tracking-wide">
            Tüm Soruları İncele 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

       </div>
    </section>
  );
}
