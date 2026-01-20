# Cloudflare Pages MIME Type Error Fix

## Error Message

```
Failed to load module script: Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of "text/jsx". Strict MIME type checking is enforced for module scripts per HTML spec.
```

## Root Cause

This error occurs when:
1. **Framework preset not set**: Cloudflare Pages isn't detecting Next.js, so it's trying to serve source files or 404 pages instead of compiled JavaScript
2. **Cloudflare cache**: Cloudflare cached 404 errors or wrong MIME types for JavaScript files
3. **Old Vite files**: Old `index.html` file was referencing non-existent files

## Solution Applied

### ✅ Fixed Files

1. **Deleted `index.html`**: Removed the old Vite `index.html` file that was causing conflicts
2. **Added `public/_headers`**: Added headers configuration to ensure correct MIME types for JavaScript files
3. **Updated `next.config.js`**: Ensured proper asset handling
4. **Updated `_headers` file**: Made headers more specific to catch all JavaScript file patterns

### 🔧 Manual Steps Required

#### 1. **CRITICAL: Verify Framework Preset**

**This is the #1 cause of MIME type errors!**

Go to **Cloudflare Dashboard → Workers & Pages → Your Project → Settings → Builds & deployments**

**Framework preset MUST be set to `Next.js`** (not "None", not blank, not auto-detect)

**If it's not set correctly:**
- Change it to `Next.js`
- Save settings
- Go to **Deployments** tab
- Click **Retry deployment** on the latest build
- Wait for deployment to complete

#### 2. Purge Cloudflare Cache

**IMPORTANT**: After deploying the fix, you **must** purge Cloudflare's cache:

**Option A: Via Cloudflare Pages Dashboard**
1. Go to **Workers & Pages → Your Project → Settings → Builds & deployments**
2. Scroll to **Cache Management** section
3. Click **Purge Everything** or purge specific URLs
4. Wait 2-3 minutes for cache to clear

**Option B: Via Cloudflare Dashboard**
1. Go to **Caching → Configuration**
2. Click **Purge Everything**
3. Confirm the purge
4. Wait 2-3 minutes

#### 3. Verify Build Settings

Ensure your Cloudflare Pages project has these settings:

| Setting | Value |
|---------|-------|
| **Framework preset** | `Next.js` ⚠️ **MUST BE SET** |
| **Build command** | `npm run build` |
| **Build output directory** | **EMPTY** (blank) |
| **Node version** | `25` |

#### 4. Redeploy

After purging cache:
1. Push a new commit (or trigger a redeploy)
2. Wait for build to complete
3. Test the site

## Why This Happens

The error "text/jsx" suggests Cloudflare is trying to serve source `.jsx` files instead of compiled `.js` files. This happens when:

1. **Framework preset is not set**: Cloudflare doesn't know it's a Next.js app, so it treats it as a static site and tries to serve source files
2. **Cached 404 responses**: If a JavaScript file was missing during a previous deployment, Cloudflare cached the 404 HTML response with `text/html` MIME type
3. **Path mismatches**: The browser requests `/chunks/abc123.js` but Cloudflare serves a 404 page instead

## Prevention

- **Always set Framework preset to `Next.js`** before first deployment
- Purge cache after major configuration changes
- Ensure old build artifacts are cleaned up (`.next/cache` is now removed automatically)
- Verify framework preset is set to `Next.js` in Cloudflare dashboard

## Still Having Issues?

If the error persists after:
1. ✅ Setting Framework preset to `Next.js`
2. ✅ Purging cache
3. ✅ Redeploying

Then check:

1. **Browser console**: Look for specific file paths that are failing
2. **Network tab**: Check what MIME type is actually being returned
3. **Cloudflare logs**: Go to **Workers & Pages → Your Project → Logs** to see any runtime errors
4. **Deployment logs**: Check if Next.js was detected during build
5. **Test locally**: Run `npm run build && npm run start` to verify the build works locally

## Quick Checklist

- [ ] Framework preset set to `Next.js` in Cloudflare Dashboard
- [ ] Build output directory is EMPTY
- [ ] Node version is `25`
- [ ] Cache purged after deployment
- [ ] New deployment triggered after fixing settings
- [ ] `_headers` file exists in `public/` folder
- [ ] Old `index.html` file deleted
