import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"
import { SchedulingSection } from "@/components/scheduling-section"
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <SchedulingSection />

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-3xl font-bold mb-4">TechGlacial</div>
            <p className="text-primary-foreground/80 mb-6">
              Advanced technology solutions driving digital transformation and innovation for modern businesses.
            </p>

            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://facebook.com/techglacial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com/techglacial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://linkedin.com/company/techglacial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://youtube.com/techglacial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
              <a
                href="https://twitter.com/techglacial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>

            <div className="flex justify-center space-x-8 text-sm">
              <span>© 2024 TechGlacial</span>
              <span>All rights reserved</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
