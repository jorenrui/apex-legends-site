const IS_PRODUCTION = process.env.NODE_ENV === 'production'

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
       dirt: IS_PRODUCTION
        ? 'url("./img/dirt.png")'
        : 'url("./assets/img/dirt.png")',
      },
      screens: {
        md: '1156px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
