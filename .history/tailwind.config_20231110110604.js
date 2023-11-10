/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    colors: {
      'custom-pink':'#ef6ad4',
      'custom-blue':'#0f27e9',
    },
    extend: {},
  },
  plugins: [plugin(function({ addComponents }) {
    addComponents({
      '.btn-cust': {
        backgroundColor: 'custom-blue !important',
        borderColor: 'custom-pink',
        '&:hover': {
          backgroundColor: 'custom-pink'
        },
      },
    })
  }),
  require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["light", "dark",],
  },

}
