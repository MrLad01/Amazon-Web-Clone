/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/Menu.jsx",
    "./src/components/Body.jsx",
    "./src/pages/Home.jsx",
    "./src/subcomponents/Background.jsx",
    "./src/subcomponents/Cards.jsx",
    "./src/subcomponents/Slide.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Amazon Ember']
      },
      width: {
        '34': '8.5rem',
        '51': '12.75rem',
        '59': '14.75rem',
        '76': '19rem',
        '78': '19.5rem',
        '109': '27.06rem',
        '136': '34rem',
        '173': '43.3rem',
        '316': '79rem',
        '317': '79.25rem',
        '320': '80rem',
        '324': '81rem',
      },
      height: {
        '15': '3.75rem',
        '29': '7.3rem',
        '51': '12.75rem',
        '61': '15.25rem',
        '65': '16.2rem',
        '71': '17.7rem',
        '76': '19rem',
        '93': '23.25rem',
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
        '480': '120rem',
        '590': '147.5rem',
        '688': '172rem', 
      }
    },
  },
  plugins: [],
}

