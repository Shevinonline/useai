import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 3500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (
              id.includes('react') ||
              id.includes('react-dom') ||
              id.includes('react-router') ||
              id.includes('lucide-react') ||
              id.includes('scheduler')
            ) {
              return 'vendor-ui';
            }
            return 'vendor-misc';
          }
          if (id.includes('/src/data/')) {
            return 'roadmap-data';
          }
        }
      }
    }
  }
})
