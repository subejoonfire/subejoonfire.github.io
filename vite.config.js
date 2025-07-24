import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable React Fast Refresh
      fastRefresh: true,
      // Include .jsx files
      include: "**/*.{jsx,js}",
    })
  ],

  // Development server configuration
  server: {
    port: 3000,
    open: true,
    cors: true,
    hmr: {
      overlay: true
    }
  },

  // Preview server configuration
  preview: {
    port: 4173,
    open: true
  },

  // Build optimizations
  build: {
    // Output directory
    outDir: 'dist',
    
    // Generate source maps for debugging
    sourcemap: false,
    
    // Minify output
    minify: 'terser',
    
    // Terser options for better minification
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 2
      },
      mangle: {
        safari10: true
      },
      format: {
        comments: false
      }
    },

    // Rollup options
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      },
      
      output: {
        // Code splitting strategy
        manualChunks: {
          // Vendor chunk for React and related libraries
          vendor: ['react', 'react-dom'],
          
          // Utils chunk for utility functions
          utils: ['./src/utils']
        },
        
        // Asset naming
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const extension = info[info.length - 1]
          
          if (/\.(woff|woff2|eot|ttf|otf)$/.test(assetInfo.name)) {
            return `fonts/[name]-[hash][extname]`
          }
          
          if (/\.(png|jpg|jpeg|gif|svg|webp|avif)$/.test(assetInfo.name)) {
            return `images/[name]-[hash][extname]`
          }
          
          if (extension === 'css') {
            return `css/[name]-[hash][extname]`
          }
          
          return `assets/[name]-[hash][extname]`
        },
        
        // Chunk naming
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js'
      }
    },

    // Chunk size warning limit (in kB)
    chunkSizeWarningLimit: 1000,

    // CSS code splitting
    cssCodeSplit: true,

    // Emit manifest for asset tracking
    manifest: true,

    // Report compressed size
    reportCompressedSize: true
  },

  // CSS configuration
  css: {
    // CSS modules configuration
    modules: {
      localsConvention: 'camelCase'
    },
    
    // PostCSS configuration
    postcss: {
      plugins: []
    },

    // CSS preprocessing
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles/variables.scss";`
      }
    },

    // Dev source maps
    devSourcemap: true
  },

  // Resolve configuration
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@assets': resolve(__dirname, 'src/assets')
    },
    
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },

  // Define global constants
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development')
  },

  // Optimization configuration
  optimizeDeps: {
    // Include dependencies for pre-bundling
    include: [
      'react',
      'react-dom',
      'react/jsx-runtime'
    ],
    
    // Exclude dependencies from pre-bundling
    exclude: [],

    // Force dependency pre-bundling
    force: false
  },

  // Environment variables configuration
  envPrefix: 'VITE_',
  envDir: '.',

  // Base public path
  base: './',

  // Asset handling
  assetsInclude: [
    '**/*.png',
    '**/*.jpg',
    '**/*.jpeg',
    '**/*.gif',
    '**/*.svg',
    '**/*.webp',
    '**/*.avif',
    '**/*.woff',
    '**/*.woff2',
    '**/*.eot',
    '**/*.ttf',
    '**/*.otf'
  ],

  // Experimental features
  experimental: {
    // Enable build optimizations
    buildAdvancedBaseOptions: true
  },

  // Worker configuration
  worker: {
    format: 'es',
    plugins: []
  },

  // Performance monitoring
  esbuild: {
    // Target modern browsers
    target: 'es2020',
    
    // JSX configuration
    jsx: 'automatic',
    
    // Tree shaking
    treeShaking: true,
    
    // Minify syntax
    minifySyntax: true,
    
    // Minify whitespace
    minifyWhitespace: true,
    
    // Minify identifiers
    minifyIdentifiers: true,

    // Legal comments
    legalComments: 'none'
  }
})