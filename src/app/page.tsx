import Hero from "@/components/Hero5/Hero5";
import HeroSubBar from "@/components/HeroSubBar/HeroSubBar";
import SmartWizard from "@/components/SmartWizard/SmartWizard";
import Packages from "@/components/Packages/Packages";
import Testimonials from "@/components/Testimonials/Testimonials";
import Facilities from "@/components/Facilities/Facilities";
import FAQ from "@/components/FAQ/FAQ";

export default function HomePage() {
  return (
    <main>
      <Hero />
      {/* <HeroSubBar /> */}
      <SmartWizard />
        <Packages />
        <Testimonials />
        <Facilities />
        <FAQ />
    </main>
  );
}
