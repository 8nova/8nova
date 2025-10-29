import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // use relative asset paths so built `dist` can be served from any path
  // without hard-coded `/8nova/` prefix that causes 404s
  base: './',
  plugins: [react()],
})