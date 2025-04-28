import { defineConfig } from 'vite';
import { resolve } from "path";
import { createHtmlPlugin } from "vite-plugin-html";
import path from "path";
// import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    // eslintPlugin(),
    createHtmlPlugin({
      inject: {
        data: {
          title: "Download de Livros",
        },
      },
    })
  ],
  root: "./",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./index.html"),
      },
      output: {
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg|ico|webp|avif)$/.test(name || "")) {
            return "assets/images/[name]-[hash][extname]";
          }
          if (/\.(css)$/.test(name || "")) {
            return "assets/styles/[name]-[hash][extname]";
          }
          if (/\.(ttf|otf|woff|woff2)$/.test(name || "")) {
            return "assets/fonts/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
        chunkFileNames: "chunks/[name]-[hash].js",
        entryFileNames: "scripts/[name]-[hash].js",
      },
    },
  },
  resolve: {
    alias: {
      "@assets": path.resolve("images"),
      "@scripts": path.resolve("scripts"),
      "@apiCall": path.resolve("API"),
      "@styles": path.resolve("styles"),
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
