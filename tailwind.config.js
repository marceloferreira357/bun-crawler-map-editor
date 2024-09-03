/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "charleston-green": "#292929",
        "philippine-gray": "#8A8A8A",
        "dark-liver": "#4E4E4E",
        "sonic-silver": "#777777",
        "quick-silver": "#A2A2A2",
        "american-silver": "#D0D0D0",
        "bright-gray": "#EDEDED",
      },
    },
  },
  plugins: [],
};
