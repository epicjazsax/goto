import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Force Vite to watch the JSON file
      ignored: ['!**/app-database.json']
    }
  }
})
