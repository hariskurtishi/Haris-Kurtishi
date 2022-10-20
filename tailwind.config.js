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
        orange: {
          50: '#ff8b88',
          100: '#ff817e',
          200: '#ff7774',
          300: '#ff6d6a',
          400: '#ff6360',
          500: '#fd5956',
          600: '#f34f4c',
          700: '#e94542',
          800: '#df3b38',
          900: '#d5312e',
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
