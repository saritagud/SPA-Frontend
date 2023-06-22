/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cremaFondo: "#F2EADF",
        marronClaro: "#BF926B",
        marronGris: "#A68776",
        marronOscuro: "#592F25",
        vino: "#400A05",
      },
      fontFamily: {
        CinzelDecorative: ["Cinzel Decorativo", "cursiva"],
        BreeSerif: ["Bree Serif", "serif"],
      },
      screens: {
        p: "250px",
        // => @media (min-width: 250px) { ... }
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }

        ur: "1920px",
        // => @media (min-width: 1920px) { ... }
      },
    },
  },
  plugins: [],
};


