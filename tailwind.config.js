const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui",
      addCommonColors: false,
      defaultTheme: "light",
      defaultExtendTheme: "light",
      layout: {
        borderWidth: {
          small: "1px",
          medium: "2px",
          large: "3px",
        },
      },
      themes: {
        light: {
          container: {
            center: true,
            padding: "3rem"
          },
          screens: {
            'sm': { 'min': '640px', 'max': '767px' },
            'md': { 'min': '768px', 'max': '1023px' },
            'lg': { 'min': '1024px', 'max': '1279px' },
            'xl': { 'min': '1280px', 'max': '1535px' },
            '2xl': { 'min': '1536px' },
          },
          layout: {},
          colors: {
            background: "#EAE7DC",
            foreground: "#03070D",
            primary: {
              foreground: "#FFFFFF",
              DEFAULT: "#FC4445",
            },
            secondary: {
              foreground: "#FFFFFF",
              DEFAULT: "#3366FF"
            },
            focus: "#FC4445",
          },
        },
        dark: {
          layout: {},
          colors: {
            primary: {
              DEFAULT: "#FC4445",
              foreground: "#000000",
            },
            secondary: {
              foreground: "#FFFFFF",
              DEFAULT: "#FC4445"
            },
            focus: "#FC4445",
          },
        },
      },
    }),
  ],
}