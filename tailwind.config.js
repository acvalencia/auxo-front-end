const colors = require('tailwindcss/colors')


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      greenAuxo: '#00FF85',
      greenBorderAuxo: '#DCDCDC',
      blueBorderAuxo: '#426294',
      blueAuxo: '#01C2D2',
      greenTextAuxo: '#828282',
      greenBgAuxo: '#DDF0F2',
      whiteAuxo: '#FFFFFF',
    },
    extend: {

    },
  },
  plugins: [],
}
