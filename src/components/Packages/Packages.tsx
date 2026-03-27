"use client";

import React from "react";
import styles from "./Packages.module.css";
import Link from "next/link";
import { 
  Wallet, 
  Medal, 
  Trophy, 
  Users, 
  UsersRound, 
  CheckCircle2
} from "lucide-react";

interface SpecDetail {
  label: string;
  value: string;
}

interface FeatureDetail {
  text: string;
  type: "green" | "orange";
}

interface PackagePlan {
  id: number;
  title: string;
  subtitle: string;
  iconType: "gray" | "blue" | "orange" | "green" | "darkWhite";
  specs: SpecDetail[];
  features: FeatureDetail[];
  status: {
    label: string;
    value: string;
    note: string;
    colorType?: "blue" | "orange" | "green";
  };
  badge?: string;
  theme: "light" | "orange" | "dark";
  waMessage: string;
}

const packagesData: PackagePlan[] = [
  {
    id: 1,
    title: "Ekonomik Grup",
    subtitle: "1. GRUP | EKONOMİK & VERİMLİ",
    iconType: "gray",
    specs: [
      { label: "Kemikli Et", value: "25 - 30 KG" },
      { label: "Hisse Yapısı", value: "1/7 Hisse" },
    ],
    features: [
      { text: "Yerli Besi Erkek Dana", type: "green" },
      { text: "Kapak Atma Garantisi", type: "orange" },
      { text: "Randevulu Teslimat", type: "green" },
      { text: "7 Kefeli Terazi", type: "green" },
    ],
    status: {
      label: "KAYIT DURUMU",
      value: "Ön Kayıt Açık",
      note: "Kapora ile Sıranı Ayırt",
    },
    theme: "light",
    waMessage: "Merhaba, 1. Grup (Ekonomik & Verimli) kurban hissesi hakkında bilgi almak ve ön kayıt yaptırmak istiyorum."
  },
  {
    id: 2,
    title: "Mini Aile Grubu",
    subtitle: "2. GRUP | MİNİ AİLE",
    iconType: "blue",
    specs: [
      { label: "Kemikli Et", value: "30 - 35 KG" },
      { label: "Hisse Yapısı", value: "1/7 Hisse" },
    ],
    features: [
      { text: "Yerli Besi Erkek Dana", type: "green" },
      { text: "Kapak Atma Garantisi", type: "orange" },
      { text: "Randevulu Teslimat", type: "green" },
      { text: "7 Kefeli Terazi", type: "green" },
    ],
    status: {
      label: "KAYIT DURUMU",
      value: "Ön Kayıt Açık",
      note: "Kapora ile Sıranı Ayırt",
      colorType: "blue"
    },
    theme: "light",
    waMessage: "Merhaba, 2. Grup (Mini Aile) kurban hissesi hakkında bilgi almak ve ön kayıt yaptırmak istiyorum."
  },
  {
    id: 3,
    title: "Çekirdek Aile Grubu",
    subtitle: "3. GRUP | ÇEKİRDEK AİLE",
    iconType: "orange",
    badge: "EN ÇOK TERCİH EDİLENLER",
    specs: [
      { label: "Kemikli Et", value: "35 - 40 KG" },
      { label: "Hisse Yapısı", value: "1/7 Hisse" },
    ],
    features: [
      { text: "Büyük Boy Erkek Tosun", type: "green" },
      { text: "Kapak Atma Garantisi", type: "orange" },
      { text: "Hissedar Buluşması", type: "green" },
      { text: "Randevulu Teslimat", type: "green" },
    ],
    status: {
      label: "KAYIT DURUMU",
      value: "Ön Kayıt Açık",
      note: "Kapora ile Sıranı Ayırt",
      colorType: "orange"
    },
    theme: "orange",
    waMessage: "Merhaba, 3. Grup (Çekirdek Aile) kurban hissesi hakkında bilgi almak ve ön kayıt yaptırmak istiyorum."
  },
  {
    id: 4,
    title: "Geniş Aile Grubu",
    subtitle: "4. GRUP | GENİŞ AİLE",
    iconType: "green",
    specs: [
      { label: "Kemikli Et", value: "40+ KG" },
      { label: "Hisse Yapısı", value: "1/7 Hisse" },
    ],
    features: [
      { text: "Büyük Boy Erkek Tosun", type: "green" },
      { text: "Kapak Atma Garantisi", type: "orange" },
      { text: "Hissedar Buluşması", type: "green" },
      { text: "Randevulu Teslimat", type: "green" },
    ],
    status: {
      label: "KAYIT DURUMU",
      value: "Ön Kayıt Açık",
      note: "Kapora ile Sıranı Ayırt",
      colorType: "green"
    },
    theme: "light",
    waMessage: "Merhaba, 4. Grup (Geniş Aile) kurban hissesi hakkında bilgi almak ve ön kayıt yaptırmak istiyorum."
  },
  {
    id: 5,
    title: "Özel Seçim Tosun Grubu",
    subtitle: "Tosun ve Kilogram Serbest Seçim",
    iconType: "darkWhite",
    specs: [
      { label: "Kurban Ağırlığı", value: "Serbest Seçim" },
      { label: "Hisse Yapısı", value: "Serbest Seçim" },
    ],
    features: [
      { text: "Tosununu Kendin Seç", type: "green" },
      { text: "Kapak Atma Garantisi", type: "orange" },
      { text: "Hissedar Buluşması", type: "green" },
      { text: "Randevulu Teslimat", type: "green" },
    ],
    status: {
      label: "KAYIT DURUMU",
      value: "Ön Kayıt Açık",
      note: "Grup Kaydı & Kapora",
    },
    theme: "dark",
    waMessage: "Merhaba, Özel Seçim Tosun Grubu (Grup Kaydı) hakkında bilgi almak ve kendi grubumuzu oluşturmak istiyoruz."
  }
];

