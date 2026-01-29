import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Standard Next.js variables
        background: "var(--background)",
        foreground: "var(--foreground)",

        // THE SOVEREIGN PALETTE
        brand: {
          ivory: "#FDFBF7",    // The base background
          gold: "#C5A059",     // Primary branding
          bronze: "#99732B",   // High-visibility metallic borders
          burgundy: "#2A0A0A", // The "Dindigul" deep red
        },
      },
      fontFamily: {
        display: ["var(--font-cinzel)", "serif"],        // Titles & Branding
        serif: ["var(--font-playfair)", "serif"],       // Sub-headlines & Hero text
        sans: ["var(--font-lato)", "sans-serif"],        // Body copy & UI
      },
      animation: {
        // CINEMATIC ANIMATIONS
        'shimmer': 'shimmer 3s linear infinite',         // For the metallic glint effect
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite', // For the SpiceNebula
        'float': 'float 6s ease-in-out infinite',        // For bobs/floating logos
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-150%) skewX(-20deg)' },
          '100%': { transform: 'translateX(150%) skewX(-20deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        // Custom "Sovereign" Shadow for the big curved cards
        'sovereign': '0 0 35px 5px rgba(153, 115, 43, 0.25), 0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'sovereign-hover': '0 0 70px 15px rgba(153, 115, 43, 0.45), 0 40px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
};

export default config;