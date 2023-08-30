/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF0000",
          light: "#FF4D4D",
          dark: "#B30000",
        },
        secondary: {
          DEFAULT: "#000000",
          light: "#333333",
          dark: "#000000",
        },
        background: {
          default: "#FFFFFF",
          inverted: "#000000",
        },
        card: {
          default: "#F5F5F5",
          inverted: "#333333",
        },
        text: {
          default: "#000000",
          inverted: "#FFFFFF",
        },
      },
      fontSize: {
        title: "4rem",
        subtitle: "2rem",
        base: "1rem",
      },

      fontFamily: {
        display: ["YourDisplayFont", "sans"],
        body: ["YourBodyFont", "sans"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
