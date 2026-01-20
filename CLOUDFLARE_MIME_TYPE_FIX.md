# Cloudflare Pages MIME Type Error Fix

## Error Message

```
Failed to load module script: Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of "text/jsx". Strict MIME type checking is enforced for module scripts per HTML spec.
```

## Cause

This error occurs when:
1. **Old Vite files interfere**: An old `index.html` file from the Vite setup was being served, which referenced `/src/main.jsx` (doesn't exist in Next.js)
2. **Cloudflare cache**: Cloudflare cached 404 errors or wrong MIME types for JavaScript files
3. **Incorrect framework detection**: Cloudflare Pages wasn't properly detecting Next.js and serving files incorrectly

## Solution Applied

### ✅ Fixed Files

1. **Deleted `index.html`**: Removed the old Vite `index.html` file that was causing conflicts
2. **Added `public/_headers`**: Added headers configuration to ensure correct MIME types for JavaScript files
3. **Updated `next.config.js`**: Ensured proper asset handling

### 🔧 Manual Steps Required

#### 1. Purge Cloudflare Cache

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

#### 2. Verify Build Settings

Ensure your Cloudflare Pages project has these settings:

| Setting | Value |
|---------|-------|
| **Framework preset** | `Next.js` |
| **Build command** | `npm run build` |
| **Build output directory** | **EMPTY** (blank) |
| **Node version** | `25` |

#### 3. Redeploy

After purging cache:
1. Push a new commit (or trigger a redeploy)
2. Wait for build to complete
3. Test the site

## Why This Happens

Cloudflare Pages caches responses aggressively. If:
- A build was deploying and someone accessed the site
- An old file was being served
- A 404 error occurred for a JavaScript file

Cloudflare may cache that error response with the wrong MIME type (`text/html` for a 404 page instead of `application/javascript`). Even after fixing the underlying issue, the cached error persists until you purge the cache.

## Prevention

- Always purge cache after major configuration changes
- Ensure old build artifacts are cleaned up (`.next/cache` is now removed automatically)
- Verify framework preset is set to `Next.js` in Cloudflare dashboard

## Still Having Issues?

If the error persists after purging cache:

1. **Check browser console**: Look for specific file paths that are failing
2. **Verify file exists**: Check that the file exists in the `.next` build output
3. **Check Cloudflare logs**: Go to **Workers & Pages → Your Project → Logs** to see any runtime errors
4. **Test locally**: Run `npm run build && npm run start` to verify the build works locally
