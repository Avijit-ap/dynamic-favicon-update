import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import FaviconUpdater from "@/components/favicon-updater"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dynamic Favicon Demo",
  description: "A demo of dynamic favicons in Next.js",
  icons: {
    icon: "/icon",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FaviconUpdater />
        {children}
      </body>
    </html>
  )
}

