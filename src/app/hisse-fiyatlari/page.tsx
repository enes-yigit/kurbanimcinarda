import styles from "../shared-page.module.css";
import Packages from "@/components/Packages/Packages";

export default function HisseFiyatlariPage() {
  return (
    <main className={styles.pageContainer}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>2026 Hisse Fiyatları</h1>
          <p className={styles.description}>
            Bütçenize ve ailenize en uygun kurban paketini seçebilirsiniz. Erken kayıt döneminde sunduğumuz avantajlı fiyatlardan yararlanmak için paketlerimizi inceleyin.
          </p>
        </div>
        
        {/* We can simply reuse the Packages component here! */}
        <Packages />

        <div className={styles.bottomAction}>
          <h3 className={styles.bottomText}>Sizin için ideal paketi bulamadınız mı?</h3>
          <p className={styles.bottomSubtext}>
            Müşteri temsilcilerimiz size en uygun kurban hissesini seçmenizde yardımcı olmaktan mutluluk duyacaktır.
          </p>
          <a href="https://wa.me/905389694268" target="_blank" rel="noopener noreferrer" className={styles.btn}>
            WhatsApp'tan Ulaşın
          </a>
        </div>
      </div>
    </main>
  );
}
