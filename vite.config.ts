import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  server: {
    port: 5173,
    host: true
  },
  build: {
    target: 'esnext',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'react-vendor';
            }
            if (id.includes('framer-motion')) {
              return 'framer-motion';
            }
            if (id.includes('gsap') || id.includes('lenis')) {
              return 'animation-vendor';
            }
            if (id.includes('lucide-react')) {
              return 'icons';
            }
          }
          if (id.includes('photoData')) {
            return 'photo-data';
          }
        }
      }
    },
    chunkSizeWarningLimit: 600,
  }
});
