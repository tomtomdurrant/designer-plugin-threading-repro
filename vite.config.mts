import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { designerPythonLoader } from '@disguise-one/designer-pythonapi/loader'

export default defineConfig({
  base: './', // Use relative URLs for assets, so it works when hosted in designer
  plugins: [vue(), designerPythonLoader()],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue']
  },
  server: {
    host: '0.0.0.0'
  }
});
