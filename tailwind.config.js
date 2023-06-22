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
    backgroundPosition: {
      top: 'top',
      'top-30': 'top -80% center 0',
    },
    extend: {
      backgroundImage: () => ({
        ball: "url('./src/assets/burningWbg.png')",
        ballB: "url('./src/assets/burningBall.jpg')",
      }),
      spacing: {
        "10vh": "10vh",
        "20vh": "20vh",
        "30vh": "30vh",
        "40vh": "40vh",
        "60vh": "60vh",
      },
    },
  },
  plugins: [],
  variants: {
    // backgroundImage: ['responsive'],
    backgroundImage: ["responsive", "hover", "focus"],
  },
};
