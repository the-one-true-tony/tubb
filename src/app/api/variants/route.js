// Example variants API route - GET /api/variants
// This could fetch variant data from a database or external API

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const gene = searchParams.get('gene') // Optional filter by gene

  // Example variant data - in production, fetch from database
  const variants = [
    {
      gene: 'TUBA1A',
      variant: 'R402C',
      significance: 'Pathogenic',
      frequency: 'Common',
      description: 'One of the most frequently reported mutations'
    },
    {
      gene: 'TUBB2B',
      variant: 'E421K',
      significance: 'Pathogenic',
      frequency: 'Common',
      description: 'Associated with polymicrogyria'
    },
    {
      gene: 'TUBB3',
      variant: 'R262C',
      significance: 'Pathogenic',
      frequency: 'Rare',
      description: 'Affects neuronal migration'
    }
  ]

  // Filter by gene if provided
  const filteredVariants = gene
    ? variants.filter(v => v.gene.toLowerCase() === gene.toLowerCase())
    : variants

  return Response.json({
    variants: filteredVariants,
    count: filteredVariants.length,
    timestamp: new Date().toISOString()
  })
}
