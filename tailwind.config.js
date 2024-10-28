/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["emerald", "retro"],
  },
  theme: {
    extend: {},
  },

  plugins: [require("daisyui")],
  daisyui:{
    themes:["lemonade"]
  }
};
