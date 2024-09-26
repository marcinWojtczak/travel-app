/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#003D5B',
        'steel-blue': '#30638E',
        'teal': '#00798C',
        'red': '#D1495B',
        'yellow': '#EDAE49'
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        lato: ['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
}