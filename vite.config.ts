import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/discount-for-student-dev/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
