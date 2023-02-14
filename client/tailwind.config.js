const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}","./public/**/*.html"],
  theme: {
    extend: {
      boxShadow:{
        'prime': '-2px -2px 10px rgba(102, 85, 182, 0.2)'
      }
    },
    colors:{
      "prime":{
        'gray': '#F7F6F9',
        "gray-3":'#F9F9F9',
        'white': '#fff',
        'violet': '#BCAEFF',
        'violet-1': '#EFE9FF',
      },
      'transparent': colors.transparent
    },
    fontSize:{
      '4': '16px',
      '3': '14px',
      '2': '12px',
      '1': '10px'
    },
    fontWeight:{
      'light': '300',
      'regular': '400'
    },
    fontFamily:{
      'gt': 'GT'
    },
    screens:{
      "screen-prime": '1440px'
    }
  },
  plugins: [],
}
