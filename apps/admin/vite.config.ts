import { defineConfig, PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
// import commonjs from '@rollup/plugin-commonjs';
// import commonjs from 'vite-plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()] as PluginOption[],
  define: {
    'process.env': process.env,
  },
  server: {
    host: true,
  },
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  // optimizeDeps: {
  //   include: ['@shared/core', '@shared/auth', '@shared/environment'],
  // },
  // build: {
  //   commonjsOptions: {
  //     include: ['@shared/core', '@shared/auth', '@shared/environment'],
  //   },
  // },
});
