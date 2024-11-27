import { defineConfig } from 'vite';
import { resolve } from 'path';
import eslintPlugin from 'vite-plugin-eslint';
import { createHtmlPlugin } from 'vite-plugin-html'; 

export default defineConfig({
    plugins: [
        eslintPlugin(), // Linter para manter o código limpo
        createHtmlPlugin({
          inject: {
            data: {
              title: 'Download de Livros' // Correção na estrutura
            }
          }
        })
      ],
  root: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, './index.html'),
        feedback: resolve(__dirname, 'assets-scripts/feedback-screen.js'),
        login: resolve(__dirname, 'assets-scripts/login-screen.js'),
        slidders: resolve(__dirname, 'assets-scripts/slidders.js'),
        styles: resolve(__dirname, 'content-style/main.css'),
      },
      output: {
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg|ico|webp|avif)$/.test(name || '')) {
            return 'assets/images/[name]-[hash][extname]';
          }
          if (/\.(css)$/.test(name || '')) {
            return 'assets/styles/[name]-[hash][extname]';
          }
          if (/\.(ttf|otf|woff|woff2)$/.test(name || '')) {
            return 'assets/fonts/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        chunkFileNames: 'chunks/[name]-[hash].js',
        entryFileNames: 'scripts/[name]-[hash].js',
      },
    },
  },
  resolve: {
    alias: {
      '@assets': '/assets-images',
      '@scripts': '/assets-scripts',
      '@styles': '/content-style',
    },
  },
  server: {
    open: true,
    port: 3000,
  },
  preview: {
    port: 4173,
  },
});
