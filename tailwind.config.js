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
        lightKalameh:["kalamehlight"],
        estedadBold:["estedadBold"],
        estedadMediun:["estedadMedium"],
      },
      fontSize:{
        textIcon:"12px",
        itemMenu:"18px",
        titleHeroSection:"44px",
        scroll:"16px",
        titleShowCard:"32px",
        explainShowCard:"20px",
        showMoreProduct:"14px",
        explainMobile:"10px",
        cardDiscountMobile:"8px",
      },
      boxShadow:{
        card:"0px 0px 8px 0px rgba(13, 10, 44, 0.04)"
      }
    },
  },
  plugins: [],
}