import type { Metadata } from "next"
import "@/index.css"
import { Providers } from "./providers"

export const metadata: Metadata = {
  title: "Expresur - Logistics & Shipping",
  description: "International shipping and logistics services",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
