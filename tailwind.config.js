/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      mainColor: "#006340",
      "text-1": "#293632",
      "text-2": "#2D473E",
    },
  },
  plugins: [],
};
