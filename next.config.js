/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Cloudflare Pages configuration
  // Cloudflare Pages supports Next.js natively with SSR and API routes
  // API routes automatically run on Edge Runtime
  // No additional configuration needed - Cloudflare handles everything
  
  // GitHub Pages configuration (static export)
  // Uncomment the line below ONLY if you want to deploy to GitHub Pages
  // Note: This will disable API routes and server-side features
  // output: 'export',
}

module.exports = nextConfig
