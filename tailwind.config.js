/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Inter:["inter"],
        Light:["estedadLight"],
        kBold:["kalamehbold"],
        Regular:["estedadRegular"],
        lightKalameh:["kalamehlight"]
      },
      fontSize:{
        textIcon:"12px",
        itemMenu:"18px",
        titleHeroSection:"44px",
        scroll:"16px"
      }
    },
  },
  plugins: [],
}