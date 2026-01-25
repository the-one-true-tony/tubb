// API route: GET /api/config
// Provides client-side configuration values (NEXT_PUBLIC_* variables)
// These are safe to expose to the client

import { getCloudflareContext } from '@opennextjs/cloudflare';

export async function GET() {
  try {
    let env;
    try {
      ({ env } = getCloudflareContext());
    } catch {
      // Fallback for local dev
      return Response.json({
        googlePlacesApiKey: process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY || '',
      });
    }

    // Return only public configuration values
    return Response.json({
      googlePlacesApiKey: env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY || '',
    });
  } catch (err) {
    console.error('Error fetching config:', err);
    return Response.json(
      { error: 'Failed to fetch configuration.' },
      { status: 500 },
    );
  }
}
