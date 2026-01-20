# OpenNext Setup for Next.js 15 on Cloudflare Pages

## Overview

This project uses `@opennextjs/cloudflare` adapter for deploying Next.js 15 to Cloudflare Pages. This is the **official recommended approach** for Next.js 15+ on Cloudflare as of 2025-2026.

## What is OpenNext?

OpenNext is an adapter that transforms Next.js build output to work with Cloudflare Workers. It:
- Enables full Next.js 15 features (SSR, API routes, ISR, PPR)
- Uses Node.js runtime (not Edge runtime) for better compatibility
- Provides necessary polyfills for Node.js APIs
- Integrates with Cloudflare-specific features

## Installation

The adapter is already installed:
```bash
npm install @opennextjs/cloudflare@latest
```

## Configuration Files

### 1. `open-next.config.ts`

Created in project root:
```typescript
import { defineCloudflareConfig } from '@opennextjs/cloudflare';

export default defineCloudflareConfig({
  // Default configuration for Cloudflare Pages
  // OpenNext will handle Next.js 15 transformation automatically
});
```

**Purpose:**
- Required by OpenNext to run non-interactively in CI/CD
- Prevents the build from prompting for configuration
- Uses default settings optimized for Cloudflare Pages

### 2. `wrangler.jsonc`

Created in project root:
```jsonc
{
  "name": "tubb",
  "compatibility_date": "2024-09-23",
  "compatibility_flags": ["nodejs_compat"]
}
```

**Key settings:**
- `name`: Project name for Cloudflare Pages
- `compatibility_flags`: Includes `nodejs_compat` for Node.js API support

⚠️ **Important**: Do NOT include `pages_build_output_dir` in `wrangler.jsonc`. Cloudflare Pages validates this directory exists BEFORE running the build, but the directory is created BY the build. Set the build output directory only in the Cloudflare Pages dashboard settings.

### 2. `package.json` Build Script

Updated build script:
```json
{
  "scripts": {
    "build": "next build && npx opennextjs-cloudflare build",
    "preview": "npx wrangler dev"
  }
}
```

**What it does:**
1. Runs `next build` (standard Next.js build)
2. Runs `npx opennextjs-cloudflare build` (transforms output for Cloudflare)

### 3. `.cloudflare/pages.json`

Updated configuration:
```json
{
  "buildOutputDir": ".open-next"
}
```

## Cloudflare Dashboard Settings

### Build Settings

| Setting | Value |
|---------|-------|
| **Framework preset** | `Next.js` |
| **Build command** | `npm run build` |
| **Build output directory** | `.open-next` |
| **Node version** | `25` |

### Compatibility Flags

**IMPORTANT**: The `nodejs_compat` flag is configured in `wrangler.jsonc`:

The flag is automatically set via the `wrangler.jsonc` configuration file:
```jsonc
{
  "compatibility_date": "2024-09-23",
  "compatibility_flags": ["nodejs_compat"]
}
```

**If you need to enable it in the Dashboard** (if not automatically applied):
1. Go to **Workers & Pages → Your Project → Settings → Functions**
2. Look for **Compatibility Flags** section
3. **Manually type** `nodejs_compat` in the text field (it may not appear in a dropdown - you need to type it)
4. Add it for both **Production** and **Preview** environments
5. Save and trigger a new deployment

**Note**: 
- The flag is already configured in `wrangler.jsonc`, so it should work automatically
- If the compatibility flags field doesn't exist in your Dashboard, the `wrangler.jsonc` config is sufficient
- Only manually enable in Dashboard if you encounter Node.js API errors
- The Next.js framework preset may automatically enable Node.js compatibility

## Local Development

### Development Mode
```bash
npm run dev
```
Uses standard Next.js dev server (no OpenNext needed).

### Preview Production Build
```bash
npm run build
npm run preview
```
Uses `wrangler dev` to preview the OpenNext build locally in Cloudflare's runtime.

## Build Process

When you run `npm run build`:

1. **Next.js Build**: `next build`
   - Compiles your Next.js app
   - Generates `.next/` directory
   - Removes `.next/cache/` (to avoid file size limits)

2. **OpenNext Transform**: `npx opennextjs-cloudflare build`
   - Transforms `.next/` output
   - Generates `.open-next/` directory
   - Creates `worker.js` for Cloudflare Workers
   - Sets up API routes and SSR handlers

3. **Cloudflare Deployment**
   - Uploads `.open-next/` directory
   - Deploys worker with Node.js compatibility
   - Serves your app with full Next.js features

## Features Supported

✅ **Fully Supported:**
- App Router
- Server-Side Rendering (SSR)
- API Routes (`/api/*`)
- Incremental Static Regeneration (ISR)
- Partial Prerendering (PPR)
- Server Components
- Client Components
- `next/image` (via Cloudflare Images)

⚠️ **Not Yet Supported:**
- Node.js APIs in Middleware (Next.js 15.2+)
- Native Edge Runtime (uses Node.js runtime instead)

## Troubleshooting

### Build Fails
- Check Node version is 25
- Verify `nodejs_compat` flag is enabled
- Check build logs for specific errors

### API Routes Not Working
- Ensure `nodejs_compat` flag is enabled
- Verify build output directory is `.open-next`
- Check that framework preset is `Next.js` (not "Static HTML Export")

### Large File Errors
- The build script removes `.next/cache/` automatically
- OpenNext output should be under 25 MB per file
- Check `.open-next/` directory size

## Migration Notes

This setup replaces the old approach:
- ❌ `@cloudflare/next-on-pages` (deprecated September 2025)
- ✅ `@opennextjs/cloudflare` (current recommended)

The old approach used Edge Runtime, but OpenNext uses Node.js runtime for better compatibility.

## Resources

- [OpenNext Cloudflare Docs](https://opennext.js.org/cloudflare)
- [Cloudflare Next.js Guide](https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/)
- [OpenNext GitHub](https://github.com/opennextjs/opennextjs-cloudflare)
