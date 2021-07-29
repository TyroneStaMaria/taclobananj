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
    fontFamily: {
      heading: ["Source Sans Pro"],
      body: ["Sintony"],
    },
    fontSize: {
      base: "0.875rem",
      h1: "3rem",
      h2: "2rem",
      h3: "1.5rem",
      h4: "1.25rem",
      h5: "1rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
