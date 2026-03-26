"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { Plus } from "lucide-react";
import Link from "next/link";

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
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <main className={styles.pageContainer}>
        <div className="container">
          <div className={styles.header}>
            <h1 className={styles.title}>Sıkça Sorulan Sorular</h1>
            <p className={styles.description}>
              Kurbanlık hisse alımından, kesim sürecine, etlerin dağıtımından vekalet işlemlerine kadar 
              tüm konulara dair detaylı bilgiye aşağıdan ulaşabilirsiniz. Aklınıza takılan diğer sorular 
              için bizimle iletişime geçmekten çekinmeyin.
            </p>
          </div>

          <div className={styles.faqWrapper}>
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`${styles.accordionItem} ${isOpen ? styles.accordionItemActive : ""}`}
                >
                  <button
                    className={styles.accordionButton}
                    onClick={() => toggleAccordion(faq.id)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <div className={styles.icon}>
                      <Plus />
                    </div>
                  </button>
                  {isOpen && (
                    <div className={styles.accordionContent}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className={styles.bottomAction}>
            <h3 className={styles.bottomText}>Aradığınız cevabı bulamadınız mı?</h3>
            <p className={styles.bottomSubtext}>
              Bize WhatsApp üzerinden sormak istediğiniz her şeyi iletebilirsiniz. Ekibimiz en kısa sürede dönüş yapacaktır.
            </p>
            <Link 
              href="https://wa.me/905555555555" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`btn btn--lg ${styles.btnAccent}`}
            >
              WhatsApp'tan Ulaşın
            </Link>
          </div>
        </div>
      </main>
  );
}
