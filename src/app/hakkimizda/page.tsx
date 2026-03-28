import styles from "../shared-page.module.css";
import ServicesBlocks from "@/components/ServicesBlocks/ServicesBlocks";

export default function HakkimizdaPage() {
  return (
    <main className={styles.pageContainer}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>Hakkımızda</h1>
          <p className={styles.description}>
            Yarım asırlık tecrübesiyle İstanbul'un en güvenilir kurbanlık satışı ve kesim merkezi.
          </p>
        </div>

        <div className={styles.contentWrapper}>
          <h2>Çınar Kurban - Hikayemiz</h2>
          <p>
            Anadolu'nun bereketli meralarından özenle seçilen yerli besi danalarımızı, İslami usullere tam riayet ederek, 16 yılı aşkın profesyonel tesis deneyimiyle hisse sahiplerine sunuyoruz. Bizim için kurbanlık sadece bir ticaret değil; dini bir emanet, hassas bir ibadettir.
          </p>
          <p>
            Bağcılar'da bulunan modern tesisimizde, veteriner hekim gözetiminden geçirilen kurbanlıklarımız, sağlık ve hijyen standartlarına %100 uyarak kesilir. 
          </p>
          
          <h2>Misyonumuz</h2>
          <p>
            Hissedarlarımızın ibadetini en başından sonuna kadar şeffaf, huzurlu ve usullere uygun şartlarda gerçekleştirmesini sağlamak. 
            "Güven, Hijyen ve İslami Hassasiyet" ilkelerinden taviz vermeden hizmet ağımızı İstanbul'un her bir yanına ulaştırmak.
          </p>
        </div>

        <ServicesBlocks />

      </div>
    </main>
  );
}
