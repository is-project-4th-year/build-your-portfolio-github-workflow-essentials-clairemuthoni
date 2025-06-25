/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#3F3CFF',
        accent: '#D633F5',
        bgLight: 'F8F9FA',
        textDark: '#212529',
        softGray: '#f3f4f6',
      }
    },
  },
  plugins: [],
}

