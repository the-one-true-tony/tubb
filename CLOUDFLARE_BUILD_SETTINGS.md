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

**Note**: The build script automatically removes `.next/cache` after building to prevent Cloudflare from trying to upload large cache files (>25 MiB limit).

### Build Output Directory
**Set to**: `.open-next`

⚠️ **Important**: 
- OpenNext adapter generates output in `.open-next/` directory
- This is required for Next.js 15 full-stack support (SSR + API routes)
- The build script automatically runs OpenNext after Next.js build

### Root Directory
**Leave as default**: `/` (or blank)

### Node Version
**Select**: `25` (or `20` minimum)

## Summary

| Setting | Value |
|---------|-------|
| Framework preset | `Next.js` |
| Build command | `npm run build` |
| Build output directory | `.open-next` |
| Root directory | `/` (default) |
| Node version | `25` |
| Compatibility flags | `nodejs_compat` (configured in `wrangler.jsonc`, may need manual entry in Dashboard) |

## Why Use OpenNext?

For Next.js 15, Cloudflare recommends using the OpenNext adapter:
- **Full Next.js 15 Support**: App Router, SSR, API routes, ISR, PPR
- **Node.js Runtime**: Uses Node.js runtime (not Edge) for better compatibility
- **Better Performance**: Optimized for Cloudflare Workers
- **Future-Proof**: Official recommended approach for Next.js 15+

The OpenNext adapter:
- Transforms Next.js build output for Cloudflare Workers
- Handles API routes and SSR correctly
- Provides Node.js API polyfills
- Integrates with Cloudflare Images for `next/image`

## Verification

After setting these, push to your `main` branch and check:
1. Cloudflare Dashboard → Your Project → Deployments
2. Should see a new deployment start automatically
3. Build logs should show Next.js compilation
4. No errors about missing output directory
