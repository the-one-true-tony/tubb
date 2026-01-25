// API route: POST /api/users and GET /api/users
// POST: Stores a new user record in the Cloudflare D1 `users` table.
// GET: Fetches users with latitude and longitude coordinates.
// Uses OpenNext's getCloudflareContext helper to access the DB binding.
//
// SECURITY: This endpoint should be protected. Consider:
// - Rate limiting (Cloudflare provides this)
// - API key authentication for external use
// - CAPTCHA for public forms
// - Input validation and sanitization

import { getCloudflareContext } from '@opennextjs/cloudflare';

// Simple rate limiting using Cloudflare's request context
// Note: For production, use Cloudflare Rate Limiting rules or a proper rate limiting library
function checkRateLimit(request) {
  // Cloudflare provides rate limiting via WAF rules
  // For now, we'll rely on Cloudflare's built-in protection
  // You can add custom rate limiting here if needed
  return true;
}

// Validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate and sanitize input
function validateUserInput(data) {
  const errors = [];
  
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters');
  }
  
  if (!data.email || !isValidEmail(data.email)) {
    errors.push('Valid email is required');
  }
  
  if (!data.address || typeof data.address !== 'string' || data.address.trim().length < 5) {
    errors.push('Address must be at least 5 characters');
  }
  
  // Validate birthdate format if provided
  if (data.birthdate && !/^\d{4}-\d{2}-\d{2}$/.test(data.birthdate)) {
    errors.push('Birthdate must be in YYYY-MM-DD format');
  }
  
  // Validate tubulin variant if provided
  const validVariants = ['TUBA1A', 'TUBB2B', 'TUBB3', 'TUBB2A', 'TUBB', 'TUBA8', 'Other'];
  if (data.tubulin_variant && !validVariants.includes(data.tubulin_variant)) {
    errors.push('Invalid tubulin variant');
  }
  
  // Validate coordinates if provided
  if (data.latitude !== undefined && data.latitude !== null) {
    const lat = Number(data.latitude);
    if (isNaN(lat) || lat < -90 || lat > 90) {
      errors.push('Latitude must be between -90 and 90');
    }
  }
  
  if (data.longitude !== undefined && data.longitude !== null) {
    const lng = Number(data.longitude);
    if (isNaN(lng) || lng < -180 || lng > 180) {
      errors.push('Longitude must be between -180 and 180');
    }
  }
  
  return { valid: errors.length === 0, errors };
}

export async function GET(request) {
  try {
    // SECURITY: Consider adding API key authentication for this endpoint
    // For now, it's public but only returns users who opted in to be contactable
    // and have shared their location
    
    // Optional: Require API key for external access
    // const apiKey = request.headers.get('x-api-key');
    // if (apiKey !== process.env.API_KEY) {
    //   return Response.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    let env;
    try {
      ({ env } = getCloudflareContext());
    } catch {
      return Response.json(
        { error: 'Database is not available in this environment.' },
        { status: 500 },
      );
    }

    const db = env.DB;

    // Only fetch users who:
    // 1. Have coordinates (for map display)
    // 2. Have opted in to be contactable
    // This provides some privacy protection
    const result = await db.prepare(
      `SELECT 
        id,
        name,
        address,
        latitude,
        longitude,
        birthdate,
        tubulin_variant,
        contactable
      FROM users
      WHERE latitude IS NOT NULL 
        AND longitude IS NOT NULL
        AND contactable = 1
      ORDER BY created_at DESC`
    ).all();

    const users = result.results || [];

    return Response.json({
      users: users,
      count: users.length,
    });
  } catch (err) {
    console.error('Error fetching users:', err);
    return Response.json(
      { error: 'Failed to fetch users.' },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  try {
    // Get environment from Cloudflare context
    let env;
    try {
      ({ env } = getCloudflareContext());
    } catch {
      return Response.json(
        { error: 'Database is not available in this environment.' },
        { status: 500 },
      );
    }

    // Check rate limiting (rely on Cloudflare rate limiting)
    if (!checkRateLimit(request)) {
      return Response.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 },
      );
    }

    const body = await request.json();

    const {
      name,
      email,
      address,
      latitude,
      longitude,
      birthdate,
      tubulin_variant,
      emailable,
      researchable,
      contactable,
    } = body || {};

    // Validate input
    const validation = validateUserInput({
      name,
      email,
      address,
      latitude,
      longitude,
      birthdate,
      tubulin_variant,
    });

    if (!validation.valid) {
      return Response.json(
        { error: validation.errors.join(', ') },
        { status: 400 },
      );
    }

    // Sanitize inputs (trim strings)
    const sanitizedName = name.trim();
    const sanitizedEmail = email.trim().toLowerCase();
    const sanitizedAddress = address.trim();
    const sanitizedBirthdate = birthdate ? birthdate.trim() : null;
    const sanitizedVariant = tubulin_variant ? tubulin_variant.trim() : null;

    const db = env.DB;

    // Check if email already exists (case-insensitive check)
    const existingUser = await db.prepare(
      `SELECT id FROM users WHERE LOWER(email) = LOWER(?1)`
    ).bind(sanitizedEmail).first();

    if (existingUser) {
      return Response.json(
        { error: 'An account with this email already exists.' },
        { status: 409 },
      );
    }

    // Insert new user
    const stmt = db.prepare(
      `INSERT INTO users (
        name,
        email,
        address,
        latitude,
        longitude,
        birthdate,
        tubulin_variant,
        emailable,
        researchable,
        contactable
      ) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10);`,
    );

    await stmt
      .bind(
        sanitizedName,
        sanitizedEmail,
        sanitizedAddress,
        latitude ?? null,
        longitude ?? null,
        sanitizedBirthdate,
        sanitizedVariant,
        emailable ? 1 : 0,
        researchable ? 1 : 0,
        contactable ? 1 : 0,
      )
      .run();

    return Response.json({ ok: true });
  } catch (err) {
    console.error('Error inserting user:', err);
    
    // Fallback: Check for unique constraint violation (in case check above missed it)
    if (err.message && (err.message.includes('UNIQUE constraint') || err.message.includes('UNIQUE'))) {
      return Response.json(
        { error: 'An account with this email already exists.' },
        { status: 409 },
      );
    }
    
    return Response.json(
      { error: 'Failed to save your details. Please try again later.' },
      { status: 500 },
    );
  }
}

