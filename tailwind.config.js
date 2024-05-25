/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "7xl": "1800px",
      },
      backgroundColor: {
        anshu: "#fff",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {
        "spin-slow": {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
};
className = "h-auto w-10 pt-5 pl-5";
