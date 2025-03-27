"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Upload } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FaviconUpload() {
  const [preview, setPreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Load the saved favicon on component mount
  useEffect(() => {
    const savedFavicon = localStorage.getItem("customFavicon")
    if (savedFavicon) {
      setPreview(savedFavicon)
    }
  }, [])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Check if the file is an image
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file")
      return
    }

    // Convert the file to a data URL
    const reader = new FileReader()
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string
      setPreview(dataUrl)

      // Save to localStorage
      localStorage.setItem("customFavicon", dataUrl)

      // Update the favicon immediately
      updateFavicon(dataUrl)
    }
    reader.readAsDataURL(file)
  }

  const updateFavicon = (dataUrl: string) => {
    // Remove existing favicon links
    const existingFavicons = document.querySelectorAll('link[rel="icon"]')
    existingFavicons.forEach((favicon) => favicon.remove())

    // Create a new favicon link element
    const link = document.createElement("link")
    link.rel = "icon"
    link.href = dataUrl
    link.type = "image/x-icon"

    // Add the new favicon to the document head
    document.head.appendChild(link)
  }

  const resetFavicon = () => {
    // Remove from localStorage
    localStorage.removeItem("customFavicon")
    setPreview(null)

    // Remove custom favicon from document
    const existingFavicons = document.querySelectorAll('link[rel="icon"]')
    existingFavicons.forEach((favicon) => favicon.remove())

    // The default favicon will be used automatically
    window.location.reload()
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
        <Button onClick={() => fileInputRef.current?.click()} className="flex items-center gap-2">
          <Upload size={16} />
          Upload New Favicon
        </Button>

        {preview && (
          <Button variant="destructive" onClick={resetFavicon} size="sm">
            Reset to Default
          </Button>
        )}
      </div>

      {preview && (
        <div className="flex flex-col items-center gap-2 mt-4">
          <p className="text-sm text-muted-foreground">Current Custom Favicon:</p>
          <div className="border border-border p-4 rounded-md bg-muted/30">
            <img src={preview || "/placeholder.svg"} alt="Favicon Preview" className="w-16 h-16" />
          </div>
        </div>
      )}
    </div>
  )
}

