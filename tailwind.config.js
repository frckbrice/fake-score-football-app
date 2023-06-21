/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Philosopher: ["Philosopher"],
      Satisfy: ["Satisfy"],
    },
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: (theme) => ({
        ball: "url('./src/assets/burningWbg.png')",
      }),
    },
  },
  plugins: [],
  variants: {
    // backgroundImage: ['responsive'],
    backgroundImage: ["responsive", "hover", "focus"],
  },
};
