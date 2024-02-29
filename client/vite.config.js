import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    rollupOptions: {
      plugins: [
        copy({
          targets: [
            { src: 'static/*', dest: 'dist' }
          ],
          hook: 'writeBundle' // Ensures the files are copied after the bundle is written
        })
      ]
    }
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3001'
    }
  }
});

