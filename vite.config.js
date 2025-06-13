import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // все запросы к /api/... попадут на https://api.tutor.donater.dev
      '/api': {
        target: 'https://api.tutor.donater.dev',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path,
      },
    },
  },
});
