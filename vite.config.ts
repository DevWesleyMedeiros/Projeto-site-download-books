import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        scripts: path.resolve(__dirname, 'assets-scripts/feedback-screen.js'),
        login: path.resolve(__dirname, 'assets-scripts/login-screen.js'),
        slider: path.resolve(__dirname, 'assets-scripts/slidder.js'),
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
        '@scripts': path.resolve(__dirname, 'assets-scripts'),
        '@scripts/login': path.resolve(__dirname, 'assets-scripts/login-screen'),
        '@scripts/feedback': path.resolve(__dirname, 'assets-scripts/feedback-screen'),
        '@scripts/api': path.resolve(__dirname, 'assets-scripts/API-call'),
        
        '@assets': path.resolve(__dirname, 'assets-images'),
        '@assets/genres': path.resolve(__dirname, 'assets-images-for-genres'),
        '@assets/favicon': path.resolve(__dirname, 'favicon-image'),
        '@assets/nested': path.resolve(__dirname, 'imagens-aninhadas')
      }
  },
  plugins: [],
});
