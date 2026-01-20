# Cloudflare Pages Deployment Guide

This guide will help you deploy your Next.js application to Cloudflare Pages.

## Prerequisites

1. A Cloudflare account (free tier works)
2. Your repository connected to Cloudflare Pages (via GitHub/GitLab/Bitbucket)

## Deployment Steps

### Option 1: Deploy via Cloudflare Dashboard (Recommended)

1. **Log in to Cloudflare Dashboard**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Navigate to **Workers & Pages** → **Pages**

2. **Create a New Project**
   - Click **Create a project**
   - Connect your Git repository (GitHub/GitLab/Bitbucket)
   - Select your repository

3. **Configure Build Settings** (See `CLOUDFLARE_BUILD_SETTINGS.md` for details)
   - **Framework preset**: `Next.js` (or leave blank for auto-detect)
   - **Build command**: `npm run build`
   - **Build output directory**: **LEAVE EMPTY** ⚠️ (Do NOT set to `.next` - Cloudflare handles this automatically)
   - **Root directory**: `/` (leave as default)
   - **Node version**: `25` (or `20` minimum)
   
   **Critical**: Never set the output directory for Next.js. Cloudflare Pages handles it automatically. Setting it manually will cause deployment failures.

4. **Environment Variables** (if needed)
   - Add any environment variables in the dashboard
   - These will be available during build and runtime

5. **Deploy**
   - Click **Save and Deploy**
   - Cloudflare will build and deploy your site automatically

### Option 2: Deploy via Cloudflare Dashboard (Recommended)

The Cloudflare Dashboard is the easiest way to deploy. Just connect your GitHub repository and Cloudflare will automatically build and deploy on every push to `main`.

## Configuration Files

- **`.cloudflare/pages.json`**: Pages-specific build configuration (optional)
- **`next.config.js`**: Updated for Cloudflare Pages compatibility

## API Routes

Your Next.js API routes (`/api/*`) will automatically work on Cloudflare Pages:
- They run on Cloudflare's Edge Network
- No additional configuration needed
- Edge Runtime is automatically used

## Custom Domain

1. In Cloudflare Pages dashboard, go to your project
2. Click **Custom domains**
3. Add your domain
4. Follow DNS configuration instructions

## Environment Variables

Set environment variables in Cloudflare Pages dashboard:
1. Go to your project → **Settings** → **Environment variables**
2. Add variables for production, preview, and development
3. Variables are available as `process.env.VARIABLE_NAME`

## Continuous Deployment

Cloudflare Pages automatically deploys:
- **Production**: On push to `main` branch
- **Preview**: On pull requests and other branches

## Build Settings Summary

- **Framework**: Next.js
- **Build command**: `npm run build`
- **Output directory**: Leave **EMPTY** (auto-detected for Next.js)
- **Node version**: 25 (or 20 minimum - required for Cloudflare Pages)

## Troubleshooting Auto-Deploy

If deployments aren't triggering automatically, see [CLOUDFLARE_TROUBLESHOOTING.md](./CLOUDFLARE_TROUBLESHOOTING.md) for detailed steps.

## Troubleshooting

### Build Fails
- Check Node version (should be 18 or 20)
- Verify all dependencies are in `package.json`
- Check build logs in Cloudflare dashboard

### API Routes Not Working
- Ensure routes are in `src/app/api/` directory
- Check that routes export proper handlers (GET, POST, etc.)
- Verify routes use Edge-compatible code (no Node.js-specific APIs)

### Assets Not Loading
- Ensure static files are in `public/` directory
- Check that paths are relative, not absolute
- Verify `next.config.js` doesn't have conflicting settings

## Migration from GitHub Pages

Differences:
- ✅ API routes now work (GitHub Pages only supports static)
- ✅ Better performance with Cloudflare's CDN
- ✅ Automatic HTTPS
- ✅ Preview deployments for PRs
- ✅ No need for `basePath` configuration

## Support

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Next.js on Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
