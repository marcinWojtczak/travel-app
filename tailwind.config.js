/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deepBlue': '#003D5B',
        'steelBlue': '#30638E',
        'teal': '#00798C',
        'red': '#D1495B',
        'yellow': '#EDAE49'
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}