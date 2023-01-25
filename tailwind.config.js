const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: " #006685",
        "on-primary": " #ffffff",
        "primary-container": " #bfe9ff",
        "on-primary-container": " #001f2a",
        secondary: " #3d6a0e",
        "on-secondary": " #ffffff",
        "secondary-container": " #bcf388",
        "on-secondary-container": " #0d2000",
        tertiary: " #5e5a7d",
        "on-tertiary": " #ffffff",
        "tertiary-container": " #e4dfff",
        "on-tertiary-container": " #1a1836",
        error: " #ba1a1a",
        "error-container": " #ffdad6",
        "on-error": " #ffffff",
        "on-error-container": " #410002",
        background: " #fbfcfe",
        "on-background": " #191c1e",
        surface: " #fbfcfe",
        "on-surface": " #191c1e",
        "surface-variant": " #dce3e9",
        "on-surface-variant": " #40484c",
        outline: " #70787d",
        "inverse-on-surface": " #f0f1f3",
        "inverse-surface": " #2e3133",
        "inverse-primary": " #6dd2ff",
        shadow: " #000000",
        "surface-tint": " #006685",
        "outline-variant": " #c0c8cd",
        scrim: " #000000"
      }
    },
    fontFamily: {
      sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans]
    }
  },
  // darkMode: "class",

  plugins: []
};
