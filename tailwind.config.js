module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Ubuntu", "sans-serif"],
      serif: ["Open Sans", "sans-serif"]
    },
    extend: {
      colors: {
        primary: "#FF7EA7",
        secondary: "#FFBD7E"
      }
    },
  },
  plugins: [],
}
