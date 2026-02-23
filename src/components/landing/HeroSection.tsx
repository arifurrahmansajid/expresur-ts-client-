"use client"

import React from "react"
import Image from "next/image"
import HeroImage from "@/assets/Hero1.png"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#046838] via-[#6b9b6f] to-[#FA921D] min-h-[550px] flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-white z-10">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4">
              PROVEEDOR DE SERVICIOS LOGÍSTICOS
            </h1>
            <p className="text-base lg:text-lg mb-6 text-white/95 max-w-xl leading-relaxed">
              Soluciones logísticas integrales — transporte, almacenamiento y
              distribución con tecnología para que tu operación fluya.
            </p>
            <button className="bg-[#FA921D] hover:bg-[#e17a0a] text-white font-bold px-8 py-3 rounded-lg text-base transition-colors duration-200 shadow-md">
              Solicitar Cotización
            </button>
          </div>

          {/* Right Image */}
          <div className="relative h-[350px] lg:h-[450px]">
            <Image
              src={HeroImage}
              alt="Logistics Warehouse"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
