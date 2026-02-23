"use client"

import React, { useState } from "react"
import { IconButton, Avatar } from "@mui/material"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Menu as MenuIcon,
  Close,
} from "@mui/icons-material"

import PersonIcon from "@mui/icons-material/Person"
import Logo from "../assets/Grupo 1.png"
import { useLanguage } from "../i18n/LanguageContext"
import { useCurrentUser } from "../context/useCurrentUser"

const Navbar: React.FC = () => {
  const { t, toggleLang } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const loginUser = useCurrentUser()

  const topNav = [
    { path: "/nuestros", key: "servicios" },
    { path: "/locker", key: "locker" },
    { path: "/recogida", key: "pickup" },
    { path: "/contacto", key: "contacto" },
    { path: "/faqpage", key: "faq" },
    { path: "/quiénes-somos", key: "quienes_somos" },
  ]

  return (
    <>
      {/* HEADER */}
      <header className="bg-white sticky top-0 z-[200] shadow-sm">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* LOGO */}
            <Link href="/" className="flex items-center">
              <img
                src={(Logo as any).src || Logo}
                alt="Expresur"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-10">
              {topNav.map((n) => (
                <Link
                  key={n.path}
                  href={n.path}
                  className={`text-[16px] font-semibold transition ${
                    pathname === n.path
                      ? "text-primary-green"
                      : "text-primary-green hover:opacity-70"
                  }`}
                >
                  {t ? t(n.key as any) : n.key}
                </Link>
              ))}
            </nav>

            {/* RIGHT SECTION */}
            <div className="flex items-center gap-6">
              {/* TRACK BUTTON */}
              <Link href="/rasterear">
                <button
                  className="bg-primary-green hover:opacity-90 text-white text-[15px] font-semibold px-8 py-2.5 rounded-full transition whitespace-nowrap shadow-md"
                >
                  {t ? t("track_package") : "Track Package"}
                </button>
              </Link>

              {/* LOGIN BUTTON */}
              <Link href="/login">
                <button
                  className="border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-white text-[15px] font-semibold px-8 py-2.5 rounded-full flex items-center gap-2 transition whitespace-nowrap"
                >
                  <PersonIcon sx={{ fontSize: 20 }} />
                  {t ? t("login") : "Login"}
                </button>
              </Link>

              {/* Language Toggle */}
              <button
                onClick={toggleLang}
                className="text-primary-green font-bold text-base hover:opacity-70 transition"
              >
                {t ? t("languageShort") : "ES"}
              </button>

              {/* MOBILE MENU BUTTON */}
              <div className="xl:hidden">
                <IconButton
                  onClick={() => setMobileMenuOpen(true)}
                  className="text-primary-green"
                >
                  <MenuIcon />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div
          className="z-[201] fixed inset-0 bg-black bg-opacity-60 xl:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl transition-transform duration-300 transform translate-x-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8 flex justify-between items-center bg-gray-50 border-b">
              <img src={(Logo as any).src || Logo} alt="Expresur" className="h-8" />
              <IconButton onClick={() => setMobileMenuOpen(false)}>
                <Close className="text-primary-green" />
              </IconButton>
            </div>

            <nav className="p-8 space-y-8">
              <Link
                href="/"
                className="block text-2xl font-bold text-primary-green"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t ? t("inicio") : "Inicio"}
              </Link>

              {topNav.map((n) => (
                <Link
                  key={n.path}
                  href={n.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-lg font-semibold text-gray-800 hover:text-primary-green transition"
                >
                  {t ? t(n.key as any) : n.key}
                </Link>
              ))}

              <div className="pt-8 border-t border-gray-100">
                {loginUser ? (
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-3 text-primary-green font-bold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Avatar sx={{ bgcolor: "var(--primary-green)" }}>
                      <PersonIcon sx={{ color: "#fff" }} />
                    </Avatar>
                    Dashboard
                  </Link>
                ) : (
                  <Link
                    href="/login"
                    className="flex items-center gap-3 text-primary-green font-bold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <PersonIcon />
                    {t ? t("login") : "Login"}
                  </Link>
                )}
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
