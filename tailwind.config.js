module.exports = {
  purge: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
        beige: "#F7F5F0",
      },
      fontFamily: {
        uchen: ["Uchen"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
