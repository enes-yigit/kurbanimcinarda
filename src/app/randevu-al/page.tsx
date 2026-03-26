import styles from "../shared-page.module.css";
import SmartWizard from "@/components/SmartWizard/SmartWizard";

export default function RandevuAlPage() {
  return (
    <main className={styles.pageContainer}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>Randevu & Ön Kayıt Al</h1>
          <p className={styles.description}>
            Kurban ibadetinizi en doğru ve güvenilir şekilde yerine getirmek için aşağıdaki akıllı seçim asistanımızı kullanabilir veya doğrudan bizimle iletişime geçebilirsiniz.
          </p>
        </div>

        <SmartWizard />

        <div className={styles.bottomAction}>
          <h3 className={styles.bottomText}>Klasik yöntemle mi kayıt olmak istiyorsunuz?</h3>
          <p className={styles.bottomSubtext}>
            Bizi arayarak ya da Merkez Mahallesi Ebubekir caddesi no:5 Bağcılar adresindeki tesisimizi ziyaret ederek yüz yüze randevu oluşturabilirsiniz.
          </p>
          <a href="tel:+905389694268" className={styles.btn}>
            Hemen Ara: 0538 969 42 68
          </a>
        </div>
      </div>
    </main>
  );
}
