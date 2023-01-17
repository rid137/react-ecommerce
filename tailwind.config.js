/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": { 
      transform: "rotateY(180deg)", 
    },
    ".preserve-3d": { 
      transformStyle: "preserve-3d", 
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-purple": "rgb(26,115,232)",
        "light-white": "rgba(255, 255, 255, 0.18)"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),Myclass 
  ],
}
