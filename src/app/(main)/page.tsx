"use client"

import HeroSection from "@/components/landing/HeroSection"
import ServicesSection from "@/components/landing/ServicesSection"
import TrackSection from "@/components/landing/TrackSection"
import PickupSection from "@/components/landing/PickupSection"
import TestimonialsSection from "@/components/landing/TestimonialsSection"
import TimelineSection from "@/components/landing/TimelineSection"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TrackSection />
      <PickupSection />
      <TestimonialsSection />
      <TimelineSection />
    </>
  )
}
