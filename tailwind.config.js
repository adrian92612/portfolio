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
    },
  },
  plugins: [],
};
