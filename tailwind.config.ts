// /** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";
export default <Partial<Config>>{
  darkMode: "class",
  content: [],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      nunito: ["Nunito", ...defaultTheme.fontFamily.sans],
      inter: ["Inter", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
