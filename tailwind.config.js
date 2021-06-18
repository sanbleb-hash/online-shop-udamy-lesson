module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
'word':['Montserrat']
    },
    extend: {
      spacing:{
        'big': '90%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
