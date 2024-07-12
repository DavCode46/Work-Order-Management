import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@utils": "/src/utils",
      "@styles": "/src/styles",
      "@assets": "/src/assets",
      "@hooks": "/src/hooks",
      "@context": "/src/context",
      "@services": "/src/services",
      "@config": "/src/config",
    }
  }
})
