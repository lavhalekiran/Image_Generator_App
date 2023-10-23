/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        lato:["Lato","sans-serif"],
        opensans:["Open Sans","sans-serif"],
      },
      colors:{
        primary:"#542e71",
        "gray-500":"#1A1A1A"
      }
    },
  },
  plugins: [],
}

