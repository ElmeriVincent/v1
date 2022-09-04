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
      nordpolarnight: "#2E3440",
      nordpolarevening: "#3b4252",
      nordfrostlight: "#8fbcbb",
      nordfrostice: "#88c0d0",
      nordauroraorange: "#d08770",
      nordaurorapink: "#b48ead",
      nordaurorared: "#bf616a",
      nordcream: "#ECEFF4",
      online: "#00ff6a"
    },
    fontFamily: {
      Poppins: ['Poppins']
    },
    keyframes: {
      wave: {
        '0%': { transform: 'rotate(0.0deg)' },
        '10%': { transform: 'rotate(14deg)' },
        '20%': { transform: 'rotate(-8deg)' },
        '30%': { transform: 'rotate(14deg)' },
        '40%': { transform: 'rotate(-4deg)' },
        '50%': { transform: 'rotate(10.0deg)' },
        '60%': { transform: 'rotate(0.0deg)' },
        '100%': { transform: 'rotate(0.0deg)' },
      },
    },
    animation: {
      'waving-hand': 'wave 2s linear infinite',
    },
    variants: {
      fill: ['hover', 'focus']
    },
  },
  plugins: [],
}