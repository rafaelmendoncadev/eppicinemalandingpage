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
          // Preload entry chunks first (highest priority)
          if (chunk.isEntry) {
            preloadTags.unshift(
              `<link rel="modulepreload" href="/${chunk.fileName}" as="script" crossorigin>`
            );
          }
          // Then preload critical vendor chunks
          else if (chunk.name === 'vendor' || chunk.name === 'ui') {
            preloadTags.push(
              `<link rel="modulepreload" href="/${chunk.fileName}" as="script" crossorigin>`
            );
          }
        } else if (chunk.type === 'asset' && chunk.fileName.endsWith('.css')) {
          // Preload CSS files with highest priority (before scripts)
          preloadTags.unshift(
            `<link rel="preload" href="/${chunk.fileName}" as="style" crossorigin>`
          );
        }
      }
      
      // Inject preload tags right after meta tags for earliest discovery
      // This ensures the browser discovers these resources before parsing the rest of the HTML
      const metaEndIndex = html.lastIndexOf('</head>');
      if (metaEndIndex > 0) {
        return html.slice(0, metaEndIndex) + 
               '\n    <!-- Preload critical resources -->\n    ' + 
               preloadTags.join('\n    ') + 
               '\n  ' + 
               html.slice(metaEndIndex);
      }
      
      return html;
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
        // Aggressive chunking strategy to reduce unused JavaScript
        manualChunks: (id) => {
          // Vendor chunks - separate stable dependencies
          if (id.includes('node_modules')) {
            // React core
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor';
            }
            // Radix UI components - split by component for lazy loading
            if (id.includes('@radix-ui')) {
              const match = id.match(/@radix-ui\/react-([^/]+)/);
              if (match) return `ui-${match[1]}`;
              return 'ui';
            }
            // Lucide icons - separate chunk
            if (id.includes('lucide-react')) {
              return 'icons';
            }
            // Router
            if (id.includes('react-router-dom')) {
              return 'router';
            }
            // Other utilities
            if (id.includes('clsx') || id.includes('tailwind-merge') || id.includes('class-variance-authority')) {
              return 'utils';
            }
            // Everything else goes to vendor
            return 'vendor-misc';
          }
          
          // Application code splitting
          if (id.includes('/src/components/')) {
            // Extract component name for granular splitting
            const match = id.match(/\/components\/([^/]+)\./);
            if (match && !match[1].startsWith('ui')) {
              return `component-${match[1].toLowerCase()}`;
            }
          }
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
    // Target modern browsers for better tree shaking
    target: 'es2020',
    // Enable minification for production with aggressive settings
    minify: mode === 'production' ? 'esbuild' : false,
    // Generate source maps for debugging but optimize for production
    sourcemap: mode === 'development',
    // Enable more aggressive tree shaking
    modulePreload: {
      polyfill: false,
    },
  },
  // Optimize dependencies for better caching and tree shaking
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
    ],
    exclude: [
      // Exclude large dependencies that should be loaded on-demand
      '@radix-ui/react-alert-dialog',
      '@radix-ui/react-dialog',
      '@radix-ui/react-separator',
    ],
  },
  // Enable esbuild optimization for better tree shaking
  esbuild: {
    treeShaking: true,
    legalComments: 'none',
    minifyIdentifiers: mode === 'production',
    minifySyntax: mode === 'production',
    minifyWhitespace: mode === 'production',
  },
}));
