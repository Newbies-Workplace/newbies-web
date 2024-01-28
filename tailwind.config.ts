import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      red: {
        50: "#FFECED",
        100: "#FFC4C7",
        200: "#FFA7AC",
        300: "#FF7F86",
        400: "#FF666F",
        500: "#FF404B",
        600: "#E83A44",
        700: "#B52D35",
        800: "#8C2329",
        900: "#6B1B20",
      },
      orange: {
        50: "#FEF3EA",
        100: "#FBDABC",
        200: "#F9C99C",
        300: "#F7B06F",
        400: "#F5A153",
        500: "#F38928",
        600: "#DD7D24",
        700: "#AD611C",
        800: "#864B16",
        900: "#663A11",
      },
      green: {
        50: "#EDF5EC",
        100: "#C7DFC3",
        200: "#ACD0A7",
        300: "#86BA7E",
        400: "#6FAD65",
        500: "#4B983F",
        600: "#448A39",
        700: "#356C2D",
        800: "#295423",
        900: "#20401A",
      },
      purple: {
        50: "#F3ECFF",
        100: "#DAC4FF",
        200: "#C8A7FF",
        300: "#AF7FFF",
        400: "#A066FF",
        500: "#8840FF",
        600: "#7C3AE8",
        700: "#612DB5",
        800: "#4B238C",
        900: "#391B6B",
      },
      blue: {
        50: "#EAF2F5",
        100: "#BFD6E0",
        200: "#A0C2D1",
        300: "#74A6BB",
        400: "#5995AE",
        500: "#307A9A",
        600: "#2C6F8C",
        700: "#22576D",
        800: "#1A4355",
        900: "#143341",
      },
    },
    fontWeight: {
      bold: "600",
      black: "900",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
