import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `
          @import "./node_modules/component-library/src/styles/_tokens.sass"
        `
      }
    }
  },
  resolve: {
    alias: {
      'UI': path.resolve(__dirname, './node_modules/component-library/src/components')
    }
  }
});
