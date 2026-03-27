import Link from "next/link";
import styles from "./Footer.module.css";

const quickLinks = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hisse Fiyatları", href: "/hisse-fiyatlari" },
  { label: "Randevu Al", href: "/randevu-al" },
  { label: "Özel İşlem", href: "/ozel-islem" },
];

const companyLinks = [
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Brand */}
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>
              <img
                src="/logo.png"
                alt="Çınar Logo"
                className={styles.footerLogoImg}
              />
              <span className={styles.footerLogoText}>Çınar Kurban</span>
            </div>
            <p className={styles.footerDesc}>
              15 yıllık tecrübe ile İstanbul&apos;da İslami usullere uygun kurbanlık
              satış, kesim ve teslimat hizmeti sunuyoruz.
            </p>
            <div className={styles.footerSocials}>
              <a
                href="https://wa.me/905389694268"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="WhatsApp"
              >
                💬
              </a>
              <a
                href="tel:+905389694268"
                className={styles.socialLink}
                aria-label="Telefon"
              >
                📞
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                📷
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerColumn}>
            <h4>Hızlı Linkler</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className={styles.footerColumn}>
            <h4>Kurumsal</h4>
            <ul>
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.footerColumn}>
            <h4>İletişim</h4>
            <ul>
              <li>
                <a href="tel:+905389694268">+90 538 969 42 68</a>
              </li>
              <li>
                <a href="mailto:info@cinarkurban.com">
                  info@cinarkurban.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  İstanbul, Türkiye
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.footerBottom}>
          <p className={styles.footerCopyright}>
            © {currentYear} Çınar Kurban — Çınar İstanbul. Tüm hakları saklıdır.
          </p>
          <p className={styles.footerCopyright} style={{ marginTop: '8px', opacity: 0.7, fontSize: '11px' }}>
            <a href="https://morekod.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'inherit' }}>
              MoreKod
            </a> tarafından geliştirildi.
          </p>
        </div>
      </div>
    </footer>
  );
}
