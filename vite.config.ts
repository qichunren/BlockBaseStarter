import path from "path"
import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'

export default defineConfig({
  plugins: [
    RubyPlugin(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./app/frontend"),
    }
  },
})
