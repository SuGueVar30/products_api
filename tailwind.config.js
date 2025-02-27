import animated from "tailwindcss-animated";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Yesteryear: ["Yesteryear", "sans-serif"],
      Tangerine: ["Tangerine", "sans-serif"],
      Lato: ["Lato", "sans-serif"],
      SonsieOne: ["Sonsie One", "sans-serif"],
      Sail: ["Sail", "sans-serif"],
      RougeScript: ["Rouge Script", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
      Playball: ["Playball", "sans-serif"],
      Oswald: ["Oswald", "sans-serif"],
      NotoSans: ["Noto Sans", "sans-serif"],
      MoonDance: ["Moon Dance", "sans-serif"],
      Montserrat: ["Montserrat", "sans-serif"],
      MedulaOne: ["Medula One", "sans-serif"],
      LobsterTwo: ["Lobster Two", "sans-serif"],
      Lobster: ["Lobster", "sans-serif"],
      Homenaje: ["Homenaje", "sans-serif"],
      DancingScript: ["Dancing Script", "sans-serif"],
      CroissantOne: ["Croissant One", "sans-serif"],
      Audiowide: ["Audiowide", "sans-serif"],
      Arizonia: ["Arizonia", "sans-serif"],
      AntonSC: ["Anton SC", "sans-serif"],
      Anton: ["Anton", "sans-serif"],
    },
    extend: {},
  },
  plugins: [animated],
};
