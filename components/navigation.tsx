"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Search, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "./theme-toggle"
import { useTheme } from "next-themes"
import Image from "next/image"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme } = useTheme()
  console.log("Theme value:", theme);

  const navigationItems = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
    { label: "Scheduling", href: "#scheduling" },
  ]

  return (
    <header className="bg-navbar shadow-sm border-b border-navbar-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Image
              src={theme === "light" ? "/assets/brand-light-theme.png" : "/assets/brand-dark-theme.png"}
              alt="TechGlacial - Refrigeração e Climatização"
              width={160}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-navbar-foreground hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right side items */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-sm text-navbar-foreground hover:text-primary">
                  PT-BR <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>PT-BR</DropdownMenuItem>
                <DropdownMenuItem>EN-US</DropdownMenuItem>
                <DropdownMenuItem>ES-ES</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <ThemeToggle />

            {/* Search */}
            <Button variant="ghost" size="sm" className="text-navbar-foreground hover:text-primary">
              <Search className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-navbar-foreground"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-navbar border-t border-navbar-border">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-navbar-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center space-x-4 px-3 py-2">
                <Button variant="ghost" size="sm" className="text-sm text-navbar-foreground hover:text-primary">
                  PT-BR <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
                <ThemeToggle />
                <Button variant="ghost" size="sm" className="text-navbar-foreground hover:text-primary">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
