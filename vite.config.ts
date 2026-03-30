import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    host: '0.0.0.0', // escuta em todas as interfaces
    port: 4173,
  },
  preview: {
    allowedHosts: ['www.aemconsulting.com.br'], // libera seu domínio DDNS
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
