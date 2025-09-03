import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@/components': '/src/components/index.ts',
      '@/hooks': '/src/hooks/index.ts',
      '@/types': '/src/types/index.ts',
      '@/config': '/src/config/index.ts',
      '@/styles': '/src/styles',
      '@/providers': '/src/providers/index.ts',
    }
  }
})
