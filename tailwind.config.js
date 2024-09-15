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
      },
      scale: {
        '102': '1.02',
      }
    },
  },
  plugins: [],
}