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
        '78': '19.5rem',
        '136': '34rem',
      },
      height: {
        '15': '3.75rem',
        '76': '19rem',
        '106':'26.5rem',
        'max': '281.25rem',
      }, 
      fontSize: {
        '2sm': '0.9375rem',
      }
    },
  },
  plugins: [],
}

