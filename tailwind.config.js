/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-coffee": "#3E3232",
        "dark-puce": "#503C3C",
        "deep-taupe": "#7E6363",
        "burnished-brown": "#A87C7C",
      },
    },
  },
  plugins: [],
};
