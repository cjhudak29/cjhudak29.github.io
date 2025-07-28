// vite.config.js
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// If using a project site:
export default defineConfig({
  plugins: [react()],
  base: '/' // <- important!
})
