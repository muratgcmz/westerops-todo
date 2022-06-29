/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './component/EditMenu.js'
    
  ],
  theme: {
    extend: {
      rotate:{
        '270': '270deg',
        '315': '315deg',
      }
    },
  },
  plugins: [],
}
