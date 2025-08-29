"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"

const carouselImages = [
  {
    src: "assets//modern-hvac-system-installation-with-technician.png",
    alt: "Professional HVAC Installation Services",
    title: "Expert HVAC Installation",
    description: "Professional refrigeration and air conditioning solutions",
  },
  {
    src: "assets//commercial-refrigeration-system-in-modern-facility.png",
    alt: "Commercial Refrigeration Systems",
    title: "Commercial Refrigeration",
    description: "Advanced cooling solutions for businesses and industries",
  },
  {
    src: "assets/modern-factory-automation-industry-4-0.png",
    alt: "HVAC Maintenance and Service",
    title: "Maintenance & Service",
    description: "Comprehensive maintenance for optimal system performance",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        nextSlide()
      }, 6000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying])

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return
    setIsTransitioning(true)
    setCurrentSlide(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <section className="relative bg-gradient-to-br from-background via-muted/50 to-background overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[700px] py-16">
          {/* Left Content */}
          <div className="space-y-8 z-10">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <p className="text-sm font-semibold text-primary uppercase tracking-wide">
                  Refrigeração e Climatização
                </p>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight font-work-sans">
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  SOLUÇÕES AVANÇADAS
                </span>
                <br />
                EM CLIMATIZAÇÃO
              </h1>
            </div>

            <p className="text-xl text-muted-foreground font-open-sans leading-relaxed max-w-lg">
              A TechGlacial oferece soluções inovadoras em refrigeração e climatização que impulsionam eficiência,
              conforto e qualidade do ar. Conheça nossos serviços especializados e benefícios exclusivos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Nossos Serviços
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 hover:bg-primary/5 transition-all duration-300 bg-transparent"
              >
                Solicitar Orçamento
              </Button>
            </div>
          </div>

          {/* Right Content - Enhanced Image Carousel */}
          <div className="relative z-10">
            <div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/5 to-blue-600/5 border border-primary/10"
              onMouseEnter={() => setIsPlaying(false)}
              onMouseLeave={() => setIsPlaying(true)}
            >
              <div className="relative w-full h-full">
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
                    }`}
                  >
                    <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-2xl font-bold mb-2 font-work-sans">{image.title}</h3>
                      <p className="text-sm opacity-90 font-open-sans">{image.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={prevSlide}
                disabled={isTransitioning}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={nextSlide}
                disabled={isTransitioning}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <button
                onClick={togglePlayPause}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 shadow-lg transition-all duration-300 backdrop-blur-sm"
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`relative w-12 h-1 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-white" : "bg-white/40 hover:bg-white/60"
                    }`}
                  >
                    {index === currentSlide && isPlaying && (
                      <div className="absolute inset-0 bg-primary rounded-full animate-pulse"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-32 h-32 opacity-20 animate-pulse">
              <div className="w-full h-full bg-gradient-to-br from-primary to-blue-600 transform rotate-45 rounded-lg"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 opacity-10 animate-bounce">
              <div className="w-full h-full bg-gradient-to-tl from-blue-600 to-primary transform rotate-12 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
