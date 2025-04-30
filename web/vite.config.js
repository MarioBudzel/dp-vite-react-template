import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    hmr: {
      host: 'localhost'
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
      '@@': path.resolve('./')
    }
  }
});
