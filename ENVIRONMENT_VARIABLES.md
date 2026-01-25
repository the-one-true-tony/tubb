# Environment Variables Configuration

This project uses environment variables for configuration. Here's how to set them up for different environments.

## Local Development (.env.local)

For local development, create a `.env.local` file in the project root:

```env
# Frontend: Google Places autocomplete
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=your-google-api-key-here

# Facebook Group page password
NEXT_PUBLIC_FB_GROUP_PASSWORD=your-password-here

# Optional: API key for /api/users endpoint
USERS_API_KEY=your-api-key-here
```

**Note:** `.env.local` is gitignored and should not be committed.

## Cloudflare Pages/Workers

For Cloudflare deployment, environment variables can be set in multiple ways:

### Option 1: wrangler.toml [vars] Section

**For non-sensitive, client-side variables:**

```toml
[vars]
NEXTJS_ENV = "production"
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY = "your-key-here"
NEXT_PUBLIC_FB_GROUP_PASSWORD = "your-password-here"
```

**⚠️ Warning:** Variables in `wrangler.toml` are committed to git. Only use this for non-sensitive values or if your repo is private.

### Option 2: Cloudflare Dashboard (Recommended for Secrets)

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Select your account
3. Go to **Workers & Pages** → Your project
4. Go to **Settings** → **Variables and Secrets**
5. Add environment variables:
   - **Variable name:** `NEXT_PUBLIC_GOOGLE_PLACES_API_KEY`
   - **Value:** Your API key
   - **Type:** Encrypted (for secrets) or Plain text (for public vars)

### Option 3: Wrangler CLI (For Secrets)

For sensitive values, use `wrangler secret put`:

```bash
# Set a secret (not visible in wrangler.toml)
npx wrangler secret put NEXT_PUBLIC_GOOGLE_PLACES_API_KEY
# Enter the value when prompted

npx wrangler secret put NEXT_PUBLIC_FB_GROUP_PASSWORD
# Enter the value when prompted

npx wrangler secret put USERS_API_KEY
# Enter the value when prompted
```

**To view secrets:**
```bash
npx wrangler secret list
```

**To delete a secret:**
```bash
npx wrangler secret delete SECRET_NAME
```

## Environment Variables Reference

### Client-Side Variables (NEXT_PUBLIC_*)

These are exposed to the browser and can be in `wrangler.toml`:

- `NEXT_PUBLIC_GOOGLE_PLACES_API_KEY` - Google Maps/Places API key
- `NEXT_PUBLIC_FB_GROUP_PASSWORD` - Password for /fb-group page

### Server-Side Variables

These are only available in API routes and should be secrets:

- `USERS_API_KEY` - Optional API key for /api/users endpoint authentication

## Best Practices

1. **Never commit secrets to git** - Use `.env.local` for local dev (gitignored)
2. **Use Cloudflare Secrets** - For production secrets, use `wrangler secret put` or Cloudflare Dashboard
3. **Use wrangler.toml [vars]** - Only for non-sensitive, public variables
4. **Rotate secrets regularly** - Change API keys and passwords periodically

## Current Configuration

Check `wrangler.toml` for current `[vars]` configuration.

For local development, ensure `.env.local` exists with all required variables.

## Troubleshooting

**Variables not working in production:**
1. Check Cloudflare Dashboard → Workers & Pages → Settings → Variables
2. Verify secrets are set: `npx wrangler secret list`
3. Redeploy after adding new variables

**Variables not working locally:**
1. Ensure `.env.local` exists in project root
2. Restart dev server after adding variables
3. Check variable names match exactly (case-sensitive)
