"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Favorite, FavoriteBorder } from "@mui/icons-material"
import { IconButton } from "@mui/material"

// Import service icons
import cardImage from "@/assets/card.png"
import card2Image from "@/assets/card-2.png"
import card3Image from "@/assets/card-3.png"
import card4Image from "@/assets/card-4.png"

const services = [
  {
    id: 1,
    title: "Envíos de paquetes",
    description:
      "Ishod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.",
    image: cardImage,
    bgColor: "bg-[#FA921D]",
  },
  {
    id: 2,
    title: "Envío de remesas",
    description:
      "Ishod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.",
    image: card2Image,
    bgColor: "bg-[#046838]",
  },
  {
    id: 3,
    title: "Recogida de paquetes",
    description:
      "Ishod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.",
    image: card3Image,
    bgColor: "bg-[#046838]",
  },
  {
    id: 4,
    title: "Conformar envíos",
    description:
      "Ishod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.",
    image: card4Image,
    bgColor: "bg-[#046838]",
  },
]

export default function ServicesSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id],
    )
  }

  return (
    <section className="bg-[#046838] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-12">
          Nuestros servicios
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`${service.bgColor} rounded-xl p-5 flex flex-col border-2 ${
                service.id === 1 ? "border-transparent" : "border-[#FA921D]"
              } relative transition-all duration-200 hover:shadow-xl`}
            >
              {/* Favorite Icon */}
              <div className="absolute top-3 right-3 z-10">
                <button
                  onClick={() => toggleFavorite(service.id)}
                  className="p-1 hover:scale-110 transition-transform"
                  aria-label="Add to favorites"
                >
                  {favorites.includes(service.id) ? (
                    <Favorite sx={{ fontSize: 20, color: "#FA921D" }} />
                  ) : (
                    <FavoriteBorder sx={{ fontSize: 20, color: "#FA921D" }} />
                  )}
                </button>
              </div>

              {/* Service Image */}
              <div className="relative h-36 mb-4 mt-2">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain"
                  priority={service.id === 1}
                />
              </div>

              {/* Service Title */}
              <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-white/90 text-xs leading-relaxed mb-5 flex-grow">
                {service.description}
              </p>

              {/* Ver Más Button */}
              <button className="w-full bg-[#FA921D] hover:bg-[#e8860a] text-white font-bold py-2.5 rounded-lg transition-all duration-200 text-sm tracking-wide hover:shadow-lg">
                VER MÁS
              </button>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2">
          {[0, 1, 2, 3, 4].map((dot) => (
            <button
              key={dot}
              onClick={() => setCurrentSlide(dot)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === dot ? "bg-white w-8" : "bg-white/50"
              }`}
              aria-label={`Slide ${dot + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
