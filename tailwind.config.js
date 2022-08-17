/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#fff",
      black: "#000",
      nordpolarnight: "#2e3440",
      nordfrostlight: "#8fbcbb",
      nordfrostice: "#88c0d0",
      nordauroraorange: "#d08770",
      nordaurorapink: "#b48ead",
      nordaurorared: "#bf616a"
    },
    fontFamily: {
      NTR: ['NTR'],
      Poppins: ['Poppins']
    }
  },
  plugins: [],
}