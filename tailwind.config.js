/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideImages: {
          "0%, 8.33%": { transform: "translateX(0)" },
          "16.66%, 25%": { transform: "translateX(-100%)" },
          "33.33%, 41.66%": { transform: "translateX(-200%)" },
          "50%, 58.33%": { transform: "translateX(-300%)" },
          "66.66%, 75%": { transform: "translateX(-400%)" },
          "83.33%, 91.66%": { transform: "translateX(-500%)" },
          "100%": { transform: "translateX(0%)" },
        },
        slideTopIn: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
      animation: {
        "slide-images": "slideImages 60s infinite linear",
        slideTopIn: 'slideTopIn 1s forwards',
      },
    },
  },
  plugins: [],
};
