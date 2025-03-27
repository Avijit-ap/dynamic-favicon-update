"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function NavBar() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="bg-primary text-primary-foreground p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Dynamic Favicon Demo</div>
        <ul className="flex space-x-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={cn("hover:underline", pathname === link.href && "font-bold underline")}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

