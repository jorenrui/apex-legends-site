module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
       dirt: 'url("/assets/img/dirt.png")'
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
