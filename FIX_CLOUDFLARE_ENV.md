# Fix: Environment Variables Not Working in Production

## The Problem

`NEXT_PUBLIC_*` variables are embedded at **build time** in Next.js. If they're not set during the Cloudflare Pages build, they won't be available in production.

## Solution: Set Variables in Cloudflare Dashboard

### Step-by-Step Instructions

1. **Go to Cloudflare Dashboard**
   - Visit: https://dash.cloudflare.com
   - Log in to your account

2. **Navigate to Your Project**
   - Click **Workers & Pages** in the sidebar
   - Find and click on your `tubb` project

3. **Go to Settings**
   - Click the **Settings** tab
   - Scroll down to **Environment Variables** section

4. **Add Variables for Production**
   
   Click **Add variable** and add each one:

   **Variable 1:**
   - **Variable name:** `NEXT_PUBLIC_GOOGLE_PLACES_API_KEY`
   - **Value:** `AIzaSyAf-zHMPUZ3_2fLpw_8qNNd8KfYmKCjENw` (or your actual key)
   - **Environment:** Select **Production** (and optionally Preview)
   - Click **Save**

   **Variable 2:**
   - **Variable name:** `NEXT_PUBLIC_FB_GROUP_PASSWORD`
   - **Value:** `tubbfamily` (or your actual password)
   - **Environment:** Select **Production** (and optionally Preview)
   - Click **Save**

   **Variable 3 (Optional):**
   - **Variable name:** `USERS_API_KEY`
   - **Value:** Your API key (if you want to use it)
   - **Environment:** Select **Production**
   - Click **Save**

5. **Redeploy**
   - After adding variables, you **must redeploy** for them to take effect
   - Go to **Deployments** tab
   - Click **Retry deployment** on the latest deployment, OR
   - Push a new commit to trigger a new build

## Verify Variables Are Set

### Check Build Logs

1. Go to **Deployments** tab
2. Click on the latest deployment
3. Check the build logs - you should see the build process
4. Variables should be available during the build

### Test in Production

After redeploying, test:
- `/fb-group` page should accept the password
- Google Maps should load (check browser console for API key errors)

## Alternative: Use wrangler.toml (Less Secure)

If Dashboard doesn't work, you can add to `wrangler.toml`:

```toml
[vars]
NEXTJS_ENV = "production"
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY = "your-key-here"
NEXT_PUBLIC_FB_GROUP_PASSWORD = "your-password-here"
```

**⚠️ Warning:** These will be committed to git. Only use if your repo is private or you're okay with exposing these values.

## Troubleshooting

### Variables still not working after setting in Dashboard?

1. **Check variable names** - Must match exactly (case-sensitive):
   - `NEXT_PUBLIC_GOOGLE_PLACES_API_KEY` ✅
   - `NEXT_PUBLIC_google_places_api_key` ❌

2. **Check environment** - Make sure you selected **Production** environment

3. **Redeploy required** - Variables are only applied on new deployments
   - Trigger a new deployment after adding variables

4. **Check build logs** - Look for errors about missing environment variables

5. **Verify in code** - Add temporary logging:
   ```javascript
   console.log('Password:', process.env.NEXT_PUBLIC_FB_GROUP_PASSWORD ? 'SET' : 'NOT SET');
   ```

### Still Not Working?

If variables still don't work after following these steps:

1. **Check Cloudflare Pages documentation** for your specific setup
2. **Contact Cloudflare Support** - They can verify your Pages configuration
3. **Use wrangler.toml as fallback** - Add variables there temporarily to get it working

## Quick Checklist

- [ ] Variables set in Cloudflare Dashboard
- [ ] Variables set for **Production** environment
- [ ] Variable names match exactly (case-sensitive)
- [ ] Redeployed after adding variables
- [ ] Checked build logs for errors
- [ ] Tested in production

## Current Variables Needed

Based on your code:

1. `NEXT_PUBLIC_GOOGLE_PLACES_API_KEY` - Used in Contact.jsx and fb-group/page.jsx
2. `NEXT_PUBLIC_FB_GROUP_PASSWORD` - Used in fb-group/page.jsx (defaults to 'tubulinopathy2024' if not set)
3. `USERS_API_KEY` - Optional, for /api/users authentication
