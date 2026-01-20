// Example statistics API route - GET /api/statistics
// This could fetch dynamic statistics from a database

export async function GET(_request) {
  // In a real application, you would fetch this from a database
  const statistics = {
    prevalence: {
      value: '1 in 100,000',
      description: 'Estimated prevalence of tubulinopathies'
    },
    cases: {
      value: '~500',
      description: 'Documented cases worldwide'
    },
    genes: {
      value: '10+',
      description: 'Known tubulin genes associated with disorders'
    },
    lastUpdated: new Date().toISOString()
  }

  return Response.json(statistics)
}
