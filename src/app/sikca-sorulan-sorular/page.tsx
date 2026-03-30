"use client";

import React from "react";
import { motion } from "framer-motion";
import { Outfit, Inter } from "next/font/google";
import Link from "next/link";
import { HelpCircle, MessagesSquare, CheckCircle2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const outfit = Outfit({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "Standart Hisse ile Özel Seçim Tosun Grubu farkı nedir?",
    answer: "Standart hisselerimiz İslami usullere uygun olarak seçilmiş kaliteli dana/düvelerden oluşurken, Özel Seçim Tosun Grubumuz daha yüksek et verimine sahip, özenle seçilmiş ve özel besiye çekilmiş tosunlardan oluşmaktadır."
  },
  {
    id: 2,
    question: "Vekalet işlemleri nasıl yürütülüyor?",
    answer: "Vekaletiniz, kurban kesiminden önce dini kurallara uygun olarak görevli personelimiz veya hocamız tarafından alınmaktadır. Kasaplarımız tekbirlerle isminizi okuyarak kesimi gerçekleştirir."
  },
  {
    id: 3,
    question: "Özel kasaplık hizmeti neleri kapsar?",
    answer: "Özel kasaplık hizmetimiz; etin, kıymanın, kuşbaşının profesyonel ekibimiz tarafından sizin istediğiniz ölçülerde kesilip, paketlenmesini ve hijyenik koşullarda teslim edilmesini kapsar."
  },
  {
    id: 4,
    question: "Kesim işlemleri ne zaman gerçekleşiyor?",
    answer: "Kesim işlemlerimiz Kurban Bayramı'nın birinci günü sabah namazının ardından bayram namazı sonrasında sırayla başlar ve İslami kurallara uygun olarak zamanında tamamlanır."
  },
  {
    id: 5,
    question: "Et işleme (Profesyonel Kasaplık) hizmeti nedir?",
    answer: "Kurbanınız kesildikten sonra, etlerinizin dinlendirilmesi, istenilen şekilde parçalara ayrılması (kuşbaşı, biftek, kıyma vb.) ve pay sahiplerine eşit şekilde bölünerek hijyenik paketlerde teslim edilmesi hizmetidir."
  },
  {
    id: 6,
    question: "Kredi kartı ile ödeme yapabilir miyim?",
    answer: "Evet, tesisimizde ve online sistemlerimizde kredi kartı ile güvenle ödeme yapabilirsiniz. Dilerseniz taksit seçeneklerimizden de faydalanabilirsiniz."
  },
  {
    id: 7,
    question: "Hisse bedeline tüm hizmetler dahil mi?",
    answer: "Evet, hisse bedeline kesim, yüzüm, parçalama, paketleme ve vekalet alımı gibi tüm hizmetlerimiz dahildir. Ekstra bir ücret talep edilmemektedir."
  },
  {
    id: 8,
    question: "Kurbanlıkların seçimini nasıl yapıyorsunuz?",
    answer: "Kurbanlıklarımız, veteriner hekimlerimiz kontrolünde İslami kurallara ve sağlık standartlarına tam uygun, yaşını doldurmuş kurbanlık vasfı taşıyan hayvanlar arasından özenle seçilmektedir."
  },
  {
    id: 9,
    question: "Hastalık veya bir sıkıntı durumunda nasıl bir yol izliyorsunuz?",
    answer: "Kurbanlığın kesimden önce veya sonra hastalıklı çıkması gibi nadir durumlarda, derhal eşdeğer veya daha kaliteli bir kurbanlık ile değişimi sağlanarak hissenizin güvenliği garanti altına alınır."
  },
  {
    id: 10,
    question: "Kesim anında orada bulunmak zorunda mıyım?",
    answer: "Hayır, vekalet vererek kesim işlemlerini uzaktan da gönül rahatlığıyla gerçekleştirebilirsiniz."
  },
  {
    id: 11,
    question: "Hissedarlarımı ben mi bulmalıyım, siz mi tamamlıyorsunuz?",
    answer: "Tek bir hisse alsanız dahi geri kalan 6 hisse tesisimiz tarafından tamamlattırılır. Ortak arama veya bulma zorunluluğunuz yoktur."
  },
  {
    id: 12,
    question: "Kesilen kurbana ait sakatatlar (kelle, paça vb.) kime veriliyor?",
    answer: "Kurbanın sakatat kısımları, hisse sahiplerinin talepleri doğrultusunda paketlenerek teslim edilir veya istek üzerine ihtiyaç sahiplerine/hayır kurumlarına bağışlanır."
  },
  {
    id: 13,
    question: "Kurbanımı kesmeyip canlı olarak almak istiyorum, mümkün mü?",
    answer: "Evet, kurbanlığınızı bayramdan önce veya bayram günlerinde canlı ağırlık üzerinden tartarak satın alma ve teslim alma imkanınız bulunmaktadır."
  },
  {
    id: 14,
    question: "Tesisinize geldiğimizde kahvaltı veya ikramınız oluyor mu?",
    answer: "Evet, misafirlerimiz için kesim işlemleri sırasında çay, simit, poğaça ve sıcak çorba gibi ikramlarımız ücretsiz olarak sunulmaktadır."
  },
  {
    id: 15,
    question: "Bekleme alanlarınız var mı?",
    answer: "Tesisimizde ailenizle birlikte rahatça vakit geçirebileceğiniz, gölgelikli, oturma alanlarına sahip konforlu bekleme noktalarımız bulunmaktadır."
  }
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
        
        {/* ── 1. CINEMATIC HERO SECTION ── */}
        <section className="relative w-full h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          {/* Safe Photography Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-105"
            style={{ backgroundImage: "url('/banner_image/islamic_ram.png')" }} 
          >
            {/* Deep gradient for white navbar and central title visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0c1a12]"></div>
          </div>

          <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center mt-16">
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="inline-flex justify-center items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white font-extrabold text-[12px] uppercase tracking-widest mb-6 backdrop-blur-md"
             >
               <HelpCircle size={16} className="text-orange-400" />
               Aklınıza Takılanlar
             </motion.div>
   
             <motion.h1 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.1 }}
               className={`${outfit.className} text-[3rem] sm:text-5xl md:text-[5.5rem] font-extrabold tracking-tight text-white leading-[1.05] mb-6 drop-shadow-2xl`}
             >
               Sıkça Sorulan <span className="text-orange-500">Sorular</span>
             </motion.h1>
             
             <motion.p 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className={`${inter.className} text-gray-300 text-[16px] sm:text-[1.2rem] leading-relaxed max-w-2xl mx-auto font-medium`}>
               Kurbanlık hisse alımından kesim sürecine, et dağıtımından vekalet işlemlerine kadar merak ettiğiniz tüm detayları sizin için derledik.
             </motion.p>
          </div>
        </section>

        {/* ── 2. ACCORDION LIST (With Overlap "Çıkıntı" Effect) ── */}
        <section className="relative z-20 -mt-20 sm:-mt-28 w-full px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-[2rem] sm:rounded-[3rem] shadow-2xl shadow-gray-200/50 p-6 sm:p-10 md:p-16 border border-gray-100/50"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                  <AccordionTrigger className={`${outfit.className} text-[18px] sm:text-[20px] text-gray-900 group hover:no-underline`}>
                    <span className="group-hover:text-orange-600 transition-colors mr-4 text-left leading-tight py-2 font-bold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className={`${inter.className} text-[15px] sm:text-[17px] text-gray-600 font-medium leading-[1.7] pt-2 pb-6 pr-4 sm:pr-10`}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </section>

        {/* ── 3. BOTTOM ACTION CTA (With Unsplash Imagery) ── */}
        <section className="py-24 px-4 w-full">
          <div className="container max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="bg-[#0c1a12] rounded-[3rem] p-10 sm:p-20 text-center relative overflow-hidden h-[450px] flex flex-col items-center justify-center shadow-2xl"
            >
               <div className="absolute inset-0 bg-cover bg-center z-0 opacity-30 hover:scale-105 transition-transform duration-[2s]" style={{ backgroundImage: "url('/banner_image/islamic_bull.png')" }} />
               <div className="absolute inset-0 bg-gradient-to-tr from-[#0c1a12]/90 via-black/80 to-[#0c1a12]/90 z-0 pointer-events-none" />
               
               <div className="bg-white/10 p-4 rounded-2xl mb-6 relative z-10 border border-white/20 backdrop-blur-sm">
                 <MessagesSquare size={32} className="text-orange-400" />
               </div>
               
               <h3 className={`${outfit.className} text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-white mb-6 leading-tight relative z-10 max-w-2xl`}>
                 Cevabınızı Bulamadınız mı?
               </h3>
               <p className={`${inter.className} text-gray-300 text-[16px] sm:text-[1.1rem] leading-relaxed max-w-xl mx-auto mb-10 relative z-10 drop-shadow-md`}>
                 Çınar Kurban Destek Ekibi günün her saati size yardımcı olmak için hazır. WhatsApp üzerinden bizimle iletişime geçin, saniyeler içinde yanıtlayalım.
               </p>
               
               <Link 
                 href="https://wa.me/902129099495" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="relative z-10 inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full px-10 py-5 text-[16px] font-bold tracking-wide transition-all active:scale-95 shadow-xl shadow-orange-500/30 backdrop-blur-md"
               >
                 <CheckCircle2 size={20} /> WhatsApp'tan Destek Al
               </Link>
            </motion.div>
          </div>
        </section>

      </main>
  );
}
