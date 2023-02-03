/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#ffffff",
      black: "#000000",
      primary: {
        green: "#08AC04",
        blue: "#0F2A6F",
        grey: "#E8E8E8",
      },
      secondary: {
        green: "#084C04",
        blue: "#0F216F",
        grey: "#F8F8F1",
      },
    },
  },
  plugins: [],
};
