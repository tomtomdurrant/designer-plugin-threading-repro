import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { copyFileSync } from 'fs';

export default defineConfig({
  base: './', // Use relative URLs for assets, so it works when hosted in designer
  plugins: [vue()],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue']
  },
  server: {
    host: '0.0.0.0'
  },
  build: {
    rollupOptions: {
      plugins: [
        {
          name: 'copy-extra-assets',
          generateBundle() {
            copyFileSync('icon.svg', 'dist/icon.svg');
          }
        }
      ]
    }
  }
});
