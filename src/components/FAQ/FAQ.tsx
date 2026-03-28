"use client";

import React from "react";
import { motion } from "framer-motion";
import { Outfit, Inter } from "next/font/google";
import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const outfit = Outfit({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const faqs = [
  {
    id: 1,
    question: "Standart Hisse ile Özel Seçim Tosun Grubu farkı nedir?",
    answer: "Standart hisselerimiz İslami usullere uygun olarak seçilmiş kaliteli dana/düvelerden oluşurken, Özel Seçim Tosun Grubumuz daha yüksek et verimine sahip, özenle seçilmiş ve özel besiye çekilmiş tosunlardan oluşmaktadır.",
  },
  {
    id: 2,
    question: "Vekalet işlemleri nasıl yürütülüyor?",
    answer: "Vekaletiniz, kurban kesiminden önce dini kurallara uygun olarak görevli personelimiz veya hocamız tarafından alınmakta ve videoya çekilerek size ulaştırılmaktadır. Kasaplarımız tekbirlerle isminizi okuyarak kesimi gerçekleştirir.",
  },
  {
    id: 3,
    question: "Özel kasaplık hizmeti neleri kapsar?",
    answer: "Özel kasaplık hizmetimiz; etin, kıymanın, kuşbaşının profesyonel ekibimiz tarafından sizin istediğiniz ölçülerde kesilip, paketlenmesini ve hijyenik koşullarda teslim edilmesini kapsar.",
  },
  {
    id: 4,
    question: "Kesim işlemleri ne zaman gerçekleşiyor?",
    answer: "Kesim işlemlerimiz Kurban Bayramı'nın birinci günü sabah namazının ardından bayram namazı sonrasında sırayla başlar ve İslami kurallara uygun olarak zamanında tamamlanır.",
  },
  {
    id: 5,
    question: "Et işleme (Profesyonel Kasaplık) hizmeti nedir?",
    answer: "Kurbanınız kesildikten sonra, etlerinizin dinlendirilmesi, istenilen şekilde parçalara ayrılması (kuşbaşı, biftek, kıyma vb.) ve pay sahiplerine eşit şekilde bölünerek hijyenik paketlerde teslim edilmesi hizmetidir.",
  }
];

export default function FAQ() {
  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden" id="faq">
       <div className="container z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        {/* ── HEADER ── */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           viewport={{ once: true }}
           className="flex flex-col items-center justify-center text-center"
         >
           <div className="inline-flex justify-center items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-orange-600 font-extrabold text-[11px] uppercase tracking-widest mb-6">
             <HelpCircle size={14} className="text-orange-500" />
             Yardım Merkezi
           </div>
 
           <h2 className={`${outfit.className} text-[2.5rem] sm:text-5xl md:text-[3.5rem] font-extrabold tracking-tight text-gray-900 leading-[1.1]`}>
             Kurban Hakkında <br className="hidden sm:block"/> <span className="text-orange-500">Sıkça Sorulan Sorular</span>
           </h2>
           <p className={`${inter.className} mt-6 text-gray-500 text-[16px] sm:text-[1.15rem] leading-[1.6] font-medium max-w-2xl mx-auto`}>
             Süreçlerimiz, hizmet anlayışımız ve tesis kurallarımız hakkında sıkça merak edilen tüm detayları sizin için derledik.
           </p>
        </motion.div>

        {/* ── ACCORDION LIST ── */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-24 px-2 sm:px-0"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                <AccordionTrigger className={`${outfit.className} text-[18px] sm:text-[20px] text-gray-900 group`}>
                  <span className="group-hover:text-orange-600 transition-colors mr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className={`${inter.className} text-[15px] sm:text-[16px] text-gray-600 leading-relaxed pt-2 pb-6`}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* ── ACTION CTA ── */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.3 }}
           viewport={{ once: true }}
           className="mt-16 flex justify-center"
        >
          <Link href="/sikca-sorulan-sorular" className="group flex items-center gap-2 px-8 py-4 rounded-full border-2 border-gray-200 text-gray-900 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all font-bold text-sm tracking-wide">
            Tüm Soruları İncele 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

       </div>
    </section>
  );
}
