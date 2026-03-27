import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar/AnnouncementBar";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
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
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        <AnnouncementBar />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
