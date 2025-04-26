import { Suspense } from "react";
import { testimonials, homePageSections } from "@/lib/data";
import HeroSection from "./_sections/hero-section";
import LuxurySection from "./_sections/luxury-section";
import BeachSection from "./_sections/beach-section";
import TestimonialsSection from "./_sections/testimonials-section";
import SpecialOffersSection from "./_sections/special-offers-section";
import FaqSection from "./_sections/faq-section";
import VirtualTourSection from "./_sections/virtual-tour-section";
import { RoomAvailabilityChecker } from "@/components/myUi/room-availability-checker";

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
      </Suspense>

      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <RoomAvailabilityChecker className="max-w-4xl mx-auto" />
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <LuxurySection data={homePageSections.luxuryRedefined} />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <BeachSection data={homePageSections.beachWorries} />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <SpecialOffersSection />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <TestimonialsSection testimonials={testimonials} />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <VirtualTourSection />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <FaqSection />
      </Suspense>
    </>
  );
}
