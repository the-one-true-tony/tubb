# Cloudflare Pages Build Settings

Use these exact settings in the Cloudflare Pages dashboard:

## Build Settings

### Framework Preset
**Select**: `Next.js`

Or leave it on **"None"** - Cloudflare will auto-detect Next.js from your `package.json`.

### Build Command
```
npm run build
```

### Build Output Directory
**Leave EMPTY** (blank)

⚠️ **Critical**: 
- Do NOT set this to `.next` or any other value
- Cloudflare Pages uses its own Next.js runtime - it doesn't upload `.next` as static files
- Setting it manually will cause errors like "Pages only supports files up to 25 MiB" because `.next/cache` files are too large
- Cloudflare automatically handles Next.js builds when framework is set to "Next.js"

### Root Directory
**Leave as default**: `/` (or blank)

### Node Version
**Select**: `25` (or `20` minimum)

## Summary

| Setting | Value |
|---------|-------|
| Framework preset | `Next.js` |
| Build command | `npm run build` |
| Build output directory | **EMPTY** (leave blank) |
| Root directory | `/` (default) |
| Node version | `25` |

## Why Leave Output Directory Empty?

Cloudflare Pages has native Next.js support. When it detects Next.js:
- It automatically knows where the build output is
- It handles both static and dynamic routes
- It sets up API routes correctly
- Manual output directory can interfere with this

Setting the output directory manually can cause:
- Build failures
- Missing API routes
- Incorrect routing
- Deployment errors

## Verification

After setting these, push to your `main` branch and check:
1. Cloudflare Dashboard → Your Project → Deployments
2. Should see a new deployment start automatically
3. Build logs should show Next.js compilation
4. No errors about missing output directory
