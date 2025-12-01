"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function HeaderClient({ navItems, children }) {
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  
  // Sur la page d'accueil, on commence transparent, sinon on commence avec le fond
  const [isScrolled, setIsScrolled] = useState(!isHomePage)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Si on n'est pas sur la page d'accueil, toujours avoir le fond
    if (!isHomePage) {
      setIsScrolled(true)
      return
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHomePage])

  return (
    <div
      className={`transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* Logo */}
        <div className={isScrolled ? "[&_span]:text-foreground" : "[&_span]:text-white"}>
          {children}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isScrolled
                  ? "text-foreground hover:text-accent"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex gap-4 items-center">
          <Link
            href="/reservation"
            className="px-6 py-2 bg-accent text-accent-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Réserver
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          )}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-accent transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/reservation"
                className="px-6 py-2 bg-accent text-accent-foreground rounded-full font-medium hover:opacity-90 transition-opacity w-fit"
              >
                Réserver
              </Link>
            </div>
          </nav>
        )}
      </div>
    </div>
  )
}
