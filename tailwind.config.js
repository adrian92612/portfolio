/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "var(--bg-color)",
        textColor: "var(--text-color)",
        textColor2: "var(--text-color2)",
      },
      fontFamily: {
        baskerville: ['"Baskervville"', "serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInSlideLeft: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        fadeInSlideRight: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        fadeInSlideUp: {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out forwards",
        fadeInSlow: "fadeIn 2s ease-out forwards",
        fadeInSlideLeft: "fadeInSlideLeft 1s ease-out forwards",
        fadeInSlideRight: "fadeInSlideRight 1s ease-out forwards",
        fadeInSlideUp: "fadeInSlideUp 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
