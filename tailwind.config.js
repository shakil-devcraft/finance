/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "fontFamily": {
        "mplus": ['"M PLUS 1", sans-serif'],
      },
      "colors": {
        "purpleStart": "#772AB3",
        "purpleEnd": "#C753FE"
      }
    },
  },
  plugins: [],
}