import { HeroSection as HeroSectionComponent } from "@/components/myUi/hero-section";
import { hotelData } from "@/lib/data";

export default function HeroSection() {
  return (
    <HeroSectionComponent
      title="WELCOME TO"
      subtitle="LUXURY"
      description={hotelData.tagline}
      image="/placeholder.svg?height=1080&width=1920"
      ctaText="BOOK NOW"
      ctaLink="/rooms"
    />
  );
}
