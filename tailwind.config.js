/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      //sans: ["Poppins", "sans-serif"],
      sans: ["DM Sans", "sans-serif"],
      jet: ["JetBrains Mono", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
