/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#4C1270',
      },
      fontFamily: {
        sans: ['Rogan', 'sans-serif'],
      },
      fontSize: {
        'txt-14': [
          '0.875rem',
          {
            lineHeight: '1.2',
          },
        ],
        'txt-24': [
          '1.5rem',
          {
            lineHeight: '1.2',
          },
        ],
        'txt-32': [
          '1.5rem',
          {
            lineHeight: '1.2',
          },
        ],
        'txt-64': [
          '3.2rem',
          {
            lineHeight: '1.2', //
          },
        ],
      },
      fontWeight: {
        400: '400',
        700: '700',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
