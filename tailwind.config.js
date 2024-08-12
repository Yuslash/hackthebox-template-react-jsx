/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors : {
        'custom-dark': '#0B121F',
        'custom-text': '#A4B1CD',
        'custom-green': '#9FEF00',
        'custom-light-blue': '#1A2332',
      },
    },
  },
  plugins: [],
}

