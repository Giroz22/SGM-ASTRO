/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {},
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#ce9f44",
              foreground: "#000000",
            },
            focus: "#ce9f44",
            primaryDark: "121e41",
            primarylight: "#ce9f44",
            secondaryDark: "#292526",
            secondarylight: "#838b90",
          },
        },
        // ... custom themes
      },
    }),
  ],
};
