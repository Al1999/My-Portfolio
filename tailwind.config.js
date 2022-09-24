/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      'sm': '360px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      backgroundImage : {
      'hero' : "url(../src/assets/DSC00622.jpg)",
      'hero2' :"url(../src/assets/DSC00880.jpg)",
      'herom' :"url(../src/assets/bg_m.jpg)", 
      },
      fontFamily: {
        helvetica:["Helvetica"],
      }
    },
  },
  plugins: [require("daisyui")], 
}
