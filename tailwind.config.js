const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        rubikRegular: ['Regular'],
        rubikMedium: ['Medium'],
        rubikLight: ['Light'],
        rubikBold: ['Bold']
      },
      colors: {
        iplc: {
          DEFAULT: '#00AFA9',
          light: 'rgb(0,175,169,0.7)'
        }
      }
    }
  },
  plugins: [
    require('flowbite/plugin'),
    flowbite.plugin(),
  ],
};