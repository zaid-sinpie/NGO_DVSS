/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideImages: {
          "0%, 10%": { transform: "translateX(0)" },
          "15%, 25%": { transform: "translateX(-100%)" },
          "30%, 40%": { transform: "translateX(-200%)" },
          "45%, 55%": { transform: "translateX(-300%)" },
          "60%, 70%": { transform: "translateX(-400%)" },
          "75%, 85%": { transform: "translateX(-500%)" },
          "90%, 100%": { transform: "translateX(-500%)" }, // Slide out the 6th image
        },
      },
      animation: {
        "slide-images": "slideImages 72s infinite ease-in-out", // Adjusted duration to account for the pauses
      },
    },
  },
  plugins: [],
};
