# Cloudflare Pages Auto-Deploy Troubleshooting

If your Cloudflare Pages project isn't auto-building when you push to GitHub, follow these steps:

## Step 1: Verify Repository Connection

1. Go to Cloudflare Dashboard → **Workers & Pages** → Your Project
2. Click **Settings** → **Builds & deployments**
3. Verify:
   - ✅ Repository is connected
   - ✅ Branch is set to `main` (or your default branch)
   - ✅ Production branch is `main`

## Step 2: Check Build Settings

In Cloudflare Dashboard → Your Project → **Settings** → **Builds & deployments**:

**Required Settings:**
- **Framework preset**: `Next.js` (or leave blank for auto-detect)
- **Build command**: `npm run build`
- **Build output directory**: Leave **EMPTY** or use `.next` (Cloudflare handles Next.js automatically)
- **Root directory**: `/` (leave as default)
- **Node version**: `25` (or `20` minimum - Cloudflare Pages/Wrangler requires Node 20+)

**Important**: For Next.js, Cloudflare Pages handles the output directory automatically. Don't manually set it unless you're doing a static export.

## Step 3: Verify Webhook is Active

1. Go to Cloudflare Dashboard → Your Project → **Settings** → **Builds & deployments**
2. Scroll to **Build hooks** section
3. Check if there's a webhook listed
4. If missing, the repository connection might be broken

## Step 4: Reconnect Repository (If Needed)

If webhook is missing:

1. Go to Cloudflare Dashboard → Your Project → **Settings** → **Builds & deployments**
2. Click **Disconnect** (if connected)
3. Click **Connect to Git**
4. Re-authenticate with GitHub
5. Select your repository again
6. Configure build settings:
   - Framework: Next.js
   - Build command: `npm run build`
   - Output directory: Leave empty (or `.next`)
   - Node version: 25 (or 20 minimum)
7. Click **Save and Deploy**

## Step 5: Check GitHub Permissions

1. Go to GitHub → Your Repository → **Settings** → **Webhooks**
2. Look for Cloudflare webhook
3. Verify it's active and has recent deliveries
4. If missing, reconnect repository in Cloudflare

## Step 6: Manual Trigger Test

1. Make a small change (like updating README)
2. Push to `main` branch
3. Check Cloudflare Dashboard → **Deployments** tab
4. You should see a new deployment start automatically

## Step 7: Check Build Logs

If builds are triggering but failing:

1. Go to Cloudflare Dashboard → Your Project → **Deployments**
2. Click on a failed deployment
3. Check the build logs for errors
4. Common issues:
   - Missing dependencies
   - Wrong Node version
   - Build command errors

## Common Issues & Fixes

### Issue: "No deployments found"
**Fix**: Repository not connected or webhook not set up. Reconnect repository.

### Issue: "Build command failed"
**Fix**: Check build logs. Common causes:
- Missing `package.json` dependencies
- Wrong Node version
- Build script errors

### Issue: "Output directory not found"
**Fix**: For Next.js, leave output directory **empty**. Cloudflare auto-detects it.

### Issue: "Framework not detected"
**Fix**: Set framework preset to `Next.js` manually in build settings.

## Quick Checklist

- [ ] Repository connected in Cloudflare Dashboard
- [ ] Production branch set to `main`
- [ ] Framework preset: `Next.js`
- [ ] Build command: `npm run build`
- [ ] Output directory: Empty (or `.next`)
- [ ] Node version: 25 (or 20 minimum - required)
- [ ] GitHub webhook exists and is active
- [ ] Recent push to `main` branch

## Still Not Working?

1. **Check Cloudflare Status**: [status.cloudflare.com](https://www.cloudflarestatus.com/)
2. **Verify GitHub Integration**: Make sure Cloudflare has access to your repository
3. **Check Build Logs**: Look for specific error messages
4. **Try Manual Deploy**: Use "Retry deployment" to test build process
5. **Contact Support**: Cloudflare Community or support

## Alternative: Use GitHub Actions

If auto-deploy still doesn't work, you can use the GitHub Actions workflow:

1. The `.github/workflows/cloudflare-pages.yml` file is already set up
2. Add secrets to GitHub:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
3. Push to trigger workflow

See the workflow file for details.
