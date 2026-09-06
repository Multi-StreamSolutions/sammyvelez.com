import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// SammyVelez.com is now the canonical custom domain, so assets must resolve
// from the domain root instead of the old GitHub project-path prefix.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
