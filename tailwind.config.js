module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
    darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      ringColor: ['hover', 'active', 'focus-within'],
      ringWidth: ['hover', 'active', 'focus-within'],
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
