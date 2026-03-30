"use client";

import React from "react";
import styles from "./ServicesBlocks.module.css";

export default function ServicesBlocks() {
  return (
    <section className={styles.section} id="hizmetlerimiz">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.badge}>HİZMETLERİMİZ</span>
          <h2 className={styles.title}>İstanbul Kurbanlık Kayıt ve Kesim Hizmeti</h2>
          <p className={styles.subtitle}>
            Profesyonel kadromuz ve modern tesislerimizle, kurban ibadeti sürecinizin her aşamasında yanınızdayız.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Box 1 - Full Width */}
          <div className={`${styles.card} ${styles.fullWidth}`}>
            <h3 className={styles.cardTitle}>Profesyonel Kurban Kesim Süreci</h3>
            <div className={styles.cardText}>
              <p>
                Bağcılar merkezli kurban kesim tesisimizde, <strong>büyükbaş kurbanlıklar Tarım ve Orman Bakanlığı</strong>'na bağlı resmi veteriner hekim kontrolünden geçtikten sonra, <strong>İslami usullere tam riayet</strong> edilerek kesim işlemi gerçekleştirilir. Kesim öncesi ehil kasaplarımız eşliğinde her hisse sahibi adına <strong>vekalet alınır</strong>, besmele çekilir ve hayvana eziyet edilmeden profesyonel ekip tarafından işlem tamamlanır.
              </p>
              <p>
                Kesim sonrası etler yetişmiş kasap ustalarımız tarafından <strong>hisselere pay edilir</strong>, yenmesi haram olan 7 kısım (bezeler, öd, sidik torbası vb.) özenle ayrılır ve <strong>hijyenik ortamda vakum paketleme</strong> yapılır. Her hisse sahibinin payı <strong>7 kefeli hassas terazi</strong> ile tartılarak eşit paylaşım sağlanır.
              </p>
            </div>
          </div>

          {/* Box 2 - Half */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Özel Kasaplık Hizmeti</h3>
            <div className={styles.cardText}>
              <p>
                İsteğe bağlı <strong>özel kasaplık hizmetimiz</strong> ile etleriniz kıyma, kuşbaşı, kavurmalık ve kemikli olarak ayrılır, vakum paketlenir. Bu sayede evde et işleme zahmetinden kurtulursunuz. Özel kasaplık tüm paketlerimizde ek ücrete tabi bir hizmettir.
              </p>
            </div>
          </div>

          {/* Box 3 - Half */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Randevulu Teslimat</h3>
            <div className={styles.cardText}>
              <p>
                Bayramın 1. günü, belirlenen saat dilimlerinde <strong>randevulu teslimat</strong> yapılır. <strong>Bağcılar, Esenler, Güngören, Bahçelievler, Zeytinburnu, Bakırköy, Fatih</strong> başta olmak üzere tüm İstanbul'a soğuk zincir korunarak ulaşım sağlanır.
              </p>
            </div>
          </div>

          {/* Box 4 - Full Width */}
          <div className={`${styles.card} ${styles.fullWidth}`}>
            <h3 className={styles.cardTitle}>Kapak Atma Garantili Yerli Besi — Neden Biz?</h3>
            <div className={styles.cardText}>
              <p>
                <strong>İstanbul kurban pazarı</strong>nda 16 yılı aşkın süredir faaliyet gösteren ailemiz, İstanbul'un en köklü ve güvenilir kurbanlık satış merkezidir. On binlerce ailenin kurban ibadetini şeffaf koşullarda yerine getirmesine vesile olduk. Tüm büyükbaş kurbanlıklarımız <strong>kapak atma garantili</strong>, %100 Yerli Besi Erkek Danaları olup, Anadolu pazarlarından özenle seçilir.
              </p>
              <p>
                <strong>Hisseli kurban</strong> modelimizde bir büyükbaş, İslami kurallara uygun olarak en fazla 7 kişi arasında paylaştırılır. Her hisse sahibi için ayrı ayrı vekalet alınır ve kesim anında isim zikredilerek ibadet yerine getirilir. Tesiste bizzat kesim izlenebilir.
              </p>
              <p>
                <strong>Bağcılar kurbanlık, Esenler kurbanlık, Güngören kurban hissesi, Bahçelievler kurban kesimi, Zeytinburnu kurbanlık, Fatih kurban hissesi, Bakırköy kurbanlık</strong> veya <strong>Avcılar kurban kesimi</strong> arıyorsanız, Bağcılar'daki merkezi konumumuzdan tüm İstanbul'a hizmet vermekteyiz. Erken kayıt dönemimizde indirimli fiyatlardan yararlanmak için hemen WhatsApp hattımızdan bilgi alabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
