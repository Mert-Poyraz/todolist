/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'table': 'url("https://img.imgyukle.com/2023/06/28/rhN13c.png")',
      },
      fontFamily:{
        school: ['Schoolbell', 'cursive'],
        josef: ['Josefin Sans', 'sans-serif'],       
        gemunu: ['Gemunu Libre', 'sans-serif'],
        open: ['Open Sans', 'sans-serif'], 
      },
      spacing: {
        128: '32rem',
        256: '64rem',
        258: '65rem',
        300: '66rem',
      },
      
    },
  },
  plugins: [],
}