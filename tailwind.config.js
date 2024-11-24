/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./App.{js,jsx,ts,tsx}",
    
    "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primaryGradientStart: "#C525FF",
        primaryGradientEnd: "#391EDC",
        cardGradientStart: "#C426FF",
        cardGradientEnd: "#391FDC",
      },
      fontFamily: {
        roboto: ["Roboto"],
      },
    
    },
  },
  plugins: [],
}

