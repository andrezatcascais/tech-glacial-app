import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Award, Globe } from "lucide-react"

const milestones = [
  {
    year: "1963",
    title: "Fundação da Schulz",
    description: "Início das atividades com foco em compressores de ar",
  },
  {
    year: "1985",
    title: "Expansão Nacional",
    description: "Abertura de filiais em todo território brasileiro",
  },
  {
    year: "2000",
    title: "Certificação ISO",
    description: "Conquista das certificações de qualidade internacionais",
  },
  {
    year: "2020",
    title: "Indústria 4.0",
    description: "Implementação de tecnologias digitais e IoT",
  },
]

const values = [
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: "Qualidade",
    description: "Produtos e serviços com os mais altos padrões de qualidade e durabilidade",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Compromisso",
    description: "Relacionamento próximo e duradouro com nossos clientes e parceiros",
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Inovação",
    description: "Constante investimento em pesquisa e desenvolvimento tecnológico",
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Sustentabilidade",
    description: "Soluções eficientes que respeitam o meio ambiente",
  },
]

const stats = [
  { number: "60+", label: "Anos de Experiência" },
  { number: "500K+", label: "Clientes Atendidos" },
  { number: "50+", label: "Países Alcançados" },
  { number: "1000+", label: "Colaboradores" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            A SCHULZ
          </Badge>
          <h2 className="text-4xl font-bold text-primary font-work-sans mb-6">Mais de 60 Anos de Excelência</h2>
          <p className="text-xl text-muted-foreground font-open-sans max-w-3xl mx-auto leading-relaxed">
            A Schulz é líder no mercado de compressores de ar, oferecendo soluções inovadoras que impulsionam a
            produtividade industrial com tecnologia de ponta e sustentabilidade.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary font-work-sans mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-open-sans">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary font-work-sans">Nossa História</h3>
            <p className="text-lg text-muted-foreground font-open-sans leading-relaxed">
              Fundada em 1963, a Schulz construiu sua reputação através da dedicação à qualidade e inovação. Começamos
              como uma pequena empresa familiar e hoje somos reconhecidos mundialmente pela excelência em compressores
              de ar e soluções industriais.
            </p>
            <p className="text-lg text-muted-foreground font-open-sans leading-relaxed">
              Nossa jornada é marcada pela constante evolução tecnológica, sempre antecipando as necessidades do mercado
              e oferecendo produtos que combinam eficiência energética, durabilidade e performance superior.
            </p>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <img
              src="/schulz-company-history-industrial-facility.png"
              alt="Instalações industriais da Schulz"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-primary/10 rounded-lg"></div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-primary font-work-sans text-center mb-12">Marcos Históricos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="relative">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-primary font-work-sans mb-2">{milestone.year}</div>
                  <h4 className="text-lg font-semibold text-foreground mb-3 font-work-sans">{milestone.title}</h4>
                  <p className="text-muted-foreground font-open-sans">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-bold text-primary font-work-sans text-center mb-12">Nossos Valores</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h4 className="text-xl font-semibold text-foreground mb-3 font-work-sans">{value.title}</h4>
                  <p className="text-muted-foreground font-open-sans">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
