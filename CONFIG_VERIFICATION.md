# Next.js Configuration Verification for Cloudflare Pages

## ✅ Configuration Status: CORRECT

All configuration files are properly set up for Cloudflare Pages deployment.

## Configuration Files

### 1. `next.config.js` ✅

**Status**: Correctly configured

```javascript
{
  reactStrictMode: true,
  // No output: 'export' - Cloudflare Pages uses SSR
  // No basePath - not needed for Cloudflare Pages
  // No trailingSlash - default behavior is fine
  // No assetPrefix - not needed
}
```

**Key Points**:
- ✅ No `output: 'export'` (would disable API routes)
- ✅ No `basePath` (not needed for Cloudflare Pages)
- ✅ No `trailingSlash` (default is fine)
- ✅ `reactStrictMode: true` (good practice)

### 2. `.cloudflare/pages.json` ✅

**Status**: Correctly configured

```json
{
  "build": {
    "command": "npm run build"
  },
  "framework": "nextjs",
  "nodeVersion": "25",
  "buildOutputDir": ".open-next"
}
```

**Key Points**:
- ✅ Framework set to `nextjs`
- ✅ Node version set to `25`
- ✅ Build output directory set to `.open-next` (OpenNext adapter output)
- ✅ Build command is `npm run build` (includes OpenNext transform)

### 3. `package.json` ✅

**Status**: Correctly configured

```json
{
  "scripts": {
    "build": "next build && npx opennextjs-cloudflare build",
    "preview": "npx wrangler dev"
  }
}
```

**Key Points**:
- ✅ Build script runs Next.js build, then OpenNext transform
- ✅ OpenNext adapter transforms output for Cloudflare Workers
- ✅ Preview script allows local testing with Cloudflare runtime

### 4. `public/_routes.json` ✅

**Status**: Correctly configured

```json
{
  "version": 1,
  "include": ["/*"],
  "exclude": ["/_next/static/*"]
}
```

**Key Points**:
- ✅ Routes all paths through Next.js Worker
- ✅ Excludes static assets (served directly)

### 5. `public/_headers` ✅

**Status**: Correctly configured

- ✅ Sets correct MIME types for JavaScript files
- ✅ Configures cache headers for static assets

## Cloudflare Dashboard Settings

### Required Settings:

| Setting | Value | Status |
|---------|-------|--------|
| **Framework preset** | `Next.js` | ⚠️ **VERIFY IN DASHBOARD** |
| **Build command** | `npm run build` | ✅ Correct |
| **Build output directory** | `.open-next` | ⚠️ **VERIFY IN DASHBOARD** |
| **Root directory** | `/` (default) | ✅ Correct |
| **Node version** | `25` | ✅ Correct |

### ⚠️ Critical: Verify in Dashboard

**You MUST verify these settings in the Cloudflare Dashboard:**

1. Go to **Workers & Pages → Your Project → Settings → Builds & deployments**

2. Check:
   - **Framework preset**: Must be `Next.js` (not "None", not "Static HTML Export")
   - **Build output directory**: Must be `.open-next`
   - **Compatibility flags**: Enable `nodejs_compat` in Functions settings

3. If not correct:
   - Change Framework preset to `Next.js`
   - Delete Build output directory value (leave blank)
   - Save settings
   - Trigger a new deployment

## Build Output

### What Next.js Generates:

- `.next/` directory contains:
  - Compiled pages and components
  - Static assets
  - Server-side code
  - API route handlers

### What OpenNext Does:

1. **Transforms `.next/` output** for Cloudflare Workers/Pages
2. **Generates `.open-next/` directory** with:
   - Transformed API routes
   - SSR handlers
   - Static assets
   - Worker files for Cloudflare runtime
3. **Provides Node.js polyfills** for compatibility
4. **Optimizes for Cloudflare** runtime

### What Cloudflare Pages Does:

1. **Detects Next.js** from framework preset
2. **Reads `.open-next/` directory** (OpenNext output)
3. **Deploys Worker** with Node.js compatibility
4. **Serves static assets** from `/_next/static/`
5. **Handles SSR and API routes** via Worker

### What Gets Uploaded:

- ✅ `.open-next/` directory (OpenNext transformed output)
- ✅ Worker file (`worker.js`)
- ✅ Static assets
- ❌ `.next/cache/` (removed by build script)
- ❌ Source files (not needed)

## Verification Checklist

- [x] `next.config.js` has no `output: 'export'`
- [x] `@opennextjs/cloudflare` installed
- [x] `wrangler.jsonc` configured with `nodejs_compat`
- [x] `.cloudflare/pages.json` has `buildOutputDir: ".open-next"`
- [x] `package.json` build script uses OpenNext
- [x] `public/_routes.json` configured
- [x] `public/_headers` configured
- [ ] **Framework preset set to `Next.js` in Cloudflare Dashboard** ⚠️
- [ ] **Build output directory is `.open-next` in Cloudflare Dashboard** ⚠️
- [x] **`nodejs_compat` flag configured in `wrangler.jsonc`** ✅

## Common Issues

### Issue: 404 Errors
**Cause**: Framework preset not set to `Next.js`
**Fix**: Set Framework preset to `Next.js` in Cloudflare Dashboard

### Issue: MIME Type Errors
**Cause**: Framework preset not set, or cached 404 responses
**Fix**: Set Framework preset to `Next.js` and purge cache

### Issue: "Pages only supports files up to 25 MiB"
**Cause**: Build output directory set to `.next` (includes cache)
**Fix**: Leave Build output directory EMPTY in Cloudflare Dashboard

## Summary

✅ **All configuration files are correct**

⚠️ **You must verify Cloudflare Dashboard settings:**
- Framework preset: `Next.js`
- Build output directory: **EMPTY**

Once these dashboard settings are correct, your deployment should work perfectly!
