/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    letterSpacing: { widest: "1rem" },
    extend: {},
  },
  plugins: [[require("daisyui")]],
};
