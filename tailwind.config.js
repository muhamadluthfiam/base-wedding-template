/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#bed4df',
        secondary: '#5a6f7a',
        primaryDarker: '#526470',
        navigation: '#6d8997'
      }
    },
  },
  plugins: [],
}