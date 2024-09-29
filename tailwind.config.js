/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Primary: ['Noto Sans', 'sans-serif']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
