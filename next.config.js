/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Cloudflare Pages configuration
  // Using @opennextjs/cloudflare adapter for Next.js 15 support
  // This enables full SSR, API routes, and Next.js 15 features on Cloudflare
  // Build script automatically runs OpenNext after Next.js build
  
  // GitHub Pages configuration (static export)
  // Uncomment the line below ONLY if you want to deploy to GitHub Pages
  // Note: This will disable API routes and server-side features
  // output: 'export',
}

module.exports = nextConfig
