/** @type {import('tailwindcss').Config} */
export default {

  darkMode: "selector",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily:{
        playfair: ["Playfair Display, serif"],
        libre:["Libre Baskerville, serif"]

      },
   
    },
  },
  plugins: [],
}

