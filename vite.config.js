import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use '/tubb/' for GitHub Pages subdirectory, or '/' for custom domain
  base: process.env.NODE_ENV === 'production' && !process.env.CUSTOM_DOMAIN ? '/tubb/' : '/',
})
