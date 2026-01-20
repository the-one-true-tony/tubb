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
  "nodeVersion": "25"
}
```

**Key Points**:
- ✅ Framework set to `nextjs`
- ✅ Node version set to `25`
- ✅ **No `buildOutputDir`** - This is CORRECT! Must be empty/omitted
- ✅ Build command is `npm run build`

### 3. `package.json` ✅

**Status**: Correctly configured

```json
{
  "scripts": {
    "build": "next build && rm -rf .next/cache"
  }
}
```

**Key Points**:
- ✅ Build script removes `.next/cache` after build
- ✅ This prevents Cloudflare from trying to upload large cache files (>25 MiB limit)

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
| **Build output directory** | **EMPTY** (blank) | ⚠️ **VERIFY IN DASHBOARD** |
| **Root directory** | `/` (default) | ✅ Correct |
| **Node version** | `25` | ✅ Correct |

### ⚠️ Critical: Verify in Dashboard

**You MUST verify these settings in the Cloudflare Dashboard:**

1. Go to **Workers & Pages → Your Project → Settings → Builds & deployments**

2. Check:
   - **Framework preset**: Must be `Next.js` (not "None")
   - **Build output directory**: Must be **EMPTY/BLANK** (delete any value if set)

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

### What Cloudflare Pages Does:

1. **Detects Next.js** from framework preset
2. **Reads `.next/` directory** automatically
3. **Sets up Edge Runtime** for API routes
4. **Serves static assets** from `/_next/static/`
5. **Handles SSR** for dynamic routes

### What Gets Uploaded:

- ✅ Static assets (HTML, CSS, JS chunks)
- ✅ API route handlers (Edge Runtime)
- ❌ `.next/cache/` (removed by build script)
- ❌ Source files (not needed)

## Verification Checklist

- [x] `next.config.js` has no `output: 'export'`
- [x] `.cloudflare/pages.json` has no `buildOutputDir`
- [x] `package.json` build script removes cache
- [x] `public/_routes.json` configured
- [x] `public/_headers` configured
- [ ] **Framework preset set to `Next.js` in Cloudflare Dashboard** ⚠️
- [ ] **Build output directory is EMPTY in Cloudflare Dashboard** ⚠️

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
