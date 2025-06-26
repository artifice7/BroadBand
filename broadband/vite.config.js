import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks for better caching
          vendor: ['react', 'react-dom', 'react-router-dom'],
          swiper: ['swiper'],
          animations: ['aos'],
          utils: ['zod', 'react-scroll']
        }
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Enable source maps for production debugging
    sourcemap: false,
    // Minify for production
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  // Enable compression and optimization
  server: {
    open: true
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'swiper', 'aos']
  }
})
