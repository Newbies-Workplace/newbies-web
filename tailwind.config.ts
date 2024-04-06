/* biome-ignore lint: */
import type { Config } from "tailwindcss";

const svgToDataUri = require("mini-svg-data-uri");

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#000000",
      gray: {
        50: "#F9FAFB",
        100: "#F3F4F6",
        200: "#E5E7EB",
        300: "#D1D5DB",
        400: "#9CA3AF",
        500: "#6B7280",
        600: "#4B5563",
        700: "#374151",
        800: "#1F2937",
        900: "#111827",
      },
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
      fontFamily: {
        saira: ["Saira", "sans-serif"],
        "lucida-console": ["Lucida Console", "Monaco", "monospace"],
        "ubuntu-mono": ["Ubuntu Mono", "monospace"],
      },
      boxShadow: {
        "neon-red": "0 0 34px 0 #ff4040",
        "neon-orange": "0 0 34px 0 #ffa740",
        "neon-green": "0 0 34px 0 #5bff40",
        "neon-purple": "0 0 34px 0 #8840ff",
        "neon-blue": "0 0 34px 0 #307a9a",
      },
      textShadow: {
        sm: "0 0 2px var(--tw-shadow-color)",
        DEFAULT: "0 0 4px var(--tw-shadow-color)",
        lg: "0 0 16px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    addVariablesForColors,
    ({ matchUtilities, theme }: any) => {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme("backgroundColor")),
          type: "color",
        },
      );
    },
    ({ matchUtilities, theme }: any) => {
      matchUtilities(
        {
          "text-shadow": (value: any) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow"), type: "color" },
      );
    },
  ],
};

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
