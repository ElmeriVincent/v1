/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#fff",
      black: "#000",
      nordpolarnight: "#2e3440",
      nordfrostlight: "#8fbcbb",
      nordfrostice: "#81a1c1"
    },
    fontFamily: {
      NTR: ['NTR'],
      Poppins: ['Poppins']
    }
  },
  plugins: [],
}