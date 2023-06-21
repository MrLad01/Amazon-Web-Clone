/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/Menu.jsx",
    "./src/components/Body.jsx",
    "./src/pages/Home.jsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Amazon Ember']
      },
      width: {
        '136': '34rem',
      },
      height: {
        '15': '3.75rem',
      }, 
      fontSize: {
        '2sm': '0.9375rem',
      }
    },
  },
  plugins: [],
}

