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
import { Calendar, Clock, User, CheckCircle, CalendarDays } from "lucide-react"

interface SchedulingFormData {
  name: string
  email: string
  phone: string
  company: string
  serviceType: string
  appointmentType: string
  preferredDate: string
  preferredTime: string
  address: string
  notes: string
}

const serviceTypes = [
  "Manutenção Preventiva",
  "Assistência Técnica",
  "Instalação de Equipamento",
  "Consultoria Técnica",
  "Auditoria Energética",
  "Treinamento Operacional",
  "Inspeção de Segurança",
]

const appointmentTypes = [
  "Visita Técnica no Local",
  "Consultoria Remota",
  "Reunião Comercial",
  "Demonstração de Produto",
]

const timeSlots = [
  "08:00 - 09:00",
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "13:00 - 14:00",
  "14:00 - 15:00",
  "15:00 - 16:00",
  "16:00 - 17:00",
]

const quickScheduleOptions = [
  {
    title: "Manutenção de Emergência",
    description: "Atendimento prioritário para equipamentos parados",
    icon: <Clock className="h-6 w-6" />,
    badge: "24h",
    color: "destructive",
  },
  {
    title: "Consultoria Técnica",
    description: "Análise e otimização de sistemas existentes",
    icon: <User className="h-6 w-6" />,
    badge: "2-3 dias",
    color: "default",
  },
  {
    title: "Instalação Programada",
    description: "Agendamento para instalação de novos equipamentos",
    icon: <Calendar className="h-6 w-6" />,
    badge: "1-2 semanas",
    color: "secondary",
  },
]

export function SchedulingSection() {
  const [formData, setFormData] = useState<SchedulingFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    appointmentType: "",
    preferredDate: "",
    preferredTime: "",
    address: "",
    notes: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (field: keyof SchedulingFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/scheduling", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        toast({
          title: "Agendamento solicitado com sucesso!",
          description: "Nossa equipe entrará em contato para confirmar o horário.",
        })
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          serviceType: "",
          appointmentType: "",
          preferredDate: "",
          preferredTime: "",
          address: "",
          notes: "",
        })
      } else {
        throw new Error("Erro ao agendar")
      }
    } catch (error) {
      toast({
        title: "Erro ao agendar",
        description: "Tente novamente ou entre em contato por telefone.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleQuickSchedule = (serviceType: string) => {
    setFormData((prev) => ({ ...prev, serviceType }))
    // Scroll to form
    document.getElementById("scheduling-form")?.scrollIntoView({ behavior: "smooth" })
  }

  // Get minimum date (today)
  const today = new Date().toISOString().split("T")[0]

  return (
    <section id="scheduling" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            AGENDAMENTO
          </Badge>
          <h2 className="text-4xl font-bold text-primary font-work-sans mb-6">Agende Sua Visita Técnica</h2>
          <p className="text-xl text-muted-foreground font-open-sans max-w-3xl mx-auto leading-relaxed">
            Nossos especialistas estão prontos para atender você. Agende uma visita técnica, consultoria ou manutenção
            de forma rápida e prática.
          </p>
        </div>

        {/* Quick Schedule Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {quickScheduleOptions.map((option, index) => (
            <Card
              key={index}
              className="cursor-pointer hover:shadow-lg transition-all duration-300 bg-white group"
              onClick={() => handleQuickSchedule(option.title)}
            >
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <div className="text-primary">{option.icon}</div>
                  </div>
                </div>
                <div className="flex justify-center mb-3">
                  <Badge variant={option.color as any} className="text-xs">
                    {option.badge}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold text-foreground font-work-sans mb-2">{option.title}</h3>
                <p className="text-muted-foreground font-open-sans text-sm">{option.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Scheduling Form */}
          <Card className="shadow-lg" id="scheduling-form">
            <CardHeader>
              <CardTitle className="text-2xl font-work-sans text-primary flex items-center gap-2">
                <CalendarDays className="h-6 w-6" />
                Solicitar Agendamento
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Agendamento Solicitado!</h3>
                  <p className="text-muted-foreground mb-4">
                    Recebemos sua solicitação. Nossa equipe entrará em contato em até 2 horas úteis para confirmar o
                    agendamento.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">
                    Fazer Novo Agendamento
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

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="serviceType">Tipo de Serviço *</Label>
                      <Select
                        value={formData.serviceType}
                        onValueChange={(value) => handleInputChange("serviceType", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o serviço" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceTypes.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="appointmentType">Tipo de Atendimento *</Label>
                      <Select
                        value={formData.appointmentType}
                        onValueChange={(value) => handleInputChange("appointmentType", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          {appointmentTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="preferredDate">Data Preferida *</Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        required
                        min={today}
                        value={formData.preferredDate}
                        onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferredTime">Horário Preferido</Label>
                      <Select
                        value={formData.preferredTime}
                        onValueChange={(value) => handleInputChange("preferredTime", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o horário" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Endereço para Visita</Label>
                    <Input
                      id="address"
                      type="text"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      placeholder="Endereço completo (se aplicável)"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Observações</Label>
                    <Textarea
                      id="notes"
                      rows={4}
                      value={formData.notes}
                      onChange={(e) => handleInputChange("notes", e.target.value)}
                      placeholder="Descreva detalhes específicos, equipamentos envolvidos, urgência, etc."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        Solicitar Agendamento
                        <Calendar className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Scheduling Information */}
          <div className="space-y-8">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-work-sans text-primary">Como Funciona</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground font-work-sans">Preencha o Formulário</h4>
                    <p className="text-muted-foreground font-open-sans text-sm">
                      Informe seus dados e detalhes do serviço necessário
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground font-work-sans">Confirmação</h4>
                    <p className="text-muted-foreground font-open-sans text-sm">
                      Nossa equipe entra em contato em até 2 horas úteis
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground font-work-sans">Atendimento</h4>
                    <p className="text-muted-foreground font-open-sans text-sm">
                      Técnico especializado realiza o serviço no horário agendado
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-work-sans text-primary">Horários de Atendimento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-open-sans text-foreground">Segunda a Sexta</span>
                  <span className="font-open-sans text-muted-foreground">8h às 18h</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-open-sans text-foreground">Sábado</span>
                  <span className="font-open-sans text-muted-foreground">8h às 12h</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-open-sans text-foreground">Emergências</span>
                  <span className="font-open-sans text-destructive">24h por dia</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold font-work-sans mb-2">Atendimento de Emergência</h3>
                <p className="font-open-sans mb-4">Para equipamentos parados ou situações críticas</p>
                <Button variant="secondary" size="lg" className="w-full">
                  Ligar: 0800 704 1963
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
