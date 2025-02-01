"use client"
import CallToActionWithAnnotation from "@/components/HeroSection"
import SimpleThreeColumns from "@/components/Features"
import SplitWithImage from "@/components/Testimonials"
import ThreeTierPricingHorizontal from "@/components/Pricing"
export default function Home() {
  return (
    <>
      <CallToActionWithAnnotation />
      <SimpleThreeColumns />
      <ThreeTierPricingHorizontal/>
      <SplitWithImage />
    </>
  )
}
