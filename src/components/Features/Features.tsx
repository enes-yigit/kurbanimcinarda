import styles from "./Features.module.css";

const features = [
  {
    icon: "🕌",
    title: "İbadet Hassasiyeti",
    desc: "Dini vecibelere tam uygunluk ile kesim işlemi gerçekleştirilir. Dualar okunarak, İslami usullere göre kurban kesilir.",
  },
  {
    icon: "⚖️",
    title: "Hassas Terazi ile Tartım",
    desc: "Kurbanlıklarımız hassas dijital terazilerle tartılır. Hissedarlarımızın hakları titizlikle korunur.",
  },
  {
    icon: "🚚",
    title: "1. Gün Frigolu Teslimat",
    desc: "Kesim sonrası etleriniz soğuk zincir kırılmadan frigolu araçlarla aynı gün adresinize teslim edilir.",
  },
  {
    icon: "🥩",
    title: "Özel Kasaplık İşlemi",
    desc: "Kıyma, kuşbaşı, biftek ve özel parçalama seçenekleri ile etleriniz profesyonel kasaplarımız tarafından işlenir.",
  },
  {
    icon: "📱",
    title: "Canlı Yayın ve SMS Bildirim",
    desc: "Kurbanınızın kesilme anını canlı yayın ile izleyebilir, tüm süreç hakkında SMS ile bilgilendirilirsiniz.",
  },
  {
    icon: "🛡️",
    title: "16 Yıllık Güvence",
    desc: "16 yılı aşkın tecrübemiz ve binlerce mutlu müşterimizle İstanbul'un güvenilir kurban hizmet markası.",
  },
];

export default function Features() {
  return (
    <section className={styles.features} id="neden-biz">
      <div className={styles.featuresHeader}>
        <span className="section-label">✦ NEDEN BİZ?</span>
        <h2 className="section-title">Kusursuz İbadet Yolculuğu</h2>
        <p className="section-subtitle" style={{ margin: "0 auto" }}>
          Kurban ibadetinizi güvenle, huzurla ve profesyonel hizmetlerimizle
          yerine getirin.
        </p>
      </div>
      <div className={styles.featuresGrid}>
        {features.map((feature, i) => (
          <div className={styles.featureCard} key={i}>
            <div className={styles.featureIcon}>{feature.icon}</div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDesc}>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
