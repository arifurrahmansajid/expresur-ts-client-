"use client"

import React from "react"
import { Facebook, Instagram, YouTube, WhatsApp } from "@mui/icons-material"
import Image from "next/image"
import Logo from "@/assets/Grupo 1.png"

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#292929] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left: Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative w-28 h-10 mb-2">
              <Image
                src={Logo}
                alt="Expresur Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-xs text-gray-400 font-normal">
              ENVÍOS Y PARA LA SUDAMÉRICA
            </p>
          </div>

          {/* Center: Social + Privacy */}
          <div className="flex flex-col items-center space-y-4">
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="text-white hover:text-[#FA921D] transition-colors"
                aria-label="Facebook"
              >
                <Facebook sx={{ fontSize: 24 }} />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#FA921D] transition-colors"
                aria-label="Instagram"
              >
                <Instagram sx={{ fontSize: 24 }} />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#FA921D] transition-colors inline-flex items-center justify-center"
                aria-label="TikTok"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  style={{ marginTop: "1px" }}
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-[#FA921D] transition-colors"
                aria-label="YouTube"
              >
                <YouTube sx={{ fontSize: 24 }} />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#FA921D] transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsApp sx={{ fontSize: 24 }} />
              </a>
            </div>

            {/* Privacy Link */}
            <a
              href="#"
              className="text-xs text-gray-400 hover:text-[#FA921D] transition-colors"
            >
              Declaración de Privacidad
            </a>
          </div>

          {/* Right: Contact Info */}
          <div className="flex flex-col items-center md:items-end space-y-1 text-sm">
            <h3 className="font-bold text-white text-sm mb-1">Contacta</h3>
            <a
              href="tel:+17863144045"
              className="text-gray-300 hover:text-[#FA921D] transition-colors text-xs"
            >
              +1 (786) 314 4045
            </a>
            <a
              href="tel:+15615957755"
              className="text-gray-300 hover:text-[#FA921D] transition-colors text-xs"
            >
              +1 (561) 595 7755
            </a>
            <a
              href="mailto:soporte@expresur.com"
              className="text-gray-300 hover:text-[#FA921D] transition-colors text-xs"
            >
              soporte@expresur.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
