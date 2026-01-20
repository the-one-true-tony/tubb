# Troubleshooting Blank Page on Cloudflare Pages

## Quick Checks

1. **Open Browser DevTools (F12)**
   - Check the **Console** tab for JavaScript errors
   - Check the **Network** tab to see if files are loading (look for 404s or failed requests)

2. **Check Cloudflare Dashboard**
   - Go to **Workers & Pages → Your Project → Deployments**
   - Click on the latest deployment
   - Check for any runtime errors in the logs

## Common Issues

### 1. JavaScript Errors
If you see errors in the console, they might be related to:
- Missing dependencies
- Runtime compatibility issues
- Client-side rendering errors

### 2. Static Assets Not Loading
Check if `/_next/static/` files are loading correctly. If they're 404:
- Verify `_routes.json` configuration
- Check if OpenNext generated the correct output

### 3. Worker Not Invoked
If the Worker isn't being invoked:
- Verify Framework preset is set to `Next.js` in Cloudflare Dashboard
- Check that `nodejs_compat` compatibility flag is enabled
- Ensure build output directory is set to `.open-next`

### 4. OpenNext Routing Conflict
OpenNext generates its own routing. If `_routes.json` in `public/` is conflicting:
- OpenNext should generate routing automatically
- The manual `_routes.json` might need to be removed or updated

## Next Steps

1. Check browser console for specific errors
2. Verify Cloudflare Dashboard settings
3. Check if static assets are loading
4. Review deployment logs for runtime errors
