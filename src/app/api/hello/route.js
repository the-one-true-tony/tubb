// Example API route - GET /api/hello
export async function GET(_request) {
  return Response.json({ 
    message: 'Hello from Next.js API!',
    timestamp: new Date().toISOString()
  })
}
