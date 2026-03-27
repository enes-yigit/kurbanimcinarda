"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Hero.module.css";
import {
  Truck,
  ShieldCheck,
  Scale,
  Video,
  Sun,
  CheckSquare,
  Beef
} from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/banner_image/section_1.png",
    preTitle: "İSTANBUL'UN EN KÖKLÜ ADRESİ",
    title1: "İstanbul",
    title2: "Kurbanlık Satış ve Kesim",
    subtitle: "2026 kurban kayıtlarımız başlamıştır. Modern tesislerimizde, aynı güven ve aynı huzurla ibadetinizi yerine getirmeniz için hizmetinizdeyiz.",
  },
  {
    id: 2,
    image: "/banner_image/frigoarac.png",
    preTitle: "KESİNTİSİZ SOĞUK ZİNCİR",
    title1: "Frigolu Araçlarla",
    title2: "Evinize Kadar Teslimat",
    subtitle: "Bayramın 1. günü, İstanbul'un her iki yakasına da hisse paylarınızı soğuk zincir bozulmadan özel kapılarımızda dondurarak teslim ediyoruz.",
  },
  {
    id: 3,
    image: "/banner_image/paket.png",
    preTitle: "PROFESYONEL EKİP",
    title1: "Özel Kasaplık",
    title2: "Hizmeti Sizi Bekliyor",
    subtitle: "Kurbanlık etlerinizi istediğiniz ölçülerde; kuşbaşı, kıyma, kavurmalık olarak ayırıp vakumlu paketlerde ailenize sunuyoruz.",
  }
];

const pills = [
  { icon: <Truck size={16} />, text: "1. GÜN RANDEVULU TESLİMAT" },
  { icon: <CheckSquare size={16} />, text: "E-DEVLET KÜPE KONTROL" },
  { icon: <ShieldCheck size={16} />, text: "KAPAK ATMA GARANTİSİ" },
  { icon: <Scale size={16} />, text: "7 KEFELİ HASSAS TARTI" },
  { icon: <Beef size={16} />, text: "YERLİ BESİ" },
  { icon: <Video size={16} />, text: "CANLI YAYIN" },
  { icon: <Sun size={16} />, text: "TAM İBADET" },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000); // Change slide every 8s
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero} id="hero">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${index === currentSlide ? styles.slideActive : ""
            }`}
        >
          <img src={slide.image} alt="Çınar Kurban Banner" className={styles.slideImage} />
          <div className={styles.overlay} />
        </div>
      ))}

      {/* Content strictly over slides */}
      <div className={styles.contentWrapper}>
        <div className="container">
          <div className={styles.heroContent}>

            {/* Slide Text */}
            <div className={styles.heroBadge}>
              <div className={styles.heroBadgeDot} />
              {slides[currentSlide].preTitle}
            </div>

            <h1>
              <span className={styles.heroTitle1}>{slides[currentSlide].title1}</span>
              <span className={styles.heroTitle2}>{slides[currentSlide].title2}</span>
            </h1>

            <p className={styles.heroSubtitle}>
              {slides[currentSlide].subtitle}
            </p>

            {/* Actions */}
            <div className={styles.actionBtns}>
              <a
                href="https://wa.me/902129099495"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnWhatsapp}
              >
                <div className={styles.whatsappIcon}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                Bilgi Al & Kayıt
              </a>
            </div>

            {/* Pills - Always showing same over slides */}
            <div className={styles.pillsContainer}>
              <div className={styles.pillsGrid}>
                {pills.map((pill, i) => (
                  <div key={i} className={styles.pillItem}>
                    <span className={styles.pillIcon}>{pill.icon}</span>
                    <span className={styles.pillText}>{pill.text}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Manual Slide Controls */}
      <div className={styles.sliderControls}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentSlide ? styles.dotActive : ""
              }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
