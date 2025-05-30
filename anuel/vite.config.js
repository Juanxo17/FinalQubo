import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on mode: development or production
  const env = loadEnv(mode, process.cwd())
  
  return {
    plugins: [react()],
    // Define 'process.env' for legacy code that might still use it
    define: {
      'process.env': {}
    },
    server: {
      port: 5173
    }
  }
})
