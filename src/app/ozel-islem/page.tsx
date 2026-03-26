import styles from "../shared-page.module.css";

export default function OzelIslemPage() {
  return (
    <main className={styles.pageContainer}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>Özel Kasaplık Hizmeti</h1>
          <p className={styles.description}>
            Bayram telaşını yaşamadan, kurban etlerinizin dilediğiniz gibi işlenip, paketlenmesini sağlayan profesyonel bir hizmettir.
          </p>
        </div>

        <div className={styles.contentWrapper}>
          <h2>Neden Özel Kasaplık Hizmeti?</h2>
          <p>Kurban bayramında etin doğru işlenmesi ve dinlendirilmesi etin lezzetini doğrudan etkiler. Profesyonel kasaplarımız etinizi en uygun şekilde işleyip, hijyenik vakumlu paketlerde ailenize sunar.</p>
          
          <h2>Neler Yapıyoruz?</h2>
          <ul>
            <li>Kemikli etlerin uygun boyutlarda parçalanması</li>
            <li>Kemiksiz et, biftek, antrikot ayrımı</li>
            <li>İstediğiniz miktarda profesyonel kıyma çekimi</li>
            <li>Kuşbaşı, sote ve kavurmalık şeklinde etin hazırlanması</li>
            <li>Gıdaya uygun poşetler ve vakum teknolojisiyle paketleme</li>
          </ul>

          <h2>Ücretlendirme</h2>
          <p>Özel kasaplık işlemi ek bir hizmet olup, hisse ağırlığına göre fiyatlandırılmaktadır. Kesin fiyat bilgisi ve rezervasyon için lütfen müşteri temsilcimizle iletişime geçin.</p>
        </div>

        <div className={styles.bottomAction}>
          <h3 className={styles.bottomText}>Detaylı bilgi ve rezervasyon</h3>
          <p className={styles.bottomSubtext}>
            Özel işlem kontenjanımız sınırlıdır. Kurban rezervasyonunuzu yaparken özel işlem istediğinizi belirtmeyi unutmayın.
          </p>
          <a href="https://wa.me/905389694268" className={styles.btn}>
            WhatsApp Bilgi Hattı
          </a>
        </div>
      </div>
    </main>
  );
}
