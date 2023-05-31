/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  theme: {
    extend: {
      transitionProperty: {
        background: "background-color",
      },
      colors: {
        "primary-color": "var(--primary-color)",
        newclr: "var(--newclr)",
      },
    },
  },
  plugins: [],
};
