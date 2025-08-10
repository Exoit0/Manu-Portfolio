import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        background: "#05060f",
        foreground: "#ffffff",
        accent: "#D8ECF8",
        "text-secondary": "#9ca3af",
        surface: "#1a1b23",
        "border-color": "#2a2d3a",
        card: {
          DEFAULT: "#1a1b23",
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "#1a1b23",
          foreground: "#ffffff",
        },
        primary: {
          DEFAULT: "#D8ECF8",
          foreground: "#05060f",
        },
        secondary: {
          DEFAULT: "#374151",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#374151",
          foreground: "#9ca3af",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        border: "#2a2d3a",
        input: "#2a2d3a",
        ring: "#D8ECF8",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(60px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(216, 236, 248, 0.3)" },
          "100%": { boxShadow: "0 0 30px rgba(216, 236, 248, 0.6)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
