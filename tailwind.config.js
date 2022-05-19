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
      keyframes: {
        show: {
          '0%': { height: '0%' },
          '1%': { height: '100%' },
          '99%': { height: '100%' },
          '100%': { height: '100%' },
        },
        hide: {
          '0%': { height: '100%' },
          '1%': { height: '100%' },
          '99%': { height: '100%' },
          '100%': { height: '0%' },
        },
      },
      animation: {
        show: 'show 0.5s linear forwards',
        hide: 'hide 0.5s linear forwards',
      },
      typography: ({ theme }) => ({
        common: {
          css: {
            '--tw-prose-headings': '#2A2A2A',
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
