import AnnouncementBar from "@/components/AnnouncementBar/AnnouncementBar";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Features from "@/components/Features/Features";
import Packages from "@/components/Packages/Packages";
import SmartWizard from "@/components/SmartWizard/SmartWizard";
import Footer from "@/components/Footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import FAQ from "@/components/FAQ/FAQ";

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Packages />
        <SmartWizard />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
