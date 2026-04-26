/** @type {import('tailwindcss').Config} */
export default {
  darkmode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        "primary-container": "#e10600",
        "on-primary-container": "#fff2f0",
        "secondary-container": "#00d2ff",
        "surface": "#131313",
        "surface-container": "#201f1f",
        "surface-container-low": "#1c1b1b",
        "surface-container-lowest": "#0e0e0e",
        "on-surface": "#e5e2e1",
        "on-surface-variant": "#e9bcb5",
        "outline-variant": "#5e3f3a",
      },
      fontFamily: {
        "headline": ["Space Grotesk", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "full": "9999px",
      },
    },
  },

  plugins: [],
}
