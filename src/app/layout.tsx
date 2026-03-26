import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Çınar Kurban | İstanbul Kurbanlık Satış ve Kesim Hizmeti",
  description:
    "15 yıllık tecrübe ile İstanbul'da İslami usullere uygun kurbanlık satış, kesim ve teslimat hizmeti. Hisse kurbanlık, özel kasaplık işlemi ve frigolu araç ile teslimat.",
  keywords: [
    "kurbanlık",
    "hisse kurban",
    "istanbul kurban",
    "kurban kesim",
    "kurban satış",
    "kurbanlık dana",
    "kurbanlık koç",
    "çınar istanbul",
  ],
  openGraph: {
    title: "Çınar Kurban | İstanbul Kurbanlık Satış ve Kesim",
    description:
      "15 yıllık tecrübe ile İstanbul'da İslami usullere uygun kurbanlık satış, kesim ve teslimat hizmeti.",
    url: "https://www.cinarkurban.com",
    siteName: "Çınar Kurban",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
