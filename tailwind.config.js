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
        sky: {
          950: '#012a56',
        },
      },
      fontFamily: {
        robotomono: ['"Roboto Mono"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
