"use client";

import React from "react";
import { motion } from "framer-motion";
import { Outfit, Inter } from "next/font/google";
import Link from "next/link";
import { HelpCircle, MessagesSquare } from "lucide-react";
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
    answer: "Vekaletiniz, kurban kesiminden önce dini kurallara uygun olarak görevli personelimiz veya hocamız tarafından alınmakta ve videoya çekilerek size ulaştırılmaktadır. Kasaplarımız tekbirlerle isminizi okuyarak kesimi gerçekleştirir."
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
    answer: "Hayır, vekalet vererek kesim işlemlerini uzaktan da gönül rahatlığıyla gerçekleştirebilirsiniz. Kesime katılamayan hissedarlarımız için kesim videoları taraflarına ulaştırılmaktadır."
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
    <main className="min-h-screen bg-gray-50 pt-32 sm:pt-40 pb-24 relative overflow-hidden">
        {/* Background Decorative Blur */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] opacity-20 bg-gradient-to-br from-orange-400 to-transparent blur-[120px] pointer-events-none rounded-full" />

        <div className="container z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative">
          
          {/* ── HEADER ── */}
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
             className="flex flex-col items-center justify-center text-center mb-16 sm:mb-20"
           >
             <div className="inline-flex justify-center items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-orange-600 font-extrabold text-[11px] uppercase tracking-widest mb-6 shadow-sm">
               <HelpCircle size={14} className="text-orange-500" />
               Aklınıza Takılanlar
             </div>
   
             <h1 className={`${outfit.className} text-[2.5rem] sm:text-5xl md:text-[4rem] font-extrabold tracking-tight text-gray-900 leading-[1.1]`}>
               Sıkça Sorulan <span className="text-orange-500">Sorular</span>
             </h1>
             <p className={`${inter.className} mt-6 text-gray-500 text-[16px] sm:text-[1.15rem] leading-[1.6] font-medium max-w-2xl mx-auto`}>
               Kurbanlık hisse alımından kesim sürecine, et dağıtımından vekalet işlemlerine kadar aklınıza takılan tüm soruların cevaplarını burada derledik.
             </p>
          </motion.div>

          {/* ── ACCORDION LIST ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-xl shadow-gray-200/50 p-6 sm:p-10 md:p-14 border border-gray-100"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                  <AccordionTrigger className={`${outfit.className} text-[17px] sm:text-[19px] text-gray-900 group hover:no-underline`}>
                    <span className="group-hover:text-orange-600 transition-colors mr-4 text-left leading-tight py-1">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className={`${inter.className} text-[15px] sm:text-[16px] text-gray-600 font-medium leading-[1.7] pt-2 pb-6 pr-4 sm:pr-10`}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* ── BOTTOM ACTION ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="mt-16 sm:mt-24 p-8 sm:p-12 bg-[#0c1a12] rounded-[2rem] sm:rounded-[3rem] text-center relative overflow-hidden flex flex-col items-center shadow-2xl"
          >
             <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-20 bg-gradient-to-br from-orange-400 to-transparent blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
             
             <div className="bg-orange-500/10 p-4 rounded-full mb-6">
               <MessagesSquare size={32} className="text-orange-500" />
             </div>
             
             <h3 className={`${outfit.className} text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight`}>
               Cevabınızı Bulamadınız mı?
             </h3>
             <p className={`${inter.className} text-gray-400 text-[16px] sm:text-[1.1rem] leading-relaxed max-w-xl mx-auto mb-10`}>
               Çınar Kurban Destek Ekibi günün her saati size yardımcı olmak için hazır. WhatsApp üzerinden bizimle iletişime geçin, anında yanıtlayalım.
             </p>
             
             <Link 
               href="https://wa.me/902129099495" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white rounded-full px-10 py-5 text-[16px] font-bold tracking-wide transition-all active:scale-95 shadow-lg shadow-orange-500/25"
             >
               WhatsApp Destek İste
             </Link>
          </motion.div>

        </div>
      </main>
  );
}
