"use client"

import React from "react"
import Image from "next/image"
import Grupo1567 from "@/assets/Grupo-1567.png"
import Grupo1584 from "@/assets/Grupo-1584.png"
import Grupo1640 from "@/assets/Grupo-1640.png"
import Grupo1648 from "@/assets/Grupo-1648.png"
import Grupo1653 from "@/assets/Grupo-1653.png"

const timelineItems = [
  { id: 1, image: Grupo1567, alt: "Air Transport" },
  { id: 2, image: Grupo1584, alt: "Sea Transport" },
  { id: 3, image: Grupo1640, alt: "Rail Transport" },
  { id: 4, image: Grupo1648, alt: "Truck Transport" },
  { id: 5, image: Grupo1653, alt: "Package Delivery" },
]

export default function TimelineSection() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 hidden md:block" />

          {/* Orange Progress Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-[#FA921D] -translate-y-1/2 hidden md:block" />

          {/* Timeline Items */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 relative">
            {timelineItems.map((item, index) => (
              <div key={item.id} className="flex flex-col items-center">
                {/* Image Container */}
                <div className="relative w-32 h-32 md:w-28 md:h-28 lg:w-32 lg:h-32 mb-4">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Orange Dot */}
                <div className="w-4 h-4 bg-[#FA921D] rounded-full border-4 border-white shadow-lg hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
