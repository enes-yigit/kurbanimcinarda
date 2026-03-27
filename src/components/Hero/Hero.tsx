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
                <img src="/whatsapp.png" alt="WhatsApp" style={{ width: 24, height: 24, objectFit: 'contain' }} />
                Bilgi Al & Kayıt
              </a>
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
