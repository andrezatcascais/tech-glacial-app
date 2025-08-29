import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, serviceType, appointmentType, preferredDate, preferredTime, address, notes } =
      body

    // Validate required fields
    if (!name || !email || !phone || !serviceType || !appointmentType || !preferredDate) {
      return NextResponse.json({ error: "Campos obrigatórios não preenchidos" }, { status: 400 })
    }

    // Here you would typically:
    // 1. Send confirmation email to customer
    // 2. Send notification to scheduling team
    // 3. Save to database/CRM
    // 4. Check technician availability
    // 5. Create calendar event

    // For now, we'll just log the data and return success
    console.log("Scheduling request:", {
      name,
      email,
      phone,
      company,
      serviceType,
      appointmentType,
      preferredDate,
      preferredTime,
      address,
      notes,
      timestamp: new Date().toISOString(),
    })

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    return NextResponse.json(
      {
        message: "Agendamento solicitado com sucesso!",
        success: true,
        schedulingId: `SCH-${Date.now()}`,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error processing scheduling request:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}
