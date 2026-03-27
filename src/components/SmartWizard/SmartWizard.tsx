"use client";

import { useState } from "react";
import styles from "./SmartWizard.module.css";

/* ---- Step data ---- */
interface WizardOption {
  icon: string;
  title: string;
  desc: string;
  extra?: string;
}

interface Step {
  question: string;
  options: WizardOption[];
}

const steps: Step[] = [
  {
    question: "Kurbanınızı seçin",
    options: [], // animal selection (special render)
  },
  {
    question: "Kayıt modeliniz hangisi?",
    options: [
      { icon: "👤", title: "Hissedar olarak katılacağım", desc: "Bireysel hisse kaydı" },
      { icon: "👥", title: "7 Kişilik grubumuz hazır", desc: "Grup olarak kayıt", extra: "ÖZEL SEÇİM" },
    ],
  },
  {
    question: "Kemikli Et Verimi Beklentiniz",
    options: [
      { icon: "💰", title: "Ekonomik Grup (25-30 kg)", desc: "1. Grup: Bütçe dostu ve ekonomik" },
      { icon: "🏠", title: "Mini Aile Grubu (30-35 kg)", desc: "2. Grup: Küçük aileler için ideal" },
      { icon: "🏆", title: "Çekirdek Aile Grubu (35-40 kg)", desc: "3. Grup: Çekirdek aileler için en ideal denge" },
      { icon: "👨‍👩‍👧‍👦", title: "Geniş Aile Grubu (40+ kg)", desc: "4. Grup: Geniş aileler için bereketi bol" },
    ],
  },
  {
    question: "Kurban nasıl işlensin?",
    options: [
      { icon: "🍖", title: "Geleneksel Paket", desc: "Bayram 1. günü, parçalanmış sıcak et teslimi" },
      { icon: "🚚", title: "Özel Kasaplık İşlemi", desc: "Değerli et, kıyma, kuşbaşı olarak paketle, kurbandan sonra teslim", extra: "EK ÜCRETLİ" },
    ],
  },
  {
    question: "Teslimat tercihi?",
    options: [
      { icon: "🚛", title: "Adresime Gelsin", desc: "Özel işlem sonrası dondurulmuş sevkiyat" },
      { icon: "🏭", title: "Tesisten Alırım", desc: "Randevu saatinizde tesisten teslim" },
    ],
  },
];

const animals = [
  {
    name: "Büyükbaş",
    image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=500&q=80",
    popular: true,
  },
  {
    name: "Küçükbaş",
    image: "https://images.unsplash.com/photo-1484557985045-edf25e08da73?w=500&q=80",
    popular: false,
  },
];

