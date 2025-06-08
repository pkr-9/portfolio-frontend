import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { visualizer } from 'rollup-plugin-visualizer'; // Analyze bundle size
import viteCompression from 'vite-plugin-compression'; // Gzip/Brotli compression

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true }), // Optional: opens a report after build
    viteCompression({ algorithm: 'brotliCompress' }), // Compress assets in build
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/variables.scss" as *;`, // Keep only essential SCSS
      },
    },
  },

  server: {
    port: 3000,
    strictPort: true,
    fs: {
      allow: ['..'],
    },
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },

  preview: {
    port: 4173,
    strictPort: true,
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: 'esbuild', // Fast minification
    cssCodeSplit: true, // Splits CSS by component
    sourcemap: false, // Avoid source maps in production unless debugging
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // 🔧 Optional: manually split chunks
        },
      },
    },
  },

  optimizeDeps: {
    include: ['@mui/material', '@emotion/react', '@emotion/styled'],
  },

  define: {
    'process.env': {},
  },

  assetsInclude: ['**/*.svg'],
  publicDir: 'public',
});
