/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage : {
      'hero' : "url(../src/assets/DSC06842.jpg)",
      'hero2' :"url(../src/assets/DJI_0236.jpg)",
      },
      fontFamily: {
        helvetica:["Helvetica"],
      }
    },
  },
  plugins: [require("daisyui")],
}
