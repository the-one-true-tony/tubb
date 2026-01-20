# Fix: "Pages only supports files up to 25 MiB" Error

## Problem
Cloudflare Pages is trying to upload `.next/cache/webpack/` files which are too large (59.7 MiB > 25 MiB limit).

## Root Cause
The **Build output directory** is set to `.next` or the framework preset isn't properly configured. Cloudflare Pages should use its **Next.js runtime**, not upload `.next` as static files.

## Solution

### Step 1: Update Build Script (Already Done)

The `package.json` build script now removes cache after build:
```json
"build": "next build && rm -rf .next/cache"
```

This prevents Cloudflare from trying to upload large cache files.

### Step 2: Configure Cloudflare Dashboard

1. Go to **Workers & Pages → Your Project → Settings → Builds & deployments**

2. **Verify these settings:**
   - **Framework preset**: `Next.js` (must be explicitly set, not "None")
   - **Build command**: `npm run build` (this now removes cache automatically)
   - **Build output directory**: **MUST BE EMPTY/BLANK** (delete any value if set)
   - **Node version**: `25`

3. **Save and redeploy**

### Why This Works

- When Framework preset is `Next.js`, Cloudflare uses its **Next.js runtime**
- It doesn't upload `.next` as static files - it runs Next.js server-side
- The `.next/cache` directory is never uploaded (it's build-time only)
- API routes work because Cloudflare runs Next.js, not static files

### If Still Having Issues

1. **Delete the project** and recreate it with correct settings from the start
2. Or **disconnect and reconnect** the GitHub repository
3. Make sure Framework preset is `Next.js` (not auto-detect)

## Verification

After fixing, check the deployment logs:
- Should see "Detected Next.js" or similar
- Should NOT see "Validating asset output directory" with `.next`
- Build should complete without file size errors
