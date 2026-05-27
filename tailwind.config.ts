import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1A237E",
        signal: "#00C853",
        fog: "#F6F8FC",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 24px 80px rgba(0, 200, 83, 0.22)",
        deep: "0 30px 90px rgba(26, 35, 126, 0.16)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(26,35,126,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(26,35,126,0.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
