import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
      },
      output: {
        entryFileNames: 'index.js', 
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: ({ name }) => {
          if (name && name.endsWith('.css')) {
            return 'style.css';
          }
          if (name && /\.(jpe?g|png|gif|svg|webp|ttf|woff|woff2)$/.test(name)) {
            return 'assets/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  },
  server: {
    open: true,
    port: 3000,
  },
  preview: {
    port: 4173,
  },
  resolve: {
    alias: {
      '@scripts': path.resolve(__dirname, 'assets-scripts', 'API-call'),
      '@styles': path.resolve(__dirname, 'content-style'),
      '@assets': path.resolve(__dirname, 'assets-images', 'assets-images-for-genres', 'favicon-image', 'imagens-aninhadas'),
    },
  },
  plugins: [],
});
