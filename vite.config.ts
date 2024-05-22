import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Configura la base URL
  server: {
    port: 5173, // Configura el puerto de desarrollo si es necesario
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: 'dist', // Configuración de la carpeta de salida
    sourcemap: true, // Incluye sourcemaps si necesitas para depuración
  },
})
