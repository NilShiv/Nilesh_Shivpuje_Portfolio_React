import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/nil-port", // Adjust this if needed for proper routing
  build: {
    outDir: "dist", // Ensure the output folder is explicitly set to "dist"
    emptyOutDir: true, // Clean the output directory before building
    sourcemap: true, // Optional: Helps with debugging
  },
})
