"use client";

import React from "react";
import styles from "./Facilities.module.css";
import { Navigation, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Facilities() {
  return (
    <section className={styles.section} id="tesislerimiz">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.badge}>SİZİ BEKLİYORUZ</span>
          <h2 className={styles.title}>İstanbul Kurban Kesim Tesislerimiz</h2>
          <p className={styles.subtitle}>
            Sadece dijitalde değil, Bağcılar merkezli ofisimizde ve modern tesislerimizde her zaman yanınızdayız. Tüm İstanbul'a hizmet veriyoruz.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Main Large Image */}
          <div className={`${styles.imageWrap} ${styles.mainImage}`}>
            <div className={styles.imgBadge}>MERKEZ OFİS</div>
            <img 
              src="/banner_image/merkezofis.png" 
              alt="Çınar Kurban Merkez Ofis" 
            />
          </div>

          {/* Side Sub Grid Top */}
          <div className={styles.sideImageRow}>
            <div className={`${styles.imageWrap} ${styles.sideImage}`}>
               <img 
                 src="/banner_image/terazi.png" 
                 alt="Hassas Tartı" 
               />
               <div className={styles.imgBadge}>HASSAS TARTI</div>
            </div>
            <div className={`${styles.imageWrap} ${styles.sideImage}`}>
               <img 
                 src="/banner_image/kesim.png" 
                 alt="Profesyonel Kesim" 
               />
               <div className={styles.imgBadge}>HİJYENİK KESİM</div>
            </div>
          </div>

          {/* Bottom Side Image */}
          <div className={`${styles.imageWrap} ${styles.bottomImage}`}>
            <div className={styles.imgBadge}>SOĞUK ZİNCİR TESLİMAT</div>
             <img 
                 src="/banner_image/frigoarac.png" 
                 alt="Frigolu Dağıtım Aracı" 
             />
          </div>
        </div>

        {/* Location / Navigation Bar */}
        <div className={styles.locationBar}>
          <div className={styles.locInfo}>
            <div className={styles.locIcon}>
              <MapPin size={24} />
            </div>
            <div className={styles.locText}>
              <span className={styles.locLabel}>AÇIK ADRES</span>
              <span className={styles.locAddress}>
                Çınar Mah., 843. Sok., No: 4A, Bağcılar / İstanbul
              </span>
            </div>
          </div>
          
          <Link 
            href="https://maps.google.com/?q=Merkez+Mahallesi+Ebubekir+Caddesi+5" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.navBtn}
          >
            <Navigation size={16} fill="currentColor" strokeWidth={1.5} />
            Otomatik Navigasyon Başlat
          </Link>
        </div>
      </div>
    </section>
  );
}
