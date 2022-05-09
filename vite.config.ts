/*
 * @Date: 2022-02-16 14:42:15
 * @LastEditors: Fullsize
 * @LastEditTime: 2022-05-09 14:59:28
 * @FilePath: /mobile-supermarket/vite.config.ts
 * @Author: Fullsize
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{
      find: '@images',
      replacement: '/assets/images',
      customResolver: ['.png', '.jpg', '.gif']
    },
    {
      find: '@src',
      replacement: '/src',
      customResolver: ['.jsx', '.tsx', '.ts', '.js']
    },
    {
      find: '@js',
      replacement: '/assets/js',
      customResolver: ['.jsx', '.tsx', '.ts', '.js']
    }
    ]
  },
  server: {
    port: 4000,
    open: '/#/'
  },
  css: {
    postcss: {
      plugins: [require('postcss-px-to-viewport')({
        viewportWidth: 375,
        viewportUnit: 'vmin',
        minPixelValue:1,
        exclude:/node_modules/
      })]
    }
  },
  envPrefix: 'VITE_'
})
