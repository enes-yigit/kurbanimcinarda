import styles from "./page.module.css";
import FAQ from "@/components/FAQ/FAQ";
import { 
  Gift, 
  UserPlus, 
  Users, 
  Info, 
  CheckCircle2, 
  ShieldCheck, 
  MapPin 
} from "lucide-react";
import Link from "next/link";

export default function HisseFiyatlariPage() {
  const hisseData = [
    {
      type: "Dana (1/7 Hisse)",
      group: "1. Grup",
      price: "30.000 ₺ - 35.000 ₺",
      statusTitle: "Ön Kayıt Açık",
      statusNote: "Kapora İle Sıranı Ayırt",
      btnText: "Hemen Yaz",
      btnType: "accent",
      link: "https://wa.me/902129099495"
    },
    {
      type: "Dana (1/7 Hisse)",
      group: "2. Grup",
      price: "35.000 ₺ - 40.000 ₺",
      statusTitle: "Ön Kayıt Açık",
      statusNote: "Kapora İle Sıranı Ayırt",
      btnText: "Hemen Yaz",
      btnType: "accent",
      link: "https://wa.me/902129099495"
    },
    {
      type: "Tosun (1/7 Hisse)",
      group: "3. Grup",
      price: "40.000 ₺ - 45.000 ₺",
      statusTitle: "Ön Kayıt Açık",
      statusNote: "Kapora İle Sıranı Ayırt",
      btnText: "Hemen Yaz",
      btnType: "accent",
      link: "https://wa.me/902129099495"
    },
    {
      type: "Tosun (1/7 Hisse)",
      group: "4. Grup",
      price: "45.000 ₺+",
      statusTitle: "Ön Kayıt Açık",
      statusNote: "Kapora İle Sıranı Ayırt",
      btnText: "Hemen Yaz",
      btnType: "accent",
      link: "https://wa.me/902129099495"
    },
    {
      type: "Özel Seçim Tosun",
      group: "Tosun Serbest Seçim",
      price: "Serbest Seçim",
      statusTitle: "Ön Kayıt Açık",
      statusNote: "Güzergah ve Teslimat Onaylı",
      btnText: "Bize Danışın",
      btnType: "primary",
      link: "https://wa.me/902129099495"
    }
  ];

  return (
    <main className={styles.pageContainer}>
      <div className="container">
        
        {/* Intro Section */}
        <section className={styles.introSection}>
          <div className={styles.badge}>2026 ERKEN KAYIT FIRSATLARI</div>
          <h1 className={styles.mainTitle}>
            Büyükbaş Kurban Hisse Fiyatları 2026 <br/>
            <span className={styles.titleAccent}>— İstanbul</span>
          </h1>
          <p className={styles.mainDesc}>
            İslami usullere uygun kesim, kurban garantisi ve randevulu teslimatla kurban ibadetinizi en iyi şekilde yerine getirin.
          </p>
        </section>

        {/* Deals Banner */}
        <section className={styles.dealsWrapper}>
          <div className={styles.mainDeal}>
            <div className={styles.mainDealLeft}>
              <div className={styles.mainDealIcon}>
                <Gift size={28} className={styles.mainDealSVG} />
              </div>
              <div>
                <div className={styles.mainDealTitle}>Erken Kayıt Fırsatı</div>
                <p className={styles.mainDealSub}>Bütün müşterilerimize özel</p>
              </div>
            </div>
            <div className={styles.mainDealRight}>
              <div className={styles.mainDealPrice}>1.000 ₺</div>
              <div className={styles.mainDealUnit}>HİSSE BAŞI İNDİRİM</div>
            </div>
          </div>
          
          <div className={styles.subDeals}>
            {/* Alt Fırsat 1 */}
            <div className={styles.subDealCard}>
              <span className={styles.subDealBadge}>EK FIRSAT</span>
              <div className={styles.subDealTop}>
                <div className={styles.subDealIcon}>
                  <UserPlus size={24} className={styles.subDealSVG} />
                </div>
                <div>
                  <div className={styles.subDealTitle}>İlk Kayıt Avantajı</div>
                  <p className={styles.subDealSub}>Yeni müşterilerimize özel</p>
                </div>
              </div>
              <div className={styles.subDealBottom}>
                <span className={styles.subDealPriceLabel}>HİSSE BAŞI</span>
                <span className={styles.subDealPrice}>500 ₺</span>
              </div>
            </div>
            {/* Alt Fırsat 2 */}
            <div className={styles.subDealCard}>
              <span className={styles.subDealBadge}>EK FIRSAT</span>
              <div className={styles.subDealTop}>
                <div className={styles.subDealIcon}>
                  <Users size={24} className={styles.subDealSVG} />
                </div>
                <div>
                  <div className={styles.subDealTitle}>Grup Bereketi</div>
                  <p className={styles.subDealSub}>7 Hissedar beraber kayıt</p>
                </div>
              </div>
              <div className={styles.subDealBottom}>
                <span className={styles.subDealPriceLabel}>HİSSE BAŞI</span>
                <span className={styles.subDealPrice}>500 ₺</span>
              </div>
            </div>
          </div>
        </section>

        {/* Table Section */}
        <section className={styles.tableSection}>
          <h2 className={styles.tableTitle}>2026 Hisse Listesi</h2>
          <div className={styles.warningBanner}>
            * Hisse Fiyatları Ön Kayıt Bilgisidir. Tam Fiyatlar Kurbana 2 ay kala kesinleşecektir.
          </div>
          
          <div className={styles.listContainer}>
            <div className={styles.listHeaderRow}>
              <div>Hayvan Türü</div>
              <div>Hisse Fiyatı</div>
              <div>Durumu</div>
              <div>Aksiyon</div>
            </div>
            
            <div className={styles.listBody}>
              {hisseData.map((item, idx) => (
                <div key={idx} className={styles.listRow}>
                  <div className={styles.cellType}>
                    <span className={styles.animalName}>{item.type}</span>
                    <span className={styles.animalGroup}>{item.group}</span>
                  </div>
                  <div className={styles.cellWeight}>{item.price}</div>
                  <div className={styles.cellStatus}>
                    <span className={styles.statusOpen}>{item.statusTitle}</span>
                    <span className={styles.statusNote}>{item.statusNote}</span>
                  </div>
                  <div>
                    <Link
                      href={item.link}
                      target="_blank"
                      className={`${styles.actionBtn} ${item.btnType === 'primary' ? styles.btnPrimary : ''}`}
                    >
                      {item.btnText}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Info Box */}
        <section className={styles.infoSection}>
          <div className={styles.infoIconWrap}>
            <Info size={36} />
          </div>
          <div className={styles.infoContent}>
            <h3>Ortak Büyükbaş Hissesi Nedir?</h3>
            <p>
              Büyükbaş kurbanlar, İslami kurallara göre <strong>7 kişiye kadar ortak</strong> kesilebilen kurbanlardır. Ömrünüze kurban güvencesi ile dilerseniz grubunuzla birlikte bir toscuya/danaya girebilir veya tek başınıza hazır 7 kişilik bir hisseye dahil olabilirsiniz. Tüm hisseleriniz eşit olarak tartılır ve kemikli/kemiksiz olarak teslim edilir.
            </p>
            <p style={{ margin: 0, fontWeight: 500, color: 'var(--color-primary)' }}>
              Kurban etleriniz: hisse sahipleriyle eşit dilimlenmiş halde itina ile poşetlenerek veya fıçılandırılarak tam steril bir şekilde elinize teslim edilir.
            </p>
          </div>
        </section>

        {/* Feature Grid */}
        <section className={styles.featureGrid}>
          <div className={styles.featCardDark}>
            <ShieldCheck size={32} style={{ marginBottom: '16px', color: 'var(--color-accent)' }} />
            <h3>Vekaletle İbadet Rahatlığı</h3>
            <p>
              İşiniz ve vaktiniz darsa hiç dert etmeyin. Bize vereceğiniz vekalet ile kurbanınızı islami usullere, hijyenik kurallara uygun biçimde şeffafça kesip evinize, dilediğiniz vakfınıza veya adresinize teslim edelim.
            </p>
            <ul className={styles.darkList}>
              <li><CheckCircle2 size={18} className={styles.checkCircle} /> Kesim anı video kaydı ve canlı yayın.</li>
              <li><CheckCircle2 size={18} className={styles.checkCircle} /> Şeffaf süreç ve tam hijyen.</li>
              <li><CheckCircle2 size={18} className={styles.checkCircle} /> Soğuk zincir araçlarla teslimat imkânı.</li>
            </ul>
          </div>
          
          <div className={styles.featCardLight}>
            <MapPin size={32} style={{ marginBottom: '16px', color: 'var(--color-accent)' }} />
            <h3>Vekalet İçin Bilgileriniz Yeterli</h3>
            <p>
              Vekalet vermek ve sıranızı hemen ayırtmak için online formumuzu doldurmanız veya WhatsApp iletişim hattımızdan kaydınızı oluşturmanız çok kolaydır. Erken kayıt fırsatları bitmeden kaydınızı oluşturun.
            </p>
            <Link href="https://wa.me/902129099495" target="_blank" className={styles.outlineBtn}>
              Şimdi Randevu & Vekalet Ver
            </Link>
          </div>
        </section>

        {/* FAQ Area */}
        <div className={styles.faqWrapper}>
          <FAQ />
        </div>

      </div>
    </main>
  );
}
