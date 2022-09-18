/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html", "./public/*.js"],
  theme: {
    minHeight: {
      '800px': '800px',
    },
    extend: {
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
       },
      colors: {
        "almost-white" : "var(--almostWhite)",
        "medium-gray" : "var(--mediumGray)",
        "almost-black" : "var(--almostBlack)"
      },
    },
  },
  plugins: [],
}
