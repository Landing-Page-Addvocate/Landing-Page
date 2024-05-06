/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }, keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      colors: {
        "colour-secondary-white-100-general": "#fff",
        "colour-main-blue-900": "#091133",
        "colour-main-blue-800": "#111b47",
        "colour-main-blue-500": "#505f98",
        "colour-logo-primary": "#37447e",
        "colour-main-blue-400": "#6f7cb2",
        "colour-main-blue-300": "#445389",
        darkslateblue: {
          "100": "rgba(55, 68, 126, 0.98)",
          "200": "rgba(55, 68, 126, 0.7)",
          "300": "rgba(17, 27, 71, 0.9)",
          "400": "rgba(17, 27, 71, 0.8)",
        },
        steelblue: "rgba(69, 79, 122, 0.8)",
        gray: {
          "100": "rgba(255, 255, 255, 0.9)",
          "200": "rgba(255, 255, 255, 0.8)",
        },
        "colour-main-grey-600": "#5d6970",
        "colour-main-blue-700": "#222f65",
        lavender: "#e7ecff",
        "colour-main-blue-300": "#929ecc",
        lightgray: "#cdd1d4",
        "colour-main-grey-400": "#939ea4",
      },
      spacing: {},
      fontFamily: {
        "medium-16": "Roboto",
      },
    },
    fontSize: {
      base: "16px",
      lg: "18px",
      xl: "20px",
      "31xl": "50px",
      "11xl": "30px",
      "21xl": "40px",
      xs: "12px",
      "7xl": "26px",
      sm: "14px",
      "17xl": "36px",
      "10xl": "29px",
      "3xl": "22px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq600: {
        raw: "screen and (max-width: 600px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      mq360: {
        raw: "screen and (max-width: 360px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
