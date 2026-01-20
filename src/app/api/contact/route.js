// Example contact form API route - POST /api/contact
export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate input
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // - Save to database
    // - Send email notification
    // - Integrate with email service (SendGrid, Resend, etc.)
    
    // Example: Log the contact form submission
    console.log('Contact form submission:', { name, email, message })

    return Response.json({
      success: true,
      message: 'Contact form submitted successfully',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Error processing contact form:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
