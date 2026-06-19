import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/aman-portfolio/",   // 👈 important for GitHub Pages
  plugins: [react()],
})
