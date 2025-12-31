/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", "./src/utility/**/*.{js,ts,jsx,tsx}", "./src/icons/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(40px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeOutDown: {
          "0%": { opacity: 1, transform: "translateY(0)" },
          "100%": { opacity: 0, transform: "translateY(24px)" },
        },
      },
      animation: {
        scroll: "scroll 30s linear infinite",
        fadeUp: "fadeUp 0.8s ease-out forwards",
        fadeIn: "fadeInUp 0.6s ease-out forwards",
        fadeOut: "fadeOutDown 0.6s ease-in forwards",
      },
    },
  },
  plugins: [],
};
