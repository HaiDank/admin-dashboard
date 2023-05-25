/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'homepage' : "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url('/img/home-background.jpg')"
      },
      colors:{
        'black' : '#212121',
        'whitegray' : '#eeeeee',
        'green-accent' : '#1d6d03',
        'green-variant' : '#8ac775',
        'orange-accent': '#f2b963',
      },
      spacing:{
        '18' : '4.5rem',
        '8xl': '1400px',
      }
    },
  },
  plugins: [],
}

