# Security Notes for `/api/users` Endpoint

## Current Security Status

The `/api/users` endpoint is **publicly accessible** and has been improved with basic protections, but additional security measures are recommended for production.

## Implemented Protections

✅ **Input Validation**
- Email format validation
- Required field checks
- Data type validation
- Coordinate range validation
- Birthdate format validation
- Variant whitelist validation

✅ **Input Sanitization**
- String trimming
- Email normalization (lowercase)

✅ **Error Handling**
- Generic error messages (doesn't expose database details)
- Handles duplicate email errors gracefully

✅ **GET Endpoint Privacy**
- Only returns users who opted in (`contactable = 1`)
- Only returns users with coordinates (for map display)

## Recommended Additional Security Measures

### 1. Rate Limiting (High Priority)

**Option A: Cloudflare Rate Limiting Rules**
- Go to Cloudflare Dashboard → Security → WAF
- Create a rate limiting rule for `/api/users`
- Example: Block after 5 requests per minute per IP

**Option B: Implement in Code**
```javascript
// Use Cloudflare KV or D1 for rate limiting
// Track requests per IP address
```

### 2. API Key Authentication (Recommended for External Use)

Add API key requirement for programmatic access:

```javascript
// In POST handler
const apiKey = request.headers.get('x-api-key');
if (apiKey !== process.env.USERS_API_KEY) {
  return Response.json({ error: 'Unauthorized' }, { status: 401 });
}
```

### 3. CAPTCHA for Public Forms (Recommended)

If the form is public-facing, add reCAPTCHA:

```javascript
// Verify reCAPTCHA token
const captchaToken = body.captchaToken;
const captchaResponse = await fetch(
  `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${captchaToken}`
);
const captchaData = await captchaResponse.json();
if (!captchaData.success) {
  return Response.json({ error: 'CAPTCHA verification failed' }, { status: 400 });
}
```

### 4. Email Verification (Optional)

Send verification email before accepting submission:

```javascript
// Generate verification token
// Send email with verification link
// Only insert user after email is verified
```

### 5. Honeypot Field (Simple Bot Protection)

Add a hidden field that bots will fill:

```javascript
if (body.honeypot) {
  // Bot detected, silently reject
  return Response.json({ ok: true }); // Don't reveal it's a honeypot
}
```

### 6. IP Blocking (Advanced)

Block known bad IPs or use Cloudflare's IP reputation.

### 7. Request Origin Validation

Only allow requests from your domain:

```javascript
const origin = request.headers.get('origin');
const allowedOrigins = ['https://your-domain.com'];
if (origin && !allowedOrigins.includes(origin)) {
  return Response.json({ error: 'Unauthorized origin' }, { status: 403 });
}
```

## Current Risks

⚠️ **No Rate Limiting** - Vulnerable to spam/DoS attacks
⚠️ **No CAPTCHA** - Bots can submit fake data
⚠️ **Public Access** - Anyone can add users
⚠️ **Email Enumeration** - Can discover existing emails via unique constraint errors
⚠️ **GET Endpoint** - Exposes user locations (though limited to contactable users)

## Immediate Actions

1. **Set up Cloudflare Rate Limiting** (5-10 minutes)
2. **Add API key for external/n8n use** (if needed)
3. **Consider adding CAPTCHA** if form becomes public
4. **Monitor database for spam** and add IP blocking if needed

## Environment Variables to Add

```env
# Optional: API key for programmatic access
USERS_API_KEY=your-secret-api-key-here

# Optional: reCAPTCHA secret
RECAPTCHA_SECRET_KEY=your-recaptcha-secret
```

## Testing Security

Test the endpoint with:
- Invalid email formats
- Missing required fields
- SQL injection attempts (should be safe with parameterized queries)
- Rate limiting (send many rapid requests)
- Duplicate emails
