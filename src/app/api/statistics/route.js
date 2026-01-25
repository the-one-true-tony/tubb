// Example statistics API route - GET /api/statistics
// Currently returns static data; can be wired to D1 later if needed.

export async function GET(_request) {
  const statistics = {
    prevalence: {
      value: '1 in 100,000',
      description: 'Estimated prevalence of tubulinopathies',
    },
    cases: {
      value: '~500',
      description: 'Documented cases worldwide',
    },
    genes: {
      value: '10+',
      description: 'Known tubulin genes associated with disorders',
    },
    lastUpdated: new Date().toISOString(),
  };

  return Response.json(statistics);
}