// Helper to render icon
const renderIcon = (type: string) => {
  switch (type) {
    case "gray": return <Wallet size={24} />;
    case "blue": return <Medal size={24} />;
    case "orange": return <Trophy size={24} />;
    case "green": return <Users size={24} />;
    case "darkWhite": return <UsersRound size={24} />;
    default: return <Wallet size={24} />;
  }
}

export default function Packages() {
  return (
    <section className={styles.section} id="paketler">
      <div className="container">
        
        {/* Header Block */}
        <div className={styles.header}>
          <h2 className={styles.title}>2026 Büyükbaş Kurban Hisse Paketleri</h2>
          
          <Link href="#iletisim" className={styles.promoBtn}>
            <span className={styles.promoTitle}>Erken Kayıt Fırsatları</span>
            <span className={styles.promoDesc}>14.000₺'ye kadar indirim!</span>
          </Link>

          <p className={styles.subtitle}>
            İhtiyacınıza en uygun kurban paketini seçin, yerinizi şimdiden ayırtın.
          </p>
        </div>

        {/* Cards Wrapper */}
        <div className={styles.cardsContainer}>
          {packagesData.map((pkg) => {
            
            // Determine card CSS classes based on theme
            const cardClasses = [styles.card];
            if (pkg.theme === "orange") cardClasses.push(styles.themeOrange);
            if (pkg.theme === "dark") cardClasses.push(styles.themeDark);

            // Determine Icon box styling
            let iconClass = styles.iconBox;
            if (pkg.iconType === "gray") iconClass += ` ${styles.iconGray}`;
            if (pkg.iconType === "blue") iconClass += ` ${styles.iconBlue}`;
            if (pkg.iconType === "orange") iconClass += ` ${styles.iconOrange}`;
            if (pkg.iconType === "green") iconClass += ` ${styles.iconGreen}`;
            if (pkg.iconType === "darkWhite") iconClass += ` ${styles.iconDarkWhite}`;

            // Determine status value class
            let statusValueClass = styles.statusValue;
            if (pkg.status.colorType === "orange") statusValueClass += ` ${styles.statusValueOrange}`;
            if (pkg.status.colorType === "green") statusValueClass += ` ${styles.statusValueGreen}`;

            return (
              <div key={pkg.id} className={cardClasses.join(" ")}>
                
                {/* Optional Top Badge */}
                {pkg.badge && (
                  <div className={styles.topBadge}>{pkg.badge}</div>
                )}

                {/* Icon */}
                <div className={iconClass}>
                  {renderIcon(pkg.iconType)}
                </div>

                {/* Title & Subtitle */}
                <h3 className={styles.cardTitle}>{pkg.title}</h3>
                <div className={styles.cardSubtitle}>{pkg.subtitle}</div>

                {/* Specs */}
                <div className={styles.specs}>
                  {pkg.specs.map((spec, idx) => (
                    <div className={styles.specRow} key={idx}>
                      <span className={styles.specLabel}>{spec.label}</span>
                      <span className={styles.specValue}>{spec.value}</span>
                    </div>
                  ))}
                </div>

                {/* Features List */}
                <div className={styles.featuresList}>
                  {pkg.features.map((feature, idx) => (
                    <div className={styles.featureItem} key={idx}>
                      <div className={`${styles.featureIcon} ${feature.type === 'green' ? styles.checkGreen : styles.checkOrange}`}>
                        <CheckCircle2 size={16} />
                      </div>
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Status Box */}
                <div className={styles.statusBox}>
                  <div className={styles.statusLabel}>{pkg.status.label}</div>
                  <div className={statusValueClass}>{pkg.status.value}</div>
                  <div className={styles.statusNote}>{pkg.status.note}</div>
                </div>

                {/* CTA Button */}
                <Link 
                  href={`https://wa.me/902129099495?text=${encodeURIComponent(pkg.waMessage)}`} 
                  target="_blank"
                  className={`${styles.ctaBtn} ${pkg.theme === 'dark' ? styles.btnWhite : styles.btnDarkBlue}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  Hemen Yaz
                </Link>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
