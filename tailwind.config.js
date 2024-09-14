/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,css}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'black': '#040303',
      'marinegreen': '#387D7A',
      'lightgreen': '#2BC016',
      'grey-bg': '#1E1E1E',
      'yellow': '#EDDA00',
    },
    extend: {
      fontFamily: {
        'mukta': ['Mukta'],
      }
    },
  },
  plugins: [],
}

