import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Settings, Wrench, Shield, Zap, Truck, HeadphonesIcon, ArrowRight, CheckCircle } from "lucide-react"

const services = [
  {
    icon: <Settings className="h-8 w-8" />,
    title: "Compressores Industriais",
    description:
      "Linha completa de compressores de ar para aplicações industriais, desde pequenas oficinas até grandes indústrias.",
    features: ["Alta eficiência energética", "Baixo nível de ruído", "Tecnologia Indústria 4.0"],
    image: "/industrial-air-compressor-equipment.png",
  },
  {
    icon: <Wrench className="h-8 w-8" />,
    title: "Manutenção Preventiva",
    description:
      "Programas de manutenção personalizados para garantir máxima performance e vida útil dos equipamentos.",
    features: ["Planos flexíveis", "Técnicos especializados", "Peças originais"],
    image: "/compressor-maintenance-service-technician.png",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Assistência Técnica",
    description: "Suporte técnico especializado com atendimento rápido e eficiente em todo território nacional.",
    features: ["Atendimento 24/7", "Diagnóstico remoto", "Garantia estendida"],
    image: "/technical-support-industrial-equipment.png",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Automação Industrial",
    description: "Soluções inteligentes de automação para otimizar processos e reduzir custos operacionais.",
    features: ["IoT integrado", "Monitoramento remoto", "Análise de dados"],
    image: "/industrial-automation-control-system.png",
  },
  {
    icon: <Truck className="h-8 w-8" />,
    title: "Instalação e Comissionamento",
    description: "Serviços completos de instalação, configuração e comissionamento de sistemas de ar comprimido.",
    features: ["Projeto personalizado", "Instalação certificada", "Treinamento operacional"],
    image: "/compressor-installation-industrial-site.png",
  },
  {
    icon: <HeadphonesIcon className="h-8 w-8" />,
    title: "Consultoria Técnica",
    description: "Consultoria especializada para otimização de sistemas existentes e projetos de novas instalações.",
    features: ["Auditoria energética", "Dimensionamento", "ROI garantido"],
    image: "/technical-consulting-industrial-meeting.png",
  },
]

const benefits = [
  "Redução de até 30% no consumo energético",
  "Aumento da produtividade industrial",
  "Menor tempo de parada para manutenção",
  "Monitoramento em tempo real",
  "Suporte técnico especializado",
  "Garantia estendida em todos os serviços",
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            NOSSOS SERVIÇOS
          </Badge>
          <h2 className="text-4xl font-bold text-primary font-work-sans mb-6">Soluções Completas para Sua Indústria</h2>
          <p className="text-xl text-muted-foreground font-open-sans max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma gama completa de serviços especializados em compressores de ar, desde a consultoria inicial
            até a manutenção contínua dos equipamentos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <div className="text-primary">{service.icon}</div>
                </div>
                <CardTitle className="text-xl font-work-sans text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground font-open-sans leading-relaxed">{service.description}</p>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground font-open-sans">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 bg-transparent"
                  >
                    Saiba Mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-3xl font-bold text-primary font-work-sans mb-6">Por Que Escolher a Schulz?</h3>
              <p className="text-lg text-muted-foreground font-open-sans mb-8 leading-relaxed">
                Com mais de 60 anos de experiência, oferecemos soluções que combinam tecnologia avançada, eficiência
                energética e suporte técnico especializado.
              </p>

              <div className="grid gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-open-sans">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Solicitar Orçamento
                </Button>
                <Button variant="outline" size="lg">
                  Falar com Especialista
                </Button>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <img
                src="/schulz-industrial-compressor-facility.png"
                alt="Instalações industriais Schulz"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>

              {/* Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary font-work-sans">500K+</div>
                      <div className="text-sm text-muted-foreground">Equipamentos Instalados</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary font-work-sans">99.5%</div>
                      <div className="text-sm text-muted-foreground">Satisfação dos Clientes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
