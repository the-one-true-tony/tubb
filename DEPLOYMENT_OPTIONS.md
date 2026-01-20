# Deployment Options

This project can be deployed to both Cloudflare Pages and GitHub Pages, but with different capabilities.

## Cloudflare Pages (Recommended) ✅

**Status**: Fully configured and ready to deploy

**Features**:
- ✅ Full Next.js support (SSR, API routes, etc.)
- ✅ API routes work (`/api/*`)
- ✅ Edge Runtime for fast global performance
- ✅ Preview deployments for pull requests
- ✅ Automatic HTTPS
- ✅ Free tier available

**Configuration**: Already set up
- `.cloudflare/pages.json` - Build settings (optional)
- `next.config.js` - Optimized for Cloudflare

**Deploy**: See `CLOUDFLARE_DEPLOYMENT.md`

## GitHub Pages (Static Only) ⚠️

**Status**: Configured but requires changes to enable

**Limitations**:
- ❌ **API routes will NOT work** (GitHub Pages only supports static sites)
- ❌ No server-side rendering
- ❌ No dynamic routes
- ✅ Free hosting
- ✅ Simple setup

**To Enable GitHub Pages Deployment**:

1. **Update `next.config.js`**:
   ```js
   const nextConfig = {
     reactStrictMode: true,
     output: 'export',  // Enable static export
   }
   ```

2. **Remove or comment out API routes**:
   - Delete or move `/src/app/api/` directory
   - Or handle API calls client-side only

3. **The workflow** (`.github/workflows/deploy.yml`) is already configured

**Note**: Once you enable `output: 'export'`, your API routes will stop working. You'll need to either:
- Remove API routes entirely
- Use external API services (like Cloudflare Workers separately)
- Use client-side only API calls

## Recommendation

**Use Cloudflare Pages** for this project because:
1. Your app has API routes (`/api/hello`, `/api/contact`, `/api/statistics`, `/api/variants`)
2. Cloudflare Pages supports full Next.js features
3. Better performance with Edge Runtime
4. No need to modify your code

## Current Configuration

- **Cloudflare Pages**: ✅ Ready to deploy
- **GitHub Pages**: ⚠️ Requires `output: 'export'` and removing API routes

## Switching Between Deployments

### To use Cloudflare Pages only (current setup):
- Keep `next.config.js` as-is (no `output: 'export'`)
- Deploy via Cloudflare dashboard
- API routes will work

### To use GitHub Pages:
1. Uncomment `output: 'export'` in `next.config.js`
2. Remove or disable API routes
3. Push to GitHub - workflow will auto-deploy
4. API routes will NOT work

### To use both:
- Not recommended - they have conflicting requirements
- GitHub Pages needs static export (disables API routes)
- Cloudflare Pages needs dynamic features (enables API routes)

## Summary

| Feature | Cloudflare Pages | GitHub Pages |
|---------|-----------------|--------------|
| API Routes | ✅ Yes | ❌ No |
| SSR | ✅ Yes | ❌ No |
| Static Export | ✅ Optional | ✅ Required |
| Free Tier | ✅ Yes | ✅ Yes |
| CDN | ✅ Global | ⚠️ Limited |
| Preview Deploys | ✅ Yes | ⚠️ Manual |

**Recommendation**: Use Cloudflare Pages for this Next.js application.
