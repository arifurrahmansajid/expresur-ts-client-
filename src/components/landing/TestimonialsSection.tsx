"use client"

import React, { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "@mui/icons-material"
import { IconButton } from "@mui/material"

const testimonials = [
  {
    id: 1,
    text: "rápidos, económicos y seguros Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation",
    name: "Karen",
    subtitle: "Lorem ipsum dolor",
    rating: 5,
    avatar: "/assets/avatar1.jpg",
  },
  {
    id: 2,
    text: "rápidos, económicos y seguros Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation",
    name: "Karen",
    subtitle: "Lorem ipsum dolor",
    rating: 5,
    avatar: "/assets/avatar2.jpg",
  },
  {
    id: 3,
    text: "rápidos, económicos y seguros Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation",
    name: "Karen",
    subtitle: "Lorem ipsum dolor",
    rating: 5,
    avatar: "/assets/avatar3.jpg",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 3 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 3 ? 0 : prev + 1))
  }

  return (
    <section className="bg-[#046838] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-10">
          ¿Qué dicen nuestros clientes?
        </h2>

        <div className="relative">
          {/* Navigation Arrows */}
          <IconButton
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10"
            size="large"
            sx={{
              backgroundColor: "#FA921D",
              color: "white",
              "&:hover": { backgroundColor: "#e17a0a" },
            }}
          >
            <ChevronLeft fontSize="large" />
          </IconButton>

          <IconButton
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10"
            size="large"
            sx={{
              backgroundColor: "#FA921D",
              color: "white",
              "&:hover": { backgroundColor: "#e17a0a" },
            }}
          >
            <ChevronRight fontSize="large" />
          </IconButton>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg p-5 shadow-md"
              >
                {/* Testimonial Text */}
                <p className="text-gray-700 mb-3 text-xs leading-relaxed">
                  {testimonial.text}
                </p>

                {/* Star Rating */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} sx={{ fontSize: 16, color: "#FA921D" }} />
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden flex-shrink-0">
                    {/* Placeholder for avatar */}
                    <div className="w-full h-full bg-gradient-to-br from-[#046838] to-[#FA921D]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-gray-600">
                      {testimonial.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
