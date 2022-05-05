const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/components/**/*.{html,tsx}', './src/pages/**/*.{html,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Helvetica Neue',
          'Arial',
          'Hiragino Kaku Gothic ProN',
          'Hiragino Sans',
          'Meiryo',
          'sans-serif',
          ...defaultTheme.fontFamily.sans,
        ],
        logo: ['QuicksandSubset'],
      },
    },
  },
  plugins: [],
}
