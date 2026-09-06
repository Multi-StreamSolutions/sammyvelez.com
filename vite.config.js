import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages hosts project sites below /<repository-name>/.
// Vite uses this prefix for every generated script and stylesheet URL.
export default defineConfig({
  base: '/sammyvelez.com/',
  plugins: [react()],
})
