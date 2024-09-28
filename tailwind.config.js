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
        'yellow': '#EDAE49',
        'lightBlue': '#7198b8',
        'darkBlue': '#385c7e',
        'darkGreen': '#182c26',
        'bottleGreen': '#495d30',
        'green': '#4a4b0c',
        'brown': '#ab5f54',
        'darkBrown': '#383024',
        'medlar': '#cfbea3',
        'orange': '#c8560d',
        'lightOrange': '#c8560d',
        'gray': "#acb8c0"
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}