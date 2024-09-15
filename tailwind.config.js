/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        shRed: '#770c0d',
      },
      height: {
        '112': '28rem',
        '9/10': '90%',
        '19/20': '95%',
      },
      scale: {
        '102': '1.02',
      }
    },
  },
  plugins: [],
}