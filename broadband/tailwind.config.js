/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gentle: ["MADE Gentle PERSONAL USE", "sans-serif"],
      },
      keyframes: {
        "arrow-down": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
      },
      animation: {
        "arrow-down": "arrow-down 2s ease infinite",
      },
    },
  },
  plugins: [],
};
