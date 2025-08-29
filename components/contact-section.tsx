"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"

interface ContactFormData {
  name: string
  email: string
  phone: string
  company: string
  service: string
  message: string
}

const contactInfo = [
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Endereço Principal",
    details: ["Rua Schulz, 1963", "Joinville - SC", "CEP: 89219-600"],
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Telefones",
    details: ["(47) 3481-9000", "0800 704 1963", "WhatsApp: (47) 99999-9999"],
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "E-mails",
    details: ["contato@schulz.com.br", "vendas@schulz.com.br", "suporte@schulz.com.br"],
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Horário de Atendimento",
    details: ["Segunda a Sexta: 8h às 18h", "Sábado: 8h às 12h", "Plantão 24h para emergências"],
  },
]

const serviceOptions = [
  "Compressores Industriais",
  "Manutenção Preventiva",
  "Assistência Técnica",
  "Automação Industrial",
  "Instalação e Comissionamento",
  "Consultoria Técnica",
  "Peças e Acessórios",
  "Outros",
]

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        toast({
          title: "Mensagem enviada com sucesso!",
          description: "Entraremos em contato em breve.",
        })
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        })
      } else {
        throw new Error("Erro ao enviar mensagem")
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato por telefone.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            CONTATO
          </Badge>
          <h2 className="text-4xl font-bold text-primary font-work-sans mb-6">Entre em Contato Conosco</h2>
          <p className="text-xl text-muted-foreground font-open-sans max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para atender suas necessidades. Fale com nossos especialistas e descubra as melhores
            soluções para sua empresa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-work-sans text-primary">Solicite um Orçamento</CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Mensagem Enviada!</h3>
                  <p className="text-muted-foreground">
                    Obrigado pelo seu interesse. Nossa equipe entrará em contato em breve.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-4">
                    Enviar Nova Mensagem
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa</Label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Nome da sua empresa"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Serviço de Interesse</Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um serviço" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Descreva suas necessidades ou dúvidas..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary font-work-sans mb-6">Informações de Contato</h3>
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="text-primary mt-1">{info.icon}</div>
                        <div>
                          <h4 className="font-semibold text-foreground font-work-sans mb-2">{info.title}</h4>
                          <div className="space-y-1">
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-muted-foreground font-open-sans">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <Card>
              <CardContent className="p-0">
                <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground font-open-sans">Mapa Interativo</p>
                    <p className="text-sm text-muted-foreground">Joinville - SC</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
