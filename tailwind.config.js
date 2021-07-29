module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      body: "#444444",
      red: {
        light: "#f9bfbf",
        DEFAULT: "#bf2626",
      },
      yellow: {
        light: "#f7e893",
        DEFAULT: "#fed700",
      },
      heading: "#bf2626",
      alternate: "#F5F5F5",
      white: "#FFFFFF",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
