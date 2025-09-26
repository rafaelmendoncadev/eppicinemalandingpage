import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

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
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Bundle critical components together to reduce request chains
          'app-core': [
            './src/components/Navbar.tsx',
            './src/components/Hero.tsx', 
            './src/contexts/LanguageContext.tsx',
            './src/components/LanguageSelector.tsx'
          ],
          // Bundle UI components together
          'ui-components': [
            './src/components/ui/button.tsx',
            './src/components/ui/toast.tsx',
            './src/components/ui/toaster.tsx'
          ]
        }
      }
    },
    // Improve chunk loading
    chunkSizeWarningLimit: 600,
    // Enable resource hints
    cssCodeSplit: false
  }
}));
