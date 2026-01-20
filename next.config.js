/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Cloudflare Pages configuration
  // Cloudflare Pages supports Next.js natively
  // API routes automatically run on Edge Runtime
  
  // GitHub Pages configuration (static export)
  // Uncomment the line below to enable static export for GitHub Pages
  // Note: This will disable API routes and server-side features
  // output: 'export',
  
  // For Cloudflare Pages, leave output commented out
  // Cloudflare Pages handles Next.js builds automatically
}

module.exports = nextConfig
