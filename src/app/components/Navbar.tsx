"use client"
import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Logo from "./Logo"
import { Menu, X } from "lucide-react"

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  // Handle scroll and highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["vision", "features", "strategy", "brand"]
      const offset = 100 // Offset for better accuracy

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { top, bottom } = element.getBoundingClientRect()
          if (top <= offset && bottom >= offset) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: "vision", label: "Το Όραμά μας" },
    { id: "features", label: "Χαρακτηριστικά" },
    { id: "strategy", label: "Στρατηγική" },
    { id: "brand", label: "Brand" },
  ]

  return (
    <div className="container mx-auto flex justify-between items-center py-2">
      <Link href="/" className="flex items-center">
        <Logo className="h-8 w-auto" />
      </Link>

      {/* Desktop menu */}
      <nav className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`text-explore-text hover:text-explore-accent transition-colors ${
              activeSection === item.id ? "border-b-2 border-explore-accent" : ""
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-explore-text hover:text-explore-accent transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-explore-medium md:hidden p-4 z-50">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-explore-text hover:text-explore-accent transition-colors text-left px-4 py-2 ${
                  activeSection === item.id ? "bg-explore-dark" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}

export default Navbar

