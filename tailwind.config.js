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
    extend: {
      fontSize: {
        // Button Text, Sidebar Text, Small Text(Metadata, Captions)
        xs: "0.75rem", 
        
        sm: "1rem",
  
        md: "1.125rem", 
  
        // Navigation Links and Body Text (Paragraphs)
        base: "1.125rem",
  
        // Sub-Headings
        lg: "1.5rem",
  
        // Section Headings
        xl: "2rem",
  
        // Page Title - Might not be useful
        "2xl": "3rem",
  
        "3xl": "4rem"
      },
      colors: {
          // Primary Colors
          navyblue: "#001F3F",
          darkblue: "#364A6F",
    
          // Accent Colors
          goldenrod: "#D8A31A",
          babyblue: "#E2F0FF",
    
          // Additional Colors 
          purewhite: "#FFFFFF", 
          pureblack: "#000000", 
          puregreen: "#10B387", 
          purered: "#ff4136",
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