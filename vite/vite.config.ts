import { defineConfig } from 'vite'
import apiRoutes from 'vite-plugin-api-routes'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        apiRoutes({}),
    ],
})
