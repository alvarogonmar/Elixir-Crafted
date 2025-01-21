/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: { // Crear mis propias clases, agregar clases
    extend: {
      backgroundImage : {
        "header" : "url('/bg.jpg')"
      }
    },
  },
  plugins: [],
}

