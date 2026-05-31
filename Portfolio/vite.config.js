import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// `base` only applies to the production build so the site works when served
// from https://nishantdixit1.github.io/NishantPortfolio/ . Local dev stays at "/".
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/NishantPortfolio/' : '/',
}))
