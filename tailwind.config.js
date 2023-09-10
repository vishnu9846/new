/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        'clash' : ['Clash Grotesk', 'sans-serif'],
        'montserrat' : ['Montserrat', 'sans-serif']
      },
      colors: {
        'primary': '#DEB99E',
        'text-color': '#0D0D0D',
        'text-secondary': '#fff',
      },
      screens:{
        'phone_max':{'max':'768px'},
        'mobile':{'max':'640px'},
        'pc':{'min':'1580px'},
        'ipad':{'max':'920px'},
        'ipad_min':{'max':'480px'},
       }
    },
  },
  plugins: [],
}