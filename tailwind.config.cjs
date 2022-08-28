/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#F2F2F0",
      sekundary: "#BFACA4",
      elements: "#59290C",
      tekst: "#2C2C2C",
    },
    extend: {
      fontFamily: {
        paragraph: "'Montserrat', sans-serif",
        header: "'Mina', sans-serif",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
