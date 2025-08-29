import {defineConfig} from'vite'
import mkcert from'vite-plugin-mkcert'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.mov'],
  base: '/nopare-front-end/',
  server: {
    https: true
  },
  plugins: [mkcert(), react()]
})
