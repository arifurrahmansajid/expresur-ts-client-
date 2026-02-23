"use client"

import { AuthContextProvider } from "@/context/AuthContext"
import { LanguageProvider } from "@/i18n/LanguageContext"
import { Toaster } from "sonner"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthContextProvider>
      <LanguageProvider>
        <Toaster position="bottom-right" richColors />
        {children}
      </LanguageProvider>
    </AuthContextProvider>
  )
}
