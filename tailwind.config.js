/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#172601',
        'green': '#5D9122',
        'light-green': '#B3BC0B',
        'yellow': '#F2E205',
        'light-yellow': '#F2EEAC',
        'dark-yellow': '#A67D03',
        'brown': '#d15712'
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        lato: ['Lato', 'sans-serif'],
        aBeeZee: ['ABeeZee', 'sans-serif']
      },
      backgroundImage: {
        'parallax': 'url("/hero-section.jpg")'
      }
    },
  },
  plugins: [],
}