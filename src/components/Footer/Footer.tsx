import Link from "next/link";
import { Inter } from "next/font/google";
import { MessageCircle, Phone } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

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
    <footer className="relative">

      {/* ── TOP GRADIENT TRANSITION (page bg → dark green fade) ── */}
      <div className="h-8 bg-gradient-to-b from-gray-50 to-[#0c1a12]" />

      {/* ── MAIN FOOTER CONTENT ── */}
      <div className="bg-[#0c1a12] pt-16 pb-10">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-12 gap-y-10 gap-x-4 sm:gap-12 lg:gap-8 mb-16">

            {/* Brand & Social (5 cols) */}
            <div className="col-span-3 sm:col-span-2 lg:col-span-5 flex flex-col items-start gap-6">
              <Link href="/" className="inline-block">
                <img
                  src="/logo_white.png"
                  alt="Çınar Kurban"
                  className="h-10 sm:h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
              </Link>
              <p className={`${inter.className} text-[#d4c6b1] text-[15px] leading-relaxed max-w-sm font-medium`}>
                16 yıllık tecrübe ile İstanbul'da İslami usullere uygun kurbanlık
                satış, kesim ve teslimat hizmeti sunuyoruz. Her zaman güven, daima hijyen.
              </p>
              <div className="flex items-center gap-4 mt-2">
                <a
                  href="https://wa.me/902129099495"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#d4c6b1] hover:text-[#d4c6b1] transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={18} />
                </a>
                <a
                  href="tel:+902129099495"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#d4c6b1] hover:text-[#d4c6b1] transition-colors"
                  aria-label="Telefon"
                >
                  <Phone size={18} />
                </a>
                <a
                  href="https://www.instagram.com/kurbanimcinarda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#d4c6b1] hover:text-[#d4c6b1] transition-colors"
                  aria-label="Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-span-1 sm:col-span-1 lg:col-span-2 lg:col-start-7">
              <h4 className="text-[#d4c6b1] font-bold mb-4 uppercase tracking-wider text-[13px]">Hızlı Linkler</h4>
              <ul className={`${inter.className} font-medium text-[14px] space-y-3`}>
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white hover:text-[#d4c6b1] transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="col-span-1 sm:col-span-1 lg:col-span-2 lg:col-start-9">
              <h4 className="text-[#d4c6b1] font-bold mb-4 uppercase tracking-wider text-[13px]">Kurumsal</h4>
              <ul className={`${inter.className} font-medium text-[14px] space-y-3`}>
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white hover:text-[#d4c6b1] transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 lg:col-start-11">
              <h4 className="text-[#d4c6b1] font-bold mb-4 uppercase tracking-wider text-[13px]">İletişim</h4>
              <ul className={`${inter.className} font-medium text-[14px] space-y-3`}>
                <li>
                  <a href="tel:+902129099495" className="text-white hover:text-[#d4c6b1] transition-colors">0 212 909 94 95</a>
                </li>
                <li>
                  <a href="mailto:info@cinarkurban.com" className="text-white hover:text-[#d4c6b1] transition-colors">
                    info@cinarkurban.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/902129099495"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#d4c6b1] transition-colors"
                  >
                    İstanbul, Türkiye
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col items-center justify-center text-center">
            <p className={`${inter.className} text-white text-xs font-medium`}>
              © {currentYear} Çınar Kurban — Çınar İstanbul. Tüm hakları saklıdır.
            </p>
            <a href="https://morekod.com/" target="_blank" rel="noopener noreferrer" className={`${inter.className} text-white text-[11px] mt-3 font-medium inline-flex items-center gap-2 hover:opacity-80 transition-opacity`}>
              <img src="/logos/morekod_logo.png" alt="MoreKod" className="h-4 w-auto opacity-90" />
              <span>tarafından geliştirildi.</span>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
