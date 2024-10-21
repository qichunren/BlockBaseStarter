/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/views/**/*.html.erb",
    "./app/helpers/**/*.rb",
    "./app/assets/stylesheets/**/*.css",
    "./app/frontend/**/*.{js,jsx,css,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

