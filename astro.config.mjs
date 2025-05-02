import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import vercel from '@astrojs/vercel'

export default defineConfig({
  adapter: vercel(),
  integrations: [mdx(), react()],
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
})
