/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/Menu.jsx",
    "./src/components/Body.jsx",
    "./src/pages/Home.jsx",
    "./src/subcomponents/Background.jsx",
    "./src/subcomponents/Cards.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Amazon Ember']
      },
      width: {
        '76':'19rem',
        '78': '19.5rem',
        '136': '34rem',
        '324': '81rem',
      },
      height: {
        '15': '3.75rem',
        '76': '19rem',
        '106':'26.5rem',
        'max': '281.25rem',
      }, 
      fontSize: {
        '2sm': '0.9375rem',
      },
      spacing: {
        '68': '17rem',
        '220': '55rem',
        '284': '71rem',
      }
    },
  },
  plugins: [],
}

