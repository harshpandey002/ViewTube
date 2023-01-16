/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: [
          "Poppins, sans-serif",
          { fontFeatureSettings: '"cv11", "ss01"' },
        ],
      },
    },
  },
  plugins: [],
};
