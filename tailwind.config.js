/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    theme: {
      extend: {
        colors: {
          custom: {
            primary: '#E4D8B4',
            middle: '#3b2f0a',
            secondary: '#2E282A',
          },
        },
      },
    },
  },
  plugins: [],
}

