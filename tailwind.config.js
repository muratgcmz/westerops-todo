/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './component/EditMenu.js',
    './pages/index.js',
    
  ],
  theme: {
    screens: {

      'phone': {'max': '440px'},

      'tablet': {'max': '640px'},
      // => @media (min-width: 640px) { ... }
      // 'tablet2': {'max': '740px'},

      'laptop': {'max':'1024px'},
      // => @media (min-width: 1024px) { ... }

      'desktop': {'max':'1280px'},
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      rotate:{
        '270': '270deg',
        '315': '315deg',
      },
      height:{
        '800':'800px',
        '750':'750px',
        '700': '700px',
        '600': '600px',
        '675': '675px',
        '400': '400px',
        '200': '200px',
      }, 

      width:{
        '718':'718px',
        '600':'600px',
        '550':'550px',
        '400':'400px',
        '300':'300px',
        '150':'150px',
      },
     
    },



  },
  plugins: [],
}
