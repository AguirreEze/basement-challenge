module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: "#222a",
        opdark: "#0004",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
