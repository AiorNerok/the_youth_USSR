const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.html"],
  theme: {
    extend: {
      boxShadow: {
        prime: "-2px -2px 10px rgba(102, 85, 182, 0.2)",
      },
    },

    colors: {
      uiColor: {
        gray: "#F7F6F9",
        "gray-2": "#D2D0D7",
        "gray-3": "#F9F9F9",
        white: "#fff",
        violet: "#BCAEFF",
        "violet-1": "#EFE9FF",
        "violet-2": "#8174A5",
        green: "#84f1de",
        "green-2": "#A6F7E2",
        black: "#2C2C2C",
        yellow: "#EFFF90",
      },
      transparent: colors.transparent,
    },
    fontSize: {
      4: "16px",
      3: "14px",
      2: "12px",
      1: "10px",
    },
    fontWeight: {
      light: "300",
      regular: "400",
    },
    fontFamily: {
      gt: "GT",
    },
    screens: {
      screen: "1440px",
      "screen-toggle": "768px",
    },
  },
  plugins: [require("daisyui")],
};
