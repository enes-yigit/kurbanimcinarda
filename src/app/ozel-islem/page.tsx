import styles from "./page.module.css";
import Link from "next/link";
import { 
  CheckCircle2, 
  UtensilsCrossed, 
  Beef, 
  PackageCheck, 
  Truck, 
  CheckCircle,
  ShieldCheck,
  Droplets,
  Search,
  Stethoscope,
  Users,
  Video,
  MapPin,
  Box
} from "lucide-react";

export default function OzelIslemPage() {
  return (
    <main className={styles.pageContainer}>
      
      {/* 1. Hero Section with Video */}
      <section className={styles.heroSection}>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className={styles.videoBackground}
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroFadeBottom}></div>

        <div className={styles.heroContent}>
          <span className={styles.heroSub}>İş Merkezimizde Özel Kasaplık</span>
          <h1 className={styles.heroTitle}>
            Özel Kasaplık & Et İşleme Hizmeti
          </h1>
          <p className={styles.heroDesc}>
            Kurbanınızı dilerseniz bütün halde, dilerseniz kuşbaşı/kıyma gibi işlemden geçirilmiş olarak evinize... Rahat bir bayram deneyimi.
          </p>
          <Link href="https://wa.me/902129099495" target="_blank" className={styles.heroBtn}>
            <CheckCircle2 size={24} /> Vekalet İçin Yazın
          </Link>
        </div>
      </section>

      <div className={styles.heroOverlapText}>Profesyonel kasaplık hizmetimizle</div>

      {/* 2. Neler Yapıyoruz? */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Neler Yapıyoruz?</h2>
          
          <div className={styles.nelerRow}>
            {/* Sol Taraf Liste */}
            <div className={styles.nelerLeft}>
              <p>Özel hisseniz için kestiğimiz kurbanınızı isteğinize göre tamamen parçalanmış, kemiksiz ve kıymalık/kuşbaşılık olacak şekilde ayarlıyoruz.</p>
              
              <div className={styles.checkList}>
                <div className={styles.checkItem}>
                  <div className={styles.checkItemIcon}><CheckCircle size={16} /></div>
                  <div className={styles.checkItemContent}>
                    <h4>Profesyonel İşleme</h4>
                    <p>Etleriniz usta kasaplarımızın tezgahında dikkatle işlenir.</p>
                  </div>
                </div>
                <div className={styles.checkItem}>
                  <div className={styles.checkItemIcon}><CheckCircle size={16} /></div>
                  <div className={styles.checkItemContent}>
                    <h4>Vakumlu Paketleme</h4>
                    <p>Uzun süreli saklama garantisiyle gıda uyumlu poşetlerde koruma.</p>
                  </div>
                </div>
                <div className={styles.checkItem}>
                  <div className={styles.checkItemIcon}><CheckCircle size={16} /></div>
                  <div className={styles.checkItemContent}>
                    <h4>İslami Kurallara Uygun</h4>
                    <p>Kan akıtma ve dinlendirme sürecine harfiyen riayet edilmesi.</p>
                  </div>
                </div>
                <div className={styles.checkItem}>
                  <div className={styles.checkItemIcon}><CheckCircle size={16} /></div>
                  <div className={styles.checkItemContent}>
                    <h4>Ücretli Teslimat</h4>
                    <p>Adresinize özel frigofrik araçlarımızla kapınıza teslim hizmeti (ek ücrete tabidir).</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sağ Taraf Kutucuklar */}
            <div className={styles.nelerRight}>
              <div className={`${styles.nTile} ${styles.nTileWhite}`}>
                <UtensilsCrossed size={40} color="var(--color-accent)" />
                Kıyma & Kuşbaşı
              </div>
              <div className={`${styles.nTile} ${styles.nTileDark}`}>
                <Beef size={40} color="var(--color-accent)" />
                Et Dinlendirme
                <span style={{fontSize: '11px', fontWeight: '500', opacity: 0.7}}>Sıcak karkas işlem görmez</span>
              </div>
              <div className={`${styles.nTile} ${styles.nTileBlue}`}>
                <PackageCheck size={40} />
                Lokum Kıvamında Kıyma
                <span style={{fontSize: '11px', fontWeight: '500', opacity: 0.9}}>İki tur özel çekim</span>
              </div>
              <div className={`${styles.nTile} ${styles.nTileWhite}`}>
                <Truck size={40} color="#2563eb" />
                Adrese Teslimat
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Neden Özel Kasaplık? */}
      <section className={styles.section}>
        <div className="container" style={{maxWidth: '1000px'}}>
          <h2 className={styles.sectionTitle}>Neden Özel Kasaplık?</h2>
          
          <div className={styles.nedenGrid}>
            <div className={styles.nedenItem}>
              <ShieldCheck size={28} className={styles.nedenItemIcon} />
              <div className={styles.nedenItemContent}>
                <h4>İslami Hassasiyet</h4>
                <p>Kurban vekaletiniz İslami usullere tam yetkin Kasaplar Birliği Onaylı kasaplarımızla yerine getirilir.</p>
              </div>
            </div>
            <div className={styles.nedenItem}>
              <Stethoscope size={28} className={styles.nedenItemIcon} />
              <div className={styles.nedenItemContent}>
                <h4>Veteriner Kontrolü</h4>
                <p>Tüm hayvanlarımız veteriner hekimlerimiz tarafından kesim öncesi ve sonrası kontrol edilir.</p>
              </div>
            </div>
            <div className={styles.nedenItem}>
              <Droplets size={28} className={styles.nedenItemIcon} />
              <div className={styles.nedenItemContent}>
                <h4>Hijyen Şartları</h4>
                <p>Etin ziyan olmaması ve mikrobakteriyel arınma için en üst düzey hijyen kuralları.</p>
              </div>
            </div>
            <div className={styles.nedenItem}>
              <Users size={28} className={styles.nedenItemIcon} />
              <div className={styles.nedenItemContent}>
                <h4>Profesyonel Ekip</h4>
                <p>Tecrübeli kadromuzla hiçbir teknik detayı göz ardı etmiyoruz.</p>
              </div>
            </div>
            <div className={styles.nedenItem}>
              <Search size={28} className={styles.nedenItemIcon} />
              <div className={styles.nedenItemContent}>
                <h4>Şeffaf Süreç</h4>
                <p>Sahipliği tamamen netleşmiş, helal akretidasyonuna sahip tesisler kullanıyoruz.</p>
              </div>
            </div>
            <div className={styles.nedenItem}>
              <Video size={28} className={styles.nedenItemIcon} />
              <div className={styles.nedenItemContent}>
                <h4>Video Kaydı</h4>
                <p>Vekaletin okunduğu kesim sürecini anlık veya randevu dahilinde talep edebiliyorsunuz.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Teslimat & Soğuk Zincir */}
      <section className={styles.section} style={{paddingBottom: '0'}}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Teslimat & Soğuk Zincir</h2>
          
          <div className={styles.deliveryTop}>
            <div className={styles.deliveryCard}>
              <div className={styles.deliveryCardHead}>
                <MapPin size={24} color="var(--color-accent)" /> 
                <span>Teslimat Süreci</span>
              </div>
              <p>Özel İşlem İçin: <span className={styles.dlHighlight}>Bayramın 3. veya 4. Günü</span></p>
              <br/>
              <p>Özel kasaplık hizmeti için dinlendirilmesi gereken karkas etin işlenmesi zaman gerektirir.</p>
            </div>
            <div className={styles.deliveryCard}>
              <div className={styles.deliveryCardHead}>
                <Box size={24} color="#2563eb" /> 
                <span>Paketleme Türü</span>
              </div>
              <p className={styles.dlHighlight} style={{color: '#2563eb'}}>Gıda Uyumu Vakumlu Poşetleme (Opsiyonel)</p>
              <br/>
              <p>Hijyen ve dondurucu istiflemeye en uygun ve steril saklama aracıdır.</p>
            </div>
          </div>

          <div className={styles.deliveryBottomBanner}>
            <h4>Hizmet Garantisi</h4>
            <p style={{margin: 0, fontWeight: 500, fontSize: '0.9rem'}}>İstanbul'un tüm merkezi noktalarına frigrofik kapalı kasa (soğutuculu) dev araçlarla teslimatımızı gerçekleştiriyoruz.</p>
          </div>
        </div>
      </section>

      {/* 5. Hisse ve İşleme Detayı */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Hisse ve İşleme Detayı</h2>
          
          <div className={styles.hisseGrid}>
            <div className={styles.hisseCard}>
              <div className={styles.hisseIconLabel}>1/7</div>
              <h4>Hisseye Özel</h4>
              <p>Kendi hissenizi pay etme derdi olmadan hazır tam ölçü.</p>
            </div>
            <div className={styles.hisseCard}>
              <div className={styles.hisseIconLabel} style={{color: 'var(--color-primary)'}}>Dana</div>
              <h4>Büyükbaşlara</h4>
              <p>Siz sadece evinizde kaliteyi test etmekle ilgilenin.</p>
            </div>
            <div className={styles.hisseCard}>
              <div className={styles.hisseIconLabel} style={{color: '#2563eb'}}>Özel Seçim</div>
              <h4>Serbest Format</h4>
              <p>Tercih edeceğiniz randevu teslimine istinaden özenli işçilik.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Deep Blue CTA Section */}
      <section className="container">
        <div className={styles.ctaBanner}>
          <h2>"Kurbanınızı ev konforunda, paketlenmiş ve yemeye hazır karşılayın."</h2>
          <p>Alanında uzman kasaplarımız, bayram telaşına yorulmadan kurbanınızı itinayla işlesin. Erken kayıt fırsatıyla yerinizi ayırmayı unutmayın.</p>
          
          <div className={styles.ctaBtns}>
            <Link href="https://wa.me/902129099495" target="_blank" className={styles.btnSolid}>
              <CheckCircle2 size={20} /> Bilgi & Rezervasyon
            </Link>
            <Link href="tel:+902129099495" className={styles.btnOutline}>
              Bizi Arayın
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
