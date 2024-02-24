/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Inter:["inter"],
        Light:["estedadLight"],
        kBold:["kalamehbold"],
        Regular:["estedadRegular"]
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