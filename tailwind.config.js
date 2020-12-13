const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: colors.lime,
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      zIndex: {
        1: "1",
      },
      minHeight: {
        page: "calc(100vh - 68px)",
      },
      maxHeight: {
        page: "calc(100vh - 68px)",
      },
      width: {
        100: "32rem",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      textOpacity: ["disabled"],
      transform: ["active"],
    },
  },
  plugins: [],
}
