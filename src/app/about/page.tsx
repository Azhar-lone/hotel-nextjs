import { Suspense } from "react"
import AboutHero from "./_sections/hero-section"
import AboutStory from "./_sections/story-section"
import AboutTeam from "./_sections/team-section"
import AboutValues from "./_sections/values-section"
import AboutAwards from "./_sections/awards-section"
import { hotelData } from "@/lib/data"

export const metadata = {
  title: "About Us | Luxury Hotels",
  description: "Learn about our story, values, and the team behind Luxury Hotels' exceptional hospitality experience.",
}

export default function AboutPage() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <AboutHero />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <AboutStory story={hotelData.about.story} />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <AboutValues values={hotelData.about.values} />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <AboutTeam team={hotelData.about.team} />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <AboutAwards awards={hotelData.about.awards} />
      </Suspense>
    </>
  )
}
