const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
    },
    extend: {
      colors: {
        primary: {
          400: "#FE7A00",
          500: "#F7F7F7",
          600: "#F87700",
        },
      },
    },
  },
  plugins: [],
};
