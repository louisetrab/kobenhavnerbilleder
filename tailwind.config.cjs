/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#F2F2F0",
      sekundary: "#BFACA4",
      elements: "#59290C",
    },
    extend: {
      fontFamily: {
        paragraph: "'Montserrat', sans-serif",
        header: "'Cinzel Decorative', cursive",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
