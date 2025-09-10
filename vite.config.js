import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),       // Enables new JSX transform (no need to import React)
    tailwindcss(), // Enables Tailwind
  ],
})
