# Finding Your Cloudflare Pages Project Name

To find the exact project name that Wrangler expects, run:

```bash
npx wrangler pages project list
```

This will show all your Cloudflare Pages projects and their exact names.

Then update the `deploy:cf` script in `package.json` with the correct project name.

Alternatively, you can check in the Cloudflare Dashboard:
1. Go to Workers & Pages → Pages
2. Click on your project
3. Go to Settings → General
4. Look at the "Project name" field - this is what Wrangler uses
