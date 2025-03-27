"use client"

import { useEffect } from "react"

export default function FaviconUpdater() {
  useEffect(() => {
    // Check if localStorage is available (client-side only)
    if (typeof window !== "undefined") {
      // Get the custom favicon from localStorage
      const customFavicon = localStorage.getItem("customFavicon")

      if (customFavicon) {
        // Remove existing favicon links
        const existingFavicons = document.querySelectorAll('link[rel="icon"]')
        existingFavicons.forEach((favicon) => favicon.remove())

        // Create a new favicon link element
        const link = document.createElement("link")
        link.rel = "icon"
        link.href = customFavicon
        link.type = "image/x-icon"

        // Add the new favicon to the document head
        document.head.appendChild(link)
      }
    }
  }, [])

  // This component doesn't render anything visible
  return null
}

