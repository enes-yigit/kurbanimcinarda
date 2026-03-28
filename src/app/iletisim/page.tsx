import styles from "./page.module.css";
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  Navigation,
  MessageCircle
} from "lucide-react";
import Link from "next/link";

export default function IletisimPage() {
  return (
    <main className={styles.pageContainer}>
      <div className="container">
        
        <header className={styles.header}>
          <h1 className={styles.title}>
            İletişim <span className={styles.titleAccent}>& Konum</span>
          </h1>
          <p className={styles.description}>
            Bayram telaşına ortak olmak, kurban ibadetinizi en doğru şekilde yerine getirmek için dilediğiniz zaman kapımızı çalabilirsiniz.
          </p>
        </header>

        <section className={styles.contactGrid}>
          
          {/* Sol Kolon: Bilgiler */}
          <div className={styles.infoCard}>
            
            <div className={styles.infoRow}>
              <div className={styles.iconBox}><Phone size={24} /></div>
              <div className={styles.infoContent}>
                <h3>Telefon Hattımız</h3>
                <a href="tel:+902129099495">0 212 909 94 95</a>
                <p>Müşteri Hizmetleri & Randevu</p>
              </div>
            </div>

            <div className={styles.infoRow}>
              <div className={styles.iconBox}><Clock size={24} /></div>
              <div className={styles.infoContent}>
                <h3>Çalışma Saatlerimiz</h3>
                <p>Pazartesi - Pazar: 09:00 - 19:00</p>
                <p style={{fontSize: '13px', fontStyle: 'italic'}}>Dini Bayramlar Dahil</p>
              </div>
            </div>

            <div className={styles.infoRow}>
              <div className={styles.iconBox}><MapPin size={24} /></div>
              <div className={styles.infoContent}>
                <h3>Merkez Tesisimiz</h3>
                <p>Çınar Mah., 843. Sok., No: 4A</p>
                <p>Bağcılar / İstanbul</p>
              </div>
            </div>

            <div className={styles.infoRow}>
              <div className={styles.iconBox}><Mail size={24} /></div>
              <div className={styles.infoContent}>
                <h3>Kurumsal E-Posta</h3>
                <a href="mailto:info@cinarkurban.com">info@cinarkurban.com</a>
              </div>
            </div>

          </div>

          {/* Sağ Kolon: Harita ve Navigasyon */}
          <div className={styles.mapCard}>
            <div className={styles.mapOverlayGlow}></div>
            <h2 className={styles.mapTitle}>Konumumuz</h2>
            
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.5186290130673!2d28.84755107662584!3d41.02102191834167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa447df839ccf%3A0xc3f837920ab7183!2sMerkez%2C%20Ebubekir%20Cd.%20No%3A5%2C%2034200%20Ba%C4%9Fc%C4%B1lar%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1711516244192!5m2!1str!2str" 
              className={styles.mapFrame}
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className={styles.actionRow}>
              <Link 
                href="https://goo.gl/maps/YOUR_NEW_LINK" 
                target="_blank" 
                className={`${styles.btn} ${styles.btnPrimary}`}
              >
                <Navigation size={20} /> Navigasyon Başlat
              </Link>
              <Link 
                href="https://wa.me/902129099495" 
                target="_blank" 
                className={`${styles.btn} ${styles.btnOutline}`}
              >
                <MessageCircle size={20} /> Konum İste
              </Link>
            </div>
          </div>

        </section>

      </div>
    </main>
  );
}