export default function SmartWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<number, number>>({});

  const totalSteps = steps.length;
  const progress = Math.round(((currentStep + 1) / totalSteps) * 100);
  const isLastStep = currentStep === totalSteps - 1;

  const handleSelect = (optionIndex: number) => {
    const newSelections = { ...selections, [currentStep]: optionIndex };
    setSelections(newSelections);

    // Auto-advance after a brief visual feedback delay
    if (!isLastStep) {
      setTimeout(() => {
        setCurrentStep((s) => s + 1);
      }, 350);
    }
  };

  const goBack = () => {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  };

  const buildWhatsAppMessage = () => {
    const animalType = selections[0] === 0 ? "Büyükbaş" : "Küçükbaş";
    const registrationModel = selections[1] !== undefined
      ? steps[1].options[selections[1]]?.title
      : "Belirtilmedi";
    const meatYield = selections[2] !== undefined
      ? steps[2].options[selections[2]]?.title
      : "Belirtilmedi";
    const processing = selections[3] !== undefined
      ? steps[3].options[selections[3]]?.title
      : "Belirtilmedi";
    const delivery = selections[4] !== undefined
      ? steps[4].options[selections[4]]?.title
      : "Belirtilmedi";

    return `Merhaba, Akıllı Seçim Asistanı üzerinden kurban kaydı yapmak istiyorum.

📋 Tercihlerim:
🐄 Kurban Türü: ${animalType}
👥 Kayıt Modeli: ${registrationModel}
⚖️ Et Verimi: ${meatYield}
🥩 İşleme: ${processing}
🚚 Teslimat: ${delivery}`;
  };

  const handleFinish = () => {
    const message = buildWhatsAppMessage();
    window.open(
      `https://wa.me/902129099495?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className={styles.wizard} id="akilli-asistan">
      <div className={styles.wizardInner}>
        {/* Badge */}
        <div className={styles.wizardBadge}>
          <span className={styles.wizardBadgeInner}>✨ AKILLI SEÇİM ASİSTANI</span>
        </div>

        {/* Title */}
        <h2 className={styles.wizardTitle}>{steps[currentStep].question}</h2>

        {/* Step Content */}
        <div className={styles.stepContent} key={currentStep}>
          {currentStep === 0 ? (
            /* Animal selection */
            <div className={styles.animalGrid}>
              {animals.map((animal, i) => (
                <div
                  key={i}
                  className={`${styles.animalCard} ${selections[0] === i ? styles.animalCardSelected : ""}`}
                  onClick={() => handleSelect(i)}
                >
                  <div className={styles.animalImageWrap}>
                    {animal.popular && (
                      <span className={styles.popularBadge}>Popüler</span>
                    )}
                    <img
                      src={animal.image}
                      alt={animal.name}
                      className={styles.animalImage}
                    />
                  </div>
                  <div className={styles.animalName}>{animal.name}</div>
                  <div className={styles.animalCta}>SEÇMEK İÇİN TIKLA</div>
                </div>
              ))}
            </div>
          ) : (
            /* Generic options */
            <div className={styles.optionsList}>
              {steps[currentStep].options.map((opt, i) => (
                <div
                  key={i}
                  className={`${styles.optionCard} ${selections[currentStep] === i ? styles.optionCardSelected : ""}`}
                  onClick={() => handleSelect(i)}
                >
                  <div className={styles.optionIcon}>{opt.icon}</div>
                  <div className={styles.optionContent}>
                    <div className={styles.optionTitle}>{opt.title}</div>
                    <p className={styles.optionDesc}>{opt.desc}</p>
                  </div>
                  {opt.extra && <span className={styles.optionExtra}>{opt.extra}</span>}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Progress */}
        <div className={styles.progressArea}>
          <div className={styles.progressHeader}>
            <span className={styles.progressLabel}>İLERLEME</span>
            <span className={styles.progressPercent}>%{progress}</span>
          </div>
          <div className={styles.progressTrack}>
            <div className={styles.progressFill} style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Nav Buttons */}
        <div className={styles.wizardNav}>
          {currentStep > 0 && (
            <button className="btn btn--outline" onClick={goBack}>
              ← Geri
            </button>
          )}
          {isLastStep && (
            <button
              className="btn btn--primary btn--lg"
              onClick={handleFinish}
              disabled={selections[currentStep] === undefined}
            >
              WhatsApp ile Tamamla 💬
            </button>
          )}
        </div>

        {/* Deals */}
        <div className={styles.dealsArea}>
          <div className={styles.dealsLabel}>2026 ERKEN KAYIT FIRSATLARI</div>
          <div className={styles.mainDeal}>
            <div className={styles.mainDealLeft}>
              <div className={styles.mainDealIcon}>🎁</div>
              <div>
                <div className={styles.mainDealTitle}>Erken Kayıt Fırsatı</div>
                <p className={styles.mainDealSub}>Bütün müşterilerimize özel</p>
              </div>
            </div>
            <div className={styles.mainDealRight}>
              <div className={styles.mainDealPrice}>1.000 ₺</div>
              <div className={styles.mainDealUnit}>HİSSE BAŞI İNDİRİM</div>
            </div>
          </div>
          <div className={styles.subDeals}>
            <div className={styles.subDealCard}>
              <span className={styles.subDealBadge}>EK FIRSAT</span>
              <div className={styles.subDealTop}>
                <div className={styles.subDealIcon}>👤</div>
                <div>
                  <div className={styles.subDealTitle}>İlk Kayıt Avantajı</div>
                  <p className={styles.subDealSub}>Yeni müşterilerimize özel</p>
                </div>
              </div>
              <div className={styles.subDealBottom}>
                <span className={styles.subDealPriceLabel}>HİSSE BAŞI</span>
                <span className={styles.subDealPrice}>500 ₺</span>
              </div>
            </div>
            <div className={styles.subDealCard}>
              <span className={styles.subDealBadge}>EK FIRSAT</span>
              <div className={styles.subDealTop}>
                <div className={styles.subDealIcon}>👥</div>
                <div>
                  <div className={styles.subDealTitle}>Grup Bereketi</div>
                  <p className={styles.subDealSub}>7 Hissedar beraber kayıt</p>
                </div>
              </div>
              <div className={styles.subDealBottom}>
                <span className={styles.subDealPriceLabel}>HİSSE BAŞI</span>
                <span className={styles.subDealPrice}>500 ₺</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
