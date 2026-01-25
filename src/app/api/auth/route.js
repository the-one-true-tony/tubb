// API route: POST /api/auth
// Validates password for fb-group page access
// Server-side only - password never exposed to client

import { getCloudflareContext } from '@opennextjs/cloudflare';

export async function POST(request) {
  try {
    const body = await request.json();
    const { password } = body || {};

    if (!password) {
      return Response.json(
        { error: 'Password is required.' },
        { status: 400 },
      );
    }

    // Get environment variable from Cloudflare context
    let env;
    try {
      ({ env } = getCloudflareContext());
    } catch {
      // Fallback: try to get from process.env (for local dev)
      const correctPassword = process.env.NEXT_PUBLIC_FB_GROUP_PASSWORD || process.env.FB_GROUP_PASSWORD;
      
      if (password === correctPassword) {
        return Response.json({ valid: true });
      } else {
        return Response.json({ valid: false });
      }
    }

    // Get password from Cloudflare environment
    // In Cloudflare, env vars from wrangler.toml [vars] are available in env
    const correctPassword = env.FB_GROUP_PASSWORD || env.NEXT_PUBLIC_FB_GROUP_PASSWORD;

    if (!correctPassword) {
      console.error('FB_GROUP_PASSWORD not set in environment');
      return Response.json(
        { error: 'Authentication not configured.' },
        { status: 500 },
      );
    }

    if (password === correctPassword) {
      return Response.json({ valid: true });
    } else {
      return Response.json({ valid: false });
    }
  } catch (err) {
    console.error('Error validating password:', err);
    return Response.json(
      { error: 'Failed to validate password.' },
      { status: 500 },
    );
  }
}
