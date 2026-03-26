import styles from "../shared-page.module.css";

export default function BlogPage() {
  return (
    <main className={styles.pageContainer}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>Blog ve Duyurular</h1>
          <p className={styles.description}>
            Kurban ibadeti, İslami kesim kuralları, beslenme ve et dinlendirme teknikleri hakkında merak ettikleriniz.
          </p>
        </div>

        <div className={styles.contentWrapper}>
          <h2>En Çok Okunanlar</h2>
          <ul>
            <li>
              <strong>Kurban Eti Nasıl Dinlendirilir?</strong><br />
              Kurban etinin kesildikten sonra taze kalması ve lezzetlenmesi için ne yapmalı? Dinlendirme süreci hakkında altın kurallar.
            </li>
            <br />
            <li>
              <strong>Kapak Atma Garantisi Neden Önemlidir?</strong><br />
              Kurban vasfı taşıması için dinen büyükbaş hayvanlarda kapak atma şartı nedir, nasıl anlaşılır?
            </li>
            <br />
            <li>
              <strong>Hisseli Kurban Kesiminde Bilinmesi Gerekenler</strong><br />
              Ortakların niyetinden vekalet alımına kadar hisseli kurban ibadetinin detayları ve dikkat edilmesi gereken noktalar.
            </li>
          </ul>

          <br />
          <p><em>İçeriklerimiz yakında daha kapsamlı makaleler ve videolarla güncellenecektir. Bizi takipte kalın!</em></p>
        </div>
      </div>
    </main>
  );
}
