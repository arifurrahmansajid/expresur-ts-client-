"use client"

import React from "react"
import Image from "next/image"
import PickupImage from "@/assets/RecogidaHero.png"

export default function PickupSection() {
  return (
    <section className="bg-gradient-to-r from-[#FA921D] to-[#ff9a2e] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div className="relative h-[350px] lg:h-[450px] order-2 lg:order-1">
            <Image
              src={PickupImage}
              alt="Pickup Service"
              fill
              className="object-contain"
            />
          </div>

          {/* Right Content */}
          <div className="text-white order-1 lg:order-2">
            <h2 className="text-3xl lg:text-4xl font-bold mb-5">
              Sección de Recogida
            </h2>
            <div className="mb-6 leading-relaxed text-base">
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
            <button className="bg-[#046838] hover:bg-[#035230] text-white font-bold px-8 py-3 rounded-lg text-base transition-colors duration-200 shadow-md">
              SOLICITAR RECOGIDA
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
