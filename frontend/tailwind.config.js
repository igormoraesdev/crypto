const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/screens/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      ...colors,
    },
    fontFamily: {
      primary: ['Inter', 'Arial', 'sans-serif'],
      secondary: ['Roboto', 'Times New Roman', 'Times', 'serif'],
    },
    extend: {},
  },
  plugins: ['tailwindcss', 'autoprefixer', 'postcss'],
}
