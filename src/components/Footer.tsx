"use client"

import React from "react"
import { Facebook, Instagram, YouTube, WhatsApp } from "@mui/icons-material"
import Logo from "@/assets/Grupo 1.png"
import { useLanguage } from "../i18n/LanguageContext"
import Link from "next/link"

const Footer: React.FC = () => {
  const { t } = useLanguage()

  return (
    <footer className="bg-dark-footer text-white py-16 px-6 md:px-12">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Left Col: Logo & Address */}
        <div className="space-y-6">
          <Link href="/">
            <img 
              src={(Logo as any).src || Logo} 
              alt="Expresur" 
              className="h-10 w-auto object-contain brightness-0 invert" 
            />
          </Link>
          <p className="text-white/60 text-sm max-w-[250px] leading-relaxed">
            {t ? t("direccion_footer") : "dirección general del local para atención"}
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-secondary-orange transition-colors"><Facebook /></a>
            <a href="#" className="hover:text-secondary-orange transition-colors"><Instagram /></a>
            <a href="#" className="hover:text-secondary-orange transition-colors"><YouTube /></a>
            <a href="#" className="hover:text-secondary-orange transition-colors"><WhatsApp /></a>
          </div>
        </div>

        {/* Links Col 1 */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold">{t ? t("servicios") : "Servicios"}</h3>
          <nav className="flex flex-col gap-3 text-white/60">
            <Link href="/nuestros" className="hover:text-white transition-colors">{t ? t("envios_paquetes") : "Envíos de paquetes"}</Link>
            <Link href="/nuestros" className="hover:text-white transition-colors">{t ? t("envio_remesas") : "Envío de remesas"}</Link>
            <Link href="/recogida" className="hover:text-white transition-colors">{t ? t("pickup") : "Pickup"}</Link>
          </nav>
        </div>

        {/* Links Col 2 */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold">{t ? t("contacta") : "Contacta"}</h3>
          <div className="flex flex-col gap-3 text-white/60">
            <a href="tel:+17863144045" className="hover:text-white transition-colors">+1 (786) 314 4045</a>
            <a href="tel:+15615957755" className="hover:text-white transition-colors">+1 (561) 595 7755</a>
            <a href="mailto:soporte@expresur.com" className="hover:text-white transition-colors">soporte@expresur.com</a>
          </div>
        </div>

        {/* Privacy */}
        <div className="flex flex-col justify-end space-y-6">
          <Link href="/privacidad" className="text-white/60 hover:text-white transition-colors text-sm underline underline-offset-4">
            {t ? t("privacidad") : "Declaración de Privacidad"}
          </Link>
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} EXPRESUR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
