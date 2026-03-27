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
          className={`${styles.slide} ${
            index === currentSlide ? styles.slideActive : ""
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
                href="https://wa.me/905389694268" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.btnWhatsapp}
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
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Bilgi Al & Kayıt
              </a>
              <Link href="/randevu-al" className={styles.btnOutlineWhite}>
                <ShieldCheck size={20} />
                e-Devlet Küpe Sorgula
              </Link>
            </div>

            {/* Pills - Always showing same over slides */}
            <div className={styles.pillsGrid}>
              {pills.map((pill, i) => (
                <div key={i} className={styles.pillItem}>
                  {pill.icon}
                  {pill.text}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Manual Slide Controls */}
      <div className={styles.sliderControls}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              index === currentSlide ? styles.dotActive : ""
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
