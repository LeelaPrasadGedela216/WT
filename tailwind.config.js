/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '325px',  // Extra small devices
        '3xl': '1920px', // Extra large devices
      },
    },
  },
  plugins: [],
}

