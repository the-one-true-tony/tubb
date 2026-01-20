# Fix: Cloudflare Pages 404 Error

## Problem
After successful build, the site shows 404 errors on Cloudflare Pages.

## Common Causes

### 1. Framework Preset Not Set Correctly

**Check in Cloudflare Dashboard:**
- Go to **Workers & Pages → Your Project → Settings → Builds & deployments**
- **Framework preset** MUST be set to `Next.js` (not "None" or auto-detect)
- If it's not set, Cloudflare won't use the Next.js runtime

### 2. Build Output Directory Misconfigured

**In Cloudflare Dashboard:**
- **Build output directory** MUST be set to `.open-next`
- This is the output directory from the OpenNext adapter
- OpenNext transforms Next.js build for Cloudflare Workers

### 3. Routes Configuration

A `_routes.json` file has been added to `public/` to ensure proper routing:
```json
{
  "version": 1,
  "include": ["/*"],
  "exclude": ["/_next/static/*"]
}
```

This tells Cloudflare:
- Handle all routes (`/*`) with the Next.js Worker
- Serve static assets (`/_next/static/*`) directly without Worker processing

### 4. Compatibility Flags

Ensure these compatibility flags are enabled in Cloudflare Dashboard:
- Go to **Workers & Pages → Your Project → Settings → Functions**
- Enable **Node.js compatibility** (if available)

## Verification Steps

1. **Check Build Logs:**
   - Go to **Workers & Pages → Your Project → Deployments**
   - Click on the latest deployment
   - Look for "Detected Next.js" or similar messages
   - Should NOT see errors about missing files

2. **Check Deployment:**
   - After deployment completes, check the URL
   - Try accessing `/` (root path)
   - Try accessing `/api/hello` (API route)

3. **Purge Cache:**
   - Go to **Caching → Configuration → Purge Everything**
   - Wait 2-3 minutes
   - Try accessing the site again

## Most Common Fix

**The #1 cause of 404 errors is the Framework preset not being set correctly.**

### Critical Steps:

1. **Go to Cloudflare Dashboard → Workers & Pages → Your Project → Settings → Builds & deployments**

2. **Verify Framework preset:**
   - It MUST say `Next.js` (not "None", not blank, not auto-detect)
   - If it's not set to `Next.js`, change it NOW
   - Save the settings

3. **Verify Build output directory:**
   - It MUST be set to `.open-next`
   - This is the OpenNext adapter output directory
   - Save the settings

4. **After changing settings:**
   - Go to **Deployments** tab
   - Click **Retry deployment** on the latest build
   - OR push a new commit to trigger a rebuild

## If Still Getting 404

### Option 1: Recreate Project
1. Delete the Cloudflare Pages project
2. Create a new project
3. Connect your GitHub repository
4. **IMPORTANT:** Set Framework preset to `Next.js` BEFORE first build
5. Set Build output directory to `.open-next`
6. Set Node version to `25`
7. Enable `nodejs_compat` compatibility flag in Functions settings

### Option 2: Check Build Output
Run locally to verify build works:
```bash
npm run build
npm run start
```

Then visit `http://localhost:3000` - if it works locally, the issue is Cloudflare configuration.

### Option 3: Check Deployment Logs
Look for specific errors in the deployment logs:
- Missing `_worker.js` file
- Incorrect asset paths
- Routing errors

## Current Configuration

- ✅ Framework preset: `Next.js`
- ✅ Build command: `npm run build`
- ✅ Build output directory: `.open-next`
- ✅ OpenNext adapter configured
- ✅ `nodejs_compat` flag enabled
- ✅ Node version: `25`
- ✅ `_routes.json` configured
- ✅ `_headers` configured for MIME types

## Next Steps

1. Verify Cloudflare Dashboard settings match above
2. Trigger a new deployment (push a commit or redeploy)
3. Purge cache after deployment
4. Test the site
