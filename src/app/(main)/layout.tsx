"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-220px)]">{children}</div>
      <Footer />
    </>
  )
}
