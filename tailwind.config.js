// eslint-disable-next-line no-undef
const config = require('tailwindcss/defaultTheme')

// eslint-disable-next-line no-undef
module.exports = {
  content: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Poppins, -apple-system, BlinkMacSystemFont',
      },
      colors: {
        gray: {
          ...config.colors.gray,
          200: '#F4F4F4',
        },

        bluenight: {
          700: '#15212C',
          500: '#E890DA',
        },

        mirage: {
          40: '#EAF0F5',
          50: '#507EA8',
          60: '#D2DEE9',
          100: '#4A749A',
          200: '#3D5F7F',
          300: '#2F4A63',
          400: '#223648',
          500: '#15212C',
          600: '#24394C',
          700: '#192734',
        },
        blue: {
          50: '#EAF0F5',
          100: '#D2DEE9',
          200: '#A9C0D6',
          300: '#7C9FC0',
          400: '#5381AC',
          500: '#3D5F7F',
          600: '#324D67',
          700: '#24394C',
          800: '#192734',
          900: '#0C1218',
          950: '#81AFFC',
        },
        mygreen: {
          100: '#7DC7AB',
        },
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwind-bootstrap-grid')({
      gridGutterWidth: '32px',
      containerMaxWidths: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1280px',
      },
    }),
    // eslint-disable-next-line no-undef
    require('tailwindcss-debug-screens'),
  ],
}
