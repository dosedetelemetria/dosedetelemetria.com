/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      "ot-white": "#ffffff",
      "ot-bg": "#000906",
      "ot-border": "#ebebe6",

      "ot-yellow-50": "#fffeeb",
      "ot-yellow-100": "#fffbc6",
      "ot-yellow-200": "#fff788",
      "ot-yellow-300": "#ffed4a",
      "ot-yellow-400": "#ffde20",
      "ot-yellow-500-main": "#f7bd06",
      "ot-yellow-600": "#dd9402",
      "ot-yellow-700": "#b76a06",
      "ot-yellow-800": "#94510c",
      "ot-yellow-900": "#7a430d",
      "ot-yellow-950": "#462302",

      "ot-gray-50": "#f6f6f6",
      "ot-gray-100": "#e7e7e7",
      "ot-gray-200": "#d1d1d1",
      "ot-gray-300": "#b0b0b0",
      "ot-gray-400": "#888888",
      "ot-gray-500": "#6d6d6d",
      "ot-gray-600-main": "#606060",
      "ot-gray-700": "#4f4f4f",
      "ot-gray-800": "#454545",
      "ot-gray-900": "#3d3d3d",
      "ot-gray-950": "#262626",
    },
    extend: {},
    fontFamily: {
      'kanit': 'Kanit',
      'inter': 'inter',
    }
  },
  
  plugins: [],
}
