"use client"

import React, { useState } from "react"
import { Button, IconButton, Avatar } from "@mui/material"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  WhatsApp,
  Instagram,
  Facebook,
  Language,
  Menu as MenuIcon,
  Close,
  Login as LoginIcon,
  PersonAdd as PersonAddIcon,
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
          <div className="flex items-center justify-between h-20">
            {/* LOGO */}
            <Link href="/" className="flex items-center">
              <img
                src={Logo}
                alt="Expresur"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-8">
              {topNav.map((n) => (
                <Link
                  key={n.path}
                  href={n.path}
                  className={`text-[15px] font-semibold transition ${
                    pathname === n.path
                      ? "text-primary-green"
                      : "text-primary-green hover:opacity-80"
                  }`}
                >
                  {t ? t(n.key as any) : n.key}
                </Link>
              ))}
            </nav>

            {/* RIGHT SECTION */}
            <div className="flex items-center gap-4">
              {/* TRACK BUTTON */}
              <Link href="/rasterear">
                <button
                  className="bg-primary-green hover:opacity-90 text-white text-[14px] font-semibold px-6 py-2 rounded-full transition whitespace-nowrap"
                >
                  {t ? t("track_package") : "Track Package"}
                </button>
              </Link>

              {/* LOGIN BUTTON */}
              <Link href="/login">
                <button
                  className="border border-primary-green text-primary-green hover:bg-primary-green hover:text-white text-[14px] font-semibold px-6 py-2 rounded-full flex items-center gap-2 transition whitespace-nowrap"
                >
                  <PersonIcon sx={{ fontSize: 18 }} />
                  {t ? t("login") : "Login"}
                </button>
              </Link>

              {/* Language Toggle (Subtle) */}
              <button
                onClick={toggleLang}
                className="text-primary-green font-bold text-sm ml-2"
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

              {/* DASHBOARD ICON */}
              {loginUser ? (
                <Link
                  href={
                    loginUser.role === "admin"
                      ? "/dashboard/admin"
                      : "/dashboard/user-dashboard"
                  }
                  style={{ textDecoration: "none" }}
                >
                  <Avatar
                    sx={{
                      width: 40,
                      height: 40,
                      bgcolor: "#046838",
                      cursor: "pointer",
                      boxShadow: "0 2px 6px rgba(4, 104, 56, 0.2)",
                    }}
                  >
                    <PersonIcon sx={{ color: "#fff", fontSize: 22 }} />
                  </Avatar>
                </Link>
              ) : (
                <Link href="/login">
                  <Avatar
                    sx={{
                      width: 40,
                      height: 40,
                      bgcolor: "#046838",
                      cursor: "pointer",
                      boxShadow: "0 2px 6px rgba(4, 104, 56, 0.2)",
                    }}
                  >
                    <PersonIcon sx={{ color: "#fff", fontSize: 22 }} />
                  </Avatar>
                </Link>
              )}

              {/* MOBILE MENU BUTTON */}
              <div className="xl:hidden">
                <IconButton
                  onClick={() => setMobileMenuOpen(true)}
                  className="text-[#046838]"
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
          className="z-[200] fixed inset-0 bg-black bg-opacity-60 xl:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 flex justify-between items-center">
              <img src={Logo} alt="Expresur" className="h-6" />
              <IconButton onClick={() => setMobileMenuOpen(false)}>
                <Close className="text-[#046838]" />
              </IconButton>
            </div>

            <nav className="p-6 space-y-6">
              <Link
                href="/"
                className="block text-xl font-bold text-[#046838]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t ? t("inicio") : "Inicio"}
              </Link>

              {topNav.map((n) => (
                <Link
                  key={n.path}
                  href={n.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-lg font-semibold text-gray-800 hover:text-[#046838]"
                >
                  {/* cast to any here too */}
                  {(t && t(n.key as any)) || n.key}
                </Link>
              ))}

              {/* MOBILE DASHBOARD */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <Avatar sx={{ bgcolor: "#046838" }}>
                    <PersonIcon sx={{ color: "#fff" }} />
                  </Avatar>
                  <Link
                    href="/dashboard"
                    className="text-sm text-green-800 underline"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Go to Dashboard
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
