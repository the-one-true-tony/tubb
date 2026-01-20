# Cloudflare Pages Compatibility Flags

## About `nodejs_compat` Flag

The `nodejs_compat` compatibility flag enables Node.js APIs in Cloudflare Workers, which is required for Next.js 15 to work properly.

## Configuration

### ✅ Already Configured in Code

The flag is **already set** in `wrangler.jsonc`:
```jsonc
{
  "compatibility_date": "2024-09-23",
  "compatibility_flags": ["nodejs_compat"]
}
```

This should be automatically applied when deploying.

### If Flag Doesn't Appear in Dashboard

If you need to manually enable it in the Cloudflare Dashboard:

1. Go to **Workers & Pages → Your Project → Settings → Functions**
2. Look for **Compatibility flags** section
3. **Manually type** `nodejs_compat` in the text field (it may not appear in a dropdown)
4. Add it for both **Production** and **Preview** environments
5. Save settings
6. Trigger a new deployment

**Note**: The flag name must be typed exactly as `nodejs_compat` (no quotes, no spaces).

## Alternative: May Not Be Required

For Next.js projects using the **Next.js framework preset**, Cloudflare may automatically enable Node.js compatibility. If your deployment works without manually setting the flag, you don't need to do anything.

## Verification

To check if the flag is active:
1. Deploy your project
2. Test your API routes (e.g., `/api/hello`)
3. If they work, the flag is active (either automatically or via `wrangler.jsonc`)

## Troubleshooting

### If API Routes Don't Work

1. Check `wrangler.jsonc` has `nodejs_compat` in `compatibility_flags`
2. Try manually adding the flag in Dashboard (type it manually)
3. Ensure compatibility date is `2024-09-23` or later (enables v2 support)

### If Flag Field Doesn't Exist

Some Cloudflare Pages projects may not show the compatibility flags field. In this case:
- The `wrangler.jsonc` configuration should be sufficient
- Cloudflare will read it during deployment
- No manual Dashboard configuration needed

## Summary

- ✅ Flag is configured in `wrangler.jsonc`
- ⚠️ May need manual entry in Dashboard if not automatically applied
- ✅ Framework preset "Next.js" may enable it automatically
- ✅ Test deployment to verify it's working
