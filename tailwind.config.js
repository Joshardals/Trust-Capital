/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      "xs": "360px", 
      "sm": "576px", 
      "md": "960px", 
      "lg": "1440px", 
    }, 
    colors: {
      // Primary Colors
      blue: "#001F3F",
      green: "#0A3D2D",

      // Accent Colors
      gold: "#FFD700",
      lightGray: "#CCCCCC",

      // Additional Colors
      white: "FFFFFF",
      darkGray: "#333333",
    },
    fontSize: {
      // Button Text, Sidebar Text, Small Text(Metadata, Captions)
      xs: "0.75rem", 
      
      sm: "1rem",

      // Navigation Links and Body Text (Paragraphs)
      base: "1.125rem",

      // Sub-Headings
      lg: "1.5rem",

      // Section Headings
      xl: "2rem",

      // Page Title - Might not be useful
      "2xl": "3rem",
    },
    extend: {
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
      fontFamily: {
        // Header Fonts 
        sans: ["var(--font-open-sans)"], 
        
        // Body Font
        serif: ["var(--font-playfair)"]
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}