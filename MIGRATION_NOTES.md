# Migration from Vite to Next.js

This project has been migrated from Vite + React to Next.js to add backend API functionality.

## What Changed

### New Files
- `next.config.js` - Next.js configuration
- `src/app/layout.jsx` - Root layout (replaces index.html metadata)
- `src/app/page.jsx` - Home page (replaces App.jsx)
- `src/app/globals.css` - Global styles (moved from src/index.css)
- `src/app/api/` - API routes directory
- `.eslintrc.json` - Updated ESLint config for Next.js

### Updated Files
- `package.json` - Updated dependencies and scripts
- `tailwind.config.js` - Updated content paths for Next.js
- `.gitignore` - Added Next.js build directories
- Components - Added 'use client' directives where needed

### Files No Longer Used
- `vite.config.js` - Can be removed (kept for reference)
- `index.html` - Replaced by Next.js layout
- `src/main.jsx` - Replaced by Next.js app structure
- `src/App.jsx` - Replaced by `src/app/page.jsx`
- `eslint.config.js` - Replaced by `.eslintrc.json`

## Next Steps

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Test the Application**:
   ```bash
   npm run dev
   ```

3. **Test API Routes**:
   - Visit `http://localhost:3000/api/hello`
   - Test contact form: `POST /api/contact`
   - Fetch statistics: `GET /api/statistics`
   - Fetch variants: `GET /api/variants`

4. **Optional Cleanup**:
   - Remove `vite.config.js` if no longer needed
   - Remove `index.html` if no longer needed
   - Remove `src/main.jsx` if no longer needed
   - Remove `src/App.jsx` if no longer needed
   - Remove old `eslint.config.js` if no longer needed

## Benefits of Next.js

- ✅ Server-side rendering (SSR) for better SEO
- ✅ API routes for backend functionality
- ✅ Built-in optimizations (image optimization, code splitting, etc.)
- ✅ Better performance and developer experience
- ✅ Easy deployment to Vercel, Netlify, or any Node.js hosting
