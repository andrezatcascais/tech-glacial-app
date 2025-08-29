import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, service, message } = body

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "Campos obrigatórios não preenchidos" }, { status: 400 })
    }

    // Here you would typically:
    // 1. Send email using a service like Resend, SendGrid, or Nodemailer
    // 2. Save to database
    // 3. Send to CRM system

    // For now, we'll just log the data and return success
    console.log("Contact form submission:", {
      name,
      email,
      phone,
      company,
      service,
      message,
      timestamp: new Date().toISOString(),
    })

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json(
      {
        message: "Mensagem enviada com sucesso!",
        success: true,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}
