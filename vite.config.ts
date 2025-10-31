import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import type { Plugin } from 'vite';

// Plugin to inject preload hints for critical resources
function preloadPlugin(): Plugin {
  return {
    name: 'vite-plugin-preload',
    transformIndexHtml(html, ctx) {
      // Only run during build
      if (!ctx.bundle) return html;
      
      const preloadTags: string[] = [];
      
      // Find all chunks and assets
      for (const [, chunk] of Object.entries(ctx.bundle)) {
        if (chunk.type === 'chunk') {
          // Preload entry chunks and critical vendor chunks
          if (chunk.isEntry || chunk.name === 'vendor' || chunk.name === 'ui') {
            preloadTags.push(
              `<link rel="modulepreload" href="/${chunk.fileName}" crossorigin>`
            );
          }
        } else if (chunk.type === 'asset' && chunk.fileName.endsWith('.css')) {
          // Preload CSS files
          preloadTags.push(
            `<link rel="preload" href="/${chunk.fileName}" as="style" crossorigin>`
          );
        }
      }
      
      // Inject preload tags before the closing </head>
      return html.replace('</head>', `${preloadTags.join('\n    ')}\n  </head>`);
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    preloadPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimize build output for better caching
    rollupOptions: {
      output: {
        // Better chunking strategy for caching
        manualChunks: {
          // Vendor chunk for stable third-party libraries
          vendor: ['react', 'react-dom'],
          // UI components chunk
          ui: ['@radix-ui/react-slot', '@radix-ui/react-toast', 'lucide-react'],
        },
        // Optimize asset file names for long-term caching
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return `assets/[name]-[hash][extname]`;
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/css/i.test(ext)) {
            return `assets/css/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    // Enable CSS code splitting for better caching
    cssCodeSplit: true,
    // Optimize asset inclusion threshold
    assetsInlineLimit: 4096,
    // Target modern browsers for better optimization
    target: 'es2018',
    // Enable minification for production
    minify: mode === 'production' ? 'esbuild' : false,
    // Generate source maps for debugging but optimize for production
    sourcemap: mode === 'development',
  },
  // Optimize dependencies for better caching
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@radix-ui/react-slot',
      '@radix-ui/react-toast',
      'lucide-react',
      'class-variance-authority',
      'clsx',
      'tailwind-merge'
    ],
  },
}));
