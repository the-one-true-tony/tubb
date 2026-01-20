# Migration from GitHub Pages to Cloudflare Pages

This document outlines the changes made to migrate the application from GitHub Pages to Cloudflare Pages.

## Changes Made

### Configuration Files Created

1. **`.cloudflare/pages.json`** - Cloudflare Pages build configuration (optional)
   - Specifies build command and output directory
   - Sets framework to Next.js

2. **`.nvmrc`** - Node version specification
   - Ensures consistent Node.js version (25) across environments

### Configuration Files Updated

1. **`next.config.js`**
   - Removed GitHub Pages-specific comments
   - Simplified for Cloudflare Pages compatibility
   - Removed `standalone` output (not needed for Cloudflare Pages)

2. **`.gitignore`**
   - Added Cloudflare-specific ignores (`.wrangler/`)

3. **`README.md`**
   - Updated technology stack (JSS instead of Tailwind CSS)
   - Added Cloudflare Pages deployment section
   - Added link to deployment guide

### Documentation Created

1. **`CLOUDFLARE_DEPLOYMENT.md`** - Comprehensive deployment guide
   - Step-by-step instructions for deploying to Cloudflare Pages
   - Troubleshooting tips
   - Configuration details

2. **`.github/workflows/cloudflare-pages.yml`** - Optional GitHub Actions workflow
   - Alternative deployment method using GitHub Actions
   - Requires Cloudflare API tokens

## Key Differences: GitHub Pages vs Cloudflare Pages

### GitHub Pages
- ❌ Only supports static sites
- ❌ API routes don't work
- ✅ Free hosting
- ✅ Simple setup

### Cloudflare Pages
- ✅ Supports Next.js with API routes
- ✅ API routes run on Edge Runtime
- ✅ Global CDN with better performance
- ✅ Automatic HTTPS
- ✅ Preview deployments for PRs
- ✅ Free tier available
- ✅ Better for Next.js applications

## Next Steps

1. **Set up Cloudflare Pages** (see `CLOUDFLARE_DEPLOYMENT.md`)
   - Create account at [dash.cloudflare.com](https://dash.cloudflare.com)
   - Connect your GitHub repository
   - Configure build settings

2. **Update DNS** (if using custom domain)
   - Point your domain to Cloudflare Pages
   - Follow instructions in Cloudflare dashboard

3. **Remove GitHub Pages workflow** (optional)
   - The `.github/workflows/deploy.yml` file can be deleted
   - Or keep it if you want to maintain both deployments

4. **Test API routes**
   - Verify `/api/hello`, `/api/contact`, etc. work correctly
   - Test on both production and preview deployments

## Environment Variables

If you need environment variables:
1. Go to Cloudflare Pages dashboard
2. Navigate to your project → Settings → Environment variables
3. Add variables for Production, Preview, and Development environments

## Benefits of Migration

1. **API Routes Work**: Your Next.js API routes now function properly
2. **Better Performance**: Cloudflare's global CDN provides faster load times
3. **Edge Computing**: API routes run closer to users
4. **Preview Deployments**: Automatic previews for pull requests
5. **Better Developer Experience**: Native Next.js support

## Rollback Plan

If you need to rollback to GitHub Pages:
1. The old workflow (`.github/workflows/deploy.yml`) is still present
2. You may need to configure Next.js for static export:
   ```js
   // next.config.js
   output: 'export'
   ```
3. Note: This will disable API routes

## Support

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Next.js on Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
- [Cloudflare Community](https://community.cloudflare.com/)
