/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F2E9E4",
        secondary: "#4A4E69",
      },
      fontFamily: {
        primary: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
