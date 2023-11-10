/** @type {import('tailwindcss').Config} */
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
      'primary':'#0f27e9',
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {light:{
        ...require("daisyui/src/colors/themes")["[data-theme=light]"],
        "primary": "#0f27e9",
        "primary:hover":'#ef6ad4',
        '.btn-primary': {
          'border-color':'#ef6ad4'
        },
        '.btn-primary:hover': {
          'border-color':'#ef6ad4'
        }
    }}, {dark:{
    ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
      'primary':'#0f27e9',
      "primary:hover":'#ef6ad4',
      '.btn-primary': {
        'border-color':'#ef6ad4'
      },
      '.btn-primary:hover': {
        'border-color':'#ef6ad4'
      }
    }},
  ],
  },

}
