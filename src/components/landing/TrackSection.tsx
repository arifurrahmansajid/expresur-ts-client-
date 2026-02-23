"use client"

import React, { useState } from "react"
import Image from "next/image"
import TrackImage from "@/assets/rastrear.png"

export default function TrackSection() {
  const [trackingNumber, setTrackingNumber] = useState("")

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle tracking logic
    console.log("Tracking:", trackingNumber)
  }

  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content - Form */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#FA921D] mb-6">
              Rastrear paquete
            </h2>

            <form onSubmit={handleTrack} className="mb-5">
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Número de rastreo"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="w-full px-5 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#046838] text-gray-700 text-base"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#046838] hover:bg-[#035230] text-white font-bold py-3 rounded-lg text-base transition-colors duration-200"
              >
                RASTREAR
              </button>
            </form>

            <div className="text-gray-600 leading-relaxed text-sm">
              <p>
                rápidos, económicos y seguros Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                enim ad minim veniam, quis nostrud exerci tation ullamcorper
                suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis
                autem vel eum iriure dolor in hendrerit in vulputate velit esse
                molestie consequat, vel illum dolore eu feugiat nulla facilisis
                at vero eros et accumsan et iusto odio dignissim qui blandit
                praesent luptatum zzril delenit augue duis dolore te feugait
                nulla facilisi.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[350px] lg:h-[450px]">
            <Image
              src={TrackImage}
              alt="Track Package"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
