/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A6262",
        secondary: "#FFFFFF",
        secondaryDark: "#000000",
        accent: {
          orange: "#E1A940",
          green: "#91C499",
        },
      },
    },
  },
  plugins: [],
};


