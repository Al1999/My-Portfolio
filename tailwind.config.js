/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage : {
      'hero' : "url(/Users/alkhtabalrashdy/My-Portfolio/src/assets/DJI_0205.jpg)"
      },
      fontFamily: {
        babapro:["BabaPro-Bold"]
      }
    },
  },
  plugins: [],
}
