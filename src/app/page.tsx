import AnnouncementBar from "@/components/AnnouncementBar/AnnouncementBar";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import SmartWizard from "@/components/SmartWizard/SmartWizard";
import Packages from "@/components/Packages/Packages";
import Testimonials from "@/components/Testimonials/Testimonials";
import Facilities from "@/components/Facilities/Facilities";
import ServicesBlocks from "@/components/ServicesBlocks/ServicesBlocks";
import FAQ from "@/components/FAQ/FAQ";
import Footer from "@/components/Footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AnnouncementBar />
        <SmartWizard />
        <Packages />
        <Testimonials />
        <Facilities />
        <ServicesBlocks />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
