"use client"

import HeroOne from "@/components/home-page/HeroOne"
import Nuestros from "@/components/home-page/Nuestros"
import Rastrear from "@/components/home-page/Rastrear"
import Seccion from "@/components/home-page/Seccion"
import FAQ from "@/components/home-page/FAQ"
import Newone from "@/components/home-page/Newone"
import Quedicen from "@/components/home-page/Quedicen"
import LogisticsTimeline from "@/components/home-page/LogisticsTimeline"

export default function HomePage() {
  return (
    <>
      <HeroOne />
      <Nuestros />
      <Rastrear />
      <Seccion />
      <FAQ />
      <Newone />
      <Quedicen />
      <LogisticsTimeline />
    </>
  )
}
