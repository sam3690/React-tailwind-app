// #00040f
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./src/app.jsx", "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0040F",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [require("tailwindcss-rtl")],

};