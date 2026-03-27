"use client";

import React from "react";
import styles from "./Testimonials.module.css";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Review {
  id: number;
  text: string;
  author: string;
  location: string;
  initial: string;
}

const reviews: Review[] = [
  {
    id: 1,
    text: "Kurban ibadetimizi 3 yıldır burada ifa ediyoruz. Tesis temizliği, personelin güler yüzlü olması ve işlemlerin tamamen İslami hassasiyetlerle yürütülmesi bizi çok memnun etti. Randevu sistemiyle çalıştığımız için hiç beklemeden etlerimizi teslim alıyoruz.",
    author: "M. Yılmaz",
    location: "Kartal / İstanbul",
    initial: "M"
  },
  {
    id: 2,
    text: "Geçen yıl kurbanımızı buradan aldık. Eti gayet lezzetli çıkmıştı. Parçalama ve paketleme konusunda inanılmaz profesyoneller. Kapıdan girdiğiniz an itibariyle o güveni hissediyorsunuz. Herkese tavsiye ederim.",
    author: "A. Kaan",
    location: "Bağcılar / İstanbul",
    initial: "A"
  },
  {
    id: 4,
    text: "7 kefeli terazi sistemi gerçekten devrim niteliğinde. Hissedarlar arasında 'kimin parçası daha büyük' tartışması bitti, herkesin hakkı milimetrik pay ediliyor. Çınar Kurban ekibine bu şeffaflık için teşekkür ederiz.",
    author: "E. Sertel",
    location: "Ataşehir / İstanbul",
    initial: "E"
  },
  {
    id: 5,
    text: "Tesis o kadar büyük ve ferah ki, bayram sabahı kahvaltımızı yaparken kurbanımızın kesilmesini beklemek çok keyifliydi. Çocuklar için oyun alanları bile düşünülmüş. Bir aile işletmesi sıcaklığında profesyonel hizmet.",
    author: "Z. Aktaş",
    location: "Pendik / İstanbul",
    initial: "Z"
  },
  {
    id: 3,
    text: "Kesimi bu kadar hijyenik ortamda yaptıkları için şükran doluyuz. Evde saatlerce et pay etme derdinden kurtulduk, paylarınıza ayrılmış, paketlenmiş halde direkt dolaba koymalık olarak geliyor. Gerçekten de tam kusursuz bir hizmet.",
    author: "S. Aydın",
    location: "Kadıköy / İstanbul",
    initial: "S"
  },
  {
    id: 6,
    text: "Sadece profesyonel bir kesimhane değil, aynı zamanda manevi havayı da hissettiğiniz bir yer. Kesim anında ismimizin zikredilmesi ve tekbirlerle sürecin yürütülmesi bizi çok duygulandırdı. Allah razı olsun.",
    author: "B. Ersoy",
    location: "Ümraniye / İstanbul",
    initial: "B"
  }
];

export default function Testimonials() {
  return (
    <section className={styles.section} id="referanslarimiz">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.titleArea}>
            <h2 className={styles.title}>
              Müşteri <span style={{color: "var(--color-accent)"}}>Referanslarımız</span>
            </h2>
            <p className={styles.subtitle}>
              İstanbul'un on binlerce ailesi kurban ibadeti için bizi tercih etti. Her yıl katlanarak büyüyen güven.
            </p>
          </div>
          
          <div className={styles.controls}>
            <button className={styles.controlBtn} aria-label="Önceki Yorumlar" disabled>
              <ChevronLeft size={20} />
            </button>
            <button className={styles.controlBtn} aria-label="Sonraki Yorumlar">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className={styles.cardsWrapper}>
          {reviews.map((rev) => (
            <div className={styles.card} key={rev.id}>
              <div className={styles.stars}>
                {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
              </div>
              <p className={styles.quote}>"{rev.text}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{rev.initial}</div>
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>{rev.author}</div>
                  <div className={styles.authorLocation}>{rev.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
