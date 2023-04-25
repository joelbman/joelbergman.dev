/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          950: '#041959',
        },
        sky: {
          950: '#000821',
        },
      },
      fontFamily: {
        barlow: ['"Barlow"', 'sans-serif'],
        robotomono: ['"Roboto Mono"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
