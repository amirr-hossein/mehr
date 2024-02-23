/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Inter:["inter"],
        Light:["estedadLight"]
      },
      fontSize:{
        textIcon:"12px",
        itemMenu:"18px",
        titleHeroSection:"44px"
      }
    },
  },
  plugins: [],
}