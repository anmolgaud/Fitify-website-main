/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'gray1' : '#27374D',
        'gray2' : '#0F4C75',
        'gray3' : '#526D82',
        'gray4' : '#DDE6ED',
      },
      fontFamily : {
        'poppins' : "'Poppins', sans-serif",
        'openSans' : "'Open Sans', sans-serif",
      },
      backgroundImage : {
        'aboutHeader' : "url('./images/header_bg_1.jpg')",
        'contactHeader' : "url('./images/header_bg_2.jpg')",
        'galleryHeader' : "url('./images/header_bg_3.jpg')",
        'plansHeader' : "url('./images/header_bg_4.jpg')",
        'trainersHeader' : "url('./images/header_bg_5.jpg')",
        'about1' : "url('./images/about1.jpg')",
        'about2' : "url('./images/about2.jpg')",
        'about3' : "url('./images/about3.jpg')",
      }
    },
  },
  plugins: [],
}