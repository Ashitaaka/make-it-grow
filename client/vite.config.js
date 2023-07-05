import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      "/api" : "http://localhost:5080/api"
    }
  },

  plugins: [react()],
  server: {
    proxy: {
      // string shorthand: http://localhost:5173/foo -> http://localhost:4567/foo
      '/api': 'http://localhost:5080/api',
    },
  },
});
