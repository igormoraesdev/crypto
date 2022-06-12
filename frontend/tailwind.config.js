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
      secondary: ['Open Sans', 'Poppins', 'serif'],
    },
    extend: {
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
      },
    },
  },
  plugins: ['tailwindcss', 'autoprefixer', 'postcss'],
}
