import styles from "../shared-page.module.css";
import Facilities from "@/components/Facilities/Facilities";

export default function IletisimPage() {
  return (
    <main className={styles.pageContainer}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>İletişim & Konum</h1>
          <p className={styles.description}>
            Bize dilediğiniz zaman ulaşabilir, aklınıza takılan soruları sorabilir ve tesisimizi ziyaret edebilirsiniz.
          </p>
        </div>

        <div className={styles.contentWrapper} style={{ marginBottom: '2rem' }}>
          <h2>İletişim Bilgilerimiz</h2>
          <p><strong>Telefon Hattı:</strong> <a href="tel:+905389694268" style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>0538 969 42 68</a></p>
          <p><strong>E-Posta:</strong> info@cinarkurban.com</p>
          <br/>
          <p><strong>Çalışma Saatlerimiz:</strong> Haftanın her günü 09:00 - 19:00</p>
          <p><strong>Adres:</strong> Merkez Mahallesi Ebubekir caddesi no: 5 Bağcılar / İstanbul</p>
        </div>
        
        {/* Reuse facilities component since it has location layout perfectly */}
        <Facilities />

      </div>
    </main>
  );
}
